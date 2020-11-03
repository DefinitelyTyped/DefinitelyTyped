// Type definitions for react-syntax-highlighter 13.5
// Project: https://github.com/conorhastings/react-syntax-highlighter
// Definitions by: Ivo Stratev <https://github.com/NoHomey>
//                 Guo Yunhe <https://github.com/guoyunhe>
//                 Anirban Sengupta <https://github.com/anirban09>
//                 Michael Yuen <https://github.com/michaelyuen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

type lineTagPropsFunction = (lineNumber: number) => React.HTMLProps<HTMLElement>;

declare module 'react-syntax-highlighter' {
    export interface SyntaxHighlighterProps {
        language?: string;
        style?: any;
        customStyle?: any;
        lineProps?: lineTagPropsFunction | React.HTMLProps<HTMLElement>;
        codeTagProps?: React.HTMLProps<HTMLElement>;
        useInlineStyles?: boolean;
        showLineNumbers?: boolean;
        startingLineNumber?: number;
        lineNumberStyle?: any;
        [spread: string]: any;
    }

    export { default } from 'react-syntax-highlighter/dist/esm/default-highlight';
    export { default as LightAsync } from 'react-syntax-highlighter/dist/esm/light-async';
    export { default as Light } from 'react-syntax-highlighter/dist/esm/light';

    export { default as PrismAsyncLight } from 'react-syntax-highlighter/dist/esm/prism-async-light';
    export { default as PrismAsync } from 'react-syntax-highlighter/dist/esm/prism-async';
    export { default as PrismLight } from 'react-syntax-highlighter/dist/esm/prism-light';
    export { default as Prism } from 'react-syntax-highlighter/dist/esm/prism';
}

// esm start
declare module 'react-syntax-highlighter/dist/esm/default-highlight' {
    import * as React from 'react';
    import { SyntaxHighlighterProps } from 'react-syntax-highlighter';
    export default class SyntaxHighlighter extends React.Component<SyntaxHighlighterProps> {}
}

declare module 'react-syntax-highlighter/dist/esm/light-async' {
    import * as React from 'react';
    import { SyntaxHighlighterProps } from 'react-syntax-highlighter';
    export default class SyntaxHighlighter extends React.Component<SyntaxHighlighterProps> {
        static registerLanguage(name: string, func: any): void;
    }
}

declare module 'react-syntax-highlighter/dist/esm/light' {
    import * as React from 'react';
    import { SyntaxHighlighterProps } from 'react-syntax-highlighter';
    export default class SyntaxHighlighter extends React.Component<SyntaxHighlighterProps> {
        static registerLanguage(name: string, func: any): void;
    }
}

declare module 'react-syntax-highlighter/dist/esm/prism-async-light' {
    import * as React from 'react';
    import { SyntaxHighlighterProps } from 'react-syntax-highlighter';
    export default class SyntaxHighlighter extends React.Component<SyntaxHighlighterProps> {
        static registerLanguage(name: string, func: any): void;
    }
}

declare module 'react-syntax-highlighter/dist/esm/prism-async' {
    import * as React from 'react';
    import { SyntaxHighlighterProps } from 'react-syntax-highlighter';
    export default class SyntaxHighlighter extends React.Component<SyntaxHighlighterProps> {}
}

declare module 'react-syntax-highlighter/dist/esm/prism-light' {
    import * as React from 'react';
    import { SyntaxHighlighterProps } from 'react-syntax-highlighter';
    export default class SyntaxHighlighter extends React.Component<SyntaxHighlighterProps> {
        static registerLanguage(name: string, func: any): void;
    }
}

declare module 'react-syntax-highlighter/dist/esm/prism' {
    import * as React from 'react';
    import { SyntaxHighlighterProps } from 'react-syntax-highlighter';
    export default class SyntaxHighlighter extends React.Component<SyntaxHighlighterProps> {}
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs' {
    export { default as a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';
    export { default as a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-light';
    export { default as agate } from 'react-syntax-highlighter/dist/esm/styles/hljs/agate';
    export { default as anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs/an-old-hope';
    export { default as androidstudio } from 'react-syntax-highlighter/dist/esm/styles/hljs/androidstudio';
    export { default as arduinoLight } from 'react-syntax-highlighter/dist/esm/styles/hljs/arduino-light';
    export { default as arta } from 'react-syntax-highlighter/dist/esm/styles/hljs/arta';
    export { default as ascetic } from 'react-syntax-highlighter/dist/esm/styles/hljs/ascetic';
    export { default as atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-cave-dark';
    export { default as atelierCaveLight } from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-cave-light';
    export { default as atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-dune-dark';
    export { default as atelierDuneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-dune-light';
    export { default as atelierEstuaryDark } from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-estuary-dark';
    export { default as atelierEstuaryLight } from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-estuary-light';
    export { default as atelierForestDark } from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-forest-dark';
    export { default as atelierForestLight } from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-forest-light';
    export { default as atelierHeathDark } from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-heath-dark';
    export { default as atelierHeathLight } from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-heath-light';
    export { default as atelierLakesideDark } from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-lakeside-dark';
    export { default as atelierLakesideLight } from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-lakeside-light';
    export { default as atelierPlateauDark } from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-plateau-dark';
    export { default as atelierPlateauLight } from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-plateau-light';
    export { default as atelierSavannaDark } from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-savanna-dark';
    export { default as atelierSavannaLight } from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-savanna-light';
    export { default as atelierSeasideDark } from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-seaside-dark';
    export { default as atelierSeasideLight } from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-seaside-light';
    export { default as atelierSulphurpoolDark } from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-sulphurpool-dark';
    export { default as atelierSulphurpoolLight } from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-sulphurpool-light';
    export { default as atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark-reasonable';
    export { default as atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark';
    export { default as atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light';
    export { default as brownPaper } from 'react-syntax-highlighter/dist/esm/styles/hljs/brown-paper';
    export { default as codepenEmbed } from 'react-syntax-highlighter/dist/esm/styles/hljs/codepen-embed';
    export { default as colorBrewer } from 'react-syntax-highlighter/dist/esm/styles/hljs/color-brewer';
    export { default as darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs/darcula';
    export { default as dark } from 'react-syntax-highlighter/dist/esm/styles/hljs/dark';
    export { default as defaultStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs/default-style';
    export { default as docco } from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';
    export { default as dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs/dracula';
    export { default as far } from 'react-syntax-highlighter/dist/esm/styles/hljs/far';
    export { default as foundation } from 'react-syntax-highlighter/dist/esm/styles/hljs/foundation';
    export { default as githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs/github-gist';
    export { default as github } from 'react-syntax-highlighter/dist/esm/styles/hljs/github';
    export { default as gml } from 'react-syntax-highlighter/dist/esm/styles/hljs/gml';
    export { default as googlecode } from 'react-syntax-highlighter/dist/esm/styles/hljs/googlecode';
    export { default as gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs/gradient-dark';
    export { default as grayscale } from 'react-syntax-highlighter/dist/esm/styles/hljs/grayscale';
    export { default as gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs/gruvbox-dark';
    export { default as gruvboxLight } from 'react-syntax-highlighter/dist/esm/styles/hljs/gruvbox-light';
    export { default as hopscotch } from 'react-syntax-highlighter/dist/esm/styles/hljs/hopscotch';
    export { default as hybrid } from 'react-syntax-highlighter/dist/esm/styles/hljs/hybrid';
    export { default as idea } from 'react-syntax-highlighter/dist/esm/styles/hljs/idea';
    export { default as irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs/ir-black';
    export { default as isblEditorDark } from 'react-syntax-highlighter/dist/esm/styles/hljs/isbl-editor-dark';
    export { default as isblEditorLight } from 'react-syntax-highlighter/dist/esm/styles/hljs/isbl-editor-light';
    export { default as kimbieDark } from 'react-syntax-highlighter/dist/esm/styles/hljs/kimbie.dark';
    export { default as kimbieLight } from 'react-syntax-highlighter/dist/esm/styles/hljs/kimbie.light';
    export { default as lightfair } from 'react-syntax-highlighter/dist/esm/styles/hljs/lightfair';
    export { default as lioshi } from 'react-syntax-highlighter/dist/esm/styles/hljs/lioshi';
    export { default as magula } from 'react-syntax-highlighter/dist/esm/styles/hljs/magula';
    export { default as monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs/mono-blue';
    export { default as monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs/monokai-sublime';
    export { default as monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs/monokai';
    export { default as nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs/night-owl';
    export { default as nnfxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs/nnfx-dark';
    export { default as nnfx } from 'react-syntax-highlighter/dist/esm/styles/hljs/nnfx';
    export { default as nord } from 'react-syntax-highlighter/dist/esm/styles/hljs/nord';
    export { default as obsidian } from 'react-syntax-highlighter/dist/esm/styles/hljs/obsidian';
    export { default as ocean } from 'react-syntax-highlighter/dist/esm/styles/hljs/ocean';
    export { default as paraisoDark } from 'react-syntax-highlighter/dist/esm/styles/hljs/paraiso-dark';
    export { default as paraisoLight } from 'react-syntax-highlighter/dist/esm/styles/hljs/paraiso-light';
    export { default as pojoaque } from 'react-syntax-highlighter/dist/esm/styles/hljs/pojoaque';
    export { default as purebasic } from 'react-syntax-highlighter/dist/esm/styles/hljs/purebasic';
    export { default as qtcreatorDark } from 'react-syntax-highlighter/dist/esm/styles/hljs/qtcreator_dark';
    export { default as qtcreatorLight } from 'react-syntax-highlighter/dist/esm/styles/hljs/qtcreator_light';
    export { default as railscasts } from 'react-syntax-highlighter/dist/esm/styles/hljs/railscasts';
    export { default as rainbow } from 'react-syntax-highlighter/dist/esm/styles/hljs/rainbow';
    export { default as routeros } from 'react-syntax-highlighter/dist/esm/styles/hljs/routeros';
    export { default as schoolBook } from 'react-syntax-highlighter/dist/esm/styles/hljs/school-book';
    export { default as shadesOfPurple } from 'react-syntax-highlighter/dist/esm/styles/hljs/shades-of-purple';
    export { default as solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs/solarized-dark';
    export { default as solarizedLight } from 'react-syntax-highlighter/dist/esm/styles/hljs/solarized-light';
    export { default as srcery } from 'react-syntax-highlighter/dist/esm/styles/hljs/srcery';
    export { default as sunburst } from 'react-syntax-highlighter/dist/esm/styles/hljs/sunburst';
    export { default as tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night-blue';
    export { default as tomorrowNightBright } from 'react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night-bright';
    export { default as tomorrowNightEighties } from 'react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night-eighties';
    export { default as tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night';
    export { default as tomorrow } from 'react-syntax-highlighter/dist/esm/styles/hljs/tomorrow';
    export { default as vs } from 'react-syntax-highlighter/dist/esm/styles/hljs/vs';
    export { default as vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs/vs2015';
    export { default as xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs/xcode';
    export { default as xt256 } from 'react-syntax-highlighter/dist/esm/styles/hljs/xt256';
    export { default as zenburn } from 'react-syntax-highlighter/dist/esm/styles/hljs/zenburn';
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/agate' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/an-old-hope' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/androidstudio' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/arduino-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/arta' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/ascetic' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-cave-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-cave-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-dune-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-dune-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-estuary-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-estuary-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-forest-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-forest-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-heath-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-heath-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-lakeside-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-lakeside-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-plateau-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-plateau-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-savanna-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-savanna-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-seaside-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-seaside-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-sulphurpool-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-sulphurpool-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark-reasonable' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/brown-paper' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/codepen-embed' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/color-brewer' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/darcula' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/darkula' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/default-style' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/docco' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/dracula' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/far' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/foundation' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/github-gist' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/github' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/gml' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/googlecode' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/gradient-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/grayscale' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/gruvbox-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/gruvbox-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/hopscotch' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/hybrid' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/idea' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/ir-black' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/isbl-editor-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/isbl-editor-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/kimbie.dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/kimbie.light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/lightfair' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/lioshi' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/magula' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/mono-blue' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/monokai-sublime' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/monokai' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/night-owl' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/nnfx-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/nnfx' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/nord' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/obsidian' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/ocean' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/paraiso-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/paraiso-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/pojoaque' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/purebasic' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/qtcreator_dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/qtcreator_light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/railscasts' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/rainbow' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/routeros' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/school-book' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/shades-of-purple' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/solarized-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/solarized-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/srcery' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/sunburst' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night-blue' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night-bright' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night-eighties' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/tomorrow' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/vs' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/vs2015' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/xcode' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/xt256' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/zenburn' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism' {
    export { default as a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism/a11y-dark';
    export { default as atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism/atom-dark';
    export { default as base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/esm/styles/prism/base16-ateliersulphurpool.light';
    export { default as cb } from 'react-syntax-highlighter/dist/esm/styles/prism/cb';
    export { default as coy } from 'react-syntax-highlighter/dist/esm/styles/prism/coy';
    export { default as darcula } from 'react-syntax-highlighter/dist/esm/styles/prism/darcula';
    export { default as dark } from 'react-syntax-highlighter/dist/esm/styles/prism/dark';
    export { default as dracula } from 'react-syntax-highlighter/dist/esm/styles/prism/dracula';
    export { default as duotoneDark } from 'react-syntax-highlighter/dist/esm/styles/prism/duotone-dark';
    export { default as duotoneEarth } from 'react-syntax-highlighter/dist/esm/styles/prism/duotone-earth';
    export { default as duotoneForest } from 'react-syntax-highlighter/dist/esm/styles/prism/duotone-forest';
    export { default as duotoneLight } from 'react-syntax-highlighter/dist/esm/styles/prism/duotone-light';
    export { default as duotoneSea } from 'react-syntax-highlighter/dist/esm/styles/prism/duotone-sea';
    export { default as duotoneSpace } from 'react-syntax-highlighter/dist/esm/styles/prism/duotone-space';
    export { default as funky } from 'react-syntax-highlighter/dist/esm/styles/prism/funky';
    export { default as ghcolors } from 'react-syntax-highlighter/dist/esm/styles/prism/ghcolors';
    export { default as hopscotch } from 'react-syntax-highlighter/dist/esm/styles/prism/hopscotch';
    export { default as materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism/material-dark';
    export { default as materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism/material-light';
    export { default as materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism/material-oceanic';
    export { default as nord } from 'react-syntax-highlighter/dist/esm/styles/prism/nord';
    export { default as okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism/okaidia';
    export { default as pojoaque } from 'react-syntax-highlighter/dist/esm/styles/prism/pojoaque';
    export { default as prism } from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
    export { default as shadesOfPurple } from 'react-syntax-highlighter/dist/esm/styles/prism/shades-of-purple';
    export { default as solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism/solarizedlight';
    export { default as synthwave84 } from 'react-syntax-highlighter/dist/esm/styles/prism/synthwave84';
    export { default as tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism/tomorrow';
    export { default as twilight } from 'react-syntax-highlighter/dist/esm/styles/prism/twilight';
    export { default as vs } from 'react-syntax-highlighter/dist/esm/styles/prism/vs';
    export { default as vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus';
    export { default as xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism/xonokai';
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/a11y-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/atom-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/base16-ateliersulphurpool.light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/cb' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/coy' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/darcula' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/dracula' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/duotone-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/duotone-earth' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/duotone-forest' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/duotone-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/duotone-sea' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/duotone-space' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/funky' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/ghcolors' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/hopscotch' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/material-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/material-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/material-oceanic' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/nord' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/okaidia' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/pojoaque' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/prism' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/shades-of-purple' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/solarizedlight' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/synthwave84' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/tomorrow' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/twilight' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/vs' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/xonokai' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/1c' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/abnf' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/accesslog' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/actionscript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/ada' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/angelscript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/apache' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/applescript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/arcade' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/arduino' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/armasm' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/asciidoc' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/aspectj' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/autohotkey' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/autoit' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/avrasm' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/awk' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/axapta' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/bash' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/basic' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/bnf' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/brainfuck' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/c-like' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/c' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/cal' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/capnproto' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/ceylon' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/clean' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/clojure-repl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/clojure' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/cmake' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/coffeescript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/coq' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/cos' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/cpp' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/crmsh' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/crystal' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/cs' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/csharp' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/csp' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/css' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/d' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/dart' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/delphi' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/diff' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/django' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/dns' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/dockerfile' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/dos' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/dsconfig' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/dts' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/dust' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/ebnf' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/elixir' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/elm' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/erb' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/erlang-repl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/erlang' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/excel' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/fix' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/flix' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/fortran' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/fsharp' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/gams' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/gauss' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/gcode' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/gherkin' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/glsl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/gml' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/go' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/golo' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/gradle' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/groovy' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/haml' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/handlebars' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/haskell' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/haxe' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/hsp' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/htmlbars' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/http' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/hy' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/inform7' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/ini' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/irpf90' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/isbl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/java' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/javascript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/jboss-cli' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/json' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/julia-repl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/julia' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/kotlin' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/lasso' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/latex' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/ldif' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/leaf' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/less' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/lisp' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/livecodeserver' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/livescript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/llvm' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/lsl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/lua' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/makefile' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/markdown' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/mathematica' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/matlab' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/maxima' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/mel' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/mercury' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/mipsasm' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/mizar' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/mojolicious' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/monkey' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/moonscript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/n1ql' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/nginx' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/nim' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/nimrod' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/nix' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/nsis' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/objectivec' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/ocaml' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/openscad' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/oxygene' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/parser3' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/perl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/pf' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/pgsql' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/php-template' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/php' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/plaintext' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/pony' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/powershell' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/processing' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/profile' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/prolog' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/properties' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/protobuf' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/puppet' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/purebasic' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/python-repl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/python' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/q' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/qml' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/r' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/reasonml' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/rib' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/roboconf' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/routeros' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/rsl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/ruby' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/ruleslanguage' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/rust' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/sas' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/scala' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/scheme' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/scilab' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/scss' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/shell' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/smali' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/smalltalk' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/sml' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/sqf' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/sql' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/stan' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/stata' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/step21' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/stylus' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/subunit' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/swift' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/taggerscript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/tap' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/tcl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/tex' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/thrift' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/tp' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/twig' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/typescript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/vala' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/vbnet' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/vbscript-html' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/vbscript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/verilog' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/vhdl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/vim' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/x86asm' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/xl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/xml' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/xquery' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/yaml' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/zephir' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/abap' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/abnf' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/actionscript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/ada' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/agda' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/al' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/antlr4' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/apacheconf' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/apl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/applescript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/aql' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/arduino' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/arff' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/asciidoc' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/asm6502' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/aspnet' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/autohotkey' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/autoit' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/bash' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/basic' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/batch' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/bbcode' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/bison' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/bnf' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/brainfuck' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/brightscript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/bro' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/c' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/cil' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/clike' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/clojure' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/cmake' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/coffeescript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/concurnas' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/core' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/cpp' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/crystal' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/csharp' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/csp' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/css-extras' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/css' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/cypher' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/d' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/dart' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/dax' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/dhall' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/diff' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/django' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/dns-zone-file' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/docker' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/ebnf' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/editorconfig' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/eiffel' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/ejs' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/elixir' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/elm' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/erb' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/erlang' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/etlua' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/excel-formula' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/factor' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/firestore-security-rules' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/flow' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/fortran' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/fsharp' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/ftl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/gcode' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/gdscript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/gedcom' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/gherkin' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/git' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/glsl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/gml' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/go' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/graphql' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/groovy' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/haml' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/handlebars' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/haskell' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/haxe' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/hcl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/hlsl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/hpkp' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/hsts' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/http' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/ichigojam' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/icon' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/iecst' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/ignore' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/inform7' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/ini' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/io' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/j' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/java' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/javadoc' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/javadoclike' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/javascript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/javastacktrace' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/jolie' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/jq' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/js-extras' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/js-templates' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/js-doc' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/json' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/json5' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/jsonp' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/jsstacktrace' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/jsx' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/julia' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/keyman' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/kotlin' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/latex' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/latte' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/less' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/lilypond' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/liquid' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/lisp' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/livescript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/llvm' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/lolcode' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/lua' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/makefile' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/markdown' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/markup-templating' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/markup' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/matlab' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/mel' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/mizar' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/monkey' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/moonscript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/n1ql' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/n4js' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/nand2tetris-hdl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/nasm' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/neon' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/nginx' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/nim' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/nix' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/nsis' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/objectivec' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/ocaml' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/opencl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/oz' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/parigp' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/parser' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/pascal' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/pascaligo' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/pcaxis' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/peoplecode' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/perl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/php-extras' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/php' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/plsql' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/powerquery' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/powershell' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/processing' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/prolog' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/properties' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/protobuf' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/pug' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/puppet' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/pure' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/purebasic' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/python' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/q' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/qml' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/qore' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/r' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/racket' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/reason' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/regex' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/renpy' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/rest' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/rip' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/roboconf' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/robotframework' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/ruby' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/rust' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/sas' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/sass' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/scala' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/scheme' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/scss' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/shell-session' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/smali' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/smalltalk' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/smarty' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/solidity' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/solution-file' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/soy' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/sparql' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/splunk-spl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/sqf' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/sql' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/stylus' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/swift' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/t4-cs' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/t4-templating' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/t4-vb' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/tap' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/tcl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/textile' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/toml' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/tsx' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/tt2' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/turtle' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/twig' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/typescript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/unrealscript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/vala' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/vbnet' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/velocity' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/verilog' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/vhdl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/vim' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/visual-basic' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/warpscript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/wasm' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/wiki' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/xeora' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/xml-doc' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/xojo' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/xquery' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/yaml' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/yang' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/zig' {
    const language: any;
    export default language;
}
// esm end

// cjs start
declare module 'react-syntax-highlighter/dist/cjs/default-highlight' {
    import * as React from 'react';
    import { SyntaxHighlighterProps } from 'react-syntax-highlighter';
    export default class SyntaxHighlighter extends React.Component<SyntaxHighlighterProps> {}
}

declare module 'react-syntax-highlighter/dist/cjs/light-async' {
    import * as React from 'react';
    import { SyntaxHighlighterProps } from 'react-syntax-highlighter';
    export default class SyntaxHighlighter extends React.Component<SyntaxHighlighterProps> {
        static registerLanguage(name: string, func: any): void;
    }
}

declare module 'react-syntax-highlighter/dist/cjs/light' {
    import * as React from 'react';
    import { SyntaxHighlighterProps } from 'react-syntax-highlighter';
    export default class SyntaxHighlighter extends React.Component<SyntaxHighlighterProps> {
        static registerLanguage(name: string, func: any): void;
    }
}

declare module 'react-syntax-highlighter/dist/cjs/prism-async-light' {
    import * as React from 'react';
    import { SyntaxHighlighterProps } from 'react-syntax-highlighter';
    export default class SyntaxHighlighter extends React.Component<SyntaxHighlighterProps> {
        static registerLanguage(name: string, func: any): void;
    }
}

declare module 'react-syntax-highlighter/dist/cjs/prism-async' {
    import * as React from 'react';
    import { SyntaxHighlighterProps } from 'react-syntax-highlighter';
    export default class SyntaxHighlighter extends React.Component<SyntaxHighlighterProps> {}
}

declare module 'react-syntax-highlighter/dist/cjs/prism-light' {
    import * as React from 'react';
    import { SyntaxHighlighterProps } from 'react-syntax-highlighter';
    export default class SyntaxHighlighter extends React.Component<SyntaxHighlighterProps> {
        static registerLanguage(name: string, func: any): void;
    }
}

declare module 'react-syntax-highlighter/dist/cjs/prism' {
    import * as React from 'react';
    import { SyntaxHighlighterProps } from 'react-syntax-highlighter';
    export default class SyntaxHighlighter extends React.Component<SyntaxHighlighterProps> {}
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs' {
    export { default as a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs/a11y-dark';
    export { default as a11yLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs/a11y-light';
    export { default as agate } from 'react-syntax-highlighter/dist/cjs/styles/hljs/agate';
    export { default as anOldHope } from 'react-syntax-highlighter/dist/cjs/styles/hljs/an-old-hope';
    export { default as androidstudio } from 'react-syntax-highlighter/dist/cjs/styles/hljs/androidstudio';
    export { default as arduinoLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs/arduino-light';
    export { default as arta } from 'react-syntax-highlighter/dist/cjs/styles/hljs/arta';
    export { default as ascetic } from 'react-syntax-highlighter/dist/cjs/styles/hljs/ascetic';
    export { default as atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-cave-dark';
    export { default as atelierCaveLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-cave-light';
    export { default as atelierDuneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-dune-dark';
    export { default as atelierDuneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-dune-light';
    export { default as atelierEstuaryDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-estuary-dark';
    export { default as atelierEstuaryLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-estuary-light';
    export { default as atelierForestDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-forest-dark';
    export { default as atelierForestLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-forest-light';
    export { default as atelierHeathDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-heath-dark';
    export { default as atelierHeathLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-heath-light';
    export { default as atelierLakesideDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-lakeside-dark';
    export { default as atelierLakesideLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-lakeside-light';
    export { default as atelierPlateauDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-plateau-dark';
    export { default as atelierPlateauLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-plateau-light';
    export { default as atelierSavannaDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-savanna-dark';
    export { default as atelierSavannaLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-savanna-light';
    export { default as atelierSeasideDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-seaside-dark';
    export { default as atelierSeasideLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-seaside-light';
    export { default as atelierSulphurpoolDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-sulphurpool-dark';
    export { default as atelierSulphurpoolLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-sulphurpool-light';
    export { default as atomOneDarkReasonable } from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark-reasonable';
    export { default as atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark';
    export { default as atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-light';
    export { default as brownPaper } from 'react-syntax-highlighter/dist/cjs/styles/hljs/brown-paper';
    export { default as codepenEmbed } from 'react-syntax-highlighter/dist/cjs/styles/hljs/codepen-embed';
    export { default as colorBrewer } from 'react-syntax-highlighter/dist/cjs/styles/hljs/color-brewer';
    export { default as darcula } from 'react-syntax-highlighter/dist/cjs/styles/hljs/darcula';
    export { default as dark } from 'react-syntax-highlighter/dist/cjs/styles/hljs/dark';
    export { default as darkula } from 'react-syntax-highlighter/dist/cjs/styles/hljs/darkula';
    export { default as defaultStyle } from 'react-syntax-highlighter/dist/cjs/styles/hljs/default-style';
    export { default as docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs/docco';
    export { default as dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs/dracula';
    export { default as far } from 'react-syntax-highlighter/dist/cjs/styles/hljs/far';
    export { default as foundation } from 'react-syntax-highlighter/dist/cjs/styles/hljs/foundation';
    export { default as githubGist } from 'react-syntax-highlighter/dist/cjs/styles/hljs/github-gist';
    export { default as github } from 'react-syntax-highlighter/dist/cjs/styles/hljs/github';
    export { default as gml } from 'react-syntax-highlighter/dist/cjs/styles/hljs/gml';
    export { default as googlecode } from 'react-syntax-highlighter/dist/cjs/styles/hljs/googlecode';
    export { default as gradientDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs/gradient-dark';
    export { default as grayscale } from 'react-syntax-highlighter/dist/cjs/styles/hljs/grayscale';
    export { default as gruvboxDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs/gruvbox-dark';
    export { default as gruvboxLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs/gruvbox-light';
    export { default as hopscotch } from 'react-syntax-highlighter/dist/cjs/styles/hljs/hopscotch';
    export { default as hybrid } from 'react-syntax-highlighter/dist/cjs/styles/hljs/hybrid';
    export { default as idea } from 'react-syntax-highlighter/dist/cjs/styles/hljs/idea';
    export { default as irBlack } from 'react-syntax-highlighter/dist/cjs/styles/hljs/ir-black';
    export { default as isblEditorDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs/isbl-editor-dark';
    export { default as isblEditorLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs/isbl-editor-light';
    export { default as kimbieDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs/kimbie.dark';
    export { default as kimbieLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs/kimbie.light';
    export { default as lightfair } from 'react-syntax-highlighter/dist/cjs/styles/hljs/lightfair';
    export { default as lioshi } from 'react-syntax-highlighter/dist/cjs/styles/hljs/lioshi';
    export { default as magula } from 'react-syntax-highlighter/dist/cjs/styles/hljs/magula';
    export { default as monoBlue } from 'react-syntax-highlighter/dist/cjs/styles/hljs/mono-blue';
    export { default as monokaiSublime } from 'react-syntax-highlighter/dist/cjs/styles/hljs/monokai-sublime';
    export { default as monokai } from 'react-syntax-highlighter/dist/cjs/styles/hljs/monokai';
    export { default as nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs/night-owl';
    export { default as nnfxDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs/nnfx-dark';
    export { default as nnfx } from 'react-syntax-highlighter/dist/cjs/styles/hljs/nnfx';
    export { default as nord } from 'react-syntax-highlighter/dist/cjs/styles/hljs/nord';
    export { default as obsidian } from 'react-syntax-highlighter/dist/cjs/styles/hljs/obsidian';
    export { default as ocean } from 'react-syntax-highlighter/dist/cjs/styles/hljs/ocean';
    export { default as paraisoDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs/paraiso-dark';
    export { default as paraisoLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs/paraiso-light';
    export { default as pojoaque } from 'react-syntax-highlighter/dist/cjs/styles/hljs/pojoaque';
    export { default as purebasic } from 'react-syntax-highlighter/dist/cjs/styles/hljs/purebasic';
    export { default as qtcreatorDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs/qtcreator_dark';
    export { default as qtcreatorLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs/qtcreator_light';
    export { default as railscasts } from 'react-syntax-highlighter/dist/cjs/styles/hljs/railscasts';
    export { default as rainbow } from 'react-syntax-highlighter/dist/cjs/styles/hljs/rainbow';
    export { default as routeros } from 'react-syntax-highlighter/dist/cjs/styles/hljs/routeros';
    export { default as schoolBook } from 'react-syntax-highlighter/dist/cjs/styles/hljs/school-book';
    export { default as shadesOfPurple } from 'react-syntax-highlighter/dist/cjs/styles/hljs/shades-of-purple';
    export { default as solarizedDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs/solarized-dark';
    export { default as solarizedLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs/solarized-light';
    export { default as srcery } from 'react-syntax-highlighter/dist/cjs/styles/hljs/srcery';
    export { default as sunburst } from 'react-syntax-highlighter/dist/cjs/styles/hljs/sunburst';
    export { default as tomorrowNightBlue } from 'react-syntax-highlighter/dist/cjs/styles/hljs/tomorrow-night-blue';
    export { default as tomorrowNightBright } from 'react-syntax-highlighter/dist/cjs/styles/hljs/tomorrow-night-bright';
    export { default as tomorrowNightEighties } from 'react-syntax-highlighter/dist/cjs/styles/hljs/tomorrow-night-eighties';
    export { default as tomorrowNight } from 'react-syntax-highlighter/dist/cjs/styles/hljs/tomorrow-night';
    export { default as tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/hljs/tomorrow';
    export { default as vs } from 'react-syntax-highlighter/dist/cjs/styles/hljs/vs';
    export { default as vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs/vs2015';
    export { default as xcode } from 'react-syntax-highlighter/dist/cjs/styles/hljs/xcode';
    export { default as xt256 } from 'react-syntax-highlighter/dist/cjs/styles/hljs/xt256';
    export { default as zenburn } from 'react-syntax-highlighter/dist/cjs/styles/hljs/zenburn';
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/a11y-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/a11y-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/agate' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/an-old-hope' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/androidstudio' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/arduino-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/arta' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/ascetic' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-cave-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-cave-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-dune-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-dune-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-estuary-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-estuary-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-forest-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-forest-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-heath-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-heath-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-lakeside-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-lakeside-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-plateau-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-plateau-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-savanna-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-savanna-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-seaside-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-seaside-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-sulphurpool-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-sulphurpool-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark-reasonable' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/brown-paper' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/codepen-embed' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/color-brewer' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/darcula' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/darkula' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/default-style' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/docco' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/dracula' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/far' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/foundation' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/github-gist' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/github' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/gml' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/googlecode' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/gradient-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/grayscale' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/gruvbox-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/gruvbox-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/hopscotch' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/hybrid' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/idea' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/ir-black' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/isbl-editor-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/isbl-editor-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/kimbie.dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/kimbie.light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/lightfair' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/lioshi' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/magula' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/mono-blue' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/monokai-sublime' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/monokai' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/night-owl' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/nnfx-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/nnfx' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/nord' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/obsidian' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/ocean' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/paraiso-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/paraiso-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/pojoaque' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/purebasic' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/qtcreator_dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/qtcreator_light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/railscasts' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/rainbow' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/routeros' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/school-book' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/shades-of-purple' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/solarized-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/solarized-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/srcery' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/sunburst' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/tomorrow-night-blue' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/tomorrow-night-bright' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/tomorrow-night-eighties' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/tomorrow-night' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/tomorrow' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/vs' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/vs2015' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/xcode' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/xt256' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/zenburn' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism' {
    export { default as a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark';
    export { default as atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
    export { default as base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/cjs/styles/prism/base16-ateliersulphurpool.light';
    export { default as cb } from 'react-syntax-highlighter/dist/cjs/styles/prism/cb';
    export { default as coy } from 'react-syntax-highlighter/dist/cjs/styles/prism/coy';
    export { default as darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism/darcula';
    export { default as dark } from 'react-syntax-highlighter/dist/cjs/styles/prism/dark';
    export { default as dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';
    export { default as duotoneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism/duotone-dark';
    export { default as duotoneEarth } from 'react-syntax-highlighter/dist/cjs/styles/prism/duotone-earth';
    export { default as duotoneForest } from 'react-syntax-highlighter/dist/cjs/styles/prism/duotone-forest';
    export { default as duotoneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism/duotone-light';
    export { default as duotoneSea } from 'react-syntax-highlighter/dist/cjs/styles/prism/duotone-sea';
    export { default as duotoneSpace } from 'react-syntax-highlighter/dist/cjs/styles/prism/duotone-space';
    export { default as funky } from 'react-syntax-highlighter/dist/cjs/styles/prism/funky';
    export { default as ghcolors } from 'react-syntax-highlighter/dist/cjs/styles/prism/ghcolors';
    export { default as hopscotch } from 'react-syntax-highlighter/dist/cjs/styles/prism/hopscotch';
    export { default as materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism/material-dark';
    export { default as materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light';
    export { default as materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism/material-oceanic';
    export { default as nord } from 'react-syntax-highlighter/dist/cjs/styles/prism/nord';
    export { default as okaidia } from 'react-syntax-highlighter/dist/cjs/styles/prism/okaidia';
    export { default as pojoaque } from 'react-syntax-highlighter/dist/cjs/styles/prism/pojoaque';
    export { default as prism } from 'react-syntax-highlighter/dist/cjs/styles/prism/prism';
    export { default as shadesOfPurple } from 'react-syntax-highlighter/dist/cjs/styles/prism/shades-of-purple';
    export { default as solarizedlight } from 'react-syntax-highlighter/dist/cjs/styles/prism/solarizedlight';
    export { default as synthwave84 } from 'react-syntax-highlighter/dist/cjs/styles/prism/synthwave84';
    export { default as tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
    export { default as twilight } from 'react-syntax-highlighter/dist/cjs/styles/prism/twilight';
    export { default as vsDark } from 'react-syntax-highlighter/dist/cjs/styles/prism/vs-dark';
    export { default as vs } from 'react-syntax-highlighter/dist/cjs/styles/prism/vs';
    export { default as vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus';
    export { default as xonokai } from 'react-syntax-highlighter/dist/cjs/styles/prism/xonokai';
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/base16-ateliersulphurpool.light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/cb' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/coy' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/darcula' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/dracula' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/duotone-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/duotone-earth' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/duotone-forest' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/duotone-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/duotone-sea' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/duotone-space' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/funky' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/ghcolors' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/hopscotch' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/material-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/material-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/material-oceanic' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/nord' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/okaidia' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/pojoaque' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/prism' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/shades-of-purple' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/solarizedlight' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/synthwave84' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/twilight' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/vs-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/vs' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/xonokai' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/1c' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/abnf' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/accesslog' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/actionscript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/ada' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/angelscript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/apache' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/applescript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/arcade' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/arduino' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/armasm' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/asciidoc' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/aspectj' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/autohotkey' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/autoit' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/avrasm' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/awk' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/axapta' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/bash' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/basic' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/bnf' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/brainfuck' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/c-like' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/c' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/cal' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/capnproto' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/ceylon' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/clean' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/clojure-repl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/clojure' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/cmake' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/coffeescript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/coq' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/cos' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/cpp' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/crmsh' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/crystal' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/cs' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/csharp' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/csp' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/css' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/d' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/dart' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/delphi' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/diff' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/django' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/dns' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/dockerfile' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/dos' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/dsconfig' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/dts' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/dust' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/ebnf' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/elixir' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/elm' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/erb' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/erlang-repl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/erlang' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/excel' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/fix' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/flix' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/fortran' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/fsharp' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/gams' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/gauss' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/gcode' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/gherkin' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/glsl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/gml' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/go' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/golo' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/gradle' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/groovy' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/haml' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/handlebars' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/haskell' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/haxe' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/hsp' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/htmlbars' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/http' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/hy' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/inform7' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/ini' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/irpf90' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/isbl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/java' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/jboss-cli' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/json' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/julia-repl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/julia' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/kotlin' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/lasso' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/latex' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/ldif' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/leaf' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/less' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/lisp' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/livecodeserver' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/livescript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/llvm' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/lsl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/lua' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/makefile' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/markdown' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/mathematica' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/matlab' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/maxima' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/mel' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/mercury' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/mipsasm' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/mizar' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/mojolicious' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/monkey' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/moonscript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/n1ql' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/nginx' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/nim' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/nimrod' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/nix' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/nsis' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/objectivec' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/ocaml' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/openscad' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/oxygene' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/parser3' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/perl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/pf' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/pgsql' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/php-template' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/php' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/plaintext' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/pony' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/powershell' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/processing' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/profile' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/prolog' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/properties' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/protobuf' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/puppet' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/purebasic' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/python-repl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/python' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/q' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/qml' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/r' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/reasonml' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/rib' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/roboconf' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/routeros' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/rsl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/ruby' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/ruleslanguage' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/rust' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/sas' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/scala' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/scheme' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/scilab' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/scss' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/shell' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/smali' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/smalltalk' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/sml' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/sqf' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/sql' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/stan' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/stata' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/step21' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/stylus' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/subunit' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/swift' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/taggerscript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/tap' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/tcl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/tex' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/thrift' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/tp' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/twig' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/typescript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/vala' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/vbnet' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/vbscript-html' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/vbscript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/verilog' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/vhdl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/vim' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/x86asm' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/xl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/xml' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/xquery' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/yaml' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/hljs/zephir' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/abap' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/abnf' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/actionscript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/ada' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/agda' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/al' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/antlr4' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/apacheconf' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/apl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/applescript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/aql' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/arduino' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/arff' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/asciidoc' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/asm6502' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/aspnet' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/autohotkey' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/autoit' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/bash' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/basic' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/batch' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/bbcode' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/bison' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/bnf' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/brainfuck' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/brightscript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/bro' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/c' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/cil' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/clike' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/clojure' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/cmake' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/coffeescript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/concurnas' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/core' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/cpp' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/crystal' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/csharp' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/csp' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/css-extras' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/css' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/cypher' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/d' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/dart' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/dax' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/dhall' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/diff' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/django' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/dns-zone-file' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/docker' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/ebnf' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/editorconfig' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/eiffel' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/ejs' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/elixir' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/elm' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/erb' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/erlang' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/etlua' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/excel-formula' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/factor' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/firestore-security-rules' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/flow' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/fortran' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/fsharp' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/ftl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/gcode' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/gdscript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/gedcom' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/gherkin' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/git' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/glsl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/gml' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/go' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/graphql' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/groovy' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/haml' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/handlebars' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/haskell' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/haxe' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/hcl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/hlsl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/hpkp' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/hsts' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/http' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/ichigojam' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/icon' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/iecst' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/ignore' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/inform7' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/ini' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/io' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/j' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/java' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/javadoc' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/javadoclike' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/javascript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/javastacktrace' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/jolie' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/jq' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/js-extras' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/js-templates' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/jsdoc' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/json' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/json5' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/jsonp' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/jsstacktrace' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/jsx' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/julia' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/keyman' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/kotlin' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/latex' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/latte' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/less' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/lilypond' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/liquid' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/lisp' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/livescript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/llvm' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/lolcode' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/lua' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/makefile' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/markdown' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/markup-templating' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/markup' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/matlab' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/mel' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/mizar' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/monkey' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/moonscript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/n1ql' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/n4js' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/nand2tetris-hdl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/nasm' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/neon' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/nginx' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/nim' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/nix' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/nsis' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/objectivec' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/ocaml' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/opencl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/oz' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/parigp' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/parser' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/pascal' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/pascaligo' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/pcaxis' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/peoplecode' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/perl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/php-extras' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/php' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/plsql' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/powerquery' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/powershell' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/processing' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/prolog' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/properties' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/protobuf' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/pug' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/puppet' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/pure' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/purebasic' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/python' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/q' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/qml' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/qore' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/r' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/racket' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/reason' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/regex' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/renpy' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/rest' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/rip' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/roboconf' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/robotframework' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/ruby' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/rust' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/sas' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/sass' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/scala' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/scheme' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/scss' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/shell-session' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/smali' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/smalltalk' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/smarty' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/solidity' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/solution-file' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/soy' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/sparql' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/splunk-spl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/sqf' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/sql' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/stylus' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/swift' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/t4-cs' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/t4-templating' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/t4-vb' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/tap' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/tcl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/textile' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/toml' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/tsx' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/tt2' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/turtle' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/twig' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/typescript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/unrealscript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/vala' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/vbnet' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/velocity' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/verilog' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/vhdl' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/vim' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/visual-basic' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/warpscript' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/wasm' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/wiki' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/xeora' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/xml-doc' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/xojo' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/xquery' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/yaml' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/yang' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/zig' {
    const language: any;
    export default language;
}
// cjs end
