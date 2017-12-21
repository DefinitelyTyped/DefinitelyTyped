import * as i18next from 'i18next';

i18next.init({
    lng: "en",
    debug: true,
    resources: {
        en: {
            translation: {
                key: "hello world"
            }
        }
    }
}, (err: any, t: i18next.TranslationFunction) => {
    // initialized and ready to go!
    const value: string = i18next.t('key');
});

i18next.init({ initImmediate: false });

i18next.init({
    lng: 'en',
    debug: true,
    resources: {
        en: {
            translation: {
                key: "hello world"
            }
        },
        de: {
            translation: {
                key: "hello welt"
            }
        }
    }
}, (err: any, t: i18next.TranslationFunction) => {
    // init set content
    updateContent();
});

i18next.init({
    ns: ['common', 'moduleA', 'moduleB'],
    defaultNS: 'moduleA'
}, (err: any, t: i18next.TranslationFunction) => {
    i18next.t('myKey'); // key in moduleA namespace (defined default)
    i18next.t('common:myKey'); // key in common namespace
});

i18next.loadNamespaces('anotherNamespace', (err: any, t: i18next.TranslationFunction) => { /* ... */ });

// fallback to one language
i18next.init({
    lng: 'en-GB'
}, () => {
    i18next.t('i18n'); // -> "Internationalisation"
    i18next.t('i18n_short'); // -> "i18n" (from en.json)

    // force loading en
    i18next.t('i18n', { lng: 'en' }); // -> "Internationalization"
});

// fallback to one language
i18next.init({
    fallbackLng: 'en'
});

// fallback ordered
i18next.init({
    fallbackLng: ['fr', 'en']
});

// fallback depending on user language
i18next.init({
    fallbackLng: {
        'de-CH': ['fr', 'it'],
        'zh-HANT': ['zh-HANS', 'en'],
        es: ['fr'],
        default: ['en']
    }
});

const updateContent = () => {
    const value: string = i18next.t('key');
};

const changeLng = (lng: string) => {
    i18next.changeLanguage(lng);
};

i18next.init({
    // files to load
    ns: ['app', 'common'],

    // default namespace (needs no prefix on calling t)
    defaultNS: 'app',

    // fallback, can be a string or an array of namespaces
    fallbackNS: 'common'
}, () => {
    i18next.t('title'); // -> "i18next"

    i18next.t('button.save'); // -> "save" (fallback from common)

    // without fallbackNS you would have to prefix namespace
    // to access keys in that namespace
    i18next.t('common:button.save'); // -> "save"
});

i18next.init({
    lng: 'de',

    // allow keys to be phrases having `:`, `.`
    nsSeparator: false,
    keySeparator: false,

    // do not load a fallback
    fallbackLng: false
});

const error404 = '404';
i18next.t([`error.${error404}`, 'error.unspecific']); // -> "The page was not found"

const error502 = '502';
i18next.t([`error.${error502}`, 'error.unspecific']); // -> "Something went wrong"

i18next.t('No one says a key can not be the fallback.');
// -> "Niemand sagt ein key kann nicht als Ersatz dienen."

i18next.t('This will be shown if the current loaded translations to not have this.');
// -> "This will be shown if the current loaded translations to not have this."

const languageChangedCallback = () => {
    updateContent();
};

i18next.on('languageChanged', languageChangedCallback);
i18next.off('languageChanged', languageChangedCallback);

i18next
    .init({
        fallbackLng: 'en',
        debug: true,
        ns: ['special', 'common'],
        defaultNS: 'special',
        backend: {
            // load from i18next-gitbook repo
            loadPath: 'https://raw.githubusercontent.com/i18next/i18next-gitbook/master/locales/{{lng}}/{{ns}}.json',
            crossDomain: true
        }
    }, (err: any, t: i18next.TranslationFunction) => {
        // init set content
        updateContent2();
    });

// just set some content and react to language changes
// could be optimized using vue-i18next, jquery-i18next, react-i18next, ...
const updateContent2 = () => {
    const value: string = i18next.t('title', { what: 'i18next' });
    const value2: string = i18next.t('common:button.save', { count: Math.floor(Math.random() * 2 + 1) });
    const value3 = `detected user language: "${i18next.language}"  --> loaded languages: "${i18next.languages.join(', ')}"`;
};

i18next.init({
    fallbackLng: 'en',
    ns: ['file1', 'file2'],
    defaultNS: 'file1',
    debug: true
}, (err: any, t: i18next.TranslationFunction) => {
    if (err) {
        console.log('something went wrong loading', err);
        return;
    }
    t('key'); // -> same as i18next.t
});

// with only callback
i18next.init((err: any, t: i18next.TranslationFunction) => {
    if (err) {
        console.log('something went wrong loading', err);
        return;
    }
    t('key'); // -> same as i18next.t
});

const v: string = i18next.t('my.key');
const a: boolean = i18next.exists('my.key');

// fix language to german
const de = i18next.getFixedT('de');
const z: string = de('myKey');

// or fix the namespace to anotherNamespace
const anotherNamespace = i18next.getFixedT(null, 'anotherNamespace');
const x: string = anotherNamespace('anotherNamespaceKey'); // no need to prefix ns i18n.t('anotherNamespace:anotherNamespaceKey');

i18next.changeLanguage('en', (err: any, t: i18next.TranslationFunction) => {
    if (err) {
        console.log('something went wrong loading', err);
        return;
    }
    t('key'); // -> same as i18next.t
});

i18next.loadNamespaces('myNamespace', (err: any, t: i18next.TranslationFunction) => { /* resources have been loaded */ });
i18next.loadNamespaces(['myNamespace1', 'myNamespace2'], (err: any, t: i18next.TranslationFunction) => { /* resources have been loaded */ });

i18next.loadLanguages('de', (err: any, t: i18next.TranslationFunction) => { /* resources have been loaded */ });
i18next.loadLanguages(['de', 'fr'], (err: any, t: i18next.TranslationFunction) => { /* resources have been loaded */ });

// reload all
i18next.reloadResources();

// reload languages
i18next.reloadResources(['de', 'fr']);

// reload namespaces for all languages
i18next.reloadResources(null, ['ns1', 'ns2']);

// reload namespaces in languages
i18next.reloadResources(['de', 'fr'], ['ns1', 'ns2']);

// for current language
i18next.dir();

// for another language
i18next.dir('en-US'); // -> "ltr";
i18next.dir('ar'); // -> "rtl";

// key = 'hello {{what}}'
i18next.t('key', { what: i18next.format('world', 'uppercase') }); // -> hello WORLD

const newInstance = i18next.createInstance({
    fallbackLng: 'en',
    ns: ['file1', 'file2'],
    defaultNS: 'file1',
    debug: true
}, (err: any, t: i18next.TranslationFunction) => {
    if (err) {
        console.log('something went wrong loading', err);
        return;
    }
    t('key'); // -> same as i18next.t
});

// is the same as
newInstance.init({
    fallbackLng: 'en',
    ns: ['file1', 'file2'],
    defaultNS: 'file1',
    debug: true
}, (err: any, t: i18next.TranslationFunction) => {
    if (err) {
        console.log('something went wrong loading', err);
        return;
    }
    t('key'); // -> same as i18next.t
});

const newInstance2 = i18next.cloneInstance({
    fallbackLng: 'en',
    ns: ['file1', 'file2'],
    defaultNS: 'file1',
    debug: true
}, (err: any, t: i18next.TranslationFunction) => {
    if (err) {
        console.log('something went wrong loading', err);
        return;
    }
    t('key'); // -> same as i18next.t
});

// is the same as
const newInstance3 = i18next.cloneInstance();
newInstance.init({
    fallbackLng: 'en',
    ns: ['file1', 'file2'],
    defaultNS: 'file1',
    debug: true
}, (err: any, t: i18next.TranslationFunction) => {
    if (err) {
        console.log('something went wrong loading', err);
        return;
    }
    t('key'); // -> same as i18next.t
});

i18next.on('initialized', options => { });
i18next.on('loaded', loaded => { });
i18next.on('failedLoading', (lng: string, ns: string, msg: string) => { });
i18next.on('missingKey', (lngs: string[], namespace: string, key: string, res: string) => { });
i18next.on('added', (lng: string, ns: string) => { });
i18next.on('removed', (lng: string, ns: string) => { });
i18next.on('languageChanged', (lng: string) => { });
i18next.on("customEvent", () => { });

i18next.getResource("en", "test", "key");
i18next.getResource("en", "test", "key", { keySeparator: "-" });

i18next.addResource("en", "test", "key", "value");
i18next.addResource("en", "test", "key", "value", { keySeparator: "-", silent: false });

i18next.addResources("en", "test", { key: "value" });

i18next.addResourceBundle('en', 'translations', {
    key: 'value',
}, true, true);

const has: boolean = i18next.hasResourceBundle("en", "test");

i18next.getResourceBundle("en", "test");

i18next.removeResourceBundle("en", "test");

i18next
    .init({
        resources: {
            en: {
                namespace1: {
                    key: 'hello from namespace 1'
                },
                namespace2: {
                    key: 'hello from namespace 2'
                }
            },
            de: {
                namespace1: {
                    key: 'hallo von namespace 1'
                },
                namespace2: {
                    key: 'hallo von namespace 2'
                }
            }
        }
    });

i18next.init();

i18next.addResourceBundle("en", 'namespace1', {
    key: 'hello from namespace 1'
});

i18next
    .init({
        backend: {
            // for all available options read the backend's repository readme file
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        }
    });

i18next.init({
    ns: ['common', 'moduleA'],
    defaultNS: 'moduleA'
});

i18next.t('key', { what: 'i18next', how: 'great' });

const author = {
    name: 'Jan',
    github: 'jamuhl'
};
i18next.t('key', { author });

i18next.t('keyEscaped', { myVar: '<img />' });
// -> "no danger &lt;img &#x2F;&gt;"

i18next.t('keyUnescaped', { myVar: '<img />' });
// -> "dangerous <img />"

i18next.t('keyEscaped', { myVar: '<img />', interpolation: { escapeValue: false } });
// -> "no danger <img />" (obviously could be dangerous)

i18next
    .init({
        lng: 'en',
        fallbackLng: 'en',

        resources: {
            en: {
                translation: {
                    key1: 'test',
                    interpolateKey: 'add {{insert}} {{up, uppercase}}',
                    interpolateKey2: '<strong>add</strong> {{insert}} {{up, uppercase}}'
                }
            }
        },

        interpolation: {
            escapeValue: false, // not needed for react!!
            formatSeparator: ',',
            format: (value: string, format: string, lng: string) => {
                if (format === 'uppercase') return value.toUpperCase();
                return value;
            }
        }
    });

i18next.t('key', { count: 0 }); // -> "items"
i18next.t('key', { count: 1 }); // -> "item"
i18next.t('key', { count: 5 }); // -> "items"
i18next.t('key', { count: 100 }); // -> "items"
i18next.t('keyWithCount', { count: 0 }); // -> "0 items"
i18next.t('keyWithCount', { count: 1 }); // -> "1 item"
i18next.t('keyWithCount', { count: 5 }); // -> "5 items"
i18next.t('keyWithCount', { count: 100 }); // -> "100 items"

i18next.t('key1_interval', { postProcess: 'interval', count: 1 }); // -> "one item"
i18next.t('key1_interval', { postProcess: 'interval', count: 4 }); // -> "a few items"
i18next.t('key1_interval', { postProcess: 'interval', count: 100 }); // -> "a lot of items"

// not matching into a range it will fallback to
// the regular plural form
i18next.t('key2_interval', { postProcess: 'interval', count: 1 }); // -> "one item"
i18next.t('key2_interval', { postProcess: 'interval', count: 4 }); // -> "a few items"
i18next.t('key2_interval', { postProcess: 'interval', count: 100 }); // -> "100 items"
i18next.t('friend', { context: 'male', count: 1 }); // -> "A boyfriend"
i18next.t('friend', { context: 'male', count: 1 }); // -> "A boyfriend"
i18next.t('friend', { context: 'female', count: 100 }); // -> "100 girlfriends"
i18next.t('friend', { context: 'female', count: 100 }); // -> "100 girlfriends"
i18next.t('tree', { returnObjects: true, something: 'gold' });
// -> { res: 'added gold' }

i18next.t('array', { returnObjects: true });
// -> ['a', 'b', 'c']
i18next.t('arrayJoin', { joinArrays: '+' });
// -> "line1+line2+line3"

i18next.t('arrayJoinWithInterpolation', { myVar: 'interpolate', joinArrays: ' ' });
// -> "you can interpolate"

i18next.t('arrayOfObjects.0.name');
// -> "tom"

type KeyList = "friend" | "tree";

interface CustomOptions {
    myVar: string;
}

i18next.t("friend");
i18next.t(["friend", "tree"]);
i18next.t("friend", { myVar: "someValue" });
i18next.t(["friend", "tree"], { myVar: "someValue" });
i18next.t("friend", { myVar: "someValue" });
i18next.t(["friend", "tree"], { myVar: "someValue" });

const t1: i18next.TranslationFunction = (key: string, options: i18next.TranslationOptions) => "";
const t2: i18next.TranslationFunction<{ value: string }> = (key: string, options: i18next.TranslationOptions) => ({ value: "asd" });
const t3: i18next.TranslationFunction<string, CustomOptions> = (key: string | string[], options: i18next.TranslationOptions<CustomOptions>) => "";
const t4: i18next.TranslationFunction<string, object, KeyList> = (key: KeyList | KeyList[], options: i18next.TranslationOptions) => "";

i18next.exists("friend");
i18next.exists(["friend", "tree"]);
i18next.exists("friend", { myVar: "someValue" });
i18next.exists(["friend", "tree"], { myVar: "someValue" });
i18next.exists("friend", { myVar: "someValue" });
i18next.exists(["friend", "tree"], { myVar: "someValue" });
