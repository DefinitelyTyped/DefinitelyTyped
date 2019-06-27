import { ComponentType, ReactNode } from '@wordpress/element';

import Icon from '../icon';

declare namespace PanelBody {
    interface Props {
        /**
         * Title of the `PanelBody`. This shows even when it is closed.
         */
        title?: string;
        /**
         * If opened is true then the `Panel` will remain open regardless of
         * the `initialOpen` prop and the panel will be prevented from being
         * closed.
         */
        opened?: boolean;
        /**
         * The class that will be added with `components-panel__body`, if the
         * panel is currently open, the `is-opened` class will also be passed
         * to the classes of the wrapper div. If no `className` is passed then
         * only `components-panel__body` and `is-opened` is used.
         */
        className?: any;
        /**
         * An icon to be shown next to the `PanelBody` title.
         */
        icon?: Icon.IconType<{}>;
        /**
         * A function that is called when the user clicks on the `PanelBody`
         * title after the open state is changed.
         */
        onToggle?(): void;
        /**
         * Whether or not the panel will start open.
         * @defaultValue true
         */
        initialOpen?: boolean;
        children: ReactNode;
    }
}
declare const PanelBody: ComponentType<PanelBody.Props>;

export default PanelBody;
