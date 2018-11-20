import React = require('react');

import { EmojiData, EmojiSkin, CustomEmoji } from './emoji-index/nimble-emoji-index';

export type BackgroundImageFn = (set: EmojiSet, sheetSize: EmojiSheetSize) => string;
export type EmojiSet = 'apple' | 'google' | 'twitter' | 'emojione' | 'messenger' | 'facebook';
export type EmojiSheetSize = 16 | 20 | 32 | 64;

export interface EmojiProps {
    onOver?(emoji: EmojiData, e: React.MouseEvent<HTMLElement>): void;
    onLeave?(emoji: EmojiData, e: React.MouseEvent<HTMLElement>): void;
    onClick?(emoji: EmojiData, e: React.MouseEvent<HTMLElement>): void;
    fallback?(emoji: EmojiData, props: EmojiProps): React.Component;
    /** defaults to returning a png from unpkg.com-hosted emoji-datasource-${set} */
    backgroundImageFn?: BackgroundImageFn;
    native?: boolean;
    forceSize?: boolean;
    tooltip?: boolean;
    /** defaults to 1 */
    skin?: EmojiSkin;
    /** defaults to 64 */
    sheetSize?: EmojiSheetSize;
    /** defaults to 52 */
    sheetColumns?: number;
    /** defaults to 52 */
    sheetRows?: number;
    /** defaults to 'apple' */
    set?: EmojiSet;
    size: number;
    emoji: string | EmojiData;
    html?: boolean;
    /** data is omitted here as it should be used for NimbleEmoji only - not emoji */
}

export type CategoryName = 'search' | 'recent' | 'people' | 'nature' | 'foods' | 'activity' | 'places' | 'objects' | 'symbols' | 'flags' | 'custom';

// tslint:disable-next-line interface-name
export interface I18n {
    search: string;
    categories: Record<CategoryName, string>;
    notfound: string;
    skintext: string;
}

export type PartialI18n = Partial<Pick<I18n, 'search' | 'notfound'> & { categories: Partial<I18n['categories']> }>;

export interface CustomIcons {
    categories: Record<CategoryName, () => React.Component>;
}

export interface PickerProps {
    /** NOTE: default is not preventable */
    onClick?(emoji: EmojiData, e: React.MouseEvent<HTMLElement>): void;
    onSelect?(emoji: EmojiData): void;
    onSkinChange?(skin: EmojiSkin): void;
    perLine?: number;
    emojiSize?: number;
    i18n?: PartialI18n;
    style?: React.CSSProperties;
    title?: string;
    emoji?: string;
    color?: string;
    set?: EmojiSet;
    skin?: EmojiSkin;
    defaultSkin?: EmojiSkin;
    native?: boolean;
    backgroundImageFn?: BackgroundImageFn;
    sheetSize?: EmojiSheetSize;
    emojisToShowFilter?(emoji: EmojiData): boolean;
    showPreview?: boolean;
    showSkinTones?: boolean;
    emojiTooltip?: boolean;
    include?: CategoryName[];
    exclude?: CategoryName[];
    recent?: string[];
    autoFocus?: boolean;
    /** NOTE: custom emoji are copied into a singleton object on every new mount */
    custom?: CustomEmoji[];
    skinEmoji?: string;
    notFound?(): React.Component;
    notFoundEmoji?: string;
    icons?: CustomIcons;
}
