import { Identifiable } from "./Identifiable";

/**
 * Represents a map of identifiable objects.
 */
export type IdentityMap<TSimple, TComplex> = (Identifiable & TComplex)[] | { [id: string]: TSimple | TComplex };