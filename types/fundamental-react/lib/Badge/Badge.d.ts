export type BadgeModifiers = "pill" | "filled";
export type BadgeTypes = "success" | "warning" | "error";

export type BadgeProps = {
    className?: string;
    customStyles?: { [x: string]: any };
    disableStyles?: boolean;
    modifier?: BadgeModifiers;
    type?: BadgeTypes;
} & { [x: string]: any };

declare const Badge: React.RefForwardingComponent<HTMLDivElement, BadgeProps>;

export default Badge;
