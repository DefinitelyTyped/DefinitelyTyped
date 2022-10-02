const renderParams: Turnstile.RenderParameters = {
    sitekey: '<YOUR_SITE_KEY>',
    action: '<YOUR_ACTION>',
    cData: '<YOUR_CUSTOMER_DATA>',
    callback: (token: string) => {},
    'expired-callback': () => {},
    'error-callback': () => {},
    theme: 'auto',
    tabindex: 5,
};

const minimalRenderParams: Turnstile.RenderParameters = {
    sitekey: '<YOUR_SITE_KEY>',
};

const themeAuto: Turnstile.Theme = 'auto';
const themeLight: Turnstile.Theme = 'light';
const themeDark: Turnstile.Theme = 'dark';

// $ExpectType string | undefined
turnstile.render('foo', renderParams);
// $ExpectType string | undefined
turnstile.render('foo', minimalRenderParams);
// $ExpectType string | undefined
turnstile.render(document.getElementById('foo') as HTMLElement, renderParams);
// @ts-expect-error
turnstile.render();
// @ts-expect-error
turnstile.render('foo');
// @ts-expect-error
turnstile.render('foo', {});

// getResponse takes a widget ID string and returns a string
// $ExpectType string
turnstile.getResponse('foo');

// reset takes a widget ID string
// $ExpectType void
turnstile.reset('foo');
