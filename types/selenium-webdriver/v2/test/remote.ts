/* tslint:disable */

import * as remote from "selenium-webdriver/remote";
import * as webdriver from "selenium-webdriver";

function TestRemoteFileDetector() {
    const driver: webdriver.WebDriver = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();

    const fileDetector: remote.FileDetector = new remote.FileDetector();
    fileDetector.handleFile(driver, 'path/to/file').then((path: string) => { /* empty */ });
}
