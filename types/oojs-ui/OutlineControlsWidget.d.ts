declare namespace OO.ui {
    /**
     * OutlineControlsWidget is a set of controls for an
     * {@link OO.ui.OutlineSelectWidget outline select widget}.
     * Controls include moving items up and down, removing items, and adding different kinds of
     * items.
     *
     * **Currently, this class is only used by {@link OO.ui.BookletLayout booklet layouts}.**
     *
     * ResourceLoader module: `oojs-ui-widgets`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.OutlineControlsWidget
     */
    interface OutlineControlsWidget extends OutlineControlsWidget.Props, OutlineControlsWidget.Prototype {}

    namespace OutlineControlsWidget {
        interface Abilities {
            /** Allow moving movable items */
            move?: boolean;
            /** Allow removing removable items */
            remove?: boolean;
        }

        // HACK: See SelectWidget.d.ts
        interface EventMap extends Widget.EventMap {
            move: [places: number];
            remove: [];

            // Omit<mixin.GroupElement.EventMap, 'move' | 'remove' >
            change: [items: Element[]];
            add: [item: EventEmitter, index: number];
            clear: [];
        }

        interface ConfigOptions extends Widget.ConfigOptions, mixin.GroupElement.ConfigOptions {
            /** List of abilities */
            abilities?: Abilities;
        }

        type Static = Widget.Static;

        interface Props extends Widget.Props, mixin.GroupElement.Props {
            $movers: JQuery;
        }

        interface Prototype extends Widget.Prototype, mixin.GroupElement.Prototype {
            /**
             * Set abilities.
             *
             * @param abilities List of abilities
             */
            setAbilities(abilities: Abilities): void;

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
            /** @param config Configuration options */
            new(config?: ConfigOptions): OutlineControlsWidget;
            prototype: Prototype;
            static: Static;
            super: Widget.Constructor;
            /** @deprecated Use `super` instead */
            parent: Widget.Constructor;
        }
    }

    const OutlineControlsWidget: OutlineControlsWidget.Constructor;
}
