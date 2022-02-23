// Type definitions for react-barcode 1.4
// Project: https://github.com/kciter/react-barcode#readme
// Definitions by: Songwon Park <https://github.com/magichim>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";

declare namespace Barcode {
  interface Props {
    value: string;

    renderer?: string;

    format?: string;

    width?: number;

    height?: number;

    displayValue?: boolean;

    fontOptions?: string;

    font?: string;

    textAlign?: string;

    textPosition?: string;

    textMargin?: number;

    fontSize?: number;

    background?: string;

    lineColor?: string;

    margin?: number;

    marginTop?: number;

    marginBottom?: number;

    marginLeft?: number;

    marginRight?: number;
  }
}

declare class Barcode extends React.Component<Barcode.Props> {
}

export = Barcode;
