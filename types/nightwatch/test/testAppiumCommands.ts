import { AppiumGeolocation, NightwatchAPI } from "nightwatch";
import { isNightwatchAPI, isType } from "./utils";

//
// orientation
//
describe("orientation commands", function() {
    it("tests orientation commands", function() {
        isNightwatchAPI(app);
        isType<boolean>(app.isAppiumClient());

        app
            .appium.getOrientation(function(result) {
                isNightwatchAPI(this);
                if (result.status === 0) {
                    isType<"LANDSCAPE" | "PORTRAIT">(result.value);
                }
            })
            .appium.setOrientation("LANDSCAPE", function(result) {
                isNightwatchAPI(this);
                if (result.status === 0) {
                    isType<"LANDSCAPE" | "PORTRAIT">(result.value);
                }
            });
    });

    it("tests orientation commands with async/await", async function() {
        isNightwatchAPI(app);
        isType<boolean>(app.isAppiumClient());

        const orientation = await app.appium.getOrientation();
        isType<"LANDSCAPE" | "PORTRAIT">(orientation);

        const result = await app.appium.setOrientation("PORTRAIT");
        isType<"LANDSCAPE" | "PORTRAIT">(result);
    });
});

//
// context commands
//
describe("context commands", function() {
    it("tests context commands", function(app: NightwatchAPI) {
        isType<boolean>(app.isAppiumClient());

        app
            .appium.getContexts(function(result) {
                isNightwatchAPI(this);
                if (result.status === 0) {
                    isType<string[]>(result.value);
                }
            })
            .appium.getContext(function(result) {
                isNightwatchAPI(this);
                if (result.status === 0) {
                    isType<string | null>(result.value);
                }
            })
            .appium.setContext("something", function(result) {
                isNightwatchAPI(this);
                if (result.status === 0) {
                    isType<null>(result.value);
                }
            });
    });

    it("tests context commands with async/await", async function(app: NightwatchAPI) {
        isType<boolean>(app.isAppiumClient());

        const contexts = await app.appium.getContexts();
        isType<string[]>(contexts);

        const context = await app.appium.getContext();
        isType<string | null>(context);

        const result = await app.appium.setContext("random");
        isType<null>(result);
    });
});

//
// activity commands
//
describe("activity commands", function() {
    it("tests activity commands", function(app: NightwatchAPI) {
        app
            .appium.startActivity({
                appPackage: "com.some.package",
                appActivity: "some.activity",
            }, function(result) {
                isNightwatchAPI(this);
                if (result.status === 0) {
                    isType<null>(result.value);
                }
            })
            .appium.getCurrentActivity(function(result) {
                isNightwatchAPI(this);
                if (result.status === 0) {
                    isType<string>(result.value);
                }
            })
            .appium.getCurrentPackage(function(result) {
                isNightwatchAPI(this);
                if (result.status === 0) {
                    isType<string>(result.value);
                }
            });
    });

    it("tests activity commands with async/await", async function(app: NightwatchAPI) {
        // @ts-expect-error
        await app.appium.startActivity({
            appPackage: "com.something",
        });

        const result = await app.appium.startActivity({
            appPackage: "com.something",
            appActivity: "some.activity",
            appWaitActivity: "some.other.activity",
        });
        isType<null>(result);

        const activity = await app.appium.getCurrentActivity();
        isType<string>(activity);

        const packageName = await app.appium.getCurrentPackage();
        isType<string>(packageName);
    });
});

//
// geolocation
//
describe("geolocation commands", function() {
    it("tests geolocation commands", function(app: NightwatchAPI) {
        app
            .appium.getGeolocation(function(result) {
                isNightwatchAPI(this);
                if (result.status === 0) {
                    isType<AppiumGeolocation>(result.value);
                }
            })
            .appium.setGeolocation({ latitude: 232, longitude: 2343, altitude: 5 }, function(result) {
                isNightwatchAPI(this);
                if (result.status === 0) {
                    isType<AppiumGeolocation>(result.value);
                }
            });
    });

    it("tests geolocation commands with async/await", async function(app: NightwatchAPI) {
        const location = await app.appium.getGeolocation();
        isType<AppiumGeolocation>(location);

        // @ts-expect-error
        await app.appium.setGeolocation({ latitude: 543 });
        // @ts-expect-error
        await app.appium.setGeolocation();

        const result = await app.appium.setGeolocation({ latitude: 232, longitude: 2343 });
        isType<AppiumGeolocation>(result);
    });
});

//
// keyboard interaction commands
//
describe("keyboard interaction commands", function() {
    it("tests keyboard interaction commands", function(app: NightwatchAPI) {
        app
            .appium.pressKeyCode(35, function(result) {
                isNightwatchAPI(this);
                if (result.status === 0) {
                    isType<null>(result.value);
                }
            })
            .appium.longPressKeyCode(31, function(result) {
                isNightwatchAPI(this);
                if (result.status === 0) {
                    isType<null>(result.value);
                }
            })
            .appium.hideKeyboard(function(result) {
                isNightwatchAPI(this);
                if (result.status === 0) {
                    isType<boolean>(result.value);
                }
            })
            .appium.isKeyboardShown(function(result) {
                isNightwatchAPI(this);
                if (result.status === 0) {
                    isType<boolean>(result.value);
                }
            });
    });

    it("tests keyboard interaction commands with async/await", async function(app: NightwatchAPI) {
        // @ts-expect-error
        await app.appium.pressKeyCode();
        // @ts-expect-error
        await app.appium.pressKeyCode(32, 45, () => {});

        await app.appium.pressKeyCode(56, () => {});
        await app.appium.pressKeyCode(44, undefined, undefined, () => {});

        const result = await app.appium.pressKeyCode(34, 29474, undefined, () => {});
        isType<null>(result);

        // @ts-expect-error
        await app.appium.longPressKeyCode();
        // @ts-expect-error
        await app.appium.longPressKeyCode(32, 45, () => {});

        await app.appium.longPressKeyCode(56, () => {});
        await app.appium.longPressKeyCode(44, undefined, undefined, () => {});

        const result2 = await app.appium.longPressKeyCode(34, 29474, undefined, () => {});
        isType<null>(result2);

        const result3 = await app.appium.hideKeyboard();
        isType<boolean>(result3);

        const result4 = await app.appium.isKeyboardShown();
        isType<boolean>(result4);
    });
});
