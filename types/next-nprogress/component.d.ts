import { NProgressOptions } from 'nprogress';
import * as React from 'react';

export interface NProgressProps {
    options?: Partial<NProgressOptions>;
    color?: string;
    spinner?: boolean;
    showAfterMs?: number;
}

export default class NProgress extends React.Component<NProgressProps> {}
