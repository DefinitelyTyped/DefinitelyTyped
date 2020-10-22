// Type definitions for all-the-cities 3.1
// Project: https://github.com/zeke/all-the-cities#readme
// Definitions by: Emily Marigold Klassen <https://github.com/forivall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = all_the_cities;

interface AllTheCitiesCity {
    cityId: number;
    name: string;
    altName: string;
    country: string;
    adminCode: string;
    population: number;
    featureCode:
        | 'PPL'
        | 'PPLA'
        | 'PPLC'
        | 'PPLA2'
        | 'PPLW'
        | 'PPLA3'
        | 'PPLX'
        | 'PPLA4'
        | 'PPLL'
        | 'PPLS'
        | 'PPLQ'
        | 'PPLF'
        | 'PPLG'
        | 'PPLH'
        | 'PPLCH'
        | 'PPLA5'
        | 'PPLR'
        | 'STLMT';
    loc: {
        type: 'Point';
        coordinates: [number, number];
    };
}

declare const all_the_cities: AllTheCitiesCity[];

declare namespace all_the_cities {
    type City = AllTheCitiesCity;
}
