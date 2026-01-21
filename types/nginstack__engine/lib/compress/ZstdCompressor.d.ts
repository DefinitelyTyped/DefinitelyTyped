export = ZstdCompressor;
/**
 * @typedef {import('../io/File')} File
 * @private
 */
/**
 * @typedef {import('../io/MemoryStream')} MemoryStream
 * @private
 */
/**
 * Classe que disponibiliza métodos de compressão da biblioteca
 * [Zstandard](https://facebook.github.io/zstd/).
 *
 * Esta classe é significativamente mais eficiente que os métodos estáticos da classe `Zstd`
 * quando várias operações de compressão são realizadas em sequência ou quando é utilizado
 * um dicionário de dados.
 * @param {Object} [options] Opções de compressão.
 * @param {number} [options.level] Nível de compressão. Deve ser informado um número
 * no intervalo de `Zstd.minCompressionLevel` a `Zstd.maxCompressionLevel`, sendo maior a
 * taxa compressão quanto mais alto for o nível, ao custo de um processamento mais elevado.
 * Caso não seja informado, será utilizado `Zstd.defaultCompressionLevel`.
 * @param {Uint8Array|ArrayBuffer|string} [options.dictionary] Dicionário que deve ser utilizado
 * na compressão dos dados com o objetivo de aumentar a taxa de compressão de conteúdos
 * pequenos. O dicionário informado será requerido na descompressão dos dados retornados por
 * este método. A perda do dicionário inviabiliza a descompressão dos dados.
 * @constructor
 */
declare function ZstdCompressor(options?: {
    level?: number;
    dictionary?: Uint8Array | ArrayBuffer | string;
}): void;
declare class ZstdCompressor {
    /**
     * @typedef {import('../io/File')} File
     * @private
     */
    /**
     * @typedef {import('../io/MemoryStream')} MemoryStream
     * @private
     */
    /**
     * Classe que disponibiliza métodos de compressão da biblioteca
     * [Zstandard](https://facebook.github.io/zstd/).
     *
     * Esta classe é significativamente mais eficiente que os métodos estáticos da classe `Zstd`
     * quando várias operações de compressão são realizadas em sequência ou quando é utilizado
     * um dicionário de dados.
     * @param {Object} [options] Opções de compressão.
     * @param {number} [options.level] Nível de compressão. Deve ser informado um número
     * no intervalo de `Zstd.minCompressionLevel` a `Zstd.maxCompressionLevel`, sendo maior a
     * taxa compressão quanto mais alto for o nível, ao custo de um processamento mais elevado.
     * Caso não seja informado, será utilizado `Zstd.defaultCompressionLevel`.
     * @param {Uint8Array|ArrayBuffer|string} [options.dictionary] Dicionário que deve ser utilizado
     * na compressão dos dados com o objetivo de aumentar a taxa de compressão de conteúdos
     * pequenos. O dicionário informado será requerido na descompressão dos dados retornados por
     * este método. A perda do dicionário inviabiliza a descompressão dos dados.
     * @constructor
     */
    constructor(options?: { level?: number; dictionary?: Uint8Array | ArrayBuffer | string });
    /**
     * Comprime os dados informados utilizando o modo "single step" do Zstd. Utilize esta função
     * para dados que possam ser representados totalmente em memória sem sobrecarregar o servidor.
     * Para volumes maiores de dados, utilize {@link #compressStream}.
     *
     * Esta função trata as *strings* como se fossem uma sequência de bytes no formato conhecido
     * por "Binary String", onde cada caractere da *string* representa um byte do conteúdo binário.
     * @example
     * const ZstdCompressor = require('@nginstack/engine/lib/compress/ZstdCompressor.js');
     * const data = 'Hello World';
     * const compressor = new ZstdCompressor();
     * const compressedData = compressor.compress(data);
     *
     * @param {string|Uint8Array|ArrayBuffer} data Dados que serão comprimidos.
     * @param {Object} [options] Opções de compressão.
     * @param {string} [options.resultType] O tipo do resultado gerado por esta função. Os valores
     * possíveis são "uint8array", "arraybuffer" e "binarystring". Caso não seja informado, será
     * retornado um Uint8Array.
     * @return {Uint8Array|ArrayBuffer|string} Dados comprimidos no formato Zstd.
     */
    compress(
        data: string | Uint8Array | ArrayBuffer,
        options?: {
            resultType?: string;
        }
    ): Uint8Array | ArrayBuffer | string;
    /**
     * Comprime os dados contidos no arquivo ou stream `src` e grava em `dest` utilizando o modo
     * "streaming" do Zstd.
     *
     * Esta função trata as *strings* como se fossem uma sequência de bytes no formato conhecido
     * por "Binary String", onde cada caractere da *string* representa um byte do conteúdo binário.
     * @example
     * const ZstdCompressor = require('@nginstack/engine/lib/compress/ZstdCompressor.js');
     * const File = require('@nginstack/engine/lib/io/File.js');
     *
     * const compressor = new ZstdCompressor();
     * const src = new File(fileName);
     * const dest = File.createTempFile();
     * try {
     *   compressor.compressStream(src, dest);
     * } finally {
     *   src.close();
     *   dest.close();
     * }
     *
     * @param {File|MemoryStream|Uint8Array|ArrayBuffer|string} src Dados que serão comprimidos.
     * @param {File|MemoryStream} dest Arquivo ou stream onde serão gravados os dados comprimidos.
     */
    compressStream(
        src: File | MemoryStream | Uint8Array | ArrayBuffer | string,
        dest: File | MemoryStream
    ): void;
}
declare namespace ZstdCompressor {
    export { File, MemoryStream };
}
type File = import('../io/File');
type MemoryStream = import('../io/MemoryStream');
