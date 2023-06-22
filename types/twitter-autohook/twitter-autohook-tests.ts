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

    // $ExpectType void
    await webhook.removeWebhooks();

    webhook.on('event', event => console.log('Something happened:', event));

    // $ExpectType void
    await webhook.start();

    // $ExpectType true
    await webhook.subscribe({ oauth_token: 'value', oauth_token_secret: 'value' });
})();
