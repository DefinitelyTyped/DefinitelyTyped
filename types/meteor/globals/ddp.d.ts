declare module DDP {
    interface DDPStatic {
        subscribe(name: string, ...rest: any[]): Meteor.SubscriptionHandle;
        call(method: string, ...parameters: any[]): any;
        apply(method: string, ...parameters: any[]): any;
        methods(IMeteorMethodsDictionary: any): any;
        status(): DDPStatus;
        reconnect(): void;
        disconnect(): void;
        onReconnect(): void;
    }

    function _allSubscriptionsReady(): boolean;

    type Status = 'connected' | 'connecting' | 'failed' | 'waiting' | 'offline';

    interface DDPStatus {
        connected: boolean;
        status: Status;
        retryCount: number;
        retryTime?: number;
        reason?: string;
    }

    function connect(url: string): DDPStatic;
}

declare module DDPCommon {
    interface MethodInvocationOptions {
        userId: string | null;
        setUserId?: (newUserId: string) => void;
        isSimulation: boolean;
        connection: Meteor.Connection;
        randomSeed: string;
    }

    interface MethodInvocation {
        new(options: MethodInvocationOptions): MethodInvocation;

        unblock(): void;

        setUserId(userId: string): void;

        userId: string | null;
        isSimulation: boolean;
        connection: Meteor.Connection;
    }
}
