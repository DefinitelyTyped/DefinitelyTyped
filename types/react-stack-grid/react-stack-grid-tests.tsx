import * as React from 'react';
import * as ReactDOM from 'react-dom';
import StackGrid, { transitions, easings } from 'react-stack-grid';
/** Default Options */
ReactDOM.render(
    <StackGrid columnWidth={150}>
        <div key="key1">Item 1</div>
        <div key="key2">Item 2</div>
        <div key="key3">Item 3</div>
    </StackGrid>,
    document.querySelector('.app'),
);
/** Transition Options */
const { scaleDown } = transitions;
ReactDOM.render(
    <StackGrid
        columnWidth={150}
        appear={scaleDown.appear}
        appeared={scaleDown.appeared}
        enter={scaleDown.enter}
        entered={scaleDown.entered}
        leaved={scaleDown.leaved}
    >
        <div key="key1">Item 1</div>
        <div key="key2">Item 2</div>
        <div key="key3">Item 3</div>
    </StackGrid>,
    document.querySelector('.app'),
);

/** Easing Options */
ReactDOM.render(
    <StackGrid
        columnWidth={150}
        appear={scaleDown.appear}
        appeared={scaleDown.appeared}
        enter={scaleDown.enter}
        easing={easings.cubicOut}
        entered={scaleDown.entered}
        leaved={scaleDown.leaved}
    >
        <div key="key1">Item 1</div>
        <div key="key2">Item 2</div>
        <div key="key3">Item 3</div>
    </StackGrid>,
    document.querySelector('.app'),
);
