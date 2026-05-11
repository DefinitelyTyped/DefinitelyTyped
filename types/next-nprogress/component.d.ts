import { NProgressOptions } from "nprogress";
import * as React from "react";

export interface NProgressProps {
    options?: Partial<NProgressOptions> | undefined;
    color?: string | undefined;
    spinner?: boolean | undefined;
    showAfterMs?: number | undefined;
}

export default class NProgress extends React.Component<NProgressProps> {}
