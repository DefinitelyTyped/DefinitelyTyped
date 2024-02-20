export interface Elm18Node {
    embed: (node: HTMLElement, flags?: any) => any;
}
export interface Elm19Node {
    init: ({ node, flags }: { node: HTMLElement; flags: any }) => any;
}
