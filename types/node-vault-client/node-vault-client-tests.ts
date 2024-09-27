import VaultClient, { Lease } from "node-vault-client";

const vaultClient = VaultClient.boot("main", {
    api: {
        url: "https://vault.example.com:8200",
    },
    auth: {
        type: "iam",
        config: {
            role: "test-role",
            credentials: {
                accessKeyId: "test-access-key",
                secretAccessKey: "test-secret-key",
                sessionToken: "test-session-token",
            },
        },
        mount: "secret",
    },
});

vaultClient.read("secret/data/test").then((lease: Lease) => { // kv2 secret engine (without data for kv1)
    if (lease) {
        const data = lease.getData().data;
        const token = data["some-key"];
        return token;
    }
}).catch((err: any) => {
    // handle error
});
