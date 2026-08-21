import React = require("react");

interface Props {
    src: Elm.Elm18Node | Elm.Elm19Node;
    flags?: Record<string, any>;
    ports?: (ports: Elm.Ports) => void;
}

declare class Elm extends React.Component<Props> {}

declare namespace Elm {
    interface Elm18Node {
        embed: (node: HTMLElement, flags?: any) => any;
    }
    interface Elm19Node {
        init: ({ node, flags }: { node: HTMLElement; flags: any }) => any;
    }

    interface SenderPort<Data> {
        send: (data: Data) => void;
    }
    interface ReceiverPort<Value> {
        subscribe: (callback: (value: Value) => void) => void;
    }
    interface Ports {
        [x: string]: SenderPort<any> | ReceiverPort<any>;
    }
}

export = Elm;
