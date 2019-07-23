import { ComponentType } from '@wordpress/element';

declare namespace BlockAlignmentToolbar {
    type Control = 'center' | 'full' | 'left' | 'right' | 'wide';
    interface Props {
        children?: never;
        controls?: Control[];
        isCollapsed?: boolean;
        onChange(newValue: Control | undefined): void;
        value: Control;
    }
}

declare const BlockAlignmentToolbar: ComponentType<BlockAlignmentToolbar.Props>;

export default BlockAlignmentToolbar;
