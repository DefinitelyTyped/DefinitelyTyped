import * as React from 'react';

import Typing from 'react-typing-animation';

const AnimatedTypingComponent = () => (
    <Typing>
        <span>This span will get typed.</span>
    </Typing>
);

const AnimatedBackspaceComponent = () => (
    <Typing>
        <span>This span will get typed, then erased.</span>
        <Typing.Backspace count={20} />
    </Typing>
);

const AnimatedDelayComponent = () => (
    <Typing>
        <div>
            There will be a 1000ms delay here,
            <Typing.Delay ms={1000} />
            then this will be typed.
        </div>
    </Typing>
);

const AnimatedSpeedComponent = () => (
    <Typing speed={50}>
        This line will be typed at 50ms/character,
        <Typing.Speed ms={200} />
        then this will be typed at 200ms/character.
    </Typing>
);

const AnimatedResetComponent = () => (
    <Typing>
        <span>This line will stay.</span>
        <span>This line will get instantly removed after a 500 ms delay</span>
        <Typing.Reset count={1} delay={500} />
    </Typing>
);
