import { ServiceAccount, app, auth } from 'firebase-admin';

export interface FirebaseAdminOpts {
    serviceAccount: string | ServiceAccount;
    projectName: string;
}

export interface UserData {
    uid?: string;
    email?: string;
    password: string;
    username: string;
}

export default class FirebaseAdmin {
    protected app: app.App | null;

    constructor(opts?: FirebaseAdminOpts);

    connect(opts: FirebaseAdminOpts): void;

    getAllUsers(maxResults?: number, nextPageToken?: string): Promise<auth.UserRecord[]>;

    createUser(data: UserData): Promise<auth.UserRecord>;

    deleteUser(uid: string): Promise<void>;

    delete(): Promise<void>;
}
