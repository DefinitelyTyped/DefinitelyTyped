import { UserIdentifier } from "./User";

export interface TagIdentifier {
  id: string
}

export interface Tag extends Partial<TagIdentifier> {
  readonly type: "tag",
  readonly id: string,
  name: string,
}

export interface List {
  "type": "tag.list",
  "total_count": number,
  "tags": (Tag)[],
  "pages": { "next"?: string, "page": number, "per_page": number, "total_pages": number }
}

interface TagUsers {
  name: string,
  users: UserIdentifier[]
}

interface TagCompanies {
  name: string,
  users: { id: string }[]
}

type TagOper = TagCompanies | TagUsers;
