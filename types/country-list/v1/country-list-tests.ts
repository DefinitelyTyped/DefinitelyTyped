import countries from "country-list";

const Countries = countries();

// $ExpectType string | undefined
Countries.getCode("Barbados"); // BB

// $ExpectType string[]
Countries.getCodes();

// $ExpectType { [code: string]: string; }
Countries.getCodeList();

// $ExpectType { code: string; name: string; }[]
Countries.getData();

// $ExpectType string | undefined
Countries.getName("BB"); // Barbados

// $ExpectType { [name: string]: string; }
Countries.getNameList();

// $ExpectType string[]
Countries.getNames();
