import * as React from 'react';
import { ReactAttr, ReactDivAttr, JSXIntrinsicElementProps, FCReturn, ReactComponentConstructor } from '../../../typings/shared';
import { TextDirection } from './TextDirectionContext';

interface TextBaseProps {
    children?: React.ReactNode | undefined;
    dir?: TextDirection | undefined;
}

export type TextDefaultProps = TextBaseProps &
    React.HTMLAttributes<HTMLSpanElement> & {
        as?: undefined;
    };

export type TextIntrinsicProps<K extends keyof JSX.IntrinsicElements> = TextBaseProps &
    JSXIntrinsicElementProps<K> & {
        as: K;
    };

export type TextCustomComponentProps<
    C extends ReactComponentConstructor<never>
> = C extends ReactComponentConstructor<infer P>
    ? TextBaseProps &
          P & {
              as: C;
          }
    : never;

declare function Text(props: TextDefaultProps): FCReturn;
declare function Text<T extends keyof JSX.IntrinsicElements>(props: TextIntrinsicProps<T>): FCReturn;
declare function Text<T extends ReactComponentConstructor<never>>(props: TextCustomComponentProps<T>): FCReturn;

export { Text };
