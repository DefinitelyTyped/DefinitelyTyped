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

declare function Content(props: ContentDefaultProps): FCReturn;
declare function Content<T extends keyof JSX.IntrinsicElements>(props: ContentIntrinsicProps<T>): FCReturn;

export default Content;
