export = ImageCompressorProfile;
/**
 * Classe para obtenção de compressores de imagem baseados em perfis de compressão.
 *
 * Um perfil de compressão é um conjunto de regras que define como imagens de determinados tipos
 * MIME devem ser comprimidas. Cada regra define o codificador e as opções de compressão a serem
 * utilizadas para um conjunto de um ou mais tipos MIME.
 *
 * Um objeto desta classe é construído a partir da chave do perfil de compressão desejado.
 * É possível utilizar os métodos do objeto para obter compressores de imagem para tipos MIME
 * específicos, seja a partir do código ou chave do tipo MIME, de um arquivo de imagem ou do
 * conteúdo binário de uma imagem.
 *
 * @param {number} profile Chave do perfil de compressão de imagem.
 * @constructor
 */
declare function ImageCompressorProfile(profile: number): void;
declare class ImageCompressorProfile {
    /**
     * Classe para obtenção de compressores de imagem baseados em perfis de compressão.
     *
     * Um perfil de compressão é um conjunto de regras que define como imagens de determinados tipos
     * MIME devem ser comprimidas. Cada regra define o codificador e as opções de compressão a serem
     * utilizadas para um conjunto de um ou mais tipos MIME.
     *
     * Um objeto desta classe é construído a partir da chave do perfil de compressão desejado.
     * É possível utilizar os métodos do objeto para obter compressores de imagem para tipos MIME
     * específicos, seja a partir do código ou chave do tipo MIME, de um arquivo de imagem ou do
     * conteúdo binário de uma imagem.
     *
     * @param {number} profile Chave do perfil de compressão de imagem.
     * @constructor
     */
    constructor(profile: number);
    /** @private */
    private rules_;
    /** @private */
    private mimeTypes_;
    /** @private */
    private profileKey_;
    /**
     * Chave do perfil de compressão de imagem.
     * @type {number}
     */
    profileKey: number;
    private findRuleForMimeType_;
    /**
     * Obtém um compressor de imagem para o tipo MIME informado.
     * @param {number|string} mimeType Código ou chave do tipo MIME.
     * @returns {ImageCompressor|null} Retorna uma instância de ImageCompressor se houver uma
     * regra aplicável para o tipo MIME informado.
     */
    getCompressor(mimeType: number | string): ImageCompressor | null;
    /**
     * Obtém um compressor de imagem para o arquivo informado.
     * @param {string} filePath Caminho do arquivo de imagem.
     * @returns {ImageCompressor|null} Retorna uma instância de ImageCompressor se houver uma
     * regra aplicável para o tipo MIME da imagem no arquivo informado.
     */
    getCompressorFromFile(filePath: string): ImageCompressor | null;
    /**
     * Obtém um compressor de imagem para o conteúdo binário informado.
     * @param {ArrayBuffer|Uint8Array|string} content Conteúdo binário da imagem.
     * @returns {ImageCompressor|null} Retorna uma instância de ImageCompressor se houver uma
     * regra aplicável para o tipo MIME da imagem no conteúdo informado.
     */
    getCompressorFromBytes(content: ArrayBuffer | Uint8Array | string): ImageCompressor | null;
}
import ImageCompressor = require('./ImageCompressor.js');
