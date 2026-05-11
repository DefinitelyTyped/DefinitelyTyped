import * as React from "react";
import { spring } from "react-motion";
import { ReactMotionLoop } from "react-motion-loop";

const TestComponent: React.FunctionComponent<never> = props => (
    <ReactMotionLoop
        styleFrom={{ rotate: spring(0) }}
        styleTo={{ rotate: spring(180) }}
    >
        {interpolatedStyle => (
            <p
                style={{ transform: `rotate( ${interpolatedStyle.rotate}deg)` }}
            />
        )}
    </ReactMotionLoop>
);
