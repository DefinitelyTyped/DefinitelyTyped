import { main, run, cli, helpers } from "envinfo";

run(
    {
        preset: "defaults",
    },
    {
        json: true,
        fullTree: true,
        duplicates: true,
        showNotFound: true,
    },
).then((raw: string) => {});

run({}).then((raw: string) => {});

main().then((raw: string) => {});

main(
    {
        System: [],
        Binaries: [],
        Managers: [],
        Utilities: [],
        Servers: [],
        Virtualization: [],
        SDKs: [],
        IDEs: [],
        Languages: [],
        Databases: [],
        Browsers: [],
        npmPackages: [],
        npmGlobalPackages: [],
    },
    {
        json: true,
        markdown: true,
        console: true,
        title: "title",
        fullTree: true,
        duplicates: true,
        showNotFound: true,
    },
).then((raw: string) => {});

cli({ all: true }).then((raw: string) => {});

helpers.getNodeInfo();
