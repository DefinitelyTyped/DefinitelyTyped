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
        options={validOptions}
        elementType="h1"
    >
        Children
    </ReactScrollIntoViewIfNeeded>
);

() => (
    <ReactScrollIntoViewIfNeeded
        active={true}
        options={invalidOptions} // $ExpectError
        elementType="h1"
    >
        Children
    </ReactScrollIntoViewIfNeeded>
);

() => (
    <ReactScrollIntoViewIfNeeded
        active={5} // $ExpectError
        options={validOptions}
        elementType="h1"
    >
        Children
    </ReactScrollIntoViewIfNeeded>
);

() => (
    <ReactScrollIntoViewIfNeeded
        active={true}
        options={validOptions}
        elementType="h8" // $ExpectError
    >
        Children
    </ReactScrollIntoViewIfNeeded>
);
