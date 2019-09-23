export type StatusType =
    | "success"
    | "warning"
    | "error"
    | "available"
    | "away"
    | "busy"
    | "offline";

export type StatusProps = {
    className?: string;
    glyph?: string;
    type?: StatusType;
} & { [x: string]: any };

declare const Status: React.FunctionComponent<StatusProps>;

export default Status;
