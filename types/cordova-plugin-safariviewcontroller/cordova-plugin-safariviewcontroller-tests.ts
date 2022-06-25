// test type exports
type SVCSO = SafariViewControllerShowOptions;
type SVCSR = SafariViewControllerShowResult;
type SVCHPR = SafariViewControllerHandlerPackagesResult;
type SVC = SafariViewController;

// $ExpectType void
SafariViewController.isAvailable(isAvailable => {
    isAvailable; // $ExpectType boolean
});
SafariViewController.show({ url: 'foo' }); // $ExpectType void
SafariViewController.show({ url: 'foo', hidden: true }); // $ExpectType void
SafariViewController.show({ url: 'foo', animated: false }); // $ExpectType void
SafariViewController.show({ url: 'foo', transition: 'curl' }); // $ExpectType void
SafariViewController.show({ url: 'foo', transition: 'flip' }); // $ExpectType void
SafariViewController.show({ url: 'foo', transition: 'fade' }); // $ExpectType void
SafariViewController.show({ url: 'foo', transition: 'slide' }); // $ExpectType void
// @ts-expect-error
SafariViewController.show({ url: 'foo', transition: 'foo' });
SafariViewController.show({ url: 'foo', enterReaderModeIfAvailable: true }); // $ExpectType void
SafariViewController.show({ url: 'foo', tintColor: '#ffffff' }); // $ExpectType void
SafariViewController.show({ url: 'foo', barColor: '#0000ff' }); // $ExpectType void
SafariViewController.show({ url: 'foo', controlTintColor: '#ffffff' }); // $ExpectType void
SafariViewController.show({ url: 'foo', toolbarColor: '#ffffff' }); // $ExpectType void
SafariViewController.show({ url: 'foo', showDefaultShareMenuItem: true }); // $ExpectType void
// $ExpectType void
SafariViewController.show(
    { url: 'foo' },
    res => {
        res; // $ExpectType SafariViewControllerShowResult
        res.event; // $ExpectType "opened" | "loaded" | "closed" || "loaded" | "closed" | "opened"
    },
    err => {
        err; // $ExpectType unknown
    },
);
// $ExpectType void
SafariViewController.hide();
// $ExpectType void
SafariViewController.hide(
    () => {},
    err => {
        err; // $ExpectType unknown
    },
);
// $ExpectType void
SafariViewController.getViewHandlerPackages(packages => {
    packages; // $ExpectType SafariViewControllerHandlerPackagesResult
    packages.customTabsImplementations; // $ExpectType string[]
    packages.defaultHandler; // $ExpectType string | null
});
// $ExpectType void
SafariViewController.getViewHandlerPackages(
    packages => {
        packages; // $ExpectType SafariViewControllerHandlerPackagesResult
        packages.customTabsImplementations; // $ExpectType string[]
        packages.defaultHandler; // $ExpectType string | null
    },
    err => {
        err; // $ExpectType unknown
    },
);
// $ExpectType void
SafariViewController.useCustomTabsImplementation('foo');
// $ExpectType void
SafariViewController.useCustomTabsImplementation(
    'foo',
    res => {
        res; // $ExpectType true
    },
    err => {
        err; // $ExpectType unknown
    },
);
// $ExpectType void
SafariViewController.connectToService();
// $ExpectType void
SafariViewController.connectToService(
    res => {
        res; // $ExpectType true
    },
    err => {
        err; // $ExpectType unknown
    },
);
// $ExpectType void
SafariViewController.warmUp();
// $ExpectType void
SafariViewController.warmUp(
    res => {
        res; // $ExpectType true
    },
    err => {
        err; // $ExpectType unknown
    },
);
// $ExpectType void
SafariViewController.mayLaunchUrl('foo');
// $ExpectType void
SafariViewController.mayLaunchUrl(
    'foo',
    res => {
        res; // $ExpectType true
    },
    err => {
        err; // $ExpectType unknown
    },
);
