export type HealthCheckResult =
    | { type: 'error'; timeout: number; error: Error; watcher: string | null }
    | { type: 'success'; timeout: number; timeElapsed: number; watcher: string | null }
    | { type: 'timeout'; timeout: number; watcher: string | null; pauseReason: string | null };
