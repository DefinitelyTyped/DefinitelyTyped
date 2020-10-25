import * as React from 'react';

export type TitleProps = {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    localizedText?: {
        loading?: string;
    };
    className?: string;
    levelStyle?: 1 | 2 | 3 | 4 | 5 | 6;
    wrap?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

declare const Title: React.FunctionComponent<TitleProps>;

export default Title;
