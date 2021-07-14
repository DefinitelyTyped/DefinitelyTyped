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
