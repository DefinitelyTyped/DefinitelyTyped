import * as React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Test: React.FC = () => {
    return <CountdownCircleTimer
        isPlaying
        durationSeconds={10}
        colors={[
            ['#004777', .33],
            ['#F7B801', .33],
            ['#A30000']
        ]}
        size={200}
        strokeWidth={5}
        strokeLinecap="round"
        trailColor="#3f3f3f"
        isLinearGradient
        gradientUniqueKey="myKey"
        renderTime={(r, e, p) => <h1>Test</h1>}
        onComplete={() => { }}
    />;
};
