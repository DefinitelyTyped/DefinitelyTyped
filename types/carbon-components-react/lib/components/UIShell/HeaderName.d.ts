import { FCProps, FCReturn, RequiresChildrenProps } from "../../../typings/shared";
import { LinkProps } from "./Link";

export interface HeaderNamePropsBase extends RequiresChildrenProps {
    className?: string | undefined;
    href?: string | undefined;
    prefix?: string | undefined;
}

export type HeaderNameProps<E extends object = {}> = LinkProps<E> & HeaderNamePropsBase;

declare function HeaderName<E extends object = {}>(props: FCProps<HeaderNameProps<E>>): FCReturn;

export default HeaderName;
