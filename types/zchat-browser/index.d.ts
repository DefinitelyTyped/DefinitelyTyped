export as namespace zChat;

export interface InitOptions {
    account_key: string;
    suppress_console_error?: boolean | undefined;
    authentication?:
        | {
            jwt_fn?: ((callback: (jwt: string) => void) => void) | undefined;
        }
        | undefined;
}

export function init(options: InitOptions): void;

export function getAccountStatus(): "online" | "offline" | "away";

export function getConnectionStatus(): "connected" | "connecting" | "closed";

export function getVisitorInfo(): VisitorInfo;

export function setVisitorInfo(options: Partial<VisitorInfo>, callback?: (err: Error) => void): void;

export function sendVisitorPath(options: { title: string; url: string }, callback?: (err: Error) => void): void;

export function getQueuePosition(): number;

export function getAllDepartments(): Department[];

export function getDepartment(id: number): Department;

export function getVisitorDefaultDepartment(): number | undefined;

export function setVisitorDefaultDepartment(id: number, callback?: (err: Error) => void): void;

export function clearVisitorDefaultDepartment(callback?: (err: Error) => void): void;

/**
 * If this method is used when none of the agents are available to pick up a chat,
 * messages sent by visitors may result in missed chats.
 * @param msg
 * @param callback
 */
export function sendChatMsg(msg: string, callback?: (err: Error) => void): void;

export type SendFileError = Error & { message: SendFileErrorMessage };

export type SendFileErrorMessage =
    | "NOT_SUPPORTED"
    | "NOT_ALLOWED"
    | "CONN_ERROR"
    | "INVALID_EXTENSION"
    | "EXCEED_SIZE_LIMIT"
    | "INTERNAL_ERROR"
    | "UNKNOWN_ERROR";

export interface SendFileCallbackData {
    mime_type: string;
    name: string;
    size: number;
    url: string;
}

/**
 * The size of each file attachment sent cannot exceed 20MB as of v1.1.4.
 * The previous limit was 5MB.
 * @param file
 * @param callback
 */
export function sendFile(file: File, callback?: (err: SendFileError, data: SendFileCallbackData) => void): void;

export interface SendOfflineMsgOptions {
    name: string;
    email: string;
    phone?: string | undefined;
    message: string;
    department?: number | undefined;
}

export function sendOfflineMsg(options: SendOfflineMsgOptions, callback?: (err: Error) => void): void;

export function addTags(tags: ReadonlyArray<string>, callback?: (err: Error) => void): void;

export function removeTags(tags: ReadonlyArray<string>, callback?: (err: Error) => void): void;

export function sendTyping(is_typing: boolean): void;

export function getChatInfo(): { rating: string | null; comment: string | null };

export function sendChatRating(rating: "good" | "bad" | null, callback?: (err: Error) => void): void;

export function sendChatComment(comment: string, callback?: (err: Error) => void): void;

export function isChatting(): boolean;

export function getChatLog(): ChatEventData[];

export function getServingAgentsInfo(): AgentInfo[];

export function getOperatingHours(): OperatingHours | undefined;

export function sendEmailTranscript(email: string, callback?: (err: Error) => void): void;

export function fetchChatHistory(callback: (err: Error, data: { count: number; has_more: boolean }) => void): void;

export function markAsRead(): void;

export function reconnect(): void;

export function endChat(
    options?: { clear_dept_id_on_chat_ended?: boolean | undefined },
    callback?: (err: Error) => void,
): void;

export function logout(): void;

export const EMAIL_REGEX: RegExp;

export function on(event_name: "account_status", handler: (event_data: AccountsStatusEventData) => void): void;
export function on(event_name: "connection_update", handler: (event_data: ConnectionUpdateEventData) => void): void;
export function on(event_name: "department_update", handler: (event_data: Department) => void): void;
export function on(event_name: "visitor_update", handler: (event_data: VisitorInfo) => void): void;
export function on(event_name: "agent_update", handler: (event_data: AgentInfo) => void): void;
export function on(event_name: "chat", handler: (event_data: ChatEventData) => void): void;
export function on(event_name: "history", handler: (event_data: HistoryEventData) => void): void;
export function on(event_name: "error", handler: (event_data: ErrorEventData) => void): void;

export function un(event_name: "account_status", handler: (event_data: AccountsStatusEventData) => void): void;
export function un(event_name: "connection_update", handler: (event_data: ConnectionUpdateEventData) => void): void;
export function un(event_name: "department_update", handler: (event_data: Department) => void): void;
export function un(event_name: "visitor_update", handler: (event_data: VisitorInfo) => void): void;
export function un(event_name: "agent_update", handler: (event_data: AgentInfo) => void): void;
export function un(event_name: "chat", handler: (event_data: ChatEventData) => void): void;
export function un(event_name: "history", handler: (event_data: HistoryEventData) => void): void;
export function un(event_name: "error", handler: (event_data: ErrorEventData) => void): void;

export interface VisitorInfo {
    display_name: string;
    email: string;
    phone: string;
}

export interface AgentInfo {
    nick: string;
    display_name: string;
    avatar_path: string;
    title: string;
}

export interface Department {
    id: number;
    name: string;
    status: "online" | "away" | "offline";
}

export type OperatingHours =
    & { enabled: boolean; timezone: string }
    & (
        | { type: "account"; acount_schedule: Schedule }
        | { type: "department"; department_schedule: { [id: number]: Schedule } }
    );

export interface Schedule {
    0: Period[];
    1: Period[];
    2: Period[];
    3: Period[];
    4: Period[];
    5: Period[];
    6: Period[];
}

export interface Period {
    start: number;
    end: number;
}

export type AccountsStatusEventData = "online" | "away" | "offline";

export type ConnectionUpdateEventData = "connecting" | "connected" | "closed";

export interface ChatMsgChatEventData {
    type: "chat.msg";
    nick: string;
    display_name: string;
    timestamp: number;
    msg: string;
    options: string[];
    structured_msg: StructuredMessage.Message;
}

export namespace StructuredMessage {
    type Message = QuickReplies | ButtonTemplate | PanelTemplate | PanelTemplateCarousel | ListTemplate;

    interface QuickReplies {
        type: "QUICK_REPLIES";
        msg: string;
        quick_replies: Array<Button<"QUICK_REPLY_ACTION">>;
    }

    interface ButtonTemplate {
        type: "BUTTON_TEMPLATE";
        msg: string;
        buttons: Array<Button<"QUICK_REPLY_ACTION" | "LINK_ACTION">>;
    }

    interface PanelTemplate {
        type: "PANEL_TEMPLATE";
        panel: Panel;
        buttons?: Array<Button<"LINK_ACTION">> | undefined;
    }

    interface Panel {
        heading: string;
        paragraph?: string | undefined;
        image_url?: string | undefined;
        action?: Action<"LINK_ACTION"> | undefined;
    }

    interface PanelTemplateCarousel {
        type: "PANEL_TEMPLATE_CAROUSEL";
        items: PanelTemplate[];
    }

    interface ListItem {
        heading: string;
        paragraph: string;
        image_url?: string | undefined;
        action: Action<"LINK_ACTION">;
    }

    interface ListTemplate {
        type: "LIST_TEMPLATE";
        items: ListItem[];
        buttons?: Array<Button<"QUICK_REPLY_ACTION" | "LINK_ACTION">> | undefined;
    }

    interface Button<T extends "QUICK_REPLY_ACTION" | "LINK_ACTION"> {
        text: string;
        action: Action<T>;
    }

    interface Action<T extends "QUICK_REPLY_ACTION" | "LINK_ACTION"> {
        type: T;
        value: string;
    }
}

export interface ChatFileChatEventData {
    type: "chat.file";
    nick: string;
    display_name: string;
    timestamp: number;
    attachment: Attachment;
    deleted: boolean;
}

export interface Attachment {
    metadata?: AttachmentMetadata | undefined;
    mime_type: string;
    name: string;
    size: number;
    url: string;
}

export interface AttachmentMetadata {
    width: number;
    height: number;
}

export interface ChatQueuePositionChatEventData {
    type: "chat.queue_position";
    nick: string;
    queue_position: number;
}

export interface ChatMemberJoinChatEventData {
    type: "chat.memberjoin";
    nick: string;
    display_name: string;
    timestamp: number;
}

export interface ChatMemberLeaveChatEventData {
    type: "chat.memberleave";
    nick: string;
    display_name: string;
    timestamp: number;
}

export interface ChatRequestRatingChatEventData {
    type: "chat.request.rating";
    nick: string;
    display_name: string;
    timestamp: number;
}

export interface ChatRatingChatEventData {
    type: "chat.rating";
    nick: string;
    display_name: string;
    timestamp: number;
    rating?: string | undefined;
    new_rating?: string | undefined;
}

export interface ChatCommentChatEventData {
    type: "chat.comment";
    nick: string;
    display_name: string;
    timestamp: number;
    comment?: string | undefined;
    new_comment?: string | undefined;
}

export interface TypingChatEventData {
    type: "typing";
    nick: string;
    typing: boolean;
}

export interface LastReadChatEventData {
    type: "last_read";
    nick: string;
    timestamp: number;
}

export type ChatEventData =
    | ChatMsgChatEventData
    | ChatFileChatEventData
    | ChatQueuePositionChatEventData
    | ChatMemberJoinChatEventData
    | ChatMemberLeaveChatEventData
    | ChatRequestRatingChatEventData
    | ChatCommentChatEventData
    | TypingChatEventData
    | LastReadChatEventData;

export type HistoryEventData =
    | ChatMsgChatEventData
    | ChatFileChatEventData
    | ChatMemberJoinChatEventData
    | ChatMemberLeaveChatEventData
    | ChatRequestRatingChatEventData
    | ChatCommentChatEventData;

export type ErrorEventData = Error & { context: string; extra?: any };
