import React, { useEffect, useRef } from "react";

const DropDown = ({ children, size, showDrop, setShowDrop }) => {
  const dropRef = useRef(null);
  useEffect(() => {
    const clickOutside = (e) => {
      if (showDrop && dropRef.current && !dropRef.current.contains(e.target)) {
        setShowDrop(false);
      }
    };
    window.addEventListener("mousedown", clickOutside);
    return () => window.removeEventListener("mousedown", clickOutside);
  }, [dropRef, showDrop]);

  return (
    <>
      {showDrop && (
        <div
          ref={dropRef}
          className={`shadows flex flex-col absolute right-0 top-[2rem] bg-white ${size}`}>
          {children}
        </div>
      )}
    </>
  );
};

export default DropDown;
