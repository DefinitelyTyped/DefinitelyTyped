//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

import { Events } from "./events";

/**
 * Namespace: browser.contextualIdentities
 */
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
         * Reorder one or more contextual identities by their cookieStoreIDs to a given position.
         *
         * @param cookieStoreIds The ID or list of IDs of the contextual identity cookie stores.
         * @param position The position the contextual identity should move to.
         */
        move(cookieStoreIds: string | string[], position: number): void;

        /**
         * Deletes a contextual identity by its cookie Store ID.
         *
         * @param cookieStoreId The ID of the contextual identity cookie store.
         */
        remove(cookieStoreId: string): Promise<ContextualIdentity>;

        /**
         * Fired when a container is updated.
         */
        onUpdated: Events.Event<(changeInfo: OnUpdatedChangeInfoType) => void>;

        /**
         * Fired when a new container is created.
         */
        onCreated: Events.Event<(changeInfo: OnCreatedChangeInfoType) => void>;

        /**
         * Fired when a container is removed.
         */
        onRemoved: Events.Event<(changeInfo: OnRemovedChangeInfoType) => void>;
    }
}
