export interface Avatar {
    size: string;
    url: string;
}

export interface User {
    id: string;
    emailAddress: string;
    firstName: string;
    lastName: string;
    displayName: string;
    title?: string | undefined;
    company?: string | undefined;
    department?: string | undefined;
    accountType?: string | undefined;
    location?: string | undefined;
    username?: string | undefined;
    avatars?: Avatar[] | undefined;
}

export interface UsersList {
    users: User[];
}

export interface UserFilter {
    title?: string | undefined;
    location?: string | undefined;
    company?: string | undefined;
}

export interface SearchUserResponse extends UsersList {
    count: number;
    skip: number;
    limit: number;
    query: string;
    filters: UserFilter;
    users: User[];
}

export function getUserFromEmail(email: string, local?: boolean): Promise<User>;

export function getUserFromUsername(username: string): Promise<User>;

export function getUsersFromEmailList(commaSeparatedEmails: string, local?: boolean): Promise<UsersList>;

export function getUsersFromIdList(commaSeparatedIds: string, local?: boolean): Promise<UsersList>;

export function searchUsers(
    query: string,
    local?: boolean,
    skip?: number,
    limit?: number,
    filter?: UserFilter,
): Promise<SearchUserResponse>;
