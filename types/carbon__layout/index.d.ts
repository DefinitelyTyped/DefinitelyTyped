export const baseFontSize: number;

export const breakpoints: {
    lg: {
        columns: number;
        margin: string;
        width: string;
    };
    max: {
        columns: number;
        margin: string;
        width: string;
    };
    md: {
        columns: number;
        margin: string;
        width: string;
    };
    sm: {
        columns: number;
        margin: string;
        width: string;
    };
    xlg: {
        columns: number;
        margin: string;
        width: string;
    };
};

export const miniUnit: number;

export const spacing: number[];

export function breakpoint(...args: any[]): string;

export function breakpointDown(name: string): string;

export function breakpointUp(name: string): string;

export function em(px: number): string;

export function miniUnits(count: number): string;

export function px(value: number): string;

export function rem(px: number): string;

export namespace breakpoint {
    const prototype: {};
}

export namespace breakpointDown {
    const prototype: {};
}

export namespace breakpointUp {
    const prototype: {};
}

export namespace em {
    const prototype: {};
}

export namespace miniUnits {
    const prototype: {};
}

export namespace px {
    const prototype: {};
}

export namespace rem {
    const prototype: {};
}
