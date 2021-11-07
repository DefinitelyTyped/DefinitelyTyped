// Type definitions for react-copy-to-clipboard 5.0
// Project: https://github.com/nkbt/react-copy-to-clipboard
// Definitions by: Meno Abels <https://github.com/mabels>
//                 Bernabe <https://github.com/BernabeFelix>
//                 Ward Delabastita <https://github.com/wdlb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export as namespace CopyToClipboard;

declare class CopyToClipboard extends React.PureComponent<CopyToClipboard.Props> {}

declare namespace CopyToClipboard {
    class CopyToClipboard extends React.PureComponent<Props> {}

    interface Options {
        debug?: boolean | undefined;
        message?: string | undefined;
        format?: string | undefined; // MIME type
    }

    interface Props {
        children?: React.ReactNode;
        text: string;
        onCopy?(text: string, result: boolean): void;
        options?: Options | undefined;
    }
}

export = CopyToClipboard;
