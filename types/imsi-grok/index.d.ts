// Type definitions for imsi-grok 1.0
// Project: https://github.com/atis--/imsi-grok#readme
// Definitions by: Dean Pienaar <https://github.com/deanpienaar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// tslint:disable-next-line interface-name
export interface IMSIBreakdown {
    mcc: string;
    mnc: string;
    country_iso: string;
    country_name: string;
    country_code: string;
    network_name: string;
}

export function grok(imsi: string): IMSIBreakdown | null;
