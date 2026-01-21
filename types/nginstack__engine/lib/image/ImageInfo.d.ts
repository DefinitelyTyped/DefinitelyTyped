export = ImageInfo;
/** @module @nginstack/engine/lib/image/ImageInfo */
/** @typedef {''|'a8'|'l1'|'la1'|'rgb1'|'rgba1'|'l2'|'la2'|'rgb2'|'rgba2'|'l4'|'la4'|'rgb4'|'rgba4'|'l8'|'rgb8'|'rgba8'|'l16'|'la16'|'rgb16'|'rgba16'|'bgr8'|'bgra8'} ColorType */
/** @typedef {''|'noTransforms'|'rotate90'|'rotate180'|'rotate270'|'flipHorizontal'|'flipVertical'|'rotate90FlipH'|'rotate270FlipH'} Orientation */
/**
 * @typedef {Object} ImageInfoResult
 * @property {string} mimeType Formato da imagem.
 * @property {number} width Largura da imagem em pixels.
 * @property {number} height Altura da imagem em pixels.
 * @property {boolean} hasAnimation Indica se a imagem possui animação. Identificação suportada para
 * PNG e WebP. GIFs sempre retornam true nesse campo.
 * @property {ColorType} colorType Tipo de cor da imagem. Não suportado para AVIF.
 * @property {Orientation} orientation Orientação da imagem. Não suportado para AVIF.
 * @property {Record<string, *>|null} exif Metadados EXIF da imagem, quando disponíveis. Dados TIFF
 * ou de GPS são agrupados em objetos filhos de "exif", acessíveis pelas chaves "tiff" e "gps".
 * Tanto os dados diretamente em "exif" quanto os dados em "tiff" e "gps" são acessíveis pelo
 * nome padronizado da tag. Não suportado para AVIF.
 */
/**
 * Esta classe agrupa métodos estáticos que permitem obter informações e metadados de uma imagem a
 * partir do caminho de um arquivo ou diretamente dos bytes da imagem.
 *
 * `ImageInfo.fromFile` via de regra consome menos memória, pois há um tratamento para que apenas a
 * quantidade suficiente de bytes seja lida para obter as informações. Já no caso de
 * `ImageInfo.fromBytes`, normalmente a imagem inteira está carregada em memória, e qualquer
 * otimização visando reduzir a quantidade de bytes carregados não garante o funcionamento correto
 * da função.
 *
 * São suportados os seguintes formatos de imagem:
 * - AVIF (apenas mimeType, width, height)
 * - BMP
 * - DDS
 * - OpenEXR
 * - Farbfeld
 * - GIF
 * - HDR
 * - ICO
 * - JPEG
 * - PNG
 * - PNM
 * - QOI
 * - TGA
 * - TIFF
 * - WebP
 *
 * @constructor
 */
declare function ImageInfo(): void;
declare class ImageInfo {}
declare namespace ImageInfo {
    export { fromFile, fromBytes, ColorType, Orientation, ImageInfoResult };
}
/**
 * Obtém informações de uma imagem a partir do seu caminho em disco.
 * @param {string} path Caminho do arquivo de imagem.
 * @returns {ImageInfoResult} Objeto com as informações da imagem.
 * @example
 * const ImageInfo = require('@nginstack/engine/lib/image/ImageInfo.js');
 * const info = ImageInfo.fromFile('caminho/para/animated.png');
 * // Exemplo de retorno:
 * // {
 * //   "height": 400,
 * //   "width": 480,
 * //   "orientation": "noTransforms",
 * //   "exif": null,
 * //   "mimeType": "image/png",
 * //   "hasAnimation": true,
 * //   "colorType": "rgba8"
 * // }
 */
declare function fromFile(path: string): ImageInfoResult;
/**
 * Obtém informações de uma imagem diretamente de um bloco de bytes em memória.
 *
 * Esta função trata as *strings* como se fossem uma sequência de bytes no formato conhecido
 * por "Binary String", onde cada caractere da *string* representa um byte do conteúdo binário.
 * @param {Uint8Array|ArrayBuffer|string} bytes Dados binários da imagem.
 * @returns {ImageInfoResult} Objeto com as informações da imagem.
 * @example
 * const ImageInfo = require('@nginstack/engine/lib/image/ImageInfo.js');
 * // Supondo que "imageBytes" seja um buffer com os dados da imagem
 * const info = ImageInfo.fromBytes(imageBytes);
 * // Exemplo de retorno:
 * // {
 * //   "height": 720,
 * //   "orientation": "rotate90",
 * //   "width": 1280,
 * //   "exif": {
 * //     "gps": {
 * //       "gpsLatitude": "3 deg 46 min 38.35841426 sec S",
 * //       "gpsLongitudeRef": "W",
 * //       "gpsLatitudeRef": "S",
 * //       "gpsLongitude": "38 deg 28 min 55.0070629 sec W"
 * //     },
 * //     "tiff": {
 * //       "orientation": "row 0 at right and column 0 at top",
 * //       "compression": "JPEG",
 * //       "jpegInterchangeFormatLength": 2690,
 * //       "jpegInterchangeFormat": 12684,
 * //     },
 * //     "dateTimeOriginal": "2025-10-20 06:50:12",
 * //   },
 * //   "mimeType": "image/jpeg",
 * //   "hasAnimation": false,
 * //   "colorType": "rgb8"
 * // }
 */
declare function fromBytes(bytes: Uint8Array | ArrayBuffer | string): ImageInfoResult;
type ColorType =
    | ''
    | 'a8'
    | 'l1'
    | 'la1'
    | 'rgb1'
    | 'rgba1'
    | 'l2'
    | 'la2'
    | 'rgb2'
    | 'rgba2'
    | 'l4'
    | 'la4'
    | 'rgb4'
    | 'rgba4'
    | 'l8'
    | 'rgb8'
    | 'rgba8'
    | 'l16'
    | 'la16'
    | 'rgb16'
    | 'rgba16'
    | 'bgr8'
    | 'bgra8';
type Orientation =
    | ''
    | 'noTransforms'
    | 'rotate90'
    | 'rotate180'
    | 'rotate270'
    | 'flipHorizontal'
    | 'flipVertical'
    | 'rotate90FlipH'
    | 'rotate270FlipH';
interface ImageInfoResult {
    /**
     * Formato da imagem.
     */
    mimeType: string;
    /**
     * Largura da imagem em pixels.
     */
    width: number;
    /**
     * Altura da imagem em pixels.
     */
    height: number;
    /**
     * Indica se a imagem possui animação. Identificação suportada para
     * PNG e WebP. GIFs sempre retornam true nesse campo.
     */
    hasAnimation: boolean;
    /**
     * Tipo de cor da imagem. Não suportado para AVIF.
     */
    colorType: ColorType;
    /**
     * Orientação da imagem. Não suportado para AVIF.
     */
    orientation: Orientation;
    /**
     * Metadados EXIF da imagem, quando disponíveis. Dados TIFF
     * ou de GPS são agrupados em objetos filhos de "exif", acessíveis pelas chaves "tiff" e "gps".
     * Tanto os dados diretamente em "exif" quanto os dados em "tiff" e "gps" são acessíveis pelo
     * nome padronizado da tag. Não suportado para AVIF.
     */
    exif: Record<string, any> | null;
}
