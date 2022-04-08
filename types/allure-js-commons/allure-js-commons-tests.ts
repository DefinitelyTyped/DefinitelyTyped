import Allure from "allure-js-commons";

const shouldMakeError = new Allure("test"); // $ExpectError
const allure = new Allure();

allure.startSuite("suite");
allure.startCase("case");
allure.startCase("case", 123456789);

allure.endCase("passed");
allure.endCase("pending");
allure.endCase("skipped");
allure.endCase("failed");
allure.endCase("broken", 1232131232);
allure.endCase("error"); // $ExpectError

allure.startStep("error");
allure.endStep("error"); // $ExpectError

allure.setDescription("description");
allure.addAttachment("image", {}, "image/jpeg");
allure.pendingCase("pending");

allure.endSuite();
