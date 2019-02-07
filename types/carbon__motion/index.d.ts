// Type definitions for carbon__motion-ts 0.0
// Project: https://github.com/baz/foo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
