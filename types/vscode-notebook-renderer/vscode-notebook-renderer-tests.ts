import { ActivationFunction } from "vscode-notebook-renderer";

const activate: ActivationFunction<{ cool: boolean }> = context => {
    const prevState = context.getState();

    // $ExpectError
    prevState.cool;

    if (prevState) {
        console.log("cool?", prevState.cool);
    }

    context.setState({ cool: true });

    // $ExpectError
    context.setState({ unknownProp: true });

    return {
        renderCell(outputId, { value, mime, metadata, element }) {
            // $ExpectType string
            outputId;
            // $ExpectType HTMLElement
            element;
            // $ExpectType string
            mime;
            // $ExpectType unknown
            metadata;
            // $ExpectType unknown
            value;
        },

        destroyCell(outputId) {
            // $ExpectType string | undefined
            outputId;
        },

        otherProp: () => {},
    };
};

import "vscode-notebook-renderer/preload";

onDidReceiveKernelMessage(msg => {
    // $ExpectType any
    msg;

    postKernelMessage(msg);
});
