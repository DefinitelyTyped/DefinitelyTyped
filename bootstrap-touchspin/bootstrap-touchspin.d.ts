interface BootstrapTouchSpinSettings {
    initVal?: string;
    min?: number;
    max?: number;
    step?: number;
    forcestepdivisibility?: string;
    decimals?: number;
    stepInterval?: number;
    stepintervaldelay?: number;
    verticalbuttons?: boolean;
    verticalupclass?: string;
    verticaldownclass?: string;
    prefix?: string;
    postfix?: string;
    prefix_extraclass?: string;
    postfix_extraclass?: string;
    booster?: boolean;
    boostat?: number;
    maxboostedstep?: boolean;
    mousewheel?: boolean;
    buttondown_class?: string;
    buttonup_class?: string;
}

interface JQuery {
    TouchSpin(options?: BootstrapTouchSpinSettings): JQuery;
}