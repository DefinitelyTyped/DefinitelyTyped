import { ComponentType, ReactNode } from 'react';

declare namespace ComboboxControl {
    interface Props {
        value: string | number;
        label?: ReactNode | undefined;
        options: Array<{ label: string | number; value: string }>;
        onChange: (value: string | null) => void;
        onFilterValueChange?: (value: string) => void;
        hideLabelFromVision?: boolean | undefined;
        help?: ReactNode | undefined;
        allowReset?: boolean;
        className?: string;
        messages?: { selected: string };
    }
}
declare const ComboboxControl: ComponentType<ComboboxControl.Props>;

export default ComboboxControl;
