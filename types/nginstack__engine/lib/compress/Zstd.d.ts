export = Zstd;
/**
 * @typedef {import('../io/File')} File
 * @private
 */
/**
 * @typedef {import('../io/MemoryStream')} MemoryStream
 * @private
 */
/**
 * Classe que disponibiliza métodos estáticos de compressão e descompressão da biblioteca
 * [Zstandard](https://facebook.github.io/zstd/), sendo o seu uso recomendado para operações
 * eventuais. Para a compressão ou descompressão de múltiplos arquivos, em especial quando são
 * utilizados dicionários de compressão, utilize as classes `ZstdCompressor` e `ZstdDecompressor`.
 *
 * Não construa instâncias de Zstd. Ao invés, utilize os métodos e propriedades estáticas desta
 * classe.
 * @constructor
 */
declare function Zstd(): void;
declare class Zstd {}
declare namespace Zstd {
    export {
        defaultCompressionLevel,
        minCompressionLevel,
        maxCompressionLevel,
        compress,
        compressStream,
        decompress,
        decompressStream,
        File,
        MemoryStream,
    };
}
declare let defaultCompressionLevel: number;
declare let minCompressionLevel: number;
declare let maxCompressionLevel: number;
/**
 * Comprime os dados informados utilizando o modo "single step" do Zstd. Utilize esta função
 * para dados que possam ser representados totalmente em memória sem sobrecarregar o servidor.
 * Para volumes maiores de dados, utilize `ZStd.compressStream`.
 *
 * Esta função trata as *strings* como se fossem uma sequência de bytes no formato conhecido
 * por "Binary String", onde cada caractere da *string* representa um byte do conteúdo binário.
 * @example
 * const Zstd = require('@nginstack/engine/lib/compress/Zstd.js');
 * const data = 'Hello World';
 * const compressedData = Zstd.compress(data);
 *
 * @param {string|Uint8Array|ArrayBuffer} data Dados que serão comprimidos.
 * @param {Object} [options] Opções de compressão.
 * @param {number} [options.level] Nível de compressão. Deve ser informado um número
 * no intervalo de `Zstd.minCompressionLevel` a `Zstd.maxCompressionLevel`, sendo maior a
 * taxa compressão quanto mais alto for o nível, ao custo de um processamento mais elevado.
 * Caso não seja informado, será utilizado `Zstd.defaultCompressionLevel`.
 * @param {Uint8Array|ArrayBuffer|string} [options.dictionary] Dicionário que deve ser utilizado
 * na compressão dos dados com o objetivo de aumentar a taxa de compressão de conteúdos
 * pequenos. O dicionário informado será requerido na descompressão dos dados retornados por
 * este método. A perda do dicionário inviabiliza a descompressão dos dados.
 * @param {string} [options.resultType] O tipo do resultado gerado por esta função. Os valores
 * possíveis são "uint8array", "arraybuffer" e "binarystring". Caso não seja informado, será
 * retornado um Uint8Array.
 * @return {Uint8Array|ArrayBuffer|string} Dados comprimidos no formato Zstd.
 */
declare function compress(
    data: string | Uint8Array | ArrayBuffer,
    options?: {
        level?: number;
        dictionary?: Uint8Array | ArrayBuffer | string;
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
 * const Zstd = require('@nginstack/engine/lib/compress/Zstd.js');
 * const File = require('@nginstack/engine/lib/io/File.js');
 *
 * const src = new File(fileName);
 * const dest = File.createTempFile();
 * try {
 *   Zstd.compressStream(src, dest);
 * } finally {
 *   src.close();
 *   dest.close();
 * }
 *
 * @param {File|MemoryStream|Uint8Array|ArrayBuffer|string} src Dados que serão comprimidos.
 * @param {File|MemoryStream} dest Arquivo ou stream onde serão gravados os dados comprimidos.
 * @param {Object} [options] Opções de compressão.
 * @param {number} [options.level] Nível de compressão. Deve ser informado um número
 * no intervalo de `Zstd.minCompressionLevel` a `Zstd.maxCompressionLevel`, sendo maior a
 * taxa compressão quanto mais alto for o nível, ao custo de um processamento mais elevado.
 * Caso não seja informado, será utilizado `Zstd.defaultCompressionLevel`.
 * @param {Uint8Array|ArrayBuffer|string} [options.dictionary] Dicionário que deve ser utilizado
 * na compressão dos dados com o objetivo de aumentar a taxa de compressão de conteúdos
 * pequenos. O dicionário informado será requerido na descompressão dos dados retornados por
 * este método. A perda do dicionário inviabiliza a descompressão dos dados.
 */
declare function compressStream(
    src: File | MemoryStream | Uint8Array | ArrayBuffer | string,
    dest: File | MemoryStream,
    options?: {
        level?: number;
        dictionary?: Uint8Array | ArrayBuffer | string;
    }
): void;
/**
 * Descomprime os dados informados no modo "single step" do Zstd. Utilize esta função
 * com dados que possam ser representados totalmente em memória sem sobrecarregar o servidor. Para
 * volumes maiores de dados, utilize `ZStd.decompressStream`.
 *
 * Esta função trata as *strings* como se fossem uma sequência de bytes no formato conhecido
 * por "Binary String", onde cada caractere da *string* representa um byte do conteúdo binário.
 * @example
 * const Zstd = require('@nginstack/engine/lib/compress/Zstd.js');
 * const data = 'A not very long text';
 * const compressData = Zstd.compress(data);
 * Zstd.decompress(compressData); // => 'A not very long text'
 *
 * @param {string|Uint8Array|ArrayBuffer} data Dados que serão descomprimidos.
 * @param {Object} [options] Opções de descompressão.
 * @param {Uint8Array|ArrayBuffer|string} [options.dictionary] Dicionário que foi utilizado na
 * compressão dos dados.
 * @param {string} [options.resultType] O tipo do resultado gerado por esta função. Os valores
 * possíveis são "uint8array", "arraybuffer" e "binarystring". Caso não seja informado, será
 * retornado um Uint8Array.
 * @return {Uint8Array|ArrayBuffer|string} Dados descomprimidos.
 */
declare function decompress(
    content: any,
    options?: {
        dictionary?: Uint8Array | ArrayBuffer | string;
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
 * const Zstd = require('@nginstack/engine/lib/compress/Zstd.js');
 * const File = require('@nginstack/engine/lib/io/File.js');
 *
 * const src = new File(compressedFileName);
 * const dest = File.createTempFile();
 * try {
 *   Zstd.decompressStream(src, dest);
 * } finally {
 *   src.close();
 *   dest.close();
 * }
 *
 * @param {File|MemoryStream|Uint8Array|ArrayBuffer|string} src Dados que serão descomprimidos.
 * @param {File|MemoryStream} dest Arquivo ou stream onde serão gravados os dados descomprimidos.
 * @param {Object} [options] Opções de descompressão.
 * @param {Uint8Array|ArrayBuffer|string} [options.dictionary] Dicionário que foi utilizado na
 * compressão dos dados.
 */
declare function decompressStream(
    src: File | MemoryStream | Uint8Array | ArrayBuffer | string,
    dest: File | MemoryStream
): void;
type File = import('../io/File');
type MemoryStream = import('../io/MemoryStream');
