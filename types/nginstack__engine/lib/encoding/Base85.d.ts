export = Base85;
/**
 * @typedef { import('../io/File') } File
 * @private
 */
/**
 * @typedef { import('../io/MemoryStream') } MemoryStream
 * @private
 */
/**
 * Classe que permite codificação e decodificação de conteúdo binário para a Base85. No formato
 * Base85 são utilizados cinco caracteres para representar quatro bytes de dado binário, sendo
 * assim mais compacto do que o formato Base64. Para uma melhor interoperabilidade com o Javascript
 * e ao SQL, a implementação do Engine segue a especificação [Z85](https://rfc.zeromq.org/spec/32/),
 * com uma extensão para o suporte ao uso de *padding* no conteúdo. Vale ressaltar que a especificação
 * Z85 faz uso dos caracteres '<' e '>', sendo necessário que seu conteúdo seja escapado em linguagens
 * SGML.
 *
 * Não devem ser construídas instâncias da classe Base85, e sim utilizados os seus métodos
 * de classe.
 *
 * @constructor
 */
declare function Base85(): void;
declare class Base85 {}
declare namespace Base85 {
    export {
        encode,
        decode,
        STRING_DECODING,
        ARRAY_BUFFER_DECODING,
        Z85,
        decodeStream,
        encodeStream,
        File,
        MemoryStream,
    };
}
/**
 * Codifica um conteúdo binário para a Base85.
 * @param {string|MemoryStream|File|ArrayBuffer|Uint8Array} bin Dados a serem codificados, podendo
 * ser um binário codificado como string.
 * @param {string} [encoding] Formato de codificação Base85. Somente é suportado o formato
 * *Z85* atualmente, sendo Base85.Z85 o valor default do parâmetro.
 * @param {boolean} [noPadding] Indica que não deve ser feito o *padding* do conteúdo caso seja
 * necessário, sendo `false` o valor padrão. Um erro será lançado caso seja informado `true` e
 * se o conteúdo não for de um tamanho múltiplo de quatro.
 * @return {string} String codificada em Base85.
 */
declare function encode(
    bin: string | MemoryStream | File | ArrayBuffer | Uint8Array,
    encoding?: string,
    noPadding?: boolean
): string;
/**
 * Decodifica uma string em Base85 para um binário codificado como string, ou um ArrayBuffer.
 * @param {string} str String em Base85 a ser decodificada.
 * @param {string} [encoding] Formato de codificação Base85, sendo Base85.Z85 o valor default do
 * parâmetro.
 * @param {string} [resultType] O tipo do resultado gerado por esta função. Os valores possíveis são
 * "uint8array", "arraybuffer" e "binarystring". Caso não seja informado, será retornada uma string
 * no formato "Binary String", onde cada caractere da *string* representa um byte do conteúdo
 * binário. Para fins de compatibilidade, este parâmetro também aceita os valores
 * Base85.STRING_DECODING e Base85.ARRAY_BUFFER_DECODING.
 * @return {string|ArrayBuffer} Um binário codificado como string ou um ArrayBuffer.
 */
declare function decode(str: string, encoding?: string, resultType?: string): string | ArrayBuffer;
declare let STRING_DECODING: number;
declare let ARRAY_BUFFER_DECODING: number;
declare let Z85: string;
/**
 * Lê um conteúdo Base85 de um stream e escreve como binário em outro stream. Faz a operação inversa
 * do método encodeStream.
 * @param {File|MemoryStream} input Conteúdo Base85 a ser decodificado
 * @param {File|MemoryStream} output Stream que recebe o conteúdo em formato binário
 * @param {string} [encoding] Formato de codificação Base85, sendo Base85.Z85 o valor default do
 * parâmetro.
 */
declare function decodeStream(
    input: File | MemoryStream,
    output: File | MemoryStream,
    encoding?: string
): void;
/**
 * Lê um conteúdo binário de um stream e escreve como Base85 em outro stream. Faz a operação inversa
 * do método decodeStream.
 * @param {File|MemoryStream} input Conteúdo binário a ser codificado
 * @param {File|MemoryStream} output Stream que recebe o conteúdo em formato Base85
 * @param {string} [encoding] Formato de codificação Base85, sendo Base85.Z85 o valor default do
 * parâmetro.
 */
declare function encodeStream(
    input: File | MemoryStream,
    output: File | MemoryStream,
    encoding?: string
): void;
type File = import('../io/File');
type MemoryStream = import('../io/MemoryStream');
