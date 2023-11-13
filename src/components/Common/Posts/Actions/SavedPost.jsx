import React from "react";
import { CiSaveDown2 } from "react-icons/ci";

const SavedPost = ({ post }) => {
  return (
    <>
      <button className="hover:opacity-60">
        <CiSaveDown2 className="text-2xl pointer-event-none" />
      </button>
    </>
  );
};

export default SavedPost;
