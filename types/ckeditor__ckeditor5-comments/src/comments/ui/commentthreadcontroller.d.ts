
import { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { BindChain, Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';

/**
 * Controller for a comment thread.
 * It takes a comment thread view, listens to events fired by that view and based on them performs actions on a comment thread model.
 */
export default class CommentThreadController implements Observable {
    constructor(model: CommentThead, view: BaseCommentThreadView);
    model: CommentThead;
    view: BaseCommentThreadView;
    /**
     * Adds a comment to the comment thread.
     */
    addComment(commentContent: string): void;
    /**
     * Destroys CommentThreadController instance.
     */
    destroy(): void;
    /**
     * Removes the comment thread.
     */
    remove(): void;
    /**
     * Removes a comment from the comment thread.
     */
    removeComment(commentId: string): void;
    /**
     * Updates a comment that belongs to the comment thread.
     */
    updateComment(commentId: string, commentContent: string): void;

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
