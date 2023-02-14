import { Address, AddressMap } from './account';
import { TransactionResponse } from './interaction';

export function deployContractByName(props: {
    name: string;
    to?: Address;
    addressMap?: AddressMap;
    args?: any[];
    update?: boolean;
}): Promise<TransactionResponse>;

export function deployContract(props: {
    name: string;
    code: string;
    to?: Address;
    addressMap?: AddressMap;
    args?: any[];
    update?: boolean;
}): Promise<TransactionResponse>;
