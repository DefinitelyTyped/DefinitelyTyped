import {
    ManifestId,
    SubAppsAddResponse,
    SubAppsRemoveResponse,
    SubAppsListResult
} from "w3c-subapps";

async function testSubAppsApi() {
    // --------------------------------------------------------------------------------
    // Synchronous Type Definitions (Interfaces)
    // --------------------------------------------------------------------------------

    const manifestId: ManifestId = "some-id";
    // $ExpectType string
    manifestId;

    const addResponse: SubAppsAddResponse = {
        installedApps: { "/path": manifestId },
        failedApps: { "/path2": new DOMException() }
    };
    // $ExpectType Record<string, string>
    addResponse.installedApps;
    // $ExpectType Record<string, DOMException>
    addResponse.failedApps;

    const removeResponse: SubAppsRemoveResponse = {
        removedApps: [manifestId],
        failedApps: { "/path2": new DOMException() }
    };
    // $ExpectType string[]
    removeResponse.removedApps;
    // $ExpectType Record<string, DOMException>
    removeResponse.failedApps;

    const listResult: SubAppsListResult = {
        appName: "App 1"
    };
    // $ExpectType string
    listResult.appName;

    // --------------------------------------------------------------------------------
    // SubApps (Window Augmentation)
    // --------------------------------------------------------------------------------

    if (window.subApps) {
        const subApps = window.subApps;
        // $ExpectType SubApps
        subApps;

        const addPromise = subApps.add(["/path1"]);
        // $ExpectType Promise<SubAppsAddResponse>
        addPromise;

        const removePromise = subApps.remove([manifestId]);
        // $ExpectType Promise<SubAppsRemoveResponse>
        removePromise;

        const listPromise = subApps.list();
        // $ExpectType Promise<Record<string, SubAppsListResult>>
        listPromise;
    }
}
