declare namespace OO.ui {
    /**
     * Popup tools open a popup window when they are selected from the {@link OO.ui.Toolbar toolbar}.
     * Each popup tool is configured with a static name, title, and icon, as well with as any popup
     * configurations. Unlike other tools, popup tools do not require that developers specify an
     * #onSelect or #onUpdateState method, as these methods have been implemented already.
     *
     *     // Example of a popup tool. When selected, a popup tool displays
     *     // a popup window.
     *     function HelpTool( toolGroup, config ) {
     *        OO.ui.PopupTool.call( this, toolGroup, $.extend( { popup: {
     *            padded: true,
     *            label: 'Help',
     *            head: true
     *        } }, config ) );
     *        this.popup.$body.append( '<p>I am helpful!</p>' );
     *     };
     *     OO.inheritClass( HelpTool, OO.ui.PopupTool );
     *     HelpTool.static.name = 'help';
     *     HelpTool.static.icon = 'help';
     *     HelpTool.static.title = 'Help';
     *     toolFactory.register( HelpTool );
     *
     * For an example of a toolbar that contains a popup tool, see {@link OO.ui.Toolbar toolbars}.
     * For more information about toolbars in general, please see the
     * [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Toolbars).
     *
     * ResourceLoader module: `oojs-ui-toolbars`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.PopupTool
     */
    interface PopupTool extends PopupTool.Props, PopupTool.Prototype {}

    namespace PopupTool {
        interface ConfigOptions extends Tool.ConfigOptions, mixin.PopupElement.ConfigOptions {}

        type Static = Tool.Static;

        type Props = Tool.Props;

        interface Prototype extends Tool.Prototype, mixin.PopupElement {
            /**
             * Handle popup visibility being toggled.
             *
             * @param isVisible
             */
            onPopupToggle(isVisible: boolean): void;
        }

        interface Constructor {
            /**
             * @param toolGroup
             * @param config Configuration options
             */
            new(toolGroup: ToolGroup, config?: ConfigOptions): PopupTool;
            prototype: Prototype;
            static: Static;
            super: Tool.Constructor;
            /** @deprecated Use `super` instead */
            parent: Tool.Constructor;
        }
    }

    const PopupTool: PopupTool.Constructor;
}
