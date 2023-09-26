export as namespace phoneFormat;

export function cleanPhone(phoneNumber: string): string;
export function countryCodeToName(countryCode: string): string;
export function countryForE164Number(phoneNumber: string): string;
export function exampleLandlineNumber(countryCode: string): string;
export function exampleMobileNumber(countryCode: string): string;
export function formatE164(countryCode: string, phoneNumber: string): string;
export function formatInternational(countryCode: string, phoneNumber: string): string;
export function formatLocal(countryCode: string, phoneNumber: string): string;
export function formatNumberForMobileDialing(countryCode: string, phoneNumber: string): string;
export function isValidNumber(phoneNumber: string, countryCode: string): boolean;
