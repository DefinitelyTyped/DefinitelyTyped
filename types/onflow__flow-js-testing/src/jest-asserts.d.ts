import { Interaction, TransactionStatus } from './interaction';

export function shallPass(ix: Interaction): Promise<[TransactionStatus, null]>;

export function shallRevert(ix: Interaction, message?: string | RegExp): Promise<[null, string]>;

export function shallResolve(ix: Interaction): Promise<[any, null]>;
