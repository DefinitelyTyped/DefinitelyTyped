import * as React from 'react';

export type ObjectStatusTypes = 'negative' | 'critical' | 'positive' | 'informative';

export type ObjectStatusProps = {
    glyph?: string | undefined;
    indication?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | undefined;
    link?: string | undefined;
    size?: 'l' | undefined;
    status?: ObjectStatusTypes | undefined;
} & React.HTMLAttributes<HTMLAnchorElement | HTMLSpanElement>;

declare const ObjectStatus: React.FunctionComponent<ObjectStatusProps>;

export default ObjectStatus;
