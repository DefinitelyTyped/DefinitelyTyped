import { ComponentClass, ClassAttributes } from "react";
import { RoutePattern } from "react-router";
import { Query } from "history";

export interface IndexRedirectProps extends ClassAttributes<any> {
	to: RoutePattern;
	query?: Query;
}

type IndexRedirect = ComponentClass<IndexRedirectProps>;
declare const IndexRedirect: IndexRedirect;

export default IndexRedirect;
