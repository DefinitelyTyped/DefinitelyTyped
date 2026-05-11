import * as Turbo from "@hotwired/turbo";
import { BaseMixin, ChannelNameWithParams, Consumer, Subscription } from "@rails/actioncable";

export { Turbo };

export namespace cable {
    function getConsumer(): Promise<Consumer>;
    function setConsumer(newConsumer: Consumer): Consumer;
    function createConsumer(): Promise<Consumer>;
    function subscribeTo<M extends BaseMixin = {}>(
        channel: string | ChannelNameWithParams,
        mixin?: M & ThisType<Subscription & M>,
    ): Promise<Subscription & M>;
}

declare class TurboCableStreamSourceElement extends HTMLElement {
    static readonly observedAttributes: string[];
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    dispatchMessageEvent(data: string): boolean;
    subscriptionConnected(): void;
    subscriptionDisconnected(): void;
    readonly channel: ChannelNameWithParams;
    subscription: Subscription | undefined;
}

declare global {
    interface HTMLElementTagNameMap {
        "turbo-cable-stream-source": TurboCableStreamSourceElement;
    }
}
