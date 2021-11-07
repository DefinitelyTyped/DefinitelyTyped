const describeViewports = (() => {}) as typeof Terra.describeViewports;
describeViewports('no form factors', [], () => {});
describeViewports('some form factors', ['tiny', 'large', 'enormous'], () => {});

const describeTests = (() => {}) as typeof Terra.describeTests;
describeTests('no options', undefined, () => {});
describeTests('empty options', {}, () => {});
describeTests(
    'filled options',
    {
        locales: ['en', 'es'],
        formFactors: ['tiny', 'enormous'],
        themes: ['terra-default-theme', 'clinical-lowlight-theme'],
    },
    () => {},
);

const hideInputCaret = (() => {}) as typeof Terra.hideInputCaret;
hideInputCaret('some selector');

const setApplicationLocale = (() => {}) as typeof Terra.setApplicationLocale;
setApplicationLocale('en');

const viewports = (() => []) as typeof Terra.viewports;
viewports('tiny').map(dimensions => dimensions as { height: number; width: number; name: 'tiny' });
viewports();
viewports('small');
viewports('medium', 'large');

const validatesAccessibility = (() => {}) as typeof Terra.validates.accessibility;
validatesAccessibility();
validatesAccessibility({});
validatesAccessibility({ rules: { 'some-rule': { enabled: false } } });

const validatesElement = (() => {}) as typeof Terra.validates.element;
validatesElement('no options');
validatesElement('empty options', {});
validatesElement('filled options', {
    rules: { 'some-rule': { enabled: false } },
    mismatchTolerance: 1,
    selector: '#root',
});

const validatesScreenshot = (() => {}) as typeof Terra.validates.screenshot;
validatesScreenshot('no options');
validatesScreenshot('empty options', {});
validatesScreenshot('filled options', { mismatchTolerance: 1, selector: '#root' });
