const getScriptManagerInstance = require("./scriptManager");
const { WebDriver } = require("selenium-webdriver");

function assert(condition, message) {
    if (!condition) {
        throw new Error(message || "Test failed");
    }
}

async function TestScriptManager() {
    const driver = new WebDriver();
    const scriptManager = await getScriptManagerInstance("browsingContextId", driver);

    try {
        // Test init method
        await scriptManager.init("browsingContextId");
        console.log("init method passed");

        // Test disownRealmScript method
        await scriptManager.disownRealmScript("realmId", "handles");
        console.log("disownRealmScript method passed");

        // Test disownBrowsingContextScript method
        await scriptManager.disownBrowsingContextScript("browsingContextId", "handles", "sandbox");
        console.log("disownBrowsingContextScript method passed");

        // Test callFunctionInRealm method
        await scriptManager.callFunctionInRealm(
            "realmId",
            "functionDeclaration",
            "awaitPromise",
            "argumentValueList",
            "thisParameter",
            "resultOwnership",
        );
        console.log("callFunctionInRealm method passed");

        // Test callFunctionInBrowsingContext method
        await scriptManager.callFunctionInBrowsingContext(
            "browsingContextId",
            "functionDeclaration",
            "awaitPromise",
            "argumentValueList",
            "thisParameter",
            "resultOwnership",
            "sandbox",
        );
        console.log("callFunctionInBrowsingContext method passed");

        // Test evaluateFunctionInRealm method
        await scriptManager.evaluateFunctionInRealm("realmId", "expression", "awaitPromise", "resultOwnership");
        console.log("evaluateFunctionInRealm method passed");

        // Test evaluateFunctionInBrowsingContext method
        await scriptManager.evaluateFunctionInBrowsingContext(
            "browsingContextId",
            "expression",
            "awaitPromise",
            "resultOwnership",
            "sandbox",
        );
        console.log("evaluateFunctionInBrowsingContext method passed");

        // Test addPreloadScript method
        await scriptManager.addPreloadScript("functionDeclaration", "argumentValueList", "sandbox");
        console.log("addPreloadScript method passed");

        // Test removePreloadScript method
        await scriptManager.removePreloadScript("script");
        console.log("removePreloadScript method passed");

        // Test getCallFunctionParams method
        scriptManager.getCallFunctionParams(
            "targetType",
            "id",
            "sandbox",
            "functionDeclaration",
            "awaitPromise",
            "argumentValueList",
            "thisParameter",
            "resultOwnership",
        );
        console.log("getCallFunctionParams method passed");

        // Test getEvaluateParams method
        scriptManager.getEvaluateParams("targetType", "id", "sandbox", "expression", "awaitPromise", "resultOwnership");
        console.log("getEvaluateParams method passed");

        // Test createEvaluateResult method
        scriptManager.createEvaluateResult({ result: { type: "SUCCESS", realm: "realmId", result: {} } });
        console.log("createEvaluateResult method passed");

        // Test realmInfoMapper method
        scriptManager.realmInfoMapper([]);
        console.log("realmInfoMapper method passed");

        // Test getAllRealms method
        await scriptManager.getAllRealms();
        console.log("getAllRealms method passed");

        // Test getRealmsByType method
        await scriptManager.getRealmsByType("type");
        console.log("getRealmsByType method passed");

        // Test getRealmsInBrowsingContext method
        await scriptManager.getRealmsInBrowsingContext("browsingContext");
        console.log("getRealmsInBrowsingContext method passed");

        // Test getRealmsInBrowsingContextByType method
        await scriptManager.getRealmsInBrowsingContextByType("browsingContext", "type");
        console.log("getRealmsInBrowsingContextByType method passed");
    } catch (err) {
        assert(false, err.message);
    }
}

TestScriptManager();
