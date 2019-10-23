import katexLib = require('katex');
import renderMathInElement, { RenderMathInElementOptions } from 'katex/dist/contrib/auto-render';
import katexReplaceWithTex from 'katex/contrib/copy-tex/katex2tex';

class KatexTest {
    constructor() {
        katexLib.render('My Latex String', document.createElement('div'));

        try {
            let options: katexLib.KatexOptions = {
                throwOnError: true,
            };
            let value: string = katexLib.renderToString('My Latex String', options);
        } catch (error) {
            if (error instanceof katexLib.ParseError) {
                //do something with this error
            }
        }

        const renderMathInElementOptions: RenderMathInElementOptions = {
            delimiters: [
                { left: '$$', right: '$$', display: true },
                { left: '\\[', right: '\\]', display: true },
                { left: '$', right: '$', display: false },
                { left: '\\(', right: '\\)', display: false },
            ],
            errorCallback(msg: string, err: Error): void {
                console.error(msg, err);
                //do something with this error
            },
        };
        const container = document.createElement('div');
        container.innerText = 'LaTeX string $c = \\pm\\sqrt{a^2 + b^2}$';
        renderMathInElement(container, renderMathInElementOptions);

        // testing katexReplaceWithTex
        const range = document.createRange();
        range.selectNode(container);
        const fragment = range.cloneContents();
        katexReplaceWithTex(fragment, {
            inline: ['$', '$'],
            display: ['$$', '$$'],
        }).textContent;
        katexReplaceWithTex(fragment, {
            inline: ['(', ')'],
            display: ['[', ']'],
        }).textContent;
        katexReplaceWithTex(fragment, {
            inline: ['$', '$'],
            display: ['[', ']'],
        }).textContent;
        katexReplaceWithTex(fragment, {
            inline: ['(', ')'],
            display: ['$$', '$$'],
        }).textContent;
    }
}
