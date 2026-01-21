export = WebSocket;
/**
 * Fornece uma interface que permite às aplicações que atuem como clientes numa conexão WebSocket.
 * A versão do protocolo utilizada é a versão 13(RFC 6455).
 * @param {string} origin A origem do cliente, como especificado na RFC 6454(não obrigatório para
 * clientes que não são browsers)
 * @constructor
 */
declare function WebSocket(origin: string): void;
declare class WebSocket {
    /**
     * Fornece uma interface que permite às aplicações que atuem como clientes numa conexão WebSocket.
     * A versão do protocolo utilizada é a versão 13(RFC 6455).
     * @param {string} origin A origem do cliente, como especificado na RFC 6454(não obrigatório para
     * clientes que não são browsers)
     * @constructor
     */
    constructor(origin: string);
    /**
     *  Abre uma conexão
     * @param {string} url Endereço de rede do servidor, contendo o prefixo ws://, indicativo de uso
     * do protocolo WebSocket
     * @param {number} [timeout] Número máximo de milissegundos para se estabelecer a conexão
     * @returns {boolean} Retorna true se a conexão foi estabelecida com sucesso
     */
    open(url: string, timeout?: number): boolean;
    /**
     * Fecha a conexão graciosamente, esvaziando antes o buffer de escrita do socket.
     * @param {number} code Código de fechamento, conforme descrito em  {@link
     * https://tools.ietf.org/html/rfc6455#section-7.4|rfc6455}
     * @param {string} reason Texto descritivo do motivo do fechamento
     */
    close(code: number, reason: string): void;
    /**
     * Envia uma mensagem Ping, indicando que a conexão ainda está ativa e aguarda um Pong
     * de confirmação
     * @param {string|ArrayBuffer} payload Dado enviado na mensagem, sendo limitado a 125 bytes
     * @param {number} [timeout] Limite máximo em segundos para completar o envio e recepção
     * da confirmação
     * @returns {ArrayBuffer} Payload de retorno, ou Null se não houve sucesso.
     */
    ping(payload: string | ArrayBuffer, timeout?: number): ArrayBuffer;
    /**
     * Envia uma mensagem de texto
     * @param {string} msg Conteúdo da mensagem
     * @returns {boolean} True se enviou com sucesso
     */
    sendTextMessage(msg: string): boolean;
    /**
     * Envia uma mensagem binária
     * @param {string|ArrayBuffer} msg Conteúdo da mensagem. Parâmetros do tipo string são
     * enviados como binário na codificação Latin1
     * @returns {boolean} True se enviou com sucesso
     */
    sendBinaryMessage(msg: string | ArrayBuffer): boolean;
    /**
     * Recebe uma mensagem
     * @param {number} timeout Tempo máximo em milissegundos para a recepção da mensagem
     * @return {string|ArrayBuffer} Conteúdo que foi lido. Será uma string, caso a mensagem
     * seja de texto, ou um objeto ArrayBuffer se a mensagem for binária. Caso não haja
     * sucesso, será retornado Null
     */
    receiveMessage(timeout: number): string | ArrayBuffer;
    /**
     * Descrição do último erro ocorrido
     * Propriedade ReadOnly
     * @type {string}
     */
    lastError: string;
}
