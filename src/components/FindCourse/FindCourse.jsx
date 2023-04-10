import React from "react";
import Button from "../Common/Button";
import { searchIcon } from "../../assets";
import { findCourse } from "../../constants";

const FindCourse = () => {
  return (
    <section className="md:mt-48 mt-10">
      <div className="w-full text-center">
        <h1 className="text-3xl font-semibold capitalize">
          Search among <span className="text-purple-500 ">58340</span> courses
          and <br /> find your favorite course
        </h1>
      </div>
      <div className="flex justify-center mt-14 items-center">
        <Button
          title={"Categories"}
          stlye={"bg-black py-3 px-5 rounded-md text-white"}
        />
        <div className="flex p-3 bg-gray-100 rounded w-1/3 justify-between mx-2">
          <input type="text" placeholder="Search Anything" />
          <img src={searchIcon} className="w-5 h-5" alt="" />
        </div>
        <h1 className="hidden md:block capitalize text-zinc-700">
          Or view the following courses...
        </h1>
      </div>

      <div className="w-full  mt-10 flex justify-center">
        <div className="w-2/3 hidden sm:block">
          <div className="flex justify-between">
            <div>
              <ul>
                {findCourse.slice(0, 5)?.map((course) => (
                  <li
                    className="mb-5 font-semibold text-2xl text-gray-700"
                    key={course?.id}
                  >
                    {course?.title}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul>
                {findCourse.slice(5)?.map((course) => (
                  <li
                    className="mb-5 font-semibold text-2xl text-gray-700"
                    key={course?.id}
                  >
                    {course?.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="block sm:hidden">
          <ul>
            {findCourse?.map((course) => (
              <li
                className="mb-5 font-semibold text-2xl text-gray-700"
                key={course?.id}
              >
                {course?.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FindCourse;
