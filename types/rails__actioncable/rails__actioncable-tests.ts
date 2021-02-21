import { createConsumer, logger } from '@rails/actioncable';

logger.enabled = true;

// $ExpectType Consumer
const consumer = createConsumer();
// $ExpectType void
logger.log('consumer created', consumer);

// $ExpectType Consumer
createConsumer('https://ws.example.com/cable');
// $ExpectType Consumer
createConsumer(() => 'https://ws.example.com/cable');

// $ExpectType Subscription
consumer.subscriptions.create({ channel: 'ChatChannel', room: 'Best Room' });
// $ExpectType Subscription
consumer.subscriptions.create('AppearanceChannel');

// $ExpectType Subscription
const chatChannel = consumer.subscriptions.create(
    { channel: 'ChatChannel', room: 'Best room' },
    {
        received(_data) {
            // Do something with the data
        },
    },
);

// $ExpectType boolean
chatChannel.send({ sent_by: 'Paul', body: 'This is a cool chat app.' });
// $ExpectError
chatChannel.perform({ sent_by: 'Paul', body: 'This is a cool chat app.' });
// $ExpectType boolean
chatChannel.perform('message_sent', { sent_by: 'Paul', body: 'This is a cool chat app.' });
// $ExpectType boolean
chatChannel.perform('message_sent');
// $ExpectType boolean
chatChannel.send({ action: 'message_sent', sent_by: 'Paul', body: 'This is a cool chat app.' });

// $ExpectType void
chatChannel.unsubscribe();

// $ExpectType Subscription
consumer.subscriptions.create('WebNotificationsChannel', {
    received(_data) {
        // Show a notification message
    },
});
