import * as propertiesParser from "properties-parser";
import { promisify } from "util";

// $ExpectType Properties
propertiesParser.parse("test=hello");

// $ExpectType Properties
propertiesParser.read("test.properties");

propertiesParser.read("test.properties", (err, data) => {
    // $ExpectType Error | null
    err;
    // $ExpectType Properties
    data;
});

// $ExpectType Promise<Properties>
promisify(propertiesParser.read)("test.properties");

// $ExpectType (path: PathLike, options?: EditorOptions | undefined) => Promise<Editor>
promisify(propertiesParser.createEditor);

// $ExpectType Editor
const editor = propertiesParser.createEditor("test.properties");

// $ExpectType string | undefined
editor.get("test");
editor.set("test");
editor.set("test", "hello");

editor.save();
editor.save(err => {
    // $ExpectType Error | null
    err;
});

// $ExpectType Editor
propertiesParser.createEditor({ path: "test.properties", separator: "=" });
