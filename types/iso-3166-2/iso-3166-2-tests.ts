import * as iso3166 from "iso-3166-2";

// subdivision() and country() return {} on failure, which is nearly impossible to separate from a valid response in TypeScript;
// until a PR can be accepted on the original repo, this workaround makes accessing the original type possible.
function wrap<T>(rawResult: T|{}): T|null {
	if (Object.keys(rawResult).length)
		return rawResult as T;
	else
		return null;
}

iso3166.subdivision("SE-O");
iso3166.subdivision("US-IN");

iso3166.subdivision("SWE", "O");
iso3166.subdivision("US", "Indiana");

const indiana = wrap(iso3166.subdivision("US-IN"));
if (indiana) {
	const name: string = indiana.name;
	const type: string = indiana.type;
	const code: string = indiana.code;
	const regionCode: string = indiana.regionCode;
	const countryCode: string = indiana.countryCode;
	const countryName: string = indiana.countryName;
}

iso3166.country("US");
iso3166.country("SE");
iso3166.country("SWE");

iso3166.country("United States");
iso3166.country("Sweden");

const sweden = wrap(iso3166.country("SE"));
if (sweden) {
	const name: string = sweden.name;
	const subNameO: string = sweden.sub["SE-O"].name;
	const code: string = sweden.code;
}

const unitedStates = iso3166.data["US"];
{
	const name: string = unitedStates.name;
	const subNameIN: string = unitedStates.sub["US-IN"].name;
}

const alpha3 = "SWE";
const alpha2 = "SE";
const codesWork = (alpha2 === iso3166.codes[alpha3]);
