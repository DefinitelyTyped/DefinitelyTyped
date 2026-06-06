import * as React from "react";

export namespace Subscriber {
    interface DefaultProps {
        quiet: boolean;
    }
    interface Props<T> extends Partial<DefaultProps> {
        channel: string;
        children?: ((state: T) => React.ReactNode) | undefined;
    }
}

export namespace Broadcast {
    interface DefaultProps<T> {
        compareValues: (prevValue: T, nextValue: T) => boolean;
    }
    interface Props<T> extends Partial<DefaultProps<T>> {
        channel: string;
        children: React.ReactNode;
        value: T;
    }
}

export class Broadcast<T> extends React.Component<Broadcast.Props<T>, any> {}
export class Subscriber<T> extends React.Component<Subscriber.Props<T>, any> {}
