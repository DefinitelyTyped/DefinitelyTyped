import { NativeEventSubscription } from "../EventEmitter/RCTNativeAppEventEmitter";

/**
 * AppState can tell you if the app is in the foreground or background,
 * and notify you when the state changes.
 *
 * AppState is frequently used to determine the intent and proper behavior
 * when handling push notifications.
 *
 * App State Events
 *      change - This even is received when the app state has changed.
 *      focus [Android] - Received when the app gains focus (the user is interacting with the app).
 *      blur [Android] - Received when the user is not actively interacting with the app.
 *
 * App States
 *      active - The app is running in the foreground
 *      background - The app is running in the background. The user is either in another app or on the home screen
 *      inactive [iOS] - This is a transition state that currently never happens for typical React Native apps.
 *      unknown [iOS] - Initial value until the current app state is determined
 *      extension [iOS] - The app is running as an app extension
 *
 * For more information, see Apple's documentation: https://developer.apple.com/library/ios/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/TheAppLifeCycle/TheAppLifeCycle.html
 *
 * @see https://reactnative.dev/docs/appstate#app-states
 */
export type AppStateEvent = "change" | "memoryWarning" | "blur" | "focus";
export type AppStateStatus =
    | "active"
    | "background"
    | "inactive"
    | "unknown"
    | "extension";

export interface AppStateStatic {
    currentState: AppStateStatus;
    isAvailable: boolean;

    /**
     * Add a handler to AppState changes by listening to the change event
     * type and providing the handler
     */
    addEventListener(
        type: AppStateEvent,
        listener: (state: AppStateStatus) => void,
    ): NativeEventSubscription;
}

export const AppState: AppStateStatic;
export type AppState = AppStateStatic;
