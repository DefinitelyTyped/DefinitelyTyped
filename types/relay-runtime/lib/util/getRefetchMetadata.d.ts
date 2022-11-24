import { ReaderFragment, ReaderRefetchMetadata } from './ReaderNode';
import { ConcreteRequest } from './RelayConcreteNode';

export default function getRefetchMetadata(
    fragmentNode: ReaderFragment,
    componentDisplayName: string,
): {
    fragmentRefPathInResponse: ReadonlyArray<string | number>;
    identifierField: string | null | undefined;
    refetchableRequest: ConcreteRequest;
    refetchMetadata: ReaderRefetchMetadata;
};
