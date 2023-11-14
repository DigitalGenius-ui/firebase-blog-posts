import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Blog } from "../../../Context/Context";
import FollowBtn from "./FollowBtn";
import { useNavigate } from "react-router-dom";

const Follow = () => {
  const { data, loading } = useFetch("users");
  const { currentUser } = Blog();
  const [count, setCount] = useState(5);
  const users =
    data &&
    data?.slice(0, count).filter((user) => user.userId !== currentUser?.uid);

  const navigate = useNavigate();

  return (
    <>
      {data &&
        users?.map((user, i) => {
          const { username, bio, userImg, userId } = user;
          return (
            <div key={i} className="flex items-start gap-2 my-4">
              <div
                onClick={() => navigate("/profile" + "/" + userId)}
                className="flex-1 flex items-center gap-2 cursor-pointer">
                <img
                  className="w-[3rem] h-[3rem] object-cover gap-2 cursor-pointer rounded-full"
                  src={userImg}
                  alt="userImg"
                />
                <div className="flex flex-col gap-1">
                  <h2 className="font-bold capitalize">{username}</h2>
                  <span className="leading-4 text-gray-500 text-sm line-clamp-2">
                    {bio || "This user has no bio"}
                  </span>
                </div>
              </div>
              <FollowBtn userId={userId} />
            </div>
          );
        })}
      {data?.length > 5 && (
        <button
          onClick={() =>
            setCount((prev) => users.length < data?.length && prev + 3)
          }
          className="mb-3 text-green-900 text-sm hover:underline">
          Load for more users
        </button>
      )}
    </>
  );
};

export default Follow;
