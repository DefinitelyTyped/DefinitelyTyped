import { ComponentType, HTMLProps } from '@wordpress/element';

import Icon from '../icon';

declare namespace Placeholder {
    interface Props extends HTMLProps<HTMLDivElement> {
        /**
         * If provided, renders an icon next to the label.
         */
        icon?: Icon.IconType<{}>;
        /**
         * Renders a label for the placeholder.
         */
        label?: string;
        /**
         * Renders instruction text below label.
         */
        instructions?: string;
        /**
         * Changes placeholder children layout from `flex-row` to
         * `flex-column`.
         */
        isColumnLayout?: boolean;
        /**
         * Optionally pass in `noticeUI` obtained from `withNotices` HOC.
         */
        notices?: JSX.Element;
        /**
         * Used internally to display a preview.
         * See {@link https://github.com/WordPress/gutenberg/tree/master/packages/block-editor/src/components/media-placeholder | MediaPlaceholder}
         */
        preview?: JSX.Element;
    }
}
declare const Placeholder: ComponentType<Placeholder.Props>;

export default Placeholder;
