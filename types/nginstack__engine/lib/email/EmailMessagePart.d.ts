export = EmailMessagePart;
/**
 * Classe agregada a classe EmailMessage que tem por objetivo representar um parte do e-mail
 * (conteúdo do corpo do e-email,  arquivo anexo, etc.)
 * @constructor
 * @see EmailMessage
 */
declare function EmailMessagePart(): void;
declare class EmailMessagePart {
    /**
     * Referência para a parte da mensagem dono da parte da mensagem.
     *
     * As partes da mensagem vem codificadas em forma de árvore e esta referência indica a
     * parte da mensagem que é mãe desta parte.
     * @type {EmailMessagePart}
     */
    ownerMessagePart: EmailMessagePart;
    /**
     * Parte inicial do tipo MIME, (i.e. 'application', 'image', 'text', ...)
     * @type {string}
     */
    primary: string;
    /**
     * Representação da codificação usada para codificar esta parte da mensagem. (i.e. 'base64')
     * @type {string}
     */
    encoding: string;
    /**
     * Representação do charset usado nesta parte da mensagem. (i.e. 'iso-8859-1')
     * @type {string}
     */
    charset: string;
    /**
     * Charset padrão usado para codificar partes de mensagens que não tenham especificação
     * de charset. O valor padrão, segundo os documentos RFCs, é 'ISO-8859-1'.
     * Mas o Microsoft Outlook usa codificações do Windows por padrão. Esta propriedade permite
     * decodificar partes textuais a partir de algumas versões defeituosas do Microsoft Outlook.
     * @type {string}
     */
    defaultCharset: string;
    /**
     * Parte secundário do tipo MIME desta parte da mensagem (i.e. 'mixed', 'jpeg', 'gif')}
     * @type {string}
     */
    secondary: string;
    /**
     * Descrição da parte da mensagem.
     * @type {string}
     */
    description: string;
    /**
     * Disposição da parte da mensagem. (i.e. 'inline' or 'attachment')}
     * @type {string}
     */
    disposition: string;
    /**
     * Identificador único da parte do conteúdo da parte da mensagem.
     * @type {string}
     */
    contentID: string;
    /**
     * Delimitador de partes de mensagens cujo o tipo MIME é multipart
     * @type {string}
     */
    boundary: string;
    /**
     * Nome do arquivo de uma parte de mensagem binária.`
     * @type {string}
     */
    fileName: string;
    /**
     * Corpo da parte da mensagem codificado(original)
     * @type {string}
     */
    partBody: string;
    /**
     * Array contendo todos os cabeçalhos da parte da mensagem
     * @type {Array}
     */
    headers: any[];
    /**
     * Em partes de mensagens cujo o tipo mime é 'multipart' esta propriedade contém
     * a parte da mensagem que fica entre as primeiras linhas da mensagem e o primeiro delimitador.
     * @type {string}
     */
    prePart: string;
    /**
     * Em partes de mensagens cujo o tipo mime é 'multipart' esta propriedade contém
     * a parte da mensagem que fica entre o último delimitador e o fim da mensagem.
     * @type {string}
     */
    postPart: string;
    /**
     * Nível da parte da mensagem na árvore de partes de mensagem.
     * @type {number}
     */
    level: number;
    /**
     * Conteúdo da parte da mensagem decodificado.
     * @type {string}
     */
    content: string;
}
