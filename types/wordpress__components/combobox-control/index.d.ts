import { ComponentType } from 'react';
import BaseControl from '../base-control';

declare namespace ComboboxControl {
    interface Props extends BaseControl.ControlProps {
        allowReset?: boolean | undefined;
        messages?: Message | undefined;
        onFilterValueChange?: ((value: string) => void) | undefined;
        onChange: (value: string | null) => void;
        options: Option[];
        value?: string | null | undefined;
    }

    interface Option {
        label: string;
        value: string;
    }

    interface Message {
        selected: string;
    }
}

declare const ComboboxControl: ComponentType<ComboboxControl.Props>;

export default ComboboxControl;
