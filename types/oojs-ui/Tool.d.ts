declare namespace OO.ui {
    /**
     * Tools, together with {@link OO.ui.ToolGroup toolgroups}, constitute
     * {@link OO.ui.Toolbar toolbars}.
     * Each tool is configured with a static name, title, and icon and is customized with the command
     * to carry out when the tool is selected. Tools must also be registered with a
     * {@link OO.ui.ToolFactory tool factory}, which creates the tools on demand.
     *
     * Every Tool subclass must implement two methods:
     *
     * - {@link onUpdateState}
     * - {@link onSelect}
     *
     * Tools are added to toolgroups ({@link OO.ui.ListToolGroup ListToolGroup},
     * {@link OO.ui.BarToolGroup BarToolGroup}, or {@link OO.ui.MenuToolGroup MenuToolGroup}), which
     * determine how the tool is displayed in the toolbar. See {@link OO.ui.Toolbar toolbars} for an
     * example.
     *
     * For more information, please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Toolbars).
     *
     * ResourceLoader module: `oojs-ui-toolbars`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.Tool
     */
    interface Tool extends Tool.Props, Tool.Prototype {}

    namespace Tool {
        interface EventMap extends Widget.EventMap, mixin.FlaggedElement.EventMap {}

        interface ConfigOptions
            extends
                Widget.ConfigOptions,
                mixin.IconElement.ConfigOptions,
                mixin.FlaggedElement.ConfigOptions,
                mixin.TabIndexedElement.ConfigOptions
        {
            /**
             * Title text or a function that returns text. If this config is omitted, the value of
             * the {@link Static.title static title} property is used.
             */
            title?: Deferrable<string>;

            /**
             * See {@link Static.narrowConfig static.narrowConfig}
             *
             * The title is used in different ways depending on the type of toolgroup that contains the tool.
             * The title is used as a tooltip if the tool is part of a {@link OO.ui.BarToolGroup bar}
             * toolgroup, or as the label text if the tool is part of a {@link OO.ui.ListToolGroup list} or
             * {@link OO.ui.MenuToolGroup menu} toolgroup.
             *
             * For bar toolgroups, a description of the accelerator key is appended to the title if an
             * accelerator key is associated with an action by the same name as the tool and accelerator
             * functionality has been added to the application.
             * To add accelerator key functionality, you must subclass OO.ui.Toolbar and override the
             * {@link OO.ui.Toolbar.getToolAccelerator getToolAccelerator} method.
             */
            displayBothIconAndLabel?: boolean;
        }

        interface Static extends Widget.Static, mixin.IconElement.Static, mixin.FlaggedElement.Static {
            /**
             * Symbolic name of tool.
             *
             * The symbolic name is used internally to register the tool with a
             * {@link OO.ui.ToolFactory ToolFactory}. It can also be used when adding tools to
             * toolgroups.
             */
            name: string;

            /**
             * Symbolic name of the group.
             *
             * The group name is used to associate tools with each other so that they can be
             * selected later by a {@link OO.ui.ToolGroup toolgroup}.
             */
            group: string;

            /**
             * Tool title text or a function that returns title text. The value of the static property is
             * overridden if the {@link ConfigOptions.title title} config option is used.
             */
            title: Deferrable<string>;

            /**
             * Display both icon and label when the tool is used in a {@link OO.ui.BarToolGroup bar}
             * toolgroup.
             * Normally only the icon is displayed, or only the label if no icon is given.
             */
            displayBothIconAndLabel: boolean;

            /**
             * Add tool to catch-all groups automatically.
             *
             * A catch-all group, which contains all tools that do not currently belong to a toolgroup,
             * can be included in a toolgroup using the wildcard selector, an asterisk (*).
             */
            autoAddToCatchall: boolean;

            /**
             * Add tool to named groups automatically.
             *
             * By default, tools that are configured with a static ‘group’ property are added
             * to that group and will be selected when the symbolic name of the group is specified
             * (e.g., when toolgroups include tools by group name).
             */
            autoAddToGroup: boolean;

            /**
             * Check if this tool is compatible with given data.
             *
             * This is a stub that can be overridden to provide support for filtering tools based on an
             * arbitrary piece of information  (e.g., where the cursor is in a document). The implementation
             * must also call this method so that the compatibility check can be performed.
             *
             * @param data Data to check
             * @return Tool can be used with data
             */
            isCompatibleWith(data: any): boolean;

            /**
             * Config options to change when toolbar is in narrow mode
             *
             * Supports `displayBothIconAndLabel`, `title` and `icon` properties.
             */
            narrowConfig: Partial<Pick<this, `displayBothIconAndLabel` | `title` | `icon`>> | null;
        }

        interface Props
            extends Widget.Props, mixin.IconElement.Props, mixin.FlaggedElement.Props, mixin.TabIndexedElement.Props
        {
            $title: JQuery;
            $accel: JQuery;
            $link: JQuery;
        }

        interface Prototype
            extends
                Widget.Prototype,
                mixin.IconElement.Prototype,
                mixin.FlaggedElement.Prototype,
                mixin.TabIndexedElement.Prototype
        {
            /**
             * Handle the toolbar state being updated. This method is called when the
             * {@link OO.ui.Toolbar.EventMap.updateState 'updateState' event} is emitted on the
             * {@link OO.ui.Toolbar Toolbar} that uses this tool, and should set the state of this tool
             * depending on application state (usually by calling {@link setDisabled} to enable or disable the tool,
             * or {@link setActive} to mark is as currently in-use or not).
             *
             * This is an abstract method that must be overridden in a concrete subclass.
             */
            onUpdateState(): void;

            /**
             * Handle the tool being selected. This method is called when the user triggers this tool,
             * usually by clicking on its label/icon.
             *
             * This is an abstract method that must be overridden in a concrete subclass.
             */
            onSelect(): void;

            /**
             * Check if the tool is active.
             *
             * Tools become active when their {@link onSelect} or {@link onUpdateState} handlers
             * change them to appear pressed with the {@link setActive} method. Additional CSS is
             * applied to the tool to reflect the active state.
             *
             * @return Tool is active
             */
            isActive(): boolean;

            /**
             * Make the tool appear active or inactive.
             *
             * This method should be called within {@link onSelect} or {@link onUpdateState} event
             * handlers to make the tool appear pressed or not.
             *
             * @param state Make tool appear active
             */
            setActive(state: boolean): void;

            /**
             * Set the tool {@link ConfigOptions.title title}.
             *
             * @param title Title text or a function that returns text
             * @return The tool, for chaining
             */
            setTitle(title: Deferrable<string>): this;

            /**
             * Set the tool's displayBothIconAndLabel state.
             *
             * Update title classes if necessary
             *
             * @param displayBothIconAndLabel
             * @return The tool, for chaining
             */
            setDisplayBothIconAndLabel(displayBothIconAndLabel: boolean): this;

            /**
             * Get the tool {@link ConfigOptions.title title}.
             *
             * @return Title text
             */
            getTitle(): string;

            /**
             * Get the tool's symbolic name.
             *
             * @return Symbolic name of tool
             */
            getName(): string;

            /**
             * Handle resize events from the toolbar
             */
            onToolbarResize(): void;

            /**
             * Update the title.
             */
            updateTitle(): void;

            /**
             * Destroy tool.
             *
             * Destroying the tool removes all event handlers and the tool’s DOM elements.
             * Call this method whenever you are done using a tool.
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
             * @param toolGroup
             * @param config Configuration options
             */
            new(toolGroup: ToolGroup, config?: ConfigOptions): Tool;
            prototype: Prototype;
            static: Static;
            super: Widget.Constructor;
            /** @deprecated Use `super` instead */
            parent: Widget.Constructor;
        }
    }

    const Tool: Tool.Constructor;
}
