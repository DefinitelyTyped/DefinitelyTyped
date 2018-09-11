declare function describe(desc: string, f: () => void): void;
declare function it(desc: string, f: () => void): void;

describe("Globals", () => {
    it("INSTALL_OPTIONS returns InstallOptions (dictionary)", () => {
        const options: CloudflareApps.InstallOptions = INSTALL_OPTIONS;
    });

    it("INSTALL_ID should return string", () => {
        const id: string = INSTALL_ID;
    });

    it("INSTALL_SCOPE returns InstallScope (dictionary)", () => {
        const scope: CloudflareApps.InstallScope = INSTALL_SCOPE;
    });

    it("INSTALL_PRODUCT returns InstallProduct", () => {
        const product: CloudflareApps.InstallProduct | undefined = INSTALL_PRODUCT;

        if (product != null) {
            const id = product.id;
        }
    });

    it("INSTALL", () => {
        const id: string = INSTALL.siteId;
    });

    it("CloudflareApps is CloudflareApps object", () => {
        const apps: CloudflareApps.CloudflareApps = CloudflareApps;
    });
});

describe("CloudflareApps methods", () => {
    it("createElement", () => {
        const element: Element = CloudflareApps.createElement({
            method: "replace",
            selector: "body > *"
        });

        const div: HTMLDivElement = document.createElement("div");
        const divElement: HTMLDivElement = CloudflareApps.createElement({
            method: "replace",
            selector: "body > *"
        }, div);
    });

    it("matchPage", () => {
        // Example: domain.com
        const truthyMatch: boolean = CloudflareApps.matchPage(["domain"]);
        const falsyMatch: boolean = CloudflareApps.matchPage(["foobar"]);
    });

    it("querySelector", () => {
        const element: Element | null = CloudflareApps.querySelector("body > *");
        const bodyElement: HTMLBodyElement | null = CloudflareApps.querySelector("body");
    });
});

describe("CloudflareApps properties", () => {
    it("installs", () => {
        const appId = "preview";
        const app: CloudflareApps.App | undefined = CloudflareApps.installs[appId];

        if (app != null) {
            const id: string = app.appId;
        }
    });

    it("proxy", () => {
        const proxy: CloudflareApps.CloudflareAppsProxy = CloudflareApps.proxy;
        const siteId: string = proxy.embedSiteId;
    });

    it("siteId", () => {
        const siteId: string = CloudflareApps.siteId;
    });
});
