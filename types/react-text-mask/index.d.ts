// Type definitions for react-text-mask 5.1
// Project: https://github.com/text-mask/text-mask
// Definitions by: Guilherme Hübner <https://github.com/guilhermehubner>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from 'react';

declare module 'react-text-mask' {

  export interface MaskedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    mask?: maskArray | ((value: string) => maskArray);

    guide?: boolean;

    placeholderChar?: string;

    keepCharPositions?: boolean;

    pipe?: (conformedValue: string, config: any) => false | string | { value: string, indexesOfPipedChars: number[] };

    showMask?: boolean;

    render: (ref: HTMLInputElement, props: any) => JSX.Element;

  }
}
