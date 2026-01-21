export = GzipFile;
/**
 * Classe que permite trabalhar com arquivos Gzip. Objetos desta classe podem
 * ser utilizados da mesma forma que um objeto da classe File.
 * @param {string} fileName Nome do arquivo
 * @param {string} mode Modo como o arquivo deve ser aberto. Seguem abaixo as
 * opções disponíveis:
 *
 * - openRead: descomprimir um arquivo.
 * - openWrite: escrever informações em um arquivo comprimido. Abrir com este modo trunca o tamanho
 * do arquivo para zero.
 * - create: criar novo arquivo comprimido.
 *
 * Caso um arquivo seja aberto com a opção openRead e não esteja compactado, o Gzip lerá
 * como arquivo padrão.
 *
 * O Gzip não suporta a opção openReadWrite, que permitiria adicionar ao conteúdo já existente.
 * @param {number} level Nível de compressão. Deve ser informado um número de
 * 0 a 9, sendo maior a compressão quanto mais alto for o nível.
 * @constructor
 */
declare function GzipFile(fileName: string, mode: string, level: number): void;
declare class GzipFile {
    /**
     * Classe que permite trabalhar com arquivos Gzip. Objetos desta classe podem
     * ser utilizados da mesma forma que um objeto da classe File.
     * @param {string} fileName Nome do arquivo
     * @param {string} mode Modo como o arquivo deve ser aberto. Seguem abaixo as
     * opções disponíveis:
     *
     * - openRead: descomprimir um arquivo.
     * - openWrite: escrever informações em um arquivo comprimido. Abrir com este modo trunca o tamanho
     * do arquivo para zero.
     * - create: criar novo arquivo comprimido.
     *
     * Caso um arquivo seja aberto com a opção openRead e não esteja compactado, o Gzip lerá
     * como arquivo padrão.
     *
     * O Gzip não suporta a opção openReadWrite, que permitiria adicionar ao conteúdo já existente.
     * @param {number} level Nível de compressão. Deve ser informado um número de
     * 0 a 9, sendo maior a compressão quanto mais alto for o nível.
     * @constructor
     */
    constructor(fileName: string, mode: string, level: number);
    /**
     * Escreve uma string no arquivo comprimido.
     * @example
     * var file = new GzipFile('myCompressedFile.gz', 'create')
     * file.write('Texto a ser comprimido')
     *
     * @param {string} content Dado que será comprimido.
     * @see GzipFile.writeln
     */
    write(content: string): void;
    /**
     * Escreve uma string acrescida de um salto de linha ("\r\n") no arquivo comprimido.
     * @example
     * var file = new GzipFile('myCompressedFile.gz', 'create')
     * file.writeln('Linha 1')
     * file.writeln('Linha 2')
     *
     * @param {string} content Dado que será comprimido.
     * @see GzipFile.write
     */
    writeln(content: string): void;
    /**
     * Lê uma string descomprimida do arquivo a partir da posição atual.
     * @example
     * var file = new GzipFile('myCompressedFile.gz')
     * var decompressedContent = file.read()
     *
     * @param {number} [size] Quantidade de bytes descomprimidos que devem ser lidos.
     * Caso não seja informado, será retornado o conteúdo do arquivo a partir da posição atual.
     * @return {string}
     * @see GzipFile.readln
     */
    read(size?: number): string;
    /**
     * Lê uma linha descomprimida do arquivo a partir da posição atual.
     * @example
     * var file = new GzipFile( 'myCompressedFile.gz')
     * var line1 = file.readln()
     * var line2 = file.readln()
     * @return {string}
     * @see GzipFile.read
     */
    readln(): string;
    /**
     * Método não suportado em arquivos Gzip.
     */
    clear(): void;
    /**
     * Força a atualização física do arquivo, garantindo que os dados não estão no buffer em memória.
     * Este método é desaconselhado, pois causa perda de performance e diminui a taxa de compressão.
     */
    flush(): void;
    /**
     * Fecha o arquivo imediatamente, permitindo que um outro processo possa ler o arquivo sem
     * depender da execução do Garbage Collector do JavaScript.
     */
    close(): void;
    /**
     * Posição atual do arquivo descomprimido.
     * @type {number}
     */
    position: number;
    /**
     * Indica se o final do arquivo foi atingido.
     * @type {boolean}
     */
    eof: boolean;
    /**
     * Propriedade não suportada.
     * @type {number}
     */
    size: number;
}
declare namespace GzipFile {
    let NO_COMPRESSION: number;
    let BEST_SPEED: number;
    let BEST_COMPRESSION: number;
    let DEFAULT_COMPRESSION: number;
}
