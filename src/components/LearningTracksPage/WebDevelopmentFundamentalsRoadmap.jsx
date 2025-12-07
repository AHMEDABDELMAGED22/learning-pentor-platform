import TrackIntroduction from "./components/TrackIntroduction.jsx";
import ModuleCards from "./components/ModuleCards.jsx";
import ProgressBar from "./components/ProgressBar.jsx";
import { themes } from "./themes.js";

function WebDevelopmentFundamentalsRoadmap() {
  return (
    <>
      <TrackIntroduction
        TrackTitle="Web Development Fundamentals Roadmap"
        TrackDescription="Embark on your journey to becoming a full-stack web developer. This roadmap covers essential technologies from HTML to React, structured for clear progress and practical application."
      />
      <ProgressBar />
      <ModuleCards
        theme={themes.default}
        ModuleTitle="Module 1: Frontend Core Essentials"
        items={[
          {
            title: "HTML Basics",
            description: "Learn the foundation of web structure with HTML elements and attributes.",
            photo: "/assests/Imgs/page3/HTM_Course.svg"
          },
          {
            title: "CSS Basics",
            description: "Style web pages with CSS properties, layouts, and selectors.",
            photo: "/assests/Imgs/page3/CSS_Course.svg"
          },
          {
            title: "JavaScript Basics",
            description: "Learn interactivity and logic through JavaScript fundamentals.",
            photo: "/assests/Imgs/page3/JS_Course.svg"
          }
        ]}
      />
      <ModuleCards
        theme={themes.default}
        ModuleTitle="Module 2: Building Interactive UIs"
        items={[
          {
            title: "DOM Manipulation",
            description: "Learn how to interact with the DOM to create dynamic experiences.",
            photo: "/assests/Imgs/page3/DOM_Course.svg"
          },
          {
            title: "Events",
            description: "Master event handling to make applications responsive and interactive.",
            photo: "/assests/Imgs/page3/Events_Course.svg"
          },
          {
            title: "Intro to Frameworks",
            description: "Get familiar with modern UI libraries like React.",
            photo: "/assests/Imgs/page3/Framwork_Course.svg"
          }
        ]}
      />
      <ModuleCards
        theme={themes.default}
        ModuleTitle="Module 3: Advanced Concepts & Deployment"
        items={[
          {
            title: "HTML Basics",
            description: "Learn the foundation of web structure with HTML elements and attributes.",
            photo: "/assests/Imgs/page3/HTM_Course.svg"
          },
          {
            title: "CSS Basics",
            description: "Style web pages with CSS properties, layouts, and selectors.",
            photo: "/assests/Imgs/page3/CSS_Course.svg"
          },
          {
            title: "JavaScript Basics",
            description: "Learn interactivity and logic through JavaScript fundamentals.",
            photo: "/assests/Imgs/page3/JS_Course.svg"
          }
        ]}
      />
    </>
  );
}

export default WebDevelopmentFundamentalsRoadmap;
