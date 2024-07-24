import {
    Accordion,
    Button,
    CharacterCount,
    Checkboxes,
    type Config,
    type ConfigKey,
    createAll,
    ErrorSummary,
    ExitThisPage,
    Header,
    initAll,
    NotificationBanner,
    PasswordInput,
    Radios,
    SkipLink,
    Tabs,
} from "govuk-frontend";

const $module = document.createElement("div");

new Accordion($module);
new Accordion($module, Accordion.defaults);

new Button($module);
new Button($module, Button.defaults);

new CharacterCount($module);
new CharacterCount($module, CharacterCount.defaults);

new Checkboxes($module);
new Header($module);

new ErrorSummary($module);
new ErrorSummary($module, ErrorSummary.defaults);

new ExitThisPage($module);
new ExitThisPage($module, ExitThisPage.defaults);

new NotificationBanner($module);
new NotificationBanner($module, NotificationBanner.defaults);

new Radios($module);
new SkipLink($module);
new Tabs($module);

createAll(Accordion);
createAll(Accordion, Accordion.defaults);
createAll(Accordion, Accordion.defaults, document.body);

createAll(Button);
createAll(Button, Button.defaults);
createAll(Button, Button.defaults, document.body);

createAll(CharacterCount);
createAll(CharacterCount, CharacterCount.defaults);
createAll(CharacterCount, CharacterCount.defaults, document.body);

createAll(Checkboxes);
createAll(Checkboxes, undefined);
createAll(Checkboxes, undefined, document.body);

createAll(Header);
createAll(Header, undefined);
createAll(Header, undefined, document.body);

createAll(ErrorSummary);
createAll(ErrorSummary, ErrorSummary.defaults);
createAll(ErrorSummary, ErrorSummary.defaults, document.body);

createAll(ExitThisPage);
createAll(ExitThisPage, ExitThisPage.defaults);
createAll(ExitThisPage, ExitThisPage.defaults, document.body);

createAll(NotificationBanner);
createAll(NotificationBanner, NotificationBanner.defaults);
createAll(NotificationBanner, NotificationBanner.defaults, document.body);

createAll(PasswordInput);
createAll(PasswordInput, PasswordInput.defaults);
createAll(PasswordInput, PasswordInput.defaults, document.body);

createAll(Radios);
createAll(Radios, undefined);
createAll(Radios, undefined, document.body);

createAll(SkipLink);
createAll(SkipLink, undefined);
createAll(SkipLink, undefined, document.body);

createAll(Tabs);
createAll(Tabs, undefined);
createAll(Tabs, undefined, document.body);

const config: Config = {
    accordion: Accordion.defaults,
    button: Button.defaults,
    characterCount: CharacterCount.defaults,
    errorSummary: ErrorSummary.defaults,
    exitThisPage: ExitThisPage.defaults,
    notificationBanner: NotificationBanner.defaults,
    passwordInput: PasswordInput.defaults,
};

const accordionConfig: Config[ConfigKey] = config.accordion;
const buttonConfig: Config[ConfigKey] = config.button;
const characterCountConfig: Config[ConfigKey] = config.characterCount;
const errorSummaryConfig: Config[ConfigKey] = config.errorSummary;
const exitThisPageConfig: Config[ConfigKey] = config.exitThisPage;
const notificationBannerConfig: Config[ConfigKey] = config.notificationBanner;
const passwordInputConfig: Config[ConfigKey] = config.passwordInput;

initAll();
initAll({
    accordion: accordionConfig,
    button: buttonConfig,
    characterCount: characterCountConfig,
    errorSummary: errorSummaryConfig,
    exitThisPage: exitThisPageConfig,
    notificationBanner: notificationBannerConfig,
    passwordInput: passwordInputConfig,
});
initAll(config);
