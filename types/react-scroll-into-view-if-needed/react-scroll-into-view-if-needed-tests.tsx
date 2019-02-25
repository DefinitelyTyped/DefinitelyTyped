import * as React from 'react';
import ReactScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';

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
        options={invalidOptions} // $ExpectError
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
