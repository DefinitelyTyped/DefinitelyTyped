import * as fs from "fs";
import * as vsslnparse from "vssln-parser";

vsslnparse("", solution => {
    solution.visualStudioVersion; // $ExpectType string | undefined
    solution.projects[0].name; // $ExpectType string
});

vsslnparse(fs.createReadStream("test.sln"), solution => {
    solution.visualStudioVersion; // $ExpectType string | undefined
    solution.projects[0].name; // $ExpectType string
});
