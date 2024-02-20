import React = require("react");
import ElmTypes = require("./elm-types");

type SenderPort = (data: any) => void;
type ReceiverPort = (callback: (value: any) => void) => void;
interface Ports {
    [x: string]: SenderPort | ReceiverPort;
}

declare class Elm extends React.Component<{
    src: ElmTypes.Elm18Node | ElmTypes.Elm19Node;
    flags?: Record<string, any>;
    ports?: (ports: Ports) => any;
}> {}

export = Elm;
