import { NProgressOptions } from "nprogress";
import React = require("react");

export interface NProgressProps {
    options?: Partial<NProgressOptions> | undefined;
    color?: string | undefined;
    spinner?: boolean | undefined;
    showAfterMs?: number | undefined;
}

export default class NProgress extends React.Component<NProgressProps> {}
