export = PhoneNumber;
/**
 * Número de telefone interpretado pela função {@link parsePhone}.
 * @constructor
 */
declare function PhoneNumber(): void;
declare class PhoneNumber {
    /**
     * Código numérico que indica o país do número de telefone.
     * @type {number}
     */
    countryCode: number;
    /**
     * Código numérico que indica o país do número de telefone.
     * @type {string}
     * @deprecated Utilize {@link #countryCode}
     */
    ddi: string;
    /**
     * Código numérico que indica a área do país do número de telefone.
     * @type {number}
     */
    areaCode: number;
    /**
     * Código numérico que indica a área do país do número de telefone.
     * @type {string}
     * @deprecated Utilize {@link #areaCode}
     */
    ddd: string;
    /**
     * Número de telefone local, sem o código de área e do país.
     * @type {string}
     */
    localNumber: string;
    /**
     * Número de telefone local, sem o código de área e do país.
     * @type {string}
     * @deprecated Utilize {@link #localNumber}
     */
    number: string;
    /**
     * Ramal ou extensão que indica um setor interno no destino da ligação.
     * @type {string}
     */
    extension: string;
    /**
     * Número de telefone completo, com o código do país, código de área, número local e extensão, caso
     * tenha uma.
     */
    fullNumber: string;
}
