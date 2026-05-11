import { Interaction, TransactionStatus } from "./interaction";

export function shallPass(ix: Interaction): Promise<[TransactionStatus, null]>;

export function shallRevert(
    ix: Interaction,
    message?: string | RegExp,
): Promise<[TransactionStatus | null, string | Error]>;

export function shallResolve(ix: Interaction): Promise<[any, null]>;
