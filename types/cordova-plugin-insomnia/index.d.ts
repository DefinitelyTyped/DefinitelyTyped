interface Window {
    plugins: Plugins;
}

interface Plugins {
    insomnia: InsomniaPlugin.Insomnia;
}

declare namespace InsomniaPlugin {
    export interface Insomnia {
        /**
         * Prevent the screen of the mobile device from falling asleep.
         */
        keepAwake(success?: () => any, fail?: () => any): void;

        /**
         * After making your app practically a zombie, you can allow it to sleep again by calling allowSleepAgain.
         */
        allowSleepAgain(success?: () => any, fail?: () => any): void;
    }
}
