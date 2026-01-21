export = Barcode;
/**
 * Gerador de códigos de barras.
 *
 * Classe também publicada por meio da variável global Barcode.
 *
 * @example
 * const barCode = new Barcode('03395849100000050009429966300000000001080101', Barcode.CODE_2_5_INTERLEAVED);
 * const file = new File(File.pathAppend(engine.dataDir, 'test.jpg'));
 * try {
 *   file.write(barCode.getJpegImage());
 * } finally {
 *   file.close();
 * }
 * @param {string} code Número do código de barras
 * @param {string} type Tipo do código de barras. Os tipos disponíveis estão
 * declarados como variáveis de classe. Ex.: Barcode.CODE_2_5_INTERLEAVED,
 * Barcode.CODE_EAN13, CODE_128_A, CODE_128_B e CODE_128_C.
 * @constructor
 */
declare function Barcode(code: string, type: string): void;
declare class Barcode {
    /**
     * Gerador de códigos de barras.
     *
     * Classe também publicada por meio da variável global Barcode.
     *
     * @example
     * const barCode = new Barcode('03395849100000050009429966300000000001080101', Barcode.CODE_2_5_INTERLEAVED);
     * const file = new File(File.pathAppend(engine.dataDir, 'test.jpg'));
     * try {
     *   file.write(barCode.getJpegImage());
     * } finally {
     *   file.close();
     * }
     * @param {string} code Número do código de barras
     * @param {string} type Tipo do código de barras. Os tipos disponíveis estão
     * declarados como variáveis de classe. Ex.: Barcode.CODE_2_5_INTERLEAVED,
     * Barcode.CODE_EAN13, CODE_128_A, CODE_128_B e CODE_128_C.
     * @constructor
     */
    constructor(code: string, type: string);
    /**
     * Número do código de barras.
     * @type {string}
     */
    code: string;
    /**
     * Tipo do código de barras.
     *
     * Os possíveis tipos de códigos de barras são:
     *
     * * Barcode.CODE_EAN13
     * * Barcode.CODE_2_5_INTERLEAVED
     * * Barcode.CODE_128_A
     * * Barcode.CODE_128_B
     * * Barcode.CODE_128_C
     * @type {string}
     */
    type: string;
    /**
     * Altura do código de barras em pixels.
     * @type {number}
     */
    height: number;
    /**
     * Define o ângulo do código de barras. O ângulo deve ser usando para realizar a rotação do
     * código de barras.
     *
     * Observação: apenas ângulos retos são suportados. Se forem utilizados ângulos "não retos",
     * o valor será ajustado para o ângulo reto mais aproximado. Por exemplo, para um ângulo
     * informado "x", a rotação final será de:
     *
     * * 0 grau, se x < 45
     * * 90 graus, se 45 <= x < 135
     * * 180 graus, se 135 <= x < 225
     * * 269 graus, se 225 <= x < 305
     * * 359 graus, se 305 <= x
     * @type {number}
     */
    angle: number;
    /**
     * Obtém a imagem do código de barras no formato JPEG.
     * @return {ArrayBuffer} Imagem JPEG no formato binário do código de barras.
     */
    getJpegImage(): ArrayBuffer;
}
declare namespace Barcode {
    let CODE_EAN13: string;
    let CODE_2_5_INTERLEAVED: string;
    let CODE_128_A: string;
    let CODE_128_B: string;
    let CODE_128_C: string;
}
