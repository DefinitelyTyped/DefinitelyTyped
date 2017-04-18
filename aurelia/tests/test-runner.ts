import * as dependencyInjectionTests from "./dependency-injection-tests";
import * as metadataSpec from "./metadata.spec";


export var run = () => {
    dependencyInjectionTests.run();
    metadataSpec.run();
}