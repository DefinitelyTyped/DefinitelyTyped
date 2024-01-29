import { Dashicon, Slot } from "@wordpress/components";
import { FC, JSX, ReactNode } from "react";

declare namespace PluginDocumentSettingPanel {
    interface Props {
        children: ReactNode;
        /**
         * The machine-friendly name for the panel.
         */
        name?: string | undefined;
        /**
         * An optional class name added to the row.
         */
        className?: string | undefined;
        /**
         * The title of the panel.
         */
        title?: string | undefined;
        /**
         * A Dashicon slug or a custom JSX element to be rendered when the sidebar is pinned to
         * toolbar.
         */
        icon?: Dashicon.Icon | JSX.Element | undefined;
    }
}

/**
 * Renders items below the Status & Availability panel in the Document Sidebar.
 *
 * @example
 * ```jsx
 * const { registerPlugin } = wp.plugins;
 * const { PluginDocumentSettingPanel } = wp.editPost;
 *
 * const MyDocumentSettingTest = () => (
 *     <PluginDocumentSettingPanel className="my-document-setting-plugin" title="My Panel">
 *         <p>My Document Setting Panel</p>
 *     </PluginDocumentSettingPanel>
 * );
 *
 * registerPlugin( 'document-setting-test', { render: MyDocumentSettingTest } );
 * ```
 */
declare const PluginDocumentSettingPanel: {
    (props: PluginDocumentSettingPanel.Props): JSX.Element;
    Slot: FC<Omit<Slot.Props, "name">>;
};

export default PluginDocumentSettingPanel;
