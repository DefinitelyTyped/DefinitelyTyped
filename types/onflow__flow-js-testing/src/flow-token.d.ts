import { Address } from './account';
import { TransactionResponse } from './interaction';

export function getFlowBalance(address: Address): Promise<string>;

export function mintFlow(recipient: Address, amount: string): Promise<TransactionResponse>;
