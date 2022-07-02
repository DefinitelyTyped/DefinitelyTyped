/**
 * Namespace: browser.contextualIdentities
 * Generated from Mozilla sources. Do not manually edit!
 *
 * Use the <code>browser.contextualIdentities</code> API to query and modify contextual identity, also called as containers.
 * Permissions: "contextualIdentities"
 *
 * Comments found in source JSON schema files:
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { Events } from "./events";

export namespace ContextualIdentities {
    /**
     * Represents information about a contextual identity.
     */
    interface ContextualIdentity {
        /**
         * The name of the contextual identity.
         */
        name: string;

        /**
         * The icon name of the contextual identity.
         */
        icon: string;

        /**
         * The icon url of the contextual identity.
         */
        iconUrl: string;

        /**
         * The color name of the contextual identity.
         */
        color: string;

        /**
         * The color hash of the contextual identity.
         */
        colorCode: string;

        /**
         * The cookie store ID of the contextual identity.
         */
        cookieStoreId: string;
    }

    /**
     * Information to filter the contextual identities being retrieved.
     */
    interface QueryDetailsType {
        /**
         * Filters the contextual identity by name.
         * Optional.
         */
        name?: string;
    }

    /**
     * Details about the contextual identity being created.
     */
    interface CreateDetailsType {
        /**
         * The name of the contextual identity.
         */
        name: string;

        /**
         * The color of the contextual identity.
         */
        color: string;

        /**
         * The icon of the contextual identity.
         */
        icon: string;
    }

    /**
     * Details about the contextual identity being created.
     */
    interface UpdateDetailsType {
        /**
         * The name of the contextual identity.
         * Optional.
         */
        name?: string;

        /**
         * The color of the contextual identity.
         * Optional.
         */
        color?: string;

        /**
         * The icon of the contextual identity.
         * Optional.
         */
        icon?: string;
    }

    interface OnUpdatedChangeInfoType {
        /**
         * Contextual identity that has been updated
         */
        contextualIdentity: ContextualIdentity;
    }

    interface OnCreatedChangeInfoType {
        /**
         * Contextual identity that has been created
         */
        contextualIdentity: ContextualIdentity;
    }

    interface OnRemovedChangeInfoType {
        /**
         * Contextual identity that has been removed
         */
        contextualIdentity: ContextualIdentity;
    }

    interface Static {
        /**
         * Retrieves information about a single contextual identity.
         *
         * @param cookieStoreId The ID of the contextual identity cookie store.
         */
        get(cookieStoreId: string): Promise<ContextualIdentity>;

        /**
         * Retrieves all contextual identities
         *
         * @param details Information to filter the contextual identities being retrieved.
         */
        query(details: QueryDetailsType): Promise<ContextualIdentity[]>;

        /**
         * Creates a contextual identity with the given data.
         *
         * @param details Details about the contextual identity being created.
         */
        create(details: CreateDetailsType): Promise<ContextualIdentity>;

        /**
         * Updates a contextual identity with the given data.
         *
         * @param cookieStoreId The ID of the contextual identity cookie store.
         * @param details Details about the contextual identity being created.
         */
        update(cookieStoreId: string, details: UpdateDetailsType): Promise<ContextualIdentity>;

        /**
         * Deletes a contetual identity by its cookie Store ID.
         *
         * @param cookieStoreId The ID of the contextual identity cookie store.
         */
        remove(cookieStoreId: string): Promise<ContextualIdentity>;

        /**
         * Fired when a container is updated.
         *
         * @param changeInfo
         */
        onUpdated: Events.Event<(changeInfo: OnUpdatedChangeInfoType) => void>;

        /**
         * Fired when a new container is created.
         *
         * @param changeInfo
         */
        onCreated: Events.Event<(changeInfo: OnCreatedChangeInfoType) => void>;

        /**
         * Fired when a container is removed.
         *
         * @param changeInfo
         */
        onRemoved: Events.Event<(changeInfo: OnRemovedChangeInfoType) => void>;
    }
}
