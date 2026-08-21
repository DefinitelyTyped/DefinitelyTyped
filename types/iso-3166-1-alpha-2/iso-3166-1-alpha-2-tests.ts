import * as iso3311a2 from "iso-3166-1-alpha-2";

// $ExpectType string | null
iso3311a2.getCode("Germany");

// @ts-expect-error
iso3311a2.getCode(2);

// $ExpectType string[]
const codes = iso3311a2.getCodes();

// $ExpectType string
codes[0];

// $ExpectType string[]
iso3311a2.getCountries();

// $ExpectType string | undefined
iso3311a2.getCountry("DE");

// @ts-expect-error
iso3311a2.getCountry(2);

// $ExpectType { [code: string]: string | undefined; }
const data = iso3311a2.getData();

// $ExpectType string | undefined
data.DE;

// @ts-expect-error
data.DE.NDS;
