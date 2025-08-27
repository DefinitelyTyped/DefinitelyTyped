import { Client } from "fb-watchman";

const client = new Client();
const clientB = new Client({});

client.capabilityCheck({ optional: [], required: ["relative_root"] }, (e) => {
    if (e) {
        client.end();
        return;
    }
});
client.connect();

client.command(["watch-project", "/tmp"], () => {});

client.command(["watch-project", "/tmp"], (error, resp) => {
    if (error) {
        client.end();
        return;
    }

    // Verify that resp.watch is not any:
    // @ts-expect-error
    const not_any: number = resp.watch;
    const watch: string = resp.watch;
});

// @ts-expect-error
client.command(["watch-project", "/tmp", "INVALID ARG"], () => {});

client.command(
    [
        "subscribe",
        "/",
        "test",
        {
            expression: ["allof", ["type", "f"], ["name", "*.js"]],
            fields: ["name", "size", "mtime_ms"],
        },
    ],
    () => {},
);

client.command(
    [
        "subscribe",
        "/",
        "test",
        {
            expression: [
                "allof",
                ["dirname", "src/components"],
                ["anyof", ["suffix", ["js", "tsx", "ts"]], ["match", "package.json", "basename"]],
            ],
            fields: ["name", "type"],
        },
    ],
    () => {},
);

client.command(
    [
        "subscribe",
        "/",
        "test",
        {
            expression: [
                "allof",
                ["since", 1234567890, "mtime"],
                ["size", "gt", 1024],
                ["not", ["name", ["node_modules", ".git"], "wholename"]],
            ],
        },
    ],
    () => {},
);

client.command(
    [
        "subscribe",
        "/",
        "test",
        {
            expression: ["anyof", ["iname", "*.test.js"], ["dirname", "tests", ["depth", "le", 2]]],
            fields: ["name", "exists"],
        },
    ],
    () => {},
);

client.command(
    [
        "subscribe",
        "/",
        "test",
        {
            expression: [
                "allof",
                ["true"],
                ["not", ["anyof", ["dirname", "dist"], ["dirname", "build"], ["name", ["*.min.js", "*.map"]]]],
                ["exists"],
            ],
            fields: ["name", "type", "size"],
        },
    ],
    () => {},
);

client.command(
    [
        "subscribe",
        "/",
        "test",
        {
            expression: [
                "anyof",
                ["allof", ["type", "f"], ["suffix", ["md", "txt"]]],
                ["allof", ["type", "d"], ["match", "test-*"]],
            ],
        },
    ],
    () => {},
);

client.command(
    [
        "subscribe",
        "/",
        "test",
        {
            expression: [
                "allof",
                ["anyof", ["dirname", "src/api"], ["dirname", "src/utils"]],
                ["since", "c:1234567890"],
                ["not", ["empty"]],
            ],
            relative_root: "src",
        },
    ],
    () => {},
);

client.command(
    [
        "subscribe",
        "/",
        "test",
        {
            expression: [
                "anyof",
                ["allof", ["type", "f"], ["size", "lt", 10240], ["suffix", "json"]],
                ["allof", ["type", "l"], ["name", "*.config"]],
            ],
            fields: ["name", "size", "type"],
        },
    ],
    () => {},
);

// Invalid expression
client.command(
    [
        // @ts-expect-error
        "subscribe",
        "/",
        "test",
        {
            expression: ["INVALID", ["type", "f"], ["name", "*.js"]],
            fields: ["name", "size", "mtime_ms"],
        },
    ],
    () => {},
);

client.on("subscription", (resp) => {
    // @ts-expect-error
    const not_any: number = resp.root;

    console.log("Subscription update received:");
    console.log("- Watch root:", resp.root);
    console.log("- Subscription name:", resp.subscription);

    resp.files.forEach((file) => {
        // @ts-expect-error
        const not_any: number = file.name;
        const name: string = file.name;

        console.log("Changed file:", {
            name,
            size: file.size,
            mtime: file.mtime_ms,
            exists: file.exists,
            type: file.type,
        });

        // Handle different file types
        switch (file.type) {
            case undefined:
                break;
            case "f":
                console.log("Regular file changed:", file.name);
                break;
            case "d":
                console.log("Directory changed:", file.name);
                break;
            case "l":
                console.log("Symlink changed:", file.name);
                break;
            // @ts-expect-error
            case "INVALID":
        }
    });
});
