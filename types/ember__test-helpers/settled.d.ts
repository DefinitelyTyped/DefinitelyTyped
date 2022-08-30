export interface SettledState {
    hasRunLoop: boolean;
    hasPendingTimers: boolean;
    hasPendingWaiters: boolean;
    hasPendingRequests: boolean;
    hasPendingTransitions: boolean | null;
    pendingRequestCount: number;
}

export default function settled(): Promise<void>;
export function isSettled(): boolean;
export function getSettledState(): SettledState;
