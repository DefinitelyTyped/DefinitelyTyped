import * as React from 'react';
import Typical from 'react-typical';

const TypicalTest = () => {
    return <Typical steps={['Hello', 1000, 'World', 500]} loop={Infinity} wrapper="p" />;
};
