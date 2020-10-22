import * as React from 'react';
import * as css from 'styled-jsx/css';
import flushToReact, { flushToHTML } from 'styled-jsx/server';

const styled = (
    <div>
        <style jsx>{`
            color: rebeccapurple;
        `}</style>
    </div>
);

const styledGlobal = (
    <div>
        <style jsx global>{`
            color: rebeccapurple;
        `}</style>
    </div>
);

const buttonColor = 'red';
const separatedCSS = css`button { color: ${buttonColor}; }`;
const withSeparatedCSS = (
    <div>
        <style jsx>{separatedCSS}</style>
    </div>
);

const globalCSS = css.global`body { margin: 0; }`;
const withGlobalCSS = (
    <div>
        <style jsx global>{globalCSS}</style>
    </div>
);

const resolvedCSS = css.resolve`a { color: green; }`;
const withResolvedCSS = (
    <div>
        <button className={resolvedCSS.className}>About</button>
        {resolvedCSS.styles}
    </div>
);

const dynamicResolvedCSS = css.resolve`a { color: ${buttonColor}; }`;
const withDynamicResolvedCSS = (
    <div>
        <button className={dynamicResolvedCSS.className}>About</button>
        {dynamicResolvedCSS.styles}
    </div>
);

const stylesChildren = flushToReact();
const jsxToRender = (
    <head>{ stylesChildren }</head>
);

const stylesAsString: string = flushToHTML();
const html = `
    <head>${stylesAsString}</head>
`;
