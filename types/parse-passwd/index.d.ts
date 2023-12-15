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
