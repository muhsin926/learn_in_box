import React from "react";
import { montoring } from "../../constants";
import { mentor_img } from "../../assets";

const Mentor = () => {
  return (
    <section className="mx-10 mt-10">
      <div>
        <h1 className="capitalize font-semibold text-3xl">
          Mentor With <span className="text-[#639]">LEARN</span>
          <span className="text-[#e60f7f]">INBOX</span>
        </h1>
        <p className="capitalize font-medium text-xl mt-2">
          Earn money sharing your expert knowledge with students. Sign up to
          start tutoring online with Preply.
        </p>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-6 mt-7">
          {montoring?.map((data) => (
            <div key={data?.id} className="flex gap-3 mb-3 justify-center">
              <div>
                <img className="w-6" src={data?.icon} alt="icon" />
              </div>
              <div className="text-[#3eb4be] text-xl">{data?.title}</div>
            </div>
          ))}
        </div>
        <div className="col-span-6">
          <img className="w-[30rem]" src={mentor_img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Mentor;
