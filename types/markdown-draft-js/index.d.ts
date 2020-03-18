// Type definitions for markdown-draft-js 2.2
// Project: https://github.com/Rosey/markdown-draft-js#readme
// Definitions by: Yuri Drabik <https://github.com/yurist38>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { RawDraftContentState } from 'draft-js';

export function markdownToDraft(markdown: string): RawDraftContentState;

export function draftToMarkdown(RawDraft: RawDraftContentState): string;
