// Type definitions for media-typer 0.3
// Project: https://github.com/jshttp/media-typer
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function parse(mediaType: string): MediaType;
export function format(mediaTypeDescriptor: MediaType): string;

export interface MediaType {
    type: string;
    subtype: string;
    suffix?: string;
}
