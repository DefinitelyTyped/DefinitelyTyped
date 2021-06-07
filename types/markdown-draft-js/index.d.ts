// Type definitions for markdown-draft-js 2.2
// Project: https://github.com/Rosey/markdown-draft-js#readme
// Definitions by: Yuri Drabik <https://github.com/yurist38>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { RawDraftContentState, Entity } from 'draft-js';

export interface BlockEntitiesParam {
    [key: string]: (item?: { [key: string]: any }) => Entity;
}

export interface BlockTypesParam {
    [key: string]: (item?: {
        [key: string]: any;
    }) => {
        [key: string]: any;
    };
}

export interface MarkdownToDraftOptions {
    blockEntities?: BlockEntitiesParam;
    blockStyles?: {
        [key: string]: string;
    };
    blockTypes?: BlockTypesParam;
    remarkableOptions?: {
        [key: string]: boolean | {};
    };
    remarkablePlugins?: any[];
    remarkablePreset?: string;
    preserveNewlines?: boolean;
}

export interface DraftToMarkdownOptions {
    entityItems?: {
        [key: string]: {
            open: (entity?: Entity) => string;
            close: (entity?: Entity) => string;
        };
    };
    styleItems?: {
        [key: string]: {
            open: () => string;
            close: () => string;
        };
    };
    preserveNewlines?: boolean;
}

export function markdownToDraft(markdown: string, options?: MarkdownToDraftOptions): RawDraftContentState;

export function draftToMarkdown(RawDraft: RawDraftContentState, options?: DraftToMarkdownOptions): string;
