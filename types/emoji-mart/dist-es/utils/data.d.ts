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
    name?: string | undefined;
    a?: string | undefined;
    unified?: string | undefined;
    b?: string | undefined;
    non_qualified?: string | undefined;
    c?: string | undefined;
    has_img_apple?: boolean | undefined;
    d?: boolean | undefined;
    has_img_google?: boolean | undefined;
    e?: boolean | undefined;
    has_img_twitter?: boolean | undefined;
    f?: boolean | undefined;
    has_img_emojione?: boolean | undefined;
    g?: boolean | undefined;
    has_img_facebook?: boolean | undefined;
    h?: boolean | undefined;
    has_img_messenger?: boolean | undefined;
    i?: boolean | undefined;
    keywords?: string[] | undefined;
    j?: string[] | undefined;
    sheet?: number[] | undefined;
    k?: number[] | undefined;
    emoticons?: string[] | undefined;
    l?: string[] | undefined;
    text?: string | undefined;
    m?: string | undefined;
    short_names?: string[] | undefined;
    n?: string[] | undefined;
    added_in?: number | undefined;
    o?: number | undefined;
    sheet_x?: number | undefined;
    sheet_y?: number | undefined;
    skin_variations?: { [key: string]: SkinVariation } | undefined;
    obsoleted_by?: string | undefined;
    obsoletes?: string | undefined;
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
    has_img_facebook: boolean;
    has_img_emojione?: boolean;
    has_img_messenger?: boolean;
    obsoleted_by?: string | undefined;
    obsoletes?: string | undefined;
}

export function buildSearch(emoji: Emoji): string;

export function compress(emoji: Emoji): void;

export function uncompress(data: Data): void;
