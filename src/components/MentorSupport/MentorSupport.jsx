import React from "react";
import { globalIcon } from "../../assets";
import { onlineMentor } from "../../constants";
import MiniHeader from "../Common/MiniHeader";

const MentorSupport = () => {
    return (
        <>
            <MiniHeader
                icon={globalIcon}
                title={"Make the World your comfort zone"}
                description={"Speak naturally with professional online Mentor from 185 countries"}
                round={true} />
            <section>
                <div className="w-full flex px-3 grid sm:px-10 grid-cols-12 mt-10">
                    {onlineMentor?.map((feature) => (
                        <div key={feature?.id} className="md:col-span-6 col-span-12 lg:col-span-3 flex flex-col items-center text-center p-5">
                            <img className="w-12" src={feature?.icon} alt="Icon" />
                            <h2 className="capitalize font-semibold text-lg text-gray-800">
                                {feature?.title}
                            </h2>
                            <p className="capitalize">{feature?.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};
export default MentorSupport;
