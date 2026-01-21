/**
 * Ângulo sem casas decimais.
 */
export const DDD = -1892603107;

/**
 * Ângulo com casas decimais.
 */
export const DDD_DD = -1892603106;

/**
 * Formatos para ângulos aceitos pelas funções {@link module:@nginstack/engine/lib/geo/parseAngle} e
 * {@link module:@nginstack/engine/lib/geo/formatAngle}.
 * @enum {number}
 */
export type AngleFormatType = typeof DDD | typeof DDD_DD;
