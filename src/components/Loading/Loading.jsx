import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 grid place-items-center bg-white z-30">
      <img className="w-[20rem]" src="/loading2.gif" alt="loading" />
    </div>
  );
};

export default Loading;
