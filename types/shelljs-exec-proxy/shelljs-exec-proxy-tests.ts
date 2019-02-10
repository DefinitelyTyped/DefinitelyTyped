import * as shell from 'shelljs-exec-proxy';

shell.git.status(); // $ExpectType ExecOutputReturnValue
shell.git.add('.'); // $ExpectType ExecOutputReturnValue
shell.git.commit('-am', 'Fixed issue #1'); // $ExpectType ExecOutputReturnValue
shell.git.push('origin', 'master'); // $ExpectType ExecOutputReturnValue

shell.cd('string'); // $ExpectType ShellString
shell.cd(123); // $ExpectError
