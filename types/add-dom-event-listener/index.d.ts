declare function addDomEventListener(
    target: HTMLElement | Document | Window,
    eventType: string,
    callback: (event: any) => any,
): addDomEventListener.Listener;

declare namespace addDomEventListener {
    interface Listener {
        remove(): void;
    }
}
export = addDomEventListener;
