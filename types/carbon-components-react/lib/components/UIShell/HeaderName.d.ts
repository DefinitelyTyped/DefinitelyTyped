import { RequiresChildrenProps, FCReturn, FCProps } from "../../../typings/shared";
import { LinkProps } from "./Link";

export interface HeaderNamePropsBase extends RequiresChildrenProps {
    className?: string,
    href?: string,
    prefix?: string,
}

export type HeaderNameProps<E extends object = {}> = LinkProps<E> & HeaderNamePropsBase;

declare function HeaderName<E extends object = {}>(props: FCProps<HeaderNameProps<E>>): FCReturn;

export default HeaderName;
