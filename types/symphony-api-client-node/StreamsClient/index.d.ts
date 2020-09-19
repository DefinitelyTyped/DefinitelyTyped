export interface UserId {
    id: string;
}

export interface Keyword {
    key: string;
    value: string;
}

export interface ImmutableRoomAttributes {
    readOnly?: boolean;
    copyProtected?: boolean;
    public?: boolean;
}

export interface BaseRoomAttributes {
    name: string;
    description: string;
    membersCanInvite?: boolean;
    discoverable?: boolean;
    keywords?: Keyword[];
    crossPod?: boolean;
    viewHistory?: boolean;
    multiLateralRoom?: boolean;
}

export interface AllRoomAttributes extends BaseRoomAttributes, ImmutableRoomAttributes { }

export interface RoomSystemInfo {
    id: string;
    creationDate: number;
    createdByUserId: number;
    active: boolean;
}

export interface RoomInfo {
    roomAttributes: AllRoomAttributes;
    roomSystemInfo: RoomSystemInfo;
}

export interface ActivateRoomResponse {
    roomAttributes: BaseRoomAttributes;
    roomSystemInfo: RoomSystemInfo;
    immutableRoomAttributes: ImmutableRoomAttributes;
}

export interface RoomMember {
    id: number;
    owner?: boolean;
    joinDate?: number;
}

export interface RoomMemberOperationResult {
    format: string;
    message: string;
}

export interface Query {
    query?: string;
    labels?: string[];
    active?: boolean;
    creator?: UserId;
}

export interface FacetedMatch {
    facet: string;
    count: number;
}

export interface SearchRoomResponse {
    count: number;
    skip: number;
    limit: number;
    query: Query;
    rooms: RoomInfo;
    facetedMatchCount: FacetedMatch[];
}

export interface StreamType {
    type: 'IM' | 'MIM' | 'ROOM' | 'POST';
}

export interface StreamAttributes {
    members: number[];
}

export interface RoomAttributes {
    name: string;
}

export interface UserStream {
    id: string;
    crossPod: boolean;
    active: boolean;
    streamType: StreamType;
    streamAttributes?: StreamAttributes;
    roomAttributes?: RoomAttributes;
}

export function getUserIMStreamId(userIDs: number[]): Promise<UserId>;
export function createRoom(
    room: string,
    description?: string,
    keywords?: Keyword[],
    membersCanInvite?: boolean,
    discoverable?: boolean,
    anyoneCanJoin?: boolean,
    readOnly?: boolean,
    copyProtected?: boolean,
    crossPod?: boolean,
    viewHistory?: boolean,
): Promise<RoomInfo>;
export function updateRoom(
    streamId: string,
    room: string,
    description?: string,
    keywords?: Keyword[],
    membersCanInvite?: boolean,
    discoverable?: boolean,
    anyoneCanJoin?: boolean,
    readOnly?: boolean,
    copyProtected?: boolean,
    crossPod?: boolean,
    viewHistory?: boolean,
): Promise<RoomInfo>;
export function activateRoom(streamId: string): Promise<ActivateRoomResponse>;
export function deactivateRoom(streamId: string): Promise<ActivateRoomResponse>;
export function getRoomInfo(streamId: string): Promise<RoomInfo>;
export function getRoomMembers(streamId: string): Promise<RoomMember[]>;
export function addMemberToRoom(streamId: string, userId: number): Promise<RoomMemberOperationResult>;
export function removeMemberFromRoom(streamId: string, userId: number): Promise<RoomMemberOperationResult>;
export function promoteUserToOwner(streamId: string, userId: number): Promise<RoomMemberOperationResult>;
export function demoteUserFromOwner(streamId: string, userId: number): Promise<RoomMemberOperationResult>;
export function searchRooms(
    skip?: number,
    limit?: number,
    query?: string,
    labels?: string[],
    active?: boolean,
    includePrivateRooms?: boolean,
    creator?: UserId,
    owner?: UserId,
    member?: UserId,
    sortOrder?: "BASIC" | "RELEVANCE",
): Promise<SearchRoomResponse>;
export function getUserStreams(skip: number, limit: number, streamTypes: StreamType[], includeInactiveStreams: boolean): Promise<UserStream>;
