import { Environment, MissingRequiredFields, RelayResolverErrors } from '../store/RelayStoreTypes';

export default function handlePotentialSnapshotErrors(
    environment: Environment,
    missingRequiredFields: MissingRequiredFields | null | undefined,
    relayResolverErrors: RelayResolverErrors,
): void;
