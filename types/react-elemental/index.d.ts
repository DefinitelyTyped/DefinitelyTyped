// Type definitions for non-npm package React Elemental 1.2
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
    readonly type?: AlertType | undefined;
    readonly size?: AlertSize | undefined;
    readonly title: string;
    readonly message: string | ReactElement;
    readonly dismissible?: boolean | undefined;
    readonly style?: CSSProperties | undefined;
    readonly onDismiss?: (() => void) | undefined;
}

/**
 * Educational status alerts.
 */
export class Alert extends Component<AlertProps> {
}

export type ButtonSize = 'alpha' | 'beta' | 'gamma';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    readonly color?: string | undefined;
    readonly size?: ButtonSize | undefined;
    readonly text?: string | undefined;
    readonly disabled?: boolean | undefined;
    readonly secondary?: boolean | undefined;
    readonly style?: CSSProperties | undefined;
    readonly children?: any;
}

/**
 * Button component.
 */
export class Button extends Component<ButtonProps> {
}

export interface CheckboxProps {
    readonly checked?: boolean | undefined;
    readonly label?: string | undefined;
    readonly style?: CSSProperties | undefined;
    readonly disabled?: boolean | undefined;
    readonly onChange?: ((checked: boolean) => void) | undefined;
    readonly children?: ReactNode | undefined;
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
    readonly color?: string | undefined;
    readonly width?: string | undefined;
    readonly height?: string | undefined;
    readonly lazy?: boolean | undefined;
    readonly showIntermediate?: boolean | undefined;
    readonly style?: CSSProperties | undefined;
    readonly imgStyle?: CSSProperties | undefined;
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
    readonly label?: string | undefined;
    readonly sublabel?: string | undefined;
}

/**
 * Text label accompanying an input field.
 */
export const Label: FunctionComponent<LabelProps>;

export type LinkType = 'regular' | 'plain' | 'underline';
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    readonly type?: LinkType | undefined;
    readonly ref?: string | undefined;
    readonly activeColor?: string | undefined;
    readonly style?: CSSProperties | undefined;
    readonly children?: ReactNode | undefined;
}

/**
 * Styled link element.
 */
export class Link extends Component<LinkProps> {
}

export interface LoadingBarProps {
    readonly color?: string | undefined;
    readonly thickness?: number | undefined;
    readonly duration?: number | undefined;
    readonly delay?: number | undefined;
    readonly style?: CSSProperties | undefined;
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
    readonly size?: ModalSize | undefined;
    readonly persistent?: boolean | undefined;
    readonly onHide?: (() => void) | undefined;
    readonly style?: CSSProperties | undefined;
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
    readonly color?: string | undefined;
    readonly size?: PulsatorSize | undefined;
    readonly inactive?: boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly style?: CSSProperties | undefined;
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
        readonly disabled?: boolean | undefined;
    }> | undefined;
    readonly value?: string | undefined;
    readonly accentColor?: string | undefined;
    readonly idleColor?: string | undefined;
    readonly radioRenderer?: ((option: ReactElement, idx: number, options: ReactElement[]) => ReactElement) | undefined;
    readonly onChange?: ((value: string) => void) | undefined;
};

/**
 * Group of individually selectable radio buttons.
 */
export class RadioGroup extends Component<RadioGroupProps> {
}

export interface SelectListProps {
    readonly placeholder?: string | undefined;
    readonly options?: Array<{
        readonly label: string;
        readonly value: string;
    }> | undefined;
    readonly width?: number | string | undefined;
    readonly height?: number | undefined;
    readonly error?: string | undefined;
    readonly style?: CSSProperties | undefined;
    readonly onChange?: ((value: string) => void) | undefined;
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
    readonly padding?: boolean | undefined;
    readonly size?: string | undefined;
    readonly top?: boolean | undefined;
    readonly right?: boolean | undefined;
    readonly bottom?: boolean | undefined;
    readonly left?: boolean | undefined;
    readonly inline?: boolean | undefined;
    readonly style?: CSSProperties | undefined;
    readonly children?: any;
}

/**
 * Spacing component to add padding and margins.
 */
export const Spacing: FunctionComponent<SpacingProps>;

export type SpinnerSize = 'alpha' | 'beta' | 'gamma' | 'delta';
export interface SpinnerProps {
    readonly size?: SpinnerSize | undefined;
    readonly ringColor?: string | undefined;
    readonly accentColor?: string | undefined;
    readonly duration?: number | undefined;
    readonly thickness?: number | undefined;
    readonly style?: CSSProperties | undefined;
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
    }> | undefined;
    readonly value?: string | undefined;
    readonly secondary?: boolean | undefined;
    readonly fit?: boolean | undefined;
    readonly invert?: boolean | undefined;
    readonly onChange?: ((value: string) => void) | undefined;
    readonly style?: CSSProperties | undefined;
}

/**
 * Horizontally organized segments of options.
 */
export class Tabs extends Component<TabsProps> {
}

export type TagSize = 'alpha' | 'beta';
export interface TagProps {
    readonly outlineColor?: string | undefined;
    readonly backgroundColor?: string | undefined;
    readonly text: string;
    readonly size?: TagSize | undefined;
    readonly dismissible?: boolean | undefined;
    readonly onDismiss?: (() => void) | undefined;
    readonly style?: CSSProperties | undefined;
}

/**
 * Textual status indicators.
 */
export const Tag: FunctionComponent<TagProps>;

export interface TextProps {
    readonly secondary?: boolean | undefined;
    readonly size?: string | undefined;
    readonly color?: string | undefined;
    readonly bold?: boolean | undefined;
    readonly inline?: boolean | undefined;
    readonly uppercase?: boolean | undefined;
    readonly center?: boolean | undefined;
    readonly right?: boolean | undefined;
    readonly style?: CSSProperties | undefined;
    readonly children?: ReactNode | undefined;
}

/**
 * Text component with automatic typeface formatting.
 */
export class Text extends Component<TextProps> {
}

export type TextAreaProps = TextFieldProps & {
    readonly error?: string | undefined;
    readonly secondary?: boolean | undefined;
    readonly style?: CSSProperties | undefined;
};

/**
 * Styled textarea element for blobs of text input.
 *
 * This component behaves similarly to TextField, with some minor modifications.
 */
export const TextArea: FunctionComponent<TextAreaProps>;

export type TextFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & InputHTMLAttributes<HTMLInputElement> & {
    readonly error?: string | undefined;
    readonly secondary?: boolean | undefined;
    readonly textarea?: boolean | undefined;
    readonly style?: CSSProperties | undefined;
};

/**
 * Input element for accepting user text input.
 */
export class TextField extends Component<TextFieldProps> {
}

export interface ToastProps {
    readonly color?: string | undefined;
    readonly accent?: string | undefined;
    readonly style?: CSSProperties | undefined;
    readonly children?: ReactNode | undefined;
}

/**
 * Fixed-position notification element. This component is purely presentational; in actual usage,
 * it should be wrapped in a manager to handle logic for conditional display.
 */
export const Toast: FunctionComponent<ToastProps>;

export interface TooltipProps {
    readonly contents: ReactElement;
    readonly persistent?: boolean | undefined;
    readonly width?: number | string | undefined;
    readonly offset?: number | undefined;
    readonly top?: boolean | undefined;
    readonly bottom?: boolean | undefined;
    readonly style?: CSSProperties | undefined;
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
            readonly regular?: string | undefined;
            readonly bold?: string | undefined;
        } | undefined;
        readonly secondary?: {
            readonly regular?: string | undefined;
            readonly bold?: string | undefined;
        } | undefined;
    } | undefined;
    readonly colorOpts?: {
        readonly primary?: string | undefined;
        readonly primaryLight?: string | undefined;
        readonly primaryDark?: string | undefined;
    } | undefined;
    readonly children: ReactNode;
}

/**
 * Component that declaratively wraps logic for idempotently bootstrapping the library. Client code
 * can be contained within the children of this component at the highest level of the application.
 */
export class Elemental extends Component<ElementalProps> {}

export interface FontOpts {
    primary?: {
        regular?: string | undefined;
        bold?: string | undefined;
    } | undefined;
    secondary?: {
        regular?: string | undefined;
        bold?: string | undefined;
    } | undefined;
}

export interface ColorOpts {
    primary?: string | undefined;
    primaryLight?: string | undefined;
    primaryDark?: string | undefined;
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
