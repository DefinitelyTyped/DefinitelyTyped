import * as React from "react";
import StackGrid, { easings, transitions } from "react-stack-grid";
/** Default Options */
<StackGrid columnWidth={150}>
    <div key="key1">Item 1</div>
    <div key="key2">Item 2</div>
    <div key="key3">Item 3</div>
</StackGrid>;
/** Transition Options */
const { scaleDown } = transitions;
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
</StackGrid>;

/** Easing Options */
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
</StackGrid>;

/** GridRef Options */
<StackGrid
    columnWidth={150}
    gridRef={grid => grid.updateLayout()}
>
    <div key="key1">Item 1</div>
    <div key="key2">Item 2</div>
    <div key="key3">Item 3</div>
</StackGrid>;
