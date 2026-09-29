import { ManifestId, SubAppsAddResponse, SubAppsListResult, SubAppsRemoveResponse } from "w3c-sub-apps";

async function testSubAppsApi() {
    // --------------------------------------------------------------------------------
    // Synchronous Type Definitions (Interfaces)
    // --------------------------------------------------------------------------------

    const manifestId: ManifestId = "some-id";
    // $ExpectType string
    manifestId;

    const addResponse: SubAppsAddResponse = {
        installedApps: { "/path": manifestId },
        failedApps: { "/path2": new DOMException() },
    };
    // $ExpectType Record<string, string>
    addResponse.installedApps;
    // $ExpectType Record<string, DOMException>
    addResponse.failedApps;

    const removeResponse: SubAppsRemoveResponse = {
        removedApps: [manifestId],
        failedApps: { "/path2": new DOMException() },
    };
    // $ExpectType string[]
    removeResponse.removedApps;
    // $ExpectType Record<string, DOMException>
    removeResponse.failedApps;

    // Response members are always populated (possibly empty).
    const emptyAddResponse: SubAppsAddResponse = { installedApps: {}, failedApps: {} };
    const emptyRemoveResponse: SubAppsRemoveResponse = { removedApps: [], failedApps: {} };

    // @ts-expect-error - installedApps and failedApps are required
    const invalidAddResponse: SubAppsAddResponse = {};
    // @ts-expect-error - removedApps and failedApps are required
    const invalidRemoveResponse: SubAppsRemoveResponse = {};

    const listResult: SubAppsListResult = {
        appName: "App 1",
    };
    // $ExpectType string
    listResult.appName;

    // @ts-expect-error - appName is required
    const invalidListResult: SubAppsListResult = {};

    // --------------------------------------------------------------------------------
    // SubApps (Window Augmentation)
    // --------------------------------------------------------------------------------

    const subApps = window.subApps;
    // $ExpectType SubApps
    subApps;

    const addPromise = subApps.add(["/path1"]);
    // $ExpectType Promise<SubAppsAddResponse>
    addPromise;

    // readonly arrays are accepted as input.
    const installPaths: readonly string[] = ["/path1", "/path2"];
    subApps.add(installPaths);

    const removePromise = subApps.remove([manifestId]);
    // $ExpectType Promise<SubAppsRemoveResponse>
    removePromise;

    const manifestIds: readonly ManifestId[] = [manifestId];
    subApps.remove(manifestIds);

    const listPromise = subApps.list();
    // $ExpectType Promise<Record<string, SubAppsListResult>>
    listPromise;
}
