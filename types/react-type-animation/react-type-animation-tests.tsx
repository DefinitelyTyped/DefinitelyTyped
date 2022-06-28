import * as React from 'react';
import TypeAnimation from 'react-type-animation';

const example = () => (
    <TypeAnimation cursor={false} sequence={['React typing animation based on typical', 1000, '']} wrapper="h2" />
);

const exampleWithRepeat = () => (
    <TypeAnimation
        cursor={false}
        sequence={['This text will be repeated infinitely.', 1000, '']}
        wrapper="h2"
        repeat={Infinity}
    />
);

const repeatWithThreeTimes = () => (
    <TypeAnimation
        cursor={true}
        sequence={['This animation', 2000, 'Will write', 2000, 'A sequence three times.']}
        wrapper="a"
        repeat={3}
    />
);

const predefinedWidth = () => (
    <div style={{ width: '20em' }}>
        <TypeAnimation
            cursor={true}
            sequence={['Pre-define width of wrapper', 2000, 'to prevent layout-shift.', 2000]}
            wrapper="h2"
            repeat={Infinity}
        />
    </div>
);
