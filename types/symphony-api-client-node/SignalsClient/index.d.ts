export interface Signal {
    name: string;
    query: string;
    visibleOnProfile: boolean;
    companyWide: boolean;
    id: string;
    timestamp: number;
}

export interface DeleteOperationResult {
    format: string;
    message: string;
}

export interface SignalSubscriptionResult {
    requestedSubscription: number;
    successfulSubscription: number;
    failedSubscription: number;
    subscriptionErrors: any[];
}

export interface SignalSubscriber {
    pushed: boolean;
    owner: boolean;
    subscriberName: string;
    userId: number;
    timestamp: number;
}

export interface SignalSubscribersResponse {
    offset: number;
    hasMore: boolean;
    total: number;
    data: SignalSubscriber[];
}

export function listSignals(skip: number, limit: number, sessionToken: string): Promise<Signal[]>;
export function getSignal(id: string, sessionToken: string): Promise<Signal>;
export function createSignal(name: string, query: string, visibleOnProfile: boolean, companyWide: boolean, sessionToken: string): Promise<Signal>;
export function deleteSignal(id: string, sessionToken: string): Promise<DeleteOperationResult>;
export function updateSignal(
    id: string,
    name?: string,
    query?: string,
    visibleOnProfile?: boolean,
    companyWide?: boolean,
    sessionToken?: string,
): Promise<Signal>;
export function unsubscribeSignal(id: string, userIds: number[], sessionToken: string): Promise<SignalSubscriptionResult>;
export function subscribeSignal(id: string, userIds: number[], userCanUnsubscribe: boolean, sessionToken: string): Promise<SignalSubscriptionResult>;
export function getSignalSubscribers(id: string, skip: number, limit: number, sessionToken: string): Promise<SignalSubscribersResponse>;
