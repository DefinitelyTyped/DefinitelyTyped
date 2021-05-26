import { User } from '@ckeditor/ckeditor5-collaboration-core';
import { DomEventData } from '@ckeditor/ckeditor5-engine';
import { Collection, Rect } from '@ckeditor/ckeditor5-utils';
import { Emitter } from '@ckeditor/ckeditor5-utils/src/dom/emittermixin';
import { EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { BindChain, Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';

export class Comment implements Emitter, Observable {
    attributes: Record<string, unknown>;
    readonly author: User;
    content: string;
    createdAt: Date;
    readonly id: string;
    isEditable: boolean;
    isReadOnly: boolean;
    isRemovable: boolean;
    readonly threadId: string;
    readonly weight: number;

    constructor(
        commentsRepository: CommentsRepository,
        data?: {
            id: string;
            threadId: string;
            content: string;
            author: User;
            createdAt: Date;
            attributes: Record<string, unknown>;
        },
    );
    destroy(): void;
    remove(data?: { content?: string; createdAt?: Date; isFromAdapter?: boolean }): void;
    removeAttribute(name: string): void;
    setAttribute(name: string, value: unknown): void;
    toJSON(): Record<string, unknown>;
    update(data?: {
        content?: string;
        createdAt?: Date;
        attributes?: Record<string, unknown>;
        isFromAdapter?: boolean;
    }): void;

    delegate(...events: string[]): EmitterMixinDelegateChain;
    fire(eventOrInfo: string | EventInfo, ...args: any[]): any;
    listenTo(
        emitter: Emitter,
        event: string,
        callback: (info: EventInfo, data: DomEventData) => void,
        options?: { priority?: PriorityString | number },
    ): void;
    off(event: string, callback?: (info: EventInfo, data: DomEventData) => void): void;
    on: (
        event: string,
        callback: (info: EventInfo, data: DomEventData) => void,
        options?: { priority: PriorityString | number },
    ) => void;
    once(
        event: string,
        callback: (info: EventInfo, data: DomEventData) => void,
        options?: { priority: PriorityString | number },
    ): void;
    stopDelegating(event?: string, emitter?: Emitter): void;
    stopListening(emitter?: Emitter, event?: string, callback?: (info: EventInfo, data: DomEventData) => void): void;

    set(option: Record<string, string>): void;
    set(name: string, value: unknown): void;
    bind(...bindProperties: string[]): BindChain;
    unbind(...unbindProperties: string[]): void;
    decorate(methodName: string): void;
}

export class CommentThread extends Collection<Comment> {
    channelId: string | undefined;
    readonly comments: Collection<Comment>;
    id: string;
    isAttached: boolean;
    isReadOnly: boolean;
    length: number;
    weight: number;

    constructor(commentsRepository: CommentsRepository, data?: { channelId?: string; id?: string });
    addComment(data?: {
        commentId: string;
        content: string;
        authorId: string;
        createdAt?: Date;
        attributes?: Record<string, unknown>;
        isFromAdapter?: boolean;
    }): void;
    attachTo(target: HTMLElement | Rect): void;
    getComment(commentId: string): Comment;
    toJSON(): Record<string, unknown>;
}

export default class CommentsRepository {
    activeCommentThread: CommentThread | null;
    adapter: CommentsAdapter;

    addCommentThread(commentThreadData: {
        channelId?: string;
        threadId: string;
        comments?: Array<{
            commentId: string;
            content: string;
            authorId: string;
            createdAt?: Date;
            attributes?: Record<string, unknown>;
            isFromAdapter?: boolean;
        }>;
        target?: HTMLElement | Rect;
        isFromAdapter?: boolean;
    }): CommentThread;
    fetchCommentThread(data?: { channelId: string; threadId: string }): Promise<CommentThread>;
    getCommentThread(threadId: string): CommentThread;
    getCommentThreads(options?: {
        channelId?: string;
        skipNotAttached?: boolean;
        skipEmpty?: boolean;
        toJSON?: false;
    }): CommentThread[];
    getCommentThreads(options?: {
        channelId?: string;
        skipNotAttached?: boolean;
        skipEmpty?: boolean;
        toJSON?: true;
    }): Array<Record<string, unknown>>;
    hasCommentThread(threadId: string): boolean;
    openNewCommentThread(commentThreadData?: {
        channelId?: string;
        threadId?: string;
        target: HTMLElement | Rect;
    }): CommentThread | null;
    setActiveCommentThread(threadId: string): void;
    switchReadOnly(value: boolean, channelId?: string): void;
}

export interface CommentsAdapter {
    addComment(data?: {
        channelId: string;
        threadId: string;
        commentId: string;
        content: string;
        attributes: Record<string, unknown>;
    }): Promise<unknown>;
    getCommentThread(data?: { channelId: string; threadId: string }): Promise<CommentThread>;
    removeComment(data?: { channelId: string; threadId: string; commentId: string }): Promise<unknown>;
    removeCommentThread?(data?: { channelId: string; threadId: string }): Promise<unknown>;
    updateComment(data?: {
        channelId: string;
        threadId: string;
        commentId: string;
        content?: string;
        attributes?: Record<string, unknown>;
    }): Promise<unknown>;
}
