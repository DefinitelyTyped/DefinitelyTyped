export = Hex;
/**
 * Classe responsável por codificar e decodificar strings em hexadecimal.
 * @constructor
 */
declare function Hex(): void;
declare class Hex {}
declare namespace Hex {
    /**
     * Codifica uma string para uma nova string codificada apenas utilizando caracteres
     * hexadecimais.
     *
     * Esta função codifica as *strings* como se fossem uma sequência de bytes no formato conhecido
     * por "Binary String", onde cada caractere da *string* representa um byte do conteúdo binário.
     * Para codificar binários ou textos que não sejam ASCII, é recomendado o uso da função
     * `Hex.encodeToString`. Para codificar *strings*, utilize a classe `TextEncoder` para converter
     * uma string em um Uint8Array, tornando explícita a codificação adotada.
     *
     * **Observação**: diferentemente das classes `SHA256` e `SHA512`, a classe `Hex` retorna
     * a representação hexadecimal utilizando letras maiúsculas. Essa diferença de comportamento
     * foi preservada a fim de garantir o funcionamento dos códigos existentes, mas ela pode ser
     * eliminada no futuro. É recomendado que o resultado deste método seja convertido
     * para o formato desejado utilizando os métodos `toUpperCase()` ou `toLowerCase()`.
     * @param {string} str String que será convertida em hexadecimal.
     * @return {string} String codificada em hexadecimal.
     */
    function encode(str: string): string;
    /**
     * Decodifica uma string em hexadecimal para a string original, informada ao
     * método encode.
     *
     * Esta função retorna uma string no formato conhecido por "Binary String", onde cada
     * caractere da *string* representa um byte do conteúdo binário. Para
     * decodificar binários ou textos que não sejam ASCII, é recomendado o uso da função
     * `Hex.decodeString`.
     * @param {string} str String que será decodificada.
     * @return {string} String decodificada.
     */
    function decode(str: string): string;
    /**
     * Converte uma sequência de bytes em sua representação hexadecimal em caixa baixa.
     * @param {Uint8Array|ArrayBuffer} src Bytes a ser codificados em hexadecimal.
     * @return {string} Representação hexadecimal dos bytes informados.
     * @example
     * const Hex = require('@nginstack/engine/lib/encoding/Hex');
     * const ar = new Uint8Array([0, 255, 127]);
     * Hex.encodeToString(ar); // => '00ff7f';
     */
    function encodeToString(src: Uint8Array | ArrayBuffer): string;
    /**
     * Restaura uma sequência de bytes a partir da sua representação hexadecimal.
     *
     * O valor informado deve ter um tamanho par, caso contrário será gerado um erro.
     * @param {string} s Representação hexadecimal de uma sequência de bytes.
     * @return {Uint8Array} Sequência de bytes que originou a representação hexadecimal.
     * @example
     * const Hex = require('@nginstack/engine/lib/encoding/Hex');
     * Hex.decodeString('00ff7f'); // => [0, 255, 127]
     */
    function decodeString(s: string): Uint8Array;
}
