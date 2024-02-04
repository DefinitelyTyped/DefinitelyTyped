import Importer from "mysql-import";

// @ts-expect-error
new Importer({ user: 1111 });

// @ts-expect-error
new Importer({ password: 1111 });

// @ts-expect-error
new Importer({ database: 1111 });

// @ts-expect-error
new Importer({ host: 1111 });

// @ts-expect-error
new Importer({ port: "port" });

// @ts-expect-error
new Importer({ ssl: 1111 });

// $ExpectType Importer
new Importer({});

// $ExpectType Importer
new Importer({ user: "user" });

// $ExpectType Importer
new Importer({ password: "password" });

// $ExpectType Importer
new Importer({ database: "database" });

// $ExpectType Importer
new Importer({ host: "host" });

// $ExpectType Importer
new Importer({ port: 1111 });

// $ExpectType Importer
new Importer({ ssl: "ssl" });

// $ExpectType Importer
const importer = new Importer({
    user: "user",
    password: "password",
    database: "database",
    host: "host",
    port: 1111,
    localAddress: "localAddress",
    socketPath: "socketPath",
    charset: "utf_general_ci",
    timezone: "local",
    connectTimeout: 1111,
    stringifyObjects: false,
    insecureAuth: false,
    typeCast: true,
    queryFormat: (query: string, values: Record<string, any>) => "query",
    supportBigNumbers: false,
    bigNumberStrings: false,
    dateStrings: false,
    debug: false,
    trace: true,
    multipleStatements: false,
    flags: ["flags", "flags"],
    ssl: "ssl",
});

// $ExpectType { file: string; size: number; }[]
const arr = importer.getImported();

importer.setEncoding("utf8"); // $ExpectType void
importer.setEncoding("ucs2"); // $ExpectType void
importer.setEncoding("utf16le"); // $ExpectType void
importer.setEncoding("latin1"); // $ExpectType void
importer.setEncoding("ascii"); // $ExpectType void
importer.setEncoding("base64"); // $ExpectType void
importer.setEncoding("hex"); // $ExpectType void

// @ts-expect-error
importer.setEncoding("testEncode");

// @ts-expect-error
importer.setEncoding(1111);

importer.use("database"); // $ExpectType Promise<void>

// @ts-expect-error
importer.use(1111);

importer.onProgress(() => {}); // $ExpectType void

// @ts-expect-error
importer.onProgress("test");

// @ts-expect-error
importer.onProgress(1111);

importer.onDumpComplete(() => {}); // $ExpectType void

// @ts-expect-error
importer.onDumpComplete("test");

// @ts-expect-error
importer.onDumpComplete(1111);

importer.import("test"); // $ExpectType Promise<void>

importer.import(["test", "test"]); // $ExpectType Promise<void>

// @ts-expect-error
importer.import(1111);

// @ts-expect-error
importer.import([1111, 1111]);

importer.disconnect(true); // $ExpectType Promise<void>

importer.disconnect(false); // $ExpectType Promise<void>

importer.disconnect(); // $ExpectType Promise<void>

// @ts-expect-error
importer.disconnect("test");

// @ts-expect-error
importer.disconnect(1111);
