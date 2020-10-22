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
            invalidOption: 'foobar' // $ExpectError
        }}
    >
        Children
    </ReactScrollIntoViewIfNeeded>
);

() => (
    <ReactScrollIntoViewIfNeeded
        active={5} // $ExpectError
    >
        Children
    </ReactScrollIntoViewIfNeeded>
);

() => (
    <ReactScrollIntoViewIfNeeded
        elementType="h8" // $ExpectError
    >
        Children
    </ReactScrollIntoViewIfNeeded>
);
