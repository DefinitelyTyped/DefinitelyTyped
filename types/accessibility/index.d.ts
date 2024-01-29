export as namespace Accessibility;

/**
 * Adaptive Accessibility Menu
 */
declare class Accessibility {
    readonly menuInterface: Accessibility.MenuInterface;
    /** @deprecated */
    static init(options?: Accessibility.Options): Accessibility;

    constructor(options?: Accessibility.Options);

    alterTextSpace(isIncrease: boolean): void;
    build(): void;
    deleteOppositesIfDefined(options: Accessibility.Options): Accessibility.Options;
    destroy(): void;
    disabledUnsupportedFeatures(): void;
    fontFallback(): void;
    initFontSize(): void;
    injectCss(): void;
    invoke(action: () => void): void;
    listen(): void;
    onChange(updateSession: boolean): void;
    read(): void;
    resetIfDefined(src: any, dest: any, prop: string): void;
    runHotkey(name: string): void;
    saveSession(): void;
    setSessionFromCache(): void;
    speechToText(): void;
    textToSpeech(text: string): void;
    toggleMenu(): void;
}

/**
 * Add accessibility to your website
 */
declare namespace Accessibility {
    interface MenuInterface {
        increaseText: () => void;
        decreaseText: () => void;
        increaseTextSpacing: () => void;
        decreaseTextSpacing: () => void;
        invertColors: (destroy?: boolean) => void;
        grayHues: (destroy?: boolean) => void;
        underlineLinks: (destroy?: boolean) => void;
        bigCursor: (destroy?: boolean) => void;
        readingGuide: (destroy?: boolean) => void;
        textToSpeech: (destroy?: boolean) => void;
        speechToText: (destroy?: boolean) => void;
    }
    interface Options {
        icon?: Icon | undefined;
        hotkeys?: HotKeys | undefined;
        buttons?: {
            font: SizeOrPosition;
        } | undefined;
        guide?: {
            /** @default '#20ff69' */
            cBorder?: string | undefined;
            /** @default '#000000' */
            cBackground?: string | undefined;
            /** @default '12px' */
            height?: string | undefined;
        } | undefined;
        menu?: {
            dimensions?: Dimensions | undefined;
            fontFamily?: string | undefined;
        } | undefined;
        labels?: Labels | undefined;
        /** @default 'en-US' */
        textToSpeechLang?: string | undefined;
        /** @default 'en-US' */
        speechToTextLang?: string | undefined;
        /** @default false */
        textPixelMode?: boolean | undefined;
        /** @default true */
        textEmlMode?: boolean | undefined;
        animations?: {
            /** @default true */
            buttons?: boolean | undefined;
        } | undefined;
        modules?: Modules | undefined;
        session?: {
            /** @default true */
            persistent?: boolean | undefined;
        } | undefined;
    }

    interface Icon {
        position?: Position | undefined;
        dimensions?: Dimensions | undefined;
        /** @default '9999' */
        zIndex?: string | number | undefined;
        /** @default '#4054b2' */
        backgroundColor?: string | undefined;
        /** @default '#fff' */
        color?: string | undefined;
        /** @default 'accessible' */
        img?: string | undefined;
        /** @default false */
        circular?: boolean | undefined;
        /** @default false */
        circularBorder?: boolean | undefined;
        /** @default ['https://fonts.googleapis.com/icon?family=Material+Icons'] */
        fontFaceSrc?: string[] | undefined;
        /** @default 'Material Icons' */
        fontFamily?: string | undefined;
        /** @default 'Material Icons' */
        fontClass?: string | undefined;
        /** @default false */
        useEmojis?: boolean | undefined;
    }

    interface Labels {
        /** @default 'Reset' */
        resetTitle?: string | undefined;
        /** @default 'Close' */
        closeTitle?: string | undefined;
        /** @default 'Accessibility Options' */
        menuTitle?: string | undefined;
        /** @default 'increase text size' */
        increaseText?: string | undefined;
        /** @default 'decrease text size' */
        decreaseText?: string | undefined;
        /** @default 'increase text spacing' */
        increaseTextSpacing?: string | undefined;
        /** @default 'decrease text spacing' */
        decreaseTextSpacing?: string | undefined;
        /** @default 'invert colors' */
        invertColors?: string | undefined;
        /** @default 'gray hues' */
        grayHues?: string | undefined;
        /** @default 'gray hues' */
        bigCursor?: string | undefined;
        /** @default 'reading guide' */
        readingGuide?: string | undefined;
        /** @default 'underline links' */
        underlineLinks?: string | undefined;
        /** @default 'underline links' */
        textToSpeech?: string | undefined;
        /** @default 'speech to text' */
        speechToText?: string | undefined;
    }

    interface Modules {
        /** @default true */
        increaseText?: boolean | undefined;
        /** @default true */
        decreaseText?: boolean | undefined;
        /** @default true */
        increaseTextSpacing?: boolean | undefined;
        /** @default true */
        decreaseTextSpacing?: boolean | undefined;
        /** @default true */
        invertColors?: boolean | undefined;
        /** @default true */
        grayHues?: boolean | undefined;
        /** @default true */
        bigCursor?: boolean | undefined;
        /** @default true */
        readingGuide?: boolean | undefined;
        /** @default true */
        underlineLinks?: boolean | undefined;
        /** @default true */
        textToSpeech?: boolean | undefined;
        /** @default true */
        speechToText?: true | undefined;
    }

    interface HotKeys {
        /** @default false */
        enabled?: boolean | undefined;
        /** @default true */
        helpTitles?: boolean | undefined;
        keys?: {
            [key: string]: HotKeyDefinition;
        } | undefined;
    }

    type HotKeyDefinition = [number, number, string];
    interface Dimensions {
        width?: SizeOrPosition | undefined;
        height?: SizeOrPosition | undefined;
    }

    interface Position {
        top?: SizeOrPosition | undefined;
        right?: SizeOrPosition | undefined;
        bottom?: SizeOrPosition | undefined;
        left?: SizeOrPosition | undefined;
        type: string;
    }

    interface SizeOrPosition {
        size: number | string;
        units?: string | undefined;
    }
}
export = Accessibility;
