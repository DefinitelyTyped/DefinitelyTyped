navigator.share({ url: 'https://example.com' }); // $ExpectType Promise<void>
navigator.share({ url: 'https://example.com', hashtags: 'example' }); // $ExpectType Promise<void>
navigator.share({ title: 'Example' }, { sms: false, language: 'en' }); // $ExpectType Promise<void>
