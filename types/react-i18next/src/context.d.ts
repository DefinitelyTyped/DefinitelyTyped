import {i18n as I18n} from "i18next";
import {TranslateOptions} from "./translate";

export function setDefaults(options: TranslateOptions): void;

export function getDefaults(): TranslateOptions;

export function setI18n(instance: I18n): void;

export function getI18n(): I18n;

export interface ReactI18NextModule {
    type: "3rdParty";

    init(i18n: I18n): void;
}

export const reactI18nextModule: ReactI18NextModule;
