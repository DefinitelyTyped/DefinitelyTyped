type SteamID = import('steamid');
import SteamUser = require('..');
import EventEmitter = require('events');

export = SteamChatRoomClient;

declare class SteamChatRoomClient extends EventEmitter {
    constructor(user: SteamUser);

    // EVENTS
    on<K extends keyof ChatEvents>(event: K, listener: (...args: ChatEvents[K]) => void): this;
    once<K extends keyof ChatEvents>(event: K, listener: (...args: ChatEvents[K]) => void): this;
    off<K extends keyof ChatEvents>(event: K, listener: (...args: ChatEvents[K]) => void): this;
    removeListener<K extends keyof ChatEvents>(event: K, listener: (...args: ChatEvents[K]) => void): this;
    removeAllListeners(event?: keyof ChatEvents): this;

    /**
     * Creates a new chat room group.
     * @param [inviteeSteamIDs] - An array of users to invite to this new group, as SteamID objects or strings that can parse into SteamIDs
     * @param [name] - A name for this group. Pass an empty string '' to create an "ad-hoc" group chat (see below)
     * @param [callback]
     * @since v4.21.0
     */
    createGroup(inviteeSteamIDs?: SteamID[] | string[] | string, name?: string, callback?: (
        err: Error | null,
        response: { chat_group_id: string, state: ChatRoomGroupState, user_chat_state: UserChatRoomGroupState }
    ) => void
    ): Promise<{ chat_group_id: string, state: ChatRoomGroupState, user_chat_state: UserChatRoomGroupState }>;

    /**
     * Converts an "ad-hoc" multi-user group chat into a full-fledged chat room group, which can contain multiple channels.
     * Anyone in a group chat can save it, not just the owner of the group chat.
     * Upon saving, you will become the owner of the saved chat room group.
     * @param groupId - The ID of the chat room group you want to save and convert into a full-fledged chat room group
     * @param name - The name for your new chat room group
     * @param [callback]
     * @since v4.21.0
     */
    saveGroup(groupId: string, name: string, callback?: (err: Error | null) => void): Promise<void>;

    /**
     * Get a list of the chat room groups you're in.
     * @param [callback]
     */
    getGroups(callback?: (err: Error | null, response: { chat_room_groups: Record<string, ChatRoomGroup> }) => void): Promise<{ chat_room_groups: Record<string, ChatRoomGroup> }>;

    /**
     * Set which groups are actively being chatted in by this session. It's unclear what effect this has on the chatting
     * experience, other than retrieving chat room group states.
     * @param groupIDs - Array of group IDs you want data for
     * @param [callback]
     */
    setSessionActiveGroups(groupIDs: number[]  | string[] | number | string, callback?: (
         err: Error | null,
         response: { chat_room_groups: Record<string, ChatRoomGroupState> },
        ) => void
    ): Promise<{ chat_room_groups: Record<string, ChatRoomGroupState> }>;

    /**
     * Get details from a chat group invite link.
     * @param linkUrl
     * @param [callback]
     */
    getInviteLinkInfo(linkUrl: string, callback: (err: Error | null, response: InviteLinkInfo) => void): Promise<InviteLinkInfo>;

    /**
     * Get the chat room group info for a clan (Steam group). Allows you to join a group chat.
     * @param clanSteamID - The group's SteamID or a string that can parse into one
     * @param [callback]
     */
    getClanChatGroupInfo(clanSteamID: SteamID | string, callback?: (
          err: Error | null,
          response: { chat_group_summary: ChatRoomGroupSummary },
        ) => void
    ): Promise<{ chat_group_summary: ChatRoomGroupSummary }>;

    /**
     * Join a chat room group.
     * @param groupId - The group's ID
     * @param [inviteCode] - An invite code to join this chat. Not necessary for public Steam groups.
     * @param [callback]
     */
    joinGroup(groupId: number | string, inviteCode?: string, callback?: (
        err: Error | null,
        response: { state: ChatRoomGroupState; user_chat_state: UserChatRoomGroupState },
        ) => void
    ): Promise<{ state: ChatRoomGroupState; user_chat_state: UserChatRoomGroupState }>;

    /**
     * Leaves a chat room group you have previously joined.
     * @param groupId - The chat group ID you want to leave
     * @param [callback]
     * @since v4.21.0
     */
    leaveGroup(groupId: string, callback?: (err: Error | null) => void): Promise<void>;

    /**
     * Invite a friend to a chat room group.
     * @param groupId
     * @param steamId
     * @param [callback]
     */
     inviteUserToGroup(groupId: number, steamId: SteamID | string, callback?: (err: Error | null) => void): Promise<void>;

    /**
     * Create an invite link for a given chat group.
     * @param groupId
     * @param [options]
     * @param [callback]
     */
    createInviteLink(groupId: number, options?: {secondsValid?: number; voiceChatId?: number}, callback?: (
        err: Error | null,
        response: { invite_code: string; invite_url: string; seconds_valid: number },
        ) => void
    ): Promise<{ invite_code: string; invite_url: string; seconds_valid: number }>;

    /**
     * Get all active invite links for a given chat group.
     * @param groupId
     * @param [callback]
     */
    getGroupInviteLinks(groupId: number, callback?: (
        err: Error | null,
        response: { invite_links: GroupInviteLinks[] },
        ) => void
    ): Promise<{ invite_links: GroupInviteLinks[] }>;

    /**
     * Revoke and delete an active invite link.
     * @param linkUrl
     * @param [callback]
     */
    deleteInviteLink(linkUrl: string, callback?: (err: Error | null) => void): Promise<void>;

    /**
     * Send a direct chat message to a friend.
     * @param steamId
     * @param message
     * @param [options]
     * @param [callback]
     */
    sendFriendMessage(steamId: SteamID | string, message: string, options?: { chatEntryType?: SteamUser.EChatEntryType; containsBbCode?: boolean }, callback?: (
        err: Error | null,
        response: SentMessage,
    ) => void
    ): Promise<SentMessage>;

    /**
     * Inform a friend that you're typing a message to them.
     * @param steamId
     * @param [callback]
     */
    sendFriendTyping(steamId: SteamID | string, callback?: (err: Error | null) => void): Promise<void>;

    /**
     * Send a message to a chat room.
     * @param groupId
     * @param chatId
     * @param message
     * @param [callback]
     */
    sendChatMessage(groupId: number | string, chatId: number | string, message: string, callback?: (
        err: Error | null,
        response: SentMessage,
        ) => void
    ): Promise<SentMessage>;

    /**
     * Delete one or more messages from a chat channel.
     * @param groupId
     * @param chatId
     * @param messages
     * @param [callback]
     */
    deleteChatMessages(groupId: number | string, chatId: number | string, messages: Array<MessageToDelete1 | MessageToDelete2>, callback?: (err: Error | null) => void): Promise<void>;

    /**
     * Create a text/voice chat room in a group, provided you have permissions to do so.
     * @param groupId - The ID of the group in which you want to create the channel
     * @param name - The name of your new channel
     * @param [options] - Options for your new room
     * @param [callback]
     */
    createChatRoom(groupId: number | string, name: string, options?: { isVoiceRoom: boolean }, callback?: (
        err: Error | null,
        response: { chat_room: ChatRoomState },
        ) => void
        ): Promise<{ chat_room: ChatRoomState }>;

    /**
     * Rename a text/voice chat room in a group, provided you have permissions to do so.
     * @param groupId - The ID of the group in which you want to rename the room
     * @param chatId - The ID of the chat room you want to rename
     * @param newChatRoomName - The new name for the room
     * @param [callback]
     */
    renameChatRoom(groupId: number | string, chatId: number | string, newChatRoomName: string, callback?: (err: Error | null) => void): Promise<void>;

    /**
     * Delete a text/voice chat room in a group (and all the messages it contains), provided you have permissions to do so.
     * @param groupId - The ID of the group in which you want to delete a room
     * @param chatId - The ID of the room you want to delete
     * @param [callback]
     */
    deleteChatRoom(groupId: number | string, chatId: number | string, callback?: (err: Error | null) => void): Promise<void>;

    /**
     * Kick a user from a chat room group.
     * @param groupId
     * @param steamId
     * @param [expireTime] - Time when they should be allowed to join again. Omit for immediate.
     * @param [callback]
     */
    kickUserFromGroup(groupId: number | string, steamId: SteamID | string, expireTime?: Date | number, callback?: (err: Error | null) => void): Promise<void>;

    /**
     * Get the ban list for a chat room group, provided you have the appropriate permissions.
     * @param groupId
     * @param [callback]
     */
    getGroupBanList(groupId?: number | string, callback?: (err: Error | null, response: { bans: Ban[] }) => void): Promise<{ bans: Ban[] }>;

    /**
     * Ban or unban a user from a chat room group, provided you have the appropriate permissions.
     * @param groupId
     * @param userSteamId
     * @param banState - True to ban, false to unban
     * @param [callback]
     */
    setGroupUserBanState(groupId: number | string, userSteamId: SteamID | string, banState: boolean, callback?: (err: Error | null) => void): Promise<void>;

    /**
     * Adds or removes a role on a user in a chat room group, provided you have access to do so.
     * @param groupId - The ID of the chat room group you want to manage someone's roles in
     * @param userSteamId - The SteamID of the user who you want to manage roles on, as a SteamID object or a string that can parse into one
     * @param roleId - The ID of the role you want to manage
     * @param roleState - `true` to add the role, or `false` to remove it
     * @param [callback]
     */
    setGroupUserRoleState(groupId: string, userSteamId: SteamID | string, roleId: string, roleState: boolean, callback?: (err: Error | null) => void): Promise<void>;

    /**
     * Get a list of which friends we have "active" (recent) message sessions with.
     * @param [options]
     * @param [callback]
     */
    getActiveFriendMessageSessions(options?: { conversationsSince: Date | number }, callback?: (
        err: Error | null,
        response: { sessions: ActiveFriendMessageSession[]; timestamp: Date },
        ) => void
    ): Promise<any>;

    /**
     * Get your chat message history with a Steam friend.
     * @param friendSteamId
     * @param [options]
     * @param [callback]
     */
    getFriendMessageHistory(friendSteamId: SteamID | string, options?: GetMessageHistoryOptions, callback?: (
        err: Error | null,
        response: { messages: FriendMessage[], more_available: boolean },
        ) => void
    ): Promise<{ messages: FriendMessage[], more_available: boolean }>;

    /**
     * Get message history for a chat (channel).
     * @param groupId
     * @param chatId
     * @param [options]
     * @param [callback]
     */
    getChatMessageHistory(groupId: number | string, chatId: number | string, options?: GetMessageHistoryOptions, callback?: (
        err: Error | null,
        response: { message: ChatMessage[], more_available: boolean },
        ) => void
    ): Promise<{ message: ChatMessage[], more_available: boolean }>;

    /**
     * Acknowledge (mark as read) a friend message
     * @param friendSteamId - The SteamID of the friend whose message(s) you want to acknowledge
     * @param timestamp - The timestamp of the newest message you're acknowledging (will ack all older messages)
     */
    ackFriendMessage(friendSteamId: SteamID | string, timestamp: Date | number): void;
}

//#region "Events"
interface ChatEvents {
    friendMessage: [message: IncomingFriendMessage];
    friendMessageEcho: [message: IncomingFriendMessage];
    friendTyping: [message: IncomingFriendMessage];
    friendTypingEcho: [message: IncomingFriendMessage];
    friendLeftConversation: [message: IncomingFriendMessage];
    friendLeftConversationEcho: [message: IncomingFriendMessage];
    chatMessage: [message: IncomingChatMessage];
    chatMessagesModified: [details: ModifiedMessage[]];
    chatRoomGroupSelfStateChange: [details: groupSelfStateChangeDetails];
    chatRoomGroupMemberStateChange: [details: groupMemberStateChangeDetails];
    chatRoomGroupHeaderStateChange: [details: groupHeaderStateChangeDetails];
    chatRoomGroupRoomsChange: [details: groupRoomsStateChangeDetails];
}
//#endregion "Events"

//#region "Response Interfaces"
interface ChatMessage {
    sender: SteamID;
    server_timestamp: Date;
    ordinal: number;
    message: string;
    server_message: ServerMessage;
    deleted: boolean;
}

interface FriendMessage {
    sender: SteamID;
    server_timestamp: Date;
    ordinal: number;
    message: string;
    message_bbcode_parsed: null | Array<string | Record<string, any>>;
}

interface ActiveFriendMessageSession {
    steamid_friend: SteamID;
    time_last_message: Date;
    time_last_view: Date;
    unread_message_count: number;
}

interface Ban {
    steamid: SteamID;
    steamid_actor: SteamID;
    time_banned: Date;
    ban_reason: ''; // always empty, SteamUI doesn't support ban reasons
}

interface SentMessage {
    modified_message: string;
    server_timestamp: Date;
    ordinal: number;
}

interface GroupInviteLinks {
    invite_code: string;
    invite_url: string;
    steamid_creator: SteamID;
    time_expires: Date | null;
    chat_id: string;
}

interface InviteLinkInfo {
    invite_code: string;
    steamid_sender: SteamID;
    time_expires: Date | null;
    group_summary: ChatRoomGroupSummary;
    time_kick_expire: Date | null;
    banned: boolean;
}
//#endregion "Response Interfaces"

//#region "Interfaces"
interface ModifiedMessage {
    chat_group_id: string;
    chat_id: string;
    messages: {
        server_timestamp: Date;
        ordinal: number;
        deleted: boolean;
    };
}

interface MessageToDelete1 {
    server_timestamp: Date;
    ordinal?: number;
}

interface MessageToDelete2 {
    timestamp: Date;
    ordinal?: number;
}

interface GetMessageHistoryOptions {
    maxCount?: number;
    wantBbcode?: boolean;
    startTime?: Date | number;
    startOrdinal?: number;
    lastTime?: Date | number;
    lastOrdinal?: number;
}

interface ServerMessage {
    message: SteamUser.EChatRoomServerMessage;
    string_param?: string;
    steamid_param?: SteamID;
}

interface ChatMentions {
    mention_all: boolean;
    mention_here: boolean;
    mention_steamids: SteamID[];
}

interface IncomingChatMessage {
    chat_group_id: string;
    chat_id: string;
    steamid_sender: SteamID;
    message: string;
    message_no_bbcode: string;
    server_timestamp: Date;
    ordinal: number;
    mentions: ChatMentions | null;
    server_message: ServerMessage | null;
    chat_name: string;
}

interface IncomingFriendMessage {
    steamid_friend: SteamID;
    chat_entry_type: SteamUser.EChatEntryType;
    from_limited_account: boolean;
    message: string;
    message_no_bbcode: string;
    message_bbcode_parsed: Array<string | Record<string, any>>;
    server_timestamp: Date;
    ordinal: number;
    local_echo: boolean;
    low_priority: boolean;
}

interface UserChatRoomState {
    chat_id: string;
    time_joined: Date;
    time_last_ack: Date | null;
    desktop_notification_level: SteamUser.EChatRoomNotificationLevel;
    mobile_notification_level: SteamUser.EChatRoomNotificationLevel;
    time_last_mention: Date | null;
    unread_indicator_muted: boolean;
    time_first_unread: Date;
}

interface UserChatRoomGroupState {
    chat_group_id: string;
    time_joined: Date;
    user_chat_room_state: UserChatRoomState[];
    desktop_notification_level: SteamUser.EChatRoomNotificationLevel;
    mobile_notification_level: SteamUser.EChatRoomNotificationLevel;
    time_last_group_ack: Date | null;
    unread_indicator_muted: boolean;
}

interface ChatRoleActions {
    role_id: string;
    can_create_rename_delete_channel: boolean;
    can_kick: boolean;
    can_ban: boolean;
    can_invite: boolean;
    can_change_tagline_avatar_name: boolean;
    can_chat: boolean;
    can_view_history: boolean;
    can_change_group_roles: boolean;
    can_change_user_roles: boolean;
    can_mention_all: boolean;
    can_set_watching_broadcast: boolean;
}

interface ChatRole {
    role_id: string;
    name: string;
    ordinal: number;
}

interface ChatRoomGroupHeaderState {
    chat_group_id: string;
    chat_name: string;
    clanid: SteamID | null;
    steamid_owner: SteamID;
    appid: number | null;
    tagline: string;
    avatar_sha: Buffer | null;
    avatar_url: string | null;
    default_role_id: string;
    roles: ChatRole[];
    role_actions: ChatRoleActions[];
    watching_broadcast_steamid?: SteamID | null; // not sure if optional or null
}

interface ChatRoomMember {
    steamid: SteamID;
    state: SteamUser.EChatRoomJoinState;
    rank: SteamUser.EChatRoomGroupRank;
    time_kick_expire: Date | null;
    role_ids: string[];
}

interface ChatRoomGroupState {
    members: ChatRoomMember[];
    chat_rooms: ChatRoomState[];
    kicked: ChatRoomMember[];
    default_chat_id: string;
    header_state: ChatRoomGroupHeaderState;
}

interface ChatRoomState {
    chat_id: string;
    chat_name: string;
    voice_allowed: boolean;
    members_in_voice: SteamID[];
    time_last_message: Date;
    sort_order: number;
    last_message: string;
    steamid_last_message: SteamID;
}

interface ChatRoomGroupSummary {
    chat_rooms: ChatRoomState[];
    top_members: SteamID[];
    chat_group_id: string;
    chat_group_name: string;
    active_member_count: number;
    active_voice_member_count: number;
    default_chat_id: string;
    chat_group_tagline: string;
    appid: number | null;
    steamid_owner: SteamID;
    watching_broadcast_steamid?: SteamID | null; // not sure if optional or null
    chat_group_avatar_sha: Buffer | null;
    chat_group_avatar_url: string | null;
}

interface ChatRoomGroup {
    group_summary: ChatRoomGroupSummary;
}

interface groupSelfStateChangeDetails {
    chat_group_id: string;
    user_action: SteamUser.EChatRoomMemberStateChange;
    user_chat_group_state: UserChatRoomGroupState;
    group_summary: ChatRoomGroupSummary;
}

interface groupMemberStateChangeDetails {
    chat_group_id: string;
    member: ChatRoomMember;
    change: SteamUser.EChatRoomMemberStateChange;
}
interface groupHeaderStateChangeDetails {
    chat_group_id: string;
    header_state: ChatRoomGroupHeaderState;
}

interface groupRoomsStateChangeDetails {
    chat_group_id: string;
    default_chat_id: string;
    chat_rooms: ChatRoomState[];
}

//#endregion "Interfaces"
