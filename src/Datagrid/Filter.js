import React from "react";
import ReactSlider from 'react-slider'
import "./Filter.css"

const filters = ({
  postsPerPage,
  setPostsPerPage,
}) => {
  return (
  
      <div class="sliderdiv">
        <input
          type="range"
          min="1"
          max="100"
          value={postsPerPage}
          onChange={(e) => setPostsPerPage(e.target.value)}
          class="slider"
          id="myRange"
        />
      </div>


  );
};
export default filters;
