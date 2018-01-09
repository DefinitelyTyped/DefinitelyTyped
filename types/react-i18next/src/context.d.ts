import { i18n } from "i18next";

export interface ReactI18NextOptions {
    wait?: boolean;
    withRef?: boolean;
    bindI18n?: string;
    bindStore?: string;
    translateFuncName?: string;
    nsMode?: string;
}

export function setDefaults(options: ReactI18NextOptions): void;

export function getDefaults(): ReactI18NextOptions;

export function setI18n(instance: i18n): void;

export function getI18n(): i18n;

export interface i18NextModule {
    type: string;

    init: (instance: i18n) => void;
}

export const reactI18nextModule: i18NextModule;
