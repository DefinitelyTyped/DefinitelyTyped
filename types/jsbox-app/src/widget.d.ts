// JSBox Widget API TypeScript Declaration

declare namespace WidgetTypes {
    interface WidgetEntry {
        date?: Date;
        info?: any;
    }

    type WidgetPolicy =
        | {
            atEnd: boolean;
        }
        | {
            afterDate: Date;
        }
        | {
            never: boolean;
        };

    interface WidgetContext {
        entry: WidgetEntry;
        family: number; // $widgetFamily
        // BUG: Up to version 2.32.0, $widget.family actually returns 6, 7, and 8
        // for the circular, rectangular, and inline variants, respectively.
        displaySize: JBSize;
        isDarkMode: boolean;
    }

    interface WidgetOptions {
        entries?: WidgetEntry[];
        policy?: WidgetPolicy;
        render: (ctx: WidgetContext) => AllWidgetOptions;
    }

    type AllWidgetTypes =
        | "text"
        | "image"
        | "color"
        | "gradient"
        | "divider"
        | "hstack"
        | "vstack"
        | "zstack"
        | "spacer"
        | "hgrid"
        | "vgrid";

    type AllWidgetOptions =
        | WidgetTextOptions
        | WidgetImageOptions
        | WidgetColorOptions
        | WidgetGradientOptions
        | WidgetDividerOptions
        | WidgetHstackOptions
        | WidgetVstackOptions
        | WidgetZstackOptions
        | WidgetSpacerOptions
        | WidgetHgridOptions
        | WidgetVgridOptions;

    interface WidgetBaseOptions {
        type: AllWidgetTypes;
        views?: AllWidgetOptions[];
    }

    interface BasePropsModifiers {
        frame?: {
            width?: number;
            height?: number;
            alignment?: number | string;
            minWidth?: number;
            idealWidth?: number;
            maxWidth?: number;
            minHeight?: number;
            idealHeight?: number;
            maxHeight?: number;
        };
        position?: JBPoint;
        offset?: JBPoint;
        padding?: number | JBInsets;
        layoutPriority?: number;
        cornerRadius?:
            | number
            | {
                value: number;
                style: 0 | 1; // 0: circular, 1: continuous
            };
        border?: {
            color?: UIColor;
            width?: number;
        };
        clipped?: boolean | { antialiased: boolean };
        opacity?: number;
        rotationEffect?: number; // Arc angle
        blur?: number;
        color?: UIColor | string;
        background?: UIColor | UIImage | WidgetImageOptions | WidgetGradientOptions;
        link?: string;
        widgetURL?: string;
    }

    interface TextPropsModifiers extends BasePropsModifiers {
        bold?: boolean;
        font?:
            | UIFont
            | {
                name: string;
                size: number;
                weight?:
                    | "ultraLight"
                    | "thin"
                    | "light"
                    | "regular"
                    | "medium"
                    | "semibold"
                    | "bold"
                    | "heavy"
                    | "black";
                monospaced?: boolean;
            };
        lineLimit?: number;
        minimumScaleFactor?: number;
    }

    interface ImagePropsModifiers extends BasePropsModifiers {
        resizable?: boolean;
        scaledToFill?: boolean;
        scaledToFit?: boolean;
        accessibilityHidden?: boolean;
        accessibilityLabel?: string;
        accessibilityHint?: string;
    }

    type TextProps =
        & TextPropsModifiers
        & (
            | {
                text: string;
            }
            | {
                date: Date;
                style: number | string; // $widget.dateStyle, or string literals
            }
            | {
                startDate: Date; // display a time interval
                endDate: Date;
            }
        );

    interface WidgetTextOptions extends WidgetBaseOptions {
        type: "text";
        props?: TextProps;
        modifiers?: TextPropsModifiers[];
    }

    type ImageProps =
        & ImagePropsModifiers
        & (
            | {
                image: UIImage;
            }
            | {
                data: NSData;
            }
            | {
                symbol:
                    | string
                    | {
                        glyph: string;
                        size: number; // Default: 24
                        weight:
                            | "ultraLight"
                            | "thin"
                            | "light"
                            | "regular"
                            | "medium"
                            | "semibold"
                            | "bold"
                            | "heavy"
                            | "black"; // Default: "regular"
                    };
            }
            | {
                path: string;
            }
            | {
                uri: string; // URL or Base64
            }
        );

    interface WidgetImageOptions extends WidgetBaseOptions {
        type: "image";
        props?: ImageProps;
        modifiers?: ImagePropsModifiers[];
    }

    type ColorProps =
        & BasePropsModifiers
        & (
            | {
                color: UIColor | string;
            }
            | {
                light: UIColor | string;
                dark: UIColor | string;
            }
        );

    interface WidgetColorOptions extends WidgetBaseOptions {
        type: "color";
        props?: ColorProps;
        modifiers?: BasePropsModifiers[];
    }

    interface GradientProps extends BasePropsModifiers {
        startPoint?: JBPoint;
        endPoint?: JBPoint;
        locations?: number[];
        colors: UIColor[];
    }

    interface WidgetGradientOptions extends WidgetBaseOptions {
        type: "gradient";
        props?: GradientProps;
        modifiers?: BasePropsModifiers[];
    }

    interface WidgetDividerOptions extends WidgetBaseOptions {
        type: "divider";
        props?: BasePropsModifiers;
        modifiers?: BasePropsModifiers[];
    }

    interface HstackProps extends BasePropsModifiers {
        alignment?: number | string; // $widget.verticalAlignment, or string literals
        spacing?: number;
    }

    interface WidgetHstackOptions extends WidgetBaseOptions {
        type: "hstack";
        props?: HstackProps;
        modifiers?: BasePropsModifiers[];
    }

    interface VstackProps extends BasePropsModifiers {
        alignment?: number | string; // $widget.horizontalAlignment, or string literals
        spacing?: number;
    }

    interface WidgetVstackOptions extends WidgetBaseOptions {
        type: "vstack";
        props?: VstackProps;
        modifiers?: BasePropsModifiers[];
    }

    interface ZstackProps extends BasePropsModifiers {
        alignment?: number | string; // $widget.alignment, or string literals
    }

    interface WidgetZstackOptions extends WidgetBaseOptions {
        type: "zstack";
        props?: ZstackProps;
        modifiers?: BasePropsModifiers[];
    }

    interface SpacerProps extends BasePropsModifiers {
        minLength?: number;
    }

    interface WidgetSpacerOptions extends WidgetBaseOptions {
        type: "spacer";
        props?: SpacerProps;
        modifiers?: BasePropsModifiers[];
    }

    interface GridItems {
        fixed?: number;
        flexible?: {
            minimum: number;
            maximum: number;
        };
        adaptive?: {
            minimum: number;
            maximum: number;
        };
        spacing?: number;
        alignment?: number | string; // $widget.alignment, or string literals
    }

    interface HgridProps extends BasePropsModifiers {
        alignment?: number | string; // $widget.verticalAlignment, or string literals
        spacing?: number;
        rows?: GridItems[];
    }

    interface WidgetHgridOptions extends WidgetBaseOptions {
        type: "hgrid";
        props?: HgridProps;
        modifiers?: BasePropsModifiers[];
    }

    interface VgridProps extends BasePropsModifiers {
        alignment?: number | string; // $widget.horizontalAlignment, or string literals
        spacing?: number;
        columns?: GridItems[];
    }

    interface WidgetVgridOptions extends WidgetBaseOptions {
        type: "vgrid";
        props?: VgridProps;
        modifiers?: BasePropsModifiers[];
    }
}

interface JBWidget {
    // The following 3 APIs are deprecated. They belong to iOS Today Widgets.
    height: number;
    mode: number; // 0: less 1: more.
    modeChanged: (mode: number) => void;

    setTimeline(args: WidgetTypes.WidgetOptions | WidgetTypes.WidgetOptions["render"]): void;
    reloadTimeline(): void;
    inputValue: string;
    family: number; // $widgetFamily
    // BUG: Up to version 2.32.0, $widget.family actually returns 6, 7, and 8
    // for the circular, rectangular, and inline variants, respectively.
    displaySize: JBSize;
    isDarkMode: boolean;
    alignment: {
        center: 0;
        leading: 1;
        trailing: 2;
        top: 3;
        bottom: 4;
        topLeading: 5;
        topTrailing: 6;
        bottomLeading: 7;
        bottomTrailing: 8;
    };
    horizontalAlignment: {
        leading: 0;
        center: 1;
        trailing: 2;
    };
    verticalAlignment: {
        top: 0;
        center: 1;
        bottom: 2;
        firstTextBaseline: 3;
        lastTextBaseline: 4;
    };
    dateStyle: {
        time: 0;
        date: 1;
        relative: 2;
        offset: 3;
        timer: 4;
    };
}

declare const $widget: JBWidget;
