import { Identifiable } from "./Identifiable";

/**
 * Represents a map of identifiable objects.
 */
export type IdentityMap<TSimple, TComplex> = Array<Identifiable & TComplex> | { [id: string]: TSimple | TComplex };
