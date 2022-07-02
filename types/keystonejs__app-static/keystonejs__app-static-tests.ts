import { StaticApp } from '@keystonejs/app-static';

new StaticApp();
new StaticApp({});
new StaticApp({
    path: 'whatever',
    src: 'whatever',
    fallback: 'whatever',
});
