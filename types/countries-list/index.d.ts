// Type definitions for countries-list 2.3
// Project: https://github.com/annexare/Countries
// Definitions by: Dmytro <https://github.com/z-ax>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export interface Country {
    /**
     * Capital in English.
     */
    capital: string;
    /**
     * Continent alpha-2 code.
     */
    continent: string;
    /**
     * Currency alpha-3 codes, comma-separated.
     */
    currency: string;
    /**
     * Country flag Emoji.
     */
    emoji: string;
    /**
     * Country flag Emoji string unicode characters space-separated, e.g. "U+1F1FA U+1F1E6".
     */
    emojiU: string;
    /**
     * List of Country's spoken Languages (alpha-2 codes).
     */
    languages: string[];
    /**
     * Country name in English.
     */
    name: string;
    /**
     * Country name written natively.
     */
    native: string;
    /**
     * Calling phone codes, comma-separated.
     */
    phone: string;
}

export interface Language {
    /**
     * Language name in English.
     */
    name: string;
    /**
     * Language name written natively.
     */
    native: string;
    /**
     * Specified if Language is RTL.
     */
    rtl?: number;
}

/**
 * Continents, key-value object (key is alpha-2 code).
 */
export const continents: {
    AF: string;
    AN: string;
    AS: string;
    EU: string;
    NA: string;
    OC: string;
    SA: string;
};

/**
 * Countries, key-value object (key is alpha-2 code, uppercase).
 */
export const countries: {
    AD: Country;
    AE: Country;
    AF: Country;
    AG: Country;
    AI: Country;
    AL: Country;
    AM: Country;
    AO: Country;
    AQ: Country;
    AR: Country;
    AS: Country;
    AT: Country;
    AU: Country;
    AW: Country;
    AX: Country;
    AZ: Country;
    BA: Country;
    BB: Country;
    BD: Country;
    BE: Country;
    BF: Country;
    BG: Country;
    BH: Country;
    BI: Country;
    BJ: Country;
    BL: Country;
    BM: Country;
    BN: Country;
    BO: Country;
    BQ: Country;
    BR: Country;
    BS: Country;
    BT: Country;
    BV: Country;
    BW: Country;
    BY: Country;
    BZ: Country;
    CA: Country;
    CC: Country;
    CD: Country;
    CF: Country;
    CG: Country;
    CH: Country;
    CI: Country;
    CK: Country;
    CL: Country;
    CM: Country;
    CN: Country;
    CO: Country;
    CR: Country;
    CU: Country;
    CV: Country;
    CW: Country;
    CX: Country;
    CY: Country;
    CZ: Country;
    DE: Country;
    DJ: Country;
    DK: Country;
    DM: Country;
    DO: Country;
    DZ: Country;
    EC: Country;
    EE: Country;
    EG: Country;
    EH: Country;
    ER: Country;
    ES: Country;
    ET: Country;
    FI: Country;
    FJ: Country;
    FK: Country;
    FM: Country;
    FO: Country;
    FR: Country;
    GA: Country;
    GB: Country;
    GD: Country;
    GE: Country;
    GF: Country;
    GG: Country;
    GH: Country;
    GI: Country;
    GL: Country;
    GM: Country;
    GN: Country;
    GP: Country;
    GQ: Country;
    GR: Country;
    GS: Country;
    GT: Country;
    GU: Country;
    GW: Country;
    GY: Country;
    HK: Country;
    HM: Country;
    HN: Country;
    HR: Country;
    HT: Country;
    HU: Country;
    ID: Country;
    IE: Country;
    IL: Country;
    IM: Country;
    IN: Country;
    IO: Country;
    IQ: Country;
    IR: Country;
    IS: Country;
    IT: Country;
    JE: Country;
    JM: Country;
    JO: Country;
    JP: Country;
    KE: Country;
    KG: Country;
    KH: Country;
    KI: Country;
    KM: Country;
    KN: Country;
    KP: Country;
    KR: Country;
    KW: Country;
    KY: Country;
    KZ: Country;
    LA: Country;
    LB: Country;
    LC: Country;
    LI: Country;
    LK: Country;
    LR: Country;
    LS: Country;
    LT: Country;
    LU: Country;
    LV: Country;
    LY: Country;
    MA: Country;
    MC: Country;
    MD: Country;
    ME: Country;
    MF: Country;
    MG: Country;
    MH: Country;
    MK: Country;
    ML: Country;
    MM: Country;
    MN: Country;
    MO: Country;
    MP: Country;
    MQ: Country;
    MR: Country;
    MS: Country;
    MT: Country;
    MU: Country;
    MV: Country;
    MW: Country;
    MX: Country;
    MY: Country;
    MZ: Country;
    NA: Country;
    NC: Country;
    NE: Country;
    NF: Country;
    NG: Country;
    NI: Country;
    NL: Country;
    NO: Country;
    NP: Country;
    NR: Country;
    NU: Country;
    NZ: Country;
    OM: Country;
    PA: Country;
    PE: Country;
    PF: Country;
    PG: Country;
    PH: Country;
    PK: Country;
    PL: Country;
    PM: Country;
    PN: Country;
    PR: Country;
    PS: Country;
    PT: Country;
    PW: Country;
    PY: Country;
    QA: Country;
    RE: Country;
    RO: Country;
    RS: Country;
    RU: Country;
    RW: Country;
    SA: Country;
    SB: Country;
    SC: Country;
    SD: Country;
    SE: Country;
    SG: Country;
    SH: Country;
    SI: Country;
    SJ: Country;
    SK: Country;
    SL: Country;
    SM: Country;
    SN: Country;
    SO: Country;
    SR: Country;
    SS: Country;
    ST: Country;
    SV: Country;
    SX: Country;
    SY: Country;
    SZ: Country;
    TC: Country;
    TD: Country;
    TF: Country;
    TG: Country;
    TH: Country;
    TJ: Country;
    TK: Country;
    TL: Country;
    TM: Country;
    TN: Country;
    TO: Country;
    TR: Country;
    TT: Country;
    TV: Country;
    TW: Country;
    TZ: Country;
    UA: Country;
    UG: Country;
    UM: Country;
    US: Country;
    UY: Country;
    UZ: Country;
    VA: Country;
    VC: Country;
    VE: Country;
    VG: Country;
    VI: Country;
    VN: Country;
    VU: Country;
    WF: Country;
    WS: Country;
    XK: Country;
    YE: Country;
    YT: Country;
    ZA: Country;
    ZM: Country;
    ZW: Country;
};

/**
 * Languages in use only, key-value object (key is alpha-2 code).
 */
export const languages: {
    af: Language;
    am: Language;
    ar: Language;
    ay: Language;
    az: Language;
    be: Language;
    bg: Language;
    bi: Language;
    bn: Language;
    bs: Language;
    ca: Language;
    ch: Language;
    cs: Language;
    da: Language;
    de: Language;
    dv: Language;
    dz: Language;
    el: Language;
    en: Language;
    es: Language;
    et: Language;
    eu: Language;
    fa: Language;
    ff: Language;
    fi: Language;
    fj: Language;
    fo: Language;
    fr: Language;
    ga: Language;
    gl: Language;
    gn: Language;
    gv: Language;
    he: Language;
    hi: Language;
    hr: Language;
    ht: Language;
    hu: Language;
    hy: Language;
    id: Language;
    is: Language;
    it: Language;
    ja: Language;
    ka: Language;
    kg: Language;
    kk: Language;
    kl: Language;
    km: Language;
    ko: Language;
    ku: Language;
    ky: Language;
    la: Language;
    lb: Language;
    ln: Language;
    lo: Language;
    lt: Language;
    lu: Language;
    lv: Language;
    mg: Language;
    mh: Language;
    mi: Language;
    mk: Language;
    mn: Language;
    ms: Language;
    mt: Language;
    my: Language;
    na: Language;
    nb: Language;
    nd: Language;
    ne: Language;
    nl: Language;
    nn: Language;
    no: Language;
    nr: Language;
    ny: Language;
    oc: Language;
    pa: Language;
    pl: Language;
    ps: Language;
    pt: Language;
    qu: Language;
    rn: Language;
    ro: Language;
    ru: Language;
    rw: Language;
    sg: Language;
    si: Language;
    sk: Language;
    sl: Language;
    sm: Language;
    sn: Language;
    so: Language;
    sq: Language;
    sr: Language;
    ss: Language;
    st: Language;
    sv: Language;
    sw: Language;
    ta: Language;
    tg: Language;
    th: Language;
    ti: Language;
    tk: Language;
    tn: Language;
    to: Language;
    tr: Language;
    ts: Language;
    uk: Language;
    ur: Language;
    uz: Language;
    ve: Language;
    vi: Language;
    xh: Language;
    zh: Language;
    zu: Language;
};

/**
 * Languages, key-value object (key is alpha-2 code).
 * A complete list including not used by Countries list.
 */
export const languagesAll: {
    aa: Language;
    ab: Language;
    af: Language;
    ak: Language;
    am: Language;
    an: Language;
    ar: Language;
    as: Language;
    av: Language;
    ay: Language;
    az: Language;
    ba: Language;
    be: Language;
    bg: Language;
    bh: Language;
    bi: Language;
    bm: Language;
    bn: Language;
    bo: Language;
    br: Language;
    bs: Language;
    ca: Language;
    ce: Language;
    ch: Language;
    co: Language;
    cr: Language;
    cs: Language;
    cu: Language;
    cv: Language;
    cy: Language;
    da: Language;
    de: Language;
    dv: Language;
    dz: Language;
    ee: Language;
    el: Language;
    en: Language;
    eo: Language;
    es: Language;
    et: Language;
    eu: Language;
    fa: Language;
    ff: Language;
    fi: Language;
    fj: Language;
    fo: Language;
    fr: Language;
    fy: Language;
    ga: Language;
    gd: Language;
    gl: Language;
    gn: Language;
    gu: Language;
    gv: Language;
    ha: Language;
    he: Language;
    hi: Language;
    ho: Language;
    hr: Language;
    ht: Language;
    hu: Language;
    hy: Language;
    hz: Language;
    ia: Language;
    id: Language;
    ie: Language;
    ig: Language;
    ii: Language;
    ik: Language;
    io: Language;
    is: Language;
    it: Language;
    iu: Language;
    ja: Language;
    jv: Language;
    ka: Language;
    kg: Language;
    ki: Language;
    kj: Language;
    kk: Language;
    kl: Language;
    km: Language;
    kn: Language;
    ko: Language;
    kr: Language;
    ks: Language;
    ku: Language;
    kv: Language;
    kw: Language;
    ky: Language;
    la: Language;
    lb: Language;
    lg: Language;
    li: Language;
    ln: Language;
    lo: Language;
    lt: Language;
    lv: Language;
    mg: Language;
    mh: Language;
    mi: Language;
    mk: Language;
    ml: Language;
    mn: Language;
    mo: Language;
    mr: Language;
    ms: Language;
    mt: Language;
    my: Language;
    na: Language;
    nd: Language;
    ne: Language;
    ng: Language;
    nl: Language;
    nn: Language;
    no: Language;
    nr: Language;
    nv: Language;
    ny: Language;
    oc: Language;
    oj: Language;
    om: Language;
    or: Language;
    os: Language;
    pa: Language;
    pi: Language;
    pl: Language;
    ps: Language;
    pt: Language;
    qu: Language;
    rm: Language;
    rn: Language;
    ro: Language;
    ru: Language;
    rw: Language;
    sa: Language;
    sc: Language;
    sd: Language;
    se: Language;
    sg: Language;
    sh: Language;
    si: Language;
    sk: Language;
    sl: Language;
    sm: Language;
    sn: Language;
    so: Language;
    sq: Language;
    sr: Language;
    ss: Language;
    st: Language;
    su: Language;
    sv: Language;
    sw: Language;
    ta: Language;
    te: Language;
    tg: Language;
    th: Language;
    ti: Language;
    tk: Language;
    tl: Language;
    tn: Language;
    to: Language;
    tr: Language;
    ts: Language;
    tt: Language;
    tw: Language;
    ty: Language;
    ug: Language;
    uk: Language;
    ur: Language;
    uz: Language;
    ve: Language;
    vi: Language;
    vo: Language;
    wa: Language;
    wo: Language;
    xh: Language;
    yi: Language;
    yo: Language;
    za: Language;
    zh: Language;
    zu: Language;
};

/**
 * Returns country flag Emoji string.
 */
export function getEmojiFlag(countryCode: string): string;

/**
 * Returns country flag Emoji string unicode characters space-separated, e.g. "U+1F1FA U+1F1E6".
 */
export function getUnicode(emoji: string): string;
