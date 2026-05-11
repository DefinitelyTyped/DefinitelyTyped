declare namespace OO.ui {
    /**
     * ActionSets manage the behavior of the {@link OO.ui.ActionWidget action widgets} that
     * comprise them.
     * Actions can be made available for specific contexts (modes) and circumstances
     * (abilities). Action sets are primarily used with {@link OO.ui.Dialog Dialogs}.
     *
     * ActionSets contain two types of actions:
     *
     * - Special: Special actions are the first visible actions with special flags, such as 'safe' and
     *  'primary', the default special flags. Additional special flags can be configured in subclasses
     *  with the static {@link ActionSet.Static.specialFlags specialFlags} property.
     * - Other: Other actions include all non-special visible actions.
     *
     * See the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Windows/Process_Dialogs#Action_sets)
     * for more information.
     *
     *     // Example: An action set used in a process dialog
     *     function MyProcessDialog( config ) {
     *         MyProcessDialog.super.call( this, config );
     *     }
     *     OO.inheritClass( MyProcessDialog, OO.ui.ProcessDialog );
     *     MyProcessDialog.static.title = 'An action set in a process dialog';
     *     MyProcessDialog.static.name = 'myProcessDialog';
     *     // An action set that uses modes ('edit' and 'help' mode, in this example).
     *     MyProcessDialog.static.actions = [
     *         {
     *           action: 'continue',
     *           modes: 'edit',
     *           label: 'Continue',
     *           flags: [ 'primary', 'progressive' ]
     *         },
     *         { action: 'help', modes: 'edit', label: 'Help' },
     *         { modes: 'edit', label: 'Cancel', flags: 'safe' },
     *         { action: 'back', modes: 'help', label: 'Back', flags: 'safe' }
     *     ];
     *
     *     MyProcessDialog.prototype.initialize = function () {
     *         MyProcessDialog.super.prototype.initialize.apply( this, arguments );
     *         this.panel1 = new OO.ui.PanelLayout( { padded: true, expanded: false } );
     *         this.panel1.$element.append( '<p>This dialog uses an action set (continue, help, ' +
     *             'cancel, back) configured with modes. This is edit mode. Click \'help\' to see ' +
     *             'help mode.</p>' );
     *         this.panel2 = new OO.ui.PanelLayout( { padded: true, expanded: false } );
     *         this.panel2.$element.append( '<p>This is help mode. Only the \'back\' action widget ' +
     *              'is configured to be visible here. Click \'back\' to return to \'edit\' mode.' +
     *              '</p>' );
     *         this.stackLayout = new OO.ui.StackLayout( {
     *             items: [ this.panel1, this.panel2 ]
     *         } );
     *         this.$body.append( this.stackLayout.$element );
     *     };
     *     MyProcessDialog.prototype.getSetupProcess = function ( data ) {
     *         return MyProcessDialog.super.prototype.getSetupProcess.call( this, data )
     *             .next( function () {
     *                 this.actions.setMode( 'edit' );
     *             }, this );
     *     };
     *     MyProcessDialog.prototype.getActionProcess = function ( action ) {
     *         if ( action === 'help' ) {
     *             this.actions.setMode( 'help' );
     *             this.stackLayout.setItem( this.panel2 );
     *         } else if ( action === 'back' ) {
     *             this.actions.setMode( 'edit' );
     *             this.stackLayout.setItem( this.panel1 );
     *         } else if ( action === 'continue' ) {
     *             var dialog = this;
     *             return new OO.ui.Process( function () {
     *                 dialog.close();
     *             } );
     *         }
     *         return MyProcessDialog.super.prototype.getActionProcess.call( this, action );
     *     };
     *     MyProcessDialog.prototype.getBodyHeight = function () {
     *         return this.panel1.$element.outerHeight( true );
     *     };
     *     var windowManager = new OO.ui.WindowManager();
     *     $( document.body ).append( windowManager.$element );
     *     var dialog = new MyProcessDialog( {
     *         size: 'medium'
     *     } );
     *     windowManager.addWindows( [ dialog ] );
     *     windowManager.openWindow( dialog );
     *
     * ResourceLoader module: `oojs-ui-windows`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.ActionSet
     */
    interface ActionSet extends EventEmitter {
        /**
         * Check if an action is one of the special actions.
         *
         * @param action Action to check
         * @return Action is special
         */
        isSpecial(action: ActionWidget): boolean;

        /**
         * Get action widgets based on the specified filter: ‘actions’, ‘flags’, ‘modes’, ‘visible’,
         *  or ‘disabled’.
         *
         * @param filters Filters to use, omit to get all actions
         * @return Action widgets matching all criteria
         */
        get(filters?: ActionSet.ActionFilter): ActionWidget[];

        /**
         * Get 'special' actions.
         *
         * Special actions are the first visible action widgets with special flags, such as 'safe' and
         * 'primary'.
         * Special flags can be configured in subclasses by changing the static
         * {@link ActionSet.Static.specialFlags specialFlags} property.
         *
         * @return 'Special' action widgets.
         */
        getSpecial(): ActionWidget[] | null;

        /**
         * Get 'other' actions.
         *
         * Other actions include all non-special visible action widgets.
         *
         * @return 'Other' action widgets
         */
        getOthers(): ActionWidget[];

        /**
         * Set the mode (e.g., ‘edit’ or ‘view’). Only {@link ActionWidget.ConfigOptions.modes actions}
         * configured to be available in the specified mode will be made visible. All other actions
         * will be hidden.
         *
         * @param mode The mode. Only actions configured to be available in the specified
         *  mode will be made visible.
         * @return The widget, for chaining
         */
        setMode(mode: string): this;

        /**
         * Set the abilities of the specified actions.
         *
         * Action widgets that are configured with the specified actions will be enabled
         * or disabled based on the boolean values specified in the `actions`
         * parameter.
         *
         * @param actions A list keyed by action name with boolean
         *  values that indicate whether or not the action should be enabled.
         * @return The widget, for chaining
         */
        setAbilities(actions: Record<string, boolean>): this;

        /**
         * Executes a function once per action.
         *
         * When making changes to multiple actions, use this method instead of iterating over the
         * actions manually to defer emitting a {@link ActionSet.EventMap.change change} event until
         * after all actions have been changed.
         *
         * @param filter Filters to use to determine which actions to iterate over;
         *  see {@link get}
         * @param callback Callback to run for each action; callback is invoked with
         *  three arguments: the action, the action's index, the list of actions being iterated over
         * @return The widget, for chaining
         */
        forEach(
            filter: ActionSet.ActionFilter | null,
            callback: (action: ActionWidget, index: number, list: ActionWidget[]) => void,
        ): this;

        /**
         * Add action widgets to the action set.
         *
         * @param actions Action widgets to add
         * @return The widget, for chaining
         */
        add(actions: ActionWidget[]): this;

        /**
         * Remove action widgets from the set.
         *
         * To remove all actions, you may wish to use the {@link clear} method instead.
         *
         * @param actions Action widgets to remove
         * @return The widget, for chaining
         */
        remove(actions: ActionWidget[]): this;

        /**
         * Remove all action widgets from the set.
         *
         * To remove only specified actions, use the {@link remove} method instead.
         *
         * @return The widget, for chaining
         */
        clear(): this;

        // #region EventEmitter overloads
        on<K extends keyof ActionSet.EventMap, A extends ArgTuple = [], C = null>(
            event: K,
            method: EventHandler<C, (this: C, ...args: [...A, ...ActionSet.EventMap[K]]) => void>,
            args?: A,
            context?: C,
        ): this;
        on<K extends string, C = null>(
            event: K extends keyof ActionSet.EventMap ? never : K,
            method: EventHandler<C>,
            args?: any[],
            context?: C,
        ): this;

        once<K extends keyof ActionSet.EventMap>(
            event: K,
            listener: (this: null, ...args: ActionSet.EventMap[K]) => void,
        ): this;
        once<K extends string>(
            event: K extends keyof ActionSet.EventMap ? never : K,
            listener: (this: null, ...args: any[]) => void,
        ): this;

        off<K extends keyof ActionSet.EventMap, C = null>(
            event: K,
            method?: EventHandler<C, (this: C, ...args: ActionSet.EventMap[K]) => void>,
            context?: C,
        ): this;
        off<K extends string, C = null>(
            event: K extends keyof ActionSet.EventMap ? never : K,
            method?: EventHandler<C>,
            context?: C,
        ): this;

        emit<K extends keyof ActionSet.EventMap>(event: K, ...args: ActionSet.EventMap[K]): boolean;
        emit<K extends string>(event: K extends keyof ActionSet.EventMap ? never : K, ...args: any[]): boolean;

        emitThrow<K extends keyof ActionSet.EventMap>(event: K, ...args: ActionSet.EventMap[K]): boolean;
        emitThrow<K extends string>(event: K extends keyof ActionSet.EventMap ? never : K, ...args: any[]): boolean;

        connect<T extends Partial<Record<keyof ActionSet.EventMap, any>>, C>( // eslint-disable-line @definitelytyped/no-unnecessary-generics
            context: C,
            methods: EventConnectionMap<T, C, ActionSet.EventMap>,
        ): this;

        disconnect<T extends Partial<Record<keyof ActionSet.EventMap, any>>, C>( // eslint-disable-line @definitelytyped/no-unnecessary-generics
            context: C,
            methods?: EventConnectionMap<T, C, ActionSet.EventMap>,
        ): this;
        // #endregion
    }

    namespace ActionSet {
        interface ActionFilter {
            /** Actions that action widgets must have */
            actions?: string | string[];
            /** Flags that action widgets must have (e.g., 'safe') */
            flags?: string | string[];
            /** Modes that action widgets must have */
            modes?: string | string[];
            /** Visibility that action widgets must have, omit to get both visible and invisible */
            visible?: boolean;
            /** Disabled state that action widgets must have, omit to get both enabled and disabled */
            disabled?: boolean;
        }

        interface EventMap {
            click: [action: ActionWidget];
            add: [added: ActionWidget[]];
            remove: [removed: ActionWidget[]];
            change: [];
        }

        interface Static {
            /**
             * Symbolic name of the flags used to identify special actions. Special actions are
             * displayed in the header of a {@link OO.ui.ProcessDialog process dialog}.
             * See the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Windows/Process_Dialogs)
             * for more information and examples.
             */
            specialFlags: string[];
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: {}): ActionSet;
            prototype: ActionSet;
            static: Static;
        }
    }

    const ActionSet: ActionSet.Constructor;
}
