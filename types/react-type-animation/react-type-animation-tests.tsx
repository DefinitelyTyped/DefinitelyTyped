import * as React from 'react';
import Typing from 'react-type-animation';

const basic = () => (
    <Typing>
        <span>This span will get typed.</span>
    </Typing>
);

const backspace = () => (
    <Typing>
        <span>This span will get typed, then erased.</span>
        <Typing.Backspace count={20} />
    </Typing>
);

const delay = () => (
    <Typing>
        <div>
            There will be a 1000ms delay here,
            <Typing.Delay ms={1000} />
            then this will be typed.
        </div>
    </Typing>
);

const speed = () => (
    <Typing speed={50}>
        This line will be typed at 50ms/character,
        <Typing.Speed ms={200} />
        then this will be typed at 200ms/character.
    </Typing>
);

const reset = () => (
    <Typing>
        <span>This line will stay.</span>
        <span>This line will get instantly removed after a 500 ms delay</span>
        <Typing.Reset count={1} delay={500} />
    </Typing>
);
