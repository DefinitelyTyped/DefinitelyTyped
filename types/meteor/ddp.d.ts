

declare module DDP {
    interface DDPStatic {
        subscribe(name: string, ...rest: any[]): Meteor.SubscriptionHandle;
        call(method: string, ...parameters: any[]): void;
        apply(method: string, ...parameters: any[]): void;
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
    interface MethodInvocation {
        new (options: {}): MethodInvocation;

        unblock(): void;

        setUserId(userId: number): void;
    }
}

declare module "meteor/ddp" {
    module DDP {
        interface DDPStatic {
            subscribe(name: string, ...rest: any[]): Meteor.SubscriptionHandle;
            call(method: string, ...parameters: any[]): void;
            apply(method: string, ...parameters: any[]): void;
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

    module DDPCommon {
        interface MethodInvocation {
            new (options: {}): MethodInvocation;

            unblock(): void;

            setUserId(userId: number): void;
        }
    }
}
