import { ComponentType } from 'react';

declare namespace BlockVerticalAlignmentToolbar {
    type Value = 'bottom' | 'center' | 'top' | undefined;
    interface Props {
        children?: never;
        value: Value;
        onChange(newValue: Value): void;
    }
}
declare const BlockVerticalAlignmentToolbar: ComponentType<BlockVerticalAlignmentToolbar.Props>;

export default BlockVerticalAlignmentToolbar;
