declare namespace OO.ui {
    /**
     * A ToolGroupTool is a special sort of tool that can contain other {@link OO.ui.Tool tools}
     * and {@link OO.ui.ToolGroup toolgroups}. The ToolGroupTool was specifically designed to be used
     * inside a {@link OO.ui.BarToolGroup bar} toolgroup to provide access to additional tools from
     * the bar item. Included tools will be displayed in a dropdown {@link OO.ui.ListToolGroup list}
     * when the ToolGroupTool is selected.
     *
     *     // Example: ToolGroupTool with two nested tools, 'setting1' and 'setting2',
     *     // defined elsewhere.
     *
     *     function SettingsTool() {
     *         SettingsTool.super.apply( this, arguments );
     *     };
     *     OO.inheritClass( SettingsTool, OO.ui.ToolGroupTool );
     *     SettingsTool.static.name = 'settings';
     *     SettingsTool.static.title = 'Change settings';
     *     SettingsTool.static.groupConfig = {
     *         icon: 'settings',
     *         label: 'ToolGroupTool',
     *         include: [ 'setting1', 'setting2' ]
     *     };
     *     toolFactory.register( SettingsTool );
     *
     * For more information, please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Toolbars#ToolGroupTool).
     *
     * Please note that this implementation is subject to change per [T74159](https://phabricator.wikimedia.org/T74159).
     *
     * ResourceLoader module: `oojs-ui-toolbars`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.ToolGroupTool
     */
    interface ToolGroupTool extends ToolGroupTool.Props, ToolGroupTool.Prototype {}

    namespace ToolGroupTool {
        type ConfigOptions = Tool.ConfigOptions;

        interface Static extends Tool.Static {
            /**
             * Toolgroup configuration.
             *
             * The toolgroup configuration consists of the tools to include, as well as an icon and
             * label to use for the bar item. Tools can be included by symbolic name, group, or with
             * the wildcard selector. Please see {@link OO.ui.ToolGroup toolgroup} for more
             * information.
             */
            groupConfig: ListToolGroup.ConfigOptions;
        }

        type Props = Tool.Props;

        interface Prototype extends Tool.Prototype {
            /**
             * Build a {@link OO.ui.ToolGroup toolgroup} from the specified configuration.
             *
             * @param group Toolgroup configuration. Please see {@link OO.ui.ToolGroup toolgroup}
             *  for more information.
             * @return
             */
            createGroup(group: ListToolGroup.ConfigOptions): ListToolGroup;
        }

        interface Constructor {
            /**
             * @param toolGroup
             * @param config Configuration options
             */
            new(toolGroup: ToolGroup, config?: ConfigOptions): ToolGroupTool;
            prototype: Prototype;
            static: Static;
            super: Tool.Constructor;
            /** @deprecated Use `super` instead */
            parent: Tool.Constructor;
        }
    }

    const ToolGroupTool: ToolGroupTool.Constructor;
}
