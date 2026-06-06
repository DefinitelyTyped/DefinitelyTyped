import { createInstance } from "salling-group__auth";

createInstance({
    auth: {
        type: "jwt",
        issuer: "issuer",
        secret: "secret",
        token: "token",
    },
    applicationName: "app",
    baseName: "base",
});
