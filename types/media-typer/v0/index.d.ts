export function parse(mediaType: string): MediaType;
export function format(mediaTypeDescriptor: MediaType): string;

export interface MediaType {
    type: string;
    subtype: string;
    suffix?: string | undefined;
}
