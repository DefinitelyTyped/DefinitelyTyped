export type Currency =
  /** United Arab Emirates dirham */
  'AED' |
  /** Afghan afghani */
  'AFN' |
  /** Albanian lek */
  'ALL' |
  /** Armenian dram */
  'AMD' |
  /** Netherlands Antillean guilder */
  'ANG' |
  /** Angolan kwanza */
  'AOA' |
  /** Argentine peso */
  'ARS' |
  /** Australian dollar */
  'AUD' |
  /** Aruban florin */
  'AWG' |
  /** Azerbaijani manat */
  'AZN' |
  /** Bosnia and Herzegovina convertible mark */
  'BAM' |
  /** Barbados dollar */
  'BBD' |
  /** Bangladeshi taka */
  'BDT' |
  /** Bulgarian lev */
  'BGN' |
  /** Bahraini dinar */
  'BHD' |
  /** Burundian franc */
  'BIF' |
  /** Bermudian dollar */
  'BMD' |
  /** Brunei dollar */
  'BND' |
  /** Boliviano */
  'BOB' |
  /** Bolivian Mvdol (funds code) */
  'BOV' |
  /** Brazilian real */
  'BRL' |
  /** Bahamian dollar */
  'BSD' |
  /** Bhutanese ngultrum */
  'BTN' |
  /** Botswana pula */
  'BWP' |
  /** Belarusian ruble */
  'BYN' |
  /** Belize dollar */
  'BZD' |
  /** Canadian dollar */
  'CAD' |
  /** Congolese franc */
  'CDF' |
  /** WIR euro (complementary currency) */
  'CHE' |
  /** Swiss franc */
  'CHF' |
  /** WIR franc (complementary currency) */
  'CHW' |
  /** Unidad de Fomento (funds code) */
  'CLF' |
  /** Chilean peso */
  'CLP' |
  /** Chinese yuan[8] */
  'CNY' |
  /** Colombian peso */
  'COP' |
  /** Unidad de Valor Real (UVR) (funds code)[9] */
  'COU' |
  /** Costa Rican colon */
  'CRC' |
  /** Cuban convertible peso */
  'CUC' |
  /** Cuban peso */
  'CUP' |
  /** Cape Verdean escudo */
  'CVE' |
  /** Czech koruna */
  'CZK' |
  /** Djiboutian franc */
  'DJF' |
  /** Danish krone */
  'DKK' |
  /** Dominican peso */
  'DOP' |
  /** Algerian dinar */
  'DZD' |
  /** Egyptian pound */
  'EGP' |
  /** Eritrean nakfa */
  'ERN' |
  /** Ethiopian birr */
  'ETB' |
  /** Euro */
  'EUR' |
  /** Fiji dollar */
  'FJD' |
  /** Falkland Islands pound */
  'FKP' |
  /** Pound sterling */
  'GBP' |
  /** Georgian lari */
  'GEL' |
  /** Ghanaian cedi */
  'GHS' |
  /** Gibraltar pound */
  'GIP' |
  /** Gambian dalasi */
  'GMD' |
  /** Guinean franc */
  'GNF' |
  /** Guatemalan quetzal */
  'GTQ' |
  /** Guyanese dollar */
  'GYD' |
  /** Hong Kong dollar */
  'HKD' |
  /** Honduran lempira */
  'HNL' |
  /** Croatian kuna */
  'HRK' |
  /** Haitian gourde */
  'HTG' |
  /** Hungarian forint */
  'HUF' |
  /** Indonesian rupiah */
  'IDR' |
  /** Israeli new shekel */
  'ILS' |
  /** Indian rupee */
  'INR' |
  /** Iraqi dinar */
  'IQD' |
  /** Iranian rial */
  'IRR' |
  /** Icelandic króna */
  'ISK' |
  /** Jamaican dollar */
  'JMD' |
  /** Jordanian dinar */
  'JOD' |
  /** Japanese yen */
  'JPY' |
  /** Kenyan shilling */
  'KES' |
  /** Kyrgyzstani som */
  'KGS' |
  /** Cambodian riel */
  'KHR' |
  /** Comoro franc */
  'KMF' |
  /** North Korean won */
  'KPW' |
  /** South Korean won */
  'KRW' |
  /** Kuwaiti dinar */
  'KWD' |
  /** Cayman Islands dollar */
  'KYD' |
  /** Kazakhstani tenge */
  'KZT' |
  /** Lao kip */
  'LAK' |
  /** Lebanese pound */
  'LBP' |
  /** Sri Lankan rupee */
  'LKR' |
  /** Liberian dollar */
  'LRD' |
  /** Lesotho loti */
  'LSL' |
  /** Libyan dinar */
  'LYD' |
  /** Moroccan dirham */
  'MAD' |
  /** Moldovan leu */
  'MDL' |
  /** Malagasy ariary */
  'MGA' |
  /** Macedonian denar */
  'MKD' |
  /** Myanmar kyat */
  'MMK' |
  /** Mongolian tögrög */
  'MNT' |
  /** Macanese pataca */
  'MOP' |
  /** Mauritanian ouguiya */
  'MRU' |
  /** Mauritian rupee */
  'MUR' |
  /** Maldivian rufiyaa */
  'MVR' |
  /** Malawian kwacha */
  'MWK' |
  /** Mexican peso */
  'MXN' |
  /** Mexican Unidad de Inversion (UDI) (funds code) */
  'MXV' |
  /** Malaysian ringgit */
  'MYR' |
  /** Mozambican metical */
  'MZN' |
  /** Namibian dollar */
  'NAD' |
  /** Nigerian naira */
  'NGN' |
  /** Nicaraguan córdoba */
  'NIO' |
  /** Norwegian krone */
  'NOK' |
  /** Nepalese rupee */
  'NPR' |
  /** New Zealand dollar */
  'NZD' |
  /** Omani rial */
  'OMR' |
  /** Panamanian balboa */
  'PAB' |
  /** Peruvian sol */
  'PEN' |
  /** Papua New Guinean kina */
  'PGK' |
  /** Philippine peso[12] */
  'PHP' |
  /** Pakistani rupee */
  'PKR' |
  /** Polish złoty */
  'PLN' |
  /** Paraguayan guaraní */
  'PYG' |
  /** Qatari riyal */
  'QAR' |
  /** Romanian leu */
  'RON' |
  /** Serbian dinar */
  'RSD' |
  /** Russian ruble */
  'RUB' |
  /** Rwandan franc */
  'RWF' |
  /** Saudi riyal */
  'SAR' |
  /** Solomon Islands dollar */
  'SBD' |
  /** Seychelles rupee */
  'SCR' |
  /** Sudanese pound */
  'SDG' |
  /** Swedish krona/kronor */
  'SEK' |
  /** Singapore dollar */
  'SGD' |
  /** Saint Helena pound */
  'SHP' |
  /** Sierra Leonean leone */
  'SLL' |
  /** Somali shilling */
  'SOS' |
  /** Surinamese dollar */
  'SRD' |
  /** South Sudanese pound */
  'SSP' |
  /** São Tomé and Príncipe dobra */
  'STN' |
  /** Salvadoran colón */
  'SVC' |
  /** Syrian pound */
  'SYP' |
  /** Swazi lilangeni */
  'SZL' |
  /** Thai baht */
  'THB' |
  /** Tajikistani somoni */
  'TJS' |
  /** Turkmenistan manat */
  'TMT' |
  /** Tunisian dinar */
  'TND' |
  /** Tongan paʻanga */
  'TOP' |
  /** Turkish lira */
  'TRY' |
  /** Trinidad and Tobago dollar */
  'TTD' |
  /** New Taiwan dollar */
  'TWD' |
  /** Tanzanian shilling */
  'TZS' |
  /** Ukrainian hryvnia */
  'UAH' |
  /** Ugandan shilling */
  'UGX' |
  /** United States dollar */
  'USD' |
  /** United States dollar (next day) (funds code) */
  'USN' |
  /** Uruguay Peso en Unidades Indexadas (URUIURUI) (funds code) */
  'UYI' |
  /** Uruguayan peso */
  'UYU' |
  /** Unidad previsional[14] */
  'UYW' |
  /** Uzbekistan som */
  'UZS' |
  /** Venezuelan bolívar soberano[12] */
  'VES' |
  /** Vietnamese đồng */
  'VND' |
  /** Vanuatu vatu */
  'VUV' |
  /** Samoan tala */
  'WST' |
  /** CFA franc BEAC */
  'XAF' |
  /** Silver (one troy ounce) */
  'XAG' |
  /** Gold (one troy ounce) */
  'XAU' |
  /** European Composite Unit (EURCO) (bond market unit) */
  'XBA' |
  /** European Monetary Unit (E.M.U.-6) (bond market unit) */
  'XBB' |
  /** European Unit of Account 9 (E.U.A.-9) (bond market unit) */
  'XBC' |
  /** European Unit of Account 17 (E.U.A.-17) (bond market unit) */
  'XBD' |
  /** East Caribbean dollar */
  'XCD' |
  /** Special drawing rights */
  'XDR' |
  /** CFA franc BCEAO */
  'XOF' |
  /** Palladium (one troy ounce) */
  'XPD' |
  /** CFP franc (franc Pacifique) */
  'XPF' |
  /** Platinum (one troy ounce) */
  'XPT' |
  /** SUCRE */
  'XSU' |
  /** Code reserved for testing */
  'XTS' |
  /** ADB Unit of Account */
  'XUA' |
  /** No currency */
  'XXX' |
  /** Yemeni rial */
  'YER' |
  /** South African rand */
  'ZAR' |
  /** Zambian kwacha */
  'ZMW' |
  /** Zimbabwean dollar */
  'ZWL';
