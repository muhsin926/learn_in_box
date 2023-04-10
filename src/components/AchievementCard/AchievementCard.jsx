import React from "react";
import { achievement_img, logo } from "../../assets";
import Button from "../Common/Button";

const AchievementCard = () => {
  return (
    <section className="mt-16 px-2 relative mb-10">
      <div>
        <img className="" src={achievement_img} alt="Image" />
        <div className="xl:block hidden rounded absolute left-[36rem] top-[25.5rem] w-34 py-3 px-5 bg-gray-200">
          <img className="w-44" src={logo} alt="Text" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 mt-10 text-center">
        <h1 className="capitalize font-semibold text-3xl">
          Hundreds of thousands students join us monthly
        </h1>
        <p className="capitalize font-medium text-xl">
          and achieve their learning goals. With our expert tutors, your goals
          are closer than ever!
        </p>
        <Button
          title={"Start Learning"}
          stlye={
            "py-3 px-5 bg-[#3eb4be] rounded-md text-white font-semibold text-xl"
          }
        />
      </div>
    </section>
  );
};

export default AchievementCard;
