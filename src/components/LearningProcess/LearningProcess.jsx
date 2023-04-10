import React from "react";
import MiniHeader from "../Common/MiniHeader";
import {
  graduationIcon,
  learningIcon,
  person1,
  verifyIcon,
} from "../../assets";
import { learningProcess, mentors } from "../../constants";
import Button from "../Common/Button";

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
      <section className=" md:mx-7 mt-10">
        {learningProcess?.map((process) => (
          <div
            key={process?.id}
            className="grid grid-cols-12 mt-5 mx-3 md:mx-10"
          >
            <div className="col-span-12 md:col-span-6 pt-5">
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
            <div className="col-span-12 md:col-span-6 flex flex-col items-end">
              {process?.image == null ? (
                // first person
                <>
                  <div className="flex mb-2 bg-gray-200 rounded-lg  mx-16">
                    <img
                      className="object-cover"
                      src={mentors[0]?.photo}
                      alt="Person Image"
                    />
                    <div className="grid grid-cols-12 px-2 pt-2">
                      <div className="col-span-7">
                        <div className="flex">
                          <h1 className="font-seminbold text-medium ">
                            {mentors[0]?.name}
                          </h1>
                          <img
                            className="w-3 h-3"
                            src={verifyIcon}
                            alt="Veryfied"
                          />
                        </div>
                        <div className="flex">
                          <img
                            className="w-3 h-3"
                            src={graduationIcon}
                            alt="Icon"
                          />
                          <h1 className="text-xs ">{mentors[0]?.language}</h1>
                        </div>
                        <div className="flex">
                          <p className="text-xs">
                            {mentors[0]?.lessons} Lessons
                          </p>
                          <li className="text-xs">
                            Speaks English{" "}
                            <span className="text-[#3eb4be]">
                              {mentors[0]?.native ? "Native" : ""}
                            </span>
                          </li>
                        </div>
                        <p className="text-xs">{mentors[0]?.qualification}</p>
                      </div>
                      <div className="col-span-5 flex flex-col items-center">
                        <div className="flex gap-4">
                          <div>
                            <p className="text-xs">{mentors[0]?.rate}</p>
                            <p className="text-xs">
                              {mentors[0]?.reviews} Reviews
                            </p>
                          </div>
                          <div>
                            <p className="text-xs">${mentors[0]?.fee}</p>
                            <p className="text-xs">Per Hour</p>
                          </div>
                        </div>
                        <Button
                          title={"Book trial lesson"}
                          stlye={
                            "text-sm bg-[#3eb4be] text-white p-2 rounded-md mb-1"
                          }
                        />
                      </div>
                    </div>
                  </div>
                  {/* // second person */}
                  <div className="flex  bg-gray-200  mb-2 rounded-lg ">
                    <img
                      className="object-cover "
                      src={mentors[1]?.photo}
                      alt="Person Image"
                    />
                    <div className="grid grid-cols-12 p-3">
                      <div className="col-span-8">
                        <div className="flex">
                          <h1 className="font-seminbold text-medium ">
                            {mentors[1]?.name}
                          </h1>
                          <img
                            className="w-3 h-3"
                            src={verifyIcon}
                            alt="Veryfied"
                          />
                        </div>
                        <div className="flex">
                          <img
                            className="w-3 h-3"
                            src={graduationIcon}
                            alt="Icon"
                          />
                          <h1 className="text-xs ">{mentors[1]?.language}</h1>
                        </div>
                        <div className="flex">
                          <p className="text-xs">
                            {mentors[1]?.lessons} Lessons
                          </p>
                          <li className="text-xs">
                            Speaks English{" "}
                            <span className="text-[#3eb4be]">
                              {mentors[1]?.native ? "Native" : ""}
                            </span>
                          </li>
                        </div>
                        <p className="text-xs">{mentors[1]?.qualification}</p>
                        <p className="text-xs">{mentors[1]?.message}</p>
                      </div>
                      <div className="col-span-4 flex flex-col items-center">
                        <div className="flex gap-4">
                          <div>
                            <p className="text-xs">{mentors[1]?.rate}</p>
                            <p className="text-xs">
                              {mentors[1]?.reviews} Reviews
                            </p>
                          </div>
                          <div>
                            <p className="text-xs">${mentors[1]?.fee}</p>
                            <p className="text-xs">Per Hour</p>
                          </div>
                        </div>
                        <Button
                          title={"Book trial lesson"}
                          stlye={
                            "text-sm bg-[#3eb4be] text-white p-2 rounded-md mb-1"
                          }
                        />
                        <Button
                          title={"Book trial lesson"}
                          stlye={
                            "text-sm border-2 border-[#3eb4be] bg-gray-200 text-black p-2 rounded-md"
                          }
                        />
                      </div>
                    </div>
                  </div>
                  {/* // third person */}
                  <div className="flex bg-gray-200 mb-2 mx-12 rounded-lg ">
                    <img
                      className="object-cover"
                      src={mentors[2]?.photo}
                      alt="Person Image"
                    />
                    <div className="grid grid-cols-12 p-3">
                      <div className="col-span-7">
                        <div className="flex">
                          <h1 className="font-seminbold text-medium ">
                            {mentors[2]?.name}
                          </h1>
                          <img
                            className="w-3 h-3"
                            src={verifyIcon}
                            alt="Veryfied"
                          />
                        </div>
                        <div className="flex">
                          <img
                            className="w-3 h-3"
                            src={graduationIcon}
                            alt="Icon"
                          />
                          <h1 className="text-xs ">{mentors[2]?.language}</h1>
                        </div>
                        <div className="flex">
                          <p className="text-xs">
                            {mentors[2]?.lessons} Lessons
                          </p>
                          <li className="text-xs">
                            Speaks English{" "}
                            <span className="text-[#3eb4be]">
                              {mentors[2]?.native ? "Native" : ""}
                            </span>
                          </li>
                        </div>
                        <p className="text-xs">{mentors[2]?.qualification}</p>
                      </div>
                      <div className="col-span-5 flex flex-col items-center">
                        <div className="flex gap-4">
                          <div>
                            <p className="text-xs">{mentors[2]?.rate}</p>
                            <p className="text-xs">
                              {mentors[2]?.reviews} Reviews
                            </p>
                          </div>
                          <div>
                            <p className="text-xs">${mentors[2]?.fee}</p>
                            <p className="text-xs">Per Hour</p>
                          </div>
                        </div>
                        <Button
                          title={"Book trial lesson"}
                          stlye={
                            "text-sm bg-[#3eb4be] text-white p-2 rounded-md mb-1"
                          }
                        />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <img src={process?.image} alt="Image" />
              )}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default LearningProcess;
