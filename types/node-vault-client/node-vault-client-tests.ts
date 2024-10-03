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

vaultClient.read("secret/data/test").then((lease: Lease | null) => {
    if (lease) {
        const data = lease.getData().data as Record<string, unknown>;
        const token = data["some-key"] as string | undefined;
        if (token) {
            return token;
        } else {
            throw new Error("Token not found in the Vault data.");
        }
    } else {
        throw new Error("Lease is null.");
    }
}).catch((err: unknown) => {
    // handle error
});
