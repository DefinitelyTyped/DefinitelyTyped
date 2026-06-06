import { IconClassGenerator } from "./IconClassGenerator";

/**
 * Represents a css-class resolver.
 *
 * If you provide a `string`, `?` and `%` are replaced by the icon-id.
 */
export type CssClassConfig = string | IconClassGenerator;
