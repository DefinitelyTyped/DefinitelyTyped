import * as React from 'react';
import { ChunkExtractor, AttrFn } from '@loadable/server';

// Should be satisfied by `stats` or `statsFile`
new ChunkExtractor({ stats: {} });
new ChunkExtractor({ statsFile: './path/to/stats' });

const {
	collectChunks,
	getLinkElements,
	getLinkTags,
	getScriptElements,
	getScriptTags,
	getStyleElements,
	getStyleTags,
    requireEntrypoint,
    getInlineStyleTags,
    getInlineStyleElements,
    getCssString
} = new ChunkExtractor({ stats: {} });

// collectChunks
{
    // Should accept jsx as first argument
    collectChunks(<div>Test</div>);

    // Should return jsx
    const jsx: JSX.Element = collectChunks(<div>Test</div>);
}

// Some example attributes for get functions.
const attributes = {
    type: "module",
    "data-type": "loadable"
};

// An attribute function for get functions.
const attrFn: AttrFn = (chunk) => {
    return {
        chunk: chunk.chunk,
        filename: chunk.filename,
        linkType: chunk.linkType,
        path: chunk.path,
        scriptType: chunk.scriptType,
        type: chunk.type,
        url: chunk.url
    };
};

// getLinkElements
{
    // Should return an array of React elements
    const elements: Array<React.ReactElement<{}>> = getLinkElements();
    const elementsWithAttrs: Array<React.ReactElement<{}>> = getLinkElements(
        attributes
    );
    const elementsWithAttrFn: Array<React.ReactElement<{}>> = getLinkElements(
        attrFn
    );
}

// getLinkTags
{
    // Should return a string
    const tags: string = getLinkTags();
    const tagsWithAttrs: string = getLinkTags(attributes);
    const tagsWithAttrFn: string = getLinkTags(attrFn);
}

// getScriptElements
{
    // Should return an array of React elements
    const elements: Array<React.ReactElement<{}>> = getScriptElements();
    const elementsWithAttrs: Array<React.ReactElement<{}>> = getScriptElements(
        attributes
    );
    const elementsWithAttrFn: Array<React.ReactElement<{}>> = getScriptElements(
        attrFn
    );
}

// getScriptTags
{
    // Should return a string
    const tags: string = getScriptTags();
    const tagsWithAttrs: string = getScriptTags(attributes);
    const tagsWithAttrFn: string = getScriptTags(attrFn);
}

// getStyleElements
{
    // Should return an array of React elements
    const elements: Array<React.ReactElement<{}>> = getStyleElements();
    const elementsWithAttrs: Array<React.ReactElement<{}>> = getStyleElements(
        attributes
    );
    const elementsWithAttrFn: Array<React.ReactElement<{}>> = getStyleElements(
        attrFn
    );
}

// getStyleTags
{
    // Should return a string
    const tags: string = getStyleTags();
    const tagsWithAttrs: string = getStyleTags(attributes);
    const tagsWithAttrFn: string = getStyleTags(attrFn);
}

// getInlineStyleTags
{
    // Should return a promise of inline style links as a string.
    const elements: Promise<string> = getInlineStyleTags();
    const elementsWithAttrs: Promise<string> = getInlineStyleTags(
        attributes
    );
    const elementsWithAttrFn: Promise<string> = getInlineStyleTags(
        attrFn
    );
}

// getInlineStyleElements
{
    // Should return a promise with an array of React elements
    const elements: Promise<Array<React.ReactElement<{}>>> = getInlineStyleElements();
    const elementsWithAttrs: Promise<Array<React.ReactElement<{}>>> = getInlineStyleElements(
        attributes
    );
    const elementsWithAttrFn: Promise<Array<React.ReactElement<{}>>> = getInlineStyleElements(
        attrFn
    );
}

// getCssString
{
    // Should return a promise with string
    const elements: Promise<string> = getCssString();
}

// requireEntrypoint
{
    // Should work without params
    requireEntrypoint();

    // Should accept string
    requireEntrypoint('main');

    // Should return component on default property
    const entry: { default: React.ComponentType } = requireEntrypoint();
}
