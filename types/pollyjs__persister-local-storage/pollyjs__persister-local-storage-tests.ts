import LocalStoragePersister from '@pollyjs/persister-local-storage';
import { Polly } from '@pollyjs/core';

Polly.register(LocalStoragePersister);

new Polly('<recording>', {
    persister: LocalStoragePersister,
});
