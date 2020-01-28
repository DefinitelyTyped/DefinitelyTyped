import runtime from 'serviceworker-webpack-plugin/lib/runtime';

runtime.register().then(registration => {
    registration.pushManager;
});

runtime.register({ scope: '' }).then(registration => {
    registration.pushManager;
});
