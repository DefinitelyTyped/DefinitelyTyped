import * as React from "react";
import {
    FCReturn,
    JSXIntrinsicElementProps,
    ReactAttr,
    ReactComponentConstructor,
    ReactDivAttr,
} from "../../../typings/shared";
import { TextDirection } from "./TextDirectionContext";

interface TextBaseProps {
    children?: React.ReactNode | undefined;
    dir?: TextDirection | undefined;
}

export type TextDefaultProps =
    & TextBaseProps
    & React.HTMLAttributes<HTMLSpanElement>
    & {
        as?: undefined;
    };

export type TextIntrinsicProps<K extends keyof React.JSX.IntrinsicElements> =
    & TextBaseProps
    & JSXIntrinsicElementProps<K>
    & {
        as: K;
    };

export type TextCustomComponentProps<
    C extends ReactComponentConstructor<never>,
> = C extends ReactComponentConstructor<infer P> ?
        & TextBaseProps
        & P
        & {
            as: C;
        }
    : never;

declare function Text(props: TextDefaultProps): FCReturn;
declare function Text<T extends keyof React.JSX.IntrinsicElements>(props: TextIntrinsicProps<T>): FCReturn;
declare function Text<T extends ReactComponentConstructor<never>>(props: TextCustomComponentProps<T>): FCReturn;

export { Text };
