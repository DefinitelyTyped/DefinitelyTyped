export interface AdminUserAttributes {
    emailAddress: string;
    firstName?: string | undefined;
    lastName?: string | undefined;
    userName: string;
    displayName?: string | undefined;
    companyName?: string | undefined;
    department?: string | undefined;
    division?: string | undefined;
    title?: string | undefined;
    twoFactorAuthPhone?: string | undefined;
    workPhoneNumber?: string | undefined;
    mobilePhoneNumber?: string | undefined;
    accountType?: string | undefined;
    location?: string | undefined;
    jobFunction?: string | undefined;
    assetClasses?: string[] | undefined;
    industries?: string[] | undefined;
}

export interface AdminUserSystemInfo {
    id: number;
    status: string;
    createdDate: number;
    createdBy: string;
    lastUpdatedDate: number;
    lastLoginDate?: number | undefined;
    deactivatedDate?: number | undefined;
}

export interface AdminUserInfo {
    userAttributes: AdminUserAttributes;
    userSystemInfo: AdminUserSystemInfo;
    roles: string[];
}

export function getUser(id: string): Promise<AdminUserInfo>;
export function listUsers(skip: number, limit: number): Promise<AdminUserInfo[]>;
