// Type definitions for CSS Font Loading Module Level 3
// Project: https://drafts.csswg.org/css-font-loading/
// Definitions by: slikts <https://github.com/slikts>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type FontFaceLoadStatus = 'unloaded' | 'loading' | 'loaded' | 'error';
export type FontFaceSetLoadStatus = 'loading' | 'loaded';
export type BinaryData = ArrayBuffer | ArrayBufferView;
export type EventHandler = (event: Event) => void;

export interface FontFaceDescriptors {
    style?: string;
    weight?: string;
    stretch?: string;
    unicodeRange?: string;
    variant?: string;
    featureSettings?: string;
}

export interface FontFaceSet extends Set<FontFace> {
    // events for when loading state changes
    onloading: EventHandler;
    onloadingdone: EventHandler;
    onloadingerror: EventHandler;

    // check and start loads if appropriate
    // and fulfill promise when all loads complete
    load(font: string, text?: string): Promise<FontFace[]>;
    // return whether all fonts in the fontlist are loaded
    // (does not initiate load if not available)
    check(font: string, text?: string): boolean;

    // async notification that font loading and layout operations are done
    readonly ready: Promise<FontFaceSet>;

    // loading state, "loading" while one or more fonts loading, "loaded" otherwise
    readonly status: FontFaceSetLoadStatus;
}

declare global {
    class FontFace {
        constructor(family: string, source: string | BinaryData, descriptors?: FontFaceDescriptors);
        load(): Promise<FontFace>;

        family: string;
        style: string;
        weight: string;
        stretch: string;
        unicodeRange: string;
        variant: string;
        featureSettings: string;
        variationSettings: string;
        display: string;
        readonly status: FontFaceLoadStatus;
        readonly loaded: Promise<FontFace>;
    }

    interface Document {
        fonts: FontFaceSet;
    }

    interface WorkerGlobalScope {
        fonts: FontFaceSet;
    }
}
