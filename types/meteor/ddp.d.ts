import { Meteor } from 'meteor/meteor';
declare module 'meteor/ddp' {
    namespace DDP {
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
            retryTime?: number | undefined;
            reason?: string | undefined;
        }

        function connect(url: string): DDPStatic;
    }

    namespace DDPCommon {
        interface MethodInvocationOptions {
            userId: string | null;
            setUserId?: ((newUserId: string) => void) | undefined;
            isSimulation: boolean;
            connection: Meteor.Connection;
            randomSeed: string;
        }

        /** The state for a single invocation of a method, referenced by this inside a method definition. */
        interface MethodInvocation {
            new (options: MethodInvocationOptions): MethodInvocation;
            /**
             * Call inside a method invocation.  Allow subsequent method from this client to begin running in a new fiber.
             */
            unblock(): void;
            /**
             * Set the logged in user.
             * @param userId The value that should be returned by `userId` on this connection.
             */
            setUserId(userId: string | null): void;
            /**
             * The id of the user that made this method call, or `null` if no user was logged in.
             */
            userId: string | null;
            /**
             * Access inside a method invocation.  Boolean value, true if this invocation is a stub.
             */
            isSimulation: boolean;
            /**
             * Access inside a method invocation. The [connection](#meteor_onconnection) that this method was received on. `null` if the method is not associated with a connection, eg. a server
             * initiated method call. Calls to methods made from a server method which was in turn initiated from the client share the same `connection`.
             */
            connection: Meteor.Connection;
        }
    }
}
