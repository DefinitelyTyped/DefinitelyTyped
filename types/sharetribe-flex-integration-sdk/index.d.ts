export interface UUID {
  _sdkType: "UUID";
  uuid: string;
}

export interface Money {
  _sdkType: "Money";
  amount: number;
  currency: string;
}

export interface ResourceReference {
  id: UUID;
  type: string;
}

export interface IncludedResource {
  type: string;
  id?: {
    uuid: string;
  };
  [key: string]: unknown;
}

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
  messages: {
    data: ResourceReference[];
  };
}

export interface TransactionAttributes {
  lastTransition?: string;
  payinTotal?: Money;
  processName?: string;
  metadata?: {
    lastUpdatedAt?: string;
  };
  transitions?: unknown[];
  createdAt?: number;
}

export interface Transaction {
  id: UUID;
  type: string;
  attributes: TransactionAttributes;
  relationships: TransactionRelationships;
}

export interface UserProfile {
  displayName?: string;
  firstName?: string;
  lastName?: string;
  publicData?: {
    userType?: string;
    [key: string]: unknown;
  };
}

export interface UserAttributes {
  email: string;
  profile: UserProfile;
  state?: string;
}

export interface UserRelationships {
  profileImage?: {
    data?: ResourceReference;
  };
}

export interface User {
  id: UUID;
  type: string;
  attributes: UserAttributes;
  relationships?: UserRelationships;
}

export interface ListingAttributes {
  title: string;
  description?: string;
  state?: string;
  price?: Money;
  publicData?: Record<string, unknown>;
  privateData?: Record<string, unknown>;
  deleted?: boolean;
  geolocation?: unknown;
  createdAt?: number;
  availabilityPlan?: unknown;
  metadata?: Record<string, unknown>;
}

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

export interface Listing {
  id: UUID;
  type: string;
  attributes: ListingAttributes;
  relationships?: ListingRelationships;
}

export interface MessageAttributes {
  content: string;
  createdAt: {
    _seconds: number;
    _nanoseconds: number;
  };
}

export interface MessageRelationships {
  transaction: {
    data: ResourceReference;
  };
  sender?: {
    data: ResourceReference;
  };
  customer?: {
    data: ResourceReference;
  };
  provider?: {
    data: ResourceReference;
  };
}

export interface Message {
  id: UUID;
  type: string;
  attributes: MessageAttributes;
  relationships: MessageRelationships;
}

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

export interface Event {
  id: UUID;
  type: string;
  attributes: EventAttributes;
}

export interface MarketplaceAttributes {
  name: string;
  description: string | null;
}

export interface MarketplaceData {
  id: UUID;
  type: string;
  attributes: MarketplaceAttributes;
}

export interface MarketplaceShowResponse {
  status: number;
  statusText: string;
  data: {
    data: MarketplaceData;
  };
}

export interface QueryMeta {
  totalPages: number;
  totalItems?: number;
  page?: number;
  perPage?: number;
}

export interface QueryResponse<T> {
  status: number;
  data: {
    data: T[];
    included?: IncludedResource[];
    meta: QueryMeta;
  };
}

export interface ShowResponse<T> {
  status: number;
  data: {
    data: T;
    included?: IncludedResource[];
  };
}

export interface MutationResponse {
  status: number;
  data: unknown;
}

export interface IntegrationSdk {
  marketplace: {
    show: () => Promise<MarketplaceShowResponse>;
  };
  events: {
    query: (params?: { startAfterSequenceId?: number }) => Promise<QueryResponse<Event>>;
  };
  users: {
    query: (params?: { page?: number; include?: string[] }) => Promise<QueryResponse<User>>;
    show: (params: { id: string; include?: string[] }) => Promise<ShowResponse<User>>;
    updatePermissions: (params: Record<string, unknown>) => Promise<MutationResponse>;
  };
  transactions: {
    query: (params?: { page?: number; include?: string[] }) => Promise<QueryResponse<Transaction>>;
    transition: (params: { id: string; transition: string; params: Record<string, unknown> }) => Promise<MutationResponse>;
    updateMetadata: (params: { id: string; metadata: Record<string, unknown> }, options?: { expand?: boolean }) => Promise<MutationResponse>;
  };
  listings: {
    query: (params?: { page?: number; include?: string[] }) => Promise<QueryResponse<Listing>>;
  };
}

export function createInstance(config: {
  clientId: string;
  clientSecret: string;
  queryLimiter?: unknown;
  commandLimiter?: unknown;
}): IntegrationSdk;

export namespace util {
  function createRateLimiter(config: unknown): unknown;
  const prodQueryLimiterConfig: unknown;
  const prodCommandLimiterConfig: unknown;
}
