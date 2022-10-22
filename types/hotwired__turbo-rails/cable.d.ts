import type { Consumer, Mixin, ChannelNameWithParams } from '@rails/actioncable';
export function getConsumer(): Promise<Consumer>;
export function setConsumer(newConsumer: Consumer): Consumer;
export function createConsumer(): Promise<Consumer>;
export function subscribeTo<M>(
    channel: string | ChannelNameWithParams,
    mixin?: Mixin & M,
): Promise<import('@rails/actioncable').Subscription<Consumer> & Mixin & M>;
