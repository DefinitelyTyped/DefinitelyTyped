/**
 * return true if the specified object is a JSON object, false otherwise.
 */
export function isJsonObject(data: any): boolean;
export function numberToZeroPadString(number: number): string;
export function offsetToString(hours: number, minutes: number): string;
export function getTimeZoneOffset(offset: number | string): string;
export function getTheTimeZoneOffsetFromDateString(date: string): string | null;
export function buildSGTINUri(gcp: string, itemRefAndIndicator: string, serialNumber: string): string;
export function buildSGLNUri(gcp: string, locationReference: string, extension: string): string;
export function buildSSCCUri(gcp: string, serialReference: string): string;
export function buildGRAIUri(gcp: string, assetType: string, serialNumber: string): string;
export function buildGIAIUri(gcp: string, individualAssetReference: string): string;
export function buildGSRNUri(gcp: string, serviceReference: string): string;
export function buildGSRNPUri(gcp: string, serviceReference: string): string;
export function buildGDTIUri(gcp: string, documentType: string, serialNumber: string): string;
export function buildCPIUri(gcp: string, componentPartReference: string, serial: string): string;
export function buildSGCNUri(gcp: string, couponReference: string, serialComponent: string): string;
export function buildGINCUri(gcp: string, consignmentReference: string): string;
export function buildGSINUri(gcp: string, shipperReference: string): string;
export function buildITIPUri(
    gcp: string,
    itemRefAndIndicator: string,
    piece: string,
    total: string,
    serialNumber: string,
): string;
export function buildGIDUri(manageNumber: string, objectClass: string, serialNumber: string): string;
export function throwIfThereIsAnUnexpectedExtension(object: any): void;
export function timer(ms: number): Promise<unknown>;
