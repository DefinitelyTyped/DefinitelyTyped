import * as Theming from "./theming";

export type MemberType = "admin" | "normal" | "observer";

export interface Organization {
    id: string;
    name: string;
    paidStatus: string; // One of "free" or "paid", I suspect. I can only verify "free".
}

export interface Member {
    id: string;
    fullName: string | null;
    username: string | null;
    initials: string | null;
    avatar: string | null;
}

export interface Membership {
    deactivated: boolean;
    id: string;
    idMember: string;
    memberType: MemberType;
    unconfirmed: boolean;
}

export interface Label {
    id: string;
    name: string;
    color: Theming.ColorName;
}

export interface CustomFieldValue {
    checked?: string;
    date?: string;
    text?: string;
    number?: string;
}

export interface CustomField {
    id: string;
    idCustomField: string;
    idValue?: string;
    value?: CustomFieldValue;
}

export interface AttachmentPreview {
    bytes: number;
    height: number;
    scaled: boolean;
    url: string;
    width: number;
}

export interface Attachment {
    date: string;
    edgeColor: string;
    id: string;
    idMember: string;
    name: string;
    previews: AttachmentPreview[];
    url: string;
}

export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface AttachmentsByType {
    [key: string]: {
        board: number;
        card: number;
    };
}

export interface BadgesInfo {
    attachments: number;
    attachmentsByType: AttachmentsByType;
    checkItems: number;
    checkItemsChecked: number;
    comments: number;
    description: boolean;
    due: string; // timestamp
    dueComplete: boolean;
    fogbugz: string;
    location: boolean;
    subscribed: boolean;
    viewingMemberVoted: boolean;
    votes: number;
}

export interface Board {
    id: string;
    name: string;
    url: string; // https://trello.com/c/I5nAdteE/9-test
    shortLink: string;
    members: Member[];
    dateLastActivity: string; // "2025-05-21T09:14:24.641Z"
    idOrganization: string;
    customFields: CustomField[];
    labels: Label[];
    memberships: Membership[];
    paidStatus: string; // One of "free" or "paid", I suspect. I can only verify "free".
}

export interface Card {
    address: string | null;
    attachments: Attachment[];
    badges: BadgesInfo;
    closed: boolean;
    coordinates: Coordinates | null;
    cover: Attachment | null;
    customFieldItems: CustomField[];
    dateLastActivity: string; // "2019-11-28T15:53:19.709Z"
    desc: string;
    due: string | null; // "2019-11-28T15:53:19.709Z"
    dueComplete: boolean;
    id: string;
    idList: string;
    idShort: number;
    labels: Label[];
    locationName: string | null;
    members: Member[];
    name: string;
    pos: number;
    shortLink: string;
    url: string; // https://trello.com/c/I5nAdteE/9-test
}

export interface List {
    id: string;
    name: string;
    cards: Card[];
}
