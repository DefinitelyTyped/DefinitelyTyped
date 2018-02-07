// Type definitions for react-copy-to-clipboard 4.2
// Project: https://github.com/nkbt/react-copy-to-clipboard
// Definitions by: Meno Abels <https://github.com/mabels>
//                 Bernabe <https://github.com/BernabeFelix>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";

export as namespace CopyToClipboard;

export = CopyToClipboard;

declare namespace CopyToClipboard {
  interface Options {
    debug: boolean;
    message: string;
  }

  interface Props {
    text: string;
    onCopy?(a: string, b: boolean): void;
    options?: Options;
  }
}

declare class CopyToClipboard extends React.Component<CopyToClipboard.Props> {
}
