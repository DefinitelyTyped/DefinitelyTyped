interface DomHelpersAnimationArgs {
    element: Element;
    properties: { [key: string]: any };
    duration?: number;
    easing?: boolean;
    callback?: () => void;
}

/**
 * Programmatically start css transitions
 */
declare function _animate(args: DomHelpersAnimationArgs): { cancel: () => void };
declare function _animate(
    element: Element,
    properties: { [key: string]: any },
    duration?: number,
    easing?: boolean,
    callback?: () => void
): { cancel: () => void };

declare const animate: typeof _animate;

export = animate;
