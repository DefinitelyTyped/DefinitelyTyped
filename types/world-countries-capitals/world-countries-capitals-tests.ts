import {
    getRandomCountry,
    getNRandomCountriesData,
    getCountryDetailsByCapital,
    getCountryDetailsByName,
    getAllCountryDetails,
    getAllCountries,
    getCountriesByLanguage,
    getCountriesByFamousFor,
    getCountriesByDriveDirection,
    getCountriesByAlcoholProhibition,
    getCountriesByContinent,
    getCountryDetailsByISO,
    getCountriesByTLD,
    getCountriesByConstitutionalForm,
    getCountriesByLandLock
} from "world-countries-capitals";

// expect 
const randCountry = getRandomCountry();
const randCountries = getNRandomCountriesData(10);
const kabulCapitalCountry = getCountryDetailsByCapital("kabul")[0];
const andorra = getCountryDetailsByName("andorra");
const countriesDetails = getAllCountryDetails();
const countries = getAllCountries();
const pashtoLangCountries = getCountriesByLanguage("pashto");
const noneCountry = getCountriesByFamousFor("");
const leftDriveDirCountries = getCountriesByDriveDirection("left");
const alcoholProhibitionLimitedCountries = getCountriesByAlcoholProhibition("limited");
const asContinentCountries = getCountriesByContinent("as");
const numeric004Countries = getCountryDetailsByISO("numeric", "004");
const afTldCountries = getCountriesByTLD(".af");
const republicCountries = getCountriesByConstitutionalForm("republic");
const landLockCountries = getCountriesByLandLock(false);