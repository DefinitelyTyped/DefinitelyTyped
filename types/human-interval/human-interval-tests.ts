import * as humanInterval from "human-interval";

function testHumanInterval() {
    const value1 = humanInterval("one minute");
    humanInterval.languageMap["one-hundred"] = 100;
    const value2 = humanInterval("one-hundred and fifty seconds");
}
