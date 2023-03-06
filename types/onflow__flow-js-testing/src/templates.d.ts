import { AddressMap } from './account';

export function getTemplate(file: string, addressMap?: AddressMap, byAddress?: boolean): Promise<string>;

export function getContractCode(props: { name: string; addressMap?: AddressMap }): Promise<string>;

export function getTransactionCode(props: { name: string; addressMap?: AddressMap }): Promise<string>;

export function getScriptCode(props: { name: string; addressMap?: AddressMap }): Promise<string>;
