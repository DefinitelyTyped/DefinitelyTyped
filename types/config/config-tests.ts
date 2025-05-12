import * as config from "config";
import { asyncConfig, resolveAsyncConfigs } from "config/async";
import { deferConfig } from "config/defer";
import { raw } from "config/raw";

declare module "config" {
    interface IConfig {
        firstName: string;
        lastName: string;
        fullName: string;
        info: {
            country: string;
            age: number;
            isOlympicAthlete: boolean;
            nest1: {
                nest2: {
                    anotherString: string;
                    nest3: {
                        anotherNumber: number;
                        nest4: {
                            nest5: {
                                anotherBoolean: boolean;
                            };
                        };
                    };
                };
            };
        };
    }
}

var class1: config.IConfig = config;

var hasUntyped: boolean = config.has("");
var hasTyped: boolean = config.has("info.age");

var stringReturnType: string = config.get("firstName");
var numberReturnType: number = config.get("info.age");
var deepValue: boolean = config.get("info.nest1.nest2.nest3.nest4.nest5.anotherBoolean");
// @ts-expect-error Type 'boolean' is not assignable to type 'string'
var invalidReturnType: string = config.get("info.isOlympicAthlete");
var directAccessToo: number = config.info.nest1.nest2.nest3.anotherNumber;

// util tests:
var extended1: any = config.util.extendDeep({}, {});
var extended2: any = config.util.extendDeep({}, {}, 20);
var extended3: any = config.util.extendDeep({}, {}, {}, 20);

var clone1: any = config.util.cloneDeep({});
var clone2: any = config.util.cloneDeep({}, 20);

// $ExpectType void
config.util.setPath({}, [""], null);
// $ExpectType void
config.util.setPath({}, [], "");
// $ExpectType void
config.util.setPath({}, [""], "");
// @ts-expect-error Argument of type 'string' is not assignable to parameter of type 'string[]'
config.util.setPath({}, "");
// @ts-expect-error Argument of type 'string' is not assignable to parameter of type 'object'
config.util.setPath("", []);

var equals1: boolean = config.util.equalsDeep({}, {});
var equals2: boolean = config.util.equalsDeep({}, {}, 20);

var diff1: any = config.util.diffDeep({}, {});
var diff2: any = config.util.diffDeep({}, {}, 20);

var immutable1: any = config.util.makeImmutable({});
var immutable2: any = config.util.makeImmutable({}, "");
var immutable3: any = config.util.makeImmutable({}, "", "");

var hidden1: any = config.util.makeHidden({}, "");
var hidden2: any = config.util.makeHidden({}, "", "");

var env: string = config.util.getEnv("");

var configSources: config.IConfigSource[] = config.util.getConfigSources();
var configSource: config.IConfigSource = configSources[0];
var configSourceName: string = configSource.name;
var configSourceOriginal: string | undefined = configSource.original;

var moduleDefaults: any = config.util.setModuleDefaults("moduleName", {});

asyncConfig(Promise.resolve());
resolveAsyncConfigs(config);

var deferredValueConfig = {
    firstName: "Foo",
    lastName: "Bar",
    fullName: deferConfig(function() {
        return this.firstName + " " + this.lastName;
    }),
};

var rawValueConfig = {
    outputFile: raw(Promise.resolve("foo")),
};
