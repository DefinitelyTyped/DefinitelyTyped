export = ImageCompressor;
/**
 * @typedef {Object} PngOptions
 * @property {string} [compression] Pode ser "fast" para compressão rápida ou "best" para máxima
 * compressão. O padrão é "best".
 * @property {string} [filter] Filtros são algoritmos aplicados aos bytes antes da compressão para
 * otimizá-la. Pode ser "noFilter", "sub", "up", "avg", "paeth" ou "adaptive". O padrão é "adaptive".
 */
/**
 * @typedef {Object} JpegOptions
 * @property {number} [quality] Um inteiro de 1 a 100 representando a taxa de qualidade da imagem.
 * 100 representa uma compressão sem perdas enquanto 1 representa a pior qualidade. O padrão é 75.
 * @property {string} [backgroundColor] Cor de fundo em hexadecimal. Usada para substituir
 * áreas de transparência da imagem no momento da conversão. O padrão é "#FFFFFF" (branco).
 */
/**
 * @typedef {Object} WebpOptions
 * @property {number} [quality] Um inteiro de 1 a 100 representando a taxa de qualidade da imagem.
 * 100 representa uma compressão sem perdas enquanto 1 representa a pior qualidade. O padrão é 75.
 */
/**
 * @typedef {Object} AvifOptions
 * @property {number} [quality] Um inteiro de 1 a 100 representando a taxa de qualidade da imagem.
 * 100 representa uma compressão sem perdas enquanto 1 representa a pior qualidade. O padrão é 50.
 * @property {number} [speed] Um inteiro de 1 a 10 representando a velocidade de compressão.
 * 10 representa um processo rápido com compressão mínima enquanto 1 representa um processo
 * altamente demorado e com máxima compressão. Esta opção não afeta a qualidade da imagem.
 * O padrão é 6.
 */
/**
 * Classe que disponibiliza métodos de compressão de imagem
 *
 * São suportados os seguintes formatos de entrada:
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
 * @param {string} encoder Algoritmo que será usado para codificar a imagem.
 * Pode ser "png", "jpeg", "mozjpeg", "webp" ou "avif".
 * @param {PngOptions|JpegOptions|WebpOptions|AvifOptions} [options] Opções de compressão.
 * Cada *encoder* possui um conjunto de opções específico.
 * @constructor
 */
declare function ImageCompressor(
    encoder: string,
    options?: PngOptions | JpegOptions | WebpOptions | AvifOptions
): void;
declare class ImageCompressor {
    /**
     * @typedef {Object} PngOptions
     * @property {string} [compression] Pode ser "fast" para compressão rápida ou "best" para máxima
     * compressão. O padrão é "best".
     * @property {string} [filter] Filtros são algoritmos aplicados aos bytes antes da compressão para
     * otimizá-la. Pode ser "noFilter", "sub", "up", "avg", "paeth" ou "adaptive". O padrão é "adaptive".
     */
    /**
     * @typedef {Object} JpegOptions
     * @property {number} [quality] Um inteiro de 1 a 100 representando a taxa de qualidade da imagem.
     * 100 representa uma compressão sem perdas enquanto 1 representa a pior qualidade. O padrão é 75.
     * @property {string} [backgroundColor] Cor de fundo em hexadecimal. Usada para substituir
     * áreas de transparência da imagem no momento da conversão. O padrão é "#FFFFFF" (branco).
     */
    /**
     * @typedef {Object} WebpOptions
     * @property {number} [quality] Um inteiro de 1 a 100 representando a taxa de qualidade da imagem.
     * 100 representa uma compressão sem perdas enquanto 1 representa a pior qualidade. O padrão é 75.
     */
    /**
     * @typedef {Object} AvifOptions
     * @property {number} [quality] Um inteiro de 1 a 100 representando a taxa de qualidade da imagem.
     * 100 representa uma compressão sem perdas enquanto 1 representa a pior qualidade. O padrão é 50.
     * @property {number} [speed] Um inteiro de 1 a 10 representando a velocidade de compressão.
     * 10 representa um processo rápido com compressão mínima enquanto 1 representa um processo
     * altamente demorado e com máxima compressão. Esta opção não afeta a qualidade da imagem.
     * O padrão é 6.
     */
    /**
     * Classe que disponibiliza métodos de compressão de imagem
     *
     * São suportados os seguintes formatos de entrada:
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
     * @param {string} encoder Algoritmo que será usado para codificar a imagem.
     * Pode ser "png", "jpeg", "mozjpeg", "webp" ou "avif".
     * @param {PngOptions|JpegOptions|WebpOptions|AvifOptions} [options] Opções de compressão.
     * Cada *encoder* possui um conjunto de opções específico.
     * @constructor
     */
    constructor(encoder: string, options?: PngOptions | JpegOptions | WebpOptions | AvifOptions);
    /**
     * Comprime a imagem informada utilizando o *encoder* e as opções informadas no construtor.
     *
     * @example
     * const ImageCompressor = require('@nginstack/engine/lib/compress/ImageCompressor.js');
     * const File = require('@nginstack/engine/lib/io/File.js');
     * const binaryStringToUint8Array = require('@nginstack/engine/lib/array/binaryStringToUint8Array.js');
     * const compressor = new ImageCompressor('jpeg', { quality: 70 });
     * const content = binaryStringToUint8Array(File.stringFromFile('image.png', 'binary'));
     * const compressedImage = compressor.compressBytes(content);
     *
     * @param {Uint8Array|ArrayBuffer} content Imagem de entrada em formato binário.
     * @return {Uint8Array} Imagem de saída em formato binário.
     */
    compressBytes(content: Uint8Array | ArrayBuffer): Uint8Array;
    /**
     * Comprime o arquivo de imagem no caminho de entrada informado utilizando o *encoder* e as opções
     * informadas no construtor. Será criado um arquivo com imagem comprimida no caminho de saída
     * informado. Caso já exista um arquivo no caminho informado, ele será substituído.
     *
     * @example
     * const ImageCompressor = require('@nginstack/engine/lib/compress/ImageCompressor.js');
     * const compressor = new ImageCompressor('avif', { quality: 90, speed: 9 });
     * compressor.compressFile('input.png', 'output.avif');
     *
     * @param {string} inputPath Caminho da imagem de entrada.
     * @param {string} outputPath Caminho da imagem de saída.
     */
    compressFile(inputPath: string, outputPath: string): void;
}
declare namespace ImageCompressor {
    export { PngOptions, JpegOptions, WebpOptions, AvifOptions };
}
interface PngOptions {
    /**
     * Pode ser "fast" para compressão rápida ou "best" para máxima
     * compressão. O padrão é "best".
     */
    compression?: string;
    /**
     * Filtros são algoritmos aplicados aos bytes antes da compressão para
     * otimizá-la. Pode ser "noFilter", "sub", "up", "avg", "paeth" ou "adaptive". O padrão é "adaptive".
     */
    filter?: string;
}
interface JpegOptions {
    /**
     * Um inteiro de 1 a 100 representando a taxa de qualidade da imagem.
     * 100 representa uma compressão sem perdas enquanto 1 representa a pior qualidade. O padrão é 75.
     */
    quality?: number;
    /**
     * Cor de fundo em hexadecimal. Usada para substituir
     * áreas de transparência da imagem no momento da conversão. O padrão é "#FFFFFF" (branco).
     */
    backgroundColor?: string;
}
interface WebpOptions {
    /**
     * Um inteiro de 1 a 100 representando a taxa de qualidade da imagem.
     * 100 representa uma compressão sem perdas enquanto 1 representa a pior qualidade. O padrão é 75.
     */
    quality?: number;
}
interface AvifOptions {
    /**
     * Um inteiro de 1 a 100 representando a taxa de qualidade da imagem.
     * 100 representa uma compressão sem perdas enquanto 1 representa a pior qualidade. O padrão é 50.
     */
    quality?: number;
    /**
     * Um inteiro de 1 a 10 representando a velocidade de compressão.
     * 10 representa um processo rápido com compressão mínima enquanto 1 representa um processo
     * altamente demorado e com máxima compressão. Esta opção não afeta a qualidade da imagem.
     * O padrão é 6.
     */
    speed?: number;
}
