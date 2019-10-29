import * as React from "react";
import { ReactAnchorAttr, ReactAttr, RequiresChildrenProps } from "../../../typings/shared";
import { LinkProps } from "./Link";

interface InheritedProps extends RequiresChildrenProps {
    className?: ReactAttr["className"],
    href?: ReactAnchorAttr["href"],
}

export interface HeaderNamePropsBase extends InheritedProps {
    prefix?: string,
}

export type HeaderNameProps<E extends object = {}> = LinkProps<E> & HeaderNamePropsBase;

declare function HeaderName<E extends object = {}>(props: React.PropsWithChildren<HeaderNameProps<E>>): React.ReactElement | null;

export default HeaderName;
