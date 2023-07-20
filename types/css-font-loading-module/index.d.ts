// Type definitions for CSS Font Loading Module Level 3
// Project: https://drafts.csswg.org/css-font-loading/
// Definitions by: slikts <https://github.com/slikts>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 5.0

export type FontFaceLoadStatus = 'unloaded' | 'loading' | 'loaded' | 'error';
export type FontFaceSetLoadStatus = 'loading' | 'loaded';
export type BinaryData = ArrayBuffer | ArrayBufferView;

export interface FontFaceSetLoadEventInit extends EventInit {
    fontfaces?: FontFace[] | undefined;
}

export interface FontFaceSetCallbackMap {
    loading: (this: FontFaceSet, event: FontFaceSetLoadEvent) => any;
    loadingdone: (this: FontFaceSet, event: FontFaceSetLoadEvent) => any;
    loadingerror: (this: FontFaceSet, event: FontFaceSetLoadEvent) => any;
}

declare global {
    interface FontFaceDescriptors {
        display?: FontDisplay | undefined;
        featureSettings?: string | undefined;
        stretch?: string | undefined;
        style?: string | undefined;
        unicodeRange?: string | undefined;
        variant?: string | undefined;
        weight?: string | undefined;
    }

    interface FontFace {
        load(): Promise<FontFace>;

        family: string;
        style: string;
        weight: string;
        stretch: string;
        unicodeRange: string;
        variant: string;
        featureSettings: string;
        variationSettings: string;
        display: FontDisplay;
        readonly status: FontFaceLoadStatus;
        readonly loaded: Promise<FontFace>;
    }

    interface FontFaceSet extends Set<FontFace>, EventTarget {
        // events for when loading state changes
        onloading: ((this: FontFaceSet, event: Event) => any) | null;
        onloadingdone: ((this: FontFaceSet, event: Event) => any) | null;
        onloadingerror: ((this: FontFaceSet, event: Event) => any) | null;

        // EventTarget
        addEventListener<K extends keyof FontFaceSetCallbackMap>(
            type: K,
            listener: FontFaceSetCallbackMap[K],
            options?: boolean | AddEventListenerOptions,
        ): void;
        addEventListener(
            type: string,
            listener: EventListenerOrEventListenerObject,
            options?: boolean | AddEventListenerOptions,
        ): void;
        removeEventListener<K extends keyof FontFaceSetCallbackMap>(
            type: K,
            listener: FontFaceSetCallbackMap[K],
            options?: boolean | EventListenerOptions,
        ): void;
        removeEventListener(
            type: string,
            listener: EventListenerOrEventListenerObject,
            options?: boolean | EventListenerOptions,
        ): void;

        // check and start loads if appropriate
        // and fulfill promise when all loads complete
        load(font: string, text?: string): Promise<FontFace[]>;
        // return whether all fonts in the fontlist are loaded
        // (does not initiate load if not available)
        check(font: string, text?: string): boolean;

        forEach(callbackfn: (value: FontFace, key: FontFace, parent: FontFaceSet) => void, thisArg?: any): void;

        // async notification that font loading and layout operations are done
        readonly ready: Promise<FontFaceSet>;

        // loading state, "loading" while one or more fonts loading, "loaded" otherwise
        readonly status: FontFaceSetLoadStatus;
    }

    var FontFace: {
        prototype: FontFace;
        new (family: string, source: string | BinaryData, descriptors?: FontFaceDescriptors): FontFace;
    };

    interface FontFaceSetLoadEvent extends Event {
        readonly fontfaces: ReadonlyArray<FontFace>;
    }

    var FontFaceSetLoadEvent: {
        prototype: FontFaceSetLoadEvent;
        new (type: string, eventInitDict?: FontFaceSetLoadEventInit): FontFaceSetLoadEvent;
    };

    interface Document {
        fonts: FontFaceSet;
    }

    interface WorkerGlobalScope {
        fonts: FontFaceSet;
    }
}

type FontFaceSetCopy = FontFaceSet;
export { FontFaceSetCopy as FontFaceSet };
