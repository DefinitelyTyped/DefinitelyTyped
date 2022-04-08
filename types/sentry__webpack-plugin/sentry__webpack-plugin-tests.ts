import SentryPlugin from '@sentry/webpack-plugin';

// tests
new SentryPlugin({ debug: true, include: '', ignoreFile: '', ignore: '', configFile: '' });
new SentryPlugin();
