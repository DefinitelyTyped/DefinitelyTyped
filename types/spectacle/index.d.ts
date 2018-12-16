// Type definitions for Spectacle 5.2.2
// Project: https://github.com/FormidableLabs/spectacle
// Definitions by: Zachary Maybury <https://github.com/zmaybury>
//                 Kylie Stewart <https://github.com/kale-stew>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="react"/>

declare module "spectacle" {
    import * as React from "react";
    import * as CSS from "csstype";
    /**
     * Alignment Types for Spectacle
     */
    type alignType =
        | "flex-start flex-start"
        | "flex-start center"
        | "flex-start flex-end"
        | "center flex-start"
        | "center center"
        | "center flex-end"
        | "flex-end flex-start"
        | "flex-end center"
        | "flex-end flex-end";

    /**
     * Animation Types for Spectacle
     */
    type easeType =
        | "back"
        | "backIn"
        | "backOut"
        | "backInOut"
        | "bounce"
        | "bounceIn"
        | "bounceOut"
        | "bounceInOut"
        | "circle"
        | "circleIn"
        | "circleOut"
        | "circleInOut"
        | "linear"
        | "linearIn"
        | "linearOut"
        | "linearInOut"
        | "cubic"
        | "cubicIn"
        | "cubicOut"
        | "cubicInOut"
        | "elastic"
        | "elasticIn"
        | "elasticOut"
        | "elasticInOut"
        | "exp"
        | "expIn"
        | "expOut"
        | "expInOut"
        | "poly"
        | "polyIn"
        | "polyOut"
        | "polyInOut"
        | "quad"
        | "quadIn"
        | "quadOut"
        | "quadInOut"
        | "sin"
        | "sinIn"
        | "sinOut"
        | "sinInOut";

    /**
     * Progress Types for Spectacle
     */
    type progressType = "pacman" | "bar" | "number" | "none";

    /**
     * S Types for StyledS in Spectacle
     */
    type sType = "italic" | "bold" | "line-through" | "underline";

    /**
     * Target Types for links
     */
    type targetType = "_blank" | "_self" | "_parent" | "_top";

    /**
     * Theme Types for CodePane in Spectacle
     */
    type themeType = "dark" | "light" | "external";

    /**
     * Transition Types for Spectacle
     */
    type transitionType = "slide" | "zoom" | "fade" | "spin";

    /**
     * All available DOM style properties and their types
     * https://www.npmjs.com/package/csstype
     */
    export interface CSSProperties extends CSS.Properties<string | number> {}

    export interface AnimProps {
        easing: easeType;
        fromStyle: CSSProperties | CSSProperties[];
        onAnim?: (forwards?: boolean, animIndex?: number) => void;
        order?: number;
        route?: object;
        style?: CSSProperties;
        toStyle: CSSProperties | CSSProperties[];
        transitionDuration: number;
    }

    export interface AppearProps {
        easing?: easeType;
        endValue?: object;
        fid?: string;
        order?: number;
        startValue?: object;
        style?: BaseProps["style"];
        transitionDuration?: number;
    }

    /**
     * Base props for many Spectacle components
     */
    export interface BaseProps {
        bgColor?: string;
        bgDarken?: number;
        bgImage?: string;
        bold?: boolean;
        caps?: boolean;
        className?: string;
        italic?: boolean;
        margin?: number | string;
        padding?: number | string;
        style?: CSSProperties;
        textAlign?: string;
        textColor?: string;
        textFont?: string;
        textSize?: string;
    }
    export interface CodePaneProps {
        className?: BaseProps["className"];
        contentEditable?: boolean;
        lang?: string;
        source?: string;
        style?: BaseProps["style"];
        theme?: themeType;
    }

    export interface ComponentPlaygroundProps {
        code?: string;
        previewBackgroundColor?: string;
        scope?: object;
        theme?: themeType;
        transformCode?: (code: string) => string;
    }

    export interface DeckProps {
        autoplay?: boolean;
        autoplayDuration?: number;
        autoplayLoop?: boolean;
        controls?: boolean;
        globalStyles?: boolean;
        history?: any; // Needs a type, see https://github.com/ReactTraining/history
        progress?: progressType;
        theme?: Theme;
        transition?: transitionType[];
        transitionDuration?: number;
    }

    export interface FillProps {
        className?: string;
        style?: CSSProperties;
    }

    export interface FitProps extends FillProps {}

    export interface GoToActionProps {
        margin?: BaseProps["margin"];
        padding?: BaseProps["padding"];
        render?: (goToSlide?: (slide: number | string) => void) => void;
        slide?: number | string;
        style?: BaseProps["style"];
    }

    export interface HeadingProps extends BaseProps {
        fit?: boolean;
        lineHeight?: number;
        size?: number;
    }

    export interface ImageProps {
        alt?: string;
        className?: BaseProps["className"];
        display?: string;
        height?: number | string;
        margin?: BaseProps["margin"];
        padding?: BaseProps["padding"];
        src?: string;
        width?: number | string;
    }

    export interface LayoutProps {
        style?: CSSProperties;
    }

    export interface LinkProps extends BaseProps {
        href?: string;
        target?: targetType;
    }

    export interface MarkdownProps {
        mdastConfig?: { [key: string]: number | string };
        source?: string;
    }

    export interface SlideProps extends BaseProps {
        align?: alignType;
        contentStyles?: CSSProperties;
        controlColor?: string;
        dispatch?: () => void;
        hash?: number | string;
        progressColor?: string;
        history?: any; // Needs a type, see https://github.com/ReactTraining/history
        id?: string;
        lastSlideIndex?: number;
        notes?: string;
        onActive?: (slideIndex: string | number) => void;
        slideIndex?: number;
        transition?: transitionType[];
        transitionDuration?: number;
        transitionIn?: transitionType[];
        transitionOut?: transitionType[];
    }

    export interface SProps extends BaseProps {
        type?: sType | sType[];
    }

    export interface TextProps extends BaseProps {
        fit?: boolean;
        lineHeight?: number;
    }

    export type Theme = { [key: string]: number | string };

    export class Anim extends React.Component<AnimProps> {}

    export class Appear extends React.Component<AppearProps> {}

    export class BlockQuote extends React.Component<BaseProps> {}

    export class Cite extends React.Component<BaseProps> {}

    export class Code extends React.Component<BaseProps> {}

    export class CodePane extends React.Component<CodePaneProps> {}

    export class ComponentPlayground extends React.Component<
        ComponentPlaygroundProps
    > {}

    export class Deck extends React.Component<DeckProps> {}

    export class Fill extends React.Component<FillProps> {}

    export class Fit extends React.Component<FitProps> {}

    export class GoToAction extends React.Component<GoToActionProps> {}

    export class Heading extends React.Component<HeadingProps> {}

    export class Image extends React.Component<ImageProps> {}

    export class Layout extends React.Component<LayoutProps> {}

    export class Link extends React.Component<LinkProps> {}

    export class List extends React.Component<BaseProps> {}

    export class ListItem extends React.Component<BaseProps> {}

    export class Markdown extends React.Component<MarkdownProps> {}

    export class Notes extends React.Component<BaseProps> {}

    export class Quote extends React.Component<BaseProps> {}

    export class S extends React.Component<SProps> {}

    export class Slide extends React.Component<SlideProps> {}

    export class SlideSet extends React.Component<BaseProps> {}

    export class Table extends React.Component<BaseProps> {}

    export class TableBody extends React.Component<BaseProps> {}

    export class TableHeader extends React.Component<BaseProps> {}

    export class TableHeaderItem extends React.Component<BaseProps> {}

    export class TableItem extends React.Component<BaseProps> {}

    export class TableRow extends React.Component<BaseProps> {}

    export class Text extends React.Component<TextProps> {}
}

declare module "spectacle/lib/utils/preloader" {
    const preloader: (obj: object) => void;
    export default preloader;
}

declare module "spectacle/lib/themes/default" {
    import { Theme } from "spectacle";
    const createTheme: (...args: object[]) => Theme;
    export default createTheme;
}
