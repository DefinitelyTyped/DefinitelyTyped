import { GraphQLResponse } from "../network/RelayNetworkTypes";
import { RelayObservable as Observable } from "../network/RelayObservable";
import { Environment, OperationDescriptor, RequestDescriptor } from "../store/RelayStoreTypes";
import { RequestIdentifier } from "../util/getRequestIdentifier";

export function fetchQuery(environment: Environment, operation: OperationDescriptor): Observable<GraphQLResponse>;

export function fetchQueryDeduped(
    environment: Environment,
    identifier: RequestIdentifier,
    fetchFn: () => Observable<GraphQLResponse>,
): Observable<GraphQLResponse>;

export function getPromiseForActiveRequest(environment: Environment, request: RequestDescriptor): Promise<void> | null;

export function getObservableForActiveRequest(
    environment: Environment,
    request: RequestDescriptor,
): Observable<void> | null;
