import { User } from './User';
import { Lead } from './Lead';
import { Tag } from './Tag';
import { Admin } from './Admin';
export type ConversationIdentifier = { id: string } | { conversation_id: string };

export interface Conversation {
    readonly type: 'conversation';
    readonly id: string;
    readonly app_id?: string;
    source?: {
        attachments: string[];
        author?: {
            id: string;
            type: string;
        };
        body: string;
        delivered_as: string;
        id: string;
        subject?: string;
        type: 'conversation' | 'push' | 'twitter' | 'facebook' | 'email';
        url: string;
    };
    contacts?: User[] | Lead[];
    teammates?: Admin[];
    assignee?: Admin;
    readonly open: true | false;
    readonly state: 'open' | 'closed' | 'snoozed';
    readonly read?: true | false;
    waiting_since?: string;
    snoozed_until?: string;
    tags?: {
        tags: Tag[];
        readonly type: 'tag.list';
    };
    first_contact_reply?: {
        created_at: Date;
        type: string;
        url: string;
    };
    sla_applied?: {
        sla_name: string;
        sla_status: string;
    };
    custom_attributes?: {
        [key: string]: any;
    };
    conversation_rating?: {
        created_at: string;
        contact: {
            id: string;
            type: 'user' | 'lead';
        };
        rating: number;
        remark: string;
        teammate: Admin;
    };
    priority?: 'priority' | 'not_priority';
    statistics?: {
        time_to_assignment?: number;
        time_to_admin_reply?: number;
        time_to_first_close?: number;
        time_to_last_close?: number;
        median_time_to_reply?: number;
        first_contacat_reply_at?: Date;
        first_assignment_at?: Date;
        first_admin_reply_at?: Date;
        first_close_at?: Date;
        last_assignment_at?: Date;
        last_assignment_admin_reply_at?: Date;
        last_contact_reply_at?: Date;
        last_admin_reply_at?: Date;
        last_close_at?: Date;
        last_closed_by?: Admin;
        count_reopens: number;
        count_assignments: number;
        count_conversation_parts: number;
    };
    conversation_parts?: {
        conversation_parts?: [
            {
                assigned_to?: string;
                attachments: string[];
                author: {
                    id?: string;
                    type: string;
                };
                body: string;
                created_at: Date;
                external_id?: string;
                id: string;
                notified_at?: Date;
                readonly part_type:
                    | 'comment'
                    | 'note'
                    | 'note_and_reopen'
                    | 'assignment'
                    | 'open'
                    | 'close'
                    | 'away_mode_assignment'
                    | 'participant_added'
                    | 'participant_removed'
                    | 'conversation_rating_changed'
                    | 'conversation_rating_remark_added'
                    | 'snoozed'
                    | 'unsnoozed'
                    | 'assign_and_unsnooze'
                    | 'timer_unsnooze';
                readonly type: 'conversation_part';
                updated_at: Date;
            },
        ];
        total_count: number;
        readonly type: 'conversation_part.list';
    };
}

export interface Reply {
    id?: ConversationIdentifier;
    readonly message_type: 'comment' | 'note';
    readonly type: 'user' | 'admin';
    intercom_user_id?: string;
    admin_id?: string;
    user_id?: string;
    email?: string;
    body: string;
    attachment_urls?: string[];
}

export interface List {
    type: 'conversation.list';
    total_count: number;
    conversations: (Conversation & ConversationIdentifier)[];
    pages: { next?: string; page: number; per_page: number; total_pages: number };
}
