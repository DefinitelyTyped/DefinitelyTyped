import worldCurrencies = require("world-currencies");

// test interface exports
type Currency = worldCurrencies.Currency;
type IsoData = worldCurrencies.IsoData;
type Unit = worldCurrencies.Unit;
type MinorUnit = worldCurrencies.MinorUnit;
type CashValues = worldCurrencies.CashValues;

worldCurrencies; // $ExpectType Record<string, Currency>

const CAD = worldCurrencies.CAD;
CAD.name; // $ExpectType string
CAD.iso; // $ExpectType IsoData
CAD.iso.code; // $ExpectType string
CAD.iso.number; // $ExpectType string
CAD.units; // $ExpectType { major: Unit; minor: MinorUnit; minor2?: MinorUnit | undefined; }
CAD.units.major; // $ExpectType Unit
CAD.units.major.name; // $ExpectType string
CAD.units.major.symbol; // $ExpectType string
CAD.units.minor; // $ExpectType MinorUnit
CAD.units.minor.name; // $ExpectType string
CAD.units.minor.symbol; // $ExpectType string
CAD.units.minor.majorValue; // $ExpectType number
CAD.units.minor2; // $ExpectType MinorUnit | undefined
CAD.banknotes; // $ExpectType CashValues
CAD.banknotes.frequent; // $ExpectType string[]
CAD.banknotes.rare; // $ExpectType string[]
CAD.coins; // $ExpectType CashValues
