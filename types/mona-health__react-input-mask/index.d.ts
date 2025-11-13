import {
    ForwardRefExoticComponent,
    InputHTMLAttributes,
    RefAttributes
} from 'react';

declare namespace ReactInputMask {
    interface MaskedState {
        value: string;
        selection: { start: number; end: number };
    }

    interface ReactInputMaskProps
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
}

declare const ReactInputMask: ForwardRefExoticComponent<
    ReactInputMask.ReactInputMaskProps & RefAttributes<HTMLInputElement>
>;

export = ReactInputMask;
