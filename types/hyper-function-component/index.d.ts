// Type definitions for hyper-function-component 1.0
// Project: https://hyper-function.com/ponent
// Definitions by: terry-fei <https://github.com/terry-fei>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class HyperFunctionComponent {
    static propTypes?: HfcPropTypes;
    constructor(props: HfcProps);

    connected(container: HTMLDivElement): void;
    changed?(type: 'attr' | 'event' | 'slot', name: string, oldValue: any, newValue: any): void;
    disconnected?(): void;
}

interface HfcProps {
    attrs: { [k: string]: any };
    events: { [k: string]: (args?: { [k: string]: any }) => any };
    slots: {
        [k: string]: (container: HTMLElement, args?: { [k: string]: any }) => void;
    };
}

interface HfcPropTypes {
    attrs?: { [k: string]: HfcPropTypeDef };
    events?: { [k: string]: { [k: string]: HfcPropTypeDef } };
    slots?: { [k: string]: { [k: string]: HfcPropTypeDef } };
}

type HfcPropTypeDef = any;

interface Int {
    valueOf(): 'HFC_TYPE_INT';
}
interface Float {
    valueOf(): 'HFC_TYPE_FLOAT';
}
interface Any {
    valueOf(): 'HFC_TYPE_ANY';
}
