declare namespace OO.ui {
    /**
     * Toolbars are complex interface components that permit users to easily access a variety
     * of {@link OO.ui.Tool tools} (e.g., formatting commands) and actions, which are additional
     * commands that are part of the toolbar, but not configured as tools.
     *
     * Individual tools are customized and then registered with a
     * {@link OO.ui.ToolFactory tool factory}, which creates the tools on demand. Each tool has a
     * symbolic name (used when registering the tool), a title (e.g., ‘Insert image’), and an icon.
     *
     * Individual tools are organized in {@link OO.ui.ToolGroup toolgroups}, which can be
     * {@link OO.ui.MenuToolGroup menus} of tools, {@link OO.ui.ListToolGroup lists} of tools, or a
     * single {@link OO.ui.BarToolGroup bar} of tools. The arrangement and order of the toolgroups is
     * customized when the toolbar is set up. Tools can be presented in any order, but each can only
     * appear once in the toolbar.
     *
     * The toolbar can be synchronized with the state of the external "application", like a text
     * editor's editing area, marking tools as active/inactive (e.g. a 'bold' tool would be shown as
     * active when the text cursor was inside bolded text) or enabled/disabled (e.g. a table caption
     * tool would be disabled while the user is not editing a table). A state change is signalled by
     * emitting the {@link Toolbar.EventMap.updateState 'updateState' event}, which calls Tools'
     * {@link OO.ui.Tool.onUpdateState onUpdateState method}.
     *
     * The following is an example of a basic toolbar.
     *
     *     // Example of a toolbar
     *     // Create the toolbar
     *     var toolFactory = new OO.ui.ToolFactory();
     *     var toolGroupFactory = new OO.ui.ToolGroupFactory();
     *     var toolbar = new OO.ui.Toolbar( toolFactory, toolGroupFactory );
     *
     *     // We will be placing status text in this element when tools are used
     *     var $area = $( '<p>' ).text( 'Toolbar example' );
     *
     *     // Define the tools that we're going to place in our toolbar
     *
     *     // Create a class inheriting from OO.ui.Tool
     *     function SearchTool() {
     *         SearchTool.super.apply( this, arguments );
     *     }
     *     OO.inheritClass( SearchTool, OO.ui.Tool );
     *     // Each tool must have a 'name' (used as an internal identifier, see later) and at least one
     *     // of 'icon' and 'title' (displayed icon and text).
     *     SearchTool.static.name = 'search';
     *     SearchTool.static.icon = 'search';
     *     SearchTool.static.title = 'Search...';
     *     // Defines the action that will happen when this tool is selected (clicked).
     *     SearchTool.prototype.onSelect = function () {
     *         $area.text( 'Search tool clicked!' );
     *         // Never display this tool as "active" (selected).
     *         this.setActive( false );
     *     };
     *     SearchTool.prototype.onUpdateState = function () {};
     *     // Make this tool available in our toolFactory and thus our toolbar
     *     toolFactory.register( SearchTool );
     *
     *     // Register two more tools, nothing interesting here
     *     function SettingsTool() {
     *         SettingsTool.super.apply( this, arguments );
     *     }
     *     OO.inheritClass( SettingsTool, OO.ui.Tool );
     *     SettingsTool.static.name = 'settings';
     *     SettingsTool.static.icon = 'settings';
     *     SettingsTool.static.title = 'Change settings';
     *     SettingsTool.prototype.onSelect = function () {
     *         $area.text( 'Settings tool clicked!' );
     *         this.setActive( false );
     *     };
     *     SettingsTool.prototype.onUpdateState = function () {};
     *     toolFactory.register( SettingsTool );
     *
     *     // Register two more tools, nothing interesting here
     *     function StuffTool() {
     *         StuffTool.super.apply( this, arguments );
     *     }
     *     OO.inheritClass( StuffTool, OO.ui.Tool );
     *     StuffTool.static.name = 'stuff';
     *     StuffTool.static.icon = 'ellipsis';
     *     StuffTool.static.title = 'More stuff';
     *     StuffTool.prototype.onSelect = function () {
     *         $area.text( 'More stuff tool clicked!' );
     *         this.setActive( false );
     *     };
     *     StuffTool.prototype.onUpdateState = function () {};
     *     toolFactory.register( StuffTool );
     *
     *     // This is a PopupTool. Rather than having a custom 'onSelect' action, it will display a
     *     // little popup window (a PopupWidget).
     *     function HelpTool( toolGroup, config ) {
     *         OO.ui.PopupTool.call( this, toolGroup, $.extend( { popup: {
     *             padded: true,
     *             label: 'Help',
     *             head: true
     *         } }, config ) );
     *         this.popup.$body.append( '<p>I am helpful!</p>' );
     *     }
     *     OO.inheritClass( HelpTool, OO.ui.PopupTool );
     *     HelpTool.static.name = 'help';
     *     HelpTool.static.icon = 'help';
     *     HelpTool.static.title = 'Help';
     *     toolFactory.register( HelpTool );
     *
     *     // Finally define which tools and in what order appear in the toolbar. Each tool may only be
     *     // used once (but not all defined tools must be used).
     *     toolbar.setup( [
     *         {
     *             // 'bar' tool groups display tools' icons only, side-by-side.
     *             type: 'bar',
     *             include: [ 'search', 'help' ]
     *         },
     *         {
     *             // 'list' tool groups display both the titles and icons, in a dropdown list.
     *             type: 'list',
     *             indicator: 'down',
     *             label: 'More',
     *             include: [ 'settings', 'stuff' ]
     *         }
     *         // Note how the tools themselves are toolgroup-agnostic - the same tool can be displayed
     *         // either in a 'list' or a 'bar'. There is a 'menu' tool group too, not showcased here,
     *         // since it's more complicated to use. (See the next example snippet on this page.)
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
     * The following example extends the previous one to illustrate 'menu' toolgroups and the usage of
     * {@link Toolbar.EventMap.updateState 'updateState' event}.
     *
     *     // Create the toolbar
     *     var toolFactory = new OO.ui.ToolFactory();
     *     var toolGroupFactory = new OO.ui.ToolGroupFactory();
     *     var toolbar = new OO.ui.Toolbar( toolFactory, toolGroupFactory );
     *
     *     // We will be placing status text in this element when tools are used
     *     var $area = $( '<p>' ).text( 'Toolbar example' );
     *
     *     // Define the tools that we're going to place in our toolbar
     *
     *     // Create a class inheriting from OO.ui.Tool
     *     function SearchTool() {
     *         SearchTool.super.apply( this, arguments );
     *     }
     *     OO.inheritClass( SearchTool, OO.ui.Tool );
     *     // Each tool must have a 'name' (used as an internal identifier, see later) and at least one
     *     // of 'icon' and 'title' (displayed icon and text).
     *     SearchTool.static.name = 'search';
     *     SearchTool.static.icon = 'search';
     *     SearchTool.static.title = 'Search...';
     *     // Defines the action that will happen when this tool is selected (clicked).
     *     SearchTool.prototype.onSelect = function () {
     *         $area.text( 'Search tool clicked!' );
     *         // Never display this tool as "active" (selected).
     *         this.setActive( false );
     *     };
     *     SearchTool.prototype.onUpdateState = function () {};
     *     // Make this tool available in our toolFactory and thus our toolbar
     *     toolFactory.register( SearchTool );
     *
     *     // Register two more tools, nothing interesting here
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
     *     // Register two more tools, nothing interesting here
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
     *     // This is a PopupTool. Rather than having a custom 'onSelect' action, it will display a
     *     // little popup window (a PopupWidget). 'onUpdateState' is also already implemented.
     *     function HelpTool( toolGroup, config ) {
     *         OO.ui.PopupTool.call( this, toolGroup, $.extend( { popup: {
     *             padded: true,
     *             label: 'Help',
     *             head: true
     *         } }, config ) );
     *         this.popup.$body.append( '<p>I am helpful!</p>' );
     *     }
     *     OO.inheritClass( HelpTool, OO.ui.PopupTool );
     *     HelpTool.static.name = 'help';
     *     HelpTool.static.icon = 'help';
     *     HelpTool.static.title = 'Help';
     *     toolFactory.register( HelpTool );
     *
     *     // Finally define which tools and in what order appear in the toolbar. Each tool may only be
     *     // used once (but not all defined tools must be used).
     *     toolbar.setup( [
     *         {
     *             // 'bar' tool groups display tools' icons only, side-by-side.
     *             type: 'bar',
     *             include: [ 'search', 'help' ]
     *         },
     *         {
     *             // 'menu' tool groups display both the titles and icons, in a dropdown menu.
     *             // Menu label indicates which items are selected.
     *             type: 'menu',
     *             indicator: 'down',
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
     * ResourceLoader module: `oojs-ui-toolbars`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.Toolbar
     */
    interface Toolbar extends Toolbar.Props, Toolbar.Prototype {}

    namespace Toolbar {
        interface ToolGroupSetupMap extends ToolGroup.ConfigOptions {
            /** Symbolic name for this toolgroup */
            name: string;
            /**
             * Toolgroup type, e.g. "bar", "list", or "menu". Should exist in the
             * {@link OO.ui.ToolGroupFactory} provided via the constructor. Defaults to "list" for
             * catch-all groups where `include='*'`, otherwise "bar".
             */
            type?: string;
        }

        interface EventMap extends mixin.GroupElement.EventMap {
            updateState: [data: unknown];
            active: [hasActive: boolean];
            resize: [];
        }

        interface ConfigOptions extends Element.ConfigOptions, mixin.GroupElement.ConfigOptions {
            /**
             * Add an actions section to the toolbar. Actions are commands that are
             * included in the toolbar, but are not configured as tools. By default, actions are
             * displayed on the right side of the toolbar.
             * This feature is deprecated. It is suggested to use the ToolGroup 'align' property
             * instead.
             *
             * @deprecated
             */
            actions?: boolean;
            /** Whether the toolbar is positioned above ('top') or below ('bottom') content. */
            position?: "top" | "bottom";
            /**
             * An overlay for the popup.
             * See <https://www.mediawiki.org/wiki/OOUI/Concepts#Overlays>.
             */
            $overlay?: JQuery;
        }

        type Static = Element.Static;

        interface Props extends Element.Props, mixin.GroupElement.Props {
            $bar: JQuery;
            $after: JQuery;
            $actions: JQuery;
            $popups: JQuery;
            $overlay: JQuery;
        }

        interface Prototype extends Element.Prototype, EventEmitter {
            /**
             * Get the tool factory.
             *
             * @return Tool factory
             */
            getToolFactory(): ToolFactory;

            /**
             * Get the toolgroup factory.
             *
             * @return Toolgroup factory
             */
            getToolGroupFactory(): ToolGroupFactory;

            insertItemElements(itemWidget: Element, index: number): void;

            /**
             * Sets up handles and preloads required information for the toolbar to work.
             * This must be called after it is attached to a visible document and before doing anything else.
             */
            initialize(): void;

            /**
             * Set up the toolbar.
             *
             * The toolbar is set up with a list of toolgroup configurations that specify the type of
             * toolgroup ({@link OO.ui.BarToolGroup bar}, {@link OO.ui.MenuToolGroup menu}, or
             * {@link OO.ui.ListToolGroup list}) to add and which tools to include, exclude, promote, or demote
             * within that toolgroup. Please see {@link OO.ui.ToolGroup toolgroups} for more information about
             * including tools in toolgroups.
             *
             * @param groups List of toolgroup configurations
             */
            setup(groups: ToolGroupSetupMap[]): void;

            /**
             * Handle active events from tool groups
             *
             * @param active Tool group has become active, inactive if false
             */
            onToolGroupActive(active: boolean): void;

            /**
             * Get a toolgroup by name
             *
             * @param name Group name
             * @return Tool group, or null if none found by that name
             */
            getToolGroupByName(name: string): ToolGroup | null;

            /**
             * Remove all tools and toolgroups from the toolbar.
             */
            reset(): void;

            /**
             * Destroy the toolbar.
             *
             * Destroying the toolbar removes all event handlers and DOM elements that constitute the toolbar.
             * Call this method whenever you are done using a toolbar.
             */
            destroy(): void;

            /**
             * Check if the tool is available.
             *
             * Available tools are ones that have not yet been added to the toolbar.
             *
             * @param name Symbolic name of tool
             * @return Tool is available
             */
            isToolAvailable(name: string): boolean;

            /**
             * Prevent tool from being used again.
             *
             * @param tool Tool to reserve
             */
            reserveTool(tool: Tool): void;

            /**
             * Allow tool to be used again.
             *
             * @param tool Tool to release
             */
            releaseTool(tool: Tool): void;

            /**
             * Get accelerator label for tool.
             *
             * The OOUI library does not contain an accelerator system, but this is the hook for one. To
             * use an accelerator system, subclass the toolbar and override this method, which is meant to
             * return a label that describes the accelerator keys for the tool passed (by symbolic name) to
             * the method.
             *
             * @param name Symbolic name of tool
             * @return Tool accelerator label if available
             */
            getToolAccelerator(name: string): string | undefined;

            /**
             * Check if the toolbar is in narrow mode
             *
             * @return Toolbar is in narrow mode
             */
            isNarrow(): boolean;

            /**
             * Set the narrow mode flag
             *
             * @param narrow Toolbar is in narrow mode
             */
            setNarrow(narrow: boolean): void;

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
             * @param toolFactory Factory for creating tools
             * @param toolGroupFactory Factory for creating toolgroups
             * @param config Configuration options
             */
            new(toolFactory: ToolFactory, toolGroupFactory: ToolGroupFactory, config?: ConfigOptions): Toolbar;
            prototype: Prototype;
            static: Static;
            super: Element.Constructor;
            /** @deprecated Use `super` instead */
            parent: Element.Constructor;
        }
    }

    const Toolbar: Toolbar.Constructor;
}
