import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Slider, { Range, Handle, createSliderWithTooltip } from 'rc-slider';

const SliderWithTooltip = createSliderWithTooltip(Slider);
const RangeWithTooltip = createSliderWithTooltip(Range);

ReactDOM.render(
    <Slider defaultValue={1} max={2} step={0.01} min={0.01} />,
    document.querySelector('.app')
);

ReactDOM.render(
    <Handle
        className="bottom"
        vertical={true}
        offset={10}
    />,
    document.querySelector('.another-app')
);
ReactDOM.render(
    <Slider
        className="bottomRight"
        min={0.01}
        max={1}
        marks={{ 1: "1" }}
        step={0.01}
        vertical={true}
        handle={() => <Slider />}
        included={true}
        disabled={false}
        dots={true}
        onBeforeChange={() => { }}
        onChange={() => { }}
        onAfterChange={() => { }}
        defaultValue={0.1}
        value={0.1}
        style={{backgroundColor: 'plum'}}
        dotStyle={{backgroundColor: 'antiquewhite'}}
        activeDotStyle={{backgroundColor: 'antiquewhite'}}
    />,
    document.querySelector('.another-app')
);

ReactDOM.render(
    <Range
        defaultValue={[0, 1]}
        value={[0, 1]}
        count={3}
        allowCross={false}
        pushable={true}
    />,
    document.querySelector('.app')
);

ReactDOM.render(
    <SliderWithTooltip defaultValue={1} max={2} step={0.01} min={0.01} />,
    document.querySelector('.app')
);

ReactDOM.render(
    <RangeWithTooltip defaultValue={[1]} max={2} step={0.01} min={0.01} />,
    document.querySelector('.app')
);
