// Type definitions for react-syntax-highlighter
// Project: https://github.com/conorhastings/react-syntax-highlighter
// Definitions by: Ivo Stratev <https://github.com/NoHomey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare module 'react-syntax-highlighter' {
    import SyntaxHighlighter from 'react-syntax-highlighter/dist/light';
    export default SyntaxHighlighter;
}

declare module 'react-syntax-highlighter/dist/light' {
    import * as React from 'react';

    export function registerLanguage(name: string, func: any): void;

    interface SyntaxHighlighterProps {
        language?: string;
        style?: any;
        customStyle?: any;
        codeTagProps?: HTMLElement;
        useInlineStyles?: boolean;
        showLineNumbers?: boolean;
        startingLineNumber?: number;
        lineNumberStyle?: any;
        [spread: string]: any;
    }

    export default class SyntaxHighlighter extends React.Component<SyntaxHighlighterProps> {

    }
}

declare module 'react-syntax-highlighter/dist/styles' {
    export { default as agate } from 'react-syntax-highlighter/dist/styles/agate';
    export { default as androidstudio } from 'react-syntax-highlighter/dist/styles/androidstudio';
    export { default as arduinoLight } from 'react-syntax-highlighter/dist/styles/arduino-light';
    export { default as arta } from 'react-syntax-highlighter/dist/styles/arta';
    export { default as ascetic } from 'react-syntax-highlighter/dist/styles/ascetic';
    export { default as atelierCaveDark } from 'react-syntax-highlighter/dist/styles/atelier-cave-dark';
    export { default as atelierCaveLight } from 'react-syntax-highlighter/dist/styles/atelier-cave-light';
    export { default as atelierDuneDark } from 'react-syntax-highlighter/dist/styles/atelier-dune-dark';
    export { default as atelierDuneLight } from 'react-syntax-highlighter/dist/styles/atelier-dune-light';
    export { default as atelierEstuaryDark } from 'react-syntax-highlighter/dist/styles/atelier-estuary-dark';
    export { default as atelierEstuaryLight } from 'react-syntax-highlighter/dist/styles/atelier-estuary-light';
    export { default as atelierForestDark } from 'react-syntax-highlighter/dist/styles/atelier-forest-dark';
    export { default as atelierForestLight } from 'react-syntax-highlighter/dist/styles/atelier-forest-light';
    export { default as atelierHeathDark } from 'react-syntax-highlighter/dist/styles/atelier-heath-dark';
    export { default as atelierHeathLight } from 'react-syntax-highlighter/dist/styles/atelier-heath-light';
    export { default as atelierLakesideDark } from 'react-syntax-highlighter/dist/styles/atelier-lakeside-dark';
    export { default as atelierLakesideLight } from 'react-syntax-highlighter/dist/styles/atelier-lakeside-light';
    export { default as atelierPlateauDark } from 'react-syntax-highlighter/dist/styles/atelier-plateau-dark';
    export { default as atelierPlateauLight } from 'react-syntax-highlighter/dist/styles/atelier-plateau-light';
    export { default as atelierSavannaDark } from 'react-syntax-highlighter/dist/styles/atelier-savanna-dark';
    export { default as atelierSavannaLight } from 'react-syntax-highlighter/dist/styles/atelier-savanna-light';
    export { default as atelierSeasideDark } from 'react-syntax-highlighter/dist/styles/atelier-seaside-dark';
    export { default as atelierSeasideLight } from 'react-syntax-highlighter/dist/styles/atelier-seaside-light';
    export { default as atelierSulphurpoolDark } from 'react-syntax-highlighter/dist/styles/atelier-sulphurpool-dark';
    export { default as atelierSulphurpoolLight } from 'react-syntax-highlighter/dist/styles/atelier-sulphurpool-light';
    export { default as atomOneDark } from 'react-syntax-highlighter/dist/styles/atom-one-dark';
    export { default as atomOneLight } from 'react-syntax-highlighter/dist/styles/atom-one-light';
    export { default as brownPaper } from 'react-syntax-highlighter/dist/styles/brown-paper';
    export { default as codepenEmbed } from 'react-syntax-highlighter/dist/styles/codepen-embed';
    export { default as colorBrewer } from 'react-syntax-highlighter/dist/styles/color-brewer';
    export { default as darcula } from 'react-syntax-highlighter/dist/styles/darcula';
    export { default as dark } from 'react-syntax-highlighter/dist/styles/dark';
    export { default as darkula } from 'react-syntax-highlighter/dist/styles/darkula';
    export { default as defaultStyle } from 'react-syntax-highlighter/dist/styles/default-style';
    export { default as docco } from 'react-syntax-highlighter/dist/styles/docco';
    export { default as dracula } from 'react-syntax-highlighter/dist/styles/dracula';
    export { default as far } from 'react-syntax-highlighter/dist/styles/far';
    export { default as foundation } from 'react-syntax-highlighter/dist/styles/foundation';
    export { default as githubGist } from 'react-syntax-highlighter/dist/styles/github-gist';
    export { default as github } from 'react-syntax-highlighter/dist/styles/github';
    export { default as googlecode } from 'react-syntax-highlighter/dist/styles/googlecode';
    export { default as grayscale } from 'react-syntax-highlighter/dist/styles/grayscale';
    export { default as gruvboxDark } from 'react-syntax-highlighter/dist/styles/gruvbox-dark';
    export { default as gruvboxLight } from 'react-syntax-highlighter/dist/styles/gruvbox-light';
    export { default as hopscotch } from 'react-syntax-highlighter/dist/styles/hopscotch';
    export { default as hybrid } from 'react-syntax-highlighter/dist/styles/hybrid';
    export { default as idea } from 'react-syntax-highlighter/dist/styles/idea';
    export { default as irBlack } from 'react-syntax-highlighter/dist/styles/ir-black';
    export { default as kimbieDark } from 'react-syntax-highlighter/dist/styles/kimbie.dark';
    export { default as kimbieLight } from 'react-syntax-highlighter/dist/styles/kimbie.light';
    export { default as magula } from 'react-syntax-highlighter/dist/styles/magula';
    export { default as monoBlue } from 'react-syntax-highlighter/dist/styles/mono-blue';
    export { default as monokaiSublime } from 'react-syntax-highlighter/dist/styles/monokai-sublime';
    export { default as monokai } from 'react-syntax-highlighter/dist/styles/monokai';
    export { default as obsidian } from 'react-syntax-highlighter/dist/styles/obsidian';
    export { default as ocean } from 'react-syntax-highlighter/dist/styles/ocean';
    export { default as paraisoDark } from 'react-syntax-highlighter/dist/styles/paraiso-dark';
    export { default as paraisoLight } from 'react-syntax-highlighter/dist/styles/paraiso-light';
    export { default as pojoaque } from 'react-syntax-highlighter/dist/styles/pojoaque';
    export { default as purebasic } from 'react-syntax-highlighter/dist/styles/purebasic';
    export { default as qtcreatorDark } from 'react-syntax-highlighter/dist/styles/qtcreator_dark';
    export { default as qtcreatorLight } from 'react-syntax-highlighter/dist/styles/qtcreator_light';
    export { default as railscasts } from 'react-syntax-highlighter/dist/styles/railscasts';
    export { default as rainbow } from 'react-syntax-highlighter/dist/styles/rainbow';
    export { default as schoolBook } from 'react-syntax-highlighter/dist/styles/school-book';
    export { default as solarizedDark } from 'react-syntax-highlighter/dist/styles/solarized-dark';
    export { default as solarizedLight } from 'react-syntax-highlighter/dist/styles/solarized-light';
    export { default as sunburst } from 'react-syntax-highlighter/dist/styles/sunburst';
    export { default as tomorrowNightBlue } from 'react-syntax-highlighter/dist/styles/tomorrow-night-blue';
    export { default as tomorrowNightBright } from 'react-syntax-highlighter/dist/styles/tomorrow-night-bright';
    export { default as tomorrowNightEighties } from 'react-syntax-highlighter/dist/styles/tomorrow-night-eighties';
    export { default as tomorrowNight } from 'react-syntax-highlighter/dist/styles/tomorrow-night';
    export { default as tomorrow } from 'react-syntax-highlighter/dist/styles/tomorrow';
    export { default as vs } from 'react-syntax-highlighter/dist/styles/vs';
    export { default as xcode } from 'react-syntax-highlighter/dist/styles/xcode';
    export { default as xt256 } from 'react-syntax-highlighter/dist/styles/xt256';
    export { default as zenburn } from 'react-syntax-highlighter/dist/styles/zenburn';
}

declare module 'react-syntax-highlighter/dist/styles/agate' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/androidstudio' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/arduino-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/arta' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/ascetic' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/atelier-cave-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/atelier-cave-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/atelier-dune-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/atelier-dune-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/atelier-estuary-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/atelier-estuary-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/atelier-forest-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/atelier-forest-light' {
    const style: any;
    export default style;
}


declare module 'react-syntax-highlighter/dist/styles/atelier-heath-dark' {
    const style: any;
    export default style;
}


declare module 'react-syntax-highlighter/dist/styles/atelier-heath-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/atelier-lakeside-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/atelier-lakeside-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/atelier-plateau-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/atelier-plateau-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/atelier-savanna-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/atelier-savanna-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/atelier-seaside-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/atelier-seaside-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/atelier-sulphurpool-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/atelier-sulphurpool-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/atom-one-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/atom-one-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/brown-paper' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/codepen-embed' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/color-brewer' {
    const style: any;
    export default style;
}


declare module 'react-syntax-highlighter/dist/styles/darcula' {
    const style: any;
    export default style;
}


declare module 'react-syntax-highlighter/dist/styles/dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/darkula' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/default-style' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/docco' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/dracula' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/far' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/foundation' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/github-gist' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/github' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/googlecode' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/grayscale' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/gruvbox-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/gruvbox-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/hopscotch' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/hybrid' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/idea' {
    const style: any;
    export default style;
}


declare module 'react-syntax-highlighter/dist/styles/ir-black' {
    const style: any;
    export default style;
}


declare module 'react-syntax-highlighter/dist/styles/kimbie.dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/kimbie.light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/magula' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/mono-blue' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/monokai-sublime' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/monokai' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/obsidian' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/ocean' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/paraiso-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/paraiso-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/pojoaque' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/purebasic' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/qtcreator_dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/qtcreator_light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/railscasts' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/rainbow' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/school-book' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/solarized-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/solarized-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/sunburst' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/tomorrow-night-blue' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/tomorrow-night-bright' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/tomorrow-night-eighties' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/tomorrow-night' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/tomorrow' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/vs' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/xcode' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/xt256' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/dist/styles/zenburn' {
    const style: any;
    export default style;
}
