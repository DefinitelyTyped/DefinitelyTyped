// Type definitions for react-barcode 1.4
// Project: https://github.com/kciter/react-barcode#readme
// Definitions by: Songwon Park <https://github.com/magichim>
//                 Jungkyu Bae <https://github.com/junggyoo> 
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";

declare namespace Barcode {
  interface Props {
    value: string;

    renderer?: string;

    format?: 
      | "CODE39"
      | "CODE128"
      | "EAN13"
      | "ITF14"
      | "MSI"
      | "pharmacode"
      | "codabar"
      | "upc";

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
  constructor(props: Barcode.Props);
}

export = Barcode;
