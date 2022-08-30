import * as Backbone from 'backbone';
import { MemoizedFunction } from 'lodash';

export interface AttachmentOptions {
    context: Record<string, unknown>;
    data: AttachmentOptionsData;
}

export interface AttachmentOptionsData {
    action?: string;
    id?: number;
    nonce?: string;
    post_id?: number;
    changes?: { [key: string]: string };
}

export interface AttachmentsOptions {
    props: {
        order: string;
        orderby: string;
        query: string;
        observe: string;
        filters: string;
    };
}

/**
 * Media Model Attachment
 */
export type Attachment = Backbone.Model & {
    id: number;

    /**
     * Triggered when attachment details change
     * Overrides Backbone.Model.sync
     */
    sync: (method: string, model: Attachment, options: any) => unknown; // Returns wp.media.ajax;

    /**
     * Convert date strings into Date objects.
     *
     * @param  resp The raw response object, typically returned by fetch()
     * @return      The modified response object, which is the attributes hash
     *              to be set on the model.
     */
    parse: (response: Record<string, unknown>) => Record<string, unknown>;

    saveCompat: (data: AttachmentOptionsData, options: Record<string, unknown>) => Promise<any>;

    /**
     * Create a new model on the static 'all' attachments collection and return it.
     */
    create: (attrs: Record<string, unknown>) => Attachment;

    get: (id: string, attachment: Backbone.Model | undefined) => any & MemoizedFunction;
};

/**
 * A collection of attachments.
 *
 * This collection has no persistence with the server without supplying
 * 'options.props.query = true', which will mirror the collection
 */
export type Attachments = Backbone.Collection<Attachment> & {
    model: Attachment;

    validateDestroyed: boolean;

    initialize: (models: Attachment[], options: AttachmentsOptions) => void;

    /**
     * Checks whether an attachment is valid.
     */
    validator: (attachment: Attachment) => boolean;

    /**
     * Add or remove an attachment to the collection depending on its validity.
     */
    validate: (attachment: Attachment, options: Backbone.Silenceable) => Attachments;

    /**
     * Add or remove all attachments from another collection depending on each one's validity.
     */
    validateAll: (attachments: Attachment[], options: Backbone.Silenceable) => Attachments;

    /**
     * Start observing another attachments collection change events
     * and replicate them on this collection.
     */
    observe: (attachments: Attachment[]) => Attachments;

    /**
     * Stop replicating collection change events from another attachments collection.
     */
    unobserve: (attachments: Attachment[]) => Attachments;

    /**
     * Start mirroring another attachments collection, clearing out any models already
     * in the collection.
     */
    mirror: (attachments: Attachment[]) => Attachments;

    /**
     * Stop mirroring another attachments collection.
     */
    unmirror: () => void;

    /**
     * Retrieve more attachments from the server for the collection.
     *
     * Only works if the collection is mirroring a Query Attachments collection,
     * and forwards to its `more` method. This collection class doesn't have
     * server persistence by itself.
     */
    more: (options: any) => Promise<any>;

    /**
     * Whether there are more attachments that haven't been sync'd from the server
     * that match the collection's query.
     *
     * Only works if the collection is mirroring a Query Attachments collection,
     * and forwards to its `hasMore` method. This collection class doesn't have
     * server persistence by itself.
     */
    hasMore: () => boolean;

    /**
     * Gets the total number of attachments.
     */
    getTotalAttachments: () => number;

    /**
     * A custom Ajax-response parser.
     *
     * See trac ticket #24753.
     *
     * Called automatically by Backbone whenever a collection's models are returned
     * by the server, in fetch. The default implementation is a no-op, simply
     * passing through the JSON response. We override this to add attributes to
     * the collection items.
     */
    parse: (response: Record<string, unknown>, xhr: unknown) => Record<string, unknown>;

    /**
     * If this collection is sorted by `menuOrder`, recalculates and saves
     * the menu order to the database.
     */
    saveMenuOrder: () => unknown; // returns wp.media.post;

    /**
     * A function to compare two attachment models in an attachments collection.
     *
     * Used as the default comparator for instances of wp.media.model.Attachments
     * and its subclasses.
     */
    comparator(a: Backbone.Model, b: Backbone.Model, options: Record<string, unknown>): number;

    filters: AttachmentFilters;
};

export type Selection = Attachments & {
    /**
     * Refresh the `single` model whenever the selection changes.
     * Binds `single` instead of using the context argument to ensure
     * it receives no parameters.
     */
    initialize: (models: Attachment[], options: any) => void;

    /**
     * If the workflow does not support multi-select, clear out the selection
     * before adding a new attachment to it.
     */
    add: (models: Attachment[], options: any) => Attachment[];

    /**
     * Fired when toggling (clicking on) an attachment in the modal.
     */
    single: (model: Attachment | boolean | undefined) => Attachment[];
};

export interface AttachmentFilters {
    search: (attachment: Attachment) => boolean;
    type: (attachment: Attachment) => boolean;
    uploadedTo: (attachment: Attachment) => boolean;
    status: (attachment: Attachment) => boolean;
}

export type Query = Attachments & {
    initialize: (models: Attachment[], options: any) => void;
    hasMore: () => boolean;
    more: (options: any) => Promise<any>;
    sync: (method: string, model: Backbone.Model, options: any) => unknown;
    get: (props: any, options: any) => Query;
};

export interface PostImageAttributes {
    attachment_id: number;
    [key: string]: any;
}

export type PostImage = Backbone.Model & {
    initialize: (attributes: PostImageAttributes) => void;
    bindAttachmentListeners: () => void;
    changeAttachment: (attachment: Attachment, props: any) => void;
    setLinkTypeFromUrl: () => void;
    updateLinkUrl: () => void;
    updateSize: () => void;
    setAspectRatio: () => void;
};
