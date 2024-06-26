import * as webdriver from "selenium-webdriver";
import * as edge from "selenium-webdriver/edge";

function TestEdgeDriver() {
    let driver: edge.Driver = edge.Driver.createSession();
    driver = edge.Driver.createSession(webdriver.Capabilities.edge());

    let baseDriver: webdriver.WebDriver = driver;
}

function TestEdgeOptions() {
    let options: edge.Options = new edge.Options();

    options = options.setEdgeChromiumBinaryPath("path");
    options.useWebView(true);
}

function TestServiceBuilder() {
    let builder: edge.ServiceBuilder = new edge.ServiceBuilder();
    builder = new edge.ServiceBuilder("exe");

    let anything: any = builder.build();
    builder = builder.setPort(8080);
    builder = builder.setPath("path");
    builder = builder.setStdio("config");
    builder = builder.setStdio(["A", "B"]);
    builder = builder.setEnvironment({ A: "a", B: "b" });
}

function TestEdgeModule() {
    let service: any = edge.Driver.getDefaultService();
}
