import React from "react";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../../Loading/Loading";
import PostsCard from "../../../Common/Posts/PostsCard";

const ProfileHome = ({ getUserData }) => {
  const { data, loading } = useFetch("posts");
  const userPost =
    data && data?.filter((post) => post.userId === getUserData?.userId);

  return (
    <div className="flex flex-col gap-5 mb-[4rem]">
      {userPost.length === 0 && (
        <p className="text-gray-500">
          <span className="capitalize">{getUserData?.username}</span> has no
          posts
        </p>
      )}
      {loading ? (
        <Loading />
      ) : (
        userPost.map((post, i) => <PostsCard post={post} key={i} />)
      )}
    </div>
  );
};

export default ProfileHome;
