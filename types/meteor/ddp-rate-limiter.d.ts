declare module "meteor/ddp-rate-limiter" {
    module DDPRateLimiter {
        interface Matcher {
            type?: string | ((type: string) => boolean);
            name?: string | ((name: string) => boolean);
            userId?: string | ((userId: string) => boolean);
            connectionId?: string | ((connectionId: string) => boolean);
            clientAddress?: string | ((clientAddress: string) => boolean);
        }

        function addRule(matcher: Matcher, numRequests: number, timeInterval: number): string;

        function removeRule(ruleId: string): boolean;
    }
}
