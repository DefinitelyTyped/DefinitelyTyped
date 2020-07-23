import * as React from 'react';
import {
    ProvinceMap,
    getRandomColor,
    DistrictMap,
    ZonalMap,
    itemProps,
    DistrictMapTypes,
    ProvinceMapTypes,
    ZonalMapTypes,
} from 'react-nepal-map';

export const provinceFC = () => {
    return <ProvinceMap provinceColor={['red', 'green', 'blue']} />;
};

export const provinceFCWithProps = () => {
    return (
        <ProvinceMap
            onMapClick={({ name, zip, province }: itemProps) => {
                // do something
            }}
            randomSectorColor={true}
            sectorClassName="some-class"
            containerClassName="string"
            color={getRandomColor()}
            hoverColor={getRandomColor()}
            stroke="2"
            strokeWidth={2}
            provinceColor={['red', 'blue', 'white']}
        />
    );
};

export const districtFC = () => {
    return <DistrictMap />;
};

export const districtFCWithProps = () => {
    return (
        <DistrictMap
            onMapClick={({ name, zip, province }: itemProps) => {
                // do something
            }}
            randomSectorColor={true}
            sectorClassName="district-sector"
            containerClassName="district-wrapper"
            color={getRandomColor()}
            hoverColor="#000"
            stroke={getRandomColor()}
            strokeWidth={2}
        />
    );
};

export const zonalFC = () => {
    return <ZonalMap />;
};

export const zonalFCWithProps = () => {
    return <ZonalMap stroke={getRandomColor()} strokeWidth={2} />;
};

const zonalMapData: ZonalMapTypes[] = [
    {
        name: 'Gandaki',
        code: 'GA',
        shape: 'Zonal map data, cannot add the svg data for test because of maximum line length issue.',
    },
    {
        name: 'LU',
        code: 'Lumbini',
        shape: 'Zonal map data, cannot add the svg data for test because of maximum line length issue.',
    },
];

const districtMapData: DistrictMapTypes[] = [
    {
        name: 'Nawalparasi_W',
        zip: 33010,
        province: 5,
        shape: 'District map data, cannot add the svg data for test because of maximum line length issue.',
    },
    {
        name: 'Rupendehi',
        zip: 32900,
        province: 5,
        shape: 'District map data, cannot add the svg data for test because of maximum line length issue.',
    },
];

const provinceMapData: ProvinceMapTypes[] = [
    {
        name: 'Province 4',
        zip: 33700,
        shape: 'Province map data, cannot add the svg data for test because of maximum line length issue.',
    },
    {
        name: 'Province 5',
        zip: 32907,
        shape: 'Province map data, cannot add the svg data for test because of maximum line length issue.',
    },
];
