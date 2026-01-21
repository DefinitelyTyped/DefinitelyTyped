export = MemoryStream;
/**
 * Esta classe implementa um Memory Stream. O Memory Stream
 * possui uma API de stream, possibilitando que seja usado nas funções de serialização
 * do Dataset SaveToStream e LoadFromStream sem a necessidade de se criar um arquivo.
 *
 * Deve-se ter o cuidado para não serializar grandes Datasets em memória, pois o
 * tamanho do stream é limitado pelo tamanho da memória RAM disponível.
 * @constructor
 * @param {ArrayBuffer} [arrayBuffer] Se o parâmetro arrayBuffer for informado, o memoryStream
 * será criado
 * com uma cópia do conteúdo armazenado em arrayBuffer.
 */
declare function MemoryStream(arrayBuffer?: ArrayBuffer): void;
declare class MemoryStream {
    /**
     * Esta classe implementa um Memory Stream. O Memory Stream
     * possui uma API de stream, possibilitando que seja usado nas funções de serialização
     * do Dataset SaveToStream e LoadFromStream sem a necessidade de se criar um arquivo.
     *
     * Deve-se ter o cuidado para não serializar grandes Datasets em memória, pois o
     * tamanho do stream é limitado pelo tamanho da memória RAM disponível.
     * @constructor
     * @param {ArrayBuffer} [arrayBuffer] Se o parâmetro arrayBuffer for informado, o memoryStream
     * será criado
     * com uma cópia do conteúdo armazenado em arrayBuffer.
     */
    constructor(arrayBuffer?: ArrayBuffer);
    /**
     * Posição atual no stream.
     * @type {number}
     */
    position: number;
    /**
     * Quantidade de bytes armazenados no stream.
     * @type {number}
     */
    size: number;
    /**
     * Retorna um objeto ArrayBuffer com uma cópia do conteúdo armazenado no Stream
     * @returns {Object} ArrayBuffer com o conteúdo do Stream.
     */
    getMemoryBuffer(): any;
    /**
     * Lê o conteúdo do Stream. A leitura é realizada a partir do byte armazenado em
     * position. Position é avançado para o primeiro byte seguinte ao último byte lido.
     * @param {number} [opt_qty] Quantidade de bytes que deve ser lido do stream.
     * @returns {string} Conteúdo lido do Stream
     */
    read(opt_qty?: number): string;
    /**
     * Escreve no Stream.
     * @param {string} content String com o conteúdo a ser salvo no stream
     * @returns {number} Quantidade de bytes salvos no Stream
     */
    write(content: string): number;
}
