import RESTPersister from '@pollyjs/persister-rest';
import { Polly } from '@pollyjs/core';

Polly.register(RESTPersister);

new Polly('<recording>', {
    persister: RESTPersister,
});
