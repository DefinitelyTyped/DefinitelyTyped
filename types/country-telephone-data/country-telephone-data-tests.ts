import { allCountries, Country, iso2Lookup } from "country-telephone-data";

const nz = allCountries.find(x => x.iso2 === "nz");

if (nz) {
    nz.dialCode; // $ExpectType string
}

if (!nz) {
    nz; // $ExpectType undefined
}

const Australia = iso2Lookup.au;

if (!Australia) {
    Australia; // $ExpectType never
}

const outerOceania: Country = iso2Lookup.qo;
