// Type definitions for @xstyled/styled-components 1.19
// Project: https://github.com/smooth-code/xstyled
// Definitions by: Joseph Thomas <https://github.com/good-idea>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import * as React from 'react';
import _styled, {
    StyledComponent,
    ThemedStyledFunction,
    DefaultTheme,
    FlattenSimpleInterpolation,
} from 'styled-components';
import { SystemProps } from '@xstyled/system';

/**
 * @see {@link https://github.com/smooth-code/xstyled/blob/v1.19.1/packages/styled-components/src/index.js#L1-L16}
 */
export * from 'styled-components';

/**
 * @see {@link https://github.com/smooth-code/xstyled/blob/v1.19.1/packages/styled-components/src/index.js#L20}
 */
export * from '@xstyled/system';

/**
 * @see {@link https://github.com/smooth-code/xstyled/blob/v1.19.1/packages/styled-components/src/colorModes.js#L11}
 */
export interface ColorModeProviderProps {
    children?: React.ReactNode | undefined;
    target?: HTMLElement | undefined;
    targetSelector?: string | undefined;
}

export class ColorModeProvider extends React.Component<ColorModeProviderProps> {}

/**
 * @see {@link https://github.com/smooth-code/xstyled/blob/v1.19.1/packages/styled-components/src/colorModes.js#L18}
 */
export function useColorMode(): [string, (colorMode: string) => void];

/**
 * @see {@link https://github.com/smooth-code/xstyled/blob/v1.19.1/packages/styled-components/src/colorModes.js#L19}
 */
export function getColorModeInitScriptElement(options?: { target: string }): React.ReactElement;

/**
 * @see {@link https://github.com/smooth-code/xstyled/blob/v1.19.1/packages/styled-components/src/colorModes.js#L20}
 */
export function getColorModeInitScriptTag(options?: { target: string }): string;

/**
 * `@xstyled/system`-provided default breakpoints
 *
 * https://xstyled.dev/docs/responsive/#default-breakpoints
 * https://github.com/smooth-code/xstyled/blob/master/packages/system/src/media.js#L4-L10
 *
 * see bellow tips if you customize breakpoints
 *
 * ```ts
 * declare module '@xstyled/styled-components' {
 *   interface DefaultBreakpoints {
 *     thin: any;
 *     fat: any;
 *   }
 * }
 *
 * declare module 'styled-components' {
 *   interface DefaultTheme {
 *       breakpoints?: DefaultBreakpoints
 *   }
 * }
 * ```
 */

export interface DefaultBreakpoints {
    xs: any;
    sm: any;
    md: any;
    lg: any;
    xl: any;
}

type BreakpointName = keyof DefaultBreakpoints;

type BreakpointObject<ArgType> = {
    [Key in BreakpointName]?: ArgType;
};

/* Augments a type to be Type | BreakpointObject<Type>,
 * in other words, allow a property to be `1` or `{ xs: 1, sm: 2 }`
 */
type WithBreakpointArgs<Props> = {
    [Key in keyof Props]?: Props[Key] | BreakpointObject<Props[Key]>;
};

/**
 * @see {@link https://github.com/smooth-code/xstyled/blob/v1.19.1/packages/styled-components/src/breakpoints.js#L11}
 */
export function useBreakpoints(): DefaultBreakpoints;

/**
 * @see {@link https://github.com/smooth-code/xstyled/blob/v1.19.1/packages/styled-components/src/breakpoints.js#L9}
 */
export function useViewportWidth(): number | string;

/**
 * @see {@link https://github.com/smooth-code/xstyled/blob/v1.19.1/packages/styled-components/src/breakpoints.js#L15}
 */
export function useBreakpoint(): BreakpointName;

/**
 * @see {@link https://github.com/smooth-code/xstyled/blob/v1.19.1/packages/styled-components/src/breakpoints.js#L19}
 */
export function useUp(_bereakpointName: BreakpointName): boolean;

/**
 * @see {@link https://github.com/smooth-code/xstyled/blob/v1.19.1/packages/styled-components/src/breakpoints.js#L23}
 */
export function useDown(_bereakpointName: BreakpointName): boolean;

export type BoxProps = WithBreakpointArgs<SystemProps>;

// TODO: If styled-components default tags are overridden,
// these will work
// const styled: {
//   [Key in keyof JSX.IntrinsicElements]: ThemedStyledFunction<
//     Key,
//     DefaultTheme,
//     BoxProps
//   >
// }

/**
 * @see {@link https://github.com/smooth-code/xstyled/blob/v1.19.1/packages/styled-components/src/styled.js#L27}
 */
export const Box: StyledComponent<'div', DefaultTheme, BoxProps>;

export function breakpoints(styles: BreakpointObject<FlattenSimpleInterpolation | string>): TemplateStringsArray;

/**
 * Support for xxBoxes, i.e. aBox, articleBox
 * List of dom elements from Styled Components:
 * https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/domElements.js
 *
 * @see {@link https://github.com/smooth-code/xstyled/blob/v1.19.1/packages/styled-components/src/styled.js#L31-L36}
 */

declare const styled: typeof _styled & {
    aBox: ThemedStyledFunction<'a', DefaultTheme, BoxProps>;
    abbrBox: ThemedStyledFunction<'abbr', DefaultTheme, BoxProps>;
    addressBox: ThemedStyledFunction<'address', DefaultTheme, BoxProps>;
    areaBox: ThemedStyledFunction<'area', DefaultTheme, BoxProps>;
    articleBox: ThemedStyledFunction<'article', DefaultTheme, BoxProps>;
    asideBox: ThemedStyledFunction<'aside', DefaultTheme, BoxProps>;
    audioBox: ThemedStyledFunction<'audio', DefaultTheme, BoxProps>;
    bBox: ThemedStyledFunction<'b', DefaultTheme, BoxProps>;
    baseBox: ThemedStyledFunction<'base', DefaultTheme, BoxProps>;
    bdiBox: ThemedStyledFunction<'bdi', DefaultTheme, BoxProps>;
    bdoBox: ThemedStyledFunction<'bdo', DefaultTheme, BoxProps>;
    bigBox: ThemedStyledFunction<'big', DefaultTheme, BoxProps>;
    blockquoteBox: ThemedStyledFunction<'blockquote', DefaultTheme, BoxProps>;
    bodyBox: ThemedStyledFunction<'body', DefaultTheme, BoxProps>;
    brBox: ThemedStyledFunction<'br', DefaultTheme, BoxProps>;
    buttonBox: ThemedStyledFunction<'button', DefaultTheme, BoxProps>;
    canvasBox: ThemedStyledFunction<'canvas', DefaultTheme, BoxProps>;
    captionBox: ThemedStyledFunction<'caption', DefaultTheme, BoxProps>;
    citeBox: ThemedStyledFunction<'cite', DefaultTheme, BoxProps>;
    codeBox: ThemedStyledFunction<'code', DefaultTheme, BoxProps>;
    colBox: ThemedStyledFunction<'col', DefaultTheme, BoxProps>;
    colgroupBox: ThemedStyledFunction<'colgroup', DefaultTheme, BoxProps>;
    dataBox: ThemedStyledFunction<'data', DefaultTheme, BoxProps>;
    datalistBox: ThemedStyledFunction<'datalist', DefaultTheme, BoxProps>;
    ddBox: ThemedStyledFunction<'dd', DefaultTheme, BoxProps>;
    delBox: ThemedStyledFunction<'del', DefaultTheme, BoxProps>;
    detailsBox: ThemedStyledFunction<'details', DefaultTheme, BoxProps>;
    dfnBox: ThemedStyledFunction<'dfn', DefaultTheme, BoxProps>;
    dialogBox: ThemedStyledFunction<'dialog', DefaultTheme, BoxProps>;
    divBox: ThemedStyledFunction<'div', DefaultTheme, BoxProps>;
    dlBox: ThemedStyledFunction<'dl', DefaultTheme, BoxProps>;
    dtBox: ThemedStyledFunction<'dt', DefaultTheme, BoxProps>;
    emBox: ThemedStyledFunction<'em', DefaultTheme, BoxProps>;
    embedBox: ThemedStyledFunction<'embed', DefaultTheme, BoxProps>;
    fieldsetBox: ThemedStyledFunction<'fieldset', DefaultTheme, BoxProps>;
    figcaptionBox: ThemedStyledFunction<'figcaption', DefaultTheme, BoxProps>;
    figureBox: ThemedStyledFunction<'figure', DefaultTheme, BoxProps>;
    footerBox: ThemedStyledFunction<'footer', DefaultTheme, BoxProps>;
    formBox: ThemedStyledFunction<'form', DefaultTheme, BoxProps>;
    h1Box: ThemedStyledFunction<'h1', DefaultTheme, BoxProps>;
    h2Box: ThemedStyledFunction<'h2', DefaultTheme, BoxProps>;
    h3Box: ThemedStyledFunction<'h3', DefaultTheme, BoxProps>;
    h4Box: ThemedStyledFunction<'h4', DefaultTheme, BoxProps>;
    h5Box: ThemedStyledFunction<'h5', DefaultTheme, BoxProps>;
    h6Box: ThemedStyledFunction<'h6', DefaultTheme, BoxProps>;
    headBox: ThemedStyledFunction<'head', DefaultTheme, BoxProps>;
    headerBox: ThemedStyledFunction<'header', DefaultTheme, BoxProps>;
    hgroupBox: ThemedStyledFunction<'hgroup', DefaultTheme, BoxProps>;
    hrBox: ThemedStyledFunction<'hr', DefaultTheme, BoxProps>;
    htmlBox: ThemedStyledFunction<'html', DefaultTheme, BoxProps>;
    iBox: ThemedStyledFunction<'i', DefaultTheme, BoxProps>;
    iframeBox: ThemedStyledFunction<'iframe', DefaultTheme, BoxProps>;
    imgBox: ThemedStyledFunction<'img', DefaultTheme, BoxProps>;
    inputBox: ThemedStyledFunction<'input', DefaultTheme, BoxProps>;
    insBox: ThemedStyledFunction<'ins', DefaultTheme, BoxProps>;
    kbdBox: ThemedStyledFunction<'kbd', DefaultTheme, BoxProps>;
    keygenBox: ThemedStyledFunction<'keygen', DefaultTheme, BoxProps>;
    labelBox: ThemedStyledFunction<'label', DefaultTheme, BoxProps>;
    legendBox: ThemedStyledFunction<'legend', DefaultTheme, BoxProps>;
    liBox: ThemedStyledFunction<'li', DefaultTheme, BoxProps>;
    linkBox: ThemedStyledFunction<'link', DefaultTheme, BoxProps>;
    mainBox: ThemedStyledFunction<'main', DefaultTheme, BoxProps>;
    mapBox: ThemedStyledFunction<'map', DefaultTheme, BoxProps>;
    markBox: ThemedStyledFunction<'mark', DefaultTheme, BoxProps>;

    /* This one breaks, it looks like marquee is not supported in JSX.IntrinsicElements */
    // marqueeBox: ThemedStyledFunction<'marquee', DefaultTheme, BoxProps>

    menuBox: ThemedStyledFunction<'menu', DefaultTheme, BoxProps>;
    menuitemBox: ThemedStyledFunction<'menuitem', DefaultTheme, BoxProps>;
    metaBox: ThemedStyledFunction<'meta', DefaultTheme, BoxProps>;
    meterBox: ThemedStyledFunction<'meter', DefaultTheme, BoxProps>;
    navBox: ThemedStyledFunction<'nav', DefaultTheme, BoxProps>;
    noscriptBox: ThemedStyledFunction<'noscript', DefaultTheme, BoxProps>;
    objectBox: ThemedStyledFunction<'object', DefaultTheme, BoxProps>;
    olBox: ThemedStyledFunction<'ol', DefaultTheme, BoxProps>;
    optgroupBox: ThemedStyledFunction<'optgroup', DefaultTheme, BoxProps>;
    optionBox: ThemedStyledFunction<'option', DefaultTheme, BoxProps>;
    outputBox: ThemedStyledFunction<'output', DefaultTheme, BoxProps>;
    pBox: ThemedStyledFunction<'p', DefaultTheme, BoxProps>;
    paramBox: ThemedStyledFunction<'param', DefaultTheme, BoxProps>;
    pictureBox: ThemedStyledFunction<'picture', DefaultTheme, BoxProps>;
    preBox: ThemedStyledFunction<'pre', DefaultTheme, BoxProps>;
    progressBox: ThemedStyledFunction<'progress', DefaultTheme, BoxProps>;
    qBox: ThemedStyledFunction<'q', DefaultTheme, BoxProps>;
    rpBox: ThemedStyledFunction<'rp', DefaultTheme, BoxProps>;
    rtBox: ThemedStyledFunction<'rt', DefaultTheme, BoxProps>;
    rubyBox: ThemedStyledFunction<'ruby', DefaultTheme, BoxProps>;
    sBox: ThemedStyledFunction<'s', DefaultTheme, BoxProps>;
    sampBox: ThemedStyledFunction<'samp', DefaultTheme, BoxProps>;
    scriptBox: ThemedStyledFunction<'script', DefaultTheme, BoxProps>;
    sectionBox: ThemedStyledFunction<'section', DefaultTheme, BoxProps>;
    selectBox: ThemedStyledFunction<'select', DefaultTheme, BoxProps>;
    smallBox: ThemedStyledFunction<'small', DefaultTheme, BoxProps>;
    sourceBox: ThemedStyledFunction<'source', DefaultTheme, BoxProps>;
    spanBox: ThemedStyledFunction<'span', DefaultTheme, BoxProps>;
    strongBox: ThemedStyledFunction<'strong', DefaultTheme, BoxProps>;
    styleBox: ThemedStyledFunction<'style', DefaultTheme, BoxProps>;
    subBox: ThemedStyledFunction<'sub', DefaultTheme, BoxProps>;
    summaryBox: ThemedStyledFunction<'summary', DefaultTheme, BoxProps>;
    supBox: ThemedStyledFunction<'sup', DefaultTheme, BoxProps>;
    tableBox: ThemedStyledFunction<'table', DefaultTheme, BoxProps>;
    tbodyBox: ThemedStyledFunction<'tbody', DefaultTheme, BoxProps>;
    tdBox: ThemedStyledFunction<'td', DefaultTheme, BoxProps>;
    textareaBox: ThemedStyledFunction<'textarea', DefaultTheme, BoxProps>;
    tfootBox: ThemedStyledFunction<'tfoot', DefaultTheme, BoxProps>;
    thBox: ThemedStyledFunction<'th', DefaultTheme, BoxProps>;
    theadBox: ThemedStyledFunction<'thead', DefaultTheme, BoxProps>;
    timeBox: ThemedStyledFunction<'time', DefaultTheme, BoxProps>;
    titleBox: ThemedStyledFunction<'title', DefaultTheme, BoxProps>;
    trBox: ThemedStyledFunction<'tr', DefaultTheme, BoxProps>;
    trackBox: ThemedStyledFunction<'track', DefaultTheme, BoxProps>;
    uBox: ThemedStyledFunction<'u', DefaultTheme, BoxProps>;
    ulBox: ThemedStyledFunction<'ul', DefaultTheme, BoxProps>;
    varBox: ThemedStyledFunction<'var', DefaultTheme, BoxProps>;
    videoBox: ThemedStyledFunction<'video', DefaultTheme, BoxProps>;
    wbrBox: ThemedStyledFunction<'wbr', DefaultTheme, BoxProps>;

    // SVG
    circleBox: ThemedStyledFunction<'circle', DefaultTheme, BoxProps>;
    clipPathBox: ThemedStyledFunction<'clipPath', DefaultTheme, BoxProps>;
    defsBox: ThemedStyledFunction<'defs', DefaultTheme, BoxProps>;
    ellipseBox: ThemedStyledFunction<'ellipse', DefaultTheme, BoxProps>;
    foreignObjectBox: ThemedStyledFunction<'foreignObject', DefaultTheme, BoxProps>;
    gBox: ThemedStyledFunction<'g', DefaultTheme, BoxProps>;
    imageBox: ThemedStyledFunction<'image', DefaultTheme, BoxProps>;
    lineBox: ThemedStyledFunction<'line', DefaultTheme, BoxProps>;
    linearGradientBox: ThemedStyledFunction<'linearGradient', DefaultTheme, BoxProps>;
    markerBox: ThemedStyledFunction<'marker', DefaultTheme, BoxProps>;
    maskBox: ThemedStyledFunction<'mask', DefaultTheme, BoxProps>;
    pathBox: ThemedStyledFunction<'path', DefaultTheme, BoxProps>;
    patternBox: ThemedStyledFunction<'pattern', DefaultTheme, BoxProps>;
    polygonBox: ThemedStyledFunction<'polygon', DefaultTheme, BoxProps>;
    polylineBox: ThemedStyledFunction<'polyline', DefaultTheme, BoxProps>;
    radialGradientBox: ThemedStyledFunction<'radialGradient', DefaultTheme, BoxProps>;
    rectBox: ThemedStyledFunction<'rect', DefaultTheme, BoxProps>;
    stopBox: ThemedStyledFunction<'stop', DefaultTheme, BoxProps>;
    svgBox: ThemedStyledFunction<'svg', DefaultTheme, BoxProps>;
    textBox: ThemedStyledFunction<'text', DefaultTheme, BoxProps>;
    tspanBox: ThemedStyledFunction<'tspan', DefaultTheme, BoxProps>;
};
export default styled;
