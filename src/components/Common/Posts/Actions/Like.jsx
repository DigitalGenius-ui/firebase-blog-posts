import React, { useEffect, useState } from "react";
import { PiHandsClappingDuotone } from "react-icons/pi";
import { Blog } from "../../../../Context/Context";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../../../../firebase/firebase";
import { toast } from "react-toastify";
import useSingleFetch from "../../../hooks/useSingleFetch";
import { formatNum } from "../../../../utils/helper";

const Like = ({ postId }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { currentUser } = Blog();

  const { data } = useSingleFetch("posts", postId, "likes");

  useEffect(() => {
    setIsLiked(
      data && data.findIndex((item) => item.id === currentUser?.uid) !== -1
    );
  }, [data]);

  const handleLike = async () => {
    try {
      if (currentUser) {
        const likeRef = doc(db, "posts", postId, "likes", currentUser?.uid);
        if (isLiked) {
          await deleteDoc(likeRef);
        } else {
          await setDoc(likeRef, {
            userId: currentUser?.uid,
          });
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <button onClick={handleLike} className="flex items-center gap-1 text-sm">
      <PiHandsClappingDuotone
        className={`text-xl ${isLiked ? "text-black" : "text-gray-500"}`}
      />
      <span>{formatNum(data?.length)}</span>
    </button>
  );
};

export default Like;
