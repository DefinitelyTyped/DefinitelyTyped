// Type definitions for React Elemental 1.2
// Project: https://github.com/LINKIWI/react-elemental
// Definitions by: Fernando Chen <https://github.com/wzfc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
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

export type AlertType = 'info' | 'success' | 'warn' | 'error';
export type AlertSize = 'alpha' | 'beta';
export interface AlertProps {
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
export class Alert extends Component<AlertProps> {
}

export type ButtonSize = 'alpha' | 'beta' | 'gamma';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
export class Button extends Component<ButtonProps> {
}

export interface CheckboxProps {
    readonly checked?: boolean;
    readonly label?: string;
    readonly style?: CSSProperties;
    readonly disabled?: boolean;
    readonly onChange?: (checked: boolean) => void;
    readonly children?: ReactNode;
}
export interface CheckboxState {
    readonly isHover: boolean;
    readonly isFocus: boolean;
}

/**
 * Styled checkbox element.
 */
export class Checkbox extends Component<CheckboxProps, CheckboxState> {
}

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    readonly alt: string;
    readonly color?: string;
    readonly width?: string;
    readonly height?: string;
    readonly lazy?: boolean;
    readonly showIntermediate?: boolean;
    readonly style?: CSSProperties;
    readonly imgStyle?: CSSProperties;
}
export interface ImageState {
    readonly load: string;
}

/**
 * Wrapper for external images.
 */
export class Image extends Component<ImageProps, ImageState> {
}

export interface LabelProps {
    readonly label?: string;
    readonly sublabel?: string;
}

/**
 * Text label accompanying an input field.
 */
export const Label: FunctionComponent<LabelProps>;

export type LinkType = 'regular' | 'plain' | 'underline';
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    readonly type?: LinkType;
    readonly ref?: string;
    readonly activeColor?: string;
    readonly style?: CSSProperties;
    readonly children?: ReactNode;
}

/**
 * Styled link element.
 */
export class Link extends Component<LinkProps> {
}

export interface LoadingBarProps {
    readonly color?: string;
    readonly thickness?: number;
    readonly duration?: number;
    readonly delay?: number;
    readonly style?: CSSProperties;
}
export interface LoadingBarState {
    readonly position: number;
}

/**
 * Indeterminate loading bar component.
 */
export class LoadingBar extends Component<LoadingBarProps, LoadingBarState> {
}

export type ModalSize = 'alpha' | 'beta' | 'gamma';
export interface ModalProps {
    readonly size?: ModalSize;
    readonly persistent?: boolean;
    readonly onHide?: () => void;
    readonly style?: CSSProperties;
    readonly children?: any;
}
export interface ModalState {
    readonly modal: HTMLDivElement;
    readonly windowWidth: number;
    readonly windowHeight: number;
}

/**
 * Container for a full-page modal dialog.
 */
export class Modal extends Component<ModalProps, ModalState> {
}

export type PulsatorSize = 'alpha' | 'beta' | 'gamma' | 'delta';
export interface PulsatorProps {
    readonly color?: string;
    readonly size?: PulsatorSize;
    readonly inactive?: boolean;
    readonly transparent?: boolean;
    readonly style?: CSSProperties;
}
export interface PulsatorState {
    readonly color: any;
}

/**
 * Indeterminate progress indication spinner.
 */
export class Pulsator extends Component<PulsatorProps, PulsatorState> {
}

export type RadioGroupProps = HTMLAttributes<HTMLDivElement> & {
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
export class RadioGroup extends Component<RadioGroupProps> {
}

export interface SelectListProps {
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
export interface SelectListState {
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
export class SelectList extends Component<SelectListProps, SelectListState> {
}

export interface SpacingProps {
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
export const Spacing: FunctionComponent<SpacingProps>;

export type SpinnerSize = 'alpha' | 'beta' | 'gamma' | 'delta';
export interface SpinnerProps {
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
export class Spinner extends Component<SpinnerProps> {
}

export interface TabsProps {
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
export class Tabs extends Component<TabsProps> {
}

export type TagSize = 'alpha' | 'beta';
export interface TagProps {
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
export const Tag: FunctionComponent<TagProps>;

export interface TextProps {
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
export class Text extends Component<TextProps> {
}

export type TextAreaProps = TextFieldProps & {
    readonly error?: string;
    readonly secondary?: boolean;
    readonly style?: CSSProperties;
};

/**
 * Styled textarea element for blobs of text input.
 *
 * This component behaves similarly to TextField, with some minor modifications.
 */
export const TextArea: FunctionComponent<TextAreaProps>;

export type TextFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & InputHTMLAttributes<HTMLInputElement> & {
    readonly error?: string;
    readonly secondary?: boolean;
    readonly textarea?: boolean;
    readonly style?: CSSProperties;
};

/**
 * Input element for accepting user text input.
 */
export class TextField extends Component<TextFieldProps> {
}

export interface ToastProps {
    readonly color?: string;
    readonly accent?: string;
    readonly style?: CSSProperties;
    readonly children?: ReactNode;
}

/**
 * Fixed-position notification element. This component is purely presentational; in actual usage,
 * it should be wrapped in a manager to handle logic for conditional display.
 */
export const Toast: FunctionComponent<ToastProps>;

export interface TooltipProps {
    readonly contents: ReactElement;
    readonly persistent?: boolean;
    readonly width?: number | string;
    readonly offset?: number;
    readonly top?: boolean;
    readonly bottom?: boolean;
    readonly style?: CSSProperties;
    readonly children: ReactNode;
}

export interface TooltipState {
    readonly displayTooltip: any;
}

/**
 * Wrap an arbitrary element with a tooltip next to the element on hover.
 */
export class Tooltip extends Component<TooltipProps, TooltipState> {
}

export interface ElementalProps {
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
export class Elemental extends Component<ElementalProps> {}

export interface FontOpts {
    primary?: {
        regular?: string;
        bold?: string;
    };
    secondary?: {
        regular?: string;
        bold?: string;
    };
}

export interface ColorOpts {
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
export function bootstrap(fontOpts?: FontOpts, colorOpts?: ColorOpts): void;

export const colors: {
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

export const sizes: {
    alpha: string;
    beta: string;
    gamma: string;
    delta: string;
    epsilon: string;
    iota: string;
    kilo: string;
    lambda: string;
};

export const spacing: {
    default: string;
    micro: string
    tiny: string
    small: string
    large: string
    huge: string
    enormous: string;
};
