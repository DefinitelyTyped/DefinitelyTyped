import {
    rem,
    em,
    px,
    breakpoint,
    breakpoints,
    breakpointDown,
    breakpointUp,
    baseFontSize
} from "@carbon/layout";

const firstBreakpoint = Object.keys(breakpoints)[0];

rem(baseFontSize); // $ExpectType string
em(baseFontSize); // $ExpectType string
px(baseFontSize); // $ExpectType string

breakpoint(firstBreakpoint); // $ExpectType string
breakpointUp(firstBreakpoint); // $ExpectType string
breakpointDown(firstBreakpoint); // $ExpectType string
