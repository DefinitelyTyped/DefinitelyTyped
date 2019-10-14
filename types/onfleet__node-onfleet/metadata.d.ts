type MetadataVisibility = 'api' | 'dashboard' | 'worker';
type MetadataType = 'boolean' | 'number' | 'string' | 'object' | 'array';
type MetadataSubType = 'boolean' | 'number' | 'string' | 'object';

export interface OnfleetMetadata {
  name: string;
  type: MetadataType;
  subtype?: MetadataSubType;
  visibility?: MetadataVisibility[];
  value: any;
}
