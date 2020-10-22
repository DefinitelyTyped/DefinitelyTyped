// Type definitions for parse-passwd 1.0
// Project: https://github.com/doowb/parse-passwd
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = parsePasswd;

declare function parsePasswd(passwdText: string): parsePasswd.PasswdEntry[];

declare namespace parsePasswd {
    interface PasswdEntry {
        username: string;
        password: string;
        uid: string;
        gid: string;
        gecos: string;
        homedir: string;
        shell: string;
    }
}
