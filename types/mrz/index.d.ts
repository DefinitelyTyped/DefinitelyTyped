// Type definitions for mrz 3.1
// Project: https://github.com/cheminfo-js/mrz#readme
// Definitions by: Emily Marigold Klassen <https://github.com/forivall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export interface Result {
    /**
     * String identifying the format of the parsed MRZ. Supported formats are:
     *
     * * TD1 (identity card with three MRZ lines)
     * * TD2 (identity card with two MRZ lines)
     * * TD3 (passport)
     * * SWISS_DRIVING_LICENSE
     * * FRENCH_NATIONAL_ID
     */
    format: 'TD1' | 'TD2' | 'TD3' | 'SWISS_DRIVING_LICENSE' | 'FRENCH_NATIONAL_ID';
    /** `true` if all fields are valid. `false` otherwise. */
    valid: boolean;
    /**
     * Object mapping field names to their respective value. The value is set to `null`
     * if it is invalid. The value may be different than the raw value. For example
     * `result.fields.sex` will be "male" when the raw value was "M".
     */
    fields: ResultFields;
    /**
     * Array of objects describing all parsed fields.
     */
    details: ResultDetails[];
}

export interface ResultFields {
    documentNumber: string | null;
    documentNumberCheckDigit: string | null;
    documentCode: string | null;
    nationality: string | null;
    sex: 'male' | 'female' | 'nonspecified' | null;
    expirationDate: string | null;
    expirationDateCheckDigit: string | null;
    compositeCheckDigit: string | null;
    birthDate: string | null;
    birthDateCheckDigit: string | null;
    issueDate: string | null;
    firstName: string | null;
    lastName: string | null;
    issuingState: string | null;
    // td1 only
    optional1?: string;
    optional2?: string;
    // td2 only
    optional?: string;
    // td3 only
    personalNumber?: string;
    personalNumberCheckDigit?: string;
    // french national id only
    administrativeCode?: string;
    administrativeCode2?: string;
    // swiss driving license only
    languageCode?: string;
    pinCode?: string;
    versionNumber?: string;
}

export interface ResultDetails {
    /** Full english term for the field. */
    label: string;
    /** Name of the field in `result.fields`. */
    field: keyof Result['fields'];
    /** Value of the field or `null`. */
    value: string | null;
    valid: boolean;
    /** Array of ranges that are necessary to compute this field. */
    ranges: Range[];
    /** Index of the line where the field is located. */
    line: number;
    /** Index of the start of the field in `line`. */
    start: number;
    /** Index of the end of the field in `line`. */
    end: number;
}

export interface Range {
    line: number;
    start: number;
    end: number;
    raw: string;
}

/**
 * Parses the provided MRZ. The argument can be an array of lines or a single string
 * including line breaks. This function throws an error if the input is in an
 * unsupported format. It will never throw an error when there are invalid fields
 * in the MRZ. Instead, the `result.valid` value will be `false` and
 * details about the invalid fields can be found in `result.details`.
 */
export function parse(lines: string | ReadonlyArray<string>): Result;

export namespace parse {
    function FRENCH_NATIONAL_ID(lines: string | ReadonlyArray<string>): Result;
    function SWISS_DRIVING_LICENSE(lines: string | ReadonlyArray<string>): Result;
    function TD1(lines: string | ReadonlyArray<string>): Result;
    function TD2(lines: string | ReadonlyArray<string>): Result;
    function TD3(lines: string | ReadonlyArray<string>): Result;
}

export const formats: {
    readonly TD1: 'TD1';
    readonly TD2: 'TD2';
    readonly TD3: 'TD3';
    readonly SWISS_DRIVING_LICENSE: 'SWISS_DRIVING_LICENSE';
    readonly FRENCH_NATIONAL_ID: 'FRENCH_NATIONAL_ID';
};

export const states: {
    readonly ABW: string;
    readonly AFG: string;
    readonly AGO: string;
    readonly AIA: string;
    readonly ALA: string;
    readonly ALB: string;
    readonly AND: string;
    readonly ANT: string;
    readonly ARE: string;
    readonly ARG: string;
    readonly ARM: string;
    readonly ASM: string;
    readonly ATA: string;
    readonly ATF: string;
    readonly ATG: string;
    readonly AUS: string;
    readonly AUT: string;
    readonly AZE: string;
    readonly BDI: string;
    readonly BEL: string;
    readonly BEN: string;
    readonly BES: string;
    readonly BFA: string;
    readonly BGD: string;
    readonly BGR: string;
    readonly BHR: string;
    readonly BHS: string;
    readonly BIH: string;
    readonly BLM: string;
    readonly BLR: string;
    readonly BLZ: string;
    readonly BMU: string;
    readonly BOL: string;
    readonly BRA: string;
    readonly BRB: string;
    readonly BRN: string;
    readonly BTN: string;
    readonly BVT: string;
    readonly BWA: string;
    readonly CAF: string;
    readonly CAN: string;
    readonly CCK: string;
    readonly CHE: string;
    readonly CHL: string;
    readonly CHN: string;
    readonly CIV: string;
    readonly CMR: string;
    readonly COD: string;
    readonly COG: string;
    readonly COK: string;
    readonly COL: string;
    readonly COM: string;
    readonly CPV: string;
    readonly CRI: string;
    readonly CUB: string;
    readonly CUW: string;
    readonly CXR: string;
    readonly CYM: string;
    readonly CYP: string;
    readonly CZE: string;
    readonly D: string;
    readonly DJI: string;
    readonly DMA: string;
    readonly DNK: string;
    readonly DOM: string;
    readonly DZA: string;
    readonly ECU: string;
    readonly EGY: string;
    readonly ERI: string;
    readonly ESH: string;
    readonly ESP: string;
    readonly EST: string;
    readonly ETH: string;
    readonly EUE: string;
    readonly FIN: string;
    readonly FJI: string;
    readonly FLK: string;
    readonly FRA: string;
    readonly FRO: string;
    readonly FSM: string;
    readonly GAB: string;
    readonly GBD: string;
    readonly GBN: string;
    readonly GBO: string;
    readonly GBP: string;
    readonly GBR: string;
    readonly GEO: string;
    readonly GGY: string;
    readonly GHA: string;
    readonly GIB: string;
    readonly GIN: string;
    readonly GLP: string;
    readonly GMB: string;
    readonly GNB: string;
    readonly GNQ: string;
    readonly GRC: string;
    readonly GRD: string;
    readonly GRL: string;
    readonly GTM: string;
    readonly GUF: string;
    readonly GUM: string;
    readonly GUY: string;
    readonly HKG: string;
    readonly HMD: string;
    readonly HND: string;
    readonly HRV: string;
    readonly HTI: string;
    readonly HUN: string;
    readonly IDN: string;
    readonly IMN: string;
    readonly IND: string;
    readonly IOT: string;
    readonly IRL: string;
    readonly IRN: string;
    readonly IRQ: string;
    readonly ISL: string;
    readonly ISR: string;
    readonly ITA: string;
    readonly JAM: string;
    readonly JEY: string;
    readonly JOR: string;
    readonly JPN: string;
    readonly KAZ: string;
    readonly KEN: string;
    readonly KGZ: string;
    readonly KHM: string;
    readonly KIR: string;
    readonly KNA: string;
    readonly KOR: string;
    readonly KWT: string;
    readonly LAO: string;
    readonly LBN: string;
    readonly LBR: string;
    readonly LBY: string;
    readonly LCA: string;
    readonly LIE: string;
    readonly LKA: string;
    readonly LSO: string;
    readonly LTU: string;
    readonly LUX: string;
    readonly LVA: string;
    readonly MAC: string;
    readonly MAF: string;
    readonly MAR: string;
    readonly MCO: string;
    readonly MDA: string;
    readonly MDG: string;
    readonly MDV: string;
    readonly MEX: string;
    readonly MHL: string;
    readonly MKD: string;
    readonly MLI: string;
    readonly MLT: string;
    readonly MMR: string;
    readonly MNE: string;
    readonly MNG: string;
    readonly MNP: string;
    readonly MOZ: string;
    readonly MRT: string;
    readonly MSR: string;
    readonly MTQ: string;
    readonly MUS: string;
    readonly MWI: string;
    readonly MYS: string;
    readonly MYT: string;
    readonly NAM: string;
    readonly NCL: string;
    readonly NER: string;
    readonly NFK: string;
    readonly NGA: string;
    readonly NIC: string;
    readonly NIU: string;
    readonly NLD: string;
    readonly NOR: string;
    readonly NPL: string;
    readonly NRU: string;
    readonly NTZ: string;
    readonly NZL: string;
    readonly OMN: string;
    readonly PAK: string;
    readonly PAN: string;
    readonly PCN: string;
    readonly PER: string;
    readonly PHL: string;
    readonly PLW: string;
    readonly PNG: string;
    readonly POL: string;
    readonly PRI: string;
    readonly PRK: string;
    readonly PRT: string;
    readonly PRY: string;
    readonly PSE: string;
    readonly PYF: string;
    readonly QAT: string;
    readonly REU: string;
    readonly ROU: string;
    readonly RUS: string;
    readonly RWA: string;
    readonly SAU: string;
    readonly SDN: string;
    readonly SEN: string;
    readonly SGP: string;
    readonly SGS: string;
    readonly SHN: string;
    readonly SJM: string;
    readonly SLB: string;
    readonly SLE: string;
    readonly SLV: string;
    readonly SMR: string;
    readonly SOM: string;
    readonly SPM: string;
    readonly SRB: string;
    readonly SSD: string;
    readonly STP: string;
    readonly SUR: string;
    readonly SVK: string;
    readonly SVN: string;
    readonly SWE: string;
    readonly SWZ: string;
    readonly SXM: string;
    readonly SYC: string;
    readonly SYR: string;
    readonly TCA: string;
    readonly TCD: string;
    readonly TGO: string;
    readonly THA: string;
    readonly TJK: string;
    readonly TKL: string;
    readonly TKM: string;
    readonly TLS: string;
    readonly TON: string;
    readonly TTO: string;
    readonly TUN: string;
    readonly TUR: string;
    readonly TUV: string;
    readonly TWN: string;
    readonly TZA: string;
    readonly UGA: string;
    readonly UKR: string;
    readonly UMI: string;
    readonly UNA: string;
    readonly UNK: string;
    readonly UNO: string;
    readonly URY: string;
    readonly USA: string;
    readonly UZB: string;
    readonly VAT: string;
    readonly VCT: string;
    readonly VEN: string;
    readonly VGB: string;
    readonly VIR: string;
    readonly VNM: string;
    readonly VUT: string;
    readonly WLF: string;
    readonly WSM: string;
    readonly XBA: string;
    readonly XCC: string;
    readonly XCO: string;
    readonly XEC: string;
    readonly XIM: string;
    readonly XOM: string;
    readonly XPO: string;
    readonly XXA: string;
    readonly XXB: string;
    readonly XXX: string;
    readonly YEM: string;
    readonly ZAF: string;
    readonly ZMB: string;
    readonly ZWE: string;
    readonly [code: string]: string | undefined;
};
