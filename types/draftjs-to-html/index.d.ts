import { RawDraftContentState } from "draft-js";

interface HashtagConfig {
    trigger?: string | undefined;
    separator?: string | undefined;
}

declare function draftToHtml(
    editorContent: RawDraftContentState,
    hashtagConfig?: HashtagConfig,
    directional?: boolean,
    customEntityTransform?: (...args: any[]) => any,
): string;

export = draftToHtml;
