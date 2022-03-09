import { User } from '@ckeditor/ckeditor5-collaboration-core/src/users';
import { Plugin } from '@ckeditor/ckeditor5-core';
import { Rect } from '@ckeditor/ckeditor5-utils';
import { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { BindChain, Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';

/**
 * Stores the list of CommentThread and provides event-driven API for managing them. It is also responsible for using the comments adapter to communicate with the data source.
 * CommentsRepository is a context plugin. It can be added to a context or to an editor. Add it to the context configuration if you use Context in your integration.
 * The event-driven API makes it possible to attach a listener to each action that changes comment data. Using different event priorities allows to attach an action before the main action ('low' priority) or after the main action ('high' priority). It works very similar to decorate.
 */
export default class CommentsRepository extends Plugin {
    static readonly pluginName: 'CommentsRepository';
    /**
     * The currently active comment thread. An annotation with this thread will be marked as active.
     */
    get activeCommentThread(): CommentThread | null;
    protected set activeCommentThread(value: CommentThread | null);

    /**
     * An adapter object that should communicate with the data source to fetch or save the comments data.
     */
    adapter: CommentsAdapter;

    /**
     * Adds a new comment thread.
     * When a target is provided, the comment annotation will be attached to this target.
     * Use this method to load the comments data during the editor initialization if you do not use the adapter integration.
     * Note: This method fires the event-addCommentThread event and the default behavior is added as a 'normal' priority listener. It makes it possible to cancel the method or call some custom code before or after the default behavior is executed.
     * Note: The comments adapter will send the data only if commentThreadData.comments is not empty and commentThreadData.isFromAdapter is set to false.
     * See also CommentsRepository#openNewCommentThread().
     */
    addCommentThread(commentThreadData: {
        channelId?: string;
        threadId: string;
        comments?: Array<
            | Comment
            | {
                  commentId: string;
                  authorId: string;
                  content: string;
                  createdAt: Date;
              }
        >;
        target?: HTMLElement | Rect | (() => HTMLElement | Rect);
        isFromAdapter?: boolean;
    }): CommentThread;

    /**
     * Gets the comment thread data using the adapter and adds the thread to the editor.
     * When the comment thread is already present in the repository, then the adapter will not be used but the result will be asynchronous as well.
     */
    fetchCommentThread(data: { channelId: string; threadId: string }): Promise<CommentThread>;

    /**
     * Returns comment thread of given id.
     */
    getCommentThread(threadId: string): CommentThread;

    /**
     * Returns a list of comment threads added to the repository.
     * You can provide a set of filtering options to narrow down the results set.
     */
    getCommentThreads(options?: {
        channelId?: string;
        skipNotAttached?: boolean;
        skipEmpty?: boolean;
        toJSON?: boolean;
    }): Array<CommentThread>;

    /**
     * Checks if a comment thread with a given ID is added to the repository.
     */
    hasCommentThread(threadId: string): boolean;

    /**
     * Returns true if a given channel is set to read-only mode, returns false otherwise.
     */
    isReadOnly(channelId: string): boolean;

    /**
     * Creates a new, empty comment thread.
     * Displays a new comment annotation attached to the target and focuses the comment editor. When the comment data is submitted, the comment thread is added to the editor and sent to the adapter.
     * Use this method to start a new comment thread after a user performed an action (clicked a button, etc.).
     */
    openNewCommentThread(commentThreadData: {
        channelId?: string;
        threadId?: string;
        target: HTMLElement | Rect | (() => HTMLElement | Rect);
    }): CommentThread | null;

    /**
     * Marks a comment thread with the given ID as active. When threadId is null, the currently active comment thread will be deactivated.
     */
    setActiveCommentThread(threadId: string | null): void;

    /**
     * Changes the read-only state for comment threads.
     * When the value is true then all comment threads will be switched to read-only, when the value is false then all comment threads will be switched to editing mode.
     * Optionally new state can be applied to a comment threads limited to a given channel.
     */
    switchReadOnly(value: boolean, channelId?: string): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        CommentsRepository: CommentsRepository;
    }
}

export class Comment implements Observable {
    constructor(
        commentsRepository: CommentsRepository,
        data?: {
            id: string;
            threadId: string;
            content: string;
            author: User;
            createdAt?: Date;
            attributes: Record<string, unknown>;
        },
    );
    /**
     * Custom comment attributes. See also setAttribute and removeAttribute.
     */
    get attributes(): Record<string, unknown>;
    protected set attributes(value: Record<string, unknown>);
    /**
     * The comment author.
     */
    readonly author: User;
    /**
     * The comment content.
     */
    get content(): string;
    protected set content(value: string);
    /**
     * The comment creation date.
     */
    get createdAt(): Date;
    protected set createdAt(value: Date);
    /**
     * The comment ID.
     */
    readonly id: string;
    /**
     * When is set to true, editing the comment is blocked.
     */
    get isEditable(): boolean;
    protected set isEditable(value: boolean);
    /**
     * The read-only state inherited from the parent CommentThread. When is set to true, then removing and editing the comment thread is blocked.
     */
    get isReadOnly(): boolean;
    protected set isReadOnly(value: boolean);
    /**
     * When is set to false, removing the comment is blocked.
     */
    get isRemovable(): boolean;
    protected set isRemovable(value: boolean);
    /**
     * The ID of the comment thread that contains this comment.
     */
    readonly threadId: string;
    /**
     * The comment weight.
     */
    readonly weight: number;
    /**
     * Destroys the comment instance.
     */
    destroy(): void;
    /**
     * Removes the comment.
     */
    remove(data?: { content?: string; createdAt?: Date; isFromAdapter?: boolean }): void;
    /**
     * Removes a comment attribute.
     */
    removeAttribute(name: string): void;
    /**
     * Adds attribute to the comment.
     */
    setAttribute(name: string, value: unknown): void;
    toJSON(): Record<string, unknown>;
    /**
     * Updates the comment with provided data.
     */
    update(data?: {
        content?: string;
        createdAt?: Date;
        attributes?: Record<string, unknown>;
        isFromAdapter?: boolean;
    }): void;

    set(option: Record<string, unknown>): void;
    set(name: string, value: unknown): void;
    bind(...bindProperties: string[]): BindChain;
    unbind(...unbindProperties: string[]): void;
    decorate(methodName: string): void;
    on<K extends string>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    once<K extends string>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    off<K extends string>(event: K, callback?: (this: this, info: EventInfo<this, K>, ...args: any[]) => void): void;
    listenTo<P extends string, E extends Emitter>(
        emitter: E,
        event: P,
        callback: (this: this, info: EventInfo<E, P>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    stopListening<E extends Emitter, P extends string>(
        emitter?: E,
        event?: P,
        callback?: (this: this, info: EventInfo<E, P>, ...args: any[]) => void,
    ): void;
    fire(eventOrInfo: string | EventInfo<Emitter, string>, ...args: any[]): unknown;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: Emitter): void;
}
