export = User;
declare class User {
    readonly firstname: string;
    readonly lastname: string;
    readonly displayname: string;
    readonly email: string;
    readonly username: string;
    readonly password?: string;
    readonly active: boolean;
    readonly attributes: {[key: string]: any};

    constructor(firstname: string, lastname: string, displayname: string, email: string, username: string, password?: string, active?: boolean, attributes?: any);
    toCrowd(): UserObj;
    static fromCrowd(userObj: UserObj): User;
}

interface UserObj {
    readonly "name": string;
    readonly "first-name": string;
    readonly "last-name": string;
    readonly "display-name": string;
    readonly "email": string;
    readonly "active": boolean;
    readonly "password"?: { value: string };
}
