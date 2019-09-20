// Type definitions for material-design-lite v1.1.3
// Project: https://getmdl.io
// Definitions by: Brad Zacher <https://github.com/bradzacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module MaterialDesignLite {
    interface ComponentHandler {
        /**
         * Searches existing DOM for elements of our component type and upgrades them
         * if they have not already been upgraded.
         */
        upgradeDom() : void;
        /**
         * Searches existing DOM for elements of our component type and upgrades them
         * if they have not already been upgraded.
         *
         * @param {string} jsClass the programatic name of the element class we
         * need to create a new instance of.
         */
        upgradeDom(jsClass : string) : void;
        /**
         * Searches existing DOM for elements of our component type and upgrades them
         * if they have not already been upgraded.
         *
         * @param {string} jsClass the programatic name of the element class we
         * need to create a new instance of.
         * @param {string} cssClass the name of the CSS class elements of this
         * type will have.
         */
        upgradeDom(jsClass : string, cssClass : string) : void;

        /**
         * Upgrades a specific element rather than all in the DOM.
         *
         * @param {!Element} element The element we wish to upgrade.
         */
        upgradeElement(element : HTMLElement) : void;
        /**
         * Upgrades a specific element rather than all in the DOM.
         *
         * @param {!Element} element The element we wish to upgrade.
         * @param {string} jsClass Optional name of the class we want to upgrade
         * the element to.
         */
        upgradeElement(element : HTMLElement, jsClass : string) : void;

        /**
         * Upgrades a specific list of elements rather than all in the DOM.
         *
         * @param {!Element} elements
         * The elements we wish to upgrade.
         */
        upgradeElements(elements : HTMLElement) : void;
        /**
         * Upgrades a specific list of elements rather than all in the DOM.
         *
         * @param {!Array<!Element>} elements
         * The elements we wish to upgrade.
         */
        upgradeElements(elements : Array<HTMLElement>) : void;
        /**
         * Upgrades a specific list of elements rather than all in the DOM.
         *
         * @param {!NodeList} elements
         * The elements we wish to upgrade.
         */
        upgradeElements(elements : NodeList) : void;
        /**
         * Upgrades a specific list of elements rather than all in the DOM.
         *
         * @param {!HTMLCollection} elements
         * The elements we wish to upgrade.
         */
        upgradeElements(elements : HTMLCollection) : void;

        /**
         * Upgrades all registered components found in the current DOM. This is
         * automatically called on window load.
         */
        upgradeAllRegistered() : void;

        /**
         * Allows user to be alerted to any upgrades that are performed for a given
         * component type
         *
         * @param {string} jsClass The class name of the MDL component we wish
         * to hook into for any upgrades performed.
         * @param {function(!HTMLElement)} callback The function to call upon an
         * upgrade. This function should expect 1 parameter - the HTMLElement which
         * got upgraded.
         */
        registerUpgradedCallback(jsClass : string, callback : (element : HTMLElement) => any) : void;

        /**
         * Registers a class for future use and attempts to upgrade existing DOM.
         *
         * @param {componentHandler.ComponentConfigPublic} config the registration configuration
         */
        register(config : ComponentConfigPublic) : void;

        /**
         * Downgrade either a given node, an array of nodes, or a NodeList.
         *
         * @param {!Node} nodes The list of nodes.
         */
        downgradeElements(nodes : Node) : void;
        /**
         * Downgrade either a given node, an array of nodes, or a NodeList.
         *
         * @param {!Array<!Node>} nodes The list of nodes.
         */
        downgradeElements(nodes : Array<Node>) : void;
        /**
         * Downgrade either a given node, an array of nodes, or a NodeList.
         *
         * @param {!NodeList} nodes The list of nodes.
         */
        downgradeElements(nodes : NodeList) : void;
    }
    interface ComponentConfigPublic {
        constructor(element : HTMLElement) : void;
        classAsString : string;
        cssClass : string;
        widget? : string | boolean;
    }
}

declare var componentHandler : MaterialDesignLite.ComponentHandler;