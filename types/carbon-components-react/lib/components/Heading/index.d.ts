import * as React from "react";
import {
    FCReturn,
    JSXIntrinsicElementProps,
    ReactAttr,
    ReactComponentConstructor,
    ReactDivAttr,
} from "../../../typings/shared";

type SafeProps<P> = Omit<P, "as">;

export type SectionDefaultProps = ReactAttr & {
    as?: undefined;
};

export type SectionIntrinsicProps<K extends keyof React.JSX.IntrinsicElements> =
    & SafeProps<JSXIntrinsicElementProps<K>>
    & {
        as: K;
    };

export type SectionCustomComponentProps<
    C extends ReactComponentConstructor<never>,
> = C extends ReactComponentConstructor<infer P> ? SafeProps<P> & {
        as: C;
    }
    : never;

declare function Section(props: SectionDefaultProps): FCReturn;
declare function Section<T extends keyof React.JSX.IntrinsicElements>(props: SectionIntrinsicProps<T>): FCReturn;
declare function Section<T extends ReactComponentConstructor<never>>(props: SectionCustomComponentProps<T>): FCReturn;

export interface HeadingProps extends ReactAttr {}

declare const Heading: React.FC<HeadingProps>;

export { Heading, Section };
