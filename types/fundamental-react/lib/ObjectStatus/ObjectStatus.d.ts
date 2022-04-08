import * as React from 'react';

export type ObjectStatusTypes = 'negative' | 'critical' | 'positive' | 'informative';

export type ObjectStatusProps = {
    glyph?: string;
    indication?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    link?: string;
    size?: 'l';
    status?: ObjectStatusTypes;
} & React.HTMLAttributes<HTMLAnchorElement | HTMLSpanElement>;

declare const ObjectStatus: React.FunctionComponent<ObjectStatusProps>;

export default ObjectStatus;
