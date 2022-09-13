import { ShareAPIPolyfillOptions } from 'share-api-polyfill';

navigator.share({ url: 'https://example.com' }); // $ExpectType Promise<void>
navigator.share({ url: 'https://example.com', hashtags: 'example' }); // $ExpectType Promise<void>
navigator.share({ title: 'Example' }, { sms: false, language: 'en', pinterest: false }); // $ExpectType Promise<void>
const options: ShareAPIPolyfillOptions = { copy: false };
