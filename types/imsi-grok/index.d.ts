// eslint-disable-next-line @typescript-eslint/naming-convention
export interface IMSIBreakdown {
    mcc: string;
    mnc: string;
    country_iso: string;
    country_name: string;
    country_code: string;
    network_name: string;
}

export function grok(imsi: string): IMSIBreakdown | null;
