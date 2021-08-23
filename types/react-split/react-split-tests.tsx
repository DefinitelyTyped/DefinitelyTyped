import Split from 'react-split';
import * as React from 'react';

const ReactSplitRequiredOptions: JSX.Element = <Split />;

const callbackFn = () => ({});

const ReactSplitCommonOptions: JSX.Element = (
    <Split
        sizes={[25, 75]}
        minSize={100}
        expandToMin={false}
        gutterSize={10}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
        onDrag={callbackFn}
        onDragStart={callbackFn}
        onDragEnd={callbackFn}
    >
        <div />
        <div />
    </Split>
);
