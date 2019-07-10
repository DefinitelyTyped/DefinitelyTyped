/// <reference types="baseui"/>
import * as React from 'react';
import { StyletronComponent } from 'styletron-react';
import { SIZE } from '../input';
import { OnChangeParams } from '../select';

export interface STATE_CHANGE_TYPE {
    textChange: 'textChange';
    countryChange: 'countryChange';
}

export { SIZE };

export interface COUNTRIES {
    AF: {label: 'Afghanistan (‫افغانستان‬‎)'; id: 'AF'; dialCode: '+93'};
    AL: {label: 'Albania (Shqipëri)'; id: 'AL'; dialCode: '+355'};
    DZ: {label: 'Algeria (‫الجزائر‬‎)'; id: 'DZ'; dialCode: '+213'};
    AS: {label: 'American Samoa'; id: 'AS'; dialCode: '+1684'};
    AD: {label: 'Andorra'; id: 'AD'; dialCode: '+376'};
    AO: {label: 'Angola'; id: 'AO'; dialCode: '+244'};
    AI: {label: 'Anguilla'; id: 'AI'; dialCode: '+1264'};
    AG: {label: 'Antigua and Barbuda'; id: 'AG'; dialCode: '+1268'};
    AR: {label: 'Argentina'; id: 'AR'; dialCode: '+54'};
    AM: {label: 'Armenia (Հայաստան)'; id: 'AM'; dialCode: '+374'};
    AW: {label: 'Aruba'; id: 'AW'; dialCode: '+297'};
    AU: {label: 'Australia'; id: 'AU'; dialCode: '+61'};
    AT: {label: 'Austria (Österreich)'; id: 'AT'; dialCode: '+43'};
    AZ: {label: 'Azerbaijan (Azərbaycan)'; id: 'AZ'; dialCode: '+994'};
    BS: {label: 'Bahamas'; id: 'BS'; dialCode: '+1242'};
    BH: {label: 'Bahrain (‫البحرين‬‎)'; id: 'BH'; dialCode: '+973'};
    BD: {label: 'Bangladesh (বাংলাদেশ)'; id: 'BD'; dialCode: '+880'};
    BB: {label: 'Barbados'; id: 'BB'; dialCode: '+1246'};
    BY: {label: 'Belarus (Беларусь)'; id: 'BY'; dialCode: '+375'};
    BE: {label: 'Belgium (België)'; id: 'BE'; dialCode: '+32'};
    BZ: {label: 'Belize'; id: 'BZ'; dialCode: '+501'};
    BJ: {label: 'Benin (Bénin)'; id: 'BJ'; dialCode: '+229'};
    BM: {label: 'Bermuda'; id: 'BM'; dialCode: '+1441'};
    BT: {label: 'Bhutan (འབྲུག)'; id: 'BT'; dialCode: '+975'};
    BO: {label: 'Bolivia'; id: 'BO'; dialCode: '+591'};
    BA: {
        label: 'Bosnia and Herzegovina (Босна и Херцеговина)';
        id: 'BA';
        dialCode: '+387';
    };
    BW: {label: 'Botswana'; id: 'BW'; dialCode: '+267'};
    BR: {label: 'Brazil (Brasil)'; id: 'BR'; dialCode: '+55'};
    IO: {label: 'British Indian Ocean Territory'; id: 'IO'; dialCode: '+246'};
    VG: {label: 'British Virgin Islands'; id: 'VG'; dialCode: '+1284'};
    BN: {label: 'Brunei'; id: 'BN'; dialCode: '+673'};
    BG: {label: 'Bulgaria (България)'; id: 'BG'; dialCode: '+359'};
    BF: {label: 'Burkina Faso'; id: 'BF'; dialCode: '+226'};
    BI: {label: 'Burundi (Uburundi)'; id: 'BI'; dialCode: '+257'};
    KH: {label: 'Cambodia (កម្ពុជា)'; id: 'KH'; dialCode: '+855'};
    CM: {label: 'Cameroon (Cameroun)'; id: 'CM'; dialCode: '+237'};
    CA: {label: 'Canada'; id: 'CA'; dialCode: '+1'};
    CV: {label: 'Cape Verde (Kabu Verdi)'; id: 'CV'; dialCode: '+238'};
    KY: {label: 'Cayman Islands'; id: 'KY'; dialCode: '+1345'};
    CF: {
        label: 'Central African Republic (République centrafricaine)';
        id: 'CF';
        dialCode: '+236';
    };
    TD: {label: 'Chad (Tchad)'; id: 'TD'; dialCode: '+235'};
    CL: {label: 'Chile'; id: 'CL'; dialCode: '+56'};
    CN: {label: 'China (中国)'; id: 'CN'; dialCode: '+86'};
    CX: {label: 'Christmas Island'; id: 'CX'; dialCode: '+61'};
    CC: {label: 'Cocos (Keeling) Islands'; id: 'CC'; dialCode: '+61'};
    CO: {label: 'Colombia'; id: 'CO'; dialCode: '+57'};
    KM: {label: 'Comoros (‫جزر القمر‬‎)'; id: 'KM'; dialCode: '+269'};
    CD: {
        label: 'Congo (DRC) (Jamhuri ya Kisoemokrasia ya Kongo)';
        id: 'CD';
        dialCode: '+243';
    };
    CG: {
        label: 'Congo (Republic) (Congo-Brazzaville)';
        id: 'CG';
        dialCode: '+242';
    };
    CK: {label: 'Cook Islands'; id: 'CK'; dialCode: '+682'};
    CR: {label: 'Costa Rica'; id: 'CR'; dialCode: '+506'};
    CI: {label: 'Côte d’Ivoire'; id: 'CI'; dialCode: '+225'};
    HR: {label: 'Croatia (Hrvatska)'; id: 'HR'; dialCode: '+385'};
    CU: {label: 'Cuba'; id: 'CU'; dialCode: '+53'};
    CW: {label: 'Curaçao'; id: 'CW'; dialCode: '+599'};
    CY: {label: 'Cyprus (Κύπρος)'; id: 'CY'; dialCode: '+357'};
    CZ: {label: 'Czech Republic (Česká republika)'; id: 'CZ'; dialCode: '+420'};
    DK: {label: 'Denmark (Danmark)'; id: 'DK'; dialCode: '+45'};
    DJ: {label: 'Djibouti'; id: 'DJ'; dialCode: '+253'};
    DM: {label: 'Dominica'; id: 'DM'; dialCode: '+1767'};
    DO: {
        label: 'Dominican Republic (República Dominicana)';
        id: 'DO';
        dialCode: '+1';
    };
    EC: {label: 'Ecuador'; id: 'EC'; dialCode: '+593'};
    EG: {label: 'Egypt (‫مصر‬‎)'; id: 'EG'; dialCode: '+20'};
    SV: {label: 'El Salvador'; id: 'SV'; dialCode: '+503'};
    GQ: {
        label: 'Equatorial Guinea (Guinea Ecuatorial)';
        id: 'GQ';
        dialCode: '+240';
    };
    ER: {label: 'Eritrea'; id: 'ER'; dialCode: '+291'};
    EE: {label: 'Estonia (Eesti)'; id: 'EE'; dialCode: '+372'};
    ET: {label: 'Ethiopia'; id: 'ET'; dialCode: '+251'};
    FK: {label: 'Falkland Islands (Islas Malvinas)'; id: 'FK'; dialCode: '+500'};
    FO: {label: 'Faroe Islands (Føroyar)'; id: 'FO'; dialCode: '+298'};
    FJ: {label: 'Fiji'; id: 'FJ'; dialCode: '+679'};
    FI: {label: 'Finland (Suomi)'; id: 'FI'; dialCode: '+358'};
    FR: {label: 'France'; id: 'FR'; dialCode: '+33'};
    GF: {label: 'French Guiana (Guyane française)'; id: 'GF'; dialCode: '+594'};
    PF: {
        label: 'French Polynesia (Polynésie française)';
        id: 'PF';
        dialCode: '+689';
    };
    GA: {label: 'Gabon'; id: 'GA'; dialCode: '+241'};
    GM: {label: 'Gambia'; id: 'GM'; dialCode: '+220'};
    GE: {label: 'Georgia (საქართველო)'; id: 'GE'; dialCode: '+995'};
    DE: {label: 'Germany (Deutschland)'; id: 'DE'; dialCode: '+49'};
    GH: {label: 'Ghana (Gaana)'; id: 'GH'; dialCode: '+233'};
    GI: {label: 'Gibraltar'; id: 'GI'; dialCode: '+350'};
    GR: {label: 'Greece (Ελλάδα)'; id: 'GR'; dialCode: '+30'};
    GL: {label: 'Greenland (Kalaallit Nunaat)'; id: 'GL'; dialCode: '+299'};
    GD: {label: 'Grenada'; id: 'GD'; dialCode: '+1473'};
    GP: {label: 'Guadeloupe'; id: 'GP'; dialCode: '+590'};
    GU: {label: 'Guam'; id: 'GU'; dialCode: '+1671'};
    GT: {label: 'Guatemala'; id: 'GT'; dialCode: '+502'};
    GG: {label: 'Guernsey'; id: 'GG'; dialCode: '+44'};
    GN: {label: 'Guinea (Guinée)'; id: 'GN'; dialCode: '+224'};
    GW: {label: 'Guinea-Bissau (Guiné Bissau)'; id: 'GW'; dialCode: '+245'};
    GY: {label: 'Guyana'; id: 'GY'; dialCode: '+592'};
    HT: {label: 'Haiti'; id: 'HT'; dialCode: '+509'};
    HN: {label: 'Honduras'; id: 'HN'; dialCode: '+504'};
    HK: {label: 'Hong Kong (香港)'; id: 'HK'; dialCode: '+852'};
    HU: {label: 'Hungary (Magyarország)'; id: 'HU'; dialCode: '+36'};
    IS: {label: 'Iceland (Ísland)'; id: 'IS'; dialCode: '+354'};
    IN: {label: 'India (भारत)'; id: 'IN'; dialCode: '+91'};
    ID: {label: 'Indonesia'; id: 'ID'; dialCode: '+62'};
    IR: {label: 'Iran (‫ایران‬‎)'; id: 'IR'; dialCode: '+98'};
    IQ: {label: 'Iraq (‫العراق‬‎)'; id: 'IQ'; dialCode: '+964'};
    IE: {label: 'Ireland'; id: 'IE'; dialCode: '+353'};
    IM: {label: 'Isle of Man'; id: 'IM'; dialCode: '+44'};
    IL: {label: 'Israel (‫ישראל‬‎)'; id: 'IL'; dialCode: '+972'};
    IT: {label: 'Italy (Italia)'; id: 'IT'; dialCode: '+39'};
    JM: {label: 'Jamaica'; id: 'JM'; dialCode: '+1'};
    JP: {label: 'Japan (日本)'; id: 'JP'; dialCode: '+81'};
    JE: {label: 'Jersey'; id: 'JE'; dialCode: '+44'};
    JO: {label: 'Jordan (‫الأردن‬‎)'; id: 'JO'; dialCode: '+962'};
    KZ: {label: 'Kazakhstan (Казахстан)'; id: 'KZ'; dialCode: '+7'};
    KE: {label: 'Kenya'; id: 'KE'; dialCode: '+254'};
    KI: {label: 'Kiribati'; id: 'KI'; dialCode: '+686'};
    XK: {label: 'Kosovo'; id: 'XK'; dialCode: '+383'};
    KW: {label: 'Kuwait (‫الكويت‬‎)'; id: 'KW'; dialCode: '+965'};
    KG: {label: 'Kyrgyzstan (Кыргызстан)'; id: 'KG'; dialCode: '+996'};
    LA: {label: 'Laos (ລາວ)'; id: 'LA'; dialCode: '+856'};
    LV: {label: 'Latvia (Latvija)'; id: 'LV'; dialCode: '+371'};
    LB: {label: 'Lebanon (‫لبنان‬‎)'; id: 'LB'; dialCode: '+961'};
    LS: {label: 'Lesotho'; id: 'LS'; dialCode: '+266'};
    LR: {label: 'Liberia'; id: 'LR'; dialCode: '+231'};
    LY: {label: 'Libya (‫ليبيا‬‎)'; id: 'LY'; dialCode: '+218'};
    LI: {label: 'Liechtenstein'; id: 'LI'; dialCode: '+423'};
    LT: {label: 'Lithuania (Lietuva)'; id: 'LT'; dialCode: '+370'};
    LU: {label: 'Luxembourg'; id: 'LU'; dialCode: '+352'};
    MO: {label: 'Macau (澳門)'; id: 'MO'; dialCode: '+853'};
    MK: {label: 'Macedonia (FYROM) (Македонија)'; id: 'MK'; dialCode: '+389'};
    MG: {label: 'Madagascar (Madagasikara)'; id: 'MG'; dialCode: '+261'};
    MW: {label: 'Malawi'; id: 'MW'; dialCode: '+265'};
    MY: {label: 'Malaysia'; id: 'MY'; dialCode: '+60'};
    MV: {label: 'Maldives'; id: 'MV'; dialCode: '+960'};
    ML: {label: 'Mali'; id: 'ML'; dialCode: '+223'};
    MT: {label: 'Malta'; id: 'MT'; dialCode: '+356'};
    MH: {label: 'Marshall Islands'; id: 'MH'; dialCode: '+692'};
    MQ: {label: 'Martinique'; id: 'MQ'; dialCode: '+596'};
    MR: {label: 'Mauritania (‫موريتانيا‬‎)'; id: 'MR'; dialCode: '+222'};
    MU: {label: 'Mauritius (Moris)'; id: 'MU'; dialCode: '+230'};
    YT: {label: 'Mayotte'; id: 'YT'; dialCode: '+262'};
    MX: {label: 'Mexico (México)'; id: 'MX'; dialCode: '+52'};
    FM: {label: 'Micronesia'; id: 'FM'; dialCode: '+691'};
    MD: {label: 'Moldova (Republica Moldova)'; id: 'MD'; dialCode: '+373'};
    MC: {label: 'Monaco'; id: 'MC'; dialCode: '+377'};
    MN: {label: 'Mongolia (Монгол)'; id: 'MN'; dialCode: '+976'};
    ME: {label: 'Montenegro (Crna Gora)'; id: 'ME'; dialCode: '+382'};
    MS: {label: 'Montserrat'; id: 'MS'; dialCode: '+1664'};
    MA: {label: 'Morocco (‫المغرب‬‎)'; id: 'MA'; dialCode: '+212'};
    MZ: {label: 'Mozambique (Moçambique)'; id: 'MZ'; dialCode: '+258'};
    MM: {label: 'Myanmar (Burma) (မြန်မာ)'; id: 'MM'; dialCode: '+95'};
    NA: {label: 'Namibia (Namibië)'; id: 'NA'; dialCode: '+264'};
    NR: {label: 'Nauru'; id: 'NR'; dialCode: '+674'};
    NP: {label: 'Nepal (नेपाल)'; id: 'NP'; dialCode: '+977'};
    NL: {label: 'Netherlands (Nederland)'; id: 'NL'; dialCode: '+31'};
    NC: {label: 'New Caledonia (Nouvelle-Calédonie)'; id: 'NC'; dialCode: '+687'};
    NZ: {label: 'New Zealand'; id: 'NZ'; dialCode: '+64'};
    NI: {label: 'Nicaragua'; id: 'NI'; dialCode: '+505'};
    NE: {label: 'Niger (Nijar)'; id: 'NE'; dialCode: '+227'};
    NG: {label: 'Nigeria'; id: 'NG'; dialCode: '+234'};
    NU: {label: 'Niue'; id: 'NU'; dialCode: '+683'};
    NF: {label: 'Norfolk Island'; id: 'NF'; dialCode: '+672'};
    KP: {
        label: 'North Korea (조선 민주주의 인민 공화국)';
        id: 'KP';
        dialCode: '+850';
    };
    MP: {label: 'Northern Mariana Islands'; id: 'MP'; dialCode: '+1670'};
    NO: {label: 'Norway (Norge)'; id: 'NO'; dialCode: '+47'};
    OM: {label: 'Oman (‫عُمان‬‎)'; id: 'OM'; dialCode: '+968'};
    PK: {label: 'Pakistan (‫پاکستان‬‎)'; id: 'PK'; dialCode: '+92'};
    PW: {label: 'Palau'; id: 'PW'; dialCode: '+680'};
    PS: {label: 'Palestine (‫فلسطين‬‎)'; id: 'PS'; dialCode: '+970'};
    PA: {label: 'Panama (Panamá)'; id: 'PA'; dialCode: '+507'};
    PG: {label: 'Papua New Guinea'; id: 'PG'; dialCode: '+675'};
    PY: {label: 'Paraguay'; id: 'PY'; dialCode: '+595'};
    PE: {label: 'Peru (Perú)'; id: 'PE'; dialCode: '+51'};
    PH: {label: 'Philippines'; id: 'PH'; dialCode: '+63'};
    PL: {label: 'Poland (Polska)'; id: 'PL'; dialCode: '+48'};
    PT: {label: 'Portugal'; id: 'PT'; dialCode: '+351'};
    PR: {label: 'Puerto Rico'; id: 'PR'; dialCode: '+1'};
    QA: {label: 'Qatar (‫قطر‬‎)'; id: 'QA'; dialCode: '+974'};
    RE: {label: 'Réunion (La Réunion)'; id: 'RE'; dialCode: '+262'};
    RO: {label: 'Romania (România)'; id: 'RO'; dialCode: '+40'};
    RU: {label: 'Russia (Россия)'; id: 'RU'; dialCode: '+7'};
    RW: {label: 'Rwanda'; id: 'RW'; dialCode: '+250'};
    BL: {label: 'Saint Barthélemy'; id: 'BL'; dialCode: '+590'};
    SH: {label: 'Saint Helena'; id: 'SH'; dialCode: '+290'};
    KN: {label: 'Saint Kitts and Nevis'; id: 'KN'; dialCode: '+1869'};
    LC: {label: 'Saint Lucia'; id: 'LC'; dialCode: '+1758'};
    MF: {
        label: 'Saint Martin (Saint-Martin (partie française))';
        id: 'MF';
        dialCode: '+590';
    };
    PM: {
        label: 'Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)';
        id: 'PM';
        dialCode: '+508';
    };
    VC: {label: 'Saint Vincent and the Grenadines'; id: 'VC'; dialCode: '+1784'};
    WS: {label: 'Samoa'; id: 'WS'; dialCode: '+685'};
    SM: {label: 'San Marino'; id: 'SM'; dialCode: '+378'};
    ST: {
        label: 'São Tomé and Príncipe (São Tomé e Príncipe)';
        id: 'ST';
        dialCode: '+239';
    };
    SA: {
        label: 'Saudi Arabia (‫المملكة العربية السعودية‬‎)';
        id: 'SA';
        dialCode: '+966';
    };
    SN: {label: 'Senegal (Sénégal)'; id: 'SN'; dialCode: '+221'};
    RS: {label: 'Serbia (Србија)'; id: 'RS'; dialCode: '+381'};
    SC: {label: 'Seychelles'; id: 'SC'; dialCode: '+248'};
    SL: {label: 'Sierra Leone'; id: 'SL'; dialCode: '+232'};
    SG: {label: 'Singapore'; id: 'SG'; dialCode: '+65'};
    SX: {label: 'Sint Maarten'; id: 'SX'; dialCode: '+1721'};
    SK: {label: 'Slovakia (Slovensko)'; id: 'SK'; dialCode: '+421'};
    SI: {label: 'Slovenia (Slovenija)'; id: 'SI'; dialCode: '+386'};
    SB: {label: 'Solomon Islands'; id: 'SB'; dialCode: '+677'};
    SO: {label: 'Somalia (Soomaaliya)'; id: 'SO'; dialCode: '+252'};
    ZA: {label: 'South Africa'; id: 'ZA'; dialCode: '+27'};
    KR: {label: 'South Korea (대한민국)'; id: 'KR'; dialCode: '+82'};
    SS: {label: 'South Sudan (‫جنوب السودان‬‎)'; id: 'SS'; dialCode: '+211'};
    ES: {label: 'Spain (España)'; id: 'ES'; dialCode: '+34'};
    LK: {label: 'Sri Lanka (ශ්‍රී ලංකාව)'; id: 'LK'; dialCode: '+94'};
    SD: {label: 'Sudan (‫السودان‬‎)'; id: 'SD'; dialCode: '+249'};
    SR: {label: 'Suriname'; id: 'SR'; dialCode: '+597'};
    SJ: {label: 'Svalbard and Jan Mayen'; id: 'SJ'; dialCode: '+47'};
    SZ: {label: 'Swaziland'; id: 'SZ'; dialCode: '+268'};
    SE: {label: 'Sweden (Sverige)'; id: 'SE'; dialCode: '+46'};
    CH: {label: 'Switzerland (Schweiz)'; id: 'CH'; dialCode: '+41'};
    SY: {label: 'Syria (‫سوريا‬‎)'; id: 'SY'; dialCode: '+963'};
    TW: {label: 'Taiwan (台灣)'; id: 'TW'; dialCode: '+886'};
    TJ: {label: 'Tajikistan'; id: 'TJ'; dialCode: '+992'};
    TZ: {label: 'Tanzania'; id: 'TZ'; dialCode: '+255'};
    TH: {label: 'Thailand (ไทย)'; id: 'TH'; dialCode: '+66'};
    TL: {label: 'Timor-Leste'; id: 'TL'; dialCode: '+670'};
    TG: {label: 'Togo'; id: 'TG'; dialCode: '+228'};
    TK: {label: 'Tokelau'; id: 'TK'; dialCode: '+690'};
    TO: {label: 'Tonga'; id: 'TO'; dialCode: '+676'};
    TT: {label: 'Trinisoad and Tobago'; id: 'TT'; dialCode: '+1868'};
    TN: {label: 'Tunisia (‫تونس‬‎)'; id: 'TN'; dialCode: '+216'};
    TR: {label: 'Turkey (Türkiye)'; id: 'TR'; dialCode: '+90'};
    TM: {label: 'Turkmenistan'; id: 'TM'; dialCode: '+993'};
    TC: {label: 'Turks and Caicos Islands'; id: 'TC'; dialCode: '+1649'};
    TV: {label: 'Tuvalu'; id: 'TV'; dialCode: '+688'};
    VI: {label: 'U.S. Virgin Islands'; id: 'VI'; dialCode: '+1340'};
    UG: {label: 'Uganda'; id: 'UG'; dialCode: '+256'};
    UA: {label: 'Ukraine (Україна)'; id: 'UA'; dialCode: '+380'};
    AE: {
        label: 'United Arab Emirates (‫الإمارات العربية المتحدة‬‎)';
        id: 'AE';
        dialCode: '+971';
    };
    GB: {label: 'United Kingdom'; id: 'GB'; dialCode: '+44'};
    US: {label: 'United States'; id: 'US'; dialCode: '+1'};
    UY: {label: 'Uruguay'; id: 'UY'; dialCode: '+598'};
    UZ: {label: 'Uzbekistan (Oʻzbekiston)'; id: 'UZ'; dialCode: '+998'};
    VU: {label: 'Vanuatu'; id: 'VU'; dialCode: '+678'};
    VA: {label: 'Vatican City (Città del Vaticano)'; id: 'VA'; dialCode: '+39'};
    VE: {label: 'Venezuela'; id: 'VE'; dialCode: '+58'};
    VN: {label: 'Vietnam (Việt Nam)'; id: 'VN'; dialCode: '+84'};
    WF: {
        label: 'Wallis and Futuna (Wallis-et-Futuna)';
        id: 'WF';
        dialCode: '+681';
    };
    YE: {label: 'Yemen (‫اليمن‬‎)'; id: 'YE'; dialCode: '+967'};
    ZM: {label: 'Zambia'; id: 'ZM'; dialCode: '+260'};
    ZW: {label: 'Zimbabwe'; id: 'ZW'; dialCode: '+263'};
    AX: {label: 'Åland Islands'; id: 'AX'; dialCode: '+358'};
}

export interface PhoneInputOverrides {
    Input?: Override<any>;
    DialCode?: Override<any>;
    CountrySelect?: Override<any>;
    CountrySelectDropdown?: Override<any>;
    CountrySelectDropdownListItem?: Override<any>;
    CountrySelectDropdownFlagColumn?: Override<any>;
    CountrySelectDropdownNameColumn?: Override<any>;
    CountrySelectDropdownDialcodeColumn?: Override<any>;
}
export interface PhoneInputProps {
  'aria-label'?: string;
  text?: string;
  country?: Country;
  onTextChange?: (event: React.SyntheticEvent<HTMLInputElement>) => any;
  onCountryChange?: (event: OnChangeParams) => any;
  mapIsoToLabel?: (iso: string) => string;
  size?: SIZE[keyof SIZE];
  maxDropdownHeight?: string;
  maxDropdownWidth?: string;
  overrides?: PhoneInputOverrides;
}
export const PhoneInput: React.FC<PhoneInputProps>;

export interface StatefulPhoneInputProps {
    'aria-label'?: string;
    initialState?: State;
    stateReducer?: StateReducer;
    onTextChange?: (event: React.SyntheticEvent<HTMLInputElement>) => any;
    onCountryChange?: (event: OnChangeParams) => any;
    mapIsoToLabel?: (iso: string) => string;
    overrides?: PhoneInputOverrides;
}
export const StatefulPhoneInput: React.FC<StatefulPhoneInputProps>;

export type StateReducer = (
    type: StateChange,
    nextState: State,
    currentState: State,
) => State;
export interface StatefulPhoneInputContainerProps {
  'aria-label'?: string;
  children?: React.ReactNode;
  initialState?: State;
  stateReducer?: StateReducer;
  onTextChange?: (event: React.SyntheticEvent<HTMLInputElement>) => any;
  onCountryChange?: (event: OnChangeParams) => any;
  mapIsoToLabel?: (iso: string) => string;
  overrides?: PhoneInputOverrides;
}
export interface Country {
    id: keyof COUNTRIES;
    label: string;
    dialCode: string;
}
export interface State {
    text?: string;
    country: Readonly<Country>;
}
export type StateChange = STATE_CHANGE_TYPE[keyof STATE_CHANGE_TYPE];
export class StatefulPhoneInputContainer extends React.Component<StatefulPhoneInputContainerProps, State> {
    internalSetState(type: StateChange, nextState: Readonly<State>): void;
    onTextChange(event: React.SyntheticEvent<HTMLInputElement>): void;
    onCountryChange(event: OnChangeParams): void;
}

export interface CountrySelectProps {
    country?: Country;
    inputRef?: React.Ref<HTMLInputElement>;
    onCountryChange?: (event: OnChangeParams) => any;
    size?: SIZE[keyof SIZE];
    maxDropdownWidth?: string;
    maxDropdownHeight?: string;
    mapIsoToLabel?: (iso: string) => string;
    overrides?: {
        DialCode?: Override<any>;
        CountrySelect?: Override<any>;
        CountrySelectDropdown?: Override<any>;
        CountrySelectDropdownListItem?: Override<any>;
        CountrySelectDropdownFlagColumn?: Override<any>;
        CountrySelectDropdownNameColumn?: Override<any>;
        CountrySelectDropdownDialcodeColumn?: Override<any>;
    };
}
export const CountrySelect: React.FC<CountrySelectProps>;

export interface CountrySelectDropdownProps {
    children?: Readonly<React.ReactNode[]>;
    country?: Country;
    maxDropdownHeight?: string;
    mapIsoToLabel?: (iso: string) => string;
    overrides?: {
        CountrySelectDropdown?: Override<any>;
        CountrySelectDropdownListItem?: Override<any>;
        CountrySelectDropdownFlagColumn?: Override<any>;
        CountrySelectDropdownNameColumn?: Override<any>;
        CountrySelectDropdownDialcodeColumn?: Override<any>;
    };
}
export const CountrySelectDropdown: React.RefForwardingComponent<CountrySelectDropdownProps>;

export interface FlagProps {
    iso: COUNTRIES[keyof COUNTRIES];
    width?: string;
}
export const Flag: React.FC<FlagProps>;

export const StyledFlag: StyletronComponent<any>;
export const StyledRoot: StyletronComponent<any>;
export const StyledDialCode: StyletronComponent<any>;
export const StyledCountrySelectDropdownContainer: StyletronComponent<any>;
export const StyledCountrySelectDropdownListItem: StyletronComponent<any>;
export const StyledCountrySelectDropdownFlagColumn: StyletronComponent<any>;
export const StyledCountrySelectDropdownNameColumn: StyletronComponent<any>;
export const StyledCountrySelectDropdownDialcodeColumn: StyletronComponent<any>;

export const DEFAULT_MAX_DROPDOWN_WIDTH: '400px';
export const DEFAULT_MAX_DROPDOWN_HEIGHT: '400px';
export const STATE_CHANGE_TYPE: STATE_CHANGE_TYPE;
export const COUNTRIES: COUNTRIES;
