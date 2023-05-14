import React from "react";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="justify-center flex flex-row">
      {pages.map((page, index) => {
        return (
          
            <button
              className="sm:mr-4 text-white p-2 mr-2 mb-3 "
              key={index}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          
        );
      })}
    </div>
  );
};

export default Pagination;
