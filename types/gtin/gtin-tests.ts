import * as gtin from 'gtin';

gtin.isGTIN('12341238'); // $ExpectType boolean
gtin.validate('12341238'); // $ExpectType boolean
gtin.minify('0000012341238'); // $ExpectType string
gtin.getFormat('12341238'); // $ExpectType GtinFormat
gtin.getRealFormat('1234123412344'); // $ExpectType GtinFormat

gtin.upce.compress('1200000789'); // $ExpectType string | null
gtin.upce.expand('127890'); // $ExpectType string
