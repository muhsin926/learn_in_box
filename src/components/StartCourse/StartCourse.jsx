import React from "react";
import {
  booked,
  ideaIcon,
  imageIcon,
  mainBg,
  mainRound,
  miniRound,
  polygon,
  rightArrowIcon,
  shadowBg,
} from "../../assets";
import Button from "../Common/Button";

const StartCourse = () => {
  return (
    <section className="items-center grid grid-cols-12 py-10 px-14 relative">
      <div className="col-span-12 md:col-span-6 flex flex-col justify-end h-96 items-center ">
        <h1 className="font-semibold text-4xl">
          Practical Learning Journey To Earn With Fun - LearnInbox
        </h1>
        <div className="flex flex-col sm:flex-row items-center mt-16">
          <Button
            title={"Start Course Now"}
            stlye={
              "flex items-center gap-3 bg-black text-white py-3 px-5 rounded-lg"
            }
            icon={rightArrowIcon}
          />
          <img className="ml-12 sm:mt-0 mt-5 " src={booked} alt="" />
        </div>
      </div>
      <div className="hidden md:block col-span-6 relative h-96 min-w-[39rem] ">
        <img src={mainRound} className="absolute w-[450px] right-16" alt="" />
        <img src={shadowBg} className="absolute top-14 -right-12" alt="" />
        <img
          src={mainBg}
          className="absolute top-12 right-[84px] w-[550px]"
          alt=""
        />
        <img src={imageIcon} className="absolute top-72 left-6" alt="" />
        <img src={miniRound} className="absolute top-8 left-40" alt="" />
        <img src={ideaIcon} className="absolute right-24" alt="" />
        <img src={polygon} className="absolute top-64 right-8" alt="" />
      </div>
    </section>
  );
};

export default StartCourse;
