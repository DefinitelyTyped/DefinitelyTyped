import React = require('react');

import { EmojiData, EmojiSkin } from '..';

export type BackgroundImageFn = (set: EmojiSet, sheetSize: EmojiSheetSize) => string;
export type EmojiSet = 'apple'|'google'|'twitter'|'emojione'|'messenger'|'facebook';
export type EmojiSheetSize = 16|20|32|64;

export interface Props {
    onOver?(emoji: EmojiData, e: React.MouseEvent<HTMLElement>): void;
    onLeave?(emoji: EmojiData, e: React.MouseEvent<HTMLElement>): void;
    onClick?(emoji: EmojiData, e: React.MouseEvent<HTMLElement>): void;
    /** defaults to returning a png from unpkg.com-hosted emoji-datasource-${set} */
    backgroundImageFn?: BackgroundImageFn;
    native?: boolean;
    forceSize?: boolean;
    tooltip?: boolean;
    /** defaults to 1 */
    skin?: EmojiSkin;
    /** defaults to 64 */
    sheetSize?: EmojiSheetSize;
    /** defaults to 'apple' */
    set?: EmojiSet;
    size: number;
    emoji: string|EmojiData;
}

// tslint:disable-next-line strict-export-declare-modifiers
declare const Emoji: React.SFC<Props>;

export { Emoji as default };
