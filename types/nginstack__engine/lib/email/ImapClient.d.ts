export = ImapClient;
/**
 * Classe responsável pela leitura de mensagens de email utilizando o protocolo IMAP.
 *
 * Esta classe possui métodos que leem e modificam nomes de caixas de entrada. Esses nomes podem
 * possuir hierarquias, como se fossem pastas e subpastas, delimitadas por um separador definido
 * pelo servidor (por exemplo, "/"). A descrição dos métodos que tratam das caixas de entrada fala
 * em "hierarquias" e "separadores" para explicar seu comportamento.
 *
 * Esta classe também possui métodos que referenciam emails a partir de conjuntos de identificadores.
 * Os emails no protocolo IMAP são identificados por um número reutilizável, e portanto não-único,
 * chamado "número de sequência". O servidor também pode implementar identificadores únicos para
 * os emails. Todos os métodos que operam sobre as mensagens possuem uma versão que utiliza números
 * de sequência (que nos referimos por `messageId` e `idSet`) e outra que utiliza identificadores
 * únicos (`uid` e `uidSet`).
 *
 * Um conjunto de números de sequência pode ser representado por um intervalo de números
 * (como "5:50"), uma enumeração de números específicos, ou uma combinação de ambos, separados por
 * vírgula (como "1:10,12,15"). O símbolo especial "*" pode ser usado para representar o maior
 * número de sequência na caixa de entrada. Um conjunto de UIDs é semelhante, mas não pode conter o
 * símbolo especial "*".
 *
 * @param {string} domain Servidor IMAP que deve ser utilizado para acessar os emails. Por exemplo,
 * "imap.gmail.com" para o Gmail e "imap.outlook.com" para o Outlook.
 * @param {number} [port] Porta usada para se conectar ao servidor IMAP. Esta classe sempre utiliza
 * uma conexão TLS segura, cuja porta padrão é 993.
 * @constructor
 * @example
 * const imapClient = new ImapClient('imap.gmail.com');
 * try {
 *   imapClient.login('nginstack@nginstack.com', appPasswd);
 *   imapClient.selectMailbox('Arquivos/XML');
 *   const ids = imapClient.search({ flags: ['unseen'] });
 *   const messages = imapClient.fetch(ids);
 *   messages.forEach(function (message) {
 *     const attachments = message.getAttachments();
 *     attachments
 *     .filter(function (attachment) {
 *       return attachment.contentType.indexOf('xml') !== -1;
 *     })
 *     .forEach(function (xmlFile) {
 *       console.log(xmlFile.textContent);
 *     });
 *   });
 * } finally {
 *   imapClient.logout();
 * }
 */
declare function ImapClient(domain: string, port?: number): void;
declare class ImapClient {
    /**
     * Classe responsável pela leitura de mensagens de email utilizando o protocolo IMAP.
     *
     * Esta classe possui métodos que leem e modificam nomes de caixas de entrada. Esses nomes podem
     * possuir hierarquias, como se fossem pastas e subpastas, delimitadas por um separador definido
     * pelo servidor (por exemplo, "/"). A descrição dos métodos que tratam das caixas de entrada fala
     * em "hierarquias" e "separadores" para explicar seu comportamento.
     *
     * Esta classe também possui métodos que referenciam emails a partir de conjuntos de identificadores.
     * Os emails no protocolo IMAP são identificados por um número reutilizável, e portanto não-único,
     * chamado "número de sequência". O servidor também pode implementar identificadores únicos para
     * os emails. Todos os métodos que operam sobre as mensagens possuem uma versão que utiliza números
     * de sequência (que nos referimos por `messageId` e `idSet`) e outra que utiliza identificadores
     * únicos (`uid` e `uidSet`).
     *
     * Um conjunto de números de sequência pode ser representado por um intervalo de números
     * (como "5:50"), uma enumeração de números específicos, ou uma combinação de ambos, separados por
     * vírgula (como "1:10,12,15"). O símbolo especial "*" pode ser usado para representar o maior
     * número de sequência na caixa de entrada. Um conjunto de UIDs é semelhante, mas não pode conter o
     * símbolo especial "*".
     *
     * @param {string} domain Servidor IMAP que deve ser utilizado para acessar os emails. Por exemplo,
     * "imap.gmail.com" para o Gmail e "imap.outlook.com" para o Outlook.
     * @param {number} [port] Porta usada para se conectar ao servidor IMAP. Esta classe sempre utiliza
     * uma conexão TLS segura, cuja porta padrão é 993.
     * @constructor
     * @example
     * const imapClient = new ImapClient('imap.gmail.com');
     * try {
     *   imapClient.login('nginstack@nginstack.com', appPasswd);
     *   imapClient.selectMailbox('Arquivos/XML');
     *   const ids = imapClient.search({ flags: ['unseen'] });
     *   const messages = imapClient.fetch(ids);
     *   messages.forEach(function (message) {
     *     const attachments = message.getAttachments();
     *     attachments
     *     .filter(function (attachment) {
     *       return attachment.contentType.indexOf('xml') !== -1;
     *     })
     *     .forEach(function (xmlFile) {
     *       console.log(xmlFile.textContent);
     *     });
     *   });
     * } finally {
     *   imapClient.logout();
     * }
     */
    constructor(domain: string, port?: number);
    /**
     * Realiza autenticação do usuário no servidor IMAP.
     *
     * @param {AuthenticationType} type Tipo de autenticação. São suportados "plain" e "xoauth2".
     * @param {PlainAuthentication|XOAuth2Authentication} options Dados para autenticação. Varia de
     * acordo com o tipo de autenticação.
     */
    authenticate(
        type: AuthenticationType,
        options: PlainAuthentication | XOAuth2Authentication
    ): void;
    /**
     * Realiza login do usuário no servidor IMAP utilizando um nome de usuário e uma senha.
     * Alguns servidores não aceitam autenticação via senha e exigem o uso de OAuth 2.0, como por
     * exemplo o Outlook. Outros aceitam apenas uso de senhas de aplicativo, como é o caso do Gmail.
     *
     * Usar o tipo "plain" com o método `authenticate` é mais recomendado, pois utiliza o comando
     * "AUTHENTICATE" do protocolo IMAP, que é mais moderno. O método `login` deve ser usado apenas
     * quando o servidor não suporta o comando "AUTHENTICATE".
     *
     * @param {string} user Nome de usuário, geralmente o email.
     * @param {string} password Senha do usuário.
     */
    login(user: string, password: string): void;
    /**
     * Realiza logout do usuário no servidor IMAP, encerrando a sessão e permitindo a autenticação em
     * outra conta utilizando o mesmo cliente.
     *
     * O logout é realizado automaticamente quando o cliente é destruído pelo garbage collector.
     * No entanto, caso seja necessário liberar recursos do servidor de forma mais eficiente,
     * recomendamos que o logout seja antecipado manualmente.
     */
    logout(): void;
    /**
     * Lista todas as caixas de entrada disponíveis no servidor IMAP e retorna uma lista de objetos,
     * onde cada objeto contém informações sobre uma caixa de entrada.
     *
     * @param {string} [referenceName] Nome da referência da caixa de entrada. Indica que as caixas
     * devem ser listadas a partir daquele nível hierárquico. Este método utiliza string vazia por
     * padrão, que indica que todas as caixas devem ser listadas a partir da raiz.
     * @param {string} [mailboxPattern] Padrão de correspondência para o nome da caixa de entrada.
     * O caractere "*" é um coringa que corresponde a qualquer sequência de zero ou mais caracteres
     * naquela posição. O caractere "%" é semelhante, e corresponde a uma sequência de caracteres que
     * não inclui o separador de hierarquia. Este método utiliza "*" por padrão. Passar uma string
     * vazia para este parâmetro retorna apenas o delimitador e a raiz da referência.
     * @returns {Mailbox[]} Lista de caixas de entrada. Cada objeto contém informações sobre uma
     * caixa de entrada. São elas:
     *  - `name`: o nome da caixa de entrada.
     *  - `delimiter`: o delimitador utilizado para hierarquia de caixas de entrada.
     *  - `attributes`: lista de atributos da caixa de entrada.
     */
    listMailboxes(referenceName?: string, mailboxPattern?: string): Mailbox[];
    /**
     * Seleciona uma caixa de entrada no servidor IMAP para que as mensagens nela possam ser acessadas.
     * Na maioria dos servidores de email, a caixa de entrada padrão é chamada de "INBOX", e é onde os
     * novos emails são entregues. Esta caixa é automaticamente selecionada no momento da autenticação.
     *
     * Apenas uma caixa de entrada pode ser selecionada por vez. Para acessar simultaneamente outras
     * caixas, é necessário criar uma nova instância do cliente IMAP.
     *
     * No momento da seleção, a anterior é desfeita. Portanto, se a nova seleção falhar, o cliente passa
     * a não possuir nenhuma caixa de entrada selecionada.
     *
     * @param {string} mailbox Nome da caixa de entrada a ser selecionada.
     */
    selectMailbox(mailbox: string): void;
    /**
     * Cria uma nova caixa de entrada no servidor IMAP.
     *
     * Tentar criar uma caixa com "INBOX" ou um nome já existente resulta em erro.
     *
     * Nomes terminados com o separador de hierarquia do servidor criam uma caixa de entrada sem o
     * separador no final do nome. Separadores em quaisquer outros lugares do nome criam as caixas
     * necessárias para que o nome seja válido. Por exemplo, "arquivos/trabalho/outros" também cria
     * "arquivos/" e "arquivos/trabalho/" se ainda não existirem.
     *
     * @param {string} mailbox Nome da nova caixa de entrada a ser criada.
     */
    createMailbox(mailbox: string): void;
    /**
     * Renomeia uma caixa de entrada no servidor IMAP.
     *
     * Tentar renomear uma caixa de entrada que não existe, ou para um nome que já existe, resulta em
     * erro.
     *
     * Se o nome possui hierarquias inferiores, então elas também são renomeadas. Por exemplo, renomear
     * "arquivos" para "dados" também renomeia "arquivos/trabalho" para "dados/trabalho".
     *
     * Novos nomes que possuam separadores criam as caixas de entrada necessárias para que o nome seja
     * válido. Por exemplo, renomear "arquivos/trabalho/outros" para "dados/trabalho/outros" também cria
     * "dados/" e "dados/trabalho/" se ainda não existirem.
     *
     * Renomear "INBOX" tem um comportamento especial. Esta operação move todos os emails de "INBOX"
     * para a nova caixa de entrada com o nome especificado, deixando "INBOX" vazia. Se o servidor
     * suporta nomes com hierarquia inferior a "INBOX", essas hierarquias não são afetadas.
     *
     * @param {string} oldName Nome da caixa de entrada a ser renomeada.
     * @param {string} newName Novo nome da caixa de entrada.
     */
    renameMailbox(oldName: string, newName: string): void;
    /**
     * Remove uma caixa de entrada no servidor IMAP.
     *
     * Tentar remover "INBOX" ou uma caixa de entrada inexistente resulta em erro.
     *
     * Este comando não remove nomes com hierarquia inferior. Por exemplo, remover "arquivos" não
     * afetará "arquivos/trabalho".
     *
     * Remover um nome que possui hierarquia inferior remove todas as mensagens daquela caixa de entrada
     * e aplica o atributo "NoSelect", tornando aquela caixa não selecionável. Tentar remover nome que
     * possui hierarquia inferior e já possui o atributo "NoSelect" resulta em erro.
     *
     * @param {string} mailbox
     */
    deleteMailbox(mailbox: string): void;
    /**
     * Copia mensagens de uma caixa de entrada para outra.
     *
     * @param {string|number|number[]} idSet Conjunto de IDs de mensagens a serem copiadas. Pode ser um
     * número, uma lista de números ou uma string com expressão suportada pelo protocolo IMAP.
     * @param {string} destinationMailbox Caixa de entrada de destino.
     */
    copy(idSet: string | number | number[], destinationMailbox: string): void;
    /**
     * Copia mensagens de uma caixa de entrada para outra. Equivalente a `copy`, mas usando *unique IDs*.
     *
     * @param {string|number|number[]} uidSet Conjunto de UIDs de mensagens a serem copiadas. Pode ser
     * um número, uma lista de números ou uma string com expressão suportada pelo protocolo IMAP.
     * @param {string} destinationMailbox Caixa de entrada de destino.
     * @see #copy
     */
    uidCopy(uidSet: string | number | number[], destinationMailbox: string): void;
    /**
     * Move mensagens de uma caixa de entrada para outra.
     *
     * Este método realiza uma cópia dos emails e apaga os originais. Caso falhe no meio da execução,
     * alguns emails podem ficar na origem e outros no destino, mas os emails nunca serão duplicados.
     *
     * O comando MOVE pode não ser suportado por alguns servidores.
     *
     * @param {string|number|number[]} idSet Conjunto de IDs de mensagens a serem movidas. Pode ser um
     * número, uma lista de números ou uma string com expressão suportada pelo protocolo IMAP.
     * @param {string} destinationMailbox Caixa de entrada de destino.
     */
    move(idSet: string | number | number[], destinationMailbox: string): void;
    /**
     * Move mensagens de uma caixa de entrada para outra. Equivalente a `move`, mas usando *unique IDs*.
     *
     * @param {string|number|number[]} uidSet Conjunto de UIDs de mensagens a serem movidas. Pode ser um
     * número, uma lista de números ou uma string com expressão suportada pelo protocolo IMAP.
     * @param {string} destinationMailbox Caixa de entrada de destino.
     * @see #move
     */
    uidMove(uidSet: string | number | number[], destinationMailbox: string): void;
    /**
     * Remove permanentemente da caixa de entrada corrente todas as mensagens marcadas com a *flag*
     * "deleted" e retorna uma lista com os IDs das mensagens removidas.
     *
     * Alguns servidores podem não implementar o fluxo de remoção de mensagens da maneira padrão,
     * necessitando que a mensagem seja primeiro movida para uma caixa de entrada especial que funciona
     * como lixeira, para só então ser marcada com a *flag* "deleted" e em seguida removida
     * permanentemente com `expunge`.
     *
     * @returns {number[]} Lista de IDs das mensagens que foram removidas.
     */
    expunge(): number[];
    /**
     * Remove permanentemente da caixa de entrada corrente todas as mensagens marcadas com a *flag*
     * "deleted" e cujo *unique ID* esteja presente no conjunto de UIDs especificado. Retorna uma
     * lista com os UIDs das mensagens removidas.
     *
     * Este método evita remoções indesejadas por erro de sincronização entre cliente e servidor, que
     * podem acontecer caso uma mensagem tenha sido marcada como "deleted" por outro cliente.
     *
     * Assim como `expunge`, este método não garante a remoção correta para todos os servidores, já
     * que algumas implementações para a remoção não seguem o fluxo padrão.
     *
     * @param {string|number|number[]} uidSet Conjunto de UIDs de mensagens a serem removidas. Pode ser
     * um número, uma lista de números ou uma string com expressão suportada pelo protocolo IMAP.
     * @returns {number[]} Lista de UIDs das mensagens que foram removidas.
     * @see #expunge
     */
    uidExpunge(uidSet: string | number | number[]): number[];
    /**
     * Altera o conjunto de flags das mensagens especificadas.
     *
     * @example
     * // Marcar mensagens 1, 3 e 5 como lidas.
     * imapClient.store([1, 3, 5], '+FLAGS (\\Seen)');
     *
     * // Marcar mensagens de 2 a 10 como não lidas.
     * imapClient.store('2:10', '-FLAGS (\\Seen)');
     *
     * // Sobrescrever as flags de todas as mensagens para lidas e respondidas e não retornar resposta.
     * imapClient.store('1:*', 'FLAGS.SILENT (\\Seen \\Answered )');
     *
     * @param {string|number|number[]} idSet Conjunto de IDs de mensagens a serem modificadas. Pode ser
     * um número, uma lista de números ou uma string com expressão suportada pelo protocolo IMAP.
     * @param {string} query Comando suportado pelo protocolo IMAP com as flags a serem modificadas.
     * @returns {ImapEmail[]} Uma lista contendo apenas as mensagens que foram atualizadas, mas sem
     * nenhum dado do corpo da mensagem. Apenas `messageId` e `flags`. Caso o sufixo ".SILENT" seja
     * usado, as mensagens não serão retornadas (mesmo que modificadas), resultando em uma lista vazia.
     */
    store(idSet: string | number | number[], query: string): ImapEmail[];
    /**
     * Altera o conjunto de flags das mensagens especificadas. Equivalente a `store`, mas usando
     * *unique IDs*.
     *
     * @param {string|number|number[]} uidSet Conjunto de UIDs de mensagens a serem modificadas. Pode
     * ser um número, uma lista de números ou uma string com expressão suportada pelo protocolo IMAP.
     * @param {string} query Comando suportado pelo protocolo IMAP com as flags a serem modificadas.
     * @see #store
     */
    uidStore(uidSet: string | number | number[], query: string): void;
    /**
     * Faz o download de mensagens da caixa de entrada corrente.
     *
     * @example
     * // Baixar apenas os cabeçalhos de todas as mensagens e não marcar como lidas
     * imapClient.fetch('1:*', '(BODY.PEEK[HEADER])');
     *
     * // Baixar o corpo das mensagens 10 e 15 no padrão RFC822.
     * imapClient.fetch([10, 15], 'RFC822')
     *
     * // Baixar apenas o tamanho da mensagem 20
     * imapClient.fetch(20, 'RFC822.SIZE');
     *
     * // Baixar o corpo das mensagens de 10 a 20 no padrão RFC822 e incluir o unique ID.
     * imapClient.fetch('10:20', '(RFC822 UID)')
     *
     * // Baixar todos os dados da mensagem 15.
     * imapClient.fetch([15]);
     *
     * @param {string|number|number[]} idSet Conjunto de IDs de mensagens a serem baixadas. Pode ser um
     * número, uma lista de números ou uma string com expressão suportada pelo protocolo IMAP.
     * @param {string} [query] Lista indicando quais dados serão baixados. Essa lista é composta por
     * itens separados por espaço e, caso haja mais de um item, encapsulados entre parênteses.
     *
     * Por padrão, a lista usada pelo método é `(FLAGS UID INTERNALDATE RFC822.SIZE RFC822)`, que traz
     * todos os dados suportados por este cliente e marca a mensagem como lida.
     *
     * Os itens suportados por este cliente são:
     *
     * - `BODY[]`: Traz o corpo completo da mensagem, incluindo cabeçalho, e marca como lida.
     * - `BODY[HEADER]`: Traz o cabeçalho da mensagem e marca como lida.
     * - `BODY.PEEK[]` e `BODY.PEEK[HEADER]`: Trazem o corpo completo e o cabeçalho da mensagem,
     *   respectivamente, mas não marcam como lida.
     * - `RFC822` e `RFC822.HEADER`: Funcionalmente equivalentes a "BODY[]" e "BODY.PEEK[HEADER]",
     *   respectivamente.
     * - `INTERNALDATE`: Traz a data de recebimento da mensagem.
     * - `RFC822.SIZE`: Traz o tamanho da mensagem em octetos no formato RFC5322.
     * - `UID`: Traz o *unique ID* da mensagem.
     * - `FLAGS`: Traz as flags da mensagem, como "\Seen", "\Answered", "\Flagged", "\Deleted", "\Draft"
     *   ou "\Recent".
     *
     * @returns {ImapEmail[]} Uma lista contendo as mensagens que foram baixadas. Independente da query,
     * as mensagens baixadas sempre conterão `messageId`.
     *
     * Cada mensagem é representada por um objeto que contém os seguintes dados:
     * - `messageId`: O identificador da mensagem.
     * - `uid`: O *unique ID* da mensagem.
     * - `size`: O RFC822.SIZE da mensagem.
     * - `flags`: A lista de *flags* da mensagem.
     * - `internalDate`: A data de recebimento da mensagem.
     * - `subject`: O assunto da mensagem.
     * - `to`: O destinatário da mensagem.
     * - `from`: O remetente da mensagem.
     * - `date`: A data de envio da mensagem.
     * - `plainBody`: O corpo da mensagem em texto simples.
     * - `htmlBody`: O corpo da mensagem em HTML.
     * - `getAttachments`: Função que retorna a lista de anexos da mensagem. Os anexos são retornados
     *   apenas se a query requisitar o corpo completo da mensagem.
     *
     * Cada anexo é representado por um objeto que contém os seguintes dados:
     * - `filename`: O nome do arquivo do anexo.
     * - `contentType`: O tipo MIME do conteúdo do anexo.
     * - `textContent`: O conteúdo do anexo em texto simples, caso o tipo do conteúdo seja textual.
     * - `data`: O conteúdo do anexo em bytes.
     */
    fetch(idSet: string | number | number[], query?: string): ImapEmail[];
    /**
     * Faz o download de mensagens da caixa de entrada corrente. Equivalente a `fetch`, mas usando
     * *unique IDs*.
     *
     * @param {string|number|number[]} uidSet Conjunto de UIDs de mensagens a serem baixadas. Pode ser
     * um número, uma lista de números ou uma string com expressão suportada pelo protocolo IMAP.
     * @param {string} [query] Lista indicando quais dados serão baixados. Essa lista é composta por
     * itens separados por espaço e, caso haja mais de um item, encapsulados entre parênteses.
     *
     * Por padrão, a lista usada pelo método é `(FLAGS UID INTERNALDATE RFC822.SIZE RFC822)`, que traz
     * todos os dados suportados por este cliente e marca a mensagem como lida.
     *
     * @returns {ImapEmail[]} Uma lista contendo as mensagens que foram baixadas. Independente da query,
     * as mensagens baixadas sempre conterão `messageId` e `uid`.
     *
     * @see #fetch
     */
    uidFetch(uidSet: string | number | number[], query?: string): ImapEmail[];
    /**
     * Busca mensagens na caixa de entrada corrente.
     *
     * @param {string|SearchOptions} query Um comando suportado pelo protocolo IMAP ou um objeto de
     * opções de busca. O comando cru proporciona uma maior flexibilidade na busca, enquanto o objeto
     * apresenta uma interface estruturada e fácil de usar.
     *
     * As opções de busca são:
     * - `since`: Filtra mensagens recebidas após uma data específica. Pode ser uma instância de
     *   Date ou uma string no formato 'dd-Mon-yyyy'.
     * - `before`: Filtra mensagens recebidas antes de uma data específica. Pode ser uma instância de
     *   Date ou uma string no formato 'dd-Mon-yyyy'.
     * - `subject`: Filtra mensagens com um assunto específico.
     * - `from`: Filtra mensagens de um remetente específico.
     * - `to`: Filtra mensagens enviadas para um destinatário específico.
     * - `flags`: Filtra mensagens com uma lista de flags específica.
     *
     * @returns {number[]} Uma lista contendo os IDs das mensagens que correspondem à busca.
     */
    search(query: string | SearchOptions): number[];
    /**
     * Busca mensagens na caixa de entrada corrente. Equivalente a `search`, mas usando *unique IDs*.
     *
     * @param {string|SearchOptions} query Um comando suportado pelo protocolo IMAP ou um objeto de
     * opções de busca.
     * @returns {number[]} Uma lista contendo os UIDs das mensagens que correspondem à busca.
     * @see #search
     */
    uidSearch(query: string | SearchOptions): number[];
}
declare namespace ImapClient {
    export {
        Mailbox,
        SearchOptions,
        PlainAuthentication,
        XOAuth2Authentication,
        AuthenticationType,
        ImapAttachment,
    };
}
/**
 * @typedef {Object} Mailbox Objeto com as informações de uma caixa de entrada.
 * @property {string} name Nome da caixa de entrada.
 * @property {string} delimiter Delimitador utilizado para hierarquia de caixas de entrada.
 * @property {string[]} attributes Lista de atributos da caixa de entrada.
 */
/**
 * @typedef {Object} SearchOptions Objeto com opções de busca usado nos métodos `search` e
 * `uidSearch`
 * @property {Date} since Filtra mensagens recebidas após uma data específica. A data local
 * é usada, desconsiderando a hora.
 * @property {Date} before Filtra mensagens recebidas antes de uma data específica. A data
 * local é usada, desconsiderando a hora.
 * @property {string} subject Filtra mensagens com um assunto específico. Apenas textos sem
 * caracteres especiais são suportados.
 * @property {string} from Filtra mensagens de um remetente específico.
 * @property {string} to Filtra mensagens enviadas para um destinatário específico.
 * @property {string[]} flags Filtra mensagens com uma lista de flags específica.
 */
/**
 * @typedef {Object} PlainAuthentication Objeto com as credenciais para autenticação quando
 * o método `authenticate` é chamado com o tipo "plain".
 * @property {string} user Usuário. O email que será acessado.
 * @property {string} password Senha. Alguns servidores necessitam que uma senha de aplicativo seja
 * gerada para efetuar o acesso via IMAP.
 */
/**
 * @typedef {Object} XOAuth2Authentication Objeto com as credenciais para autenticação quando
 * o método `authenticate` é chamado com o tipo "xoauth2".
 * @property {string} user Usuário. O email que será acessado.
 * @property {string} accessToken Token de acesso. Deve ser obtido previamente via fluxo OAuth 2.0.
 */
/**
 * @typedef {'plain'|'xoauth2'} AuthenticationType
 */
/**
 * @typedef {Object} ImapAttachment
 * @property {string} filename Nome do arquivo anexo.
 * @property {string} contentType Tipo MIME do arquivo anexo.
 * @property {string} textContent O conteúdo do anexo em texto simples, caso o tipo do conteúdo seja
 * textual.
 * @property {Uint8Array} data O conteúdo do anexo em bytes.
 * @constructor
 */
/**
 * Representa uma mensagem de email baixada utilizando uma instância do ImapClient.
 *
 * É um elemento da lista retornada pelos métodos `fetch`, `uidFetch`, `store` e `uidStore`.
 * @constructor
 */
declare function ImapEmail(): void;
declare class ImapEmail {
    /**
     * Um número atribuído pelo servidor para identificar a mensagem. Não são números únicos pois
     * podem eventualmente ser reutilizados.
     *
     * Este identificador sempre é trazido na resposta do servidor.
     *
     * @type {number}
     */
    messageId: number;
    /**
     * Um número único atribuído pelo servidor para identificar a mensagem.
     *
     * Este identificador é trazido na resposta do servidor apenas nos métodos `uidFetch`, `uidStore`,
     * ou se `fetch` for chamado com a opção `UID` listada (o que é feito por padrão).
     *
     * @type {number}
     */
    uid: number;
    /**
     * O tamanho da mensagem em octetos no formato RFC5322.
     *
     * Este valor é trazido na resposta do servidor nos métodos `fetch` e `uidFetch` apenas se
     * `RFC822.SIZE` for solicitado na query (o que é feito por padrão).
     *
     * @type {number}
     */
    size: number;
    /**
     * Data interna da mensagem, o que significa a data em que a mensagem foi recebida.
     *
     * Este valor é trazido na resposta do servidor nos métodos `fetch` e `uidFetch` apenas se
     * `INTERNALDATE` for solicitado na query (o que é feito por padrão).
     *
     * @type {Date}
     */
    internalDate: Date;
    /**
     * Data de envio da mensagem.
     *
     * Este valor é trazido na resposta do servidor nos métodos `fetch` e `uidFetch` se o cabeçalho
     * ou o corpo completo da mensagem for solicitado na query (o que é feito por padrão).
     *
     * @type {Date}
     */
    date: Date;
    /**
     * Lista de flags da mensagem.
     *
     * Esta lista é trazida na resposta do servidor nos métodos `fetch` e `uidFetch` se
     * `FLAGS` for solicitado na query (o que é feito por padrão).
     *
     * @type {string[]}
     */
    flags: string[];
    /**
     * O assunto da mensagem.
     *
     * Este valor é trazido na resposta do servidor nos métodos `fetch` e `uidFetch` se o cabeçalho
     * ou o corpo completo da mensagem for solicitado na query (o que é feito por padrão).
     *
     * @type {string}
     */
    subject: string;
    /**
     * O destinatário da mensagem.
     *
     * Este valor é trazido na resposta do servidor nos métodos `fetch` e `uidFetch` se o cabeçalho
     * ou o corpo completo da mensagem for solicitado na query (o que é feito por padrão).
     *
     * @type {string}
     */
    to: string;
    /**
     * O remetente da mensagem.
     *
     * Este valor é trazido na resposta do servidor nos métodos `fetch` e `uidFetch` se o cabeçalho
     * ou o corpo completo da mensagem for solicitado na query (o que é feito por padrão).
     *
     * @type {string}
     */
    from: string;
    /**
     * O corpo da mensagem em texto simples.
     *
     * Este valor é trazido na resposta do servidor nos métodos `fetch` e `uidFetch` se o corpo completo
     * da mensagem for solicitado na query (o que é feito por padrão).
     *
     * @type {string}
     */
    plainBody: string;
    /**
     * O corpo da mensagem em HTML.
     *
     * Este valor é trazido na resposta do servidor nos métodos `fetch` e `uidFetch` se o corpo completo
     * da mensagem for solicitado na query (o que é feito por padrão).
     *
     * @type {string}
     */
    htmlBody: string;
    /**
     * Retorna a lista de anexos da mensagem.
     *
     * Os anexos são retornados apenas se a query utilizada nos métodos `fetch` ou `uidFetch` que
     * resultou nessa mensagem como resposta requisitar o corpo completo da mensagem (o que é feito por
     * padrão).
     *
     * @returns {ImapAttachment[]} Lista de anexos da mensagem.
     *
     * Cada anexo é representado por um objeto que contém os seguintes dados:
     * - `filename`: O nome do arquivo do anexo.
     * - `contentType`: O tipo MIME do conteúdo do anexo.
     * - `textContent`: O conteúdo do anexo em texto simples, caso o tipo do conteúdo seja textual.
     * - `data`: O conteúdo do anexo em bytes.
     */
    getAttachments(): ImapAttachment[];
}
/**
 * Objeto com as informações de uma caixa de entrada.
 */
interface Mailbox {
    /**
     * Nome da caixa de entrada.
     */
    name: string;
    /**
     * Delimitador utilizado para hierarquia de caixas de entrada.
     */
    delimiter: string;
    /**
     * Lista de atributos da caixa de entrada.
     */
    attributes: string[];
}
/**
 * Objeto com opções de busca usado nos métodos `search` e
 * `uidSearch`
 */
interface SearchOptions {
    /**
     * Filtra mensagens recebidas após uma data específica. A data local
     * é usada, desconsiderando a hora.
     */
    since: Date;
    /**
     * Filtra mensagens recebidas antes de uma data específica. A data
     * local é usada, desconsiderando a hora.
     */
    before: Date;
    /**
     * Filtra mensagens com um assunto específico. Apenas textos sem
     * caracteres especiais são suportados.
     */
    subject: string;
    /**
     * Filtra mensagens de um remetente específico.
     */
    from: string;
    /**
     * Filtra mensagens enviadas para um destinatário específico.
     */
    to: string;
    /**
     * Filtra mensagens com uma lista de flags específica.
     */
    flags: string[];
}
/**
 * Objeto com as credenciais para autenticação quando
 * o método `authenticate` é chamado com o tipo "plain".
 */
interface PlainAuthentication {
    /**
     * Usuário. O email que será acessado.
     */
    user: string;
    /**
     * Senha. Alguns servidores necessitam que uma senha de aplicativo seja
     * gerada para efetuar o acesso via IMAP.
     */
    password: string;
}
/**
 * Objeto com as credenciais para autenticação quando
 * o método `authenticate` é chamado com o tipo "xoauth2".
 */
interface XOAuth2Authentication {
    /**
     * Usuário. O email que será acessado.
     */
    user: string;
    /**
     * Token de acesso. Deve ser obtido previamente via fluxo OAuth 2.0.
     */
    accessToken: string;
}
type AuthenticationType = 'plain' | 'xoauth2';
interface ImapAttachment {
    /**
     * Nome do arquivo anexo.
     */
    filename: string;
    /**
     * Tipo MIME do arquivo anexo.
     */
    contentType: string;
    /**
     * O conteúdo do anexo em texto simples, caso o tipo do conteúdo seja
     * textual.
     */
    textContent: string;
    /**
     * O conteúdo do anexo em bytes.
     */
    data: Uint8Array;
}
