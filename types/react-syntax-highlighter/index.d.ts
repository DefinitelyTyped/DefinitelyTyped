// Type definitions for react-syntax-highlighter 11.1
// Project: https://github.com/conorhastings/react-syntax-highlighter
// Definitions by: Ivo Stratev <https://github.com/NoHomey>
//                 Aimee Gamble-Milner <https://github.com/ajgamble-milner>
//                 Guo Yunhe <https://github.com/guoyunhe>
//                 Max Chehab <https://github.com/maxchehab>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

type lineTagPropsFunction = (
    lineNumber: number
) => React.DOMAttributes<HTMLElement>;

declare module "react-syntax-highlighter" {
    export interface SyntaxHighlighterProps {
        language?: string;
        style?: any;
        customStyle?: any;
        lineProps?: lineTagPropsFunction | React.DOMAttributes<HTMLElement>;
        codeTagProps?: React.DOMAttributes<HTMLElement>;
        useInlineStyles?: boolean;
        showLineNumbers?: boolean;
        startingLineNumber?: number;
        lineNumberStyle?: any;
        [spread: string]: any;
    }

    export { default } from "react-syntax-highlighter/default-highlight";
    export {
        default as LightAsync
    } from "react-syntax-highlighter/light-async";
    export { default as Light } from "react-syntax-highlighter/light";

    export {
        default as PrismAsyncLight
    } from "react-syntax-highlighter/prism-async-light";
    export {
        default as PrismAsync
    } from "react-syntax-highlighter/prism-async";
    export {
        default as PrismLight
    } from "react-syntax-highlighter/prism-light";
    export { default as Prism } from "react-syntax-highlighter/prism";
}

declare module "react-syntax-highlighter/default-highlight" {
    import * as React from "react";
    import { SyntaxHighlighterProps } from 'react-syntax-highlighter';
    export default class SyntaxHighlighter extends React.Component<
        SyntaxHighlighterProps
    > {}
}

declare module "react-syntax-highlighter/light-async" {
    import * as React from "react";
    import { SyntaxHighlighterProps } from 'react-syntax-highlighter';
    export default class SyntaxHighlighter extends React.Component<
        SyntaxHighlighterProps
    > {
        static registerLanguage(name: string, func: any): void;
    }
}

declare module "react-syntax-highlighter/light" {
    import * as React from "react";
    import { SyntaxHighlighterProps } from 'react-syntax-highlighter';
    export default class SyntaxHighlighter extends React.Component<
        SyntaxHighlighterProps
    > {
        static registerLanguage(name: string, func: any): void;
    }
}

declare module "react-syntax-highlighter/prism-async-light" {
    import * as React from "react";
    import { SyntaxHighlighterProps } from 'react-syntax-highlighter';
    export default class SyntaxHighlighter extends React.Component<
        SyntaxHighlighterProps
    > {
        static registerLanguage(name: string, func: any): void;
    }
}

declare module "react-syntax-highlighter/prism-async" {
    import * as React from "react";
    import { SyntaxHighlighterProps } from 'react-syntax-highlighter';
    export default class SyntaxHighlighter extends React.Component<
        SyntaxHighlighterProps
    > {}
}

declare module "react-syntax-highlighter/prism-light" {
    import * as React from "react";
    import { SyntaxHighlighterProps } from 'react-syntax-highlighter';
    export default class SyntaxHighlighter extends React.Component<
        SyntaxHighlighterProps
    > {
        static registerLanguage(name: string, func: any): void;
    }
}

declare module "react-syntax-highlighter/prism" {
    import * as React from "react";
    import { SyntaxHighlighterProps } from 'react-syntax-highlighter';
    export default class SyntaxHighlighter extends React.Component<
        SyntaxHighlighterProps
    > {}
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs" {
    export {
        default as agate
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/agate";
    export {
        default as androidstudio
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/androidstudio";
    export {
        default as arduinoLight
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/arduino-light";
    export {
        default as arta
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/arta";
    export {
        default as ascetic
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/ascetic";
    export {
        default as atelierCaveDark
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-cave-dark";
    export {
        default as atelierCaveLight
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-cave-light";
    export {
        default as atelierDuneDark
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-dune-dark";
    export {
        default as atelierDuneLight
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-dune-light";
    export {
        default as atelierEstuaryDark
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-estuary-dark";
    export {
        default as atelierEstuaryLight
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-estuary-light";
    export {
        default as atelierForestDark
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-forest-dark";
    export {
        default as atelierForestLight
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-forest-light";
    export {
        default as atelierHeathDark
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-heath-dark";
    export {
        default as atelierHeathLight
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-heath-light";
    export {
        default as atelierLakesideDark
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-lakeside-dark";
    export {
        default as atelierLakesideLight
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-lakeside-light";
    export {
        default as atelierPlateauDark
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-plateau-dark";
    export {
        default as atelierPlateauLight
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-plateau-light";
    export {
        default as atelierSavannaDark
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-savanna-dark";
    export {
        default as atelierSavannaLight
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-savanna-light";
    export {
        default as atelierSeasideDark
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-seaside-dark";
    export {
        default as atelierSeasideLight
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-seaside-light";
    export {
        default as atelierSulphurpoolDark
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-sulphurpool-dark";
    export {
        default as atelierSulphurpoolLight
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-sulphurpool-light";
    export {
        default as atomOneDark
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark";
    export {
        default as atomOneLight
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-light";
    export {
        default as brownPaper
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/brown-paper";
    export {
        default as codepenEmbed
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/codepen-embed";
    export {
        default as colorBrewer
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/color-brewer";
    export {
        default as darcula
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/darcula";
    export {
        default as dark
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/dark";
    export {
        default as darkula
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/darkula";
    export {
        default as defaultStyle
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/default-style";
    export {
        default as docco
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/docco";
    export {
        default as dracula
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/dracula";
    export {
        default as far
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/far";
    export {
        default as foundation
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/foundation";
    export {
        default as githubGist
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/github-gist";
    export {
        default as github
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/github";
    export {
        default as googlecode
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/googlecode";
    export {
        default as grayscale
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/grayscale";
    export {
        default as gruvboxDark
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/gruvbox-dark";
    export {
        default as gruvboxLight
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/gruvbox-light";
    export {
        default as hopscotch
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/hopscotch";
    export {
        default as hybrid
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/hybrid";
    export {
        default as idea
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/idea";
    export {
        default as irBlack
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/ir-black";
    export {
        default as kimbieDark
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/kimbie.dark";
    export {
        default as kimbieLight
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/kimbie.light";
    export {
        default as magula
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/magula";
    export {
        default as monoBlue
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/mono-blue";
    export {
        default as monokaiSublime
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/monokai-sublime";
    export {
        default as monokai
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/monokai";
    export {
        default as obsidian
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/obsidian";
    export {
        default as ocean
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/ocean";
    export {
        default as paraisoDark
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/paraiso-dark";
    export {
        default as paraisoLight
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/paraiso-light";
    export {
        default as pojoaque
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/pojoaque";
    export {
        default as purebasic
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/purebasic";
    export {
        default as qtcreatorDark
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/qtcreator_dark";
    export {
        default as qtcreatorLight
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/qtcreator_light";
    export {
        default as railscasts
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/railscasts";
    export {
        default as rainbow
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/rainbow";
    export {
        default as routeros
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/routeros";
    export {
        default as schoolBook
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/school-book";
    export {
        default as solarizedDark
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/solarized-dark";
    export {
        default as solarizedLight
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/solarized-light";
    export {
        default as sunburst
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/sunburst";
    export {
        default as tomorrowNightBlue
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/tomorrow-night-blue";
    export {
        default as tomorrowNightBright
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/tomorrow-night-bright";
    export {
        default as tomorrowNightEighties
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/tomorrow-night-eighties";
    export {
        default as tomorrowNight
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/tomorrow-night";
    export {
        default as tomorrow
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/tomorrow";
    export {
        default as vs
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/vs";
    export {
        default as vs2015
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/vs2015";
    export {
        default as xcode
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/xcode";
    export {
        default as xt256
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/xt256";
    export {
        default as zenburn
    } from "react-syntax-highlighter/dist/cjs/styles/hljs/zenburn";
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/agate" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/androidstudio" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/arduino-light" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/arta" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/ascetic" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-cave-dark" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-cave-light" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-dune-dark" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-dune-light" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-estuary-dark" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-estuary-light" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-forest-dark" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-forest-light" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-heath-dark" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-heath-light" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-lakeside-dark" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-lakeside-light" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-plateau-dark" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-plateau-light" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-savanna-dark" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-savanna-light" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-seaside-dark" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-seaside-light" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-sulphurpool-dark" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-sulphurpool-light" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-light" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/brown-paper" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/codepen-embed" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/color-brewer" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/darcula" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/dark" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/darkula" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/default-style" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/docco" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/dracula" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/far" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/foundation" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/github-gist" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/github" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/googlecode" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/grayscale" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/gruvbox-dark" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/gruvbox-light" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/hopscotch" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/hybrid" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/idea" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/ir-black" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/kimbie.dark" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/kimbie.light" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/magula" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/mono-blue" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/monokai-sublime" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/monokai" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/obsidian" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/ocean" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/paraiso-dark" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/paraiso-light" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/pojoaque" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/purebasic" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/qtcreator_dark" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/qtcreator_light" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/railscasts" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/rainbow" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/routeros" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/school-book" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/solarized-dark" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/solarized-light" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/sunburst" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/tomorrow-night-blue" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/tomorrow-night-bright" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/tomorrow-night-eighties" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/tomorrow-night" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/tomorrow" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/vs" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/vs2015" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/xcode" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/xt256" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/hljs/zenburn" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/prism" {
    export {
        default as atomDark
    } from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
    export {
        default as base16AteliersulphurpoolLight
    } from "react-syntax-highlighter/dist/cjs/styles/prism/base16-ateliersulphurpool.light";
    export {
        default as cb
    } from "react-syntax-highlighter/dist/cjs/styles/prism/cb";
    export {
        default as coy
    } from "react-syntax-highlighter/dist/cjs/styles/prism/coy";
    export {
        default as darcula
    } from "react-syntax-highlighter/dist/cjs/styles/prism/darcula";
    export {
        default as dark
    } from "react-syntax-highlighter/dist/cjs/styles/prism/dark";
    export {
        default as duotoneDark
    } from "react-syntax-highlighter/dist/cjs/styles/prism/duotone-dark";
    export {
        default as duotoneEarth
    } from "react-syntax-highlighter/dist/cjs/styles/prism/duotone-earth";
    export {
        default as duotoneForest
    } from "react-syntax-highlighter/dist/cjs/styles/prism/duotone-forest";
    export {
        default as duotoneLight
    } from "react-syntax-highlighter/dist/cjs/styles/prism/duotone-light";
    export {
        default as duotoneSea
    } from "react-syntax-highlighter/dist/cjs/styles/prism/duotone-sea";
    export {
        default as duotoneSpace
    } from "react-syntax-highlighter/dist/cjs/styles/prism/duotone-space";
    export {
        default as funky
    } from "react-syntax-highlighter/dist/cjs/styles/prism/funky";
    export {
        default as ghcolors
    } from "react-syntax-highlighter/dist/cjs/styles/prism/ghcolors";
    export {
        default as hopscotch
    } from "react-syntax-highlighter/dist/cjs/styles/prism/hopscotch";
    export {
        default as okaidia
    } from "react-syntax-highlighter/dist/cjs/styles/prism/okaidia";
    export {
        default as pojoaque
    } from "react-syntax-highlighter/dist/cjs/styles/prism/pojoaque";
    export {
        default as prism
    } from "react-syntax-highlighter/dist/cjs/styles/prism/prism";
    export {
        default as solarizedlight
    } from "react-syntax-highlighter/dist/cjs/styles/prism/solarizedlight";
    export {
        default as tomorrow
    } from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";
    export {
        default as twilight
    } from "react-syntax-highlighter/dist/cjs/styles/prism/twilight";
    export {
        default as vs
    } from "react-syntax-highlighter/dist/cjs/styles/prism/vs";
    export {
        default as xonokai
    } from "react-syntax-highlighter/dist/cjs/styles/prism/xonokai";
}

declare module "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/prism/base16-ateliersulphurpool.light" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/prism/cb" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/prism/coy" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/prism/darcula" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/prism/dark" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/prism/duotone-dark" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/prism/duotone-earth" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/prism/duotone-forest" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/prism/duotone-light" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/prism/duotone-sea" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/prism/duotone-space" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/prism/funky" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/prism/ghcolors" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/prism/hopscotch" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/prism/okaidia" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/prism/pojoaque" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/prism/prism" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/prism/solarizedlight" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/prism/twilight" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/prism/vs" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/styles/prism/xonokai" {
    const style: any;
    export default style;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/abap" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/actionscript" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/ada" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/apacheconf" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/apl" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/applescript" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/arduino" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/arff" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/asciidoc" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/asm6502" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/aspnet" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/autohotkey" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/autoit" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/bash" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/basic" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/batch" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/bison" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/brainfuck" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/bro" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/c" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/clike" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/clojure" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/coffeescript" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/cpp" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/crystal" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/csharp" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/csp" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/cssExtras" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/css" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/d" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/dart" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/diff" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/django" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/docker" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/eiffel" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/elixir" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/elm" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/erb" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/erlang" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/flow" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/fortran" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/fsharp" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/gedcom" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/gherkin" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/git" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/glsl" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/go" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/graphql" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/groovy" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/haml" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/handlebars" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/haskell" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/haxe" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/hpkp" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/hsts" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/http" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/ichigojam" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/icon" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/inform7" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/ini" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/io" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/j" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/java" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/javascript" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/jolie" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/json" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/jsx" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/julia" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/keyman" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/kotlin" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/latex" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/less" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/liquid" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/lisp" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/livescript" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/lolcode" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/lua" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/makefile" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/markdown" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/markupTemplating" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/markup" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/matlab" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/mel" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/mizar" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/monkey" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/n4js" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/nasm" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/nginx" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/nim" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/nix" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/nsis" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/objectivec" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/ocaml" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/opencl" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/oz" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/parigp" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/parser" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/pascal" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/perl" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/phpExtras" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/php" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/plsql" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/powershell" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/processing" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/prolog" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/properties" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/protobuf" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/pug" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/puppet" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/pure" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/python" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/q" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/qore" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/r" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/reason" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/renpy" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/rest" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/rip" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/roboconf" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/ruby" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/rust" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/sas" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/sass" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/scala" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/scheme" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/scss" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/smalltalk" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/smarty" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/soy" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/sql" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/stylus" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/swift" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/tcl" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/textile" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/tsx" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/twig" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/typescript" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/vbnet" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/velocity" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/verilog" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/vhdl" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/vim" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/visualBasic" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/wasm" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/wiki" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/xeora" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/xojo" {
    const language: any;
    export default language;
}

declare module "react-syntax-highlighter/dist/cjs/languages/prism/yaml" {
    const language: any;
    export default language;
}
