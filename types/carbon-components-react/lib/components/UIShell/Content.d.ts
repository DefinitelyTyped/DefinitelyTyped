import { ReactAttr, ReactCreateElementParam, FCReturn, FCProps } from "../../../typings/shared";

interface InheritedProps {
    className?: ReactAttr["className"],
    children?: ReactAttr["children"],
}

export interface ContentPropsBase extends InheritedProps {
    tagName?: ReactCreateElementParam,
}

export type ContentProps<E extends object = {}> = E & ContentPropsBase;

declare function Content<E extends object = {}>(props: FCProps<ContentProps<E>>): FCReturn;

export default Content;
