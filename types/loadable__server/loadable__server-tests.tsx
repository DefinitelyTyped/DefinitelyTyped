import * as React from 'react';
import { ChunkExtractor } from '@loadable/server';

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
	requireEntrypoint
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

// getLinkElements
{
    // Should return an array of React elements
    const elements: Array<React.ReactElement<{}>> = getLinkElements();
    const elementsWithAttrs: Array<React.ReactElement<{}>> = getLinkElements(
        attributes
    );
}

// getLinkTags
{
    // Should return a string
    const tags: string = getLinkTags();
    const tagsWithAttrs: string = getLinkTags(attributes);
}

// getScriptElements
{
    // Should return an array of React elements
    const elements: Array<React.ReactElement<{}>> = getScriptElements();
    const elementsWithAttrs: Array<React.ReactElement<{}>> = getScriptElements(
        attributes
    );
}

// getScriptTags
{
    // Should return a string
    const tags: string = getScriptTags();
    const tagsWithAttrs: string = getScriptTags(attributes);
}

// getStyleElements
{
    // Should return an array of React elements
    const elements: Array<React.ReactElement<{}>> = getStyleElements();
    const elementsWithAttrs: Array<React.ReactElement<{}>> = getStyleElements(
        attributes
    );
}

// getStyleTags
{
    // Should return a string
    const tags: string = getStyleTags();
    const tagsWithAttrs: string = getStyleTags(attributes);
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
