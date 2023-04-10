import React from "react";
import MiniHeader from "../Common/MiniHeader";
import { learningIcon } from "../../assets";
import { learningProcess } from "../../constants";

const LearningProcess = () => {
  return (
    <>
      <MiniHeader
        icon={learningIcon}
        title={"HOW LEARNINBOX WORKS"}
        description={"Learn online with the world's best Mentors"}
        round={true}
        styleTitle={true}
      />
      <section className=" mx-7 mt-10">
        {learningProcess?.map((process) => (
          <div key={process?.id} className="grid grid-cols-12 mt-5 mx-10">
            <div className="col-span-6 pt-5">
              <div className="flex gap-3">
                <div className="w-6 h-6 mt-1 rounded-full bg-gray-300 text-center">
                  {process?.id}
                </div>
                <div>
                  <h2 className="capitalize font-semibold text-lg text-gray-800">
                    {process?.title}
                  </h2>
                  <p className="capitalize">{process?.description}</p>
                </div>
              </div>
            </div>
            <div className="col-span-6 flex justify-end">
              <img src={process?.image} alt="Image" />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default LearningProcess;
