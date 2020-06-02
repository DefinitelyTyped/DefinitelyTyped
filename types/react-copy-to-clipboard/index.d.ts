// Type definitions for react-copy-to-clipboard 5.0
// Project: https://github.com/nkbt/react-copy-to-clipboard
// Definitions by: Meno Abels <https://github.com/mabels>
//                 Bernabe <https://github.com/BernabeFelix>
//                 Ward Delabastita <https://github.com/wdlb>
//                 Ayrton-Taede Tromp <https://github.com/dotBeFoRE>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.9

import * as React from 'react';

export namespace CopyToClipboard {
  interface Options {
    debug?: boolean;
    format?: 'text/html' | 'text/plain';
    message?: string;
  }

  interface Props {
    children: React.ReactNode;
    text: string;
    onCopy?(text: string, result: boolean): void;
    options?: Options;
  }
  
  class CopyToClipboard extends React.Component<Props> { }
}

export class CopyToClipboard extends React.Component<CopyToClipboard.Props> { }
export default class extends React.Component<CopyToClipboard.Props> { }
