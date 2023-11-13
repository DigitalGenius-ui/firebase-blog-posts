import React from "react";
import useSingleFetch from "../../../hooks/useSingleFetch";
import { Blog } from "../../../../Context/Context";
import Loading from "../../../Loading/Loading";
import PostsCard from "../../../Common/Posts/PostsCard";
import { BiLock } from "react-icons/bi";

const ProfileLists = ({ getUserData }) => {
  const { currentUser } = Blog();
  const { data, loading } = useSingleFetch(
    "users",
    currentUser?.uid,
    "savePost"
  );
  return (
    <div>
      {currentUser?.uid === getUserData?.userId ? (
        <div className="flex flex-col gap-[2rem] mb-[2rem]">
          {data.length === 0 && (
            <p className="text-gray-500">
              <span className="capitalize mr-1">{getUserData?.username}</span>{" "}
              has no saved post
            </p>
          )}
          {loading ? (
            <Loading />
          ) : (
            data?.map((post, i) => <PostsCard post={post} key={i} />)
          )}
        </div>
      ) : (
        <PrivateLists username={getUserData?.username} />
      )}
    </div>
  );
};

export default ProfileLists;

const PrivateLists = ({ username }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-[3rem] text-center">
      <p>
        <span className="capitalize">{username} saved posts are private</span>
      </p>
      <span className="text-[10rem] text-gray-500">
        <BiLock />
      </span>
    </div>
  );
};
