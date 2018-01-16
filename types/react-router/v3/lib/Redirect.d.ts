import { ComponentClass, ClassAttributes } from "react";
import { RoutePattern } from "react-router";
import { IndexRedirectProps } from "react-router/lib/IndexRedirect";
import { Query } from "history";

export interface RedirectProps extends IndexRedirectProps {
    from: RoutePattern;
}

type Redirect = ComponentClass<RedirectProps>;
declare const Redirect: Redirect;

export default Redirect;
