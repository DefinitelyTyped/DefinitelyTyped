import * as indonesia from "territory-indonesia";

// $ExpectType Promise<District[]>
indonesia.getAllDistricts();

// $ExpectType Promise<Regency[]>
indonesia.getAllRegencies();

// $ExpectType Promise<Regency[]>
indonesia.getRegenciesOfProvinceName("DKI Jakarta");

// @ts-expect-error
getDistrictsOfRegency(22);
