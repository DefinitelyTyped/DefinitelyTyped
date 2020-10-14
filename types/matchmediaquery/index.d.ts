// Type definitions for matchmediaquery 0.3
// Project: https://github.com/ncochard/matchmediaquery#readme
// Definitions by: Nick Whitlock <https://github.com/eezstreet>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type MediaValues = Record<
    | 'orientation'
    | 'scan'
    | 'width'
    | 'height'
    | 'device-width'
    | 'device-height'
    | 'resolution'
    | 'aspect-ratio'
    | 'device-aspect-ratio'
    | 'grid'
    | 'color'
    | 'color-index'
	| 'monochrome'
    | 'type',
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
