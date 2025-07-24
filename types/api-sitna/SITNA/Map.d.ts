import BasicMap, { MapOptions } from '../TC/Map';

export interface SearchResultItem {
    id: string;
    label: string;
}

export type SearchDataCallback = (data: SearchResultItem[]) => void;
export type SearchByIdCallback = (queryId: string | null) => void;

export class SitnaMap extends BasicMap {

    getMunicipalities(callback?: SearchDataCallback): Promise<SearchResultItem[]>;
    getUrbanAreas(callback?: SearchDataCallback): Promise<SearchResultItem[]>;
    getCommonwealths(callback?: SearchDataCallback): Promise<SearchResultItem[]>;
    getCouncils(callback?: SearchDataCallback): Promise<SearchResultItem[]>;

    searchCommonwealth(id: string, callback?: SearchByIdCallback): Promise<string>;
    searchCouncil(id: string, callback?: SearchByIdCallback): Promise<string>;
    searchUrbanArea(id: string, callback?: SearchByIdCallback): Promise<string>;
    searchMunicipality(id: string, callback?: SearchByIdCallback): Promise<string>;
    searchFeature(layer: string, field: string, id: string, callback?: SearchByIdCallback): Promise<string>;
    removeSearch(callback?: () => void): void;
}