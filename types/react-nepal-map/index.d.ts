// Type definitions for react-nepal-map 1.0
// Project: https://github.com/keyrunpay/react-nepal-map#readme
// Definitions by: Ashish Yadav <https://github.com/ashiishme>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export as namespace ReactNepalMap;

/**
 * Returns random color string
 */
export function getRandomColor(): string;

/**
 * Metadata types for Map
 */
export interface MapMetaDataTypes {
    name: string;
    shape: string;
}

export interface DistrictMapTypes extends MapMetaDataTypes {
    zip: number;
    province: number;
}

export interface ProvinceMapTypes extends MapMetaDataTypes {
    zip: number;
}

export interface ZonalMapTypes extends MapMetaDataTypes {
    code: string;
}

/**
 * Map data
 */
export const districtMapData: DistrictMapTypes[];

export const provinceMapData: ProvinceMapTypes[];

export const zonalMapData: ZonalMapTypes[];

/**
 * Items props for onMapClick method
 */

export interface itemProps {
    name: string;
    zip: number;
    province: number;
    code: string;
}

/**
 * Map component props
 */

export interface MapPropsTypes {
    onMapClick?: (item: itemProps) => void;
    randomSectorColor?: boolean;
    sectorClassName?: string;
    containerClassName?: string;
    color?: string;
    hoverColor?: string;
    stroke?: string;
    strokeWidth?: number;
}

export interface ProvinceMapPropsTypes extends MapPropsTypes {
    provinceColor?: string[];
}

// Components
export const DistrictMap: React.FC<MapPropsTypes>;
export const ProvinceMap: React.FC<ProvinceMapPropsTypes>;
export const ZonalMap: React.FC<MapPropsTypes>;
