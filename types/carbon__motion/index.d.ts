export const easings: {
    entrance: {
        expressive: string;
        productive: string;
    };
    exit: {
        expressive: string;
        productive: string;
    };
    standard: {
        expressive: string;
        productive: string;
    };
};

export function motion(name: string, mode: string): string;

export namespace motion {
    const prototype: {};
}
