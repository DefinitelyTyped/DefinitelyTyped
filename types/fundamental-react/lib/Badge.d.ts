export type BadgeModifiers = "pill" | "filled";
export type BadgeTypes = "success" | "warning" | "error";
export type LabelTypes = "success" | "warning" | "error";
export type StatusType =
    | "success"
    | "warning"
    | "error"
    | "available"
    | "away"
    | "busy"
    | "offline";
export type BadgeProps = {
    className?: string;
    modifier?: BadgeModifiers;
    type?: BadgeTypes;
} & { [x: string]: any };

export type CounterProps = {
    className?: string;
    localizedText?: {
        /* The aria-label for the <span> element. */
        counterLabel: string;
    };
    /* Set to **true** to enable counter with notification. */
    notification?: boolean;
} & { [x: string]: any };

export type LabelProps = {
    className?: string;
    type?: LabelTypes;
} & { [x: string]: any };

export type StatusProps = {
    className?: string;
    glyph?: string;
    type?: StatusType;
} & { [x: string]: any };

export const Badge: React.FunctionComponent<BadgeProps>;
export const Counter: React.FunctionComponent<CounterProps>;
export const Label: React.FunctionComponent<LabelProps>;
export const Status: React.FunctionComponent<StatusProps>;
