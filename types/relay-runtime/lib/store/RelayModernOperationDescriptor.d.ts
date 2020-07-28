import { ConcreteRequest } from '../util/RelayConcreteNode';
import { Variables } from '../util/RelayRuntimeTypes';
import { OperationDescriptor, RequestDescriptor } from './RelayStoreTypes';
/**
 * Creates an instance of the `OperationDescriptor` type defined in
 * `RelayStoreTypes` given an operation and some variables. The input variables
 * are filtered to exclude variables that do not match defined arguments on the
 * operation, and default values are populated for null values.
 */
export function createOperationDescriptor(request: ConcreteRequest, variables: Variables): OperationDescriptor;

export function createRequestDescriptor(request: ConcreteRequest, variables: Variables): RequestDescriptor;
