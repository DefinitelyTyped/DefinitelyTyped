/**
 * Graus decimais com 5 casas de precisão.
 */
export const DDD_DDDDD = -1892602552;

/**
 * Graus, minutos com 3 casas de precisão e direção.
 */
export const DDD_MM_MMM_DIR = -1892602551;

/**
 * Graus, minutos, segundos com 2 casas precisão e direção.
 */
export const DDD_MM_SS_S_DIR = -1892602550;

/**
 * Formatos de Longitude aceitos pelas funções {@link module:@nginstack/engine/lib/geo/parseLongitude} e
 * {@link module:@nginstack/engine/lib/geo/formatLongitude}.
 * @enum {number}
 */
export type LongitudeFormatType = typeof DDD_DDDDD | typeof DDD_MM_MMM_DIR | typeof DDD_MM_SS_S_DIR;
