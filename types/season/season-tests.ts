import * as CSON from "season";

CSON.setCacheDir("/tmp");

CSON.stringify({});
CSON.stringify("string");
CSON.stringify(42);
CSON.stringify(true);

CSON.readFile("input.cson", (err, obj) => {
    if (err) throw err;
    const input: any = obj;
});

const input: any = CSON.readFileSync("input.cson");

CSON.writeFile("output.cson", input, (err) => {
    if (err) throw err;
});

CSON.writeFileSync("output.cson", input);

const isObjectPath: boolean = CSON.isObjectPath("output.cson");

const path: string | null = CSON.resolve("output.cson");
