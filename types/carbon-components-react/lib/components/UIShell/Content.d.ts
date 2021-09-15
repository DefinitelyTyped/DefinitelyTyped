import * as React from 'react';
import { FCReturn, FCProps, ReactAttr, JSXIntrinsicElementProps } from '../../../typings/shared';

interface ContentBaseProps {
    children?: React.ReactNode | undefined;
    className?: ReactAttr['className'] | undefined;
}

export type ContentDefaultProps = ContentBaseProps &
    ReactAttr & {
        tagName?: undefined;
    };

export type ContentIntrinsicProps<K extends keyof JSX.IntrinsicElements> = ContentBaseProps &
    JSXIntrinsicElementProps<K> & {
        tagName: K;
    };

// TODO: fix this overload getting selected when props don't match the default overload and tagName is not specified.
export type ContentCustomComponentProps<
    C extends React.JSXElementConstructor<any>
> = C extends React.JSXElementConstructor<infer P>
    ? ContentBaseProps &
          P & {
              tagName: NonNullable<C>;
          }
    : never;

declare function Content(props: ContentDefaultProps): FCReturn;
declare function Content<T extends keyof JSX.IntrinsicElements>(props: ContentIntrinsicProps<T>): FCReturn;
declare function Content<T extends React.JSXElementConstructor<any>>(props: ContentCustomComponentProps<T>): FCReturn;

export default Content;
