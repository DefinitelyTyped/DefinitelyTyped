/**
 * Upstream version of event listener. Does not take into account specific
 * nature of platform.
 */
declare namespace EventListener {
    /**
     * Listen to DOM events during the bubble phase.
     */
    function listen(target: EventTarget, eventType: string, callback: any): { remove: () => void };

    /**
     * Listen to DOM events during the capture phase.
     */
    function capture(target: EventTarget, eventType: string, callback: any): { remove: () => void };
    function registerDefault(): void;
}

// eslint-disable-next-line export-just-namespace
export = EventListener;
