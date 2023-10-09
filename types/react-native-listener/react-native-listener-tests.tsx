import * as React from "react";
import NativeListener from "react-native-listener";

(() => {
    <NativeListener>
        <p>Hello, World!</p>
    </NativeListener>;
});

(() => {
    <NativeListener onClick={() => {}}>
        <p>Hello, World!</p>
    </NativeListener>;
});

(() => {
    <NativeListener
        onClick={event => {
            console.log(event.target);
        }}
    >
        <p>Hello, World!</p>
    </NativeListener>;
});

(() => {
    <NativeListener
        onDoubleClick={event => {
            console.log(event.target);
        }}
    >
        <p>Hello, World!</p>
    </NativeListener>;
});

(() => {
    <NativeListener
        onDragEnd={event => {
            console.log(event.target);
        }}
    >
        <p>Hello, World!</p>
    </NativeListener>;
});
