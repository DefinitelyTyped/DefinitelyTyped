import * as React from "react";
import { ReactAnchorAttr, ShapeOf } from "../../typings/shared";

export interface LinkPropsBase {
    element?: string, // required but has default value
}

export type LinkProps<E extends object = ReactAnchorAttr> = ShapeOf<LinkPropsBase, E>;

declare function Link<E extends object = ReactAnchorAttr>(props: React.PropsWithChildren<LinkProps<E>>, ref: React.Ref<HTMLElement>): React.ReactElement;

export default Link;
