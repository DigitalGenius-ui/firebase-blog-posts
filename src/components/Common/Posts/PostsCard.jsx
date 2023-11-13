import React from "react";
import useFetch from "../../hooks/useFetch";
import { readTime } from "../../../utils/helper";
import moment from "moment/moment";
import SavedPost from "./Actions/SavedPost";
import { Blog } from "../../../Context/Context";
import Loading from "../../Loading/Loading";
import Actions from "./Actions/Actions";

const PostsCard = ({ post }) => {
  const { title, desc, created, postImg, id: postId, userId } = post;
  const { currentUser } = Blog();
  const { data, loading } = useFetch("users");
  const getUserData = data && data?.find((user) => user?.id === userId);

  return (
    <section>
      <div className="flex flex-col sm:flex-row gap-4 cursor-pointer">
        {loading && <Loading />}
        <div className="flex-[2.5]">
          <p className="pb-2 font-semibold capitalize">
            {getUserData?.username}
          </p>
          <h2 className="text-xl font-bold line-clamp-2 leading-6 capitalize">
            {title}
          </h2>
          <div
            className="py-1 text-gray-500 line-clamp-2 leading-5"
            dangerouslySetInnerHTML={{ __html: desc }}
          />
        </div>
        <div className="flex-[1]">
          <img src={postImg} alt="postImg" className="w-[53rem]" />
        </div>
      </div>
      <div className="flex items-center justify-between w-full md:w-[70%] mt-[2rem] md:mt-0">
        <p className="text-xs text-gray-600">
          {readTime({ __html: desc })} min read .
          {moment(created).format("MMM DD")}
        </p>
        <div className="flex items-center gap-3">
          <SavedPost post={post} getUserData={getUserData} />
          {currentUser?.uid === userId && <Actions post={post} />}
        </div>
      </div>
    </section>
  );
};

export default PostsCard;
