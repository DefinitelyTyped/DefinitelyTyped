/**
 * Represents a universally unique identifier for Sharetribe resources
 */
export interface UUID {
    _sdkType?: "UUID";
    uuid: string;
}

/**
 * Represents monetary values with currency information
 */
export interface Money {
    _sdkType?: "Money";
    amount: number;
    currency: string;
}

/**
 * Represents a geographic location with latitude and longitude
 */
export interface LatLng {
    _sdkType?: "LatLng";
    lat: number;
    lng: number;
}

/**
 * Represents a geographic bounding box
 */
export interface LatLngBounds {
    _sdkType?: "LatLngBounds";
    ne: LatLng;
    sw: LatLng;
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
 * Image variant with dimensions and URL
 */
export interface ImageVariant {
    name: string;
    width: number;
    height: number;
    url: string;
}

/**
 * Collection of image variants by name
 */
export interface ImageVariants {
    [key: string]: ImageVariant;
}

/**
 * Attributes for an image resource
 */
export interface ImageAttributes {
    variants: ImageVariants;
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
 * Marketplace color scheme configuration
 */
export interface MarketplaceColors {
    primaryButton: string;
    notificationPrimaryButton: string;
    mainColor: string;
}

/**
 * Branding configuration data
 */
export interface BrandingData {
    marketplaceColors: MarketplaceColors;
}

/**
 * Branding information including images
 */
export interface Branding {
    data: BrandingData;
    included: Image[];
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
 * Current user attributes (includes private fields)
 */
export interface CurrentUserAttributes extends UserAttributes {
    stripeConnected?: boolean;
    stripePayoutsEnabled?: boolean;
    stripeChargesEnabled?: boolean;
    identityProviders?: Array<{
        idpId: string;
        userId: string;
    }>;
}

/**
 * Current user resource
 */
export interface CurrentUser extends Omit<User, "attributes" | "type"> {
    type: "currentUser";
    attributes: CurrentUserAttributes;
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
    images?: {
        data: ResourceReference[];
    };
    currentStock?: {
        data: ResourceReference;
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
 * Own listing resource (has additional private fields)
 */
export interface OwnListing extends Omit<Listing, "type"> {
    type: "ownListing";
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
 * Booking attributes
 */
export interface BookingAttributes {
    start: string;
    end: string;
    displayStart?: string;
    displayEnd?: string;
    seats?: number;
    state?: string;
}

/**
 * Booking resource
 */
export interface Booking {
    id: UUID;
    type: "booking";
    attributes: BookingAttributes;
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
 * Review attributes
 */
export interface ReviewAttributes {
    type: string;
    state: string;
    rating: number;
    content?: string;
    createdAt?: string;
}

/**
 * Review relationships
 */
export interface ReviewRelationships {
    author: {
        data: ResourceReference;
    };
    subject: {
        data: ResourceReference;
    };
    listing: {
        data: ResourceReference;
    };
}

/**
 * Review resource
 */
export interface Review {
    id: UUID;
    type: "review";
    attributes: ReviewAttributes;
    relationships: ReviewRelationships;
}

/**
 * Time slot attributes
 */
export interface TimeSlotAttributes {
    type: string;
    start: string;
    end: string;
    seats?: number;
}

/**
 * Time slot resource
 */
export interface TimeSlot {
    id: UUID;
    type: "timeSlot";
    attributes: TimeSlotAttributes;
}

/**
 * Stock adjustment attributes
 */
export interface StockAdjustmentAttributes {
    quantity: number;
    at: string;
}

/**
 * Stock adjustment resource
 */
export interface StockAdjustment {
    id: UUID;
    type: "stockAdjustment";
    attributes: StockAdjustmentAttributes;
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
 * Stripe account attributes
 */
export interface StripeAccountAttributes {
    stripeAccountId: string;
    stripeAccountData?: Record<string, unknown>;
}

/**
 * Stripe account resource
 */
export interface StripeAccount {
    id: UUID;
    type: "stripeAccount";
    attributes: StripeAccountAttributes;
}

/**
 * Stripe customer attributes
 */
export interface StripeCustomerAttributes {
    stripeCustomerId: string;
}

/**
 * Stripe customer resource
 */
export interface StripeCustomer {
    id: UUID;
    type: "stripeCustomer";
    attributes: StripeCustomerAttributes;
}

/**
 * Common query parameters for GET requests
 */
export interface BaseQueryParams {
    include?: string[];
    "fields.user"?: string[];
    "fields.listing"?: string[];
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
    onUploadProgress?: (progressEvent: unknown) => void;
    expand?: boolean;
}

/**
 * Main Sharetribe Flex SDK interface
 */
export interface MarketplaceSdk {
    marketplace: {
        /**
         * Show marketplace information
         */
        show: (params?: BaseQueryParams) => Promise<ShowResponse<Marketplace>>;
    };

    users: {
        /**
         * Show a specific user
         */
        show: (params: { id: UUID } & BaseQueryParams) => Promise<ShowResponse<User>>;
    };

    currentUser: {
        /**
         * Show current user information
         */
        show: (params?: BaseQueryParams) => Promise<ShowResponse<CurrentUser>>;
        /**
         * Create a new user
         */
        create: (
            params: {
                email: string;
                password: string;
                firstName: string;
                lastName: string;
                displayName?: string;
                bio?: string;
                publicData?: Record<string, unknown>;
                protectedData?: Record<string, unknown>;
                privateData?: Record<string, unknown>;
            },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse<CurrentUser>>;
        /**
         * Create a new user with identity provider
         */
        createWithIdp: (
            params: {
                idpToken: string;
                idpId: string;
                firstName?: string;
                lastName?: string;
                displayName?: string;
                bio?: string;
                publicData?: Record<string, unknown>;
                protectedData?: Record<string, unknown>;
                privateData?: Record<string, unknown>;
            },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse<CurrentUser>>;
        /**
         * Update current user profile
         */
        updateProfile: (
            params: {
                firstName?: string;
                lastName?: string;
                displayName?: string;
                bio?: string;
                publicData?: Record<string, unknown>;
                protectedData?: Record<string, unknown>;
                privateData?: Record<string, unknown>;
                profileImageId?: UUID;
            },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse<CurrentUser>>;
        /**
         * Change current user email
         */
        changeEmail: (
            params: { currentPassword: string; email: string },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse<CurrentUser>>;
        /**
         * Change current user password
         */
        changePassword: (
            params: { currentPassword: string; newPassword: string },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse<CurrentUser>>;
        /**
         * Delete current user
         */
        delete: (params?: Record<string, never>, queryParams?: { expand?: boolean }, opts?: PerRequestOptions) => Promise<MutationResponse<CurrentUser>>;
        /**
         * Verify current user email
         */
        verifyEmail: (
            params: { verificationToken: string },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse<CurrentUser>>;
        /**
         * Send verification email to current user
         */
        sendVerificationEmail: (params?: Record<string, never>, queryParams?: { expand?: boolean }, opts?: PerRequestOptions) => Promise<MutationResponse>;
        /**
         * Create Stripe account for current user
         */
        createStripeAccount: (
            params: {
                country?: string;
                accountToken?: string;
                bankAccountToken?: string;
                requestedCapabilities?: string[];
            },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse<CurrentUser>>;
        /**
         * Update Stripe account for current user
         */
        updateStripeAccount: (
            params: { accountToken?: string; bankAccountToken?: string; requestedCapabilities?: string[] },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse<CurrentUser>>;
        /**
         * Delete Stripe account for current user
         */
        deleteStripeAccount: (params?: Record<string, never>, queryParams?: { expand?: boolean }, opts?: PerRequestOptions) => Promise<MutationResponse<CurrentUser>>;
    };

    passwordReset: {
        /**
         * Request password reset
         */
        request: (
            params: { email: string },
            queryParams?: Record<string, never>,
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse>;
        /**
         * Reset password using token
         */
        reset: (
            params: { passwordResetToken: string; newPassword: string },
            queryParams?: Record<string, never>,
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse>;
    };

    listings: {
        /**
         * Show a specific listing
         */
        show: (params: { id: UUID } & BaseQueryParams) => Promise<ShowResponse<Listing>>;
        /**
         * Query listings
         */
        query: (
            params?: {
                authorId?: UUID;
                ids?: UUID[];
                start?: string;
                end?: string;
                availability?: string;
                states?: string[];
                minPrice?: string;
                maxPrice?: string;
                keywords?: string;
                sort?: string;
                origin?: LatLng;
                bounds?: LatLngBounds;
                pub_category?: string;
                [key: string]: unknown;
            } & PaginationParams &
                BaseQueryParams,
        ) => Promise<QueryResponse<Listing>>;
        /**
         * Search listings (alias for query with search-specific defaults)
         */
        search: (
            params?: {
                origin?: LatLng;
                bounds?: LatLngBounds;
                keywords?: string;
                [key: string]: unknown;
            } & PaginationParams &
                BaseQueryParams,
        ) => Promise<QueryResponse<Listing>>;
    };

    ownListings: {
        /**
         * Show own listing
         */
        show: (params: { id: UUID } & BaseQueryParams) => Promise<ShowResponse<OwnListing>>;
        /**
         * Query own listings
         */
        query: (params?: PaginationParams & BaseQueryParams) => Promise<QueryResponse<OwnListing>>;
        /**
         * Create a new listing
         */
        create: (
            params: {
                title: string;
                description?: string;
                geolocation?: LatLng;
                price?: Money;
                availabilityPlan?: unknown;
                publicData?: Record<string, unknown>;
                privateData?: Record<string, unknown>;
            },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse<OwnListing>>;
        /**
         * Create a draft listing
         */
        createDraft: (
            params: {
                title: string;
                description?: string;
                geolocation?: LatLng;
                price?: Money;
                availabilityPlan?: unknown;
                publicData?: Record<string, unknown>;
                privateData?: Record<string, unknown>;
            },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse<OwnListing>>;
        /**
         * Publish a draft listing
         */
        publishDraft: (
            params: { id: UUID },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse<OwnListing>>;
        /**
         * Discard a draft listing
         */
        discardDraft: (
            params: { id: UUID },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse<OwnListing>>;
        /**
         * Update a listing
         */
        update: (
            params: {
                id: UUID;
                title?: string;
                description?: string;
                geolocation?: LatLng;
                price?: Money;
                availabilityPlan?: unknown;
                publicData?: Record<string, unknown>;
                privateData?: Record<string, unknown>;
            },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse<OwnListing>>;
        /**
         * Open a listing
         */
        open: (
            params: { id: UUID },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse<OwnListing>>;
        /**
         * Close a listing
         */
        close: (
            params: { id: UUID },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse<OwnListing>>;
        /**
         * Add image to listing
         */
        addImage: (
            params: { id: UUID; imageId: UUID },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse<OwnListing>>;
    };

    availabilityExceptions: {
        /**
         * Query availability exceptions for a listing
         */
        query: (
            params: { listingId: UUID; start?: string; end?: string } & PaginationParams & BaseQueryParams,
        ) => Promise<QueryResponse<AvailabilityException>>;
        /**
         * Create availability exception
         */
        create: (
            params: { listingId: UUID; start: string; end: string; seats?: number },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse<AvailabilityException>>;
        /**
         * Delete availability exception
         */
        delete: (
            params: { id: UUID },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse<AvailabilityException>>;
    };

    images: {
        /**
         * Upload an image
         */
        upload: (
            params: { image: unknown },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse<Image>>;
    };

    transactions: {
        /**
         * Show a specific transaction
         */
        show: (params: { id: UUID } & BaseQueryParams) => Promise<ShowResponse<Transaction>>;
        /**
         * Query transactions
         */
        query: (
            params?: {
                only?: string;
                lastTransitions?: string[];
            } & PaginationParams &
                BaseQueryParams,
        ) => Promise<QueryResponse<Transaction>>;
        /**
         * Initiate a new transaction
         */
        initiate: (
            params: {
                processAlias?: string;
                transition?: string;
                params?: Record<string, unknown>;
            },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse<Transaction>>;
        /**
         * Initiate transaction speculatively (preview without creating)
         */
        initiateSpeculative: (
            params: {
                processAlias?: string;
                transition?: string;
                params?: Record<string, unknown>;
            },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse<Transaction>>;
        /**
         * Transition a transaction to a new state
         */
        transition: (
            params: {
                id: UUID;
                transition: string;
                params?: Record<string, unknown>;
            },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse<Transaction>>;
        /**
         * Transition transaction speculatively (preview without applying)
         */
        transitionSpeculative: (
            params: {
                id: UUID;
                transition: string;
                params?: Record<string, unknown>;
            },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse<Transaction>>;
    };

    processTransitions: {
        /**
         * Query available process transitions
         */
        query: (params?: BaseQueryParams) => Promise<QueryResponse>;
    };

    bookings: {
        /**
         * Query bookings
         */
        query: (
            params?: {
                listingId?: UUID;
                start?: string;
                end?: string;
                state?: string;
            } & PaginationParams &
                BaseQueryParams,
        ) => Promise<QueryResponse<Booking>>;
    };

    messages: {
        /**
         * Query messages in a transaction
         */
        query: (
            params: { transactionId: UUID } & PaginationParams & BaseQueryParams,
        ) => Promise<QueryResponse<Message>>;
        /**
         * Send a message in a transaction
         */
        send: (
            params: { transactionId: UUID; content: string },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse<Message>>;
    };

    reviews: {
        /**
         * Show a specific review
         */
        show: (params: { id: UUID } & BaseQueryParams) => Promise<ShowResponse<Review>>;
        /**
         * Query reviews
         */
        query: (
            params?: {
                listingId?: UUID;
                subjectId?: UUID;
                state?: string;
                type?: string;
            } & PaginationParams &
                BaseQueryParams,
        ) => Promise<QueryResponse<Review>>;
    };

    timeslots: {
        /**
         * Query available time slots for a listing
         */
        query: (
            params: { listingId: UUID; start: string; end: string } & BaseQueryParams,
        ) => Promise<QueryResponse<TimeSlot>>;
    };

    stripeAccount: {
        /**
         * Create Stripe account
         */
        create: (
            params: { country?: string; accountToken?: string; bankAccountToken?: string },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse<StripeAccount>>;
        /**
         * Fetch Stripe account information
         */
        fetch: (params?: BaseQueryParams) => Promise<ShowResponse<StripeAccount>>;
        /**
         * Update Stripe account
         */
        update: (
            params: { accountToken?: string; bankAccountToken?: string },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse<StripeAccount>>;
    };

    stripeAccountLinks: {
        /**
         * Create Stripe account link for onboarding
         */
        create: (
            params: {
                failureURL: string;
                successURL: string;
                type: string;
                collect?: string;
            },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse>;
    };

    stripePersons: {
        /**
         * Create Stripe person for an account
         */
        create: (
            params: { personToken: string },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse>;
    };

    stripeSetupIntents: {
        /**
         * Create Stripe setup intent for saving payment method
         */
        create: (
            params?: Record<string, unknown>,
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse>;
    };

    stripeCustomer: {
        /**
         * Create Stripe customer for current user
         */
        create: (
            params?: { stripePaymentMethodId?: string },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse<StripeCustomer>>;
        /**
         * Add payment method to Stripe customer
         */
        addPaymentMethod: (
            params: { stripePaymentMethodId: string },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse<StripeCustomer>>;
        /**
         * Delete payment method from Stripe customer
         */
        deletePaymentMethod: (
            params: { stripePaymentMethodId: string },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse<StripeCustomer>>;
    };

    stockAdjustments: {
        /**
         * Query stock adjustments for a listing
         */
        query: (params: { listingId: UUID } & PaginationParams & BaseQueryParams) => Promise<QueryResponse<StockAdjustment>>;
        /**
         * Create stock adjustment
         */
        create: (
            params: { listingId: UUID; quantity: number },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse<StockAdjustment>>;
    };

    stock: {
        /**
         * Compare and set stock quantity atomically
         */
        compareAndSet: (
            params: { listingId: UUID; oldTotal: number; newTotal: number },
            queryParams?: { expand?: boolean },
            opts?: PerRequestOptions,
        ) => Promise<MutationResponse<Stock>>;
    };

    sitemapData: {
        /**
         * Query listings for sitemap generation
         */
        queryListings: (params?: PaginationParams & BaseQueryParams) => Promise<QueryResponse<Listing>>;
        /**
         * Query assets for sitemap generation
         */
        queryAssets: (params?: PaginationParams) => Promise<QueryResponse>;
    };

    /**
     * Authentication methods
     */
    login: (params: { username: string; password: string }) => Promise<unknown>;
    loginAs: (params: { userId: UUID }) => Promise<unknown>;
    logout: () => Promise<unknown>;
    authInfo: () => Promise<unknown>;
    exchangeToken: (params?: Record<string, unknown>) => Promise<unknown>;
    loginWithIdp: (params: { idpId: string; idpToken: string; idpClientId: string }) => Promise<unknown>;

    /**
     * Asset delivery methods
     */
    assetByAlias: (params: { path: string; alias: string }) => Promise<{ status?: number; data: unknown }>;
    assetByVersion: (params: { path: string; version: string }) => Promise<{ status?: number; data: unknown }>;
    assetsByAlias: (params: { paths: string[]; alias: string }) => Promise<{ status?: number; data: unknown }>;
    assetsByVersion: (params: { paths: string[]; version: string }) => Promise<{ status?: number; data: unknown }>;
}

/**
 * SDK configuration options
 */
export interface SdkConfig {
    clientId: string;
    baseUrl?: string;
    assetCdnBaseUrl?: string;
    adapter?: unknown;
    tokenStore?: unknown;
    typeHandlers?: unknown[];
    transitVerbose?: boolean;
    httpAgent?: unknown;
    httpsAgent?: unknown;
}

/**
 * Create a new Sharetribe SDK instance
 * @param config - SDK configuration including required clientId
 * @returns Configured SDK instance
 */
export function createInstance(config: SdkConfig): MarketplaceSdk;
