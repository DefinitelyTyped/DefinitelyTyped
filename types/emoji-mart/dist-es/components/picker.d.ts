import React = require('react');

import { EmojiData, EmojiSkin } from '..';

import { Category, Emoji, EmojiProps, BackgroundImageFn, EmojiSet, EmojiSheetSize } from '.';

// tslint:disable-next-line interface-name
export interface I18n {
    search: string;
    categories: Record<'search'|'recent'|'people'|'nature'|'foods'|'activity'|'places'|'objects'|'symbols'|'flags'|'custom', string>;
    notfound: string;
}

export type PartialI18n = Partial<Pick<I18n, 'search'|'notfound'> & { categories: Partial<I18n['categories']>}>;

export interface CustomEmoji {
    // id is overridden by short_names[0]
    name: string;
    /** Must contain at least one name. The first name is used as the unique id. */
    short_names: string[];
    emoticons?: string[];
    keywords?: string[];
    imageUrl: string;
}

export interface Props {
    /** NOTE: default is not preventable */
    onClick?(emoji: EmojiData, e: React.MouseEvent<HTMLElement>): void;
    perLine?: number;
    emojiSize?: number;
    i18n?: PartialI18n;
    style?: React.CSSProperties;
    title?: string;
    emoji?: string;
    color?: string;
    set?: EmojiSet;
    skin?: EmojiSkin;
    native?: boolean;
    backgroundImageFn?: BackgroundImageFn;
    sheetSize?: EmojiSheetSize;
    emojisToShowFilter?(emoji: EmojiData): boolean;
    showPreview?: boolean;
    emojiTooltip?: boolean;
    include?: string[];
    exclude?: string[];
    recent?: string[];
    autoFocus?: boolean;
    /** NOTE: custom emoji are copied into a singleton object on every new mount */
    custom: CustomEmoji[];
}

export default class Picker extends React.PureComponent<Props> {
    // everything inside it is supposed to be private
}
