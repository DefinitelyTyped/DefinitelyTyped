// Type definitions for text-mask-core 5.1
// Project: https://github.com/text-mask/text-mask/core/#readme
// Definitions by: josh <https://github.com/huntjosh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Mask = Array<string | RegExp>;

export interface PipeAddResult {
    value: string;
    indexesOfPipedChars: number[];
}
export type PipeResult = PipeAddResult | string | false;
export type Pipe = (conformedValue: string, config: any) => PipeResult;

export interface CreateTextMaskConfig {
    inputElement: HTMLInputElement;
    mask: Mask;
    guide?: string | undefined;
    pipe?: Pipe | undefined;
    placeholderChar?: string | undefined;
    keepCharPositions?: boolean | undefined;
    showMask?: boolean | undefined;
}

export interface TextMaskInputElement {
    update: (rawValue?: string) => void;
}

export function createTextMaskInputElement(config: CreateTextMaskConfig): TextMaskInputElement;
