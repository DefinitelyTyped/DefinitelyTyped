import * as React from "react";
import TypeWriter from "react-native-typewriter";

export function Component() {
    return (
        <TypeWriter typing={1} onTypingEnd={() => {}}>
            Hello World!
        </TypeWriter>
    );
}
