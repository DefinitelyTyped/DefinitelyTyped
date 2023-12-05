import { ComponentType, HTMLProps, JSX } from "react";

import Icon from "../icon";

declare namespace Placeholder {
    interface Props extends HTMLProps<HTMLDivElement> {
        /**
         * If provided, renders an icon next to the label.
         */
        icon?: Icon.IconType<{}> | undefined;
        /**
         * Renders a label for the placeholder.
         */
        label?: string | undefined;
        /**
         * Renders instruction text below label.
         */
        instructions?: string | undefined;
        /**
         * Changes placeholder children layout from `flex-row` to
         * `flex-column`.
         */
        isColumnLayout?: boolean | undefined;
        /**
         * Optionally pass in `noticeUI` obtained from `withNotices` HOC.
         */
        notices?: JSX.Element | undefined;
        /**
         * Used internally to display a preview.
         * See {@link https://github.com/WordPress/gutenberg/tree/master/packages/block-editor/src/components/media-placeholder | MediaPlaceholder}
         */
        preview?: JSX.Element | undefined;
    }
}
declare const Placeholder: ComponentType<Placeholder.Props>;

export default Placeholder;
