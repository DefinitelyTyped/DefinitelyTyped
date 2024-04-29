import * as React from "react";

export interface TruncateProps extends React.HTMLProps<Truncate> {
    lines?: number | false | undefined;
    ellipsis?: React.ReactNode | undefined;
    trimWhitespace?: boolean | undefined;
    onTruncate?(isTruncated: boolean): void;
}

declare class Truncate extends React.Component<TruncateProps> {}
export default Truncate;
