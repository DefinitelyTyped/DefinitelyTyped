import {
    ForwardRefExoticComponent,
    InputHTMLAttributes,
    RefAttributes
} from 'react';

export interface MaskedState {
    value: string;
    selection: { start: number; end: number };
}

export interface ReactInputMaskProps
    extends InputHTMLAttributes<HTMLInputElement> {
    mask: string | Array<string | RegExp>;
    maskPlaceholder?: string | null;
    alwaysShowMask?: boolean;
    beforeMaskedStateChange?: (states: {
        previousState: MaskedState;
        currentState: MaskedState;
        nextState: MaskedState;
    }) => MaskedState;
    maskChar?: string;
}

declare const ReactInputMask: ForwardRefExoticComponent<
    ReactInputMaskProps & RefAttributes<HTMLInputElement>
>;

export default ReactInputMask;
