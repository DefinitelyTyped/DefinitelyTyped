import { UserIdentifier } from "./User";

export interface TagIdentifier {
    id: string;
}

export interface Tag extends Partial<TagIdentifier> {
    readonly type: "tag";
    readonly id: string;
    name: string;
}

export interface List {
    "type": "tag.list";
    "total_count": number;
    "tags": (Tag)[];
    "pages": { "next"?: string | undefined; "page": number; "per_page": number; "total_pages": number };
}

interface TagUsers {
    name: string;
    users: UserIdentifier[];
}

interface TagCompanies {
    name: string;
    users: Array<{ id: string }>;
}

type TagOper = TagCompanies | TagUsers;
