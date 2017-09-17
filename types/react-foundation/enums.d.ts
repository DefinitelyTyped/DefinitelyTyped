/**
 * Breakpoints enumerable.
 */
export declare enum Breakpoints {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
    XLARGE = "xlarge",
    XXLARGE = "xxlarge",
}
/**
 * Badge color enumerable.
 */
export declare enum BadgeColors {
    INFO = "info",
    SECONDARY = "secondary",
    SUCCESS = "success",
    WARNING = "warning",
    ALERT = "alert",
}
/**
 * Button color enumerable.
 */
export declare enum ButtonColors {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    SUCCESS = "success",
    ALERT = "alert",
    WARNING = "warning",
}
/**
 * Button group color enumerable.
 */
export declare enum ButtonGroupColors {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    SUCCESS = "success",
    ALERT = "alert",
    WARNING = "warning",
}
/**
 * Callout color enumerable.
 */
export declare enum CalloutColors {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    SUCCESS = "success",
    WARNING = "warning",
    ALERT = "alert",
}
/**
 * Label color enumerable.
 */
export declare enum LabelColors {
    INFO = "info",
    SECONDARY = "secondary",
    SUCCESS = "success",
    WARNING = "warning",
    ALERT = "alert",
}
/**
 * Progress colors enumerable.
 */
export declare enum ProgressColors {
    SECONDARY = "secondary",
    SUCCESS = "success",
    WARNING = "warning",
    ALERT = "alert",
}
/**
 * Color meta-enumerable.
 * This is exposed to the consumer, while the sub-sets are only used internally.
 */
export declare const Colors: {
    readonly [x: number]: string;
    SECONDARY: ProgressColors.SECONDARY;
    SUCCESS: ProgressColors.SUCCESS;
    WARNING: ProgressColors.WARNING;
    ALERT: ProgressColors.ALERT;
    INFO: LabelColors.INFO;
    PRIMARY: CalloutColors.PRIMARY;
};
/**
 * Callout size enumerable.
 */
export declare enum CalloutSizes {
    SMALL = "small",
    LARGE = "large",
}
/**
 * Button size enumerable.
 */
export declare enum ButtonSizes {
    TINY = "tiny",
    SMALL = "small",
    LARGE = "large",
}
/**
 * Button group size enumerable.
 */
export declare enum ButtonGroupSizes {
    TINY = "tiny",
    SMALL = "small",
    LARGE = "large",
}
/**
 * Switch size enumerable.
 */
export declare enum SwitchSizes {
    TINY = "tiny",
    SMALL = "small",
    LARGE = "large",
}
/**
 * Size meta-enumerable.
 * This is exposed to the consumer, while the sub-sets are only used internally.
 */
export declare const Sizes: {
    readonly [x: number]: string;
    TINY: SwitchSizes.TINY;
    SMALL: SwitchSizes.SMALL;
    LARGE: SwitchSizes.LARGE;
};
/**
 * Horizontal alignment enumerable.
 */
export declare enum HorizontalAlignments {
    CENTER = "center",
    RIGHT = "right",
    JUSTIFY = "justify",
    SPACED = "spaced",
}
/**
 * Vertical alignment enumerable.
 */
export declare enum VerticalAlignments {
    TOP = "top",
    MIDDLE = "middle",
    BOTTOM = "bottom",
    STRETCH = "stretch",
}
/**
 * Menu alignment enumerable.
 *
 * @type {{RIGHT = string, CENTER = string}}
 */
export declare enum MenuAlignments {
    RIGHT = "right",
    CENTER = "center",
}
/**
 * Alignments meta-enumerable.
 * This is exposed to the consumer, while the sub-sets are only used internally.
 */
export declare const Alignments: {
    readonly [x: number]: string;
    RIGHT: MenuAlignments.RIGHT;
    CENTER: MenuAlignments.CENTER;
    TOP: VerticalAlignments.TOP;
    MIDDLE: VerticalAlignments.MIDDLE;
    BOTTOM: VerticalAlignments.BOTTOM;
    STRETCH: VerticalAlignments.STRETCH;
    JUSTIFY: HorizontalAlignments.JUSTIFY;
    SPACED: HorizontalAlignments.SPACED;
};
/**
 * Float types enumerable.
 */
export declare enum FloatTypes {
    LEFT = "left",
    CENTER = "center",
    RIGHT = "right",
}
/**
 * Switch type enumerable.
 */
export declare enum SwitchInputTypes {
    CHECKBOX = "checkbox",
    RADIO = "radio",
}
/**
 * Input type meta-enumerable.
 * This is exposed to the consumer, while the sub-sets are only used internally.
 */
export declare const InputTypes: {
    readonly [x: number]: string;
    CHECKBOX: SwitchInputTypes.CHECKBOX;
    RADIO: SwitchInputTypes.RADIO;
};
/**
 * Gutter type enumerable.
 */
export declare enum GutterTypes {
    MARGIN = "margin",
    PADDING = "padding",
}
/**
 * Extended breakpoints enumerable (includes 'ALL' option, which is useful when breakpoint is not defined).
 */
export declare enum ExtendedBreakpoints {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
    XLARGE = "xlarge",
    XXLARGE = "xxlarge",
    ALL = "all",
}
/**
 * Space control enumerable.
 */
export declare enum SpaceControls {
    AUTO = "auto",
    GROW = "grow",
    SHRINK = "shrink",
}
