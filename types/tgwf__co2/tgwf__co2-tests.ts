import { averageIntensity, co2, hosting, marginalIntensity } from "@tgwf/co2";

const averageData = averageIntensity.data;
const averageAus = averageIntensity.data.AUS;
const averageType = averageIntensity.type;

const marginalData = marginalIntensity.data;
const marginalAus = marginalIntensity.data.AUS;
const marginalType = marginalIntensity.type;
const marginalYear = marginalIntensity.year;

// Test the OneByte class
const oneByte = new co2({ model: "1byte" });
const oneByteCO2PerByte = oneByte.perByte(1000, true);

// Test the SWD class
const swd = new co2({ model: "swd" });
const swdCO2PerByte = swd.perByte(1000, true);
const swdCO2PerVisit = swd.perVisit(1000, true);

// Test the SWD class with segment results
const swdSegment = new co2({ model: "swd", results: "segment" });
const swdSegmentCO2PerByte = swdSegment.perByte(1000, true);
const swdSegmentCO2PerVisit = swdSegment.perVisit(1000, true);

// Test green hosting check using API
const googleCheck = hosting.check("google.com");
const arrayCheck = hosting.check(["google.com", "facebook.com"]);
