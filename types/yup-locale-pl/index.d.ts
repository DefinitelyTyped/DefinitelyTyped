import { setLocale } from "yup";

type LocaleObject = Parameters<typeof setLocale>[0];
declare const locale: LocaleObject;
export = locale;
