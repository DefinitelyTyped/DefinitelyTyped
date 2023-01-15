// Type definitions for Puzzel EUWA Wrapper Interface
// Project: https://puzzel.pkgs.visualstudio.com/public/_packaging/main/npm/registry/
// Definitions by: Mannuel Ferreira <https://github.com/mannuelf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module '@puzzel/euwa-wrapper' {
    export type Config = {
        customerKey: string;
        configId: string;
    };

    export type Options = {
        /**
         * Configures how you would like the chat client to behave on start
         * @example
         * new EUWA({ customerKey: string, configId: string }, {
         *   settings: {
         *     [EUWA.APPS.CHAT]: {
         *       showStarter: false,
         *     },
         *   },
         * })
         */
        settings: ApplicationSettings;

        /**
         * This allows you to subscribe to events or do other actions, before the applications are loaded
         * However, since the different application’s API-s are defined by the application itself,
         */
        hooks?: Hooks;
    };

    export type ApplicationList = {
        [app: string]: string;
    };

    export type Hooks = {
        /**
         * Only publish/subscribe interface is available
         * @param event
         * @param callback
         * @returns
         */
        onBeforeLoad: (event: string, callback: Function) => void;
        [hook: string]: Function;
    };

    export type ApplicationBridge = {
        /**
         * Returns object with minimal chat state
         * Similar to clicking the start button
         * It will open the chat window and show the next view
         * @returns ApplicationAPI
         */
        api: ApplicationAPI;

        /**
         * Publish custom events, use this to buidl custom functions to do other work
         * @example
         * import {EUWA} from '@puzzel/euwa-wrapper';
         * const euwa = new EUWA({
         *    configId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
         *    customerKey: 123456
         *   }, {
         *   hooks: {
         *       // All hooks accept functions
         *      onBeforeLoad: publishMyCustomEvent
         *    }
         * });
         *
         * function publishMyCustomEvent() {
         *    const chat = euwa.getApplicationBeforeLoad(EUWA.APPS.CHAT);
         *    chat.publish('PublishEvent', data => {
         *        console.log('PublishEvent Data:', data);
         *    });
         * }
         * @param event
         * @param data
         * @returns
         */
        publish: (event: string, ...data: any) => void;

        /**
         * Subscribe to custom event
         * @param event
         * @param callback
         *
         * @example
         * import {EUWA} from '@puzzel/euwa-wrapper';
         *
         *  const euwa = new EUWA({
         *       configId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
         *       customerKey: 123456
         *  }, {
         *       hooks: {
         *            // All hooks accept functions
         *             onBeforeLoad: subscribeToChatInit
         *          }
         *     }
         * );
         *
         * function subscribeToChatInit() {
         *    // Get the Chat's event interface
         *    const chat = euwa.getApplicationBeforeLoad(EUWA.APPS.CHAT);
         *
         *    // Subscribe to chatInit* event
         *    chat.subscribe('chatInit', data => {
         *        console.log('Chat Init Data:', data);
         *    });
         * }
         */
        subscribe: (event: string, callback: Function) => void;
    };

    export type ApplicationSettings = {
        [app: string]: object;
    };

    export type SystemVariables = {
        enteredFormName: string;
        enteredChatId: string;
        enteredFormIssue: string;
        selectedQueueKey: string;
        timeId2Map: string;
    };

    export type ChatState = {
        isConnected: boolean;
        isEnded: boolean;
        isMinimized: boolean;
    };

    export type ApplicationAPI = {
        /**
         * Returns object with minimal chat state
         * Similar to clicking the start button
         * It will open the chat window and show the next view
         * @returns ChatState
         */
        getState: () => ChatState;

        /**
         * Maximizes the chat window
         * @returns void
         */
        maximize: Function;

        /**
         * Minimizes the chat window
         * @returns void
         */
        minimize: Function;

        /**
         * Starts chat
         * @returns void
         */
        startChat: Function;

        /**
         * Updates the chat variables, one may update or set custom variables
         * @param param
         * @returns void
         */
        updateVariables: ({ NewVariableOfYourChoice: string }: SystemVariables) => void;

        /**
         * Updates system variables
         * @param {string} - enteredFormName
         * @param {string} - enteredChatId
         * @param {string} - enteredFormIssue
         * @param {string} - selectedQueueKey
         * @param {string} - timeId2Map
         * @returns void
         */
        updateSystemVariables: ({ enteredFormName }: SystemVariables) => void;
        [method: string]: Function;
    };

    export class EUWA {
        static APPS: ApplicationList;

        constructor({ customerKey, configId }: Config, { settings, hooks }: Options);

        /**
         * Get the chat application context
         * @param {string} id - EUWA.APPS.CHAT
         * @example
         * const chat = await euwa.getApplication(EUWA.APPS.CHAT);
         */
        getApplication(id: string): Promise<ApplicationBridge>;

        /**
         * The EUWA’s getApplicationBeforeLoad method is specifically designed to be used with specifically this hook
         * It will not wait for application’s load and return it’s basic communication interface - events
         * @param id - EUWA.APPS.CHAT
         * @example
         * const chat = euwa.getApplicationBeforeLoad(EUWA.APPS.CHAT);
         */
        getApplicationBeforeLoad(id: string): ApplicationBridge;
    }
}
