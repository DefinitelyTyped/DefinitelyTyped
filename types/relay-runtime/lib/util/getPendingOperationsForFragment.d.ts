import type { Environment, RequestDescriptor } from '../store/RelayStoreTypes';
import type { ReaderFragment } from './ReaderNode';

export default function getPendingOperationsForFragment(
    environment: Environment,
    fragmentNode: ReaderFragment,
    fragmentOwner: RequestDescriptor,
): {
    promise: Promise<void>;
    pendingOperations: ReadonlyArray<RequestDescriptor>;
} | null;
