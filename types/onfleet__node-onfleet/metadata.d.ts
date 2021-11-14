export type MetadataVisibility = 'api' | 'dashboard' | 'worker';
export type MetadataType = 'boolean' | 'number' | 'string' | 'object' | 'array';
export type MetadataSubType = 'boolean' | 'number' | 'string' | 'object';

export interface OnfleetMetadata {
    name: string;
    type: MetadataType;
    subtype?: MetadataSubType | undefined;
    visibility?: MetadataVisibility[] | undefined;
    value: any;
}

export interface MatchMetadataResult {
    id: string;
    metadata: OnfleetMetadata[];
}

export type MatchMetadata<T> = (obj: T) => Promise<MatchMetadataResult[]>;
