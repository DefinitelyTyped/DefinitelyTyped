declare module Ionic {
    /**
     * Angular service: $ionicSideMenuDelegate
     * 
     * Delegate for controlling the ionSideMenus directive.
     * Methods called directly on the $ionicSideMenuDelegate service will control all side menus. Use the $getByHandle method to control specific ionSideMenus instances.
     */
    interface ISideMenuDelegate {
        /**
         * Toggle the left side menu (if it exists).
         * 
         * @param isOpen Whether to open or close the menu. Default: Toggles the menu.
         */
        toggleLeft(isOpen?: boolean): void;


        /**
         * Toggle the right side menu (if it exists).
         * 
         * @param isOpen Whether to open or close the menu. Default: Toggles the menu.
         */
        toggleRight(isOpen?: boolean): void;

        /**
         * Gets the ratio of open amount over menu width. For example, a menu of width 100 that is opened by 50 pixels is 50% opened, and would return a ratio of 0.5.
         * Returns 0 if nothing is open, between 0 and 1 if left menu is opened/opening, and between 0 and -1 if right menu is opened/opening.
         */
        getOpenRatio(): number;

        /**
         * Returns whether either the left or right menu is currently opened.
         */
        isOpen(): boolean;

        /**
         * Returns whether the left menu is currently opened.
         */
        isOpenLeft(): boolean;

        /**
         * Returns whether the right menu is currently opened.
         */
        isOpenRight(): boolean;

        /**
         * Returns whether the content can be dragged to open side menus.
         * 
         * @param canDrag Set whether the content can or cannot be dragged to open side menus
         */
        canDragContent(canDrag?: boolean): boolean;

        /**
         * Returns whether the drag can start only from within the edge of screen threshold.
         * 
         * @param value Set whether the content drag can only start if it is below a certain threshold distance from the edge of the screen. If a non-zero number is given, that many pixels is used as the maximum allowed distance from the edge that starts dragging the side menu. If 0 is given, the edge drag threshold is disabled, and dragging from anywhere on the content is allowed.
         */
        edgeDragThreshold(value: boolean): boolean;

        /**
         * Returns whether the drag can start only from within the edge of screen threshold.
         * 
         * @param value Set whether the content drag can only start if it is below a certain threshold distance from the edge of the screen. If true is given, the default number of pixels (25) is used as the maximum allowed distance. If false is given, the edge drag threshold is disabled, and dragging from anywhere on the content is allowed.
         */
        edgeDragThreshold(value: number): boolean;

        /**
         * Return a delegate instance that controls only the ionSideMenus directives with delegate-handle matching the given handle.
         */
        $getByHandle(handle: string): ISideMenuDelegate;
    }
}