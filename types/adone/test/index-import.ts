import { adone } from "adone";

namespace AdoneRootImportTests {
    adone.falsely() === false;
    adone.std.fs.createReadStream(__filename).close();
}
