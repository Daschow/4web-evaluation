import React from "react";
import "./Footer/Footer";

import "../Datagrid/Filter";

const Slider = ({ SliderLenght, setSliderLenght }) => {
  return (
    <div className="slider">
      <input
        type="range"
        min="1"
        max="100"
        value={SliderLenght}
        onChange={(e) => setSliderLenght(e.target.value)}
        class="slider"
        id="myRange"
      />
    </div>
  );
};

export default Slider;
