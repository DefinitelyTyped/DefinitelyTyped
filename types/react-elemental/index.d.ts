// Type definitions for React Elemental 1.2
// Project: https://github.com/LINKIWI/react-elemental
// Definitions by: Fernando Chen <https://github.com/wzfc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import {
    AnchorHTMLAttributes,
    Component,
    CSSProperties,
    FunctionComponent,
    HTMLAttributes,
    ImgHTMLAttributes,
    InputHTMLAttributes,
    ReactElement,
    ReactNode,
    TextareaHTMLAttributes
} from 'react';

declare module 'react-elemental' {
    type AlertType = 'info' | 'success' | 'warn' | 'error';
    type AlertSize = 'alpha' | 'beta';
    interface AlertProps {
        readonly type?: AlertType;
        readonly size?: AlertSize;
        readonly title: string;
        readonly message: string | ReactElement;
        readonly dismissible?: boolean;
        readonly style?: CSSProperties;
        readonly onDismiss?: () => void;
    }

    /**
     * Educational status alerts.
     */
    class Alert extends Component<AlertProps> {
    }

    type ButtonSize = 'alpha' | 'beta' | 'gamma';
    interface ButtonProps {
        readonly color?: string;
        readonly size?: ButtonSize;
        readonly text?: string;
        readonly disabled?: boolean;
        readonly secondary?: boolean;
        readonly style?: CSSProperties;
        readonly children?: any;
    }

    /**
     * Button component.
     */
    class Button extends Component<ButtonProps> {
    }

    interface CheckboxProps {
        readonly checked?: boolean;
        readonly label?: string;
        readonly style?: CSSProperties;
        readonly disabled?: boolean;
        readonly onChange?: (checked: boolean) => void;
        readonly children?: ReactNode;
    }
    interface CheckboxState {
        readonly isHover: boolean;
        readonly isFocus: boolean;
    }

    /**
     * Styled checkbox element.
     */
    class Checkbox extends Component<CheckboxProps, CheckboxState> {
    }

    interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
        readonly alt: string;
        readonly color?: string;
        readonly width?: string;
        readonly height?: string;
        readonly lazy?: boolean;
        readonly showIntermediate?: boolean;
        readonly style?: CSSProperties;
        readonly imgStyle?: object;
    }
    interface ImageState {
        readonly load: string;
    }

    /**
     * Wrapper for external images.
     */
    class Image extends Component<ImageProps, ImageState> {
    }

    interface LabelProps {
        readonly label?: string;
        readonly sublabel?: string;
    }

    /**
     * Text label accompanying an input field.
     */
    const Label: FunctionComponent<LabelProps>;

    type LinkType = 'regular' | 'plain' | 'underline';
    interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
        readonly type?: LinkType;
        readonly ref?: string;
        readonly activeColor?: string;
        readonly style?: CSSProperties;
        readonly children?: ReactNode;
    }

    /**
     * Styled link element.
     */
    class Link extends Component<LinkProps> {
    }

    interface LoadingBarProps {
        readonly color?: string;
        readonly thickness?: number;
        readonly duration?: number;
        readonly delay?: number;
        readonly style?: CSSProperties;
    }
    interface LoadingBarState {
        readonly position: number;
    }

    /**
     * Indeterminate loading bar component.
     */
    class LoadingBar extends Component<LoadingBarProps, LoadingBarState> {
    }

    type ModalSize = 'alpha' | 'beta' | 'gamma';
    interface ModalProps {
        readonly size?: ModalSize;
        readonly persistent?: boolean;
        readonly onHide?: () => void;
        readonly style?: CSSProperties;
        readonly children?: any;
    }
    interface ModalState {
        readonly modal: HTMLDivElement;
        readonly windowWidth: number;
        readonly windowHeight: number;
    }

    /**
     * Container for a full-page modal dialog.
     */
    class Modal extends Component<ModalProps, ModalState> {
    }

    type PulsatorSize = 'alpha' | 'beta' | 'gamma' | 'delta';
    interface PulsatorProps {
        readonly color?: string;
        readonly size?: PulsatorSize;
        readonly inactive?: boolean;
        readonly transparent?: boolean;
        readonly style?: CSSProperties;
    }
    interface PulsatorState {
        readonly color: any;
    }

    /**
     * Indeterminate progress indication spinner.
     */
    class Pulsator extends Component<PulsatorProps, PulsatorState> {
    }

    type RadioGroupProps = HTMLAttributes<HTMLDivElement> & {
        readonly options?: Array<{
            readonly value: string;
            readonly label: string | ReactNode;
            readonly disabled?: boolean;
        }>;
        readonly value?: string;
        readonly accentColor?: string;
        readonly idleColor?: string;
        readonly radioRenderer?: (option: ReactElement, idx: number, options: ReactElement[]) => ReactElement;
        readonly onChange?: (value: string) => void;
    };

    /**
     * Group of individually selectable radio buttons.
     */
    class RadioGroup extends Component<RadioGroupProps> {
    }

    interface SelectListProps {
        readonly placeholder?: string;
        readonly options?: Array<{
            readonly label: string;
            readonly value: string;
        }>;
        readonly width?: number | string;
        readonly height?: number;
        readonly error?: string;
        readonly style?: CSSProperties;
        readonly onChange?: (value: string) => void;
    }
    interface SelectListState {
        readonly isExpanded: boolean;
        readonly isFocused: boolean;
        readonly isHovered: boolean;
        readonly selectedOption: {
            readonly label: any;
            readonly value: string;
        };
        readonly highlightedIdx: number | null;
    }

    /**
     * Dropdown menu component.
     */
    class SelectList extends Component<SelectListProps, SelectListState> {
    }

    interface SpacingProps {
        readonly padding?: boolean;
        readonly size?: string;
        readonly top?: boolean;
        readonly right?: boolean;
        readonly bottom?: boolean;
        readonly left?: boolean;
        readonly inline?: boolean;
        readonly style?: CSSProperties;
        readonly children?: any;
    }

    /**
     * Spacing component to add padding and margins.
     */
    const Spacing: FunctionComponent<SpacingProps>;

    type SpinnerSize = 'alpha' | 'beta' | 'gamma' | 'delta';
    interface SpinnerProps {
        readonly size?: SpinnerSize;
        readonly ringColor?: string;
        readonly accentColor?: string;
        readonly duration?: number;
        readonly thickness?: number;
        readonly style?: CSSProperties;
    }

    /**
     * Indeterminate progress indication spinner.
     */
    class Spinner extends Component<SpinnerProps> {
    }

    interface TabsProps {
        readonly options?: Array<{
            readonly value: string;
            readonly label: string | ReactNode;
        }>;
        readonly value?: string;
        readonly secondary?: boolean;
        readonly fit?: boolean;
        readonly invert?: boolean;
        readonly onChange?: (value: string) => void;
        readonly style?: CSSProperties;
    }

    /**
     * Horizontally organized segments of options.
     */
    class Tabs extends Component<TabsProps> {
    }

    type TagSize = 'alpha' | 'beta';
    interface TagProps {
        readonly outlineColor?: string;
        readonly backgroundColor?: string;
        readonly text: string;
        readonly size?: TagSize;
        readonly dismissible?: boolean;
        readonly onDismiss?: () => void;
        readonly style?: CSSProperties;
    }

    /**
     * Textual status indicators.
     */
    const Tag: FunctionComponent<TagProps>;

    interface TextProps {
        readonly secondary?: boolean;
        readonly size?: string;
        readonly color?: string;
        readonly bold?: boolean;
        readonly inline?: boolean;
        readonly uppercase?: boolean;
        readonly center?: boolean;
        readonly right?: boolean;
        readonly style?: CSSProperties;
        readonly children?: ReactNode;
    }

    /**
     * Text component with automatic typeface formatting.
     */
    class Text extends Component<TextProps> {
    }

    type TextAreaProps = TextFieldProps & {
        readonly error?: string;
        readonly secondary?: boolean;
        readonly style?: CSSProperties;
    };

    /**
     * Styled textarea element for blobs of text input.
     *
     * This component behaves similarly to TextField, with some minor modifications.
     */
    const TextArea: FunctionComponent<TextAreaProps>;

    type TextFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & InputHTMLAttributes<HTMLInputElement> & {
        readonly error?: string;
        readonly secondary?: boolean;
        readonly textarea?: boolean;
        readonly style?: CSSProperties;
    };

    /**
     * Input element for accepting user text input.
     */
    class TextField extends Component<TextFieldProps> {
    }

    interface ToastProps {
        readonly color?: string;
        readonly accent?: string;
        readonly style?: CSSProperties;
        readonly children?: ReactNode;
    }

    /**
     * Fixed-position notification element. This component is purely presentational; in actual usage,
     * it should be wrapped in a manager to handle logic for conditional display.
     */
    const Toast: FunctionComponent<ToastProps>;

    interface TooltipProps {
        readonly contents: ReactElement;
        readonly persistent?: boolean;
        readonly width?: number | string;
        readonly offset?: number;
        readonly top?: boolean;
        readonly bottom?: boolean;
        readonly style?: CSSProperties;
        readonly children: ReactNode;
    }

    interface TooltipState {
        readonly displayTooltip: any;
    }

    /**
     * Wrap an arbitrary element with a tooltip next to the element on hover.
     */
    class Tooltip extends Component<TooltipProps, TooltipState> {
    }

    interface ElementalProps {
        readonly fontOpts?: {
            readonly primary?: {
                readonly regular?: string;
                readonly bold?: string;
            };
            readonly secondary?: {
                readonly regular?: string;
                readonly bold?: string;
            };
        };
        readonly colorOpts?: {
            readonly primary?: string;
            readonly primaryLight?: string;
            readonly primaryDark?: string;
        };
        readonly children: ReactNode;
    }

    /**
     * Component that declaratively wraps logic for idempotently bootstrapping the library. Client code
     * can be contained within the children of this component at the highest level of the application.
     */
    class Elemental extends Component<ElementalProps> {}

    interface FontOpts {
        primary?: {
            regular?: string;
            bold?: string;
        };
        secondary?: {
            regular?: string;
            bold?: string;
        };
    }

    interface ColorOpts {
        primary?: string;
        primaryLight?: string;
        primaryDark?: string;
    }

    /**
     * Bootstrap Elemental. This will inject all necessary global CSS declarations and initialize custom
     * style overrides passed in as options.
     *
     * @param fontOpts Describes the primary and secondary fonts.
     * @param colorOpts Optional color overrides for the library's default primary colors.
     */
    function bootstrap(fontOpts?: FontOpts, colorOpts?: ColorOpts): void;

    const colors: {
        black: string;
        white: string;
        transparent: string;
        greenLight: string;
        green: string;
        redLight: string;
        red: string;
        blueLight: string;
        blue: string;
        blueDark: string;
        orangeLight: string;
        orange: string;
        yellow: string;
        yellowLight: string;
        purpleLight: string;
        purple: string;
        purpleDark: string;
        primary: string;
        primaryLight: string;
        primaryDark: string;
        [colorName: string]: string;
    };

    const sizes: {
        alpha: string;
        beta: string;
        gamma: string;
        delta: string;
        epsilon: string;
        iota: string;
        kilo: string;
        lambda: string;
    };

    const spacing: {
        default: string;
        micro: string
        tiny: string
        small: string
        large: string
        huge: string
        enormous: string;
    };
}
