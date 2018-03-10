// Type definitions for react-text-mask 16.0
// Project: https://github.com/text-mask/text-mask
// Definitions by: Guilherme Hübner <https://github.com/guilhermehubner>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from "react";

export type maskArray = Array<string | RegExp>;

export interface MaskedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    mask?: maskArray | ((input: HTMLInputElement) => maskArray);

    guide?: boolean;

    placeholderChar?: string;

    keepCharPositions?: boolean;

    pipe?: (conformedValue: string, config: any) => false | string | { value: string, indexesOfPipedChars: number[] };

    onReject?: (infos: { conformedValue: string, maskRejection: boolean, pipeRejection: boolean }) => void;

    onAccept?: () => void;
}

export interface conformToMaskResult {
    conformedValue: string;
    meta: {
        someCharsRejected: boolean
    };
}

export default class MaskedInput extends React.Component<MaskedInputProps, any> {}

export function conformToMask(text: string, mask: maskArray, config: any): conformToMaskResult;
