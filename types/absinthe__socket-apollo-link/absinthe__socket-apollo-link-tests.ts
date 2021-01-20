import { Socket } from 'phoenix';
import * as AbsintheSocket from '@absinthe/socket';
import { createAbsintheSocketLink, AbsintheSocketLink } from '@absinthe/socket-apollo-link';

function testAbsintheApolloLink(phoenixSocket: Socket): AbsintheSocketLink {
    const absintheSocket = AbsintheSocket.create(phoenixSocket);
    return createAbsintheSocketLink(
        absintheSocket,
        error => {
            // $ExpectType Error
            error;
        },
        start => {
            // $ExpectType Notifier<{}, {}>
            start;
        },
    );
}
