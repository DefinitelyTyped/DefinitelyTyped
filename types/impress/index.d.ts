interface Impress {
    init(): void;
    getStep(step: any): any;
    goto(element: any, duration?: number): any;
    prev(): any;
    next(): any;
}

declare function impress(): Impress;
