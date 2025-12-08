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

        title1="HTML Basics"
        paragraphText1="Learn the foundation of web structure with HTML elements and attributes."
        photo1="/assests/Imgs/page3/HTM_Course.svg"
        card1FieldId={1}
        card1ArticleId={1}

        title2="CSS Basics"
        paragraphText2="Style web pages with CSS properties, layouts, and selectors."
        photo2="/assests/Imgs/page3/CSS_Course.svg"
        card2FieldId={1}
        card2ArticleId={7}

        title3="JavaScript Basics"
        paragraphText3="Learn interactivity and logic through JavaScript fundamentals."
        photo3="/assests/Imgs/page3/JS_Course.svg"
        card3FieldId={1}
        card3ArticleId={2}
      />

      <ModuleCards
        theme={themes.default}
        ModuleTitle="Module 2: Building Interactive UIs"

        title1="DOM Manipulation"
        paragraphText1="Learn how to interact with the DOM to create dynamic experiences."
        photo1="/assests/Imgs/page3/DOM_Course.svg"
        card1FieldId={1}
        card1ArticleId={3}

        title2="Events"
        paragraphText2="Master event handling to make applications responsive and interactive."
        photo2="/assests/Imgs/page3/Events_Course.svg"
        card2FieldId={1}
        card2ArticleId={4}

        title3="Intro to Frameworks"
        paragraphText3="Get familiar with modern UI libraries like React."
        photo3="/assests/Imgs/page3/Framwork_Course.svg"
        card3FieldId={1}
        card3ArticleId={5}
      />

      <ModuleCards
        theme={themes.default}
        ModuleTitle="Module 3: Advanced Concepts & Deployment"

        title1="APIs"
        paragraphText1="Understand how to fetch and use data from APIs."
        photo1="/assests/Imgs/page3/API_Course.svg"
        card1FieldId={1}
        card1ArticleId={6}

        title2="Version Control"
        paragraphText2="Collaborate with Git and manage code versions effectively."
        photo2="/assests/Imgs/page3/Version_Course.svg"
        card2FieldId={1}
        card2ArticleId={8}

        title3="Deployment"
        paragraphText3="Deploy projects on services like Netlify, Vercel, or GitHub Pages."
        photo3="/assests/Imgs/page3/Deplo_Course.svg"
        card3FieldId={1}
        card3ArticleId={9}
      />
    </>
  );
}

export default WebDevelopmentFundamentalsRoadmap;
