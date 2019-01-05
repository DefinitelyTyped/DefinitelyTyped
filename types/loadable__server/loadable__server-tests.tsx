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

// getLinkElements
{
    // Should return an array of React elements
    const elements: Array<React.ReactElement<{}>> = getLinkElements();
}

// getLinkTags
{
    // Should return an arary of strings
    const tags: string[] = getLinkTags();
}

// getScriptElements
{
    // Should return an array of React elements
    const elements: Array<React.ReactElement<{}>> = getScriptElements();
}

// getScriptTags
{
    // Should return an arary of strings
    const tags: string[] = getScriptTags();
}

// getStyleElements
{
    // Should return an array of React elements
    const elements: Array<React.ReactElement<{}>> = getStyleElements();
}

// getStyleTags
{
    // Should return an arary of strings
    const tags: string[] = getStyleTags();
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
