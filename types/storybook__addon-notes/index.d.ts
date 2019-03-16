// Type definitions for @storybook/addon-notes 4.0
// Project: https://github.com/storybooks/storybook, https://github.com/storybooks/storybook/tree/master/addons/notes
// Definitions by: Joscha Feth <https://github.com/joscha>
//                 A.MacLeay <https://github.com/amacleay>
//                 Michael Loughry <https://github.com/MLoughry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import * as React from 'react';
import { RenderFunction, StoryDecorator } from '@storybook/react';
import { MarkedOptions } from 'marked';

export type WithNotesOptions = string | {
    text: string;
} | {
    markdown: string;
    markdownOptions?: MarkedOptions;
};

// It would be preferable to infer the argument types, but that requires TS v 3.1
// export function withNotes(...args: StoryDecorator extends (...a: infer A) => any ? A : never): ReturnType<StoryDecorator>;
export function withNotes(story: RenderFunction, context: { kind: string, story: string }): ReturnType<StoryDecorator>;
// Less-preferred but still supported:
export function withNotes(options?: WithNotesOptions): StoryDecorator;
export function withMarkdownNotes(markdown: string, options?: MarkedOptions): StoryDecorator;
