import * as provinces from 'provinces';

provinces.forEach((province: Province) => {
    // https://github.com/substack/provinces#data-format
    let name: string;
    let country: string;
    let short: string;
    let alt: string[];
    let region: string;

    name = province.name;
    country = province.country;
    short = province.short ? province.short : '';
    alt = province.alt ? province.alt : [];
    region = province.region ? province.region : '';
});
