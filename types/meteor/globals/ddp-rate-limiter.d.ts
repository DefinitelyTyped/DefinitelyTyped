declare namespace DDPRateLimiter {
    interface Matcher {
        type?: string | ((type: string) => boolean) | undefined;
        name?: string | ((name: string) => boolean) | undefined;
        userId?: string | ((userId: string) => boolean) | undefined;
        connectionId?: string | ((connectionId: string) => boolean) | undefined;
        clientAddress?: string | ((clientAddress: string) => boolean) | undefined;
    }

    function addRule(matcher: Matcher, numRequests: number, timeInterval: number): string;

    function removeRule(ruleId: string): boolean;
}
