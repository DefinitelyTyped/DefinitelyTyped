export interface Province {
    name: string;
    id: string;
    alt_name: string;
    latitude: number | null;
    longitude: number | null;
}

export interface Regency {
    name: string;
    id: string;
    province_id: string;
    alt_name: string;
    latitude: number | null;
    longitude: number | null;
}

export interface District {
    name: string;
    id: string;
    regency_id: string;
    alt_name: string;
    latitude: number | null;
    longitude: number | null;
}

export interface Village {
    name: string;
    id: string;
    district_id: string;
    latitude: number | null;
    longitude: number | null;
}

// Province
export function getAllProvinces(): Promise<Province[]>;
export function getProvinceById(id: string): Promise<Province>;
export function getProvinceByName(name: string): Promise<Province>;

// Regency
export function getAllRegencies(): Promise<Regency[]>;
export function getRegencyById(id: string): Promise<Regency>;
export function getRegencyByName(name: string): Promise<Regency>;
export function getRegenciesOfProvince(provinceId: string): Promise<Regency[]>;
export function getRegenciesOfProvinceId(provinceId: string): Promise<Regency[]>;
export function getRegenciesOfProvinceName(provinceName: string): Promise<Regency[]>;

// District
export function getAllDistricts(): Promise<District[]>;
export function getDistrictById(id: string): Promise<District>;
export function getDistrictByName(name: string): Promise<District>;
export function getDistrictsOfRegency(regencyId: string): Promise<District[]>;
export function getDistrictsOfRegencyId(regencyId: string): Promise<District[]>;
export function getDistrictsOfRegencyName(regencyName: string): Promise<District[]>;

// Village
export function getAllVillages(): Promise<Village[]>;
export function getVillageById(id: string): Promise<Village>;
export function getVillageByName(name: string): Promise<Village>;
export function getVillagesOfDistrict(districtId: string): Promise<Village[]>;
export function getVillagesOfDistrictId(districtId: string): Promise<Village[]>;
export function getVillagesOfDistrictName(districtName: string): Promise<Village[]>;
