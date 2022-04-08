import * as lib from 'countries-and-timezones';

const country = lib.getCountry('IT');
const timezone = lib.getTimezone('Europe/Warsaw');
const countries = lib.getAllCountries();
const timezones = lib.getAllTimezones();
timezone && lib.getCountryForTimezone(timezones[timezone.name].name);
country && lib.getTimezonesForCountry(countries[country.id].id);
