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
        tabIndex={-1}
    />,
    document.querySelector('.another-app')
);

const onChangeFunc1 = (string: number) => {};

const onChangeFunc2 = (string: number[]) => {};

const onBlurFunc = (e: React.FocusEvent) => {};

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
        onBeforeChange={onChangeFunc1}
        onChange={onChangeFunc1}
        onBlur={onBlurFunc}
        onAfterChange={onChangeFunc1}
        defaultValue={0.1}
        value={0.1}
        style={{backgroundColor: 'plum'}}
        dotStyle={{backgroundColor: 'antiquewhite'}}
        activeDotStyle={{backgroundColor: 'antiquewhite'}}
        reverse={true}
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
        onChange={onChangeFunc2}
        onAfterChange={onChangeFunc2}
        onBeforeChange={onChangeFunc2}
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

ReactDOM.render(
    <SliderWithTooltip defaultValue={1} max={2} step={0.01} min={0.01} tipProps={{ placement: 'right' }}/>,
    document.querySelector('.app')
);
