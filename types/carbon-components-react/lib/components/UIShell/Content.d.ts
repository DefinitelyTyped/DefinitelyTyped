import * as React from "react";
import { ReactCreateElementParam, FCReturn, FCProps } from "../../../typings/shared";

export interface ContentPropsBase {
    className?: string,
    children?: React.ReactNode,
    tagName?: ReactCreateElementParam,
}

export type ContentProps<E extends object = {}> = E & ContentPropsBase;

declare function Content<E extends object = {}>(props: FCProps<ContentProps<E>>): FCReturn;

export default Content;
