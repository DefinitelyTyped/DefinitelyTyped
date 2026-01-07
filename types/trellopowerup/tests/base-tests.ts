// NOTE: Ensure this file is included in your tsconfig.json for linting and type checking.
// If you see a parsing error about tsconfig, add this file to the "include" array in your tsconfig.json.
import * as Trello from "trellopowerup";

// MemberType
const admin: Trello.MemberType = "admin";
const normal: Trello.MemberType = "normal";
const observer: Trello.MemberType = "observer";
// @ts-expect-error - invalid member type
const invalidMemberType: Trello.MemberType = "owner";

// Organization
const org: Trello.Organization = {
    id: "org1",
    name: "Test Org",
    paidStatus: "free",
};
// $ExpectType string
org.id;
// $ExpectType string
org.name;
// $ExpectType string
org.paidStatus;
// @ts-expect-error - missing id
const invalidOrg: Trello.Organization = { name: "Test Org", paidStatus: "free" };

// Member
const member: Trello.Member = {
    id: "m1",
    fullName: "John Doe",
    username: "johndoe",
    initials: "JD",
    avatar: null,
};
// $ExpectType string
member.id;
// $ExpectType string | null
member.fullName;
// $ExpectType string | null
member.username;
// $ExpectType string | null
member.initials;
// $ExpectType string | null
member.avatar;
// @ts-expect-error - missing id
const invalidMember: Trello.Member = { fullName: null, username: null, initials: null, avatar: null };

// Membership
const membership: Trello.Membership = {
    deactivated: false,
    id: "mem1",
    idMember: "m1",
    memberType: "admin",
    unconfirmed: false,
};
// $ExpectType boolean
membership.deactivated;
// $ExpectType string
membership.id;
// $ExpectType string
membership.idMember;
// $ExpectType MemberType
membership.memberType;
// $ExpectType boolean
membership.unconfirmed;
const invalidMembership: Trello.Membership = {
    deactivated: false,
    id: "mem1",
    idMember: "m1",
    // @ts-expect-error - invalid memberType
    memberType: "owner",
    unconfirmed: false,
};

// Label
const label: Trello.Label = {
    id: "l1",
    name: "Urgent",
    color: "red",
};
// $ExpectType string
label.id;
// $ExpectType string
label.name;
// $ExpectType ColorName
label.color;
// @ts-expect-error - invalid color
const invalidLabel: Trello.Label = { id: "l1", name: "Urgent", color: "cyan" };

// CustomFieldValue
const cfv: Trello.CustomFieldValue = {
    checked: "true",
    date: "2024-01-01",
    text: "Some text",
    number: "42",
};
// $ExpectType string | undefined
cfv.checked;
// $ExpectType string | undefined
cfv.date;
// $ExpectType string | undefined
cfv.text;
// $ExpectType string | undefined
cfv.number;

// CustomField
const cf: Trello.CustomField = {
    id: "cf1",
    idCustomField: "cfid1",
    idValue: "valid",
    value: cfv,
};
// $ExpectType string
cf.id;
// $ExpectType string
cf.idCustomField;
// $ExpectType string | undefined
cf.idValue;
// $ExpectType CustomFieldValue | undefined
cf.value;
// @ts-expect-error - missing id
const invalidCF: Trello.CustomField = { idCustomField: "cfid1" };

// AttachmentPreview
const preview: Trello.AttachmentPreview = {
    bytes: 1234,
    height: 100,
    scaled: true,
    url: "https://example.com/preview.png",
    width: 200,
};
// $ExpectType number
preview.bytes;
// $ExpectType number
preview.height;
// $ExpectType boolean
preview.scaled;
// $ExpectType string
preview.url;
// $ExpectType number
preview.width;

// Attachment
const attachment: Trello.Attachment = {
    date: "2024-01-01T00:00:00Z",
    edgeColor: "#fff",
    id: "att1",
    idMember: "m1",
    name: "Attachment",
    previews: [preview],
    url: "https://example.com/att.png",
};
// $ExpectType string
attachment.date;
// $ExpectType string
attachment.edgeColor;
// $ExpectType string
attachment.id;
// $ExpectType string
attachment.idMember;
// $ExpectType string
attachment.name;
// $ExpectType AttachmentPreview[]
attachment.previews;
// $ExpectType string
attachment.url;
// @ts-expect-error - missing url
const invalidAttachment: Trello.Attachment = {
    date: "2024-01-01",
    edgeColor: "#fff",
    id: "att1",
    idMember: "m1",
    name: "Attachment",
    previews: [preview],
};

// Coordinates
const coords: Trello.Coordinates = { latitude: 42.0, longitude: -71.0 };
// $ExpectType number
coords.latitude;
// $ExpectType number
coords.longitude;
// @ts-expect-error - missing longitude
const invalidCoords: Trello.Coordinates = { latitude: 42.0 };

// AttachmentsByType
const abt: Trello.AttachmentsByType = { "trello": { board: 1, card: 2 } };
// $ExpectType { board: number; card: number; }
abt["trello"];
// $ExpectType number
abt["trello"].board;
// $ExpectType number
abt["trello"].card;

// BadgesInfo
const badges: Trello.BadgesInfo = {
    attachments: 1,
    attachmentsByType: abt,
    checkItems: 2,
    checkItemsChecked: 1,
    comments: 0,
    description: true,
    due: "2024-01-01T00:00:00Z",
    dueComplete: false,
    fogbugz: "",
    location: false,
    subscribed: true,
    viewingMemberVoted: false,
    votes: 0,
};
// $ExpectType number
badges.attachments;
// $ExpectType AttachmentsByType
badges.attachmentsByType;
// $ExpectType number
badges.checkItems;
// $ExpectType number
badges.checkItemsChecked;
// $ExpectType number
badges.comments;
// $ExpectType boolean
badges.description;
// $ExpectType string
badges.due;
// $ExpectType boolean
badges.dueComplete;
// $ExpectType string
badges.fogbugz;
// $ExpectType boolean
badges.location;
// $ExpectType boolean
badges.subscribed;
// $ExpectType boolean
badges.viewingMemberVoted;
// $ExpectType number
badges.votes;

// Board
const board: Trello.Board = {
    id: "b1",
    name: "Board Name",
    url: "https://trello.com/c/abc/board",
    shortLink: "abc",
    members: [member],
    dateLastActivity: "2024-01-01T00:00:00Z",
    idOrganization: "org1",
    customFields: [cf],
    labels: [label],
    memberships: [membership],
    paidStatus: "free",
};
// $ExpectType string
board.id;
// $ExpectType string
board.name;
// $ExpectType string
board.url;
// $ExpectType string
board.shortLink;
// $ExpectType Member[]
board.members;
// $ExpectType string
board.dateLastActivity;
// $ExpectType string
board.idOrganization;
// $ExpectType CustomField[]
board.customFields;
// $ExpectType Label[]
board.labels;
// $ExpectType Membership[]
board.memberships;
// $ExpectType string
board.paidStatus;
// @ts-expect-error - missing name
const invalidBoard: Trello.Board = {
    id: "b1",
    url: "url",
    shortLink: "abc",
    members: [],
    dateLastActivity: "",
    idOrganization: "",
    customFields: [],
    labels: [],
    memberships: [],
    paidStatus: "free",
};

// Card
const card: Trello.Card = {
    address: null,
    attachments: [attachment],
    badges: badges,
    closed: false,
    coordinates: coords,
    cover: attachment,
    customFieldItems: [cf],
    dateLastActivity: "2024-01-01T00:00:00Z",
    desc: "Description",
    due: null,
    dueComplete: false,
    id: "c1",
    idList: "l1",
    idShort: 1,
    labels: [label],
    locationName: null,
    members: [member],
    name: "Card Name",
    pos: 1,
    shortLink: "abc",
    url: "https://trello.com/c/abc/card",
};
// $ExpectType string | null
card.address;
// $ExpectType Attachment[]
card.attachments;
// $ExpectType BadgesInfo
card.badges;
// $ExpectType boolean
card.closed;
// $ExpectType Coordinates | null
card.coordinates;
// $ExpectType Attachment | null
card.cover;
// $ExpectType CustomField[]
card.customFieldItems;
// $ExpectType string
card.dateLastActivity;
// $ExpectType string
card.desc;
// $ExpectType string | null
card.due;
// $ExpectType boolean
card.dueComplete;
// $ExpectType string
card.id;
// $ExpectType string
card.idList;
// $ExpectType number
card.idShort;
// $ExpectType Label[]
card.labels;
// $ExpectType string | null
card.locationName;
// $ExpectType Member[]
card.members;
// $ExpectType string
card.name;
// $ExpectType number
card.pos;
// $ExpectType string
card.shortLink;
// $ExpectType string
card.url;
// @ts-expect-error - missing id
const invalidCard: Trello.Card = {
    address: null,
    attachments: [],
    badges: badges,
    closed: false,
    coordinates: null,
    cover: null,
    customFieldItems: [],
    dateLastActivity: "",
    desc: "",
    due: null,
    dueComplete: false,
    idList: "",
    idShort: 1,
    labels: [],
    locationName: null,
    members: [],
    name: "",
    pos: 1,
    shortLink: "",
    url: "",
};

// List
const list: Trello.List = {
    id: "l1",
    name: "List Name",
    cards: [card],
};
// $ExpectType string
list.id;
// $ExpectType string
list.name;
// $ExpectType Card[]
list.cards;
// @ts-expect-error - missing cards
const invalidList: Trello.List = { id: "l1", name: "List Name" };
