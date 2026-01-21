export = Zlib;
/**
 * Classe que disponibiliza a biblioteca Zlib (www.zlib.org), permitindo a
 * compressão e descompressão de dados através dos algoritmos Inflate e Deflate.
 * Também são publicados os algoritmos de checksum crc32 e o adler32.
 *
 * Não construa instâncias de ZLib. Ao invés, utilize os métodos e propriedades estáticas desta
 * classe.
 * @constructor
 * @see Zlib.compress
 * @see Zlib.decompress
 */
declare function Zlib(): void;
declare class Zlib {}
declare namespace Zlib {
    let NO_COMPRESSION: number;
    let BEST_SPEED: number;
    let BEST_COMPRESSION: number;
    let DEFAULT_COMPRESSION: number;
    /**
     * Método de classe que comprime uma String.
     *
     * @example
     *  var data = 'Um texto muito grande';
     *  var compressData = Zlib.compress(data);
     *
     * @param {string|ArrayBuffer|Uint8Array} content Dado que será comprimido.
     * @param {number} [opt_level] Nível de compressão. Deve ser informado um número
     * de 0 a 9, sendo maior a compressão quanto mais alto for o nível.
     * @return {string}
     * @see Zlib.decompress
     */
    function compress(content: string | ArrayBuffer | Uint8Array, opt_level?: number): string;
    /**
     * Método de classe que descomprime uma String comprimida pela biblioteca Zlib.
     *
     * @example
     *  var data = 'Um texto muito grande';
     *  var compressData = Zlib.compress(data);
     *  var decompressData = Zlib.decompress(compressData);
     *  if (decompressData != compressData){
     *    throw new Error('Ops...')
     *  }
     *
     * @param {string} content Dado que será descomprimido.
     * @param {number} windowsBit O parâmetro windowsBit é o logaritmo base 2 do tamanho do buffer
     * de histórico (windows size) usado quando o dado foi comprimido.
     * Seu valor deve ser entre 8 e 15 para as mais recentes versões da Zlib. Quando seu
     * valor é negativo, o cabeçalho padrão do gzip é suprimido.
     * Este é um recurso não documentado da biblioteca zlib usado para compatibilidade com o
     * formato de arquivo do unzip.
     * @return {string}
     * @see Zlib.compress
     */
    function decompress(content: string, windowsBit: number): string;
    /**
     * Calcula o checksum CRC (Cyclic Redundancy Check) de uma String.
     *
     * @example
     *  var data = 'Um texto muito grande'
     *  var crc32 = Zlib.crc32(data)
     *  if (crc32 != previousCrc32 ){
     *    throw new Error('Os dados mudaram.')
     *  }
     *
     * @param {string} content Dado do qual será calculado o checksum.
     * @param {number} [opt_initialCrc] Este parâmetro é utilizado para informar o
     * valor inicial do checksum, permitindo calcular um checksum de uma série de
     * Strings separadas.
     * @return {number} Checksum do string
     * @see Zlib.adler32
     */
    function crc32(content: string, opt_initialCrc?: number): number;
    /**
     * Calcula o checksum Adler-32 de uma String. O checksum Adler-32 é tão confiável quando
     * um CRC32, mas pode ser calculado mais rapidamente.
     *
     * @example
     * var ZipFile = require('@nginstack/engine/lib/compress/Zlib');
     * var data = 'Um texto muito grande.'
     * var adler32 = Zlib.adler32(data)
     * if (adler32 != previousAdler32 ){
     *   throw new Error('Os dados mudaram.')
     * }
     * @param {string} content Dado do qual será calculado o checksum.
     * @param {number} [opt_initialAdler] Este parâmetro é utilizado para informar o
     * valor inicial do checksum, permitindo calcular um checksum de uma série de
     * Strings separadas.
     * @return {number} Checksum do string
     * @see #crc32
     */
    function adler32(content: string, opt_initialAdler?: number): number;
}
