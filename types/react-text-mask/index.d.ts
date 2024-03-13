import * as React from "react";

export type Mask = Array<string | RegExp> | false;

export interface PipeConfig {
    placeholder: string;
    placeholderChar: string;
    currentCaretPosition: number;
    keepCharPositions: boolean;
    rawValue: string;
    guide: boolean | undefined;
    previousConformedValue: string | undefined;
}

export type ConformToMaskConfig = Partial<Omit<PipeConfig, "rawValue">>;

export interface MaskedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    mask: Mask | ((value: string) => Mask);

    guide?: boolean;

    placeholderChar?: string;

    keepCharPositions?: boolean;

    pipe?: (
        conformedValue: string,
        config: PipeConfig,
    ) => false | string | { value: string; indexesOfPipedChars: number[] };

    showMask?: boolean;

    render?: (
        ref: (inputElement: HTMLElement) => void,
        props: {
            onChange: (event: React.ChangeEvent<HTMLElement>) => void;
            onBlur: (event: React.FocusEvent<HTMLElement>) => void;
            defaultValue: string | undefined;
        },
    ) => React.ReactNode;
}

export interface ConformToMaskResult {
    conformedValue: string;
    meta: {
        someCharsRejected: boolean;
    };
}

export default class MaskedInput extends React.Component<MaskedInputProps, any> {
    inputElement: HTMLElement;
}

export function conformToMask(
    text: string,
    mask: Mask | ((value: string) => Mask),
    config?: ConformToMaskConfig,
): ConformToMaskResult;
