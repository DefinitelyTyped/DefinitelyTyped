import { deprecate, deprecateFunc } from '@ember/application/deprecations';

deprecate('this is no longer advised', false, {
    id: 'no-longer-advised',
    until: 'v4.0',
});
deprecate('this is no longer advised', false, {
    id: 'no-longer-advised',
    until: 'v4.0',
    url: 'https://emberjs.com',
});
// @ts-expect-error
deprecate('this is no longer advised', false);

// @ts-expect-error
deprecateFunc('this is no longer advised', () => {});
deprecateFunc('this is no longer advised', { id: 'no-longer-do-this', until: 'v4.0' }, () => {});
