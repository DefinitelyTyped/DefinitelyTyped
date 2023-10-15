import * as webdriver from "selenium-webdriver";
import * as remote from "selenium-webdriver/remote";

function TestRemoteFileDetector() {
    const driver: webdriver.WebDriver = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();

    const fileDetector: remote.FileDetector = new remote.FileDetector();
    fileDetector.handleFile(driver, "path/to/file").then((path: string) => {/* empty */});
}
