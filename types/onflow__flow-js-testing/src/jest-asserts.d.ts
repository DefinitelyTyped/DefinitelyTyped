import { Interaction, TransactionResponse, ScriptResponse } from './interaction';

export function shallPass(ix: Interaction): Promise<TransactionResponse>;

export function shallRevert(ix: Interaction, message?: string | RegExp): Promise<TransactionResponse>;

export function shallResolve(ix: Interaction): Promise<ScriptResponse>;
