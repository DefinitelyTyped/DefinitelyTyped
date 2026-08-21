/**
 * Properties required to initialize the SDK.
 */
export interface InitProps {
    /** Unique identifier for the block where the SDK will operate. */
    blockId: string;
}

/**
 * Result of the handleShow promise.
 */
export interface HandleShowPromiseResult {
    /** Indicates whether the user watched until the end or closed the content in interstitial format. */
    done: boolean;

    /** Description of the emitted event. */
    description: string;

    /** Current state of the banner. */
    state: "no-campaign" | "no-banners" | "destroy";

    /** Indicates whether the event was emitted due to an error. */
    error: boolean;
}

/**
 * Event types for the SDK.
 */
export type NotiadSDKEvent = "onInit" | "onStart" | "onClickButton" | "onComplete" | "onError";

/**
 * Initializes the Notiad SDK with the given properties.
 *
 * @param props - Initialization properties.
 */
export function init(props: InitProps): void;

/**
 * Displays content of the specified type and returns a promise with the result.
 *
 * @param props - Properties to control the content display.
 * @returns A promise that resolves with the result of the content interaction.
 */
export function handleShow(): Promise<HandleShowPromiseResult>;

/**
 * Adds an event listener for SDK-specific events.
 *
 * @param event - The name of the event to listen for.
 * @param listener - The callback function to execute when the event is dispatched.
 */
export function addEventListener(event: NotiadSDKEvent, listener: () => void): void;

/**
 * Removes all event listeners for SDK-specific events.
 */
export function removeEventListener(): void;

// Global declarations
declare global {
    interface Window {
        /**
         * Global object for accessing the Notiad SDK methods.
         */
        NotiadSDK: {
            init: typeof init;
            handleShow: typeof handleShow;
            addEventListener: typeof addEventListener;
            removeEventListener: typeof removeEventListener;
        };
    }
}
