import findJavaHome = require("find-java-home");
import { promisify } from "util";

findJavaHome(() => { }); // $ExpectType void
findJavaHome({ allowJre: true }, () => { }); // $ExpectType void
promisify(findJavaHome); // $ExpectType (options?: { allowJre?: boolean | undefined; } | undefined) => Promise<string>
