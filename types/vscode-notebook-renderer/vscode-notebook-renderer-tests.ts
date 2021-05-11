import { NotebookRendererApi } from 'vscode-notebook-renderer';

const notebookApi: NotebookRendererApi<{ cool: boolean }> = acquireNotebookRendererApi();

const prevState = notebookApi.getState();

// $ExpectError
prevState.cool;

if (prevState) {
    console.log('cool?', prevState.cool);
}

notebookApi.setState({ cool: true });

const listener = notebookApi.onDidCreateOutput(({ element, outputId, value, mime }) => {
    // $ExpectType string
    outputId;
    // $ExpectType HTMLElement
    element;
    // $ExpectType string
    mime;

    console.log('my render data is', value);
});

listener.dispose();

notebookApi.onWillDestroyOutput(evt => {
    // $ExpectType { outputId: string; } | undefined
    evt;
});

import 'vscode-notebook-renderer/preload';

onDidReceiveKernelMessage(msg => {
    // $ExpectType any
    msg;

    postKernelMessage(msg);
});
