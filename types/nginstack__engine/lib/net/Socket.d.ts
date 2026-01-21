export = Socket;
/**
 * Classe que permite a comunicação de rede por meio do protocolo TCP.
 * @param {string} remoteHost Ip ou nome do servidor ao qual o socket irá conectar.
 * @param {number} remotePort Porta do servidor ao qual o socket irá se conectar.
 * @param {Object} [options] Opções da conexão.
 * @param {boolean} [options.useTls] Estabelece a conexão utilizando um canal TLS seguro. Para
 * utilizar esta opção, o nome do servidor no parâmetro `remoteHot` deve ser válido de acordo com
 * o certificado recebido do servidor.
 * @constructor
 */
declare function Socket(
    remoteHost: string,
    remotePort: number,
    options?: {
        useTls?: boolean;
    }
): void;
declare class Socket {
    /**
     * Classe que permite a comunicação de rede por meio do protocolo TCP.
     * @param {string} remoteHost Ip ou nome do servidor ao qual o socket irá conectar.
     * @param {number} remotePort Porta do servidor ao qual o socket irá se conectar.
     * @param {Object} [options] Opções da conexão.
     * @param {boolean} [options.useTls] Estabelece a conexão utilizando um canal TLS seguro. Para
     * utilizar esta opção, o nome do servidor no parâmetro `remoteHot` deve ser válido de acordo com
     * o certificado recebido do servidor.
     * @constructor
     */
    constructor(
        remoteHost: string,
        remotePort: number,
        options?: {
            useTls?: boolean;
        }
    );
    /**
     * Endereço IP do servidor ao qual o socket está conectado.
     * @type {string}
     * @readonly
     */
    readonly remoteAddress: string;
    /**
     * Nome do servidor ao qual o socket está conectado.
     * @type {string}
     * @readonly
     */
    readonly remoteHost: string;
    /**
     * Porta do servidor ao qual o socket está conectado.
     * @type {number}
     * @readonly
     */
    readonly remotePort: number;
    /**
     * Endereço IP local utilizado para estabelecer a conexão.
     * @type {string}
     * @readonly
     */
    readonly localAddress: string;
    /**
     * Nome de rede associado ao IP local utilizado para estabelecer a conexão.
     * @type {string}
     */
    localHost: string;
    /**
     * Porta local utilizada para estabelecer a conexão.
     * @type {number}
     */
    localPort: number;
    /**
     * Determina se a conexão foi estabelecida com o servidor.
     * @type {boolean}
     */
    connected: boolean;
    /**
     * Abre a conexão.
     */
    open(): void;
    /**
     * Fecha a conexão.
     */
    close(): void;
    /**
     * Lê uma sequência de bytes do socket.
     * @param {number} length Quantidade de bytes que serão lidos.
     * @param {number} [timeout] Tempo limite em milissegundos para a leitura dos dados. Caso não
     * seja informado, serão aguardados 60 segundos.
     * @return {string} Conteúdo que foi lido.
     */
    read(length: number, timeout?: number): string;
    /**
     * Lê uma sequência de bytes até encontrar uma quebra de linha.
     * @param {number} [timeout] Tempo limite em milissegundos para a leitura dos dados. Caso não
     * seja informado, serão aguardados 60 segundos.
     * @return {string} Conteúdo que foi lido.
     */
    readln(timeout?: number): string;
    /**
     * Lê uma sequência de bytes do socket, mas sem retirar esses dados do buffer de leitura do socket.
     * @param {number} length Quantidade de bytes que serão lidos.
     * @param {number} [timeout] Tempo limite em milissegundos para a leitura dos dados. Caso não
     * seja informado, serão aguardados 60 segundos.
     * @return {string} Conteúdo que foi lido.
     */
    peek(length: number, timeout?: number): string;
    /**
     * Escreve uma sequência de bytes do socket.
     * @param {string|Uint8Array|ArrayBuffer} content Conteúdo que será enviado. Valores do
     * tipo *string* são transmitidos na codificação *Latin-1*.
     * @param {number} [timeout] Tempo limite em milissegundos para a escrita dos dados. Caso não
     * seja informado, serão aguardados 60 segundos.
     */
    write(content: string | Uint8Array | ArrayBuffer, timeout?: number): void;
}
