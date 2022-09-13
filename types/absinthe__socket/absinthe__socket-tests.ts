import { Socket } from 'phoenix';
import * as withAbsintheSocket from '@absinthe/socket';

const operation = `
  subscription userSubscription($userId: ID!) {
    user(userId: $userId) {
      id
      name
    }
  }
`;

function test_absinthe_socket() {
    const queryVariables = { userId: 10 };
    const phoenixSocket = new Socket('/ws', { params: { userToken: '123' } });
    const absintheSocket = withAbsintheSocket.create(phoenixSocket);

    const notifier = withAbsintheSocket.send(absintheSocket, {
        operation,
        variables: queryVariables,
    });

    const observer = withAbsintheSocket.toObservable(absintheSocket, notifier, {
        onError: () => {},
        onStart: () => {},
        unsubscribe: (absintheSocket, notifier, observer) => {},
    });

    withAbsintheSocket.cancel(absintheSocket, notifier);
    const updatedNotifier = withAbsintheSocket.observe(absintheSocket, notifier, {
        onAbort: (error: Error) => {},
        onError: (error: Error) => {},
        onStart: notifier => {},
        onResult: result => {},
    });
    withAbsintheSocket.unobserve(absintheSocket, notifier, observer);
    withAbsintheSocket.unobserveOrCancel(absintheSocket, notifier, observer);
}
