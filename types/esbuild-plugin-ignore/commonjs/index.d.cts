import { IgnoreOption, IgnorePluginInstance } from "../types";

declare function ignore(options: IgnoreOption[]): IgnorePluginInstance;

export = ignore;
