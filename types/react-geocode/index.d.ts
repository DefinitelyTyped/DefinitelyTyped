// Type definitions for react-geocode 0.2
// Project: https://github.com/shukerullah/react-geocode
// Definitions by: Steve Mu <https://github.com/stevemu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function fromAddress(address: string, apiKey?: string, language?: string, region?: string): Promise<any>;
export function fromLatLng(latitude: string, longitude: string, apiKey?: string, language?: string, region?: string): Promise<any>;
export function setApiKey(api_key: string): void;
export function setLanguage(language: string): void;
export function enableDebug(enable?: boolean): void;
export function setRegion(region: string): void;
export function setLocationType(location_type: string): void;
