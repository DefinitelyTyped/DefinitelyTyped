declare namespace OO.ui {
    /**
     * PopupToolGroup is an abstract base class used by both {@link OO.ui.MenuToolGroup MenuToolGroup}
     * and {@link OO.ui.ListToolGroup ListToolGroup} to provide a popup (an overlaid menu or list of
     * tools with an optional icon and label). This class can be used for other base classes that
     * also use this functionality.
     *
     * ResourceLoader module: `oojs-ui-toolbars`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.PopupToolGroup
     */
    interface PopupToolGroup extends PopupToolGroup.Props, PopupToolGroup.Prototype {}

    namespace PopupToolGroup {
        interface EventMap extends ToolGroup.EventMap, mixin.LabelElement.EventMap, mixin.FlaggedElement.EventMap {}

        interface ConfigOptions
            extends
                ToolGroup.ConfigOptions,
                mixin.IconElement.ConfigOptions,
                mixin.IndicatorElement.ConfigOptions,
                mixin.LabelElement.ConfigOptions,
                mixin.TitledElement.ConfigOptions,
                mixin.FlaggedElement.ConfigOptions,
                mixin.ClippableElement.ConfigOptions,
                mixin.FloatableElement.ConfigOptions,
                mixin.TabIndexedElement.ConfigOptions
        {
            /** Text to display at the top of the popup */
            header?: string;
            /** See {@link Static.narrowConfig static.narrowConfig} */
            narrowConfig?: Pick<this, `invisibleLabel` | `label` | `icon`>;
        }

        interface Static
            extends
                ToolGroup.Static,
                mixin.IconElement.Static,
                mixin.IndicatorElement.Static,
                mixin.LabelElement.Static,
                mixin.TitledElement.Static,
                mixin.FlaggedElement.Static
        {
            /**
             * Config options to change when toolbar is in narrow mode
             *
             * Supports `invisibleLabel`, `label` and `icon` properties.
             */
            narrowConfig: Pick<ConfigOptions, `invisibleLabel` | `label` | `icon`> | null;
        }

        interface Props
            extends
                ToolGroup.Props,
                mixin.IconElement.Props,
                mixin.IndicatorElement.Props,
                mixin.LabelElement.Props,
                mixin.TitledElement.Props,
                mixin.FlaggedElement.Props,
                mixin.ClippableElement.Props,
                mixin.FloatableElement.Props,
                mixin.TabIndexedElement.Props
        {
            $handle: JQuery;
        }

        interface Prototype
            extends
                ToolGroup.Prototype,
                mixin.IconElement.Prototype,
                mixin.IndicatorElement.Prototype,
                mixin.LabelElement.Prototype,
                mixin.TitledElement.Prototype,
                mixin.FlaggedElement.Prototype,
                mixin.ClippableElement.Prototype,
                mixin.FloatableElement.Prototype,
                mixin.TabIndexedElement.Prototype
        {
            /**
             * Handle resize events from the toolbar
             */
            onToolbarResize(): void;

            /**
             * Check if the tool group is active.
             *
             * @return Tool group is active
             */
            isActive(): boolean;

            /**
             * Switch into 'active' mode.
             *
             * When active, the popup is visible. A mouseup event anywhere in the document will trigger
             * deactivation.
             *
             * @param value The active state to set
             */
            setActive(value: boolean): void;

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
            new(toolbar: Toolbar, config?: ConfigOptions): PopupToolGroup;
            prototype: Prototype;
            static: Static;
            super: ToolGroup.Constructor;
            /** @deprecated Use `super` instead */
            parent: ToolGroup.Constructor;
        }
    }

    const PopupToolGroup: PopupToolGroup.Constructor;
}
