import {
    Mask,
    PipeAddResult,
    PipeResult,
    Pipe,
    CreateTextMaskConfig,
    TextMaskInputElement,
    createTextMaskInputElement,
} from 'text-mask-core';

function test() {
    const mask: Mask = ['a'];

    const pipeAddResult: PipeAddResult = { value: 'abc', indexesOfPipedChars: [1] };

    let pipeResult: PipeResult = pipeAddResult;
    pipeResult = false;
    pipeResult = 'abc';

    const pipeFunc: Pipe = (value: string, config: any): PipeResult => {
        return pipeAddResult;
    };

    const createTextMaskConfig: CreateTextMaskConfig = {
        inputElement: {} as any,
        mask,
        guide: 'a',
        keepCharPositions: true,
        showMask: true,
    };

    const textMaskInputElement: TextMaskInputElement = {
        update: (a?: string): void => {},
    };

    createTextMaskInputElement(createTextMaskConfig);
}
