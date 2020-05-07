import * as React from "react";
import { ReactAttr, ReactCreateElementParam } from "../../../typings/shared";

interface InheritedProps {
    className?: ReactAttr["className"],
    children?: ReactAttr["children"],
}

export interface ContentPropsBase extends InheritedProps {
    tagName?: ReactCreateElementParam,
}

export type ContentProps<E extends object = {}> = E & ContentPropsBase;

declare function Content<E extends object = {}>(props: React.PropsWithChildren<ContentProps<E>>): React.ReactElement | null;

export default Content;
