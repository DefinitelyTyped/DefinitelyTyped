export = Email;
/**
 * @typedef {import('../dbkey/DBKey')} DBKey
 * @private
 */
/**
 * @typedef {import('../io/MemoryStream')} MemoryStream
 * @private
 */
/**
 * @typedef {import('../io/File')} File
 * @private
 */
/**
 * Classe responsável pelo envio de e-mails no sistema.
 *
 * O servidor SMTP que será utilizado no envio de e-mails é determinado pela propriedade
 * {@link #smtpServer}. Nela pode ser informada a chave de um servidor SMTP cadastrado
 * na classe de dados "/Dados/Sistema/Serviços/Servidores SMTP" (-1898146235) ou uma string
 * contendo o endereço de rede e porta do servidor SMTP no formato "address:port". Caso ela
 * não seja informada, será utilizado o servidor SMTP padrão configurado no sistema.
 *
 * Se não houver necessidade de direcionar determinados e-mails para um servidor SMTP específico
 * de saída, é recomendado que sempre seja utilizado o servidor padrão e as propriedades
 * {@link #smtpServer}, {@link #securityMode}, {@link #senderEmailAddress},
 * {@link #userName} e {@link #password} não sejam preenchidas. A propriedade {@link #senderName}
 * pode opcionalmente ser preenchida caso se deseje indicar um nome de remetente diferente
 * do padrão com o objetivo de identificar melhor a origem ou o motivo dos e-mails. Alguns
 * servidores SMTP podem ignorar esta propriedade e sempre utilizar o nome do usuário
 * associado à conta SMTP utilizada.
 * @constructor
 * @example
 * // Exemplo utilizando a configuração padrão do sistema
 * const email = new Email();
 * email.addRecipient('Nome destinatário', 'usuario@exemplo.com.br');
 * email.subject = 'Teste de envio de e-mail';
 * email.htmlContent = '<b>Olá mundo.</b>';
 * email.send();
 * @example
 * // Exemplo utilizando um servidor SMTP específico
 * const email = new Email();
 * email.smtpServer = smtpServerKey;
 * email.addRecipient('Nome destinatário', 'usuario@exemplo.com.br');
 * email.subject = 'Teste de envio de e-mail';
 * email.htmlContent = '<b>Olá mundo.</b>';
 * email.send();
 * @example
 * // Exemplo utilizando um servidor SMTP não cadastrado no sistema
 * const email = new Email();
 * email.smtpServer = 'smtp.gmail.com:465';
 * email.securityMode = 'smtps';
 * email.userName = 'sistema@empresa.com.br';
 * email.password = 'password';
 * email.senderName = 'Nome do remetente';
 * email.senderEmailAddress = 'sistema@empresa.com.br';
 * email.addRecipient('Nome destinatário', 'usuario@exemplo.com.br');
 * email.subject = 'Teste de envio de e-mail';
 * email.htmlContent = '<b>Olá mundo.</b>';
 * email.send();
 */
declare function Email(): void;
declare class Email {
    /**
     * Servidor SMTP que deve ser utilizado para enviar este e-mail. Caso esta propriedade não seja
     * preenchida, será utilizado o servidor SMTP padrão configurado na base de dados, caso haja um.
     *
     * Pode ser informada a chave de um servidor SMTP configurado na classe de dados
     * "Servidores SMTP" (-1898146235) ou o nome ou endereço IP do servidor no formato "address:port".
     *
     * Ao informar a chave de um servidor SMTP configurado na base de dados, as propriedades
     * `securityMode`, `senderName`, `senderEmailAddress`, `userName` e `password` são configuradas
     * com base nas configurações cadastradas do servidor SMTP. Essa configuração automática não
     * ocorre quando é informado o nome de rede ou endereço IP de um servidor SMTP. Nesse caso,
     * essas propriedades precisam ser informadas adequadamente para que o envio possa ser realizado.
     * @type {DBKey|number|string}
     */
    smtpServer: DBKey | number | string;
    /**
     * Modo de segurança utilizado no envio do e-mail para o servidor SMTP. Valores possíveis:
     * 'insecure', 'starttls' e 'smtps'.
     * @type {string}
     */
    securityMode: string;
    /**
     * Se o valor for `true`, estabelece um canal seguro SSL/TLS assim que estabelece a conexão.
     * @type {boolean}
     * @deprecated Utilize a propriedade `securityMode`.
     */
    fullSsl: boolean;
    /**
     * Se o valor for `true`, será realizado automaticamente o upgrade para um canal seguro SSL/TLS
     * desde que o servidor SMTP suporte.
     * @type {boolean}
     * @deprecated Utilize a propriedade `securityMode`.
     */
    autoTls: boolean;
    /**
     * Nome do remetente. Caso não seja informado, será utilizado o nome do remetente padrão associado
     * à conta SMTP.
     *
     * **Importante**: alguns servidores SMTP podem ignorar esta configuração e sempre enviar o
     * email utilizando o nome associado à conta SMTP utilizada. Caso esteja sendo utilizada
     * uma conta SMTP cadastrada no sistema, o nome informado também pode ser ignorado caso a opção
     * "Forçar remetente padrão" esteja habilitada.
     * @type {string}
     */
    senderName: string;
    /**
     * Endereço de e-mail do remetente. Caso não seja informado, será utilizado o endereço do
     * remetente padrão associado à conta SMTP.
     *
     * **Importante**: alguns servidores SMTP podem ignorar esta configuração e sempre enviar o
     * email utilizando o endereço associado à conta SMTP utilizada. Caso esteja sendo utilizada
     * uma conta SMTP cadastrada no sistema, o endereço informado também pode ser ignorado caso a opção
     * "Forçar remetente padrão" esteja habilitada.
     * @type {string}
     */
    senderEmailAddress: string;
    /**
     * Endereço de e-mail para o qual o destinatário deve enviar a resposta desta mensagem.
     * @type {string}
     */
    replyToAddress: string;
    /**
     * Nome de usuário do remetente no servidor de SMTP.
     * @type {string}
     */
    userName: string;
    /**
     * Senha do remetente no servidor de SMTP.
     * @type {string}
     */
    password: string;
    /**
     * Token de acesso para autenticação do remetente no servidor de SMTP.
     * @type {string}
     */
    accessToken: string;
    /**
     * Tipo de autenticação utilizada para autenticar o remetente no servidor de SMTP. Pode ser
     * "plain" ou "xoauth2". O padrão é "plain".
     *
     * Caso utilize "xoauth2", a propriedade `accessToken` deve ser preenchida com um token
     * de acesso válido. No caso de "plain", a propriedade `password` deve ser preenchida.
     * @type {string}
     */
    authType: string;
    /**
     * Assunto do e-mail.
     * @type {string}
     */
    subject: string;
    /**
     * Conteúdo do e-mail.
     * @type {string}
     */
    content: string;
    /**
     * Conteúdo do e-mail no formato HTML.
     * @type {string}
     */
    htmlContent: string;
    /**
     * Propriedade descontinuada. Os logs sempre são gerados e gravados no Engine responsável
     * pelo envio e na tabela de log transacional (iLog).
     * @type {boolean}
     */
    logEnabled: boolean;
    /**
     * Propriedade descontinuada que sempre retornará uma string vazia. Os logs devem ser lidos
     * no Engine responsável pelo envio ou na tabela de log transacional (iLog).
     * @type {string}
     */
    log: string;
    /**
     * Define um cabeçalho adicional do e-mail.
     * @example
     * // Solicita uma confirmação de leitura do e-mail caso o cliente de email do
     * // destinatário suporte esta funcionalidade e ela esteja habilitada, o que não
     * // é comum.
     * email.setHeader('Disposition-Notification-To', 'user@example.com');
     *
     * @param {string} name Nome do cabeçalho.
     * @param {string} value Valor do cabeçalho.
     */
    setHeader(name: string, value: string): void;
    /**
     * Obtém o valor de um cabeçalho configurado previamente pelo método `setHeader`.
     * @param {string} name Nome do cabeçalho.
     * @return {string} Valor do cabeçalho ou uma string vazia caso o cabeçalho não tenha sido
     * definido.
     */
    getHeader(name: string): string;
    /**
     * Adiciona um arquivo anexo ao e-mail.
     * @param {string} name Nome do arquivo anexo(Não precisa ser o nome original).
     * @param {string|ArrayBuffer} content Conteúdo do arquivo anexo.
     */
    addAttachment(name: string, content: string | ArrayBuffer): void;
    /**
     * Adiciona um destinatário com apenas o e-mail, ou nome e e-mail.
     * @param {string} nameOrEmail Nome ou email do destinatário.
     * @param {string} [email] Endereço de email do destinatário, necessário somente se o
     * mesmo não foi informado como o primeiro parâmetro.
     * @example
     * email.addRecipient('maria@exemplo.com.br');
     * email.addRecipient('Maria Silva','maria@exemplo.com.br');
     */
    addRecipient(nameOrEmail: string, email?: string): void;
    /**
     * Adiciona um destinatário que receberá uma cópia oculta da mensagem (CCO).
     * @param {string} nameOrEmail Nome ou Email do destinatário.
     * @param {string} [email] Endereço de email do destinatário, necessário somente se o mesmo não
     * foi informado como o primeiro parâmetro.
     * @example
     * email.addRecipientBcc('maria@exemplo.com.br');
     * email.addRecipientBcc('Maria Silva','maria@exemplo.com.br');
     */
    addRecipientBcc(nameOrEmail: string, email?: string): void;
    /**
     * Adiciona um arquivo no e-mail que poderá ser referenciado pelo corpo HTML.
     *
     * O conteúdo adicionado deverá ser referenciado pelo Content-ID retornado por
     * este método, conforme o exemplo a seguir.
     * @example
     * const content = virtualFS.getFileContent(key);
     * const cid = email.addRelatedContent(DBKey.from(key).str('iName'), content);
     * email.htmlContent = '<img src="cid:' + cid + '">';
     *
     * @param {string} name Nome do conteúdo.
     * @param {string|ArrayBuffer} content Conteúdo adicionado.
     * @return {string} Identificador único do conteúdo adicionado no e-mail. Será retornada
     * uma string vazia se o tamanho do conteúdo for zero.
     */
    addRelatedContent(name: string, content: string | ArrayBuffer): string;
    /**
     * Limpa os dados do e-mail.
     */
    clear(): void;
    /**
     * Envia o e-mail de acordo com configuração do servidor SMTP.
     *
     * O e-mail será enviado a partir do Engine em execução caso ele seja um servidor ou se a
     * propriedade "Enviar pelo servidor de aplicação" do servidor SMTP não estiver habilitada. Caso
     * essa propriedade esteja ativa, o e-mail será encaminhado para o Engine servidor para que este
     * possa encaminhar o e-mail para o servidor SMTP.
     *
     * Este método se comportará de forma equivalente ao {@link #sendLocally} caso a propriedade
     * {@link #smtpServer} esteja preenchida com o endereço de rede e a porta de um servidor SMTP.
     */
    send(): void;
    /**
     * Envia o e-mail a partir do Engine corrente.
     *
     * **Importante**: a partir da versão 71 do Engine é recomendado que os e-mails
     * sempre sejam enviados pelo método `send` da classe `Email`. Esse método leva
     * em consideração a configuração do servidor SMTP e redireciona automaticamente para
     * o Engine servidor caso seja necessário.
     */
    sendLocally(): void;
    /**
     * Escreve dados no conteúdo do e-mail e adiciona uma quebra de linha no final.
     */
    write(content: any): void;
    /**
     * Grava o e-mail no arquivo ou stream informado.
     * @example
     * const file = new File(path);
     * try {
     *   email.saveToStream(file);
     * } finally {
     *   file.close();
     * }
     * @param {File|MemoryStream} stream Objeto stream onde e-mail será gravado.
     * @see #loadFromStream
     */
    saveToStream(stream: File | MemoryStream): void;
    /**
     * Carrega o e-mail a partir de arquivo ou stream.
     * @example
     * const email = new Email();
     * const file = new File(path);
     * try {
     *   email.loadFromStream(file);
     * } finally {
     *   file.close();
     * }
     * @param {File|MemoryStream} stream Objeto stream que contém o e-mail a ser restaurado.
     * @see #saveToStream
     */
    loadFromStream(stream: File | MemoryStream): void;
}
declare namespace Email {
    export { hasDefaultSMTPSettings, encryptSmtpPassword, DBKey, MemoryStream, File };
}
/**
 * Verifica se há um servidor SMTP configurado como padrão na base de dados.
 * @return {boolean} True se houver um servidor SMTP padrão configurado.
 */
declare function hasDefaultSMTPSettings(): boolean;
/**
 * Criptografa a senha do servidor SMTP a fim de permitir que ela possa ser gravada
 * no cadastro de servidores SMTP da base de dados com um nível adicional de segurança.
 *
 * **Importante**: este método permite a gravação de senhas na base de dados com um maior
 * nível de segurança, no entanto essa segurança não deve ser considerada inviolável. Por
 * esse motivo, as credenciais do servidor SMTP devem ser únicas para o sistema e não
 * devem ser compartilhadas com outros serviços. Elas também devem ser renovadas
 * periodicamente.
 * @param {DBKey|number} smtpServer Chave do cadastro do servidor SMTP na base de dados.
 * @param {string} password Senha no servidor SMTP. A senha informada deve ter no máximo
 * 256 caracteres.
 * @return {string} Senha criptografada. A senha criptografada retornada possui um tamanho superior
 * ao da senha informada e deve ser esperada uma *string* de até 512 caracteres. Os dados
 * retornados são codificados em Base85 e podem ser gravados diretamente em colunas
 * textuais da base de dados sem a necessidade de codificações adicionais.
 */
declare function encryptSmtpPassword(smtpServer: DBKey | number, password: string): string;
type DBKey = import('../dbkey/DBKey');
type MemoryStream = import('../io/MemoryStream');
type File = import('../io/File');
