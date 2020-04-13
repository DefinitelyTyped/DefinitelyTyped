import * as iso3166 from "iso-3166-2";

iso3166.subdivision("SE-O");
iso3166.subdivision("US-IN");

iso3166.subdivision("SWE", "O");
iso3166.subdivision("US", "Indiana");

const indiana = iso3166.subdivision("US-IN");
if (indiana) {
    // $ExpectType string
    indiana.name;
    // $ExpectType string
    indiana.type;
    // $ExpectType string
    indiana.code;
    // $ExpectType string
    indiana.regionCode;
    // $ExpectType string
    indiana.countryCode;
    // $ExpectType string
    indiana.countryName;
}

iso3166.country("US");
iso3166.country("SE");
iso3166.country("SWE");

iso3166.country("United States");
iso3166.country("Sweden");

const sweden = iso3166.country("SE");
if (sweden) {
    // $ExpectType string
    sweden.name;
    // $ExpectType string
    sweden.sub["SE-O"].name;
    // $ExpectType string
	sweden.code;
}

const unitedStates = iso3166.data["US"];
{
    // $ExpectType string
    unitedStates.name;
    // $ExpectType string
	unitedStates.sub["US-IN"].name;
}

const alpha3 = "SWE";
const alpha2 = "SE";
// $ExpectType boolean
const codesWork = (alpha2 === iso3166.codes[alpha3]);
