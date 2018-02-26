import { ComponentClass } from "react";
import { NavLinkProps } from "react-router-dom";

//IndexLink is removed in react-router, but continues there in react-router-bootstrap for backwards compatibility.
//Better use <LinkContainer exact/>
type IndexLinkContainer = ComponentClass<NavLinkProps>;
declare const IndexLinkContainer: IndexLinkContainer;

export default IndexLinkContainer;
