import React from "react";
import { AchievementCard, FindCourse, FocusOnSkill, Footer, GuaranteeMessage, LearningProcess, Mentor, MentorSupport, Navbar, StartCourse } from "./components";

const App = () => (
    <>
      <Navbar />
      <StartCourse />
      <FindCourse/>
      <MentorSupport/>
      <FocusOnSkill/>
      <LearningProcess/>
      <GuaranteeMessage/>
      <Mentor/>
      <AchievementCard/>
      <Footer/>
    </>
  );

export default App;
