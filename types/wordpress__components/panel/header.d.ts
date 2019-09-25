import { ComponentType } from '@wordpress/element';

declare namespace PanelHeader {
    interface Props {
        /**
         * The text that will be rendered as the title of the `Panel`. Will be
         * rendered in an `<h2>` tag.
         */
        label?: string;
    }
}
declare const PanelHeader: ComponentType<PanelHeader.Props>;

export default PanelHeader;
