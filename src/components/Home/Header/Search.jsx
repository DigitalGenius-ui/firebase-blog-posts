import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Modal from "../../../utils/Modal";
import { Blog } from "../../../Context/Context";
import { useNavigate } from "react-router-dom";

const Search = ({ modal, setModal }) => {
  const [search, setSearch] = useState("");
  const { postData } = Blog();

  const searchData =
    postData &&
    postData?.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );

  const navigate = useNavigate();
  return (
    <>
      <Modal modal={modal} setModal={setModal}>
        <div
          className={`absolute sm:relative right-4 left-4 top-[4rem] sm:left-0 sm:top-0
          ${
            modal
              ? "visible opacity-100"
              : "invisible sm:visible sm:opacity-100 opacity-0"
          }
          transition-all duration-100`}>
          <div className="flex items-center gap-1 bg-gray-100 px-2 rounded-full relative z-10">
            <span className="text-2xl text-gray-400">
              <CiSearch />
            </span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none py-[0.7rem] text-sm w-full"
              type="text"
              placeholder="Search Medium"
            />
            {search !== "" && (
              <div className="absolute right-0 left-0 top-full bg-white shadow rounded-md">
                {searchData.length > 0 ? (
                  <>
                    {searchData.map((post, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          navigate(`/post/${post?.id}`);
                          setSearch("");
                        }}
                        className="p-2 border-b border-gray-300 hover:bg-gray-100 cursor-pointer">
                        <h2 className="line-clamp-1 capitalize text-sm font-bold">
                          {post.title}
                        </h2>
                        <div
                          className="text-xs text-gray-500 line-clamp-2"
                          dangerouslySetInnerHTML={{ __html: post.desc }}
                        />
                      </div>
                    ))}
                  </>
                ) : (
                  <p className="text-sm text-gray-500 p-3">No Post Found</p>
                )}
              </div>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Search;
