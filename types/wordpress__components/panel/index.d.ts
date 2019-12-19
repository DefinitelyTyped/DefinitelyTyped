import { ComponentType, ReactNode } from '@wordpress/element';

declare namespace Panel {
    interface Props {
        children: ReactNode;
        /**
         * Title of the `Panel`. Text will be rendered inside an `<h2>` tag.
         */
        header?: string;
        /**
         * The class that will be added with `components-panel`. If no
         * `className` is passed only `components-panel__body` and `is-opened`
         * is used.
         */
        className?: string;
    }
}
declare const Panel: ComponentType<Panel.Props>;

export default Panel;
