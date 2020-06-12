// Type definitions for Safari extension development (content-scripts)
// Project: https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/InjectingScripts/InjectingScripts.html#//apple_ref/doc/uid/TP40009977-CH6-SW1
// Definitions by: Luuk <https://github.com/luukd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Window {
    safari: typeof safari;
}

declare namespace safari {
    export var extension: SafariContentExtension;
    export var self: SafariContentWebPage;
}

interface SafariEvent {
    /**
        * The type of the event.
        * The string used to identify a particular type of event is documented in the reference for that class.
        */
    type: string;

    /**
        * The target of the event.
        * This attribute stays the same as the event moves through the event-dispatch hierarchy. Its value is the same as the object that the event is sent to during the targeting phase.
        */
    target: SafariEventTarget;

    /**
        * The object that the event is currently being sent to.
        * This attribute varies as the event progresses through the phases, changing as the event moves through the event-dispatch hierarchy.
        */
    currentTarget: SafariEventTarget;

    /**
        * The time and date that the event was created.
        */
    timestamp: number;

    /**
        * The event-handling phase that the event is in.
        * The values for this property are the same as the values used by Webkit to identify the event-handling phases.
        */
    eventPhase: number;

    /**
        * A Boolean value that indicates whether the event goes through the bubbling phase.
        */
    bubbles: boolean;

    /**
        * A Boolean value that indicates whether the event can be canceled.
        */
    cancelable: boolean;

    /**
        * A Boolean value that indicates whether the event’s default action has been prevented.
        */
    defaultPrevented: boolean;

    /**
        * Prevents the event from any further propagation.
        * Propagation can be stopped only fon cancelable events. After propagation is stopped, the event is not sent to any other targets.
        */
    stopPropagation() : void;

    /**
        * Prevents the browser from performing the default action for an event.
        * Use this method to indicate that your extension has already fully handled the event; you don’t want the browser to do anything. Note that preventing the default action does not stop an event from propagating.
        */
    preventDefault(): void;
}

interface SafariExtensionMessageEvent extends SafariEvent {
    /**
     * The name of the message.
     */
    name: string;

    /**
     * The message data.
     */
    message: any;
}

interface SafariEventListener extends Function {
    (event: SafariEvent): any;
}

interface SafariEventTarget {
    addEventListener(type: string, listener: SafariEventListener, useCapture?: boolean): void;
    removeEventListener(type: string, listener: SafariEventListener, useCapture?: boolean): void;
}

interface SafariContentExtension {
    baseURI: string;
}

interface SafariContentWebPage extends SafariEventTarget {
    tab: SafariContentBrowserTabProxy;
}

interface SafariContentBrowserTabProxy {
    canLoad(event: any, message: any): any;
    dispatchMessage(name: string, message?: any): void;
    setContextMenuEventUserInfo(event: MouseEvent, userInfo: any): void;
}

interface BeforeLoadEvent extends Event {
  url: string;
}
