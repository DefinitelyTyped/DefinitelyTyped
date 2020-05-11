export interface Data {
    compressed: boolean;
    categories: Category[];
    emojis: { [key: string]: Emoji };
    aliases: { [key: string]: string };
}

export interface Category {
    id: string;
    name: string;
    emojis: string[];
}

export interface Emoji {
    name?: string;
    a?: string;
    unified?: string;
    b?: string;
    non_qualified?: string;
    c?: string;
    has_img_apple?: boolean;
    d?: boolean;
    has_img_google?: boolean;
    e?: boolean;
    has_img_twitter?: boolean;
    f?: boolean;
    has_img_emojione?: boolean;
    g?: boolean;
    has_img_facebook?: boolean;
    h?: boolean;
    has_img_messenger?: boolean;
    i?: boolean;
    keywords?: string[];
    j?: string[];
    sheet?: number[];
    k?: number[];
    emoticons?: string[];
    l?: string[];
    text?: string;
    m?: string;
    short_names?: string[];
    n?: string[];
    added_in?: number;
    o?: number;
    sheet_x?: number;
    sheet_y?: number;
    skin_variations?: { [key: string]: SkinVariation };
    obsoleted_by?: string;
    obsoletes?: string;
}

export interface SkinVariation {
    unified: string;
    non_qualified: null | string;
    image: string;
    sheet_x: number;
    sheet_y: number;
    added_in: string;
    has_img_apple: boolean;
    has_img_google: boolean;
    has_img_twitter: boolean;
    has_img_emojione: boolean;
    has_img_facebook: boolean;
    has_img_messenger: boolean;
    obsoleted_by?: string;
    obsoletes?: string;
}

export function buildSearch(emoji: Emoji): string;

export function compress(emoji: Emoji): void;

export function uncompress(data: Data): void;
