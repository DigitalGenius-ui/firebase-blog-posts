import React from "react";

import Loading from "../../Loading/Loading";
import PostsCard from "./PostsCard";
import useFetch from "../../hooks/useFetch";

const Posts = () => {
  const { data, loading } = useFetch("posts");
  return (
    <section className="flex flex-col gap-[2.5rem]">
      {loading ? (
        <Loading />
      ) : (
        data && data?.map((post, i) => <PostsCard post={post} key={i} />)
      )}
    </section>
  );
};

export default Posts;
