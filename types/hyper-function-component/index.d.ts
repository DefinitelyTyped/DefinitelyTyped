// Type definitions for hyper-function-component 1.3
// Project: https://hyper-function.com/hfc/intro
// Definitions by: terry-fei <https://github.com/terry-fei>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class HyperFunctionComponent {
    static tag: string;
    static propNames?: HfcObservedPropNames;
    constructor(container: HTMLElement, props: HfcProps);
    changed(props: HfcProps): void;
    disconnected(): void;
}

interface HfcProps {
    attrs: { [k: string]: any };
    events: { [k: string]: (args?: { [k: string]: any }) => any };
    slots: {
        [k: string]: (container: HTMLElement, args?: { key?: string | number; [k: string]: any }) => void;
    };
    others: { [k: string]: any };
}

interface HfcObservedPropNames {
    attrs: string[];
    events: string[];
    slots: string[];
}

interface HfcString {
    valueOf(): 'HFC_TYPE_STRING';
}

interface HfcBoolean {
    valueOf(): 'HFC_TYPE_BOOLEAN';
}

interface HfcInt {
    valueOf(): 'HFC_TYPE_INT';
}

interface HfcFloat {
    valueOf(): 'HFC_TYPE_FLOAT';
}

interface HfcAny {
    valueOf(): 'HFC_TYPE_ANY';
}
