export interface Elm18Node {
    embed: (node: HTMLElement, flags?: any) => any;
}
export interface Elm19Node {
    init: ({ node, flags }: { node: HTMLElement; flags: any }) => any;
}

export interface SenderPort {
    send: (data: any) => void;
}
export interface ReceiverPort {
    subscribe: (callback: (value: any) => void) => void;
}
export interface Ports {
    [x: string]: SenderPort | ReceiverPort;
}
