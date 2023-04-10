import React from "react";
import MiniHeader from "../Common/MiniHeader";
import { graduationIcon } from "../../assets";
import { focusOnSkill } from "../../constants";

const FocusOnSkill = () => {
  return (
    <>
      <MiniHeader
        icon={graduationIcon}
        title={"Focus on the skills you need"}
        description={"Prepare to achieve your goals with private Mentors"}
      />
      <section className="grid grid-cols-12 sm:mx-7 mt-10">
        {focusOnSkill?.map((data) => (
          <div className="col-span-12 sm:col-span-6 text-center p-5">
            <div className="flex gap-3 sm:pl-16">
              <img className="w-12 h-12" src={data?.icon} alt="Icon" />
              <div className="text-start">
                <h2 className="capitalize font-semibold text-lg text-gray-800">
                  {data?.title}
                </h2>
                <p className="capitalize">{data?.description}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default FocusOnSkill;
