export = ZstdDecompressor;
/**
 * @typedef {import('../io/File')} File
 * @private
 */
/**
 * @typedef {import('../io/MemoryStream')} MemoryStream
 * @private
 */
/**
 * Classe que disponibiliza métodos de descompressão da biblioteca
 * [Zstandard](https://facebook.github.io/zstd/).
 *
 * Esta classe é significativamente mais eficiente que os métodos estáticos da classe `Zstd`
 * quando várias operações de descompressão são realizadas em sequência ou quando é utilizado
 * um dicionário de dados.
 * @param {Object} [options] Opções de descompressão.
 * @param {Uint8Array|ArrayBuffer|string} [options.dictionary] Dicionário que foi utilizado na
 * compressão dos dados.
 * @constructor
 */
declare function ZstdDecompressor(options?: {
    dictionary?: Uint8Array | ArrayBuffer | string;
}): void;
declare class ZstdDecompressor {
    /**
     * @typedef {import('../io/File')} File
     * @private
     */
    /**
     * @typedef {import('../io/MemoryStream')} MemoryStream
     * @private
     */
    /**
     * Classe que disponibiliza métodos de descompressão da biblioteca
     * [Zstandard](https://facebook.github.io/zstd/).
     *
     * Esta classe é significativamente mais eficiente que os métodos estáticos da classe `Zstd`
     * quando várias operações de descompressão são realizadas em sequência ou quando é utilizado
     * um dicionário de dados.
     * @param {Object} [options] Opções de descompressão.
     * @param {Uint8Array|ArrayBuffer|string} [options.dictionary] Dicionário que foi utilizado na
     * compressão dos dados.
     * @constructor
     */
    constructor(options?: { dictionary?: Uint8Array | ArrayBuffer | string });
    /**
     * Descomprime os dados informados no modo "single step" do Zstd. Utilize esta função
     * com dados que possam ser representados totalmente em memória sem sobrecarregar o servidor. Para
     * volumes maiores de dados, utilize {@link #decompressStream}.
     *
     * Esta função trata as *strings* como se fossem uma sequência de bytes no formato conhecido
     * por "Binary String", onde cada caractere da *string* representa um byte do conteúdo binário.
     * @example
     * const ZstdDecompressor = require('@nginstack/engine/lib/compress/ZstdDecompressor.js');
     * const decompressor = new ZstdDecompressor();
     * const originalData = decompressor.decompress(compressedData);
     *
     * @param {string|Uint8Array|ArrayBuffer} data Dados que serão comprimidos.
     * @param {Object} [options] Opções de compressão.
     * @param {string} [options.resultType] O tipo do resultado gerado por esta função. Os valores
     * possíveis são "uint8array", "arraybuffer" e "binarystring". Caso não seja informado, será
     * retornado um Uint8Array.
     * @return {Uint8Array|ArrayBuffer|string} Dados comprimidos no formato Zstd.
     */
    decompress(
        data: string | Uint8Array | ArrayBuffer,
        options?: {
            resultType?: string;
        }
    ): Uint8Array | ArrayBuffer | string;
    /**
     * Descomprime os dados contidos no arquivo ou stream `src` e grava em `dest` utilizando o modo
     * "streaming" do Zstd.
     *
     * Esta função trata as *strings* como se fossem uma sequência de bytes no formato conhecido
     * por "Binary String", onde cada caractere da *string* representa um byte do conteúdo binário.
     * @example
     * const ZstdDecompressor = require('@nginstack/engine/lib/compress/ZstdDecompressor.js');
     * const File = require('@nginstack/engine/lib/io/File.js');
     *
     * const decompressor = new ZstdDecompressor();
     * const src = new File(compressedFileName);
     * const dest = File.createTempFile();
     * try {
     *   decompressor.decompressStream(src, dest);
     * } finally {
     *   src.close();
     *   dest.close();
     * }
     *
     * @param {File|MemoryStream|Uint8Array|ArrayBuffer|string} src Dados que serão comprimidos.
     * @param {File|MemoryStream} dest Arquivo ou stream onde serão gravados os dados comprimidos.
     */
    decompressStream(
        src: File | MemoryStream | Uint8Array | ArrayBuffer | string,
        dest: File | MemoryStream
    ): void;
}
declare namespace ZstdDecompressor {
    export { File, MemoryStream };
}
type File = import('../io/File');
type MemoryStream = import('../io/MemoryStream');
