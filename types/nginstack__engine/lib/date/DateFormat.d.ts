/**
 * Formato dia/mês/ano. Exemplo: 21/05/2017.
 */
export const DDMMYYYY = -1892603089;

/**
 * Formato dia/mês. Exemplo: 21/05.
 */
export const DDMM = -1892603090;

/**
 * Formato mês/ano. Exemplo: 05/2017.
 */
export const MMYYYY = -1892603088;

/**
 * Formato semana_iso/ano. Exemplo: 20/2017.
 */
export const WWYYYY = -1892603087;

/**
 * Formato ano/semana_iso. Exemplo: 2017/20.
 */
export const YYYYWW = -1892603057;

/**
 * Formato mês_extenso/ano. Exemplo: Maio/2017.
 */
export const MMMYYYY = -1892603055;

/**
 * Formatos de datas aceitos pelas funções {@link module:@nginstack/engine/lib/date/formatDate} e
 * {@link module:@nginstack/engine/lib/date/parseDate}.
 * @enum {number}
 */
export type DateFormatType =
    | typeof DDMMYYYY
    | typeof DDMM
    | typeof MMYYYY
    | typeof WWYYYY
    | typeof YYYYWW
    | typeof MMMYYYY;
