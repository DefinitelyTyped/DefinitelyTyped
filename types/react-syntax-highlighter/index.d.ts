// Type definitions for react-syntax-highlighter
// Project: https://github.com/conorhastings/react-syntax-highlighter
// Definitions by: Ivo Stratev <https://github.com/NoHomey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

declare module 'react-syntax-highlighter' {
    import SyntaxHighlighter from 'react-syntax-highlighter/light';
    export default SyntaxHighlighter;
}

declare module 'react-syntax-highlighter/light' {
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

declare module 'react-syntax-highlighter/styles/hljs' {
    export { default as agate } from 'react-syntax-highlighter/styles/hljs/agate';
    export { default as androidstudio } from 'react-syntax-highlighter/styles/hljs/androidstudio';
    export { default as arduinoLight } from 'react-syntax-highlighter/styles/hljs/arduino-light';
    export { default as arta } from 'react-syntax-highlighter/styles/hljs/arta';
    export { default as ascetic } from 'react-syntax-highlighter/styles/hljs/ascetic';
    export { default as atelierCaveDark } from 'react-syntax-highlighter/styles/hljs/atelier-cave-dark';
    export { default as atelierCaveLight } from 'react-syntax-highlighter/styles/hljs/atelier-cave-light';
    export { default as atelierDuneDark } from 'react-syntax-highlighter/styles/hljs/atelier-dune-dark';
    export { default as atelierDuneLight } from 'react-syntax-highlighter/styles/hljs/atelier-dune-light';
    export { default as atelierEstuaryDark } from 'react-syntax-highlighter/styles/hljs/atelier-estuary-dark';
    export { default as atelierEstuaryLight } from 'react-syntax-highlighter/styles/hljs/atelier-estuary-light';
    export { default as atelierForestDark } from 'react-syntax-highlighter/styles/hljs/atelier-forest-dark';
    export { default as atelierForestLight } from 'react-syntax-highlighter/styles/hljs/atelier-forest-light';
    export { default as atelierHeathDark } from 'react-syntax-highlighter/styles/hljs/atelier-heath-dark';
    export { default as atelierHeathLight } from 'react-syntax-highlighter/styles/hljs/atelier-heath-light';
    export { default as atelierLakesideDark } from 'react-syntax-highlighter/styles/hljs/atelier-lakeside-dark';
    export { default as atelierLakesideLight } from 'react-syntax-highlighter/styles/hljs/atelier-lakeside-light';
    export { default as atelierPlateauDark } from 'react-syntax-highlighter/styles/hljs/atelier-plateau-dark';
    export { default as atelierPlateauLight } from 'react-syntax-highlighter/styles/hljs/atelier-plateau-light';
    export { default as atelierSavannaDark } from 'react-syntax-highlighter/styles/hljs/atelier-savanna-dark';
    export { default as atelierSavannaLight } from 'react-syntax-highlighter/styles/hljs/atelier-savanna-light';
    export { default as atelierSeasideDark } from 'react-syntax-highlighter/styles/hljs/atelier-seaside-dark';
    export { default as atelierSeasideLight } from 'react-syntax-highlighter/styles/hljs/atelier-seaside-light';
    export { default as atelierSulphurpoolDark } from 'react-syntax-highlighter/styles/hljs/atelier-sulphurpool-dark';
    export { default as atelierSulphurpoolLight } from 'react-syntax-highlighter/styles/hljs/atelier-sulphurpool-light';
    export { default as atomOneDark } from 'react-syntax-highlighter/styles/hljs/atom-one-dark';
    export { default as atomOneLight } from 'react-syntax-highlighter/styles/hljs/atom-one-light';
    export { default as brownPaper } from 'react-syntax-highlighter/styles/hljs/brown-paper';
    export { default as codepenEmbed } from 'react-syntax-highlighter/styles/hljs/codepen-embed';
    export { default as colorBrewer } from 'react-syntax-highlighter/styles/hljs/color-brewer';
    export { default as darcula } from 'react-syntax-highlighter/styles/hljs/darcula';
    export { default as dark } from 'react-syntax-highlighter/styles/hljs/dark';
    export { default as darkula } from 'react-syntax-highlighter/styles/hljs/darkula';
    export { default as defaultStyle } from 'react-syntax-highlighter/styles/hljs/default-style';
    export { default as docco } from 'react-syntax-highlighter/styles/hljs/docco';
    export { default as dracula } from 'react-syntax-highlighter/styles/hljs/dracula';
    export { default as far } from 'react-syntax-highlighter/styles/hljs/far';
    export { default as foundation } from 'react-syntax-highlighter/styles/hljs/foundation';
    export { default as githubGist } from 'react-syntax-highlighter/styles/hljs/github-gist';
    export { default as github } from 'react-syntax-highlighter/styles/hljs/github';
    export { default as googlecode } from 'react-syntax-highlighter/styles/hljs/googlecode';
    export { default as grayscale } from 'react-syntax-highlighter/styles/hljs/grayscale';
    export { default as gruvboxDark } from 'react-syntax-highlighter/styles/hljs/gruvbox-dark';
    export { default as gruvboxLight } from 'react-syntax-highlighter/styles/hljs/gruvbox-light';
    export { default as hopscotch } from 'react-syntax-highlighter/styles/hljs/hopscotch';
    export { default as hybrid } from 'react-syntax-highlighter/styles/hljs/hybrid';
    export { default as idea } from 'react-syntax-highlighter/styles/hljs/idea';
    export { default as irBlack } from 'react-syntax-highlighter/styles/hljs/ir-black';
    export { default as kimbieDark } from 'react-syntax-highlighter/styles/hljs/kimbie.dark';
    export { default as kimbieLight } from 'react-syntax-highlighter/styles/hljs/kimbie.light';
    export { default as magula } from 'react-syntax-highlighter/styles/hljs/magula';
    export { default as monoBlue } from 'react-syntax-highlighter/styles/hljs/mono-blue';
    export { default as monokaiSublime } from 'react-syntax-highlighter/styles/hljs/monokai-sublime';
    export { default as monokai } from 'react-syntax-highlighter/styles/hljs/monokai';
    export { default as obsidian } from 'react-syntax-highlighter/styles/hljs/obsidian';
    export { default as ocean } from 'react-syntax-highlighter/styles/hljs/ocean';
    export { default as paraisoDark } from 'react-syntax-highlighter/styles/hljs/paraiso-dark';
    export { default as paraisoLight } from 'react-syntax-highlighter/styles/hljs/paraiso-light';
    export { default as pojoaque } from 'react-syntax-highlighter/styles/hljs/pojoaque';
    export { default as purebasic } from 'react-syntax-highlighter/styles/hljs/purebasic';
    export { default as qtcreatorDark } from 'react-syntax-highlighter/styles/hljs/qtcreator_dark';
    export { default as qtcreatorLight } from 'react-syntax-highlighter/styles/hljs/qtcreator_light';
    export { default as railscasts } from 'react-syntax-highlighter/styles/hljs/railscasts';
    export { default as rainbow } from 'react-syntax-highlighter/styles/hljs/rainbow';
    export { default as routeros } from 'react-syntax-highlighter/styles/hljs/routeros';
    export { default as schoolBook } from 'react-syntax-highlighter/styles/hljs/school-book';
    export { default as solarizedDark } from 'react-syntax-highlighter/styles/hljs/solarized-dark';
    export { default as solarizedLight } from 'react-syntax-highlighter/styles/hljs/solarized-light';
    export { default as sunburst } from 'react-syntax-highlighter/styles/hljs/sunburst';
    export { default as tomorrowNightBlue } from 'react-syntax-highlighter/styles/hljs/tomorrow-night-blue';
    export { default as tomorrowNightBright } from 'react-syntax-highlighter/styles/hljs/tomorrow-night-bright';
    export { default as tomorrowNightEighties } from 'react-syntax-highlighter/styles/hljs/tomorrow-night-eighties';
    export { default as tomorrowNight } from 'react-syntax-highlighter/styles/hljs/tomorrow-night';
    export { default as tomorrow } from 'react-syntax-highlighter/styles/hljs/tomorrow';
    export { default as vs } from 'react-syntax-highlighter/styles/hljs/vs';
    export { default as vs2015 } from 'react-syntax-highlighter/styles/hljs/vs2015';
    export { default as xcode } from 'react-syntax-highlighter/styles/hljs/xcode';
    export { default as xt256 } from 'react-syntax-highlighter/styles/hljs/xt256';
    export { default as zenburn } from 'react-syntax-highlighter/styles/hljs/zenburn';
}

declare module 'react-syntax-highlighter/styles/hljs/agate' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/androidstudio' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/arduino-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/arta' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/ascetic' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/atelier-cave-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/atelier-cave-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/atelier-dune-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/atelier-dune-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/atelier-estuary-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/atelier-estuary-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/atelier-forest-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/atelier-forest-light' {
    const style: any;
    export default style;
}


declare module 'react-syntax-highlighter/styles/hljs/atelier-heath-dark' {
    const style: any;
    export default style;
}


declare module 'react-syntax-highlighter/styles/hljs/atelier-heath-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/atelier-lakeside-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/atelier-lakeside-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/atelier-plateau-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/atelier-plateau-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/atelier-savanna-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/atelier-savanna-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/atelier-seaside-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/atelier-seaside-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/atelier-sulphurpool-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/atelier-sulphurpool-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/atom-one-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/atom-one-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/brown-paper' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/codepen-embed' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/color-brewer' {
    const style: any;
    export default style;
}


declare module 'react-syntax-highlighter/styles/hljs/darcula' {
    const style: any;
    export default style;
}


declare module 'react-syntax-highlighter/styles/hljs/dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/darkula' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/default-style' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/docco' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/dracula' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/far' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/foundation' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/github-gist' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/github' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/googlecode' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/grayscale' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/gruvbox-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/gruvbox-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/hopscotch' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/hybrid' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/idea' {
    const style: any;
    export default style;
}


declare module 'react-syntax-highlighter/styles/hljs/ir-black' {
    const style: any;
    export default style;
}


declare module 'react-syntax-highlighter/styles/hljs/kimbie.dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/kimbie.light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/magula' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/mono-blue' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/monokai-sublime' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/monokai' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/obsidian' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/ocean' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/paraiso-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/paraiso-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/pojoaque' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/purebasic' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/qtcreator_dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/qtcreator_light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/railscasts' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/rainbow' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/routeros' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/school-book' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/solarized-dark' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/solarized-light' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/sunburst' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/tomorrow-night-blue' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/tomorrow-night-bright' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/tomorrow-night-eighties' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/tomorrow-night' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/tomorrow' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/vs' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/vs2015' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/xcode' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/xt256' {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/hljs/zenburn' {
    const style: any;
    export default style;
}
declare module 'react-syntax-highlighter/styles/prism' {
    export { default as atomDark } from 'react-syntax-highlighter/styles/prism/atom-dark';
    export { default as base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism/base16-ateliersulphurpool.light';
    export { default as cb } from 'react-syntax-highlighter/styles/prism/cb';
    export { default as coy } from 'react-syntax-highlighter/styles/prism/coy';
    export { default as darcula } from 'react-syntax-highlighter/styles/prism/darcula';
    export { default as dark } from 'react-syntax-highlighter/styles/prism/dark';
    export { default as duotoneDark } from 'react-syntax-highlighter/styles/prism/duotone-dark';
    export { default as duotoneEarth } from 'react-syntax-highlighter/styles/prism/duotone-earth';
    export { default as duotoneForest } from 'react-syntax-highlighter/styles/prism/duotone-forest';
    export { default as duotoneLight } from 'react-syntax-highlighter/styles/prism/duotone-light';
    export { default as duotoneSea } from 'react-syntax-highlighter/styles/prism/duotone-sea';
    export { default as duotoneSpace } from 'react-syntax-highlighter/styles/prism/duotone-space';
    export { default as funky } from 'react-syntax-highlighter/styles/prism/funky';
    export { default as ghcolors } from 'react-syntax-highlighter/styles/prism/ghcolors';
    export { default as hopscotch } from 'react-syntax-highlighter/styles/prism/hopscotch';
    export { default as okaidia } from 'react-syntax-highlighter/styles/prism/okaidia';
    export { default as pojoaque } from 'react-syntax-highlighter/styles/prism/pojoaque';
    export { default as prism } from 'react-syntax-highlighter/styles/prism/prism';
    export { default as solarizedlight } from 'react-syntax-highlighter/styles/prism/solarizedlight';
    export { default as tomorrow } from 'react-syntax-highlighter/styles/prism/tomorrow';
    export { default as twilight } from 'react-syntax-highlighter/styles/prism/twilight';
    export { default as vs } from 'react-syntax-highlighter/styles/prism/vs';
    export { default as xonokai } from 'react-syntax-highlighter/styles/prism/xonokai';
}

declare module 'react-syntax-highlighter/styles/prism/atom-dark'  {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/prism/base16-ateliersulphurpool.light'  {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/prism/cb'  {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/prism/coy'  {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/prism/darcula'  {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/prism/dark'  {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/prism/duotone-dark'  {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/prism/duotone-earth'  {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/prism/duotone-forest'  {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/prism/duotone-light'  {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/prism/duotone-sea'  {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/prism/duotone-space'  {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/prism/funky'  {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/prism/ghcolors'  {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/prism/hopscotch'  {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/prism/okaidia'  {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/prism/pojoaque'  {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/prism/prism'  {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/prism/solarizedlight'  {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/prism/tomorrow'  {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/prism/twilight'  {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/prism/vs'  {
    const style: any;
    export default style;
}

declare module 'react-syntax-highlighter/styles/prism/xonokai'   {
    const style: any;
    export default style;
}

