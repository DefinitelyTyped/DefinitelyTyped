// Type definitions for react-daum-postcode 1.3.0
// Project: https://github.com/kimminsik-bernard/react-daum-postcode
// Definitions by: Sa-ryong Kang <https://github.com/Sa-ryong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as React from 'react';

export as namespace DaumPostcode;
export = DaumPostcode;

declare namespace DaumPostcode {
  export interface Props {
    onComplete: any;
    width?: number | string;
    height?: number | string;
    autoClose?: boolean;
    autoResize?: boolean;
    animation?: boolean;
    style?: any;
    defaultQuery?: string;
    theme?: any;
    scriptUrl?: string;
  }
}

declare class DaumPostcode extends React.Component<DaumPostcode.Props, any> {
  render(): JSX.Element;
}
