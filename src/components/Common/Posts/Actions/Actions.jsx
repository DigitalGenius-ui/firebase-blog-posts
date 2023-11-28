import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import DropDown from "../../../../utils/DropDown";
import { useNavigate } from "react-router-dom";
import { Blog } from "../../../../Context/Context";

const Actions = ({ postId, title, desc }) => {
  const { setUpdateData } = Blog();
  const [showDrop, setShowDrop] = useState(false);
  const handleClick = () => {
    setShowDrop(!showDrop);
  };

  const navigate = useNavigate(null);

  const handleEdit = () => {
    navigate(`/editPost/${postId}`);
    setUpdateData({ title, description: desc });
  };
  return (
    <div className="relative">
      <button onClick={handleClick}>
        <BsThreeDots className="text-2xl" />
      </button>
      <DropDown showDrop={showDrop} setShowDrop={setShowDrop} size="w-[7rem]">
        <Button click={handleEdit} title="Edit Story" />
        <Button click={() => console.log("delete")} title="Delete Story" />
      </DropDown>
    </div>
  );
};

export default Actions;

const Button = ({ click, title }) => {
  return (
    <button
      onClick={click}
      className={`p-2 hover:bg-gray-100 hover:text-black/80 w-full text-sm text-left
    ${title === "Delete Story" ? "text-red-600" : ""}
    `}>
      {title}
    </button>
  );
};
