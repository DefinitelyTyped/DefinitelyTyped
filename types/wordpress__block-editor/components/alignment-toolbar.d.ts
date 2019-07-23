import { Dashicon } from '@wordpress/components';
import { ComponentType } from '@wordpress/element';

declare namespace AlignmentToolbar {
    interface Props {
        alignmentControls?: Array<{
            align: string;
            icon: Dashicon.Icon | JSX.Element;
            title: string;
        }>;
        children?: never;
        value: string;
        onChange(newValue?: string): void;
    }
}

declare const AlignmentToolbar: ComponentType<AlignmentToolbar.Props>;

export default AlignmentToolbar;
