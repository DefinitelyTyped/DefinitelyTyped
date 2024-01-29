import * as React from "react";
import LongPress from "react-longpressable";

export default function ReactLongPressTest({ ...props }) {
    return (
        <LongPress
            onLongPress={() => {
                // do something while long pressed.
            }}
        >
            <div>Long Press Me</div>
        </LongPress>
    );
}
