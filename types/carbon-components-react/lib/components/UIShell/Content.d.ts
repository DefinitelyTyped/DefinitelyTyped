import * as React from "react";
import { FCProps, FCReturn, JSXIntrinsicElementProps, ReactAttr } from "../../../typings/shared";

interface ContentBaseProps {
    children?: React.ReactNode | undefined;
    className?: ReactAttr["className"] | undefined;
}

export type ContentDefaultProps =
    & ContentBaseProps
    & ReactAttr
    & {
        tagName?: undefined;
    };

export type ContentIntrinsicProps<K extends keyof React.JSX.IntrinsicElements> =
    & ContentBaseProps
    & JSXIntrinsicElementProps<K>
    & {
        tagName: K;
    };

declare function Content(props: ContentDefaultProps): FCReturn;
declare function Content<T extends keyof React.JSX.IntrinsicElements>(props: ContentIntrinsicProps<T>): FCReturn;

export default Content;
