import { ComponentClass } from "react";
import * as ReactDOM from "react-dom";
import { Location, LocationDescriptor } from "history";

type ToLocationFunction = (location: Location) => LocationDescriptor;

export interface IndexLinkProps extends ReactDOM.HTMLProps<any> {
    to: LocationDescriptor | ToLocationFunction;
    activeClassName?: string;
    activeStyle?: ReactDOM.CSSProperties;
}

type IndexLink = ComponentClass<IndexLinkProps>;
declare const IndexLink: IndexLink;

export default IndexLink;
