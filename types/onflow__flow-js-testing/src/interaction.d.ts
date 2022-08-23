import { Address, AddressMap, SignerInfo } from './account';
import { CadenceTransformer } from './transformers';

export type Interaction = Promise<any> | (() => Promise<any>);

export type TransactionProps =
    | {
          name: string;
          code?: string;
          args?: any[];
          signers: Address[] | SignerInfo[];
          addressMap?: AddressMap;
      }
    | {
          name?: string;
          code: string;
          args?: any[];
          signers: Address[] | SignerInfo[];
          addressMap?: AddressMap;
      };

export type ScriptProps =
    | {
          name: string;
          code?: string;
          args?: any[];
          transformers?: CadenceTransformer[];
      }
    | {
          name?: string;
          code: string;
          args?: any[];
          transformers?: CadenceTransformer[];
      };

export interface TransactionEvent {
    type: string;
    transactionId: string;
    transactionIndex: number;
    eventIndex: number;
    data: any;
}

export interface TransactionStatus {
    blockId: string;
    status: number;
    statusString: string;
    statusCode: number;
    errorMessage: string;
    events: TransactionEvent[];
}

export type TransactionResponse = [TransactionStatus | null, Error | null];

export type ScriptResponse = [any, Error | null];

export function sendTransaction(props: TransactionProps): Promise<TransactionResponse>;

export function sendTransaction(
    name: string,
    signers: Address[] | SignerInfo[],
    args?: any[],
): Promise<TransactionResponse>;

export function executeScript(props: ScriptProps): Promise<ScriptResponse>;

export function executeScript(name: string, args?: any[]): Promise<ScriptResponse>;
