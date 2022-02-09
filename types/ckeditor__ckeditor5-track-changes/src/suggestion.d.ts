// TODO: import {CommentThread} from "@ckeditor/ckeditor5-comments/src/comments/commentsrepository";
import { User } from '@ckeditor/ckeditor5-collaboration-core/src/users';
import { Element, Model, Range } from '@ckeditor/ckeditor5-engine';
import { Item } from '@ckeditor/ckeditor5-engine/src/model/item';
import { Marker } from '@ckeditor/ckeditor5-engine/src/model/markercollection';
declare class CommentThread {}

export default class Suggestion {
    attributes: Record<string, unknown>;
    readonly author: User;
    readonly commentThread: CommentThread;
    createdAt: Date | null;
    readonly data: Record<string, unknown> | null;
    readonly hasComments: boolean;
    readonly head: Suggestion;
    readonly id: string;
    readonly isInContent: boolean;
    readonly isMultiRange: boolean;
    next: Suggestion | null;
    previous: Suggestion | null;
    readonly subType: string | null;
    readonly type: string;

    constructor(
        model: Model,
        options?: {
            id: string;
            type: string;
            subType?: string | undefined;
            attributes: Record<string, unknown>;
            author: User;
            onAccept: (...args: any[]) => any;
            onDiscard: (...args: any[]) => any;
            onAttributesChange: (...args: any[]) => any;
        },
    );
    accept(): void;
    addMarkerName(markerName: string): void;
    addRange(range: Range): void;
    discard(): void;
    getAllAdjacentSuggestions(): Suggestion[];
    getContainedElement(): Element | null;
    getFirstMarker(): Marker | null;
    getFirstRange(): Range;
    getItems(): Item[];
    getMarkerNames(): string[];
    getMarkers(): Marker[];
    getRanges(): Range[];
    isIntersectingWithRange(range: Range): boolean;
    removeAttribute(name: string): void;
    removeMarker(markerName: string): void;
    removeMarkers(): void;
    setAttribute(name: string, value: unknown): void;
    toJSON(): Record<string, unknown>;

    static getMultiRangeId(): string;
}

export {};
