declare namespace OO.ui {
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
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.ToolGroupFactory
     */
    type ToolGroupFactory = Factory;

    const ToolGroupFactory: {
        new(): ToolGroupFactory;
        prototype: ToolGroupFactory;
        static: {
            /**
             * Get a default set of classes to be registered on construction.
             *
             * @return Default classes
             */
            getDefaultClasses(): Array<new(...args: any[]) => any>;
        };
        super: FactoryConstructor;
        /** @deprecated Use `super` instead */
        parent: FactoryConstructor;
    };
}
