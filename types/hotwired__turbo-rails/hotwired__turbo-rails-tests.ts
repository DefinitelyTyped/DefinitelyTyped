import { Turbo, cable } from '@hotwired/turbo-rails';

Turbo.setFormMode('optin');

// @ts-expect-error
Turbo.setFormMode('BAD VALUE');

cable.subscribeTo('channel', { received: handleReceived }).then(subscription => {
    subscription.unsubscribe();
});

function handleReceived(data: any) {
    console.log('received', data);
}
