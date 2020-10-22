import * as cpp from "child-process-promise";

import {
    ChildProcess
} from 'child_process';

const a = cpp.exec("echo \"Hello world!\"");
a.childProcess; // $ExpectType ChildProcess

(async () => {
    const at = await a;
    at.childProcess; // $ExpectType ChildProcess
    at.stdout; // $ExpectType string
    at.stderr; // $ExpectType string
})();
