// Type definitions for markdown-draft-js 2.2
// Project: https://github.com/Rosey/markdown-draft-js#readme
// Definitions by: Yuri Drabik <https://github.com/yurist38>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { Entity, RawDraftContentState } from "draft-js";

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
    blockEntities?: BlockEntitiesParam | undefined;
    blockStyles?: {
        [key: string]: string;
    } | undefined;
    blockTypes?: BlockTypesParam | undefined;
    remarkableOptions?: {
        [key: string]: boolean | {};
    } | undefined;
    remarkablePlugins?: any[] | undefined;
    remarkablePreset?: string | undefined;
    preserveNewlines?: boolean | undefined;
}

export interface DraftToMarkdownOptions {
    entityItems?: {
        [key: string]: {
            open: (entity?: Entity) => string;
            close: (entity?: Entity) => string;
        };
    } | undefined;
    styleItems?: {
        [key: string]: {
            open: () => string;
            close: () => string;
        };
    } | undefined;
    preserveNewlines?: boolean | undefined;
    escapeMarkdownCharacters?: boolean | undefined;
}

export function markdownToDraft(markdown: string, options?: MarkdownToDraftOptions): RawDraftContentState;

export function draftToMarkdown(RawDraft: RawDraftContentState, options?: DraftToMarkdownOptions): string;
