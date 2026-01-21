export = Pop3;
/**
 * @typedef {Object} ServerStatus
 * @property {number} messageCount Quantidade de mensagens no servidor de POP3.
 * @property {number} messagesSize Somatório dos tamanhos de todas as mensagens no servidor de POP3.
 */
/**
 * @typedef {Object} Pop3MessageInfo
 * @property {number} messageNumber Número da mensagem no servidor.
 * @property {number} messageSize Tamanho da mensagem em bytes.
 */
/**
 * @typedef {Object} Pop3Response
 * @property {string} fullResult Resposta completa do servidor excluindo a linha de status.
 * @property {string} statusLine Linha de status da resposta do servidor.
 */
/**
 * Classe que implementa um cliente do protocolo POP3 (Post Office Protocol Version 3) definido
 * pelo RFC 1939.
 * @param {string} host Nome do host ou endereço IP do servidor POP3.
 * @param {number} port Número da porta do servidor POP3.
 * @param {boolean} useSsl Se `true`, a comunicação entre o Engine e o servidor POP3 será feita
 * através de um canal seguro SSL/TLS.
 * @constructor
 * @example
 * const pop3 = new Pop3('pop.gmail.com', 995, true);
 * pop3.login('enginePop3', 'xxxxxx');
 * const emailSource = pop3.retrieve(1);
 *
 * const emailMessage = new EmailMessage();
 * emailMessage.decode(emailSource);
 *
 * const messagesParts = emailMessage.messagesParts;
 * let parts = '';
 * messagesParts.forEach(function (message) {
 *   parts += message.content + '\n';
 * });
 */
declare function Pop3(host: string, port: number, useSsl: boolean): void;
declare class Pop3 {
    /**
     * @typedef {Object} ServerStatus
     * @property {number} messageCount Quantidade de mensagens no servidor de POP3.
     * @property {number} messagesSize Somatório dos tamanhos de todas as mensagens no servidor de POP3.
     */
    /**
     * @typedef {Object} Pop3MessageInfo
     * @property {number} messageNumber Número da mensagem no servidor.
     * @property {number} messageSize Tamanho da mensagem em bytes.
     */
    /**
     * @typedef {Object} Pop3Response
     * @property {string} fullResult Resposta completa do servidor excluindo a linha de status.
     * @property {string} statusLine Linha de status da resposta do servidor.
     */
    /**
     * Classe que implementa um cliente do protocolo POP3 (Post Office Protocol Version 3) definido
     * pelo RFC 1939.
     * @param {string} host Nome do host ou endereço IP do servidor POP3.
     * @param {number} port Número da porta do servidor POP3.
     * @param {boolean} useSsl Se `true`, a comunicação entre o Engine e o servidor POP3 será feita
     * através de um canal seguro SSL/TLS.
     * @constructor
     * @example
     * const pop3 = new Pop3('pop.gmail.com', 995, true);
     * pop3.login('enginePop3', 'xxxxxx');
     * const emailSource = pop3.retrieve(1);
     *
     * const emailMessage = new EmailMessage();
     * emailMessage.decode(emailSource);
     *
     * const messagesParts = emailMessage.messagesParts;
     * let parts = '';
     * messagesParts.forEach(function (message) {
     *   parts += message.content + '\n';
     * });
     */
    constructor(host: string, port: number, useSsl: boolean);
    host: string;
    port: number;
    useSsl: boolean;
    socket_: Socket;
    /**
     * Carimbo de data e hora do servidor remoto, se suportado após a conexão ser estabelecida.
     * @type {string}
     * @private
     */
    private timestamp_;
    /**
     * Tempo limite em milissegundos para aguardar resposta de requisições ao servidor de POP3.
     * @type {number}
     */
    timeout: number;
    /**
     * Comando que deve ser utilizado na autenticação do usuário. Valores possíveis: 'pass', 'apop' e
     * 'xoauth2'. O valor padrão é `pass`.
     *
     * Caso o comando utilizado seja `xoauth2`, o parâmetro `credential` do método
     * `login` deve ser o token de acesso do usuário. Para os comandos `pass` e `apop`, o parâmetro
     * `credential` deve ser a senha do usuário.
     * @type {string}
     * @see #login
     */
    authCommand: string;
    /** @private */
    private authCommand_;
    private readResult_;
    private sendCommand_;
    private authLogin_;
    private authApop_;
    private authXoauth2_;
    /**
     * Realiza a autenticação do usuário no servidor de POP3.
     * @param {string} username Nome do usuário no servidor de POP3.
     * @param {string} credential Senha do usuário no servidor de POP3 ou token de acesso, dependendo do
     * comando de autenticação utilizado. O comando de autenticação é definido pela propriedade
     * `authCommand`. Os comandos `apop` e `pass` utilizam a senha do usuário, já o comando
     * `xoauth2` utiliza o token de acesso.
     * @example
     * const pop3 = new Pop3('pop.gmail.com', 995, true);
     * pop3.login('enginePop3', 'xxxxxx');
     * @see #authCommand
     */
    login(username: string, credential: string): void;
    /**
     * Encerra a sessão com o servidor de POP3 e efetiva a marcação de mensagens como lidas ou excluída.
     */
    logout(): void;
    /**
     * Envia o comando NOOP para o servidor POP3, esse comando é utilizado para manter a conexão ativa
     * sem realizar nenhuma operação adicional.
     */
    noop(): void;
    /**
     * Envia o comando RSET para o servidor POP3. Esse comando restaura o estado da sessão, desmarcando
     * qualquer mensagem marcada para exclusão.
     */
    reset(): void;
    /**
     * Obtém a quantidade de mensagens não lidas no servidor e o tamanho total das mensagens em bytes.
     * @returns {ServerStatus} Um objeto com as informações de mensagens no servidor. As mensagens
     * marcadas como excluídas não são contabilizadas pelo `status`.
     * @example
     * const pop3 = new Pop3('pop.gmail.com', 995, true);
     * pop3.login('enginePop3', 'xxxxxx');
     * const status = pop3.status();
     * const result = 'Quantidade de Mensagens: ' + status.messagesCount +
     *   ' - Tamanho em bytes: ' + status.messagesSize + ' bytes.';
     */
    status(): ServerStatus;
    /**
     * Lista o número da mensagem e o seu respectivo tamanho em bytes.
     *
     * Opcionalmente, pode ser informado um número de mensagem. Caso seja informado, o comando LIST
     * retornará apenas as informações dessa mensagem específica.
     * @param {number} [messageNumber] Número da mensagem no servidor POP3.
     * @returns {Pop3MessageInfo[]} Array de objetos contendo informações das mensagens.
     * @example
     * const pop3 = new Pop3('pop.gmail.com', 995, true);
     * pop3.login('enginePop3', 'xxxxxx');
     * const list = pop3.list();
     * let result = '';
     * for (let i = 0; i < list.length; i++) {
     *   result += 'Número da mensagem: ' + list[i].messageNumber +
     *     ' tamanho da mensagem em bytes: ' + list[i].messageSize + ' bytes.\n';
     * }
     */
    list(messageNumber?: number): Pop3MessageInfo[];
    /**
     * Obtém o conteúdo de uma mensagem do servidor de POP3 e marca a mensagem como lida.
     * @param {number} messageNumber Número da mensagem no servidor POP3.
     * @returns {string} Conteúdo do e-mail devolvido pelo servidor POP3, excluindo a linha que indica
     * se a operação foi executada com sucesso.
     * @example
     * const pop3 = new Pop3('pop.gmail.com', 995, true);
     * pop3.login('enginePop3','xxxxxx');
     * const message = pop3.retrieve(1);
     */
    retrieve(messageNumber: number): string;
    /**
     * Marca uma mensagem no servidor de POP3 como excluída. A efetivação da deleção é realizada
     * no `logout`. O comando `delete` não necessariamente apaga a mensagem do servidor de POP3, em
     * alguns servidores a mensagem é apenas marcada como lida.
     * @param {number} messageNumber Número da mensagem no servidor POP3.
     * @example
     * const pop3 = new Pop3('pop.gmail.com', 995, true);
     * pop3.login('enginePop3', 'xxxxxx');
     * pop3.delete(1);
     */
    delete(messageNumber: number): void;
}
declare namespace Pop3 {
    export { ServerStatus, Pop3MessageInfo, Pop3Response };
}
import Socket = require('../net/Socket.js');
interface ServerStatus {
    /**
     * Quantidade de mensagens no servidor de POP3.
     */
    messageCount: number;
    /**
     * Somatório dos tamanhos de todas as mensagens no servidor de POP3.
     */
    messagesSize: number;
}
interface Pop3MessageInfo {
    /**
     * Número da mensagem no servidor.
     */
    messageNumber: number;
    /**
     * Tamanho da mensagem em bytes.
     */
    messageSize: number;
}
interface Pop3Response {
    /**
     * Resposta completa do servidor excluindo a linha de status.
     */
    fullResult: string;
    /**
     * Linha de status da resposta do servidor.
     */
    statusLine: string;
}
