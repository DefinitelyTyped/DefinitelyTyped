umami('custom_event');

umami.trackEvent('custom_event', { type: 'signup', userId: 123 });
umami.trackEvent('custom_event', { type: 'signup', userId: 123 }, 'https://example.com/');
umami.trackEvent(
    'custom_event',
    { type: 'signup', userId: 123 },
    'https://example.com/',
    '94db1cb1-74f4-4a40-ad6c-962362670409',
);

umami.trackView('https://example.com/');
umami.trackView('https://example.com/', 'https://example.com/test/');
umami.trackView('https://example.com/', 'https://example.com/test/', '94db1cb1-74f4-4a40-ad6c-962362670409');
