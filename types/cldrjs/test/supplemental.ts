


const myCldr = new Cldr("en");

const supplemental = cldr.supplemental;

const supplementalPath = supplemental("plurals-type-cardinal/{languageId}/pluralRule-count-one");
const supplementalPathByArray = supplemental(["plurals-type-cardinal", "{languageId}/pluralRule-count-one"]);

const timeData = supplemental.timeData;
const allowed = timeData.allowed();
const preferred = timeData.preferred();

const weekData = supplemental.weekData;
const firstDay = weekData.firstDay();
const minDays = weekData.minDays();


