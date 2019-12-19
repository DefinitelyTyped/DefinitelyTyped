// Type definitions for styled-theming 2.2
// Project: https://github.com/styled-components/styled-theming#readme
// Definitions by: Arjan Jassal <https://github.com/ArjanJ>
//                 Hieu Ho <https://github.com/hieuhlc>
//                 David Daniell <https://github.com/tinynumbers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import { FlattenInterpolation, ThemeProps, ThemedStyledProps } from "styled-components";

declare function theme(name: string, values: theme.ThemeMap): theme.ThemeSet;

declare namespace theme {
    type ThemeValueResult =
        string
        | FlattenInterpolation<ThemeProps<any>>
        | FlattenInterpolation<ThemedStyledProps<any, any>>;
    type ThemeValueFn = (props: object) => ThemeValueResult;
    type ThemeValue = ThemeValueFn | ThemeValueResult;

    interface ThemeMap {
        [key: string]: ThemeValue;
    }

    interface VariantMap {
        [key: string]: ThemeMap;
    }

    type ThemeSet = (props: object) => string;
    type VariantSet = (props: object) => string;

    function variants(
        name: string,
        prop: string,
        values: VariantMap
    ): VariantSet;
}

export = theme;
