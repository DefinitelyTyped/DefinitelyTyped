import { ActivationFunction } from "vscode-notebook-renderer";

const activate: ActivationFunction<{ cool: boolean }> = context => {
    const prevState = context.getState();

    // @ts-expect-error
    prevState.cool;

    if (prevState) {
        console.log("cool?", prevState.cool);
    }

    context.setState({ cool: true });

    // @ts-expect-error
    context.setState({ unknownProp: true });

    if (context.postMessage) {
        context.postMessage('hello world');
    }
    if (context.onDidReceiveMessage) {
        context.onDidReceiveMessage(message => {
            // $ExpectType any
            message;
        });
    }

    return {
        renderOutputItem({ mime, metadata, id, text, json, blob, data }, element) {
            // $ExpectType string
            id;
            // $ExpectType HTMLElement
            element;
            // $ExpectType string
            mime;
            // $ExpectType unknown
            metadata;
            // $ExpectType () => string
            text;
            // $ExpectType () => any
            json;
            // $ExpectType () => Blob
            blob;
            // $ExpectType () => Uint8Array
            data;
        },

        disposeOutputItem(id) {
            // $ExpectType string | undefined
            id;
        },

        otherProp: () => { },
    };
};

import "vscode-notebook-renderer/preload";

onDidReceiveKernelMessage(msg => {
    // $ExpectType any
    msg;

    postKernelMessage(msg);
});
