declare namespace OO.ui {
    /**
     * MenuToolGroups are one of three types of {@link OO.ui.ToolGroup toolgroups} that are used to
     * create {@link OO.ui.Toolbar toolbars} (the other types of groups are
     * {@link OO.ui.BarToolGroup BarToolGroup} and {@link OO.ui.ListToolGroup ListToolGroup}).
     * MenuToolGroups contain selectable {@link OO.ui.Tool tools}, which are displayed by label in a
     * dropdown menu. The tool's title is used as the label text, and the menu label is updated to
     * reflect which tool or tools are currently selected. If no tools are selected, the menu label
     * is empty. The menu can be configured with an indicator, icon, title, and/or header.
     *
     * MenuToolGroups are created by a {@link OO.ui.ToolGroupFactory tool group factory} when the
     * toolbar is set up.
     *
     *     // Example of a MenuToolGroup
     *     var toolFactory = new OO.ui.ToolFactory();
     *     var toolGroupFactory = new OO.ui.ToolGroupFactory();
     *     var toolbar = new OO.ui.Toolbar( toolFactory, toolGroupFactory );
     *
     *     // We will be placing status text in this element when tools are used
     *     var $area = $( '<p>' ).text( 'An example of a MenuToolGroup. Select a tool from the '
     *         + 'dropdown menu.' );
     *
     *     // Define the tools that we're going to place in our toolbar
     *
     *     function SettingsTool() {
     *         SettingsTool.super.apply( this, arguments );
     *         this.reallyActive = false;
     *     }
     *     OO.inheritClass( SettingsTool, OO.ui.Tool );
     *     SettingsTool.static.name = 'settings';
     *     SettingsTool.static.icon = 'settings';
     *     SettingsTool.static.title = 'Change settings';
     *     SettingsTool.prototype.onSelect = function () {
     *         $area.text( 'Settings tool clicked!' );
     *         // Toggle the active state on each click
     *         this.reallyActive = !this.reallyActive;
     *         this.setActive( this.reallyActive );
     *         // To update the menu label
     *         this.toolbar.emit( 'updateState' );
     *     };
     *     SettingsTool.prototype.onUpdateState = function () {};
     *     toolFactory.register( SettingsTool );
     *
     *     function StuffTool() {
     *         StuffTool.super.apply( this, arguments );
     *         this.reallyActive = false;
     *     }
     *     OO.inheritClass( StuffTool, OO.ui.Tool );
     *     StuffTool.static.name = 'stuff';
     *     StuffTool.static.icon = 'ellipsis';
     *     StuffTool.static.title = 'More stuff';
     *     StuffTool.prototype.onSelect = function () {
     *         $area.text( 'More stuff tool clicked!' );
     *         // Toggle the active state on each click
     *         this.reallyActive = !this.reallyActive;
     *         this.setActive( this.reallyActive );
     *         // To update the menu label
     *         this.toolbar.emit( 'updateState' );
     *     };
     *     StuffTool.prototype.onUpdateState = function () {};
     *     toolFactory.register( StuffTool );
     *
     *     // Finally define which tools and in what order appear in the toolbar. Each tool may only be
     *     // used once (but not all defined tools must be used).
     *     toolbar.setup( [
     *         {
     *             type: 'menu',
     *             header: 'This is the (optional) header',
     *             title: 'This is the (optional) title',
     *             include: [ 'settings', 'stuff' ]
     *         }
     *     ] );
     *
     *     // Create some UI around the toolbar and place it in the document
     *     var frame = new OO.ui.PanelLayout( {
     *         expanded: false,
     *         framed: true
     *     } );
     *     var contentFrame = new OO.ui.PanelLayout( {
     *         expanded: false,
     *         padded: true
     *     } );
     *     frame.$element.append(
     *         toolbar.$element,
     *         contentFrame.$element.append( $area )
     *     );
     *     $( document.body ).append( frame.$element );
     *
     *     // Here is where the toolbar is actually built. This must be done after inserting it into the
     *     // document.
     *     toolbar.initialize();
     *     toolbar.emit( 'updateState' );
     *
     * For more information about how to add tools to a MenuToolGroup, please see
     * {@link OO.ui.ToolGroup toolgroup}.
     * For more information about toolbars in general, please see the
     * [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Toolbars).
     *
     * ResourceLoader module: `oojs-ui-toolbars`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.MenuToolGroup
     */
    interface MenuToolGroup extends MenuToolGroup.Props, MenuToolGroup.Prototype {}

    namespace MenuToolGroup {
        type ConfigOptions = PopupToolGroup.ConfigOptions;

        type Static = PopupToolGroup.Static;

        type Props = PopupToolGroup.Props;

        type Prototype = PopupToolGroup.Prototype;

        interface Constructor {
            /**
             * @param toolbar
             * @param config Configuration options
             */
            new(toolbar: Toolbar, config?: ConfigOptions): MenuToolGroup;
            prototype: Prototype;
            static: Static;
            super: PopupToolGroup.Constructor;
            /** @deprecated Use `super` instead */
            parent: PopupToolGroup.Constructor;
        }
    }

    const MenuToolGroup: MenuToolGroup.Constructor;
}
