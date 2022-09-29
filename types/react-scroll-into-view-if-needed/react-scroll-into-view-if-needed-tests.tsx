import * as React from 'react';
import ReactScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';

const validOptions = {
    block: 'start',
    scrollMode: 'if-needed',
    skipOverflowHiddenElements: true
};

const invalidOptions = {
    invalidOption: 'foobar'
};

() => (
    <ReactScrollIntoViewIfNeeded
        active={true}
        options={{
            block: 'start',
            scrollMode: 'if-needed',
            skipOverflowHiddenElements: true
        }}
        elementType="h1"
    >
        Children
    </ReactScrollIntoViewIfNeeded>
);

() => (
    <ReactScrollIntoViewIfNeeded
        options={{
            // @ts-expect-error
            invalidOption: 'foobar'
        }}
    >
        Children
    </ReactScrollIntoViewIfNeeded>
);

() => (
    <ReactScrollIntoViewIfNeeded
        // @ts-expect-error
        active={5}
    >
        Children
    </ReactScrollIntoViewIfNeeded>
);

() => (
    <ReactScrollIntoViewIfNeeded
        // @ts-expect-error
        elementType="h8"
    >
        Children
    </ReactScrollIntoViewIfNeeded>
);
