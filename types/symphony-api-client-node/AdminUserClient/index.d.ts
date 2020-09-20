export interface AdminUserAttributes {
    emailAddress: string;
    firstName?: string;
    lastName?: string;
    userName: string;
    displayName?: string;
    companyName?: string;
    department?: string;
    division?: string;
    title?: string;
    twoFactorAuthPhone?: string;
    workPhoneNumber?: string;
    mobilePhoneNumber?: string;
    accountType?: string;
    location?: string;
    jobFunction?: string;
    assetClasses?: string[];
    industries?: string[];
}

export interface AdminUserSystemInfo {
    id: number;
    status: string;
    createdDate: number;
    createdBy: string;
    lastUpdatedDate: number;
    lastLoginDate?: number;
    deactivatedDate?: number;
}

export interface AdminUserInfo {
    userAttributes: AdminUserAttributes;
    userSystemInfo: AdminUserSystemInfo;
    roles: string[];
}

export function getUser(id: string): Promise<AdminUserInfo>;
export function listUsers(skip: number, limit: number): Promise<AdminUserInfo[]>;
