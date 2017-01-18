// Type definitions for Firebase Simple Login
// Project: https://www.firebase.com/docs/security/simple-login-overview.html
// Definitions by: Wilker Lucio <http://github.com/wilkerlucio>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



interface IFirebaseSimpleLoginError {
    code: string;
    message: string;
}

interface IFirebaseSimpleLoginOptions {
    // general options
    debug?: boolean
    rememberMe?: boolean

    // email
    email?: string
    password?: string

    // facebook / github / google / twitter
    preferRedirect?: boolean

    // facebook / github / google
    scope?: string

    // facebook
    access_token?: string

    // twitter
    oauth_token?: string

    // persona
    backgroundColor?: string
    privacyPolicy?: string
    siteLogo?: string
    siteName?: string
    termsOfService?: string
}

interface IFirebaseSimpleLoginUser {
    // general data
    firebaseAuthToken: string;
    id: string;
    provider: string;
    uid: string;

    // email / persona
    md5_hash?: string;

    // email
    email?: string;

    // facebook / github / google / twitter
    accessToken?: string
    displayName?: string
    thirdPartyUserData?: Object

    // github / twitter
    username?: string

    // twitter
    accessTokenSecret?: string
}

declare class FirebaseSimpleLogin {
    email: string;
    id: string;
    provider: string;
    uid: string;
    username: string;

    constructor(firebase: Firebase, callback: (err: IFirebaseSimpleLoginError, user: IFirebaseSimpleLoginUser) => any);

    login(loginType: string, options?: IFirebaseSimpleLoginOptions): void;
    logout(): void;

    createUser(email: string,
               password: string,
               callback?: (err: IFirebaseSimpleLoginError, user: IFirebaseSimpleLoginUser) => any): void;

    changePassword(email: string,
                   oldPassword: string,
                   newPassword: string,
                   callback?: (err: IFirebaseSimpleLoginError, success: boolean) => any): void;

    sendPasswordResetEmail(email: string,
                           callback?: (err: IFirebaseSimpleLoginError, success: boolean) => any): void;

    removeUser(email: string,
               password: string,
               callback?: (err: IFirebaseSimpleLoginError, success: boolean) => any): void;
}