import { ReactAnchorAttr, ReactAttr, RequiresChildrenProps, FCReturn, FCProps } from "../../../typings/shared";
import { LinkProps } from "./Link";

interface InheritedProps extends RequiresChildrenProps {
    className?: ReactAttr["className"],
    href?: ReactAnchorAttr["href"],
}

export interface HeaderNamePropsBase extends InheritedProps {
    prefix?: string,
}

export type HeaderNameProps<E extends object = {}> = LinkProps<E> & HeaderNamePropsBase;

declare function HeaderName<E extends object = {}>(props: FCProps<HeaderNameProps<E>>): FCReturn;

export default HeaderName;
