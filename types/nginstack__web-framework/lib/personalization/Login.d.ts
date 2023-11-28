export = Login;
declare function Login(loginKey: any): void;
declare class Login {
    constructor(loginKey: any);
    key: DBKey;
    directory: DBKey;
    titleLogoff: string;
    cssFileKeys: DBKey[];
    favIconFileKey: DBKey;
    loginFileKey: DBKey;
    indexFileKey: DBKey;
    cssFileKey: DBKey;
}
declare namespace Login {
    function getInstance(userAgent: any): Login;
    function getDirectories(): Array<{
        name: string;
        value: number;
    }>;
}
