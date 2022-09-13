// Type definitions for react-clipboardjs-copy 1.3
// Project: https://freeshineit.github.io/react-clipboardjs-copy
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export as namespace ReactClipboard;

declare class ReactClipboard extends React.PureComponent<ReactClipboard.Props> {}

declare namespace ReactClipboard {
    class ReactClipboard extends React.PureComponent<Props> {}

    interface Options {
        text?: string | undefined;
        container?: HTMLElement;
        target?(text: string, result: boolean): void; // MIME type
    }

    interface Props {
        text?: string;
        target?: string;
        action?: string;
        selection?: boolean;
        onSuccess?(text: string, result: boolean): void;
        onError?(text: string, result: boolean): void;
        options?: Options | undefined;
    }
}

export default ReactClipboard;
