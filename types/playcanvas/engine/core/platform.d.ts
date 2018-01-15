import { platform } from "os";

declare namespace pc {

    /**
     * @name pc.platform
     * @namespace
     * @description global namespace that stores flags regarding platform environment and features support
     * @example
     * if (pc.platform.touch) {
     *     // touch is supported
     * }
     */
    namespace platform {
        /**
         * @name pc.platform.desktop
         * @description is it a desktop or laptop device
         */
        const desktop: boolean;

        /**
         * @name pc.platform.mobile
         * @description is it a mobile or tablet device
         */
        const mobile: boolean;

        /**
         * @name pc.platform.ios
         * @description if it is iOS
         */
        const ios: boolean;

        /**
         * @name pc.platform.android
         * @description if it is Android
         */
        const android: boolean;

        /**
         * @name pc.platform.windows
         * @description if it is Windows
         */
        const windows: boolean;

        /**
         * @name pc.platform.cocoonjs
         * @description if it is CocoonJS
         */
        const cocoonjs: boolean;

        /**
         * @name pc.platform.xbox
         * @description if it is Xbox
         */
        const xbox: boolean;

        /**
         * @name pc.platform.gamepads
         * @description if platform supports gamepads
         */
        const gamepads: boolean;

        /**
         * @name pc.platform.touch
         * @description if platform supports touch input
         */
        const touch: boolean;
    }
}
