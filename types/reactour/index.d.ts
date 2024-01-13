import * as React from "react";

// ---------------------
// Step interfaces
// ---------------------

export type ReactourStepPosition = "top" | "right" | "bottom" | "left" | "center";

export interface ReactourStepContentArgs {
    close: () => void;
    goTo: (step: number) => void;
    inDOM: boolean;
    step: number;
}

export interface ReactourStep {
    /**
     * Content of the step
     */
    content: React.ReactNode | ((args: ReactourStepContentArgs) => React.ReactNode);

    /**
     * Action that can be executed on target element of the step
     */
    action?: ((domNode: any) => void) | undefined;

    /**
     * Position of step content
     */
    position?: ReactourStepPosition | [number, number] | undefined;

    /**
     * DOM selector to find the target element
     */
    selector?: string | undefined;

    /**
     * Disable interaction for this specific step.
     * Could be enabled passing `true`
     * when `disableInteraction` prop is present in Tour
     */
    stepInteraction?: boolean | undefined;

    /**
     * Additional styles
     */
    style?: React.CSSProperties | undefined;

    /**
     * Text read to screen reader software for this step's navigation dot
     */
    navDotAriaLabel?: string | undefined;

    /**
     * Observe direct children DOM mutations of this node
     * If a child is added: the highlighted region is redrawn focused on it
     * If a child is removed: the highlighted region is redrawn focused on the step selector
     */
    observe?: string | undefined;

    /**
     * Array of selectors, each selected node will be included (by union)
     * in the highlighted region of the mask. You don't need to add the
     * step selector here as the default highlighted region is focused on it
     */
    highlightedSelectors?: string[] | undefined;

    /**
     * Array of selectors, each selected node DOM addition/removal will triggered a rerender
     * of the mask shape. Useful in combinaison with highlightedSelectors when highlighted
     * region of mask should be redrawn after a user action
     */
    mutationObservables?: string[] | undefined;

    /**
     * Array of selectors, each selected node resize will triggered a rerender of the mask shape.
     * Useful in combinaison with highlightedSelectors when highlighted region of mask should
     * be redrawn after a user action. You should also add the selector in mutationObservables
     * if you want to track DOM addition/removal too
     */
    resizeObservables?: string[] | undefined;
}

export interface ReactourAccessibilityOptions {
    // attribute to associate the dialog with a title for screen readers
    ariaLabelledBy?: string | undefined;
    // aria-label attribute for the close button
    closeButtonAriaLabel?: string | undefined;
    // Show/Hide Navigation Dots for screen reader software
    showNavigationScreenReaders?: boolean | undefined;
}

export interface CustomHelperProps {
    current: number;
    totalSteps: number;
    gotoStep: (step: number) => void;
    close: () => void;
    content: React.ReactNode | ((args: ReactourStepContentArgs) => React.ReactNode);
}

export interface ReactourProps {
    /**
     * You know…
     */
    isOpen: boolean;

    /**
     * Array of elements to highlight with special info and props
     */
    steps: ReactourStep[];

    /**
     * Function to close the _Tour_
     */
    onRequestClose: (event: React.MouseEvent<HTMLDivElement>) => void;

    /**
     * Change `--reactour-accent` _(defaults to accentColor on IE)_ css custom prop to apply color in _Helper_, number, dots, etc
     * @default #007aff
     */
    accentColor?: string | undefined;

    /**
     * Customize _Badge_ content using `current` and `total` steps values
     */
    badgeContent?: ((current: number, total: number) => React.ReactNode) | undefined;

    /**
     * Content to be rendered inside the _Helper_
     */
    children?: React.ReactNode | undefined;

    /**
     * Custom class name to add to the _Helper_
     */
    className?: string | undefined;

    /**
     * Close the _Tour_ by clicking the _Mask_
     * @default true
     */
    closeWithMask?: boolean | undefined;

    /**
     * Disable interactivity with _Dots_ navigation in _Helper_
     */
    disableDotsNavigation?: boolean | undefined;

    /**
     * Disable the ability to click or intercat in any way with the _Highlighted_ element
     */
    disableInteraction?: boolean | undefined;

    /**
     * Disable all keyboard navigation (next and prev step) when true, disable only selected keys when array
     */
    disableKeyboardNavigation?: boolean | Array<"esc" | "right" | "left"> | undefined;

    /**
     * Function triggered each time current step change
     */
    getCurrentStep?: ((currentStep: number) => void) | undefined;

    /**
     * Programmatically change current step after the first render, when the value changes
     */
    goToStep?: number | undefined;

    /**
     * Custom class name to add to the element which is the overlay for the target element when `disableInteraction`
     */
    highlightedMaskClassName?: string | undefined;

    /**
     * Tolerance in pixels to add when calculating if an element is outside viewport to scroll into view
     */
    inViewThreshold?: number | undefined;

    /**
     * Change Next button in last step into a custom button to close the Tour
     */
    lastStepNextButton?: React.ReactNode | undefined;

    /**
     * Custom class name to add to the _Mask_
     */
    maskClassName?: string | undefined;

    /**
     * Extra Space between in pixels between _Highlighted_ element and _Mask_
     */
    maskSpace?: number | undefined;

    /**
     * Renders as next button navigation
     */
    nextButton?: React.ReactNode | undefined;

    /**
     * Overrides default `nextStep` internal function
     */
    nextStep?: (() => void) | undefined;

    /**
     * Do something after _Tour_ is opened
     */
    onAfterOpen?: ((target: HTMLDivElement) => void) | undefined;

    /**
     * Do something before _Tour_ is closed
     */
    onBeforeClose?: ((target: HTMLDivElement) => void) | undefined;

    /**
     * Renders as prev button navigation
     */
    prevButton?: React.ReactNode | undefined;

    /**
     * Overrides default `prevStep` internal function
     */
    prevStep?: (() => void) | undefined;

    /**
     * Beautify _Helper_ and _Mask_ with `border-radius` (in px)
     * @default 0
     */
    rounded?: number | undefined;

    /**
     * Smooth scroll duration when positioning the target element (in ms)
     * @default 1
     */
    scrollDuration?: number | undefined;

    /**
     * Offset when positioning the target element after scroll to it, by default it's a calculation to the center of the viewport
     */
    scrollOffset?: number | undefined;

    /**
     * Show/Hide _Helper_ Navigation buttons
     * @default true
     */
    showButtons?: boolean | undefined;

    /**
     * Show/Hide _Helper_ Close button
     * @default true
     */
    showCloseButton?: boolean | undefined;

    /**
     * Show/Hide _Helper_ Navigation Dots
     * @default true
     */
    showNavigation?: boolean | undefined;

    /**
     * Show/Hide number when hovers on each Navigation Dot
     * @default true
     */
    showNavigationNumber?: boolean | undefined;

    /**
     * Show/Hide _Helper_ Number Badge
     * @default true
     */
    showNumber?: boolean | undefined;

    /**
     * Starting step when _Tour_ is open the first time
     */
    startAt?: number | undefined;

    /**
     * Value to listen if a forced update is needed
     */
    update?: string | undefined;

    /**
     * Delay time when forcing update. Useful when there are known animation/transitions
     * @default 1
     */
    updateDelay?: number | undefined;

    /**
     * Disable FocusLock component
     * @default false
     */
    disableFocusLock?: boolean | undefined;

    /**
     * Configure accessibility related accessibility options
     */
    accessibilityOptions?: ReactourAccessibilityOptions | undefined;

    /**
     * CustomHelper component
     */
    CustomHelper?: (({ ...props }: CustomHelperProps) => React.ReactElement) | undefined;
}

export interface ReactourState {
    isOpen: boolean;
    current: number;
    top: number;
    right: number;
    bottom: number;
    left: number;
    width: number;
    height: number;
    w: number;
    h: number;
    inDOM: boolean;
    observer: MutationObserver | null;
    focusUnlocked: boolean;
    helperWidth?: number | undefined;
    helperHeight?: number | undefined;
    helperPosition?: ReactourStepPosition | undefined;
}

declare class Tour extends React.Component<ReactourProps, ReactourState> {}
export default Tour;

// Components below are all styled components
// Arrow and Close are styled SVG components
// and the rest are simply made with `styled[htmlTagName]`

export interface ArrowProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    className?: string | undefined;
    disabled?: boolean | undefined;
    inverted?: boolean | undefined;
    label?: React.ReactNode | undefined;
}
export function Arrow(props: ArrowProps): React.ReactElement;

export interface BadgeProps extends React.ComponentPropsWithRef<"span"> {
    accentColor?: string | undefined;
}
export const Badge: React.FC<BadgeProps>;

export interface CloseProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    className?: string | undefined;
}
export function Close(props: CloseProps): React.ReactElement;

export interface ControlsProps extends React.ComponentPropsWithRef<"div"> {}
export const Controls: React.FC<ControlsProps>;

export interface DotProps extends React.ComponentPropsWithRef<"button"> {
    disabled?: boolean | undefined;
    current?: number | undefined;
    index?: number | undefined;
    showNumber?: boolean | undefined;
    accentColor?: string | undefined;
}
export const Dot: React.FC<DotProps>;

export type NavigationProps = React.ComponentPropsWithRef<"nav">;
export const Navigation: React.FC<NavigationProps>;
