declare namespace pc {

    /**
     * @name pc.Controller
     * @class A general input handler which handles both mouse and keyboard input assigned to named actions.
     * This allows you to define input handlers separately to defining keyboard/mouse configurations.
     * @description Create a new instance of a Controller.
     * @param {Element} [element] Element to attach Controller to.
     * @param {Object} [options] Optional arguments.
     * @param {pc.Keyboard} [options.keyboard] A Keyboard object to use.
     * @param {pc.Mouse} [options.mouse] A Mouse object to use.
     * @param {pc.GamePads} [options.gamepads] A Gamepads object to use.
     * @example
     * var c = new pc.Controller(document)
     *
     * // Register the "fire" action and assign it to both the Enter key and the Spacebar.
     * c.registerKeys("fire", [pc.KEY_ENTER, pc.KEY_SPACE]);
     */
    class Controller {
        constructor(element?: Element, options?: {
            keyboard?: pc.Keyboard,
            mouse?: pc.Mouse,
            gamepads: pc.GamePads
        })

        /**
         * @function
         * @name pc.Controller#attach
         * @description Attach Controller to a Element, this is required before you can monitor for key/mouse inputs.
         * @param {Element} element The element to attach mouse and keyboard event handler too
         */
        attach(element: Element): void;

        /**
         * @function
         * @name pc.Controller#detach
         * @description Detach Controller from an Element, this should be done before the Controller is destroyed
         */
        detach(): void;

        /**
         * @function
         * @name pc.Controller#disableContextMenu
         * @description Disable the context menu usually activated with the right mouse button.
         */
        disableContextMenu(): void;

        /**
         * @function
         * @name pc.Controller#enableContextMenu
         * @description Enable the context menu usually activated with the right mouse button. This is enabled by default.
         */
        enableContextMenu(): void;

        /**
         * @function
         * @name pc.Controller#update
         * @description Update the Keyboard and Mouse handlers
         * @param {Object} dt The time since the last frame
         */
        update(dt: number): void;

        /**
         * @function
         * @name pc.Controller#registerKeys
         * @description Create or update a action which is enabled when the supplied keys are pressed.
         * @param {String} action The name of the action
         * @param {Number[]} keys A list of keycodes
         */
        registerKeys(action: string, keys: number[]): void;
        /**
         * @function
         * @name pc.Controller#registerMouse
         * @description Create or update an action which is enabled when the supplied mouse button is pressed
         * @param {String} action The name of the action
         * @param {Number} button The mouse button
         */
        registerMouse(action: string, button: number): void;

        /**
         * @function
         * @name pc.Controller#registerPadButton
         * @description Create or update an action which is enabled when the gamepad button is pressed
         * @param {String} action The name of the action
         * @param {Number} pad The index of the pad to register (use pc.PAD_1, etc)
         * @param {Number} button The pad button
         */
        registerPadButton(action: string, pad: number, button: number): void;

        /**
        * @function
        * @name pc.Controller#registerAxis
        * @param {Object} [options]
        * @param {Object} [options.pad] The index of the game pad to register for (use pc.PAD_1, etc)
        */
        registerAxis(options?: { pad?: number }): void;

        /**
         * @function
         * @name pc.Controller#isPressed
         * @description Return true if the current action is enabled
         * @param {String} action The name of the action
         */
        isPressed(actionName: string): boolean;

        /**
         * @function
         * @name pc.Controller#wasPressed
         * @description Returns true if the action was enabled this since the last update
         * @param {String} action The name of the action
         * @returns {Boolean} True if the action was enabled this since the last update
         */
        wasPressed(actionName: string): boolean;
    }
}
