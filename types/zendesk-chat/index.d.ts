// Type definitions for non-npm package zendesk-chat-browser 1.81
// Project: https://api.zopim.com/web-sdk/#introduction
// Definitions by: David Copley <https://github.com/davidcopley>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

interface Window {
    zChat?: ZChat;
}

/**
 * Version 1.8.1 - 2019-03-12
 * https://api.zopim.com/web-sdk/#api-reference
 */
interface initProps {
    account_key: string;
    authentication?: {
        jwt_fn?: (callback: (jwt: string) => void) => void;
    };
}

interface ZChat {
    init(initProps: initProps): void;

    getAccountStatus(): 'online' | 'offline' | 'away';

    getConnectionStatus(): 'connected' | 'connecting' | 'closed';

    getVisitorInfo(): VisitorInfo;

    setVisitorInfo(options: Partial<VisitorInfo>, callback?: (err: Error) => void): void;

    sendVisitorPath(options: { title: string, url: string }, callback?: (err: Error) => void): void;

    getQueuePosition(): number;

    getAllDepartments(): Department[];

    getDepartment(id: number): Department;

    getVisitorDefaultDepartment(id?: number): Department;

    setVisitorDefaultDepartment(id: number, callback?: (err: Error) => void): void;

    clearVisitorDefaultDepartment(callback?: (err: Error) => void): void;

    /**
     * If this method is used when none of the agents are available to pick up a chat,
     * messages sent by visitors may result in missed chats.
     * @param msg
     * @param callback
     */
    sendChatMsg(msg: string, callback?: (err: Error) => void): void;

    /**
     * The size of each file attachment sent cannot exceed 20MB as of v1.1.4.
     * The previous limit was 5MB.
     * @param file
     * @param callback
     */
    sendFile(file: File, callback?: (err: SendFileErrorMessage, data: {
        mime_type: string,
        name: string,
        size: number,
        url: string,
    }) => void): void;

    sendOfflineMsg(options: {
        name: string,
        email: string,
        phone?: string,
        message: string,
        department?: number,
    }, callback: (err: Error) => void): void;

    addTags(tags: string[], callback?: (err: Error) => void): void;

    removeTags(tags: ReadonlyArray<string>, callback?: (err: Error) => void): void;

    sendTyping(is_typing: boolean): void;

    getChatInfo(): { rating?: string, comment?: string };

    sendChatRating(rating: 'good' | 'bad' | undefined, callback?: (err: Error) => void): void;

    sendChatComment(comment: string, callback?: (err: Error) => void): void;

    isChatting(): boolean;

    getChatLog(): ChatEvent.ChatEventData[];

    on(event_name: EventName, handler: (event_data?: EventData) => void): void;

    un(event_name: EventName, handler: (event_data?: EventData) => void): void;
}

declare namespace ChatEvent {
    interface BaseChatEventData {
        nick: string;
        display_name: string;
        time_stamp: number;
    }

    type ChatEventData =
        BaseChatEventData & {
        type: 'chat.msg',
        msg: string,
        options: string[],
        structured_msg: StructuredMessage,
    } | BaseChatEventData & {
        type: 'chat.file',
        attachment: Attachment,
        deleted: boolean,
    } | BaseChatEventData & {
        type: 'chat.memberjoin',
    } | BaseChatEventData & {
        type: 'chat.memberleave',
    } | BaseChatEventData & {
        type: 'chat.request.rating',
    } | BaseChatEventData & {
        type: 'chat.rating',
        rating?: string,
        new_rating?: string,
    } | BaseChatEventData & {
        type: 'chat.comment',
        comment?: string,
        new_comment?: string,
    };

    interface Action {
        type: 'QUICK_REPLY_ACTION' | 'LINK_ACTION';
        value: string;
    }

    interface Button {
        text: string;
        action: Action;
    }

    interface Panel {
        heading: string;
        paragraph?: string;
        image_url: string;
        action: Action;
    }

    interface PanelTemplate {
        type: 'PANEL_TEMPLATE';
        panel: Panel;
        buttons: Button[];
    }

    interface ListItem {
        heading: string;
        paragraph: string;
        image_url?: string;
        action: Action;
    }

    type StructuredMessage = {
        type: 'QUICK_REPLIES',
        msg: string,
        quick_replies: Button[],
    } | {
        type: 'PANEL_TEMPLATE',
        panel: Panel,
        buttons: Button[],
    } | {
        type: 'PANEL_TEMPLATE_CAROUSEL',
        items: PanelTemplate[],
    } | {
        type: 'LIST_TEMPLATE',
        items: ListItem[],
        buttons: Button[],
    };
}

type SendFileErrorMessage =
    'NOT_SUPPORTED'
    | 'NOT_ALLOWED'
    | 'CONN_ERROR'
    | 'INVALID_EXTENSION'
    | 'EXCEED_SIZE_LIMIT'
    | 'INTERNAL_ERROR'
    | 'UNKNOWN_ERROR';

interface VisitorInfo {
    display_name: string;
    email: string;
    phone: string;
}

interface Department {
    id: number;
    name: string;
    status: 'online' | 'offline';
}

interface Attachment {
    metadata?: AttachmentMetadata;
    mime_type: string;
    name: string;
    size: number;
    url: string;
}

interface AttachmentMetadata {
    width: number;
    height: number;
}

type EventName =
    'account_status'
    | 'connection_update'
    | 'department_update'
    | 'visitor_update'
    | 'agent_update'
    | 'chat'
    | 'history'
    | 'typing'
    | 'error';

type EventData = ChatEvent.ChatEventData
    | {
    type: 'chat.queue_position',
    nick: string,
    queue_position: number,
}
    | {
    type: 'typing',
    nick: string,
    typing: boolean,
} | {
    type: 'last_read',
    nick: string,
    timestamp: number,
} | 'online'
    | 'away'
    | 'offline'
    | 'connecting'
    | 'connected'
    | 'closed';
