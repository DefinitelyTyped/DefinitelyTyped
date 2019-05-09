export type BadgeModifiers = "pill" | "filled";
export type BadgeTypes = "success" | "warning" | "error";

export type BadgeProps = {
    className?: string;
    modifier?: BadgeModifiers;
    type?: BadgeTypes;
} & { [x: string]: any };

declare const Badge: React.FunctionComponent<BadgeProps>;

export default Badge;
