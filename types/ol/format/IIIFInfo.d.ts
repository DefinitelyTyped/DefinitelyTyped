import { Options } from '../source/IIIF';

export interface IiifProfile {
    formats?: string[] | undefined;
    qualities?: string[] | undefined;
    supports?: string[] | undefined;
    maxArea?: number | undefined;
    maxHeight?: number | undefined;
    maxWidth?: number | undefined;
}
export type ImageInformationResponse = {
    [key: string]: string | number | (number | string | IiifProfile)[] | { [key: string]: number } | TileInfo;
};
export interface PreferredOptions {
    format?: string | undefined;
    quality?: string | undefined;
}
export interface SupportedFeatures {
    supports?: string[] | undefined;
    formats?: string[] | undefined;
    qualities?: string[] | undefined;
}
export interface TileInfo {
    scaleFactors: number[];
    width: number;
    height?: number | undefined;
}
/**
 * Enum representing the major IIIF Image API versions
 */
export enum Versions {
    VERSION1 = 'version1',
    VERSION2 = 'version2',
    VERSION3 = 'version3',
}
export default class IIIFInfo {
    constructor(imageInfo: string | ImageInformationResponse);
    getComplianceLevelEntryFromProfile(version: Versions): string;
    getComplianceLevelFromProfile(version: Versions): string;
    getComplianceLevelSupportedFeatures(): SupportedFeatures;
    getImageApiVersion(): Versions;
    getTileSourceOptions(opt_preferredOptions?: PreferredOptions): Options;
    setImageInfo(imageInfo: string | ImageInformationResponse): void;
}
