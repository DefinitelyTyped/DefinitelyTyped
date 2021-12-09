export = PubSub;
declare function PubSub(): void;
declare class PubSub {
    private subscriptions_;
    private topics_;
    private key_;
    private pendingKeys_;
    private publishDepth_;
    subscribe(topic: string, fn: (arg0: any) => any, opt_context?: any): number;
    subscribeOnce(topic: string, fn: (arg0: any) => any, opt_context?: any): number;
    unsubscribe(topic: string, fn: (arg0: any) => any, opt_context?: any): boolean;
    unsubscribeByKey(key: number): boolean;
    publish(topic: string, ...args: any[]): boolean;
    clear(opt_topic?: string): void;
    getCount(opt_topic?: string): number;
    disposeInternal(): void;
}
