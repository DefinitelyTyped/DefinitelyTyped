// Type definitions for css-to-react-native 3.0
// Project: https://github.com/styled-components/css-to-react-native
// Definitions by: Luiz F. Jacção <https://github.com/jaccao>, Jacob Parker <https://github.com/jacobp100>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type StyleTuple = [string, string];

export interface Style {
    [key: string]: string | number | Style;
}

export function getPropertyName(name: string): string;

export function getStylesForProperty(name: string, value: string, allowShorthand?: boolean): Style;

export default function transform(styleTuples: StyleTuple[], shorthandBlacklist?: string[]): Style;
