import * as React from 'react';
import TypeAnimation from 'react-type-animation';

const example = () => (
    <TypeAnimation cursor={false} sequence={['React typing animation based on typical', 1000, '']} wrapper="h2" />
);

const exampleWithRepeat = () => (
    <TypeAnimation
        cursor={false}
        sequence={['얘야, 큰 힘에는 큰 책임이 따른단다', 6000, 'I am Ironman', 6500, '거 죽기 딱 좋은 날씨네', 6400]}
        wrapper="p"
        className="mainTyping"
        repeat={Infinity}
    />
);
