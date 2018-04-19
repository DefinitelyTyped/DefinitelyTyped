import * as React from "react";
import TinySlider, { TinySliderSettings, TinySliderInfo } from "tiny-slider-react";

const settings: TinySliderSettings = {
    startIndex: 1,
    slideBy: "page",
    speed: 60,
    controlsText: ["yes", "no"],
    nav: false,
    autoplayText: ["start", "stop"],
    arrowKeys: false,
    disable: true,
    mode: "gallery",
    axis: "vertical",
    responsive: {
        600: {
          startIndex: 3,
          gutter: 5,
          fixedWidth: false
        }
    }
};

function handleIndexChanged(info: TinySliderInfo) {
  console.log(info.hasControls, info.slideCount);
}

const MyComponent = <TinySlider settings={settings} onIndexChanged={handleIndexChanged} />;
