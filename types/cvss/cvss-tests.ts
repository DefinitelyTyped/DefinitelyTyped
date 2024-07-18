import cvss = require("cvss");

const CVSS_EXAMPLE = "CVSS:3.0/AV:P/AC:H/PR:N/UI:R/S:C/C:L/I:H/A:L";

const OPTIONS_EXAMPLE: cvss.CVSSOptions = {
    throw: false,
    baseOnly: false,
    temporal: false,
    env: false,
};

let result: number;
result = cvss.getScore(CVSS_EXAMPLE);
result = cvss.getScore(CVSS_EXAMPLE, OPTIONS_EXAMPLE);
result = cvss.getBaseScore(CVSS_EXAMPLE, {
    ...OPTIONS_EXAMPLE,
    // baseOnly: false, // <- throws up a type error
});
result = cvss.getTemporalScore(CVSS_EXAMPLE, {
    ...OPTIONS_EXAMPLE,
    // temporal: false, // <- throws up a type error
});
result = cvss.getTemporalScore(CVSS_EXAMPLE, {
    ...OPTIONS_EXAMPLE,
    // temporal: false, // <- throws up a type error
});
result = cvss.getEnvironmentalScore(CVSS_EXAMPLE, {
    ...OPTIONS_EXAMPLE,
    // env: false, // <- throws up a type error
});

let rating: cvss.CVSSRating;
rating = cvss.getRating(5.5);

let base: cvss.CVSSBase;
base = cvss.getBase(CVSS_EXAMPLE);
base = cvss.getBase(CVSS_EXAMPLE, OPTIONS_EXAMPLE);
base = cvss.getTemporal(CVSS_EXAMPLE, OPTIONS_EXAMPLE);
base = cvss.getEnvironmental(CVSS_EXAMPLE, OPTIONS_EXAMPLE);

const all = cvss.getAll(CVSS_EXAMPLE);
all.base;
all.temporal;
all.environmental;
