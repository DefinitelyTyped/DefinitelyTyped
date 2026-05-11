type MediaValues = Record<
    | "aspect-ratio"
    | "color-index"
    | "color"
    | "device-aspect-ratio"
    | "device-height"
    | "device-width"
    | "grid"
    | "height"
    | "monochrome"
    | "orientation"
    | "resolution"
    | "scan"
    | "type"
    | "width",
    unknown
>;

declare class Mql {
    constructor(query: string, values?: Partial<MediaValues>, forceStatic?: boolean);

    update(evt: Mql): void;

    dispose(): void;

    matches: boolean;

    media: string;
}

declare function matchMedia(query: string, values?: Partial<MediaValues>, forceStatic?: boolean): Mql;
export = matchMedia;
