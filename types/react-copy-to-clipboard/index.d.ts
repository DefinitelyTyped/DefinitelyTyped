// Type definitions for react-copy-to-clipboard 5.0
// Project: https://github.com/nkbt/react-copy-to-clipboard
// Definitions by: Meno Abels <https://github.com/mabels>
//                 Bernabe <https://github.com/BernabeFelix>
//                 Ward Delabastita <https://github.com/wdlb>
//                 YCaptain <https://github.com/YCaptain>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export = CopyToClipboard;

declare class CopyToClipboard extends React.Component<CopyToClipboard.Props> {}
declare namespace CopyToClipboard {
  interface Options {
    debug?: boolean;
    format?: "text/html" | "text/plain";
    message?: string;
  }

  interface Props {
    children: React.ReactNode;
    text: string;
    onCopy?(text: string, result: boolean): void;
    options?: Options;
  }

  export class CopyToClipboard extends React.Component<CopyToClipboard.Props> {}
}


