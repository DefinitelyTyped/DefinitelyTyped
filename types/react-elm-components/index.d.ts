import React = require("react");
import ElmTypes = require("./elm-types");

declare class Elm extends React.Component<{
    src: ElmTypes.Elm18Node | ElmTypes.Elm19Node;
    flags?: Record<string, any>;
    ports?: (ports: ElmTypes.Ports) => any;
}> {}

export = Elm;
