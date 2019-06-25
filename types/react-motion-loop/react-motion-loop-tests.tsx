import * as React from "react";
import { ReactMotionLoop } from "react-motion-loop";
import { spring } from "react-motion";

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
