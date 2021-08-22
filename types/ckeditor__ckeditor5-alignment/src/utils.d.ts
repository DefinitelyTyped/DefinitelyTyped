import { Locale } from "@ckeditor/ckeditor5-utils";
import { AlignmentFormat } from "./alignmentediting";

export const supportedOptions: ["left", "right", "center", "justify"];

export function isDefault(alignment: string, locale: Locale): boolean;
export function isSupported(option: string): boolean;
export function normalizeAlignmentOptions(configuredOptions: Array<string | AlignmentFormat>): AlignmentFormat[];
