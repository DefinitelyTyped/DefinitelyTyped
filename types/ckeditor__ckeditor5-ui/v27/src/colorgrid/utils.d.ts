import { Locale } from "@ckeditor/ckeditor5-utils";
import { ColorDefinition } from "./colorgrid";

export function getLocalizedColorOptions(locale: Locale, options: ColorDefinition[]): ColorDefinition[];
export function normalizeColorOptions(options: ColorDefinition[]): ColorDefinition[];
