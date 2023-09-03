declare namespace OO.ui {
    /**
     * ListToolGroups are one of three types of {@link OO.ui.ToolGroup toolgroups} that are used to
     * create {@link OO.ui.Toolbar toolbars} (the other types of groups are
     * {@link OO.ui.MenuToolGroup MenuToolGroup} and {@link OO.ui.BarToolGroup BarToolGroup}).
     * The {@link OO.ui.Tool tools} in a ListToolGroup are displayed by label in a dropdown menu.
     * The title of the tool is used as the label text. The menu itself can be configured with a label,
     * icon, indicator, header, and title.
     *
     * ListToolGroups can be configured to be expanded and collapsed. Collapsed lists will have a
     * ‘More’ option that users can select to see the full list of tools. If a collapsed toolgroup is
     * expanded, a ‘Fewer’ option permits users to collapse the list again.
     *
     * ListToolGroups are created by a {@link OO.ui.ToolGroupFactory toolgroup factory} when the
     * toolbar is set up. The factory requires the ListToolGroup's symbolic name, 'list', which is
     * specified along with the other configurations. For more information about how to add tools to a
     * ListToolGroup, please see {@link OO.ui.ToolGroup toolgroup}.
     *
     *     // Example of a ListToolGroup
     *     var toolFactory = new OO.ui.ToolFactory();
     *     var toolGroupFactory = new OO.ui.ToolGroupFactory();
     *     var toolbar = new OO.ui.Toolbar( toolFactory, toolGroupFactory );
     *
     *     // Configure and register two tools
     *     function SettingsTool() {
     *         SettingsTool.super.apply( this, arguments );
     *     }
     *     OO.inheritClass( SettingsTool, OO.ui.Tool );
     *     SettingsTool.static.name = 'settings';
     *     SettingsTool.static.icon = 'settings';
     *     SettingsTool.static.title = 'Change settings';
     *     SettingsTool.prototype.onSelect = function () {
     *         this.setActive( false );
     *     };
     *     SettingsTool.prototype.onUpdateState = function () {};
     *     toolFactory.register( SettingsTool );
     *     // Register two more tools, nothing interesting here
     *     function StuffTool() {
     *         StuffTool.super.apply( this, arguments );
     *     }
     *     OO.inheritClass( StuffTool, OO.ui.Tool );
     *     StuffTool.static.name = 'stuff';
     *     StuffTool.static.icon = 'search';
     *     StuffTool.static.title = 'Change the world';
     *     StuffTool.prototype.onSelect = function () {
     *         this.setActive( false );
     *     };
     *     StuffTool.prototype.onUpdateState = function () {};
     *     toolFactory.register( StuffTool );
     *     toolbar.setup( [
     *         {
     *             // Configurations for list toolgroup.
     *             type: 'list',
     *             label: 'ListToolGroup',
     *             icon: 'ellipsis',
     *             title: 'This is the title, displayed when user moves the mouse over the list ' +
     *                 'toolgroup',
     *             header: 'This is the header',
     *             include: [ 'settings', 'stuff' ],
     *             allowCollapse: ['stuff']
     *         }
     *     ] );
     *
     *     // Create some UI around the toolbar and place it in the document
     *     var frame = new OO.ui.PanelLayout( {
     *         expanded: false,
     *         framed: true
     *     } );
     *     frame.$element.append(
     *         toolbar.$element
     *     );
     *     $( document.body ).append( frame.$element );
     *     // Build the toolbar. This must be done after the toolbar has been appended to the document.
     *     toolbar.initialize();
     *
     * For more information about toolbars in general, please see the
     * [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Toolbars).
     *
     * ResourceLoader module: `oojs-ui-toolbars`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.ListToolGroup
     */
    interface ListToolGroup extends ListToolGroup.Props, ListToolGroup.Prototype {}

    namespace ListToolGroup {
        interface ConfigOptions extends PopupToolGroup.ConfigOptions {
            /**
             * Allow the specified tools to be collapsed. By default, collapsible
             * tools will only be displayed if users click the ‘More’ option displayed at the bottom
             * of the list. If the list is expanded, a ‘Fewer’ option permits users to collapse the
             * list again. Any tools that are included in the toolgroup, but are not designated as
             * collapsible, will always be displayed.
             * To open a collapsible list in its expanded state, set {@link expanded} to 'true'.
             */
            allowCollapse?: string[];

            /**
             * Expand the specified tools. All other tools will be designated as
             * collapsible. Unless #expanded is set to true, the collapsible tools will be collapsed
             * when the list is first opened.
             */
            forceExpand?: string[];

            /**
             * Expand collapsible tools. This config is only relevant if tools
             * have been designated as collapsible. When expanded is set to true, all tools in the
             * group will be displayed when the list is first opened. Users can collapse the list
             * with a ‘Fewer’ option at the bottom.
             */
            expanded?: boolean;
        }

        type Static = PopupToolGroup.Static;

        type Props = PopupToolGroup.Props;

        interface Prototype extends PopupToolGroup.Prototype {
            /**
             * Get the expand/collapse tool for this group
             *
             * @return Expand collapse tool
             */
            getExpandCollapseTool(): Tool;

            updateCollapsibleState(): void;
        }

        interface Constructor {
            /**
             * @param toolbar
             * @param config Configuration options
             */
            new(toolbar: Toolbar, config?: ConfigOptions): ListToolGroup;
            prototype: Prototype;
            static: Static;
            super: PopupToolGroup.Constructor;
            /** @deprecated Use `super` instead */
            parent: PopupToolGroup.Constructor;
        }
    }

    const ListToolGroup: ListToolGroup.Constructor;
}
