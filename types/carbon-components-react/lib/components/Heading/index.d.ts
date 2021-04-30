import * as React from "react";
import { ReactAttr, ReactDivAttr, JSXIntrinsicElementProps, FCReturn } from "../../../typings/shared";

type SafeProps<P> = Omit<P, "as">;

export type SectionDefaultProps = ReactAttr & {
    as?: undefined;
};

export type SectionIntrinsicProps<K extends keyof JSX.IntrinsicElements> = SafeProps<JSXIntrinsicElementProps<K>> & {
    as: K;
};

export type SectionCustomComponentProps<
    C extends React.JSXElementConstructor<any>
> = C extends React.JSXElementConstructor<infer P>
    ? SafeProps<P> & {
          as: C;
      }
    : never;

declare function Section(props: SectionDefaultProps): FCReturn;
declare function Section<T extends keyof JSX.IntrinsicElements>(props: SectionIntrinsicProps<T>): FCReturn;
declare function Section<T extends React.JSXElementConstructor<any>>(props: SectionCustomComponentProps<T>): FCReturn;

export interface HeadingProps extends ReactAttr { }

declare const Heading: React.FC<HeadingProps>;

export { Heading, Section };
