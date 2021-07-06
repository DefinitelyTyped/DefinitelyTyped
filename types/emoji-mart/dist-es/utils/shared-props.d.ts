import React = require('react');

import { EmojiData, EmojiSkin, CustomEmoji } from './emoji-index/nimble-emoji-index';

export type BackgroundImageFn = (set: EmojiSet, sheetSize: EmojiSheetSize) => string;
export type EmojiSet = 'apple' | 'google' | 'twitter' | 'emojione' | 'messenger' | 'facebook';
export type EmojiSheetSize = 16 | 20 | 32 | 64;

export interface EmojiProps {
    onOver?(emoji: EmojiData, e: React.MouseEvent<HTMLElement>): void;
    onLeave?(emoji: EmojiData, e: React.MouseEvent<HTMLElement>): void;
    onClick?(emoji: EmojiData, e: React.MouseEvent<HTMLElement>): void;
    fallback?(emoji: EmojiData, props: EmojiProps): React.Component | JSX.Element;
    /** defaults to returning a png from unpkg.com-hosted emoji-datasource-${set} */
    backgroundImageFn?: BackgroundImageFn | undefined;
    native?: boolean | undefined;
    forceSize?: boolean | undefined;
    tooltip?: boolean | undefined;
    /** defaults to 1 */
    skin?: EmojiSkin | undefined;
    /** defaults to 64 */
    sheetSize?: EmojiSheetSize | undefined;
    /** defaults to 52 */
    sheetColumns?: number | undefined;
    /** defaults to 52 */
    sheetRows?: number | undefined;
    /** defaults to 'apple' */
    set?: EmojiSet | undefined;
    size: number;
    emoji: string | EmojiData;
    html?: boolean | undefined;
    /** data is omitted here as it should be used for NimbleEmoji only - not emoji */
}

export type CategoryName =
    | 'search'
    | 'recent'
    | 'people'
    | 'nature'
    | 'foods'
    | 'activity'
    | 'places'
    | 'objects'
    | 'symbols'
    | 'flags'
    | 'custom';

// tslint:disable-next-line interface-name
export interface I18n {
    search: string;
    categories: Record<CategoryName, string>;
    notfound: string;
    skintext: string;
}

export type PartialI18n = Partial<Pick<I18n, 'search' | 'notfound'> & { categories: Partial<I18n['categories']> }>;

export interface CustomIcons {
    categories: Record<CategoryName, () => React.ReactNode>;
}

export interface PickerProps {
    /** NOTE: default is not preventable */
    onClick?(emoji: EmojiData, e: React.MouseEvent<HTMLElement>): void;
    onSelect?(emoji: EmojiData): void;
    onSkinChange?(skin: EmojiSkin): void;
    perLine?: number | undefined;
    emojiSize?: number | undefined;
    i18n?: PartialI18n | undefined;
    style?: React.CSSProperties | undefined;
    title?: string | undefined;
    theme?: 'auto' | 'light' | 'dark' | undefined;
    emoji?: string | undefined;
    color?: string | undefined;
    set?: EmojiSet | undefined;
    skin?: EmojiSkin | undefined;
    defaultSkin?: EmojiSkin | undefined;
    native?: boolean | undefined;
    backgroundImageFn?: BackgroundImageFn | undefined;
    sheetSize?: EmojiSheetSize | undefined;
    emojisToShowFilter?(emoji: EmojiData): boolean;
    showPreview?: boolean | undefined;
    showSkinTones?: boolean | undefined;
    emojiTooltip?: boolean | undefined;
    include?: CategoryName[] | undefined;
    exclude?: CategoryName[] | undefined;
    recent?: string[] | undefined;
    autoFocus?: boolean | undefined;
    /** NOTE: custom emoji are copied into a singleton object on every new mount */
    custom?: CustomEmoji[] | undefined;
    skinEmoji?: string | undefined;
    notFound?(): React.Component;
    notFoundEmoji?: string | undefined;
    icons?: CustomIcons | undefined;
    enableFrequentEmojiSort?: boolean | undefined;
    useButton?: boolean | undefined;
}
