import * as React from "react";
import { ReactCreateElementParam, FCReturn, FCProps, ReactAttr } from "../../../typings/shared";

export interface ContentPropsBase {
    className?: string | undefined,
    children?: React.ReactNode | undefined,
    tagName?: ReactCreateElementParam | undefined,
}

export type ContentProps<E extends object = ReactAttr> = E & ContentPropsBase;

declare function Content<E extends object = ReactAttr>(props: FCProps<ContentProps<E>>): FCReturn;

export default Content;
