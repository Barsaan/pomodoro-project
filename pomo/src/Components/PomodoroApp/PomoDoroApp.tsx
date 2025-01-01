import React, { useState, useEffect } from "react";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
// import { PieChart, Pie, Cell } from "recharts";
// import TodoList from "../Todo/TodoList";
import { Tooltip as ReactTooltip } from 'react-tooltip'

const PomodoroApp = () => {

  const [activeTab, setActiveTab] = useState("pomodoro");
  const [seconds, setSeconds] = useState(1500);
  const [isActive, setIsActive] = useState(false);

  const [pomodoro, setPomodoro] = useState(1500);
  const [shortBreak, setShortBreak] = useState(300);
  const [longBreak, setLongBreak] = useState(900);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      notific();
      resetTimer(activeTab);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  });

 const totalRemainingTime = () => {
    switch (activeTab) {
      case "pomodoro":
        return pomodoro;
      case "shortBreak":
        return shortBreak;
      case "longBreak":
        return longBreak;
      default:
        return 0;
    }
  };

  useEffect(() => {
    const formattedTime = formatTime(seconds);

    switch (activeTab) {
      case "pomodoro":
        document.title = `${formattedTime} - Time to focus!`;
        break;
      case "shortBreak":
      case "longBreak":
        document.title = `${formattedTime} - Time for a break!`;
        break;
      default:
        document.title = `${formattedTime} - Pomodoro Timer`;
    }
  }, [seconds, activeTab]);

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
    resetTimer(tab);
  };

  const resetTimer = (tab: React.SetStateAction<string>) => {
    setIsActive(false);
    switch (tab) {
      case "pomodoro":
        setSeconds(pomodoro);
        break;
      case "shortBreak":
        setSeconds(shortBreak);
        break;
      case "longBreak":
        setSeconds(longBreak);
        break;
      default:
        setSeconds(pomodoro);
    }
  };

  const handleStartPause = () => {
    setIsActive(!isActive);
  };

  const handleRestart = () => {
    resetTimer(activeTab);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const notific = () => {
    if (Notification.permission === "granted") {
      new Notification("Timer ended", {
        body: "You completed a pomodoro",
      });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Timer ended", {
            body: "The time is up",
            tag: "You completed a pomodoro",
          });
        }
      });
    }
  };

  return (
    <div className="tab-container">
      <div className="tab-buttons">
        <button
          className={activeTab === "pomodoro" ? "active-tab" : "button"}
          onClick={() => handleTabClick("pomodoro")}
          data-tooltip-id={
            isActive && activeTab !== "pomodoro" ? "my-tooltip" : ""
          }
          data-tooltip-content={
            isActive && activeTab !== "pomodoro"
              ? "Existing time will be stopped"
              : ""
          }
        >
          Pomodoro
        </button>
        <button
          className={activeTab === "shortBreak" ? "active-tab" : "button"}
          onClick={() => handleTabClick("shortBreak")}
          data-tooltip-id={
            isActive && activeTab !== "shortBreak" ? "my-tooltip" : ""
          }
          data-tooltip-content={
            isActive && activeTab !== "shortBreak"
              ? "Existing time will be stopped"
              : ""
          }
        >
          Short Break
        </button>
        <button
          className={
            activeTab === "longBreak" ? "active-tab" : "longBreakbutton"
          }
          onClick={() => handleTabClick("longBreak")}
          data-tooltip-id={
            isActive && activeTab !== "longBreak" ? "my-tooltip" : ""
          }
          data-tooltip-content={
            isActive && activeTab !== "longBreak"
              ? "Existing time will be stopped"
              : ""
          }
        >
          Long Break
        </button>
      </div>

      

      <div className="scroll-img-sec">
        {/* <img className="scroll-img" src="./Frame 26086574.png" alt="" /> */}
        <svg
         
          width="840"
          height="145"
          viewBox="0 0 840 145"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Frame 26086579">
            <g clip-path="url(#clip0_6_262)">
              <g id="slider2">
                <g id="Mask group">
                  <mask
                    className="mask"
                    id="mask0_6_262"
                    maskUnits="userSpaceOnUse"
                    x="-310"
                    y="50"
                    width="2879"
                    height="90"
                  >
                    <g id="Group 9243">
                      <g id="Frame 26086549">
                        <path id="Vector 603" d="M0 50V82" stroke="#C9C9C9" />
                        <path id="Vector 604" d="M12 50V82" stroke="#C9C9C9" />
                        <path id="Vector 605" d="M24 50V82" stroke="#C9C9C9" />
                        <path id="Vector 606" d="M36 50V82" stroke="#C9C9C9" />
                        <path id="Vector 786" d="M48 50V82" stroke="#C9C9C9" />
                        <path
                          id="Vector 607"
                          d="M60 50V110"
                          stroke="#C9C9C9"
                          stroke-width="3"
                        />
                        <path id="Vector 610" d="M72 50V82" stroke="#C9C9C9" />
                        <path id="Vector 615" d="M84 50V82" stroke="#C9C9C9" />
                        <path id="Vector 620" d="M96 50V82" stroke="#C9C9C9" />
                        <path id="Vector 625" d="M108 50V82" stroke="#C9C9C9" />
                        <path id="Vector 787" d="M120 50V82" stroke="#C9C9C9" />
                        <path
                          id="Vector 608"
                          d="M132 50V98"
                          stroke="#C9C9C9"
                          stroke-width="2"
                        />
                        <path id="Vector 611" d="M144 50V82" stroke="#C9C9C9" />
                        <path id="Vector 616" d="M156 50V82" stroke="#C9C9C9" />
                        <path id="Vector 621" d="M168 50V82" stroke="#C9C9C9" />
                        <path id="Vector 626" d="M180 50V82" stroke="#C9C9C9" />
                        <path id="Vector 788" d="M192 50V82" stroke="#C9C9C9" />
                        <path
                          id="Vector 609"
                          d="M204 50V98"
                          stroke="#C9C9C9"
                          stroke-width="2"
                        />
                        <path id="Vector 612" d="M216 50V82" stroke="#C9C9C9" />
                        <path id="Vector 617" d="M228 50V82" stroke="#C9C9C9" />
                        <path id="Vector 789" d="M240 50V82" stroke="#C9C9C9" />
                        <path id="Vector 622" d="M252 50V82" stroke="#C9C9C9" />
                        <path id="Vector 627" d="M264 50V82" stroke="#C9C9C9" />
                        <path
                          id="Vector 630"
                          d="M276 50V98"
                          stroke="#C9C9C9"
                          stroke-width="2"
                        />
                        <path id="Vector 613" d="M288 50V82" stroke="#C9C9C9" />
                        <path id="Vector 618" d="M300 50V82" stroke="#C9C9C9" />
                        <path id="Vector 790" d="M312 50V82" stroke="#C9C9C9" />
                        <path id="Vector 623" d="M324 50V82" stroke="#C9C9C9" />
                        <path id="Vector 628" d="M336 50V82" stroke="#C9C9C9" />
                        <path
                          id="Vector 631"
                          d="M348 50V98"
                          stroke="#C9C9C9"
                          stroke-width="2"
                        />
                        <path id="Vector 614" d="M360 50V82" stroke="#C9C9C9" />
                        <path id="Vector 619" d="M372 50V82" stroke="#C9C9C9" />
                        <path id="Vector 624" d="M384 50V82" stroke="#C9C9C9" />
                        <path id="Vector 791" d="M396 50V82" stroke="#C9C9C9" />
                        <path id="Vector 629" d="M408 50V82" stroke="#C9C9C9" />
                        <path
                          id="Vector 632"
                          d="M420 50V110"
                          stroke="#C9C9C9"
                          stroke-width="3"
                        />
                        <path id="Vector 635" d="M432 50V82" stroke="#C9C9C9" />
                        <path id="Vector 640" d="M444 50V82" stroke="#C9C9C9" />
                        <path id="Vector 645" d="M456 50V82" stroke="#C9C9C9" />
                        <path id="Vector 650" d="M468 50V82" stroke="#C9C9C9" />
                        <path id="Vector 792" d="M480 50V82" stroke="#C9C9C9" />
                        <path
                          id="Vector 633"
                          d="M492 50V98"
                          stroke="#C9C9C9"
                          stroke-width="2"
                        />
                        <path id="Vector 636" d="M504 50V82" stroke="#C9C9C9" />
                        <path id="Vector 793" d="M516 50V82" stroke="#C9C9C9" />
                        <path id="Vector 641" d="M528 50V82" stroke="#C9C9C9" />
                        <path id="Vector 646" d="M540 50V82" stroke="#C9C9C9" />
                        <path id="Vector 651" d="M552 50V82" stroke="#C9C9C9" />
                        <path
                          id="Vector 634"
                          d="M564 50V98"
                          stroke="#C9C9C9"
                          stroke-width="2"
                        />
                        <path id="Vector 637" d="M576 50V82" stroke="#C9C9C9" />
                        <path id="Vector 794" d="M588 50V82" stroke="#C9C9C9" />
                        <path id="Vector 642" d="M600 50V82" stroke="#C9C9C9" />
                        <path id="Vector 647" d="M612 50V82" stroke="#C9C9C9" />
                        <path id="Vector 652" d="M624 50V82" stroke="#C9C9C9" />
                        <path
                          id="Vector 655"
                          d="M636 50V98"
                          stroke="#C9C9C9"
                          stroke-width="2"
                        />
                        <path id="Vector 638" d="M648 50V82" stroke="#C9C9C9" />
                        <path id="Vector 643" d="M660 50V82" stroke="#C9C9C9" />
                        <path id="Vector 795" d="M672 50V82" stroke="#C9C9C9" />
                        <path id="Vector 648" d="M684 50V82" stroke="#C9C9C9" />
                        <path id="Vector 653" d="M696 50V82" stroke="#C9C9C9" />
                        <path
                          id="Vector 656"
                          d="M708 50V98"
                          stroke="#C9C9C9"
                          stroke-width="2"
                        />
                        <path id="Vector 639" d="M720 50V82" stroke="#C9C9C9" />
                        <path id="Vector 796" d="M732 50V82" stroke="#C9C9C9" />
                        <path id="Vector 644" d="M744 50V82" stroke="#C9C9C9" />
                        <path id="Vector 649" d="M756 50V82" stroke="#C9C9C9" />
                        <path id="Vector 654" d="M768 50V82" stroke="#C9C9C9" />
                        <path
                          id="Vector 657"
                          d="M780 50V110"
                          stroke="#C9C9C9"
                          stroke-width="3"
                        />
                        <path id="Vector 660" d="M792 50V82" stroke="#C9C9C9" />
                        <path id="Vector 665" d="M804 50V82" stroke="#C9C9C9" />
                        <path id="Vector 670" d="M816 50V82" stroke="#C9C9C9" />
                        <path id="Vector 797" d="M828 50V82" stroke="#C9C9C9" />
                        <path id="Vector 675" d="M840 50V82" stroke="#C9C9C9" />
                      </g>
                      <g id="Frame 26086552">
                        <path
                          id="15"
                          d="M57.1929 124.818L57.1929 135L55.6517 135L55.6517 126.359L55.5921 126.359L53.156 127.95L53.156 126.479L55.6965 124.818L57.1929 124.818ZM63.308 135.139C62.6849 135.139 62.1247 135.02 61.6276 134.781C61.1337 134.539 60.7393 134.208 60.4443 133.787C60.1494 133.366 59.9919 132.885 59.972 132.345L61.4635 132.345C61.5 132.783 61.6939 133.142 62.0452 133.424C62.3965 133.706 62.8174 133.847 63.308 133.847C63.6991 133.847 64.0454 133.757 64.347 133.578C64.652 133.396 64.8906 133.146 65.0629 132.827C65.2386 132.509 65.3264 132.146 65.3264 131.739C65.3264 131.324 65.2369 130.955 65.058 130.63C64.879 130.305 64.6321 130.05 64.3172 129.864C64.0057 129.679 63.6477 129.584 63.2433 129.581C62.9351 129.581 62.6252 129.634 62.3137 129.74C62.0021 129.846 61.7502 129.985 61.558 130.158L60.151 129.949L60.7227 124.818L66.3208 124.818L66.3208 126.136L62.0004 126.136L61.6773 128.984L61.7369 128.984C61.9358 128.792 62.1993 128.631 62.5274 128.502C62.8589 128.373 63.2135 128.308 63.5914 128.308C64.2111 128.308 64.763 128.456 65.2469 128.751C65.7341 129.046 66.1169 129.448 66.3953 129.959C66.6771 130.466 66.8163 131.049 66.8129 131.709C66.8163 132.368 66.6671 132.957 66.3655 133.474C66.0672 133.991 65.6529 134.398 65.1226 134.697C64.5956 134.992 63.9907 135.139 63.308 135.139Z"
                          fill="white"
                        />
                        <path
                          id="25"
                          d="M412.346 135L412.346 133.886L415.791 130.317C416.159 129.929 416.462 129.589 416.701 129.298C416.943 129.003 417.123 128.723 417.243 128.457C417.362 128.192 417.422 127.911 417.422 127.612C417.422 127.274 417.342 126.982 417.183 126.737C417.024 126.489 416.807 126.298 416.532 126.165C416.257 126.03 415.947 125.962 415.602 125.962C415.237 125.962 414.919 126.036 414.647 126.185C414.376 126.335 414.167 126.545 414.021 126.817C413.875 127.089 413.802 127.407 413.802 127.771L412.336 127.771C412.336 127.152 412.478 126.61 412.763 126.146C413.048 125.682 413.439 125.322 413.937 125.067C414.434 124.808 414.999 124.679 415.632 124.679C416.272 124.679 416.835 124.807 417.322 125.062C417.813 125.314 418.196 125.658 418.471 126.096C418.746 126.53 418.883 127.021 418.883 127.567C418.883 127.945 418.812 128.315 418.669 128.676C418.53 129.037 418.287 129.44 417.939 129.884C417.591 130.325 417.107 130.86 416.487 131.49L414.464 133.608L414.464 133.683L419.047 133.683L419.047 135L412.346 135ZM424.292 135.139C423.669 135.139 423.109 135.02 422.612 134.781C422.118 134.539 421.724 134.208 421.429 133.787C421.134 133.366 420.976 132.885 420.956 132.345L422.448 132.345C422.484 132.783 422.678 133.142 423.03 133.424C423.381 133.706 423.802 133.847 424.292 133.847C424.683 133.847 425.03 133.757 425.331 133.578C425.636 133.396 425.875 133.146 426.047 132.827C426.223 132.509 426.311 132.146 426.311 131.739C426.311 131.324 426.221 130.955 426.042 130.63C425.863 130.305 425.616 130.05 425.302 129.864C424.99 129.679 424.632 129.584 424.228 129.581C423.919 129.581 423.61 129.634 423.298 129.74C422.986 129.846 422.735 129.985 422.542 130.158L421.135 129.949L421.707 124.818L427.305 124.818L427.305 126.136L422.985 126.136L422.662 128.984L422.721 128.984C422.92 128.792 423.184 128.631 423.512 128.502C423.843 128.373 424.198 128.308 424.576 128.308C425.196 128.308 425.747 128.456 426.231 128.751C426.718 129.046 427.101 129.448 427.38 129.959C427.661 130.466 427.801 131.049 427.797 131.709C427.801 132.368 427.651 132.957 427.35 133.474C427.052 133.991 426.637 134.398 426.107 134.697C425.58 134.992 424.975 135.139 424.292 135.139Z"
                          fill="white"
                        />
                        <path
                          id="30"
                          d="M775.494 135.139C774.811 135.139 774.201 135.022 773.664 134.786C773.131 134.551 772.708 134.224 772.397 133.807C772.088 133.386 771.923 132.899 771.899 132.345L773.46 132.345C773.48 132.647 773.581 132.909 773.764 133.131C773.949 133.349 774.191 133.518 774.49 133.638C774.788 133.757 775.119 133.817 775.484 133.817C775.885 133.817 776.24 133.747 776.548 133.608C776.859 133.469 777.103 133.275 777.279 133.026C777.454 132.774 777.542 132.484 777.542 132.156C777.542 131.815 777.454 131.515 777.279 131.256C777.106 130.995 776.853 130.789 776.518 130.64C776.187 130.491 775.786 130.416 775.315 130.416L774.455 130.416L774.455 129.163L775.315 129.163C775.693 129.163 776.024 129.095 776.309 128.96C776.598 128.824 776.823 128.635 776.985 128.393C777.148 128.147 777.229 127.861 777.229 127.533C777.229 127.218 777.158 126.944 777.015 126.712C776.876 126.477 776.677 126.293 776.419 126.161C776.163 126.028 775.862 125.962 775.514 125.962C775.182 125.962 774.872 126.023 774.584 126.146C774.299 126.265 774.067 126.437 773.888 126.663C773.709 126.885 773.613 127.152 773.6 127.463L772.113 127.463C772.13 126.913 772.292 126.429 772.6 126.011C772.912 125.594 773.323 125.267 773.833 125.032C774.344 124.797 774.911 124.679 775.534 124.679C776.187 124.679 776.75 124.807 777.224 125.062C777.701 125.314 778.069 125.65 778.328 126.071C778.59 126.492 778.719 126.953 778.715 127.453C778.719 128.023 778.56 128.507 778.238 128.905C777.92 129.303 777.496 129.569 776.965 129.705L776.965 129.785C777.642 129.888 778.165 130.156 778.536 130.59C778.911 131.024 779.097 131.563 779.093 132.206C779.097 132.766 778.941 133.268 778.626 133.712C778.314 134.156 777.889 134.506 777.348 134.761C776.808 135.013 776.19 135.139 775.494 135.139ZM784.517 135.169C783.732 135.166 783.061 134.959 782.504 134.548C781.947 134.137 781.521 133.538 781.226 132.753C780.931 131.967 780.784 131.021 780.784 129.914C780.784 128.81 780.931 127.867 781.226 127.085C781.524 126.303 781.952 125.706 782.509 125.295C783.069 124.884 783.738 124.679 784.517 124.679C785.296 124.679 785.964 124.886 786.521 125.3C787.078 125.711 787.504 126.308 787.799 127.09C788.097 127.869 788.246 128.81 788.246 129.914C788.246 131.024 788.099 131.972 787.804 132.758C787.509 133.54 787.083 134.138 786.526 134.553C785.969 134.964 785.3 135.169 784.517 135.169ZM784.517 133.842C785.207 133.842 785.745 133.505 786.133 132.832C786.524 132.16 786.72 131.187 786.72 129.914C786.72 129.069 786.63 128.355 786.451 127.771C786.276 127.185 786.022 126.741 785.691 126.439C785.362 126.134 784.971 125.982 784.517 125.982C783.831 125.982 783.293 126.32 782.902 126.996C782.51 127.672 782.313 128.645 782.31 129.914C782.31 130.763 782.398 131.48 782.573 132.067C782.752 132.65 783.006 133.093 783.334 133.394C783.662 133.692 784.057 133.842 784.517 133.842Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </mask>
                  <g mask="url(#mask0_6_262)">
                    <rect
                      id="Rectangle 6531"
                      width="840"
                      height="145"
                      rx="11"
                      fill="url(#paint0_linear_6_262)"
                    />
                  </g>
                </g>
              </g>
              <path
                id="Polygon 11"
                d="M420 33L412.206 19.5L427.794 19.5L420 33Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_6_262"
              x1="0"
              y1="72.5"
              x2="840"
              y2="72.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0210716" stop-color="#C9C9C9" stop-opacity="0" />
              <stop offset="0.49" stop-color="#C9C9C9" />
              <stop offset="0.975933" stop-color="#C9C9C9" stop-opacity="0" />
            </linearGradient>
            <clipPath id="clip0_6_262">
              <rect width="840" height="145" rx="11" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="section-timer">
        <div className="section-time">
          <div className="timer-content">
            <div className="restart-btn-sec">
              <button className="btn-restart" onClick={handleRestart}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 8.49933V8.29932C14.5 6.61923 14.5 5.77919 14.173 5.13747C13.8854 4.573 13.4265 4.11406 12.8621 3.82643C12.2204 3.49944 11.3803 3.4994 9.70023 3.49932L6.50098 3.49917C6.5002 3.49917 6.49981 3.49917 6.49949 3.49917C4.84309 3.49945 3.50036 4.84211 3.5 6.49851C3.5 6.49884 3.5 6.49923 3.5 6.5V6.5M14.5 8.49933L16.5 7M14.5 8.49933L12.5 7"
                    stroke="#AAAAAA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.5 9.50067L3.5 9.70068C3.5 11.3808 3.5 12.2208 3.82696 12.8625C4.11456 13.427 4.57348 13.8859 5.13794 14.1736C5.77964 14.5006 6.61969 14.5006 8.29977 14.5007L11.499 14.5008C11.4998 14.5008 11.5002 14.5008 11.5005 14.5008C13.1569 14.5006 14.4996 13.1579 14.5 11.5015C14.5 11.5012 14.5 11.5008 14.5 11.5V11.5M3.5 9.50067L1.5 11M3.5 9.50067L5.5 11"
                    stroke="#AAAAAA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            <h1 className="main-time">{formatTime(seconds)}</h1>
            <button className="btn-restart" onClick={handleRestart}>
              <img src="./Frame 26086545.png" alt="" />
            </button>
          </div>
          <div className="control-sec">
            <div className="control-btn">
              <button
                id="pauseBtn"
                className="pause-btn"
                onClick={handleStartPause}
              >
                {isActive ? <FaPause /> : <FaPlay />}
              </button>
            </div>
             {isActive && (
            <ReactTooltip place="bottom" id="my-tooltip">
              Existing time will be stopped
            </ReactTooltip>
          )}
          </div>
          <div className="create-project-sec">
            {/* <select name=" Choose  project" id="">
    <option value="">sdfvcsdv</option>
  </select> */}

            <p className="choose-project">Choose project</p>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 6.75L9 11.25L13.5 6.75"
                stroke="#C9C9C9"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PomodoroApp;
