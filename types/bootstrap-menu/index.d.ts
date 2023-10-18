/// <reference types="jquery" />

declare namespace BootstrapMenu {
    interface BootstrapMenuOptions {
        /**
         * Container of the context menu, where it will be created and where event listeners will be installed.
         */
        container?: string | undefined;

        /**
         * What the source of the context menu should be when opened. Valid values are *mouse* and *element*. Defaults to *mouse*.
         */
        menuSource?: BootstrapMenuSource | undefined;

        /**
         * How to calculate the position of the context menu based on its source. Valid values are *aboveLeft*, *aboveRight*, *belowLeft*, and *belowRight*. Defaults to *belowLeft*.
         */
        menuPosition?: BootstrapMenuPosition | undefined;

        /**
         * The event to listen to open the menu. Valid values are *click*, *right-click*, *hover*. Defaults to *right-click*.
         */
        menuEvent?: BootstrapMenuEvent | undefined;

        /**
         * Obtain specific data about the currently opened element, to pass it to the rest of user-defined functions of an action.
         */
        fetchElementData?: ((jqueryElement: JQuery) => BootstrapMenuRowElement) | undefined;

        /**
         * Array or object containing the list of actions to be rendered in the context menu.
         */
        actions: { [key: string]: BootstrapMenuActions } | ReadonlyArray<BootstrapMenuActions>;

        /**
         * Array to group actions to render them next to each other, with a separator between each group.
         */
        actionsGroups?: ReadonlyArray<ReadonlyArray<string>> | undefined;

        /**
         * Message to show when there are no actions to show in a menu
         * (isShown() returned false on all actions)
         */
        noActionsMessage?: string | undefined;

        /**
         * In some weird cases, another plugin may be installing 'click' listeners
         * in the anchors used for each action of the context menu, and stopping
         * the event bubbling before it reachs this plugin's listener.
         *
         * For those cases, _actionSelectEvent can be used to change the event we
         * listen to, for example to 'mousedown'.
         *
         * Unless the context menu is not working due to this and a workaround is
         * needed, this option can be safely ignored.
         */
        _actionSelectEvent?: string | undefined;
    }

    /**
     * Every function attribute is called before rendering the menu each time it is opened.
     * If `fetchElementData` was defined, these functions will receive as first argument its returned value for the currently selected element.
     */
    interface BootstrapMenuActions {
        /**
         * The name of the action.
         */
        name: string;

        /**
         * Handler to run when an action is clicked.
         */
        onClick: (rowElement: BootstrapMenuRowElement) => void;

        /**
         * Optional, Font Awesome class of the icon to show for the action.
         */
        iconClass?: string | undefined;

        /**
         * Optional, classes to add to the action.
         */
        classNames?: string | object | (() => string | object) | undefined;

        /**
         * Optional, decides if the action should be shown or hidden in the context menu.
         */
        isShown?: ((rowElement: BootstrapMenuRowElement) => boolean) | undefined;

        /**
         * Optional, decides if the action should appear enabled or disabled in the context menu.
         */
        isEnabled?: ((rowElement: BootstrapMenuRowElement) => boolean) | undefined;
    }

    type BootstrapMenuSource = "mouse" | "element";

    type BootstrapMenuPosition = "aboveLeft" | "aboveRight" | "belowLeft" | "belowRight";

    type BootstrapMenuEvent = "click" | "right-click" | "hover";

    type BootstrapMenuRowElement = any;
}

declare class BootstrapMenu {
    /**
     * @param selector Css selector of the element to attach the Menu to
     * @param options Options to configure the menu
     */
    constructor(selector: string, options: BootstrapMenu.BootstrapMenuOptions);

    /**
     * Close the menu and remove every event listeners
     */
    destroy: () => void;

    /**
     * Close the context menu
     */
    close: () => void;
}

export = BootstrapMenu;
