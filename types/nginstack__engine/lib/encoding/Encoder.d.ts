export = Encoder;
/**
 * Classe que prove métodos estáticos para a conversão entre diferentes
 * sistemas de codificação de texto.
 *
 * O nome da codificação deve estar de acordo com o padrão definido em:
 * http://www.iana.org/assignments/character-sets. Atualmente são suportadas as codificações
 * ISO-8859-1, UTF-8 e WINDOWS-1252.
 *
 * Esta classe trata as *strings* como se fossem uma sequência de bytes no formato conhecido
 * por "Binary String", onde cada caractere da *string* representa um byte do conteúdo binário.
 * Para um melhor tratamento de valores binários, devem ser utilizadas as classes
 * [TextEncoder](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder) e
 * [TextDecoder](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder). Essas classes
 * sempre manipulam os valores binários utilizando os tipos `Uint8Array` e `ArrayBuffer`, que
 * são mais adequados para esse fim que as *strings*.
 *
 * Este módulo também é publicado no escopo global com o nome `Encoder`.
 * @example
 * const Encoder = require('@nginstack/engine/lib/encoding/Encoder');
 * // Convertendo uma string em ISO-8859-1 para UTF-8:
 * const nome = Encoder.convertFromString(Encoder.UTF_8, 'João');
 * // ou:
 * const nome = Encoder.convert(Encoder.ISO_8859_1, Encoder.UTF_8, 'João');
 * // A variável "nome" conterá o valor "JoÃ£o".
 *
 * @example
 * const Encoder = require('@nginstack/engine/lib/encoding/Encoder');
 * // Convertendo uma string em UTF-8 para ISO-8859-1:
 * const nome = Encoder.convertToString(Encoder.UTF_8, 'JoÃ£o');
 * // ou:
 * const nome = Encoder.convert(Encoder.UTF_8, Encoder.ISO_8859_1, 'JoÃ£o');
 * // A variável "nome" conterá o valor "João".
 * @constructor
 */
declare function Encoder(): void;
declare class Encoder {}
declare namespace Encoder {
    let ISO_8859_1: string;
    let UTF_8: string;
    let WINDOWS_1252: string;
    let STRING_FORMAT: string;
    let ARRAY_BUFFER_FORMAT: string;
    /**
     * Método de classe que converte a string da codificação de origem para a
     * codificação utilizada no iJavascript (WINDOWS-1252).
     * @param {string} sourceEncoding Codificação da string de origem.
     * @param {string|ArrayBuffer} source String ou sequência de bytes a ser convertida.
     * @returns {string} String codificada em WINDOWS-1252.
     * @see #convertFromString
     * @see #convert
     */
    function convertToString(sourceEncoding: string, source: string | ArrayBuffer): string;
    /**
     * Método de classe que converte a string da codificação utilizada no
     * iJavascript (WINDOWS-1252) para a codificação especificada.
     * @param {string} targetEncoding Codificação da string de saída.
     * @param {string} source String a ser convertida.
     * @param {string} [encodeFmt] O formato de saída. Os valores possíveis são
     * Encoder.STRING_FORMAT e Encoder.ARRAY_BUFFER_FORMAT. Caso não seja
     * especificado, o valor padrão será Encoder.STRING_FORMAT.
     * @returns {string|ArrayBuffer} String ou ArrayBuffer na codificação especificada.
     * @see #convertToString
     * @see #convert
     */
    function convertFromString(
        targetEncoding: string,
        source: string,
        encodeFmt?: string
    ): string | ArrayBuffer;
    /**
     * Método de classe que converte a string da codificação de origem para a
     * codificação de destino.
     * @param {string} sourceEncoding Codificação da string de origem.
     * @param {string} targetEncoding Codificação da string de destino.
     * @param {string|ArrayBuffer} source String ou sequência de bytes a ser convertida.
     * @param {string} [encodeFmt] O formato de saída. Os valores possíveis são
     * Encoder.STRING_FORMAT e Encoder.ARRAY_BUFFER_FORMAT. Caso não seja
     * especificado, o valor padrão será Encoder.STRING_FORMAT.
     * @returns {string|ArrayBuffer} String ou ArrayBuffer na codificação especificada.
     * @see #convertToString
     * @see #convertFromString
     */
    function convert(
        sourceEncoding: string,
        targetEncoding: string,
        source: string | ArrayBuffer,
        encodeFmt?: string
    ): string | ArrayBuffer;
    /**
     * Método de classe que verifica se a codificação especificada é suportada.
     * @param {string} encodingName Nome da codificação de acordo com o padrão
     * especificado em: http://www.iana.org/assignments/character-sets.
     * @returns {boolean} String na codificação especificada.
     */
    function supports(encodingName: string): boolean;
    /**
     * Método de classe que lista as codificações suportadas de acordo com
     * o padrão especificado em:
     * http://www.iana.org/assignments/character-sets.
     * @returns {Array} Array com os nomes das codificações suportadas.
     */
    function listEncodings(): any[];
}
