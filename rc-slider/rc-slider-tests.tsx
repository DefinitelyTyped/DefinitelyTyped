import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Slider from 'rc-tooltip';
import { Range } from 'rc-tooltip';

ReactDOM.render(
    <Slider defaultValue={1} max={2} step={0.01} min={0.01} />,
    document.querySelector('.app')
);

ReactDOM.render(
    <Slider
        className="bottomRight"
        min={0.01}
        max={1}
        marks={"1"}
        step={0.01}
        vertical={true}
        handle={() => { <Slider /> }}
        trigger={['click', 'focus']}
        included={true}
        disabled={false}
        dots={true}
        onBeforeChange={() => { }}
        onChange={() => { }}
        onAfterChange={() => { }}
        defaultValue={0.1}
        value={0.1}
    />,
    document.querySelector('.another-app')
);

ReactDOM.render(
    <Range
        defaultValue={[0, 1]}
        value={[0, 1]}
        count={3}
        allowCors={false}
        pushable={true} />,
    document.querySelector('.app')
);