import React from "react";
import { AchievementCard, FindCourse, FocusOnSkill, GuaranteeMessage, LearningProcess, Mentor, MentorSupport, Navbar, StartCourse } from "./components";

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
    </>
  );

export default App;
