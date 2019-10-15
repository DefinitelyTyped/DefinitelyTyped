import { RequestDescriptor, MutableRecordSource, NormalizationSelector, RelayResponsePayload } from './RelayStoreTypes';
import { PayloadData } from '../network/RelayNetworkTypes';

export type GetDataID = (fieldValue: { [key: string]: any }, typeName: string) => any;

export interface NormalizationOptions {
    getDataID: GetDataID;
    path?: ReadonlyArray<string>;
    request: RequestDescriptor;
}

/**
 * Normalizes the results of a query and standard GraphQL response, writing the
 * normalized records/fields into the given MutableRecordSource.
 */
export function normalize(
    recordSource: MutableRecordSource,
    selector: NormalizationSelector,
    response: PayloadData,
    options: NormalizationOptions,
): RelayResponsePayload;
