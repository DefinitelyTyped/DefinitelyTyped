declare namespace OO.ui {
    /**
     * ToolGroups are collections of {@link OO.ui.Tool tools} that are used in a
     * {@link OO.ui.Toolbar toolbar}.
     * The type of toolgroup ({@link OO.ui.ListToolGroup list}, {@link OO.ui.BarToolGroup bar}, or
     * {@link OO.ui.MenuToolGroup menu}) to which a tool belongs determines how the tool is arranged
     * and displayed in the toolbar. Toolgroups themselves are created on demand with a
     * {@link OO.ui.ToolGroupFactory toolgroup factory}.
     *
     * Toolgroups can contain individual tools, groups of tools, or all available tools, as specified
     * using the `include` config option. See OO.ui.ToolFactory.extract on documentation of the format.
     * The options `exclude`, `promote`, and `demote` support the same formats.
     *
     * See {@link OO.ui.Toolbar toolbars} for a full example. For more information about toolbars in
     * general, please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Toolbars).
     *
     * ResourceLoader module: `oojs-ui-toolbars`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.Toolbar
     */
    interface ToolGroup extends ToolGroup.Props, ToolGroup.Prototype {}

    namespace ToolGroup {
        interface EventMap extends Widget.EventMap, mixin.GroupElement.EventMap {
            update: [];
            active: [visible: boolean];
        }

        interface ConfigOptions extends Widget.ConfigOptions, mixin.GroupElement.ConfigOptions {
            /** List of tools to include in the toolgroup, see above. */
            include?: ToolExtractionCollection[] | ToolExtractionCollection;
            /** List of tools to exclude from the toolgroup, see above. */
            exclude?: ToolExtractionCollection[] | ToolExtractionCollection;
            /** List of tools to promote to the beginning of the toolgroup, see above. */
            promote?: ToolExtractionCollection[] | ToolExtractionCollection;
            /**
             * List of tools to demote to the end of the toolgroup, see above.
             * This setting is particularly useful when tools have been added to the toolgroup
             * en masse (e.g., via the catch-all selector).
             */
            demote?: ToolExtractionCollection[] | ToolExtractionCollection;
            /** Alignment within the toolbar, either 'before' or 'after'. */
            align?: "before" | "after";
        }

        interface Static extends Widget.Static {
            /** Show labels in tooltips. */
            titleTooltips: boolean;

            /**
             * Show acceleration labels in tooltips.
             *
             * Note: The OOUI library does not include an accelerator system, but does contain
             * a hook for one. To use an accelerator system, subclass the {@link OO.ui.Toolbar toolbar} and
             * override the {@link OO.ui.Toolbar.getToolAccelerator getToolAccelerator} method, which is
             * meant to return a label that describes the accelerator keys for a given tool (e.g., Control+M
             * key combination).
             */
            accelTooltips: boolean;

            /** Automatically disable the toolgroup when all tools are disabled */
            autoDisable: boolean;

            name: string;
        }

        interface Props extends Widget.Props, mixin.GroupElement.Props {}

        interface Prototype extends Widget.Prototype, mixin.GroupElement.Prototype {
            /**
             * Get the toolbar that contains the toolgroup.
             *
             * @return Toolbar that contains the toolgroup
             */
            getToolbar(): Toolbar;

            /**
             * Add and remove tools based on configuration.
             */
            populate(): void;

            /**
             * Destroy toolgroup.
             */
            destroy(): void;

            // #region EventEmitter overloads
            on<K extends keyof EventMap, A extends ArgTuple = [], C = null>(
                event: K,
                method: EventHandler<C, (this: C, ...args: [...A, ...EventMap[K]]) => void>,
                args?: A,
                context?: C,
            ): this;
            on<K extends string, C = null>(
                event: K extends keyof EventMap ? never : K,
                method: EventHandler<C>,
                args?: any[],
                context?: C,
            ): this;

            once<K extends keyof EventMap>(event: K, listener: (this: null, ...args: EventMap[K]) => void): this;
            once<K extends string>(
                event: K extends keyof EventMap ? never : K,
                listener: (this: null, ...args: any[]) => void,
            ): this;

            off<K extends keyof EventMap, C = null>(
                event: K,
                method?: EventHandler<C, (this: C, ...args: EventMap[K]) => void>,
                context?: C,
            ): this;
            off<K extends string, C = null>(
                event: K extends keyof EventMap ? never : K,
                method?: EventHandler<C>,
                context?: C,
            ): this;

            emit<K extends keyof EventMap>(event: K, ...args: EventMap[K]): boolean;
            emit<K extends string>(event: K extends keyof EventMap ? never : K, ...args: any[]): boolean;

            emitThrow<K extends keyof EventMap>(event: K, ...args: EventMap[K]): boolean;
            emitThrow<K extends string>(event: K extends keyof EventMap ? never : K, ...args: any[]): boolean;

            connect<T extends Partial<Record<keyof EventMap, any>>, C>( // eslint-disable-line @definitelytyped/no-unnecessary-generics
                context: C,
                methods: EventConnectionMap<T, C, EventMap>,
            ): this;

            disconnect<T extends Partial<Record<keyof EventMap, any>>, C>( // eslint-disable-line @definitelytyped/no-unnecessary-generics
                context: C,
                methods?: EventConnectionMap<T, C, EventMap>,
            ): this;
            // #endregion
        }

        interface Constructor {
            /**
             * @param toolbar
             * @param config Configuration options
             */
            new(toolbar: Toolbar, config?: ConfigOptions): ToolGroup;
            prototype: Prototype;
            static: Static;
            super: Widget.Constructor;
            /** @deprecated Use `super` instead */
            parent: Widget.Constructor;
        }
    }

    const ToolGroup: ToolGroup.Constructor;
}
