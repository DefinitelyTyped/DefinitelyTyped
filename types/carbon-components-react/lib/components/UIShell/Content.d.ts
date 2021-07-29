import * as React from "react";
import { ReactCreateElementParam, FCReturn, FCProps, ReactAttr } from "../../../typings/shared";

export interface ContentPropsBase extends ReactAttr {
    className?: string | undefined,
    children?: React.ReactNode | undefined,
    tagName?: ReactCreateElementParam | undefined,
}

export type ContentProps<E extends object = {}> = E & ContentPropsBase;

declare function Content<E extends object = {}>(props: FCProps<ContentProps<E>>): FCReturn;

export default Content;
