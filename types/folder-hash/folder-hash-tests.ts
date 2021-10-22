import { defaults, hashElement, HashElementOptions } from "folder-hash";

const testAsync = async () => {
    // $ExpectType HashElementNode
    const result1 = await hashElement("./whatever");

    // $ExpectType string
    result1.hash;
    // $ExpectType string
    result1.name;
    // $ExpectType HashElementNode[]
    result1.children;
    for (const node of result1.children) {
        // $ExpectType string
        node.hash;
        // $ExpectType string
        node.name;
        // $ExpectType HashElementNode[]
        result1.children;
    }

    // $ExpectType HashElementNode
    await hashElement("./whatever", {});

    const stringOptions: HashElementOptions = {
        algo: "sha1",
        encoding: "hex",
        folders: {
            exclude: ["1"],
            include: ["2"],
            matchBasename: false,
            matchPath: false,
            ignoreRootName: true,
            ignoreBasename: true,
        },
        files: {
            exclude: ["1"],
            include: ["2"],
            matchBasename: false,
            matchPath: false,
            ignoreRootName: true,
            ignoreBasename: true,
        },
        symbolicLinks: {
            include: true,
            ignoreBasename: true,
            ignoreRootName: true,
        },
    };

    const functionOptions: HashElementOptions = {
        algo: "sha1",
        encoding: "binary",
        folders: {
            exclude: () => ["1"],
            include: () => ["2"],
            matchBasename: false,
            matchPath: false,
            ignoreRootName: true,
            ignoreBasename: true,
        },
        files: {
            exclude: () => ["1"],
            include: () => ["2"],
            matchBasename: false,
            matchPath: false,
            ignoreRootName: true,
            ignoreBasename: true,
        },
    };
    // $ExpectType HashElementNode
    await hashElement("./whatever", stringOptions);
    // $ExpectType HashElementNode
    await hashElement("./whatever", functionOptions);

    // $ExpectType HashElementNode
    await hashElement("./whatever", "directory", stringOptions);
    // $ExpectType HashElementNode
    await hashElement("./whatever", "directory", functionOptions);

    // $ExpectType void
    hashElement("./whatever", "directory", stringOptions, (error, result) => {
        // $ExpectType Error | undefined
        error;

        // $ExpectType HashElementNode | undefined
        result;
    });
    // $ExpectType void
    hashElement("./whatever", "directory", functionOptions, (error, result) => {
        // $ExpectType Error | undefined
        error;

        // $ExpectType HashElementNode | undefined
        result;
    });

    hashElement("./whatever", "directory", defaults, (error, result) => {
        // $ExpectType Error | undefined
        error;

        // $ExpectType HashElementNode | undefined
        result;
    });
};
