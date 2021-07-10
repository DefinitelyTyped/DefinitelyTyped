// Type definitions for react-text-mask 5.4
// Project: https://github.com/text-mask/text-mask/tree/master/react
// Definitions by: Guilherme Hübner <https://github.com/guilhermehubner>
//                 Deividi Cavarzan <https://github.com/cavarzan>
//                 Artem Lyubchuk <https://github.com/needpower>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export type maskArray = Array<string | RegExp> | boolean;

export interface MaskedInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    mask?: maskArray | ((value: string) => maskArray) | undefined;

    guide?: boolean | undefined;

    placeholderChar?: string | undefined;

    keepCharPositions?: boolean | undefined;

    pipe?: ((
        conformedValue: string,
        config: any
    ) => false | string | { value: string; indexesOfPipedChars: number[] }) | undefined;

    showMask?: boolean | undefined;

    render?: ((ref: (inputElement: HTMLElement) => void, props: any) => any) | undefined;
}

export interface conformToMaskResult {
    conformedValue: string;
    meta: {
        someCharsRejected: boolean;
    };
}

export default class MaskedInput extends React.Component<
    MaskedInputProps,
    any
> {
  inputElement: HTMLElement;
}

export function conformToMask(
    text: string,
    mask: maskArray | ((value: string) => maskArray),
    config?: any
): conformToMaskResult;
