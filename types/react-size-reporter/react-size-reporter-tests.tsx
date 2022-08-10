import * as React from 'react';
import SizeReporter from 'react-size-reporter';

const TestComponent = () => (
    <SizeReporter
        onSizeChange={({
            width, // $ExpectType number
            height, // $ExpectType number
        }) => {
            throw new Error('DefinitelyTyped example code');
        }}
    >
        <div style={{ width: '50vw', height: 'calc(100 + 7em)' }}></div>
    </SizeReporter>
);
