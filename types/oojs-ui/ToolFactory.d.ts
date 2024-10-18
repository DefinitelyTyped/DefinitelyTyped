declare namespace OO.ui {
    type ToolExtractionCollection = string | { name: string } | { group: string };

    /**
     * ToolGroupFactories create {@link OO.ui.ToolGroup toolgroups} on demand. The toolgroup classes
     * must specify a symbolic name and be registered with the factory. The following classes are
     * registered by default:
     *
     * - {@link OO.ui.BarToolGroup BarToolGroups} (‘bar’)
     * - {@link OO.ui.MenuToolGroup MenuToolGroups} (‘menu’)
     * - {@link OO.ui.ListToolGroup ListToolGroups} (‘list’)
     *
     * See {@link OO.ui.Toolbar toolbars} for an example.
     *
     * For more information about toolbars in general, please see the
     * [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Toolbars).
     *
     * ResourceLoader module: `oojs-ui-toolbars`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.ToolFactory
     */
    interface ToolFactory extends Factory {
        /**
         * Get tools from the factory.
         *
         * @param include Included tools, see extract for format
         * @param exclude Excluded tools, see extract for format
         * @param promote Promoted tools, see extract for format
         * @param demote Demoted tools, see extract for format
         * @return List of tools
         */
        getTools(
            include: ToolExtractionCollection[] | ToolExtractionCollection,
            exclude: ToolExtractionCollection[] | ToolExtractionCollection,
            promote: ToolExtractionCollection[] | ToolExtractionCollection,
            demote: ToolExtractionCollection[] | ToolExtractionCollection,
        ): string[];
    }

    const ToolFactory: {
        new(): ToolFactory;
        prototype: ToolFactory;
        static: {};
        super: FactoryConstructor;
        /** @deprecated Use `super` instead */
        parent: FactoryConstructor;
    };
}
