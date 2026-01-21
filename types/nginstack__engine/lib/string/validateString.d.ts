export = validateString;
/**
 * @typedef {import('../date/DateFormat').DateFormatType} DateFormat
 * @private
 */
/**
 * @typedef {import('../geo/LatitudeFormat').LatitudeFormatType} LatitudeFormat
 * @private
 */
/**
 * @typedef {import('../geo/LongitudeFormat').LongitudeFormatType} LongitudeFormat
 * @private
 */
/**
 * @typedef {import('../geo/AngleFormat').AngleFormatType} AngleFormat
 * @private
 */
/**
 * Valida e retorna um texto convertido no tipo desejado.
 *
 * Essa função busca apenas dar compatibilidade com a antiga função global **validateString** e
 * seu uso não é mais recomendado.
 *
 * Para fins de compatibilidade, este método também aceita os parâmetros utilizando a seguinte
 * assinatura:
 *
 * ```js
 * validateString(value, type, max, min, caseType, classKey, displayFormat)
 * ```
 * @param {*} value Valor a ser validado.
 * @param {string} type Tipo desejado para o valor informado. Os seguintes tipos são suportados:
 * 'string', 'int64', 'int32', 'number', 'interval', 'date', 'time', 'boolean', 'email', 'cep',
 * 'phone', 'lookup', 'color', 'pis', 'cpf', 'cnpj', 'cpfcnpj', 'angle', 'latitude', 'longitude',
 * 'comp', 'banco', 'agencia' e 'cheque'.
 *
 * Para fins de compatibilidade, os seguintes tipos também são aceitos:
 *
 *  - 'memo', 'blob' e qualquer tipo que contenha 'char' (ex: 'varchar') são tratados como 'string';
 *  - 'numeric' é tratado como 'number';
 *  - 'integer' é tratado como 'int64';
 *  - 'hora' é tratado como 'time';
 *  - 'fone' é tratado como 'phone'.
 *  - 'cgccpf' é tratado como 'cpfcnpj'.
 *
 * @param {Object} [options] Opções de validação.
 * @param {number|Date} [options.max] Valor máximo aceito. Cada tipo poderá dar um significado diferente
 * para esse parâmetro, podendo inclusive ignorá-lo. De uma forma geral, será considerado o valor
 * máximo para tipos numéricos e o tamanho máximo para tipos textuais.
 * @param {number|Date} [options.min] Valor mínimo aceito. Cada tipo poderá dar um significado diferente
 * para esse parâmetro, podendo inclusive ignorá-lo. De uma forma geral, será considerado o valor
 * mínimo para tipos numéricos e o tamanho mínimo para tipos textuais.
 * @param {string} [options.caseType] Para tipos textuais, indicará o tipo de *case* desejado. Valores
 * possíveis: 'upper', 'lower', 'name', 'title' e 'statement'. Ver
 * {@link module:@nginstack/engine/lib/string/adjustCase} para mais detalhes.
 * @param {number} [options.classKey] Para o tipo **lookup**, indica a classe onde podem ser encontrados
 * os registros indicados por *value*.
 * @param {DateFormat|LatitudeFormat|LongitudeFormat|AngleFormat} [options.displayFormat] Indica o formato
 * aceito para o campo.
 * @param {'pt-br'|'en-us'} [options.locale] Localidade a ser utilizada. Por padrão é 'pt-br'.
 * @return {*} Retorna *value* convertido no tipo desejado.
 */
declare function validateString(
    value: any,
    type: string,
    options?: {
        max?: number | Date;
        min?: number | Date;
        caseType?: string;
        classKey?: number;
        displayFormat?: DateFormat | LatitudeFormat | LongitudeFormat | AngleFormat;
        locale?: 'pt-br' | 'en-us';
    },
    ...args: any[]
): any;
declare namespace validateString {
    export { registerType, DateFormat, LatitudeFormat, LongitudeFormat, AngleFormat };
}
declare function registerType(type: any): void;
type DateFormat = import('../date/DateFormat').DateFormatType;
type LatitudeFormat = import('../geo/LatitudeFormat').LatitudeFormatType;
type LongitudeFormat = import('../geo/LongitudeFormat').LongitudeFormatType;
type AngleFormat = import('../geo/AngleFormat').AngleFormatType;
