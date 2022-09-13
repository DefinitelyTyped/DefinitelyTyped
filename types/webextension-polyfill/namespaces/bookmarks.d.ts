/**
 * Namespace: browser.bookmarks
 * Generated from Mozilla sources. Do not manually edit!
 *
 * Use the <code>browser.bookmarks</code> API to create, organize, and otherwise manipulate bookmarks.
 * Also see $(topic:override)[Override Pages], which you can use to create a custom Bookmark Manager page.
 * Permissions: "bookmarks"
 *
 * Comments found in source JSON schema files:
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
import { Events } from "./events";

export namespace Bookmarks {
    /**
     * Indicates the reason why this node is unmodifiable. The <var>managed</var> value indicates that this node was configured
     * by the system administrator or by the custodian of a supervised user. Omitted if the node can be modified by the user
     * and the extension (default).
     */
    type BookmarkTreeNodeUnmodifiable = "managed";

    /**
     * Indicates the type of a BookmarkTreeNode, which can be one of bookmark, folder or separator.
     */
    type BookmarkTreeNodeType = "bookmark" | "folder" | "separator";

    /**
     * A node (either a bookmark or a folder) in the bookmark tree.  Child nodes are ordered within their parent folder.
     */
    interface BookmarkTreeNode {
        /**
         * The unique identifier for the node. IDs are unique within the current profile, and they remain valid even after the
         * browser is restarted.
         */
        id: string;

        /**
         * The <code>id</code> of the parent folder.  Omitted for the root node.
         * Optional.
         */
        parentId?: string;

        /**
         * The 0-based position of this node within its parent folder.
         * Optional.
         */
        index?: number;

        /**
         * The URL navigated to when a user clicks the bookmark. Omitted for folders.
         * Optional.
         */
        url?: string;

        /**
         * The text displayed for the node.
         */
        title: string;

        /**
         * When this node was created, in milliseconds since the epoch (<code>new Date(dateAdded)</code>).
         * Optional.
         */
        dateAdded?: number;

        /**
         * When the contents of this folder last changed, in milliseconds since the epoch.
         * Optional.
         */
        dateGroupModified?: number;

        /**
         * Indicates the reason why this node is unmodifiable. The <var>managed</var> value indicates that this node was configured
         * by the system administrator or by the custodian of a supervised user. Omitted if the node can be modified by the user
         * and the extension (default).
         * Optional.
         */
        unmodifiable?: BookmarkTreeNodeUnmodifiable;

        /**
         * Indicates the type of the BookmarkTreeNode, which can be one of bookmark, folder or separator.
         * Optional.
         */
        type?: BookmarkTreeNodeType;

        /**
         * An ordered list of children of this node.
         * Optional.
         */
        children?: BookmarkTreeNode[];
    }

    /**
     * Object passed to the create() function.
     */
    interface CreateDetails {
        /**
         * Defaults to the Other Bookmarks folder.
         * Optional.
         */
        parentId?: string;

        /**
         * Optional.
         */
        index?: number;

        /**
         * Optional.
         */
        title?: string;

        /**
         * Optional.
         */
        url?: string;

        /**
         * Indicates the type of BookmarkTreeNode to create, which can be one of bookmark, folder or separator.
         * Optional.
         */
        type?: BookmarkTreeNodeType;
    }

    /**
     * An object specifying properties and values to match when searching. Produces bookmarks matching all properties.
     */
    interface SearchQueryC2Type {
        /**
         * A string of words that are matched against bookmark URLs and titles.
         * Optional.
         */
        query?: string;

        /**
         * The URL of the bookmark; matches verbatim. Note that folders have no URL.
         * Optional.
         */
        url?: string;

        /**
         * The title of the bookmark; matches verbatim.
         * Optional.
         */
        title?: string;
    }

    interface MoveDestinationType {
        /**
         * Optional.
         */
        parentId?: string;

        /**
         * Optional.
         */
        index?: number;
    }

    interface UpdateChangesType {
        /**
         * Optional.
         */
        title?: string;

        /**
         * Optional.
         */
        url?: string;
    }

    interface OnRemovedRemoveInfoType {
        parentId: string;

        index: number;

        node: BookmarkTreeNode;
    }

    interface OnChangedChangeInfoType {
        title: string;

        /**
         * Optional.
         */
        url?: string;
    }

    interface OnMovedMoveInfoType {
        parentId: string;

        index: number;

        oldParentId: string;

        oldIndex: number;
    }

    interface Static {
        /**
         * Retrieves the specified BookmarkTreeNode(s).
         *
         * @param idOrIdList A single string-valued id, or an array of string-valued ids
         */
        get(idOrIdList: string | string[]): Promise<BookmarkTreeNode[]>;

        /**
         * Retrieves the children of the specified BookmarkTreeNode id.
         *
         * @param id
         */
        getChildren(id: string): Promise<BookmarkTreeNode[]>;

        /**
         * Retrieves the recently added bookmarks.
         *
         * @param numberOfItems The maximum number of items to return.
         */
        getRecent(numberOfItems: number): Promise<BookmarkTreeNode[]>;

        /**
         * Retrieves the entire Bookmarks hierarchy.
         */
        getTree(): Promise<BookmarkTreeNode[]>;

        /**
         * Retrieves part of the Bookmarks hierarchy, starting at the specified node.
         *
         * @param id The ID of the root of the subtree to retrieve.
         */
        getSubTree(id: string): Promise<BookmarkTreeNode[]>;

        /**
         * Searches for BookmarkTreeNodes matching the given query. Queries specified with an object produce BookmarkTreeNodes
         * matching all specified properties.
         *
         * @param query Either a string of words that are matched against bookmark URLs and titles, or an object. If an object,
         * the properties <code>query</code>, <code>url</code>, and <code>title</code> may be specified and bookmarks matching all
         * specified properties will be produced.
         */
        search(query: string | SearchQueryC2Type): Promise<BookmarkTreeNode[]>;

        /**
         * Creates a bookmark or folder under the specified parentId.  If url is NULL or missing, it will be a folder.
         *
         * @param bookmark
         */
        create(bookmark: CreateDetails): Promise<BookmarkTreeNode>;

        /**
         * Moves the specified BookmarkTreeNode to the provided location.
         *
         * @param id
         * @param destination
         */
        move(id: string, destination: MoveDestinationType): Promise<BookmarkTreeNode>;

        /**
         * Updates the properties of a bookmark or folder. Specify only the properties that you want to change; unspecified
         * properties will be left unchanged.  <b>Note:</b> Currently, only 'title' and 'url' are supported.
         *
         * @param id
         * @param changes
         */
        update(id: string, changes: UpdateChangesType): Promise<BookmarkTreeNode>;

        /**
         * Removes a bookmark or an empty bookmark folder.
         *
         * @param id
         */
        remove(id: string): Promise<void>;

        /**
         * Recursively removes a bookmark folder.
         *
         * @param id
         */
        removeTree(id: string): Promise<void>;

        /**
         * Fired when a bookmark or folder is created.
         *
         * @param id
         * @param bookmark
         */
        onCreated: Events.Event<(id: string, bookmark: BookmarkTreeNode) => void>;

        /**
         * Fired when a bookmark or folder is removed.  When a folder is removed recursively,
         * a single notification is fired for the folder, and none for its contents.
         *
         * @param id
         * @param removeInfo
         */
        onRemoved: Events.Event<(id: string, removeInfo: OnRemovedRemoveInfoType) => void>;

        /**
         * Fired when a bookmark or folder changes.  <b>Note:</b> Currently, only title and url changes trigger this.
         *
         * @param id
         * @param changeInfo
         */
        onChanged: Events.Event<(id: string, changeInfo: OnChangedChangeInfoType) => void>;

        /**
         * Fired when a bookmark or folder is moved to a different parent folder.
         *
         * @param id
         * @param moveInfo
         */
        onMoved: Events.Event<(id: string, moveInfo: OnMovedMoveInfoType) => void>;
    }
}
