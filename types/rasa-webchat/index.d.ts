import * as React from "react";

/**
 * Props for the rasa-webchat widget component.
 * @see https://github.com/botfront/rasa-webchat#parameters
 * @see https://github.com/botfront/rasa-webchat/blob/master/index.js
 * @see https://github.com/botfront/rasa-webchat/blob/master/src/index.js
 */
export interface RasaWebchatProps {
    /**
     * Payload sent to Rasa when conversation starts.
     */
    initPayload?: string;

    profileAvatar?: string;

    /**
     * @default "socketio"
     */
    protocol?: string;

    /**
     * @default {}
     */
    protocolOptions?: Record<string, any>;

    /**
     * Socket URL.
     * @default "http://localhost"
     */
    socketUrl?: string;

    socketPath?: string;

    /**
     * Arbitrary object sent with the socket. If using with Botfront,
     * it must include the language (e.g. `{"language": "en"}`)
     * @default {}
     */
    customData?: Record<string, any>;

    handleNewUserMessage?: (newMessage: string) => void;

    /**
     * If set to `true`, treats links in received messages as links to a document
     * (e.g., `.pdf`, `.doc`, `.xlsx`) and opens them in a popup using
     * `https://docs.google.com/viewer` service.
     * @default false
     */
    docViewer?: boolean;

    /**
     * Title shown in the header of the widget.
     * @default "Welcome"
     */
    title?: string | React.ReactElement;

    /**
     * Subtitle shown under the title in the header of the widget.
     */
    subtitle?: string | React.ReactElement;

    /**
     * User message input field placeholder.
     * @default "Type a message"
     */
    inputTextFieldHint?: string;

    /**
     * If `true`, the widget will hide when the connection to the socket is lost.
     * @default true
     */
    hideWhenNotConnected?: boolean;

    /**
     * @default false
     */
    autoClearCache?: boolean;

    /**
     * This prop lets you choose when the widget will try connecting to the server.
     * By default, it tries connecting as soon as it mounts. If you select
     * `connectOn='open'`, it will only attempt connection when the widget is opened.
     * It can only take the values `mount` and `open`.
     * @default "mount"
     */
    connectOn?: "mount" | "open";

    /**
     * @default "Waiting for server..."
     */
    connectingText?: string;

    /**
     * Call custom code on a specific socket event.
     * @default {}
     * @example
     * ```
     * {
     *   'bot_uttered': () => console.log('the bot said something'),
     *   'connect': () => console.log('connection established'),
     *   'disconnect': () => doSomeCleanup(),
     * }
     * ```
     */
    onSocketEvent?: {
        [event: string]: () => void;
    };

    /**
     * @default 0
     */
    badge?: number;

    /**
     * Set to `true` if you want to embed the widget in a web page.
     * The widget will always be open, and the `initPayload` will be triggered immediately.
     * @default false
     */
    embedded?: boolean;

    /**
     * Show a full-screen toggle.
     * @default false
     */
    showFullScreenButton?: boolean;

    /**
     * @default false
     */
    fullScreenMode?: boolean;

    /**
     * @default true
     */
    showCloseButton?: boolean;

    /**
     * Path to an image displayed on the launcher when the widget is closed.
     * @default false
     */
    displayUnreadCount?: boolean;

    openLauncherImage?: string;

    closeImage?: string;

    /**
     * Show message date. Can be overridden with a function.
     * @param timestamp - The message timestamp.
     * @param message - The message content.
     * @returns The custom date string.
     * @default false
     */
    showMessageDate?: boolean | ((timestamp: number, message: string) => string);

    /**
     * This prop is a function that takes a message string as an argument.
     * The defined function will be called every time a message is received,
     * and the returned value will be used as a milliseconds delay before displaying a new message.
     * @param message - The received message.
     * @returns The delay in milliseconds.
     * @default
     * ```
     * (message) => {
     *   let delay = message.length * 30;
     *   if (delay > 2 * 1000) delay = 3 * 1000;
     *   if (delay < 400) delay = 1000;
     *   return delay;
     * }
     * ```
     */
    customMessageDelay?: (message: string) => number;

    /**
     * Essentially used to customize the image size, also used to change storage options.
     * @default
     * ```
     * {
     *   storage: 'local'
     * }
     * ```
     * @example
     * ```
     * {
     *   images: {
     *     dims: {
     *       width: 300,
     *       height: 200
     *     }
     *   },
     *   storage: 'local'
     * }
     * ```
     */
    params?: {
        /**
         * Customize the image size.
         */
        images?: {
            dims: {
                width: number;
                height: number;
            };
        };

        /**
         * Specifies the storage location of the conversation state in the browser.
         * `"session"` defines the state to be stored in the session storage.
         * The session storage persists on reload of the page and is cleared after
         * the browser or tab is closed, or when `sessionStorage.clear()` is called.
         * `"local"` defines the state to be stored in the local storage.
         * The local storage persists after the browser is closed and is cleared
         * when the cookies of the browser are cleared, or when `localStorage.clear()` is called.
         */
        storage?: "local" | "session";
    };

    /**
     * Custom component to be used with custom responses.
     * @param messageData - Data associated with the message.
     * @returns The custom React component.
     * @remarks This can only be used if you call the webchat from a React application
     * as you can't write a component in pure JavaScript.
     */
    customComponent?: (messageData: any) => JSX.Element; // Assuming React JSX

    /**
     * Call custom code on a specific widget event.
     * @default
     * ```
     * {
     *   onChatOpen: () => {},
     *   onChatClose: () => {},
     *   onChatVisible: () => {},
     *   onChatHidden: () => {},
     * }
     */
    onWidgetEvent?: {
        /**
         * Call custom code when the chat is opened.
         */
        onChatOpen?: () => void;

        /**
         * Call custom code when the chat is visible.
         */
        onChatVisible?: () => void;

        /**
         * Call custom code when the chat is closed.
         */
        onChatClose?: () => void;

        /**
         * Call custom code when the chat is hidden.
         */
        onChatHidden?: () => void;
    };

    /**
     * @default null
     */
    tooltipPayload?: string | null;

    /**
     * @default 500
     */
    tooltipDelay?: number;

    /**
     * @default false
     */
    disableTooltips?: boolean;

    defaultHighlightCss?: string;

    defaultHighlightAnimation?: string;

    /**
     * @default ""
     */
    mainColor?: string;

    /**
     * @default ""
     */
    conversationBackgroundColor?: string;

    /**
     * @default ""
     */
    userTextColor?: string;

    /**
     * @default ""
     */
    userBackgroundColor?: string;

    /**
     * @default ""
     */
    assistTextColor?: string;

    /**
     * @default ""
     */
    assistBackgoundColor?: string;

    /**
     * @default true
     */
    withRules?: boolean;

    /**
     * @default null
     */
    rules?:
        | Array<{
            payload: string;
            text?: string;
            trigger: {
                url?: string | string[];
                timeOnPage?: number;
                numberOfVisits?: number;
                numberOfPageVisits?: number;
                device?: string;
                when?: "always" | "init";
                queryString?: Array<{
                    param?: string;
                    value?: string;
                    sendAsEntity?: boolean;
                }>;
                eventListeners?: Array<{
                    selector: string;
                    event: string;
                }>;
            };
        }>
        | null;

    /**
     * @default 500
     */
    triggerEventListenerUpdateRate?: number;
}

export default class RasaWebchat extends React.Component<RasaWebchatProps> {}
