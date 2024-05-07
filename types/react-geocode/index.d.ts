export function fromAddress(address: string, apiKey?: string, language?: string, region?: string): Promise<any>;
export function fromLatLng(
    latitude: string,
    longitude: string,
    apiKey?: string,
    language?: string,
    region?: string,
): Promise<any>;
export function setApiKey(api_key: string): void;
export function setLanguage(language: string): void;
export function enableDebug(enable?: boolean): void;
export function setRegion(region: string): void;
export function setLocationType(location_type: string): void;
