import { ReaderFragment, ReaderRefetchMetadata, RefetchableIdentifierInfo } from "./ReaderNode";
import { ConcreteRequest } from "./RelayConcreteNode";

export default function getRefetchMetadata(
    fragmentNode: ReaderFragment,
    componentDisplayName: string,
): {
    fragmentRefPathInResponse: ReadonlyArray<string | number>;
    identifierInfo: RefetchableIdentifierInfo | null | undefined;
    refetchableRequest: ConcreteRequest;
    refetchMetadata: ReaderRefetchMetadata;
};
