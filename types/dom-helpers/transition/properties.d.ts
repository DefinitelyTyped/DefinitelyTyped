declare const _default: {
    transform: string;
    end: string;
    property: string;
    timing: string;
    delay: string;
    duration: string;
};

declare const _export: {
    transform: string;
    transitionProperty: string;
    transitionTiming: string;
    transitionDelay: string;
    transitionDuration: string;
    transitionEnd: string;
    animationName: string;
    animationDuration: string;
    animationTiming: string;
    animationDelay: string;
    animationEnd: string;

    default: typeof _default,
};

export = _export;
