import * as React from 'react';
import css from 'styled-jsx/css';
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

const stylesChildren = flushToReact();
const jsxToRender = (
    <head>{ stylesChildren }</head>
);

const stylesAsString: string = flushToHTML();
const html = `
    <head>${stylesAsString}</head>
`;
