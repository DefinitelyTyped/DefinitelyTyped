/* eslint-disable @definitelytyped/no-declare-current-package */
// eslint-disable-next-line @definitelytyped/no-single-declare-module
declare module "@humblebee/styled-components-breakpoint" {
    import { CSSObject, SimpleInterpolation } from "styled-components";

    type Rule = "up" | "down" | "only";
    interface Breakpoints {
        [key: string]: number;
    }

    // export const mediaWidthRule: (rule: Rule)
    //     => string;
    // export const ruleTemplate: (rule: string, width: number)
    //     => string;
    // export const mediaTemplate: (rules: string)
    //     => string;
    // export const getSmallestMedia: (breakpoints: Breakpoints)
    //     => number;
    // export const getNextMedia: (breakpoints: Breakpoints, width: number)
    //     => number;
    // export const mediaRules: (breakpoints: Breakpoints, widthKey: string, rule: Rule, boundKey: string)
    //     => string;
    // export const getMixin: (breakpoints: Breakpoints, key: string, rule?: Rule) => (bound?: string | undefined)
    //     => (first: TemplateStringsArray | CSSObject, ...interpolations: SimpleInterpolation[])
    //     => import("styled-components").FlattenSimpleInterpolation;
    // export const getMediaShorthands: (breakpoints: Breakpoints, rule: Rule)
    //     => {};

    // eslint-disable-next-line @definitelytyped/prefer-declare-function
    export const getMedia: (breakpoints: Breakpoints) => {
        /**
         * Will return a media query with a min-width of the defined breakpoint
         * @example "@media only screen and (min-width: ____px)"
         * @param widthKey min width
         */
        up: (
            widthKey: string,
        ) => (
            first: TemplateStringsArray | CSSObject,
            ...interpolations: SimpleInterpolation[]
        ) => import("styled-components").FlattenSimpleInterpolation;
        /**
         * Will return a media query with a max-width of the defined breakpoint
         * @example "@media only screen and (max-width: ____px)"
         * @param widthKey max width
         */
        down: (
            widthKey: string,
        ) => (
            first: TemplateStringsArray | CSSObject,
            ...interpolations: SimpleInterpolation[]
        ) => import("styled-components").FlattenSimpleInterpolation;

        /**
         * For one parameter:
         * Will return a range media query between "widthKey" and the next upper breakpoint
         * @example "@media only screen and (min-width: ____px) and (max-width: _next_upper_px)"
         *
         * For two parameters:
         * Will return a range media query between "widthKey" and "boundKey"
         * @example "@media only screen and (min-width: ____px) and (max-width: _next_upper_px)"
         *
         * @param widthKey min width
         * @param boundKey max width, optional (if missing, next higher than min width)
         */
        only: (
            widthKey: string,
            boundKey?: string,
        ) => (
            first: TemplateStringsArray | CSSObject,
            ...interpolations: SimpleInterpolation[]
        ) => import("styled-components").FlattenSimpleInterpolation;

        list: string[];
    };

    export default getMedia;
}
