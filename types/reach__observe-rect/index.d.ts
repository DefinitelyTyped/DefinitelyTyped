declare module "@reach/observe-rect" {
    interface Observer {
        observe: () => void;
        unobserve: () => void;
    }
    export default function ObserveRect(
        node: Element,
        callback: (rect: ClientRect) => void
    ): Observer;
}
