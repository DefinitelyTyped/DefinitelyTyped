import React = require('react');

import { EmojiData } from '..';

export interface Props {
    onOver?(emoji: EmojiData, e: React.MouseEvent<HTMLElement>): void;
    onLeave?(emoji: EmojiData, e: React.MouseEvent<HTMLElement>): void;
    onClick?(emoji: EmojiData, e: React.MouseEvent<HTMLElement>): void;
    /** defaults to returning a png from unpkg.com-hosted emoji-datasource-${set} */
    backgroundImageFn?(set: 'apple'|'google'|'twitter'|'emojione'|'messenger'|'facebook', sheetSize: 16|20|32|64): string;
    native?: boolean;
    forceSize?: boolean;
    tooltip?: boolean;
    /** defaults to 1 */
    skin?: 1|2|3|4|5|6;
    /** defaults to 64 */
    sheetSize?: 16|20|32|64;
    /** defaults to 'apple' */
    set?: 'apple'|'google'|'twitter'|'emojione'|'messenger'|'facebook';
    size: number;
    emoji: string|EmojiData;
}

// tslint:disable-next-line strict-export-declare-modifiers
declare const Emoji: React.SFC<Props>;

export { Emoji as default };
