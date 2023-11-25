import React from "react";
import { FaRegComment } from "react-icons/fa";
import { Blog } from "../../../../Context/Context";
import { formatNum } from "../../../../utils/helper";

const Comment = () => {
  const { setShowComment, commentLength } = Blog();
  return (
    <button
      onClick={() => setShowComment(true)}
      className="flex items-center gap-1 text-sm">
      <FaRegComment className="text-lg" />
      <span>{formatNum(commentLength)}</span>
    </button>
  );
};

export default Comment;
