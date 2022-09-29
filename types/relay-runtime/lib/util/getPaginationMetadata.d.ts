import { ReaderFragment, ReaderPaginationMetadata } from './ReaderNode';
import { ConcreteRequest } from './RelayConcreteNode';

export default function getPaginationMetadata(
    fragmentNode: ReaderFragment,
    componentDisplayName: string,
): {
    connectionPathInFragmentData: ReadonlyArray<string | number>;
    identifierField: string | null | undefined;
    paginationRequest: ConcreteRequest;
    paginationMetadata: ReaderPaginationMetadata;
    stream: boolean;
};
