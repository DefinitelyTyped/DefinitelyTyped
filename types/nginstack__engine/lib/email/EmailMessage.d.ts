export = EmailMessage;
/**
 * @typedef {import('./EmailMessageHeader')} EmailMessageHeader
 * @private
 */
/**
 * Classe responsável por decodificar mensagem de e-mail.
 * @constructor
 * @example
 * var pop3 = new Pop3("pop.gmail.com", 995, true)
 * pop3.login("enginePop3", "xxxxxx")
 * var mailSource = pop3.retrieve( 1 )
 *
 * var emailMessage = new EmailMessage()
 * emailMessage.decode( mailSource )
 *
 * var parte1 = emailMessage.messagesParts[0].content
 * var parte2 = emailMessage.messagesParts[1].content
 * var parte3 = emailMessage.messagesParts[2].content
 */
declare function EmailMessage(): void;
declare class EmailMessage {
    /**
     * Objeto com informações de cabeçalho do e-mail
     * @type {EmailMessageHeader}
     */
    header: EmailMessageHeader;
    /**
     * Array contendo todas a partes do e-mail.<br>
     * São exemplos de partes do e-mail: Texto do corpo do e-mail e anexos.
     * @type {Array}
     * @see EmailMessagePart
     */
    messagesParts: any[];
    /**
     * Decodifica o código do e-mail informado preenchendo a propriedade header com as
     * informações de cabeçalho e o vetor messagesParts com o as partes da mensagem.
     * @param {string} mailSource Código fonte do e-mail
     */
    decode(mailSource: string): void;
}
declare namespace EmailMessage {
    export { EmailMessageHeader };
}
type EmailMessageHeader = import('./EmailMessageHeader');
