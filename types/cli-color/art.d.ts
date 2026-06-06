/**
 * Create a text-graphical art. Within *styleConf*, string replacements needs to be defined, which are then used to convert *text* to styled graphical text.
 */
declare function art(text: string, styleConf: Record<string, string>): string;
export = art;
