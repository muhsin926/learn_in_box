import React from "react";

const MiniHeader = ({ icon, title, description, round, styleTitle }) => {
  let words, newTitle;
  if (styleTitle) {
    words = title.split(" ");
    newTitle = words.map((word, i) => (
      <span key={i}>
        {i === 1 ? (
          <span>
            <span className="text-[#639]">
              {word.slice(0, Math.floor(word.length / 2))}
            </span>
            <span className="text-[#e60f7f]">
              {word.slice(Math.floor(word.length / 2))}
            </span>
          </span>
        ) : (
          word
        )}
        {i < words.length - 1 ? " " : null}
      </span>
    ));
  }
  return (
    <section className="flex flex-col items-center mt-14">
      <div
        className={`${
          round
            ? "w-12 h-12 rounded-full bg-[#3eb4be] flex items-center justify-center"
            : "w-14 h-14"
        }`}
      >
        {icon ? (
          <img src={icon} alt="Icon" />
        ) : (
          <div className="w-5 h-5 rounded-full bg-white"></div>
        )}
      </div>
      <div className="w-2/3 text-center mt-5">
        <h1 className="capitalize font-semibold text-3xl">
          {styleTitle ? newTitle : title}
        </h1>
      </div>
      <div className="w-2/3 text-center mt-3">
        <h1 className="capitalize font-medium text-xl">{description}</h1>
      </div>
    </section>
  );
};

export default MiniHeader;
