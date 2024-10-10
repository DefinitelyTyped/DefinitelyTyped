import { type Config, type ConfigKey } from "govuk-frontend";
import GOVUKFrontend = require("govuk-frontend");

const {
    Accordion,
    Button,
    CharacterCount,
    Checkboxes,
    Component,
    createAll,
    ErrorSummary,
    ExitThisPage,
    Header,
    isSupported,
    initAll,
    NotificationBanner,
    PasswordInput,
    Radios,
    ServiceNavigation,
    SkipLink,
    Tabs,
} = GOVUKFrontend;

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
new ServiceNavigation($module);
new SkipLink($module);
new Tabs($module);

class MyComponent1 extends Component {
    static moduleName = "MyComponent1";
}

class MyComponent2 extends Component<HTMLVideoElement> {
    config: MyComponentConfig;

    constructor($root: Element | null, config?: MyComponentConfig) {
        super($root);

        if (this.$root instanceof HTMLVideoElement) {
            this.config = config ?? MyComponent2.defaults;
        }
    }

    static moduleName = "MyComponent2";

    static defaults: MyComponentConfig = {
        hasConfig: true,
    };
}

interface MyComponentConfig {
    hasConfig: boolean;
}

new MyComponent1($module);
new MyComponent2($module);
new MyComponent2($module, MyComponent2.defaults);

MyComponent1.checkSupport();
MyComponent2.checkSupport();

isSupported();

createAll(Accordion);
createAll(Accordion, Accordion.defaults);
createAll(Accordion, Accordion.defaults, document.body);
createAll(Accordion, Accordion.defaults, console.error);
createAll(Accordion, Accordion.defaults, {
    scope: document.body,
    onError: console.error,
});

createAll(Button);
createAll(Button, Button.defaults);
createAll(Button, Button.defaults, document.body);
createAll(Button, Button.defaults, console.error);
createAll(Button, Button.defaults, {
    scope: document.body,
    onError: console.error,
});

createAll(CharacterCount);
createAll(CharacterCount, CharacterCount.defaults);
createAll(CharacterCount, CharacterCount.defaults, document.body);
createAll(CharacterCount, CharacterCount.defaults, console.error);
createAll(CharacterCount, CharacterCount.defaults, {
    scope: document.body,
    onError: console.error,
});

createAll(Checkboxes);
createAll(Checkboxes, undefined);
createAll(Checkboxes, undefined, document.body);
createAll(Checkboxes, undefined, console.error);
createAll(Checkboxes, undefined, {
    scope: document.body,
    onError: console.error,
});

createAll(Header);
createAll(Header, undefined);
createAll(Header, undefined, document.body);
createAll(Header, undefined, console.error);
createAll(Header, undefined, {
    scope: document.body,
    onError: console.error,
});

createAll(ErrorSummary);
createAll(ErrorSummary, ErrorSummary.defaults);
createAll(ErrorSummary, ErrorSummary.defaults, document.body);
createAll(ErrorSummary, ErrorSummary.defaults, console.error);
createAll(ErrorSummary, undefined, {
    scope: document.body,
    onError: console.error,
});

createAll(ExitThisPage);
createAll(ExitThisPage, ExitThisPage.defaults);
createAll(ExitThisPage, ExitThisPage.defaults, document.body);
createAll(ExitThisPage, ExitThisPage.defaults, console.error);
createAll(ExitThisPage, undefined, {
    scope: document.body,
    onError: console.error,
});

createAll(NotificationBanner);
createAll(NotificationBanner, NotificationBanner.defaults);
createAll(NotificationBanner, NotificationBanner.defaults, document.body);
createAll(NotificationBanner, NotificationBanner.defaults, console.error);
createAll(NotificationBanner, undefined, {
    scope: document.body,
    onError: console.error,
});

createAll(PasswordInput);
createAll(PasswordInput, PasswordInput.defaults);
createAll(PasswordInput, PasswordInput.defaults, document.body);
createAll(PasswordInput, PasswordInput.defaults, console.error);
createAll(PasswordInput, undefined, {
    scope: document.body,
    onError: console.error,
});

createAll(Radios);
createAll(Radios, undefined);
createAll(Radios, undefined, document.body);
createAll(Radios, undefined, console.error);
createAll(Radios, undefined, {
    scope: document.body,
    onError: console.error,
});

createAll(ServiceNavigation);
createAll(ServiceNavigation, undefined);
createAll(ServiceNavigation, undefined, document.body);
createAll(ServiceNavigation, undefined, console.error);
createAll(ServiceNavigation, undefined, {
    scope: document.body,
    onError: console.error,
});

createAll(SkipLink);
createAll(SkipLink, undefined);
createAll(SkipLink, undefined, document.body);
createAll(SkipLink, undefined, console.error);
createAll(SkipLink, undefined, {
    scope: document.body,
    onError: console.error,
});

createAll(Tabs);
createAll(Tabs, undefined);
createAll(Tabs, undefined, document.body);
createAll(Tabs, undefined, console.error);
createAll(Tabs, undefined, {
    scope: document.body,
    onError: console.error,
});

createAll(MyComponent1);
createAll(MyComponent1, undefined);
createAll(MyComponent1, undefined, document.body);
createAll(MyComponent1, undefined, console.error);
createAll(MyComponent1, undefined, {
    scope: document.body,
    onError: console.error,
});

createAll(MyComponent2);
createAll(MyComponent2, MyComponent2.defaults);
createAll(MyComponent2, MyComponent2.defaults, document.body);
createAll(MyComponent2, MyComponent2.defaults, console.error);
createAll(MyComponent2, MyComponent2.defaults, {
    scope: document.body,
    onError: console.error,
});

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
    onError: console.error,
});
initAll(config);
