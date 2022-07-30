import Allure from "allure-js-commons";

// @ts-expect-error
const shouldMakeError = new Allure("test");
const allure = new Allure();

allure.startSuite("suite");
allure.startCase("case");
allure.startCase("case", 123456789);

allure.endCase("passed");
allure.endCase("pending");
allure.endCase("skipped");
allure.endCase("failed");
allure.endCase("broken", 1232131232);
// @ts-expect-error
allure.endCase("error");

allure.startStep("error");
// @ts-expect-error
allure.endStep("error");

allure.setDescription("description");
allure.addAttachment("image", {}, "image/jpeg");
allure.pendingCase("pending");

allure.endSuite();
