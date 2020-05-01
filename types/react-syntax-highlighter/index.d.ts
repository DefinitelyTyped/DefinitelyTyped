// Type definitions for react-syntax-highlighter 12.2
// Project: https://github.com/conorhastings/react-syntax-highlighter
// Definitions by: Ivo Stratev <https://github.com/NoHomey>
//                 Aimee Gamble-Milner <https://github.com/ajgamble-milner>
//                 Guo Yunhe <https://github.com/guoyunhe>
//                 Anirban Sengupta <https://github.com/anirban09>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

type lineTagPropsFunction = (lineNumber: number) => React.HTMLProps<HTMLElement>;

interface Style {
    [selector: string]: {
        [property: string]: string;
    };
}

interface RendererParams {
    rows: any;
    stylesheet?: any;
    useInlineStyles?: boolean;
}

type Renderer = (params: RendererParams) => React.ReactNode;

declare module "react-syntax-highlighter" {
    export interface SyntaxHighlighterProps {
        language?: string;
        style?: Style;
        children?: string;
        customStyle?: React.CSSProperties;
        codeTagProps?: React.HTMLProps<HTMLElement>;
        useInlineStyles?: boolean;
        showLineNumbers?: boolean;
        showInlineLineNumbers?: boolean;
        startingLineNumber?: number;
        lineNumberContainerStyle?: React.CSSProperties;
        lineNumberStyle?: React.CSSProperties;
        wrapLines?: boolean;
        lineProps?: lineTagPropsFunction | React.HTMLProps<HTMLElement>;
        renderer?: Renderer;
        PreTag?: any;
        CodeTag?: any;

        [spread: string]: any;
    }

    export { default } from "react-syntax-highlighter/dist/esm/default-highlight";
    export {
        default as LightAsync
    } from "react-syntax-highlighter/dist/esm/light-async";
    export { default as Light } from "react-syntax-highlighter/dist/esm/light";

    export {
        default as PrismAsyncLight
    } from "react-syntax-highlighter/dist/esm/prism-async-light";
    export {
        default as PrismAsync
    } from "react-syntax-highlighter/dist/esm/prism-async";
    export {
        default as PrismLight
    } from "react-syntax-highlighter/dist/esm/prism-light";
    export { default as Prism } from "react-syntax-highlighter/dist/esm/prism";
}

// esm start
declare module "react-syntax-highlighter/dist/esm/default-highlight" {
    import * as React from "react";
    import { SyntaxHighlighterProps } from "react-syntax-highlighter";
    export default class SyntaxHighlighter extends React.Component<
        SyntaxHighlighterProps
        > { }
}

declare module "react-syntax-highlighter/dist/esm/light-async" {
    import * as React from "react";
    import { SyntaxHighlighterProps } from "react-syntax-highlighter";
    export default class SyntaxHighlighter extends React.Component<
        SyntaxHighlighterProps
        > {
        static registerLanguage(name: string, func: any): void;
    }
}

declare module "react-syntax-highlighter/dist/esm/light" {
    import * as React from "react";
    import { SyntaxHighlighterProps } from "react-syntax-highlighter";
    export default class SyntaxHighlighter extends React.Component<
        SyntaxHighlighterProps
        > {
        static registerLanguage(name: string, func: any): void;
    }
}

declare module "react-syntax-highlighter/dist/esm/prism-async-light" {
    import * as React from "react";
    import { SyntaxHighlighterProps } from "react-syntax-highlighter";
    export default class SyntaxHighlighter extends React.Component<
        SyntaxHighlighterProps
        > {
        static registerLanguage(name: string, func: any): void;
    }
}

declare module "react-syntax-highlighter/dist/esm/prism-async" {
    import * as React from "react";
    import { SyntaxHighlighterProps } from "react-syntax-highlighter";
    export default class SyntaxHighlighter extends React.Component<
        SyntaxHighlighterProps
        > { }
}

declare module "react-syntax-highlighter/dist/esm/prism-light" {
    import * as React from "react";
    import { SyntaxHighlighterProps } from "react-syntax-highlighter";
    export default class SyntaxHighlighter extends React.Component<
        SyntaxHighlighterProps
        > {
        static registerLanguage(name: string, func: any): void;
    }
}

declare module "react-syntax-highlighter/dist/esm/prism" {
    import * as React from "react";
    import { SyntaxHighlighterProps } from "react-syntax-highlighter";
    export default class SyntaxHighlighter extends React.Component<
        SyntaxHighlighterProps
        > { }
}

declare module "react-syntax-highlighter/dist/esm/styles/hljs" {
    export { default as a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";
    export { default as a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-light";
    export { default as agate } from "react-syntax-highlighter/dist/esm/styles/hljs/agate";
    export { default as anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs/an-old-hope";
    export { default as androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs/androidstudio";
    export { default as arduinoLight } from "react-syntax-highlighter/dist/esm/styles/hljs/arduino-light";
    export { default as arta } from "react-syntax-highlighter/dist/esm/styles/hljs/arta";
    export { default as ascetic } from "react-syntax-highlighter/dist/esm/styles/hljs/ascetic";
    export { default as atelierCaveDark } from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-cave-dark";
    export { default as atelierCaveLight } from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-cave-light";
    export { default as atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-dune-dark";
    export { default as atelierDuneLight } from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-dune-light";
    export { default as atelierEstuaryDark } from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-estuary-dark";
    export { default as atelierEstuaryLight } from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-estuary-light";
    export { default as atelierForestDark } from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-forest-dark";
    export { default as atelierForestLight } from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-forest-light";
    export { default as atelierHeathDark } from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-heath-dark";
    export { default as atelierHeathLight } from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-heath-light";
    export { default as atelierLakesideDark } from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-lakeside-dark";
    export { default as atelierLakesideLight } from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-lakeside-light";
    export { default as atelierPlateauDark } from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-plateau-dark";
    export { default as atelierPlateauLight } from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-plateau-light";
    export { default as atelierSavannaDark } from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-savanna-dark";
    export { default as atelierSavannaLight } from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-savanna-light";
    export { default as atelierSeasideDark } from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-seaside-dark";
    export { default as atelierSeasideLight } from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-seaside-light";
    export { default as atelierSulphurpoolDark } from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-sulphurpool-dark";
    export { default as atelierSulphurpoolLight } from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-sulphurpool-light";
    export { default as atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark-reasonable";
    export { default as atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark";
    export { default as atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light";
    export { default as brownPaper } from "react-syntax-highlighter/dist/esm/styles/hljs/brown-paper";
    export { default as codepenEmbed } from "react-syntax-highlighter/dist/esm/styles/hljs/codepen-embed";
    export { default as colorBrewer } from "react-syntax-highlighter/dist/esm/styles/hljs/color-brewer";
    export { default as darcula } from "react-syntax-highlighter/dist/esm/styles/hljs/darcula";
    export { default as dark } from "react-syntax-highlighter/dist/esm/styles/hljs/dark";
    export { default as darkula } from "react-syntax-highlighter/dist/esm/styles/hljs/darkula";
    export { default as defaultStyle } from "react-syntax-highlighter/dist/esm/styles/hljs/default-style";
    export { default as docco } from "react-syntax-highlighter/dist/esm/styles/hljs/docco";
    export { default as dracula } from "react-syntax-highlighter/dist/esm/styles/hljs/dracula";
    export { default as far } from "react-syntax-highlighter/dist/esm/styles/hljs/far";
    export { default as foundation } from "react-syntax-highlighter/dist/esm/styles/hljs/foundation";
    export { default as githubGist } from "react-syntax-highlighter/dist/esm/styles/hljs/github-gist";
    export { default as github } from "react-syntax-highlighter/dist/esm/styles/hljs/github";
    export { default as gml } from "react-syntax-highlighter/dist/esm/styles/hljs/gml";
    export { default as googlecode } from "react-syntax-highlighter/dist/esm/styles/hljs/googlecode";
    export { default as grayscale } from "react-syntax-highlighter/dist/esm/styles/hljs/grayscale";
    export { default as gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/hljs/gruvbox-dark";
    export { default as gruvboxLight } from "react-syntax-highlighter/dist/esm/styles/hljs/gruvbox-light";
    export { default as hopscotch } from "react-syntax-highlighter/dist/esm/styles/hljs/hopscotch";
    export { default as hybrid } from "react-syntax-highlighter/dist/esm/styles/hljs/hybrid";
    export { default as idea } from "react-syntax-highlighter/dist/esm/styles/hljs/idea";
    export { default as irBlack } from "react-syntax-highlighter/dist/esm/styles/hljs/ir-black";
    export { default as isblEditorDark } from "react-syntax-highlighter/dist/esm/styles/hljs/isbl-editor-dark";
    export { default as isblEditorLight } from "react-syntax-highlighter/dist/esm/styles/hljs/isbl-editor-light";
    export { default as kimbieDark } from "react-syntax-highlighter/dist/esm/styles/hljs/kimbie.dark";
    export { default as kimbieLight } from "react-syntax-highlighter/dist/esm/styles/hljs/kimbie.light";
    export { default as lightfair } from "react-syntax-highlighter/dist/esm/styles/hljs/lightfair";
    export { default as magula } from "react-syntax-highlighter/dist/esm/styles/hljs/magula";
    export { default as monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs/mono-blue";
    export { default as monokaiSublime } from "react-syntax-highlighter/dist/esm/styles/hljs/monokai-sublime";
    export { default as monokai } from "react-syntax-highlighter/dist/esm/styles/hljs/monokai";
    export { default as nord } from "react-syntax-highlighter/dist/esm/styles/hljs/nord";
    export { default as obsidian } from "react-syntax-highlighter/dist/esm/styles/hljs/obsidian";
    export { default as ocean } from "react-syntax-highlighter/dist/esm/styles/hljs/ocean";
    export { default as paraisoDark } from "react-syntax-highlighter/dist/esm/styles/hljs/paraiso-dark";
    export { default as paraisoLight } from "react-syntax-highlighter/dist/esm/styles/hljs/paraiso-light";
    export { default as pojoaque } from "react-syntax-highlighter/dist/esm/styles/hljs/pojoaque";
    export { default as purebasic } from "react-syntax-highlighter/dist/esm/styles/hljs/purebasic";
    export { default as qtcreatorDark } from "react-syntax-highlighter/dist/esm/styles/hljs/qtcreator_dark";
    export { default as qtcreatorLight } from "react-syntax-highlighter/dist/esm/styles/hljs/qtcreator_light";
    export { default as railscasts } from "react-syntax-highlighter/dist/esm/styles/hljs/railscasts";
    export { default as rainbow } from "react-syntax-highlighter/dist/esm/styles/hljs/rainbow";
    export { default as routeros } from "react-syntax-highlighter/dist/esm/styles/hljs/routeros";
    export { default as schoolBook } from "react-syntax-highlighter/dist/esm/styles/hljs/school-book";
    export { default as shadesOfPurple } from "react-syntax-highlighter/dist/esm/styles/hljs/shades-of-purple";
    export { default as solarizedDark } from "react-syntax-highlighter/dist/esm/styles/hljs/solarized-dark";
    export { default as solarizedLight } from "react-syntax-highlighter/dist/esm/styles/hljs/solarized-light";
    export { default as sunburst } from "react-syntax-highlighter/dist/esm/styles/hljs/sunburst";
    export { default as tomorrowNightBlue } from "react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night-blue";
    export { default as tomorrowNightBright } from "react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night-bright";
    export { default as tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night-eighties";
    export { default as tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night";
    export { default as tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs/tomorrow";
    export { default as vs } from "react-syntax-highlighter/dist/esm/styles/hljs/vs";
    export { default as vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs/vs2015";
    export { default as xcode } from "react-syntax-highlighter/dist/esm/styles/hljs/xcode";
    export { default as xt256 } from "react-syntax-highlighter/dist/esm/styles/hljs/xt256";
    export { default as zenburn } from "react-syntax-highlighter/dist/esm/styles/hljs/zenburn";
}

declare module "react-syntax-highlighter/dist/esm/styles/hljs/*" {
    const style: Style;
    export default style;
}

declare module "react-syntax-highlighter/dist/esm/styles/prism" {
    export { default as coy } from "react-syntax-highlighter/dist/esm/styles/prism/coy";
    export { default as dark } from "react-syntax-highlighter/dist/esm/styles/prism/dark";
    export { default as funky } from "react-syntax-highlighter/dist/esm/styles/prism/funky";
    export { default as okaidia } from "react-syntax-highlighter/dist/esm/styles/prism/okaidia";
    export { default as solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism/solarizedlight";
    export { default as tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism/tomorrow";
    export { default as twilight } from "react-syntax-highlighter/dist/esm/styles/prism/twilight";
    export { default as prism } from "react-syntax-highlighter/dist/esm/styles/prism/prism";
    export { default as atomDark } from "react-syntax-highlighter/dist/esm/styles/prism/atom-dark";
    export { default as base16AteliersulphurpoolLight } from "react-syntax-highlighter/dist/esm/styles/prism/base16-ateliersulphurpool.light";
    export { default as cb } from "react-syntax-highlighter/dist/esm/styles/prism/cb";
    export { default as darcula } from "react-syntax-highlighter/dist/esm/styles/prism/darcula";
    export { default as duotoneDark } from "react-syntax-highlighter/dist/esm/styles/prism/duotone-dark";
    export { default as duotoneEarth } from "react-syntax-highlighter/dist/esm/styles/prism/duotone-earth";
    export { default as duotoneForest } from "react-syntax-highlighter/dist/esm/styles/prism/duotone-forest";
    export { default as duotoneLight } from "react-syntax-highlighter/dist/esm/styles/prism/duotone-light";
    export { default as duotoneSea } from "react-syntax-highlighter/dist/esm/styles/prism/duotone-sea";
    export { default as duotoneSpace } from "react-syntax-highlighter/dist/esm/styles/prism/duotone-space";
    export { default as ghcolors } from "react-syntax-highlighter/dist/esm/styles/prism/ghcolors";
    export { default as hopscotch } from "react-syntax-highlighter/dist/esm/styles/prism/hopscotch";
    export { default as pojoaque } from "react-syntax-highlighter/dist/esm/styles/prism/pojoaque";
    export { default as vs } from "react-syntax-highlighter/dist/esm/styles/prism/vs";
    export { default as xonokai } from "react-syntax-highlighter/dist/esm/styles/prism/xonokai";
}

declare module "react-syntax-highlighter/dist/esm/styles/prism/*" {
    const style: Style;
    export default style;
}

declare module "react-syntax-highlighter/dist/esm/languages/hljs/*" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/esm/languages/prism/*" {
    const language: any;
    export default language;
}
// esm end

// cjs start
declare module "react-syntax-highlighter/dist/cjs/default-highlight" {
    import * as React from "react";
    import { SyntaxHighlighterProps } from "react-syntax-highlighter";
    export default class SyntaxHighlighter extends React.Component<
        SyntaxHighlighterProps
        > { }
}

declare module "react-syntax-highlighter/dist/cjs/light-async" {
    import * as React from "react";
    import { SyntaxHighlighterProps } from "react-syntax-highlighter";
    export default class SyntaxHighlighter extends React.Component<
        SyntaxHighlighterProps
        > {
        static registerLanguage(name: string, func: any): void;
    }
}

declare module "react-syntax-highlighter/dist/cjs/light" {
    import * as React from "react";
    import { SyntaxHighlighterProps } from "react-syntax-highlighter";
    export default class SyntaxHighlighter extends React.Component<
        SyntaxHighlighterProps
        > {
        static registerLanguage(name: string, func: any): void;
    }
}

declare module "react-syntax-highlighter/dist/cjs/prism-async-light" {
    import * as React from "react";
    import { SyntaxHighlighterProps } from "react-syntax-highlighter";
    export default class SyntaxHighlighter extends React.Component<
        SyntaxHighlighterProps
        > {
        static registerLanguage(name: string, func: any): void;
    }
}

declare module "react-syntax-highlighter/dist/cjs/prism-async" {
    import * as React from "react";
    import { SyntaxHighlighterProps } from "react-syntax-highlighter";
    export default class SyntaxHighlighter extends React.Component<
        SyntaxHighlighterProps
        > { }
}

declare module "react-syntax-highlighter/dist/cjs/prism-light" {
    import * as React from "react";
    import { SyntaxHighlighterProps } from "react-syntax-highlighter";
    export default class SyntaxHighlighter extends React.Component<
        SyntaxHighlighterProps
        > {
        static registerLanguage(name: string, func: any): void;
    }
}

declare module "react-syntax-highlighter/dist/cjs/prism" {
    import * as React from "react";
    import { SyntaxHighlighterProps } from "react-syntax-highlighter";
    export default class SyntaxHighlighter extends React.Component<
        SyntaxHighlighterProps
        > { }
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs" {
    export { default as a11yDark } from "react-syntax-highlighter/dist/cjs/styles/hljs/a11y-dark";
    export { default as a11yLight } from "react-syntax-highlighter/dist/cjs/styles/hljs/a11y-light";
    export { default as agate } from "react-syntax-highlighter/dist/cjs/styles/hljs/agate";
    export { default as anOldHope } from "react-syntax-highlighter/dist/cjs/styles/hljs/an-old-hope";
    export { default as androidstudio } from "react-syntax-highlighter/dist/cjs/styles/hljs/androidstudio";
    export { default as arduinoLight } from "react-syntax-highlighter/dist/cjs/styles/hljs/arduino-light";
    export { default as arta } from "react-syntax-highlighter/dist/cjs/styles/hljs/arta";
    export { default as ascetic } from "react-syntax-highlighter/dist/cjs/styles/hljs/ascetic";
    export { default as atelierCaveDark } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-cave-dark";
    export { default as atelierCaveLight } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-cave-light";
    export { default as atelierDuneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-dune-dark";
    export { default as atelierDuneLight } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-dune-light";
    export { default as atelierEstuaryDark } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-estuary-dark";
    export { default as atelierEstuaryLight } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-estuary-light";
    export { default as atelierForestDark } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-forest-dark";
    export { default as atelierForestLight } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-forest-light";
    export { default as atelierHeathDark } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-heath-dark";
    export { default as atelierHeathLight } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-heath-light";
    export { default as atelierLakesideDark } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-lakeside-dark";
    export { default as atelierLakesideLight } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-lakeside-light";
    export { default as atelierPlateauDark } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-plateau-dark";
    export { default as atelierPlateauLight } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-plateau-light";
    export { default as atelierSavannaDark } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-savanna-dark";
    export { default as atelierSavannaLight } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-savanna-light";
    export { default as atelierSeasideDark } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-seaside-dark";
    export { default as atelierSeasideLight } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-seaside-light";
    export { default as atelierSulphurpoolDark } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-sulphurpool-dark";
    export { default as atelierSulphurpoolLight } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-sulphurpool-light";
    export { default as atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark-reasonable";
    export { default as atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark";
    export { default as atomOneLight } from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-light";
    export { default as brownPaper } from "react-syntax-highlighter/dist/cjs/styles/hljs/brown-paper";
    export { default as codepenEmbed } from "react-syntax-highlighter/dist/cjs/styles/hljs/codepen-embed";
    export { default as colorBrewer } from "react-syntax-highlighter/dist/cjs/styles/hljs/color-brewer";
    export { default as darcula } from "react-syntax-highlighter/dist/cjs/styles/hljs/darcula";
    export { default as dark } from "react-syntax-highlighter/dist/cjs/styles/hljs/dark";
    export { default as darkula } from "react-syntax-highlighter/dist/cjs/styles/hljs/darkula";
    export { default as defaultStyle } from "react-syntax-highlighter/dist/cjs/styles/hljs/default-style";
    export { default as docco } from "react-syntax-highlighter/dist/cjs/styles/hljs/docco";
    export { default as dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs/dracula";
    export { default as far } from "react-syntax-highlighter/dist/cjs/styles/hljs/far";
    export { default as foundation } from "react-syntax-highlighter/dist/cjs/styles/hljs/foundation";
    export { default as githubGist } from "react-syntax-highlighter/dist/cjs/styles/hljs/github-gist";
    export { default as github } from "react-syntax-highlighter/dist/cjs/styles/hljs/github";
    export { default as gml } from "react-syntax-highlighter/dist/cjs/styles/hljs/gml";
    export { default as googlecode } from "react-syntax-highlighter/dist/cjs/styles/hljs/googlecode";
    export { default as grayscale } from "react-syntax-highlighter/dist/cjs/styles/hljs/grayscale";
    export { default as gruvboxDark } from "react-syntax-highlighter/dist/cjs/styles/hljs/gruvbox-dark";
    export { default as gruvboxLight } from "react-syntax-highlighter/dist/cjs/styles/hljs/gruvbox-light";
    export { default as hopscotch } from "react-syntax-highlighter/dist/cjs/styles/hljs/hopscotch";
    export { default as hybrid } from "react-syntax-highlighter/dist/cjs/styles/hljs/hybrid";
    export { default as idea } from "react-syntax-highlighter/dist/cjs/styles/hljs/idea";
    export { default as irBlack } from "react-syntax-highlighter/dist/cjs/styles/hljs/ir-black";
    export { default as isblEditorDark } from "react-syntax-highlighter/dist/cjs/styles/hljs/isbl-editor-dark";
    export { default as isblEditorLight } from "react-syntax-highlighter/dist/cjs/styles/hljs/isbl-editor-light";
    export { default as kimbieDark } from "react-syntax-highlighter/dist/cjs/styles/hljs/kimbie.dark";
    export { default as kimbieLight } from "react-syntax-highlighter/dist/cjs/styles/hljs/kimbie.light";
    export { default as lightfair } from "react-syntax-highlighter/dist/cjs/styles/hljs/lightfair";
    export { default as magula } from "react-syntax-highlighter/dist/cjs/styles/hljs/magula";
    export { default as monoBlue } from "react-syntax-highlighter/dist/cjs/styles/hljs/mono-blue";
    export { default as monokaiSublime } from "react-syntax-highlighter/dist/cjs/styles/hljs/monokai-sublime";
    export { default as monokai } from "react-syntax-highlighter/dist/cjs/styles/hljs/monokai";
    export { default as nord } from "react-syntax-highlighter/dist/cjs/styles/hljs/nord";
    export { default as obsidian } from "react-syntax-highlighter/dist/cjs/styles/hljs/obsidian";
    export { default as ocean } from "react-syntax-highlighter/dist/cjs/styles/hljs/ocean";
    export { default as paraisoDark } from "react-syntax-highlighter/dist/cjs/styles/hljs/paraiso-dark";
    export { default as paraisoLight } from "react-syntax-highlighter/dist/cjs/styles/hljs/paraiso-light";
    export { default as pojoaque } from "react-syntax-highlighter/dist/cjs/styles/hljs/pojoaque";
    export { default as purebasic } from "react-syntax-highlighter/dist/cjs/styles/hljs/purebasic";
    export { default as qtcreatorDark } from "react-syntax-highlighter/dist/cjs/styles/hljs/qtcreator_dark";
    export { default as qtcreatorLight } from "react-syntax-highlighter/dist/cjs/styles/hljs/qtcreator_light";
    export { default as railscasts } from "react-syntax-highlighter/dist/cjs/styles/hljs/railscasts";
    export { default as rainbow } from "react-syntax-highlighter/dist/cjs/styles/hljs/rainbow";
    export { default as routeros } from "react-syntax-highlighter/dist/cjs/styles/hljs/routeros";
    export { default as schoolBook } from "react-syntax-highlighter/dist/cjs/styles/hljs/school-book";
    export { default as shadesOfPurple } from "react-syntax-highlighter/dist/cjs/styles/hljs/shades-of-purple";
    export { default as solarizedDark } from "react-syntax-highlighter/dist/cjs/styles/hljs/solarized-dark";
    export { default as solarizedLight } from "react-syntax-highlighter/dist/cjs/styles/hljs/solarized-light";
    export { default as sunburst } from "react-syntax-highlighter/dist/cjs/styles/hljs/sunburst";
    export { default as tomorrowNightBlue } from "react-syntax-highlighter/dist/cjs/styles/hljs/tomorrow-night-blue";
    export { default as tomorrowNightBright } from "react-syntax-highlighter/dist/cjs/styles/hljs/tomorrow-night-bright";
    export { default as tomorrowNightEighties } from "react-syntax-highlighter/dist/cjs/styles/hljs/tomorrow-night-eighties";
    export { default as tomorrowNight } from "react-syntax-highlighter/dist/cjs/styles/hljs/tomorrow-night";
    export { default as tomorrow } from "react-syntax-highlighter/dist/cjs/styles/hljs/tomorrow";
    export { default as vs } from "react-syntax-highlighter/dist/cjs/styles/hljs/vs";
    export { default as vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs/vs2015";
    export { default as xcode } from "react-syntax-highlighter/dist/cjs/styles/hljs/xcode";
    export { default as xt256 } from "react-syntax-highlighter/dist/cjs/styles/hljs/xt256";
    export { default as zenburn } from "react-syntax-highlighter/dist/cjs/styles/hljs/zenburn";
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/*" {
    const style: Style;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/prism" {
    export { default as coy } from "react-syntax-highlighter/dist/cjs/styles/prism/coy";
    export { default as dark } from "react-syntax-highlighter/dist/cjs/styles/prism/dark";
    export { default as funky } from "react-syntax-highlighter/dist/cjs/styles/prism/funky";
    export { default as okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism/okaidia";
    export { default as solarizedlight } from "react-syntax-highlighter/dist/cjs/styles/prism/solarizedlight";
    export { default as tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";
    export { default as twilight } from "react-syntax-highlighter/dist/cjs/styles/prism/twilight";
    export { default as prism } from "react-syntax-highlighter/dist/cjs/styles/prism/prism";
    export { default as atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
    export { default as base16AteliersulphurpoolLight } from "react-syntax-highlighter/dist/cjs/styles/prism/base16-ateliersulphurpool.light";
    export { default as cb } from "react-syntax-highlighter/dist/cjs/styles/prism/cb";
    export { default as darcula } from "react-syntax-highlighter/dist/cjs/styles/prism/darcula";
    export { default as duotoneDark } from "react-syntax-highlighter/dist/cjs/styles/prism/duotone-dark";
    export { default as duotoneEarth } from "react-syntax-highlighter/dist/cjs/styles/prism/duotone-earth";
    export { default as duotoneForest } from "react-syntax-highlighter/dist/cjs/styles/prism/duotone-forest";
    export { default as duotoneLight } from "react-syntax-highlighter/dist/cjs/styles/prism/duotone-light";
    export { default as duotoneSea } from "react-syntax-highlighter/dist/cjs/styles/prism/duotone-sea";
    export { default as duotoneSpace } from "react-syntax-highlighter/dist/cjs/styles/prism/duotone-space";
    export { default as ghcolors } from "react-syntax-highlighter/dist/cjs/styles/prism/ghcolors";
    export { default as hopscotch } from "react-syntax-highlighter/dist/cjs/styles/prism/hopscotch";
    export { default as pojoaque } from "react-syntax-highlighter/dist/cjs/styles/prism/pojoaque";
    export { default as vs } from "react-syntax-highlighter/dist/cjs/styles/prism/vs";
    export { default as xonokai } from "react-syntax-highlighter/dist/cjs/styles/prism/xonokai";
}

declare module "react-syntax-highlighter/dist/cjs/styles/prism/*" {
    const style: Style;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/languages/hljs/*" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/*" {
    const language: any;
    export default language;
}
// cjs end
