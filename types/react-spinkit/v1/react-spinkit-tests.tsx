import Spinner  = require('react-spinkit');
import * as React from 'react';

// Examples taken from http://kyleamathews.github.io/react-spinkit/
const spinners = [
    // Basic spinners
    <Spinner spinnerName="three-bounce" />,
    <Spinner spinnerName="double-bounce" />,
    <Spinner spinnerName="rotating-plane" />,
    <Spinner spinnerName="folding-cube" />,
    <Spinner spinnerName="wave" />,
    <Spinner spinnerName="wandering-cubes" />,
    <Spinner spinnerName="pulse" />,
    <Spinner spinnerName="chasing-dots" />,
    <Spinner spinnerName="circle" />,
    <Spinner spinnerName="cube-grid" />,
    <Spinner spinnerName="wordpress" />,

    // Spinner options
    <Spinner spinnerName="wordpress" noFadeIn />,
    <Spinner spinnerName="wordpress" overrideSpinnerClassName="my-class-to-override" />,
    <Spinner spinnerName="wordpress" className="my-class" />,
];
