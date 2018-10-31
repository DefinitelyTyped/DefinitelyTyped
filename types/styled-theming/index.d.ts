// Type definitions for styled-theming 2.2
// Project: https://github.com/styled-components/styled-theming#readme
// Definitions by: Arjan Jassal <https://github.com/ArjanJ>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1.1

declare module "styled-theming" {
    type ThemeValueFn = (props: object) => string;
    type ThemeValue = string | ThemeValueFn;

    interface ThemeMap {
        [key: string]: ThemeValue;
    }

    interface VariantMap {
        [key: string]: ThemeMap;
    }

    type ThemeSet = (props: object) => string;
    type VariantSet = (props: object) => string;

    namespace theme {
        export function variants(
            name: string,
            prop: string,
            values: VariantMap
        ): VariantSet;
    }

    function theme(name: string, values: ThemeMap): ThemeSet;

    export = theme;
}
