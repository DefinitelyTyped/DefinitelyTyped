// Type definitions for accessibility 3.0
// Project: https://github.com/ranbuch/accessibility#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
        icon?: Icon;
        hotkeys?: HotKeys;
        buttons?: {
            font: SizeOrPosition;
        };
        guide?: {
            /** @default '#20ff69' */
            cBorder?: string;
            /** @default '#000000' */
            cBackground?: string;
            /** @default '12px' */
            height?: string;
        };
        menu?: {
            dimensions?: Dimensions;
            fontFamily?: string;
        };
        labels?: Labels;
        /** @default 'en-US' */
        textToSpeechLang?: string;
        /** @default 'en-US' */
        speechToTextLang?: string;
        /** @default false */
        textPixelMode?: boolean;
        /** @default true */
        textEmlMode?: boolean;
        animations?: {
            /** @default true */
            buttons?: boolean;
        };
        modules?: Modules;
        session?: {
            /** @default true */
            persistent?: boolean;
        };
    }

    interface Icon {
        position?: Position;
        dimensions?: Dimensions;
        /** @default '9999' */
        zIndex?: string | number;
        /** @default '#4054b2' */
        backgroundColor?: string;
        /** @default '#fff' */
        color?: string;
        /** @default 'accessible' */
        img?: string;
        /** @default false */
        circular?: boolean;
        /** @default false */
        circularBorder?: boolean;
        /** @default ['https://fonts.googleapis.com/icon?family=Material+Icons'] */
        fontFaceSrc?: string[];
        /** @default 'Material Icons' */
        fontFamily?: string;
        /** @default 'Material Icons' */
        fontClass?: string;
        /** @default false */
        useEmojis?: boolean;
    }

    interface Labels {
        /** @default 'Reset' */
        resetTitle?: string;
        /** @default 'Close' */
        closeTitle?: string;
        /** @default 'Accessibility Options' */
        menuTitle?: string;
        /** @default 'increase text size' */
        increaseText?: string;
        /** @default 'decrease text size' */
        decreaseText?: string;
        /** @default 'increase text spacing' */
        increaseTextSpacing?: string;
        /** @default 'decrease text spacing' */
        decreaseTextSpacing?: string;
        /** @default 'invert colors' */
        invertColors?: string;
        /** @default 'gray hues' */
        grayHues?: string;
        /** @default 'gray hues' */
        bigCursor?: string;
        /** @default 'reading guide' */
        readingGuide?: string;
        /** @default 'underline links' */
        underlineLinks?: string;
        /** @default 'underline links' */
        textToSpeech?: string;
        /** @default 'speech to text' */
        speechToText?: string;
    }

    interface Modules {
        /** @default true */
        increaseText?: boolean;
        /** @default true */
        decreaseText?: boolean;
        /** @default true */
        increaseTextSpacing?: boolean;
        /** @default true */
        decreaseTextSpacing?: boolean;
        /** @default true */
        invertColors?: boolean;
        /** @default true */
        grayHues?: boolean;
        /** @default true */
        bigCursor?: boolean;
        /** @default true */
        readingGuide?: boolean;
        /** @default true */
        underlineLinks?: boolean;
        /** @default true */
        textToSpeech?: boolean;
        /** @default true */
        speechToText?: true;
    }

    interface HotKeys {
        /** @default false */
        enabled?: boolean;
        /** @default true */
        helpTitles?: boolean;
        keys?: {
            [key: string]: HotKeyDefinition;
        };
    }

    type HotKeyDefinition = [number, number, string];
    interface Dimensions {
        width?: SizeOrPosition;
        height?: SizeOrPosition;
    }

    interface Position {
        top?: SizeOrPosition;
        right?: SizeOrPosition;
        bottom?: SizeOrPosition;
        left?: SizeOrPosition;
        type: string;
    }

    interface SizeOrPosition {
        size: number | string;
        units?: string;
    }
}
export = Accessibility;
