import Sdk = require("@fusebit/add-on-sdk");

let method: Sdk.Method = "GET";
method = "POST";
method = "PUT";
method = "DELETE";
method = "CRON";

const item: Sdk.StorageItem = {
    storageId: "storageId",
    tags: { prop: "val" },
    etag: "etag",
    expires: "expires",
};

const dataObject: Sdk.StorageDataObject = {
    etag: "etag",
    tags: { prop: "val" },
    expires: "iso8601date",
    data: [{ col1: "val1", col2: "val2" }],
};

const storageOptions1: Sdk.ListStorageOptions = {
    count: 37,
};

const storageOptions2: Sdk.ListStorageOptions = {
    count: 42,
    next: "next",
};

const storageResult1: Sdk.ListStorageResult = {
    items: [item],
};

const storageResult2: Sdk.ListStorageResult = {
    items: [item],
    next: "next",
};

const storageClient: Sdk.StorageClient = {
    get: (storageId: string) => Promise.resolve(dataObject),
    put: (data: any, storageSubId: string) => Promise.resolve(dataObject),
    delete: (storageSubId: string, recursive?: boolean, forceRecursive?: boolean) => Promise.resolve(),
    list: (storageSubId: string, options?: Sdk.ListStorageOptions) => Promise.resolve(storageResult1),
};

const ctx: Sdk.FusebitContext = {
    accountId: "accountId",
    subscriptionId: "subscriptionId",
    boundaryId: "boundaryId",
    functionId: "functionId",
    configuration: {
        key: "value",
    },
    method,
    fusebit: {
        functionAccessToken: "functionAccessToken",
        caller: {
            permissions: ["perm1", "perm2"],
            accessToken: "accessToken",
        },
    },
    storage: storageClient,
};

Sdk.createStorageClient(ctx, "accessToken", "storagePrefix").then(client => {
    const storageClient2: Sdk.StorageClient = client;
});

Sdk.debug("messge");

Sdk.debug("message", { status: "404", message: "Error message" });

Sdk.getFunctionUrl(ctx, "accessToken", "boundaryId", "functionId").then(url => {
    const functionUrl: string = url;
});
