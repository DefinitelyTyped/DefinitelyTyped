// Type definitions for non-npm package Knuddels UserApps API 1.20210326150104
// Project: https://developer.knuddels.de
// Definitions by: Knuddels GmbH & Co. KG <https://github.com/Knuddels>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// helper types
export type JsonData = string | number | boolean | Date | Json | JsonArray | undefined;
export type KnuddelsEvent = string | Json | KnuddelsEventArray;

// API
declare global {
    interface Json {
        [x: string]: JsonData | undefined;
    }

    interface JsonArray extends Array<JsonData> {}

    interface KnuddelsEventArray extends Array<string | Json | KnuddelsEventArray> {}

    /**
     * @see https://developer.knuddels.de/docs/classes/Client.html
     */
    class Client {}
    namespace Client {
        /**
         * @see https://developer.knuddels.de/docs/classes/Client.html#method_prefetchSound
         */
        function prefetchSound(fileName: string): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/Client.html#method_removeConnectionTypeChangeListener
         */
        function removeConnectionTypeChangeListener(callback: (type: string) => void): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/Client.html#method_dispatchEvent
         */
        function dispatchEvent(event: Event): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/Client.html#method_getHostFrame
         */
        function getHostFrame(): HostFrame;
        /**
         * @see https://developer.knuddels.de/docs/classes/Client.html#method_getCacheInvalidationId
         */
        function getCacheInvalidationId(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/Client.html#method_includeCSS
         */
        function includeCSS(...files: string[]): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/Client.html#method_getDirectConnection
         */
        function getDirectConnection(): Promise<void>;
        /**
         * @see https://developer.knuddels.de/docs/classes/Client.html#method_getClientType
         */
        function getClientType(): ClientType;
        /**
         * @see https://developer.knuddels.de/docs/classes/Client.html#method_removeEventListener
         */
        function removeEventListener(
            type: string,
            callback?: (event: { type: string; data: KnuddelsEvent }) => void,
        ): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/Client.html#method_isK3Client
         */
        function isK3Client(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/Client.html#method_includeJS
         */
        function includeJS(...files: string[]): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/Client.html#method_playSound
         */
        function playSound(fileName: string): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/Client.html#method_sendEvent
         */
        function sendEvent(type: string, data: KnuddelsEvent): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/Client.html#method_addConnectionTypeChangeListener
         */
        function addConnectionTypeChangeListener(callback: (type: string) => void): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/Client.html#method_getNick
         */
        function getNick(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/Client.html#method_close
         */
        function close(): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/Client.html#method_executeSlashCommand
         */
        function executeSlashCommand(command: string): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/Client.html#method_freeSound
         */
        function freeSound(fileName: string): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/Client.html#method_addEventListener
         */
        function addEventListener(type: string, callback: (event: { type: string; data: KnuddelsEvent }) => void): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/Client.html#property_pageData
         */
        const pageData: Json;
        /**
         * @see https://developer.knuddels.de/docs/classes/Client.Event.html
         */
        // tslint:disable-next-line:no-unnecessary-class
        class Event {
            /**
             * @see https://developer.knuddels.de/docs/classes/Client.Event.html#method_Event
             */
            constructor(type: string, data: KnuddelsEvent);
        }

        /**
         * @see https://developer.knuddels.de/docs/classes/Client.HostFrame.html
         */
        class HostFrame {
            /**
             * @see https://developer.knuddels.de/docs/classes/Client.HostFrame.html#method_setBackgroundColor
             */
            setBackgroundColor(newColor: Color, durationMillis?: number): void;
            /**
             * @see https://developer.knuddels.de/docs/classes/Client.HostFrame.html#method_setSize
             * @since Applet: 9.0bwj, AppServer: 84516
             */
            setSize(width: number, height: number): void;
            /**
             * @see https://developer.knuddels.de/docs/classes/Client.HostFrame.html#method_setResizable
             */
            setResizable(resizable: boolean): void;
            /**
             * @see https://developer.knuddels.de/docs/classes/Client.HostFrame.html#method_setTitle
             */
            setTitle(newTitle: string): void;
            /**
             * @see https://developer.knuddels.de/docs/classes/Client.HostFrame.html#method_focus
             * @since Applet: 9.0bwj, AppServer: 84904
             */
            focus(): void;
            /**
             * @see https://developer.knuddels.de/docs/classes/Client.HostFrame.html#method_setIcons
             * @since Applet: 9.0bwj, AppServer: 84904
             */
            setIcons(...path: string[]): void;
            /**
             * @see https://developer.knuddels.de/docs/classes/Client.HostFrame.html#method_getAppViewMode
             * @since Applet: 9.0byl
             */
            getAppViewMode(): string;
            /**
             * @see https://developer.knuddels.de/docs/classes/Client.HostFrame.html#method_getBrowserType
             * @since Applet: 9.0bzp
             */
            getBrowserType(): string;
        }

        /**
         * @see https://developer.knuddels.de/docs/classes/Client.Color.html
         */
        class Color {
            /**
             * @see https://developer.knuddels.de/docs/classes/Client.Color.html#method_fromRGB
             */
            static fromRGB(red: number, green: number, blue: number): Color;
            /**
             * @see https://developer.knuddels.de/docs/classes/Client.Color.html#method_getRed
             */
            getRed(): number;
            /**
             * @see https://developer.knuddels.de/docs/classes/Client.Color.html#method_getGreen
             */
            getGreen(): number;
            /**
             * @see https://developer.knuddels.de/docs/classes/Client.Color.html#method_fromHexString
             */
            static fromHexString(colorString: string): Color;
            /**
             * @see https://developer.knuddels.de/docs/classes/Client.Color.html#method_asHexString
             */
            asHexString(): string;
            /**
             * @see https://developer.knuddels.de/docs/classes/Client.Color.html#method_getBlue
             */
            getBlue(): number;
        }
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/ClientType.html
     */
    class ClientType {}
    namespace ClientType {
        /**
         * @see https://developer.knuddels.de/docs/classes/ClientType.html#property_Applet
         */
        const Applet: ClientType;
        /**
         * @see https://developer.knuddels.de/docs/classes/ClientType.html#property_Browser
         */
        const Browser: ClientType;
        /**
         * @see https://developer.knuddels.de/docs/classes/ClientType.html#property_Android
         */
        const Android: ClientType;
        /**
         * @see https://developer.knuddels.de/docs/classes/ClientType.html#property_IOS
         */
        const IOS: ClientType;
        /**
         * @see https://developer.knuddels.de/docs/classes/ClientType.html#property_Offline
         */
        const Offline: ClientType;
        /**
         * @see https://developer.knuddels.de/docs/classes/ClientType.html#property_Web
         */
        const Web: ClientType;
        /**
         * @see https://developer.knuddels.de/docs/classes/ClientType.html#property_MobileWeb
         */
        const MobileWeb: ClientType;
    }
}
