import { IdToken, UserInfo } from '../../IdToken';

export interface MemberFilters {
    role?: string;
    limit?: number;
    pages?: number;
    url?: string;
}

export interface Member extends UserInfo {
    status: string;
    picture: string;
    middle_name: string;
    user_id: string;
    lis_person_sourcedid: string;
    roles: string[];
}

export interface MembersResult {
    id: string;
    context: {
        id: string;
        label: string;
        title: string;
    };
    members: Member[];
    next?: string;
}

export interface NamesAndRolesService {
    getMembers(idtoken: IdToken, filters?: MemberFilters): Promise<MembersResult | false>;
}
