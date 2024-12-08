import { version } from "./common/govuk-frontend-version.js";
import { isSupported } from "./common/index.js";
import { Accordion } from "./components/accordion/accordion.js";
import { Button } from "./components/button/button.js";
import { CharacterCount } from "./components/character-count/character-count.js";
import { Checkboxes } from "./components/checkboxes/checkboxes.js";
import { ErrorSummary } from "./components/error-summary/error-summary.js";
import { ExitThisPage } from "./components/exit-this-page/exit-this-page.js";
import { Header } from "./components/header/header.js";
import { NotificationBanner } from "./components/notification-banner/notification-banner.js";
import { PasswordInput } from "./components/password-input/password-input.js";
import { Radios } from "./components/radios/radios.js";
import { ServiceNavigation } from "./components/service-navigation/service-navigation.js";
import { SkipLink } from "./components/skip-link/skip-link.js";
import { Tabs } from "./components/tabs/tabs.js";
import { GOVUKFrontendComponent as Component } from "./govuk-frontend-component.js";
import { type Config as ConfigImport, type ConfigKey as ConfigKeyImport, createAll, initAll } from "./init.js";

declare namespace GOVUKFrontend {
    type Config = ConfigImport;
    type ConfigKey = ConfigKeyImport;
}

declare const GOVUKFrontend: {
    version: typeof version;
    isSupported: typeof isSupported;
    Accordion: typeof Accordion;
    Button: typeof Button;
    CharacterCount: typeof CharacterCount;
    Checkboxes: typeof Checkboxes;
    ErrorSummary: typeof ErrorSummary;
    ExitThisPage: typeof ExitThisPage;
    Header: typeof Header;
    NotificationBanner: typeof NotificationBanner;
    PasswordInput: typeof PasswordInput;
    Radios: typeof Radios;
    ServiceNavigation: typeof ServiceNavigation;
    SkipLink: typeof SkipLink;
    Tabs: typeof Tabs;
    Component: typeof Component;
    createAll: typeof createAll;
    initAll: typeof initAll;
};

export = GOVUKFrontend;
