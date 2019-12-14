import { Omit } from "../../../Omit";

/**
 * Provides a base for ui-options.
 */
export type UIOptionsBase<T extends { min?: any, max?: any, step?: any }> = Omit<T, "min" | "max" | "step">;
