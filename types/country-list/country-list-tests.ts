import * as Countries from "country-list";

// $ExpectType string | undefined
Countries.getCode("Barbados"); // BB

// $ExpectType string[]
Countries.getCodes();

// $ExpectType { [code: string]: string; }
Countries.getCodeList();

// $ExpectType Country[]
Countries.getData();

// $ExpectType string | undefined
Countries.getName("BB"); // Barbados

// $ExpectType { [name: string]: string; }
Countries.getNameList();

// $ExpectType string[]
Countries.getNames();

const overwrittenCountry: Countries.Country = { code: "TW", name: "Taiwan" };

// $ExpectType void
Countries.overwrite([overwrittenCountry]);
