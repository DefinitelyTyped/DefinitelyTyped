// Type definitions for @storybook/addon-notes 4.0
// Project: https://github.com/storybooks/storybook
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

export function withNotes(options?: WithNotesOptions): StoryDecorator;
export function withMarkdownNotes(markdown: string, options?: MarkedOptions): StoryDecorator;
