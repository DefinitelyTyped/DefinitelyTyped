import { Autohook } from 'twitter-autohook';

(async ƛ => {
    // $ExpectType Autohook
    const webhook = new Autohook({
        token: 'value',
        token_secret: 'value',
        consumer_key: 'value',
        consumer_secret: 'value',
        ngrok_secret: 'value',
        env: 'env',
        port: 1337,
    });

    // Removes existing webhooks
    // $ExpectType void
    await webhook.removeWebhooks();

    // Listens to incoming activity
    webhook.on('event', event => console.log('Something happened:', event));

    // Starts a server and adds a new webhook
    // $ExpectType void
    await webhook.start();

    // Subscribes to a user's activity
    // $ExpectType true
    await webhook.subscribe({ oauth_token: 'value', oauth_token_secret: 'value' });
})();
