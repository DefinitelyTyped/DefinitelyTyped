import chromeWebstoreUpload from "chrome-webstore-upload";
import { createReadStream } from "node:fs";

const store = chromeWebstoreUpload({
    extensionId: "ecnglinljpjkbgmdpeiglonddahpbkeb",
    clientId: "xxxxxxxxxx",
    clientSecret: "xxxxxxxxxx",
    refreshToken: "xxxxxxxxxx",
});

(async () => {
    const extZip = createReadStream("ext.zip");
    const uploadResponse = await store.uploadExisting(extZip);
    const publishResponse = await store.publish("trustedTesters");
    const item = await store.get();
})();
