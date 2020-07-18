import { Dashicon } from '@wordpress/components';
import { ComponentType } from 'react';

declare namespace AlignmentToolbar {
    interface Props {
        alignmentControls?: Array<{
            align: string;
            icon: Dashicon.Icon | JSX.Element;
            title: string;
        }>;
        children?: never;
        value: string | undefined;
        onChange(newValue: string | undefined): void;
    }
}

declare const AlignmentToolbar: ComponentType<AlignmentToolbar.Props>;

export default AlignmentToolbar;
