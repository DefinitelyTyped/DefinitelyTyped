declare namespace ActionCable {
    interface Channel {
        unsubscribe(): void;
        perform(action: string, data: {}): void;
        send(data: any): boolean;
    }

    interface Subscriptions {
        create<T extends CreateMixin>(
            channel: string | ChannelNameWithParams,
            obj?: T & ThisType<Channel>,
        ): Channel & T;
    }

    interface Cable {
        subscriptions: Subscriptions;
        send(data: any): void;
        connect(): void;
        disconnect(): void;
        ensureActiveConnection(): void;
    }

    interface CreateMixin {
        connected?(): void;
        disconnected?(): void;
        received?(obj: any): void;
        [key: string]: any;
    }

    interface ChannelNameWithParams {
        channel: string;
        [key: string]: any;
    }

    function createConsumer(): Cable;
    function createConsumer(url: string): Cable;
}

declare interface AppInterface {
    cable?: ActionCable.Cable | undefined;
    network?: ActionCable.Channel | undefined;
}

declare var App: AppInterface;

declare module "actioncable" {
    export = ActionCable;
}
