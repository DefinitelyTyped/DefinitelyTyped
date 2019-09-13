import * as React from "react";
import { ReactAnchorAttr, ShapeOf } from "../../../typings/shared";

export interface LinkPropsBase<P = any> {
    element?: string | React.JSXElementConstructor<P>, // required but has default value
}

export type LinkProps<P extends object = ReactAnchorAttr, IP = P> = ShapeOf<LinkPropsBase<Exclude<IP, "element">>, P>;

declare function Link<P extends object = ReactAnchorAttr>(
    props: React.PropsWithChildren<LinkProps<P>>,
    ref: React.Ref<HTMLElement>
): React.ReactElement;

export default Link;
