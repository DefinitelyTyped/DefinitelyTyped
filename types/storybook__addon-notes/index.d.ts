// Type definitions for @storybook/addon-notes 3.3
// Project: https://github.com/storybooks/storybook
// Definitions by: Joscha Feth <https://github.com/joscha>
//                 A.MacLeay <https://github.com/amacleay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { RenderFunction } from '@storybook/react';

export function withNotes(textOrOptions: string | object): (getStory: RenderFunction) => RenderFunction;
export function withMarkdownNotes(text: string): (getStory: RenderFunction) => RenderFunction;

export interface WithNotesProps extends React.HTMLProps<HTMLDivElement> {
    notes?: string;
}

export const WithNotes: React.StatelessComponent<WithNotesProps>;
