import { ComponentType } from '@wordpress/element';

declare namespace TabPanel {
    interface Tab {
        /**
         * Defines the key for the tab.
         */
        name: string;
        /**
         * Defines the translated text for the tab.
         */
        title: string;
        /**
         * Defines the class to put on the tab.
         */
        className?: string;
        /**
         * Other fields may be added to the object and accessed from the child
         * function if desired.
         */
        [k: string]: any;
    }
    interface Props {
        /**
         * The class to add to the active tab.
         * @defaultValue "is-active"
         */
        activeClass?: string;
        /**
         * A function which renders the tabviews given the selected tab. The
         * function is passed the active tab object as an argument as defined
         * the the tabs prop. The element to which the tooltip should anchor.
         */
        children(tab: Tab): JSX.Element;
        /**
         * The class to give to the outer container for the `TabPanel`.
         */
        className?: string;
        /**
         * Optionally provide a tab name for a tab to be selected upon mounting
         * of component. If this prop is not set, the first tab will be
         * selected by default.
         */
        initialTabName?: string;
        /**
         * The orientation of the tablist.
         * @defaultValue "horizontal"
         */
        orientation?: 'horizontal' | 'vertical';
        tabs: readonly Tab[];
        /**
         * The function called when a tab has been selected. It is passed the
         * `tabName` as an argument.
         */
        onSelect?(tabName: string): void;
    }
}
declare const TabPanel: ComponentType<TabPanel.Props>;

export default TabPanel;
