/**
 * Represents a universally unique identifier for Sharetribe resources
 */
export interface UUID {
    _sdkType: "UUID";
    uuid: string;
}

/**
 * Represents monetary values with currency information
 */
export interface Money {
    _sdkType: "Money";
    amount: number;
    currency: string;
}

/**
 * Represents a geographic location with latitude and longitude
 */
export interface LatLng {
    _sdkType: "LatLng";
    lat: number;
    lng: number;
}

/**
 * Reference to a related resource
 */
export interface ResourceReference {
    id: UUID;
    type: string;
}

/**
 * Generic included resource in API responses
 */
export interface IncludedResource {
    id: UUID;
    type: string;
    attributes?: Record<string, unknown>;
    relationships?: Record<string, { data: ResourceReference | ResourceReference[] }>;
}

/**
 * Transaction attributes
 */
export interface TransactionAttributes {
    createdAt?: string;
    processName?: string;
    processVersion?: number;
    lastTransition?: string;
    lastTransitionedAt?: string;
    transitions?: Array<{
        transition: string;
        createdAt: string;
        by: string;
    }>;
    payinTotal?: Money;
    payoutTotal?: Money;
    lineItems?: Array<{
        code: string;
        unitPrice: Money;
        quantity?: number;
        lineTotal: Money;
        includeFor: string[];
        reversal?: boolean;
    }>;
    protectedData?: Record<string, unknown>;
    metadata?: Record<string, unknown>;
}

/**
 * Transaction relationships
 */
export interface TransactionRelationships {
    customer: {
        data: ResourceReference;
    };
    provider: {
        data: ResourceReference;
    };
    listing: {
        data: ResourceReference;
    };
    marketplace?: {
        data: ResourceReference;
    };
    booking?: {
        data: ResourceReference;
    };
    reviews?: {
        data: ResourceReference[];
    };
    messages?: {
        data: ResourceReference[];
    };
}

/**
 * Transaction resource
 */
export interface Transaction {
    id: UUID;
    type: "transaction";
    attributes: TransactionAttributes;
    relationships: TransactionRelationships;
}

/**
 * User profile information
 */
export interface UserProfile {
    displayName?: string;
    firstName?: string;
    lastName?: string;
    bio?: string;
    abbreviatedName?: string;
    publicData?: Record<string, unknown>;
    protectedData?: Record<string, unknown>;
    metadata?: Record<string, unknown>;
}

/**
 * User attributes
 */
export interface UserAttributes {
    banned?: boolean;
    deleted?: boolean;
    email?: string;
    emailVerified?: boolean;
    pendingEmail?: string;
    profile: UserProfile;
    createdAt?: string;
}

/**
 * User relationships
 */
export interface UserRelationships {
    profileImage?: {
        data?: ResourceReference;
    };
    stripeAccount?: {
        data?: ResourceReference;
    };
}

/**
 * User resource
 */
export interface User {
    id: UUID;
    type: "user";
    attributes: UserAttributes;
    relationships?: UserRelationships;
}

/**
 * Listing attributes
 */
export interface ListingAttributes {
    title: string;
    description?: string;
    geolocation?: LatLng;
    deleted?: boolean;
    state?: string;
    createdAt?: string;
    price?: Money;
    availabilityPlan?: {
        type: string;
        timezone?: string;
        entries?: Array<{
            dayOfWeek: string;
            startTime: string;
            endTime: string;
            seats?: number;
        }>;
    };
    publicData?: Record<string, unknown>;
    privateData?: Record<string, unknown>;
    metadata?: Record<string, unknown>;
}

/**
 * Listing relationships
 */
export interface ListingRelationships {
    author?: {
        data: ResourceReference;
    };
    marketplace?: {
        data: ResourceReference;
    };
    currentStock?: {
        data: ResourceReference;
    };
    images?: {
        data: ResourceReference[];
    };
}

/**
 * Listing resource
 */
export interface Listing {
    id: UUID;
    type: "listing";
    attributes: ListingAttributes;
    relationships?: ListingRelationships;
}

/**
 * Message attributes
 */
export interface MessageAttributes {
    content: string;
    createdAt: string;
}

/**
 * Message relationships
 */
export interface MessageRelationships {
    transaction: {
        data: ResourceReference;
    };
    sender: {
        data: ResourceReference;
    };
}

/**
 * Message resource
 */
export interface Message {
    id: UUID;
    type: "message";
    attributes: MessageAttributes;
    relationships: MessageRelationships;
}

/**
 * Event attributes
 */
export interface EventAttributes {
    sequenceId: number;
    marketplaceId: string;
    eventType: string;
    resourceType: string;
    resourceId: string;
    resource: unknown;
    previousValues?: Record<string, unknown>;
    source?: string;
    createdAt: string;
}

/**
 * Event resource
 */
export interface Event {
    id: UUID;
    type: "event";
    attributes: EventAttributes;
}

/**
 * Image attributes
 */
export interface ImageAttributes {
    variants: Record<string, {
        name: string;
        width: number;
        height: number;
        url: string;
    }>;
}

/**
 * Image resource
 */
export interface Image {
    id: UUID;
    type: "image";
    attributes: ImageAttributes;
}

/**
 * Availability exception attributes
 */
export interface AvailabilityExceptionAttributes {
    start: string;
    end: string;
    seats?: number;
}

/**
 * Availability exception resource
 */
export interface AvailabilityException {
    id: UUID;
    type: "availabilityException";
    attributes: AvailabilityExceptionAttributes;
}

/**
 * Stock adjustment attributes
 */
export interface StockAdjustmentAttributes {
    quantity: number;
    at: string;
}

/**
 * Stock adjustment relationships
 */
export interface StockAdjustmentRelationships {
    listing: {
        data: ResourceReference;
    };
    stock: {
        data: ResourceReference;
    };
}

/**
 * Stock adjustment resource
 */
export interface StockAdjustment {
    id: UUID;
    type: "stockAdjustment";
    attributes: StockAdjustmentAttributes;
    relationships: StockAdjustmentRelationships;
}

/**
 * Stock resource
 */
export interface Stock {
    id: UUID;
    type: "stock";
    attributes: {
        quantity: number;
    };
}

/**
 * Stock reservation attributes
 */
export interface StockReservationAttributes {
    quantity: number;
    state: string;
}

/**
 * Stock reservation resource
 */
export interface StockReservation {
    id: UUID;
    type: "stockReservation";
    attributes: StockReservationAttributes;
}

/**
 * Marketplace attributes
 */
export interface MarketplaceAttributes {
    name: string;
    description: string | null;
}

/**
 * Marketplace resource
 */
export interface Marketplace {
    id: UUID;
    type: "marketplace";
    attributes: MarketplaceAttributes;
}

/**
 * Metadata for paginated query responses
 */
export interface QueryMeta {
    totalPages: number;
    totalItems?: number;
    page?: number;
    perPage?: number;
}

/**
 * Standard response structure for queries returning multiple resources
 */
export interface QueryResponse<T = unknown> {
    status: number;
    statusText: string;
    data: {
        data: T[];
        included?: IncludedResource[];
        meta: QueryMeta;
    };
}

/**
 * Standard response structure for operations returning a single resource
 */
export interface ShowResponse<T = unknown> {
    status: number;
    statusText: string;
    data: {
        data: T;
        included?: IncludedResource[];
    };
}

/**
 * Standard response structure for mutation operations
 */
export interface MutationResponse<T = unknown> {
    status: number;
    statusText: string;
    data: {
        data: T;
        included?: IncludedResource[];
    };
}

/**
 * Common query parameters for GET requests
 */
export interface BaseQueryParams {
    include?: string[];
    "fields.user"?: string[];
    "fields.listing"?: string[];
    "fields.transaction"?: string[];
    "fields.image"?: string[];
}

/**
 * Pagination parameters
 */
export interface PaginationParams {
    page?: number;
    perPage?: number;
}

/**
 * Options for per-request configuration
 */
export interface PerRequestOptions {
    expand?: boolean;
}

/**
 * Main Sharetribe Integration SDK interface
 */
export interface IntegrationSdk {
    marketplace: {
        /**
         * Show marketplace information
         */
        show: (params?: BaseQueryParams) => Promise<ShowResponse<Marketplace>>;
    };

    events: {
        /**
         * Query events from the Integration API
         * Polls for new events using sequence IDs
         */
        query: (
            params?: { startAfterSequenceId?: number } & BaseQueryParams,
        ) => Promise<QueryResponse<Event>>;
    };

    users: {
        /**
         * Show a specific user
         */
        show: (params: { id: UUID | string } & BaseQueryParams) => Promise<ShowResponse<User>>;
        /**
         * Query users
         */
        query: (params?: PaginationParams & BaseQueryParams) => Promise<QueryResponse<User>>;
        /**
         * Update user data (generic method for updating public, protected, or private data)
         */
        update: (
            params: {
                id: UUID | string;
                publicData?: Record<string, unknown>;
                protectedData?: Record<string, unknown>;
                privateData?: Record<string, unknown>;
            },
            options?: PerRequestOptions,
        ) => Promise<MutationResponse<User>>;
        /**
         * Update user profile
         */
        updateProfile: (
            params: {
                id: UUID | string;
                firstName?: string;
                lastName?: string;
                displayName?: string;
                bio?: string;
                publicData?: Record<string, unknown>;
                protectedData?: Record<string, unknown>;
                privateData?: Record<string, unknown>;
                profileImageId?: UUID;
            },
            options?: PerRequestOptions,
        ) => Promise<MutationResponse<User>>;
        /**
         * Approve a user
         */
        approve: (
            params: { id: UUID | string },
            options?: PerRequestOptions,
        ) => Promise<MutationResponse<User>>;
        /**
         * Update user permissions
         */
        updatePermissions: (
            params: {
                id: UUID | string;
                permissions?: Record<string, unknown>;
            },
            options?: PerRequestOptions,
        ) => Promise<MutationResponse<User>>;
    };

    listings: {
        /**
         * Show a specific listing
         */
        show: (params: { id: UUID | string } & BaseQueryParams) => Promise<ShowResponse<Listing>>;
        /**
         * Query listings
         */
        query: (
            params?:
                & {
                    authorId?: UUID | string;
                    ids?: Array<UUID | string>;
                    states?: string[];
                }
                & PaginationParams
                & BaseQueryParams,
        ) => Promise<QueryResponse<Listing>>;
        /**
         * Create a new listing
         * Allows both Money object and plain price object for flexibility
         */
        create: (
            params: {
                authorId: UUID | string;
                title: string;
                state: "published" | "pendingApproval";
                description?: string;
                geolocation?: LatLng;
                price?: Money | { amount: number; currency: string };
                availabilityPlan?: unknown;
                publicData?: Record<string, unknown>;
                privateData?: Record<string, unknown>;
                metadata?: Record<string, unknown>;
                images?: Array<UUID | string>;
            },
            options?: PerRequestOptions & { include?: string[] },
        ) => Promise<MutationResponse<Listing>>;
        /**
         * Update a listing
         * Allows both Money object and plain price object for flexibility
         */
        update: (
            params: {
                id: UUID | string;
                title?: string;
                description?: string;
                geolocation?: LatLng;
                price?: Money | { amount: number; currency: string };
                availabilityPlan?: unknown;
                publicData?: Record<string, unknown>;
                privateData?: Record<string, unknown>;
                metadata?: Record<string, unknown>;
                images?: Array<UUID | string>;
            },
            options?: PerRequestOptions,
        ) => Promise<MutationResponse<Listing>>;
        /**
         * Approve a listing
         */
        approve: (
            params: { id: UUID | string },
            options?: PerRequestOptions,
        ) => Promise<MutationResponse<Listing>>;
        /**
         * Open a listing
         */
        open: (
            params: { id: UUID | string },
            options?: PerRequestOptions,
        ) => Promise<MutationResponse<Listing>>;
        /**
         * Close a listing
         */
        close: (
            params: { id: UUID | string },
            options?: PerRequestOptions,
        ) => Promise<MutationResponse<Listing>>;
    };

    transactions: {
        /**
         * Show a specific transaction
         */
        show: (params: { id: UUID | string } & BaseQueryParams) => Promise<ShowResponse<Transaction>>;
        /**
         * Query transactions
         */
        query: (
            params?:
                & {
                    customerId?: UUID | string;
                    providerId?: UUID | string;
                    listingId?: UUID | string;
                    lastTransitions?: string[];
                }
                & PaginationParams
                & BaseQueryParams,
        ) => Promise<QueryResponse<Transaction>>;
        /**
         * Transition a transaction to a new state
         */
        transition: (
            params: {
                id: UUID | string;
                transition: string;
                params?: Record<string, unknown>;
            },
            options?: PerRequestOptions,
        ) => Promise<MutationResponse<Transaction>>;
        /**
         * Transition transaction speculatively (preview without applying)
         */
        transitionSpeculative: (
            params: {
                id: UUID | string;
                transition: string;
                params?: Record<string, unknown>;
            },
            options?: PerRequestOptions,
        ) => Promise<MutationResponse<Transaction>>;
        /**
         * Update transaction metadata
         */
        updateMetadata: (
            params: {
                id: UUID | string;
                metadata: Record<string, unknown>;
            },
            options?: PerRequestOptions,
        ) => Promise<MutationResponse<Transaction>>;
    };

    images: {
        /**
         * Upload an image from a file path
         * @param params.image - Path to the image file to upload
         */
        upload: (
            params: { image: string },
            options?: PerRequestOptions,
        ) => Promise<MutationResponse<Image>>;
    };

    availabilityExceptions: {
        /**
         * Query availability exceptions for a listing
         */
        query: (
            params: { listingId: UUID | string; start?: string; end?: string } & PaginationParams & BaseQueryParams,
        ) => Promise<QueryResponse<AvailabilityException>>;
        /**
         * Create availability exception
         */
        create: (
            params: {
                listingId: UUID | string;
                start: string;
                end: string;
                seats?: number;
            },
            options?: PerRequestOptions,
        ) => Promise<MutationResponse<AvailabilityException>>;
        /**
         * Delete availability exception
         */
        delete: (
            params: { id: UUID | string },
            options?: PerRequestOptions,
        ) => Promise<MutationResponse<AvailabilityException>>;
    };

    stockAdjustments: {
        /**
         * Query stock adjustments
         */
        query: (
            params: { listingId: UUID | string } & PaginationParams & BaseQueryParams,
        ) => Promise<QueryResponse<StockAdjustment>>;
        /**
         * Create stock adjustment
         */
        create: (
            params: {
                listingId: UUID | string;
                quantity: number;
            },
            options?: PerRequestOptions,
        ) => Promise<MutationResponse<StockAdjustment>>;
    };

    stock: {
        /**
         * Compare and set stock quantity atomically
         * oldTotal can be null for new listings without existing stock
         */
        compareAndSet: (
            params: {
                listingId: UUID | string;
                oldTotal: number | null;
                newTotal: number;
            },
            options?: PerRequestOptions,
        ) => Promise<MutationResponse<Stock>>;
    };

    stockReservations: {
        /**
         * Show a specific stock reservation
         */
        show: (params: { id: UUID | string } & BaseQueryParams) => Promise<ShowResponse<StockReservation>>;
    };

    /**
     * Revoke authentication token
     */
    revoke: () => Promise<unknown>;

    /**
     * Get authentication information
     */
    authInfo: () => Promise<unknown>;
}

/**
 * SDK configuration options for Integration API
 */
export interface IntegrationSdkConfig {
    clientId: string;
    clientSecret: string;
    baseUrl?: string;
    queryLimiter?: unknown;
    commandLimiter?: unknown;
    adapter?: unknown;
    tokenStore?: unknown;
    typeHandlers?: unknown[];
    transitVerbose?: boolean;
    httpAgent?: unknown;
    httpsAgent?: unknown;
}

/**
 * Create a new Sharetribe Integration SDK instance
 * @param config - SDK configuration including required clientId and clientSecret
 * @returns Configured Integration SDK instance
 */
export function createInstance(config: IntegrationSdkConfig): IntegrationSdk;

/**
 * Utility functions for SDK configuration
 */
export namespace util {
    /**
     * Create a rate limiter for API requests
     * @param config - Rate limiter configuration
     * @returns Rate limiter instance
     */
    function createRateLimiter(config: unknown): unknown;

    /**
     * Production-ready query rate limiter configuration
     */
    const prodQueryLimiterConfig: unknown;

    /**
     * Production-ready command rate limiter configuration
     */
    const prodCommandLimiterConfig: unknown;
}
