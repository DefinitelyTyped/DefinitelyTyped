import browserUpdate = require('browser-update');
import browserUpdateExplicit = require('browser-update/update.npm.full');
import browserUpdateMinimal = require('browser-update/update.npm');

// test type exports
type Options = browserUpdate.Options;
type DetectedBrowser = browserUpdate.DetectedBrowser;
type DetectedBrowsers = browserUpdate.DetectedBrowsers;
type BrowserWithLanguageTextOptions = browserUpdate.BrowserWithLanguageTextOptions;
type RequiredBrowsers = browserUpdate.RequiredBrowsers;
type TextConfig = browserUpdate.TextConfig;
type ParsedOptions = browserUpdate.ParsedOptions;

browserUpdate(); // $ExpectType void
browserUpdate({});
browserUpdate({}, true);
browserUpdate({ required: { e: 1 } });
browserUpdate({ required: { e: '1' } });
browserUpdate({ required: { i: 1 } });
browserUpdate({ required: { i: '1' } });
browserUpdate({ required: { c: 1 } });
browserUpdate({ required: { c: '1' } });
browserUpdate({ required: { f: 1 } });
browserUpdate({ required: { f: '1' } });
browserUpdate({ required: { o: 1 } });
browserUpdate({ required: { o: '1' } });
browserUpdate({ required: { o_a: 1 } });
browserUpdate({ required: { o_a: '1' } });
browserUpdate({ required: { s: 1 } });
browserUpdate({ required: { s: '1' } });
browserUpdate({ required: { y: 1 } });
browserUpdate({ required: { y: '1' } });
browserUpdate({ required: { v: 1 } });
browserUpdate({ required: { v: '1' } });
browserUpdate({ required: { uc: 1 } });
browserUpdate({ required: { uc: '1' } });
browserUpdate({ required: { ios: 1 } });
browserUpdate({ required: { ios: '1' } });
browserUpdate({ required: { a: 1 } });
browserUpdate({ required: { a: '1' } });
browserUpdate({ required: { samsung: 1 } });
browserUpdate({ required: { samsung: '1' } });
browserUpdate({ insecure: true });
browserUpdate({ unsupported: true });
browserUpdate({ notify_esr: true });
browserUpdate({ mobile: false });
browserUpdate({ reminder: 1 });
browserUpdate({ reminderClosed: 1 });
browserUpdate({ l: 'foo' });
browserUpdate({ l: false });
browserUpdate({ test: true });
browserUpdate({ dont_show_debuginfo: true });
browserUpdate({ newwindow: false });
browserUpdate({ url: 'http' });
browserUpdate({ url_permanent_hide: 'http' });
browserUpdate({ noclose: true });
browserUpdate({ nomessage: true });
browserUpdate({ no_permanent_hide: true });
browserUpdate({ jsshowurl: 'http' });
browserUpdate({ domain: 'http' });
browserUpdate({ pageurl: 'http' });
browserUpdate({ container: document.createElement('div') });
browserUpdate({ api: 1 });
browserUpdate({
    onshow: options => {
        options; // $ExpectType ParsedOptions
        options.text; // $ExpectType string | TextConfig | undefined
        options.domain; // $ExpectType string
        options.required; // $ExpectType RequiredBrowsers
        options.reminder; // $ExpectType number
        options.reminderClosed; // $ExpectType number
        options.onshow; // $ExpectType (options: ParsedOptions) => void
        options.onclick; // $ExpectType (options: ParsedOptions) => void
        options.onclose; // $ExpectType (options: ParsedOptions) => void
        options.pageurl; // $ExpectType string
        options.newwindow; // $ExpectType boolean
        options.test; // $ExpectType boolean
        options.ignorecookie; // $ExpectType boolean
        options.llfull; // $ExpectType string
        options.ll; // $ExpectType string
        options.apiver; // $ExpectType number
        options.jsv; // $ExpectType string
        options.reasons; // $ExpectType ("insecure" | "below required" | "no vendor support")[]
        // $ExpectType (`is other browser:${string}` | `is embedded browser:${string}` | "Extended support (ESR)" | "do not notify mobile" | "is latest version of the browser" | "no device update")[]
        options.hide_reasons;
        options.is_below_required; // $ExpectType boolean
        options.notified; // $ExpectType boolean
        options.already_shown; // $ExpectType boolean
        options.setCookie; // $ExpectType (hours: number) => void
        options.div; // $ExpectType HTMLDivElement | undefined
        options.addmargin; // $ExpectType boolean | undefined
        options.bodymt; // $ExpectType string | undefined
    },
});
browserUpdate({
    onclick: options => {
        options; // $ExpectType ParsedOptions
    },
});
browserUpdate({
    onclose: options => {
        options; // $ExpectType ParsedOptions
    },
});
browserUpdate({ ignorecookie: true });
browserUpdate({ override_ua: 'foo' });
browserUpdate({ style: 'top' });
browserUpdate({ style: 'corner' });
browserUpdate({ style: 'bottom' });
// @ts-expect-error
browserUpdate({ style: 'foo' });
browserUpdate({ shift_page_down: true });

browserUpdate({ text: '' });
browserUpdate({ text: { msg: 'foo' } });
browserUpdate({ text: { msgmore: 'foo' } });
browserUpdate({ text: { bupdate: 'foo' } });
browserUpdate({ text: { bignore: 'foo' } });
browserUpdate({ text: { remind: 'foo' } });
browserUpdate({ text: { bnever: 'foo' } });
browserUpdate({ text_foo: '' });
browserUpdate({ text_foo: { msg: 'foo' } });
browserUpdate({ text_foo: { msgmore: 'foo' } });
browserUpdate({ text_foo: { bupdate: 'foo' } });
browserUpdate({ text_foo: { bignore: 'foo' } });
browserUpdate({ text_foo: { remind: 'foo' } });
browserUpdate({ text_foo: { bnever: 'foo' } });
browserUpdate({ text_in_foo: '' });
browserUpdate({ text_in_foo: { msg: 'foo' } });
browserUpdate({ text_in_foo: { msgmore: 'foo' } });
browserUpdate({ text_in_foo: { bupdate: 'foo' } });
browserUpdate({ text_in_foo: { bignore: 'foo' } });
browserUpdate({ text_in_foo: { remind: 'foo' } });
browserUpdate({ text_in_foo: { bnever: 'foo' } });
browserUpdate({ text_for_c: '' });
browserUpdate({ text_for_c: { msg: 'foo' } });
browserUpdate({ text_for_c: { msgmore: 'foo' } });
browserUpdate({ text_for_c: { bupdate: 'foo' } });
browserUpdate({ text_for_c: { bignore: 'foo' } });
browserUpdate({ text_for_c: { remind: 'foo' } });
browserUpdate({ text_for_c: { bnever: 'foo' } });
browserUpdate({ text_for_c_in_foo: '' });
browserUpdate({ text_for_c_in_foo: { msg: 'foo' } });
browserUpdate({ text_for_c_in_foo: { msgmore: 'foo' } });
browserUpdate({ text_for_c_in_foo: { bupdate: 'foo' } });
browserUpdate({ text_for_c_in_foo: { bignore: 'foo' } });
browserUpdate({ text_for_c_in_foo: { remind: 'foo' } });
browserUpdate({ text_for_c_in_foo: { bnever: 'foo' } });

window.$bu_getBrowser(); // $ExpectType DetectedBrowsers
window.$bu_getBrowser('foo'); // $ExpectType DetectedBrowsers
window.$buoop; // $ExpectType Options | undefined
window.$buo(); // $ExpectType void
window.$buo(window.$buoop); // $ExpectType void
window.$buo(window.$buoop, true); // $ExpectType void
