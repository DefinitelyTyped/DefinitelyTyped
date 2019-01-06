// Type definitions for feather-icons 4.7
// Project: https://github.com/feathericons/feather#readme
// Definitions by: Jinesh Shah <https://github.com/jineshshah36>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace feather;

export interface FeatherAttributes {
    [key: string]: string | number;
}

export function replace(options?: FeatherAttributes): void;

export const icons: {
    [key: string]: {
        name: string;
        contents: string;
        tags: string[];
        attrs: FeatherAttributes;
        toSvg: (options?: FeatherAttributes) => string;
    };
};
