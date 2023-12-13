import React from "react";
import { Blog } from "../../Context/Context";
import { BsGraphUpArrow } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { readTime } from "../../utils/helper";

const Trending = () => {
  const { postData } = Blog();
  const getTrending =
    postData && postData?.sort((a, b) => b.pageViews - a.pageViews);
  return (
    <section className="border-b border-gray-600">
      <div className="size py-[2rem]">
        <div className="flex items-center gap-3 font-semibold">
          <span>
            <BsGraphUpArrow />
          </span>
          <h2>Trending on Medium</h2>
        </div>
        <div className="grid grid-cols-card gap-3">
          {getTrending &&
            getTrending
              .slice(0, 6)
              .map((trend, i) => <Trend trend={trend} key={i} index={i} />)}
        </div>
      </div>
    </section>
  );
};

export default Trending;

const Trend = ({ trend, index }) => {
  const navigate = useNavigate();
  return (
    <main className="flex gap-4 w-full">
      <span className="text-gray-400 text-4xl mt-4">{index + 1}</span>
      <div className="py-6 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div
            onClick={() => navigate(`/profile/${trend?.userId}`)}
            className="flex items-center gap-2 cursor-pointer hover:opacity-75">
            <img
              className="w-[1.3rem] h-[1.3rem] object-cover rounded-full"
              src={trend?.userImg}
              alt="userImg"
            />
            <h2 className="font-semibold text-sm capitalize">
              {trend?.username}
            </h2>
          </div>
        </div>
        <div
          onClick={() => navigate(`/post/${trend?.id}`)}
          className="flex flex-col gap-4 cursor-pointer hover:opacity-75">
          <p className="w-full md:w-[18rem] text-md font-bold line-clamp-2">
            {trend.title}
          </p>
          <p className="text-gray-500 text-xs">
            {moment(trend?.created).format("MMM YY")}
            {` ${readTime(trend.desc)} min read`}
          </p>
        </div>
      </div>
    </main>
  );
};
