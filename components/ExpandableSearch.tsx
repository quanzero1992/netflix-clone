import React from "react";

// source: https://codepen.io/porsake/pen/XYgGWP

const ExpandableSearch = () => {
  return (
    <div className="search-wrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-[55px] bg-[#7c23b2] leading-[55px] pr-[55px] border-r-[5px] shadow-[0_0_10px_rgba(0,0,0,0.5)] transition duration-500 ease-in">
      <form>
        <input
          type="text"
          className="input border-0 bg-transparent w-0 outline-none text-[18px] text-[#fff] transition duration-300 ease-in"
          placeholder="Hãy gõ tên phim bạn muốn tìm"
        />
      </form>
      <i className="fa fa-search" aria-hidden="true"></i>
    </div>
  );
};

export default ExpandableSearch;
