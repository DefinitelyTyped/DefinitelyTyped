export as namespace EmojiConvertor;

declare namespace Emoji {
    const EmojiConvertor: typeof Emoji;
}

declare class Emoji {
    addAliases: (aliases: { [key: string]: string }) => void;

    allow_caps: boolean;

    allow_native: boolean;

    avoid_ms_emoji: boolean;

    colons_mode: boolean;

    img_set: string;

    img_sets: { [key: string]: { path: string; sheet: string; sheet_size: number; mask: number } };

    include_text: boolean;

    include_title: boolean;

    img_suffix: string;

    removeAliases: (aliases: string[]) => void;

    replace_colons: (str: string) => string;

    replace_emoticons: (str: string) => string;

    replace_emoticons_with_colons: (str: string) => string;

    replace_mode: string;

    replace_unified: (str: string) => string;

    text_mode: boolean;

    use_css_imgs: boolean;

    use_sheet: boolean;
}

export = Emoji;
