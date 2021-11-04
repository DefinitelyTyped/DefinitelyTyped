import { PlatformInfo } from './Utils/Platform';

export interface UserInfo {
    given_name: string;
    family_name: string;
    name: string;
    email: string;
}

export interface IdToken {
    iss: string;
    issuerCode: string;
    user: string;
    roles: string[];
    userInfo: UserInfo;
    platformInfo: PlatformInfo;
    endpoint: {
        scope: string[];
        lineItems: string;
        lineItem: string;
    };
}
