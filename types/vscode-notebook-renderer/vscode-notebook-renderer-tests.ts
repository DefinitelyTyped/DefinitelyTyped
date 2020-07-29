import { NotebookRendererApi } from 'vscode-notebook-renderer';

const notebookApi: NotebookRendererApi<{ cool: boolean }> = acquireNotebookRendererApi('myRendererId');

const prevState = notebookApi.getState();

// $ExpectError
prevState.cool;

if (prevState) {
    console.log('cool?', prevState.cool);
}

notebookApi.setState({ cool: true });

const listener = notebookApi.onDidCreateOutput(({ element, outputId, output, mimeType }) => {
    // $ExpectType string
    outputId;
    // $ExpectType HTMLElement
    element;

    console.log('my render data is', output.data[mimeType]);
});

listener.dispose();

notebookApi.onDidReceiveMessage(msg => {
    // $ExpectType any
    msg;

    notebookApi.postMessage(msg);
});

notebookApi.onWillDestroyOutput(evt => {
    // $ExpectType { outputId: string; } | undefined
    evt;
});
