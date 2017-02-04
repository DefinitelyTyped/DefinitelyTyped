import { ComponentClass, CSSProperties, HTMLProps } from "react";
import { Location, LocationDescriptor } from "react-router/lib/Router";

type ToLocationFunction = (location: Location) => LocationDescriptor;

export interface IndexLinkProps extends HTMLProps<any> {
    to: LocationDescriptor | ToLocationFunction;
    activeClassName?: string;
    activeStyle?: CSSProperties;
}

type IndexLink = ComponentClass<IndexLinkProps>;
declare const IndexLink: IndexLink;

export default IndexLink;
