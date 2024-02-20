import { Component } from "react";
import { Elm18Node, Elm19Node } from "./elm-types";

declare class Elm extends Component<{
    src: Elm18Node | Elm19Node;
    flags?: any;
    ports?: (ports: any) => any;
}> {}

export = Elm;
