import * as React from 'react';
import Progress from 'delowar__react-circle-progressbar';

// Basic Usage
const basic = () => <Progress percent={40} />;

// with children
const withChildren = () => <Progress percent={40}>40%</Progress>;

// Default Gradient
const gradient = () => <Progress isGradient />;

// Customize Gradient
const customGradient = () => (
    <Progress
        isGradient
        gradient={{
            angle: 90,
            startColor: '#ff0000',
            stopColor: '#ffff00',
        }}
    />
);

// Default Shadow
const shadow = () => <Progress isBgShadow />;

// Customize Shadow
const customShadow = () => (
    <Progress
        isBgShadow
        bgShadow={{
            inset: true,
            vertical: 2,
            horizontal: 2,
            blur: 4,
            opacity: 0.4,
            color: '#000000',
        }}
        emptyColor="#f7f7f7"
        borderWidth="6"
        borderBgWidth="30"
    />
);
