import React from "react";
import { FaRegComment } from "react-icons/fa";

const Comment = () => {
  return (
    <button className="flex items-center gap-1 text-sm">
      <FaRegComment className="text-lg" />
      <span>1</span>
    </button>
  );
};

export default Comment;
