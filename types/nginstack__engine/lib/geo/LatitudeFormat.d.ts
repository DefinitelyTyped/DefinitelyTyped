/**
 * Graus decimais com 5 casas de precisão.
 */
export const DDD_DDDDD = -1892603112;

/**
 * Graus, minutos com 3 casas de precisão e direção.
 */
export const DDD_MM_MMM_DIR = -1892603111;

/**
 * Graus, minutos e segundos com 2 casas precisão e direção.
 */
export const DDD_MM_SS_S_DIR = -1892603110;

/**
 * Formatos de Latitude aceitos pelas funções {@link module:@nginstack/engine/lib/geo/parseLatitude} e
 * {@link module:@nginstack/engine/lib/geo/formatLatitude}.
 * @enum {number}
 */
export type LatitudeFormatType = typeof DDD_DDDDD | typeof DDD_MM_MMM_DIR | typeof DDD_MM_SS_S_DIR;
