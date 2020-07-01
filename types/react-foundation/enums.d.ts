/**
 * Breakpoints enumerable.
 */
export declare type Breakpoints = 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
export declare const Breakpoints: {
    SMALL: Breakpoints;
    MEDIUM: Breakpoints;
    LARGE: Breakpoints;
    XLARGE: Breakpoints;
    XXLARGE: Breakpoints;
};
/**
 * Badge color enumerable.
 */
export declare type BadgeColors = 'info' | 'secondary' | 'success' | 'warning' | 'alert';
export declare const BadgeColors: {
    INFO: BadgeColors;
    SECONDARY: BadgeColors;
    SUCCESS: BadgeColors;
    WARNING: BadgeColors;
    ALERT: BadgeColors;
};
/**
 * Button color enumerable.
 */
export declare type ButtonColors = 'primary' | 'secondary' | 'success' | 'alert' | 'warning';
export declare const ButtonColors: {
    PRIMARY: ButtonColors;
    SECONDARY: ButtonColors;
    SUCCESS: ButtonColors;
    ALERT: ButtonColors;
    WARNING: ButtonColors;
};
/**
 * Button group color enumerable.
 */
export declare type ButtonGroupColors = 'primary' | 'secondary' | 'success' | 'alert' | 'warning';
export declare const ButtonGroupColors: {
    PRIMARY: ButtonColors;
    SECONDARY: ButtonColors;
    SUCCESS: ButtonColors;
    ALERT: ButtonColors;
    WARNING: ButtonColors;
};
/**
 * Callout color enumerable.
 */
export declare type CalloutColors = 'primary' | 'secondary' | 'success' | 'warning' | 'alert';
export declare const CalloutColors: {
    PRIMARY: ButtonColors;
    SECONDARY: ButtonColors;
    SUCCESS: ButtonColors;
    WARNING: ButtonColors;
    ALERT: ButtonColors;
};
/**
 * Label color enumerable.
 */
export declare type LabelColors = 'info' | 'secondary' | 'success' | 'warning' | 'alert';
export declare const LabelColors: {
    INFO: BadgeColors;
    SECONDARY: BadgeColors;
    SUCCESS: BadgeColors;
    WARNING: BadgeColors;
    ALERT: BadgeColors;
};
/**
 * Progress colors enumerable.
 */
export declare type ProgressColors = 'secondary' | 'success' | 'warning' | 'alert';
export declare const ProgressColors: {
    SECONDARY: ProgressColors;
    SUCCESS: ProgressColors;
    WARNING: ProgressColors;
    ALERT: ProgressColors;
};
/**
 * Color meta-enumerable.
 * This is exposed to the consumer, while the sub-sets are only used internally.
 */
export declare const Colors: {
    SECONDARY: ProgressColors;
    SUCCESS: ProgressColors;
    WARNING: ProgressColors;
    ALERT: ProgressColors;
    INFO: BadgeColors;
    PRIMARY: ButtonColors;
};
/**
 * Callout size enumerable.
 */
export declare type CalloutSizes = 'small' | 'large';
export declare const CalloutSizes: {
    SMALL: CalloutSizes;
    LARGE: CalloutSizes;
};
/**
 * Button size enumerable.
 */
export declare type ButtonSizes = 'tiny' | 'small' | 'large';
export declare const ButtonSizes: {
    TINY: ButtonSizes;
    SMALL: ButtonSizes;
    LARGE: ButtonSizes;
};
/**
 * Button group size enumerable.
 */
export declare type ButtonGroupSizes = 'tiny' | 'small' | 'large';
export declare const ButtonGroupSizes: {
    TINY: ButtonSizes;
    SMALL: ButtonSizes;
    LARGE: ButtonSizes;
};
/**
 * Switch size enumerable.
 */
export declare type SwitchSizes = 'tiny' | 'small' | 'large';
export declare const SwitchSizes: {
    TINY: ButtonSizes;
    SMALL: ButtonSizes;
    LARGE: ButtonSizes;
};
/**
 * Size meta-enumerable.
 * This is exposed to the consumer, while the sub-sets are only used internally.
 */
export declare const Sizes: {
    TINY: ButtonSizes;
    SMALL: ButtonSizes;
    LARGE: ButtonSizes;
};
/**
 * Horizontal alignment enumerable.
 */
export declare type HorizontalAlignments = 'center' | 'right' | 'justify' | 'spaced';
export declare const HorizontalAlignments: {
    CENTER: HorizontalAlignments;
    RIGHT: HorizontalAlignments;
    JUSTIFY: HorizontalAlignments;
    SPACED: HorizontalAlignments;
};
/**
 * Vertical alignment enumerable.
 */
export declare type VerticalAlignments = 'top' | 'middle' | 'bottom' | 'stretch';
export declare const VerticalAlignments: {
    TOP: VerticalAlignments;
    MIDDLE: VerticalAlignments;
    BOTTOM: VerticalAlignments;
    STRETCH: VerticalAlignments;
};
/**
 * Menu alignment enumerable.
 *
 * @type {{RIGHT = string, CENTER = string}}
 */
export declare type MenuAlignments = 'right' | 'center';
export declare const MenuAlignments: {
    RIGHT: MenuAlignments;
    CENTER: MenuAlignments;
};
/**
 * Alignments meta-enumerable.
 * This is exposed to the consumer, while the sub-sets are only used internally.
 */
export declare const Alignments: {
    RIGHT: MenuAlignments;
    CENTER: MenuAlignments;
    TOP: VerticalAlignments;
    MIDDLE: VerticalAlignments;
    BOTTOM: VerticalAlignments;
    STRETCH: VerticalAlignments;
    JUSTIFY: HorizontalAlignments;
    SPACED: HorizontalAlignments;
};
/**
 * Float types enumerable.
 */
export declare type FloatTypes = 'left' | 'center' | 'right';
export declare const FloatTypes: {
    LEFT: FloatTypes;
    CENTER: FloatTypes;
    RIGHT: FloatTypes;
};
/**
 * Switch type enumerable.
 */
export declare type SwitchInputTypes = 'checkbox' | 'radio';
export declare const SwitchInputTypes: {
    CHECKBOX: SwitchInputTypes;
    RADIO: SwitchInputTypes;
};
/**
 * Input type meta-enumerable.
 * This is exposed to the consumer, while the sub-sets are only used internally.
 */
export declare const InputTypes: {
    CHECKBOX: SwitchInputTypes;
    RADIO: SwitchInputTypes;
};
/**
 * Gutter type enumerable.
 */
export declare type GutterTypes = 'margin' | 'padding';
export declare const GutterTypes: {
    MARGIN: GutterTypes;
    PADDING: GutterTypes;
};
/**
 * Extended breakpoints enumerable (includes 'ALL' option, which is useful when breakpoint is not defined).
 */
export declare type ExtendedBreakpoints = 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'all';
export declare const ExtendedBreakpoints: {
    SMALL: ExtendedBreakpoints;
    MEDIUM: ExtendedBreakpoints;
    LARGE: ExtendedBreakpoints;
    XLARGE: ExtendedBreakpoints;
    XXLARGE: ExtendedBreakpoints;
    ALL: ExtendedBreakpoints;
};
/**
 * Space control enumerable.
 */
export declare type SpaceControls = 'auto' | 'grow' | 'shrink';
export declare const SpaceControls: {
    AUTO: SpaceControls;
    GROW: SpaceControls;
    SHRINK: SpaceControls;
};
