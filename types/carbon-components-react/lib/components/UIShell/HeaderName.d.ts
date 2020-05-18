import * as React from "react";
import { ReactAnchorAttr, ReactAttr, RequiresChildrenProps, FCReturn } from "../../../typings/shared";
import { LinkProps } from "./Link";

interface InheritedProps extends RequiresChildrenProps {
    className?: ReactAttr["className"],
    href?: ReactAnchorAttr["href"],
}

export interface HeaderNamePropsBase extends InheritedProps {
    prefix?: string,
}

export type HeaderNameProps<E extends object = {}> = LinkProps<E> & HeaderNamePropsBase;

declare function HeaderName<E extends object = {}>(props: React.PropsWithChildren<HeaderNameProps<E>>): FCReturn;

export default HeaderName;
