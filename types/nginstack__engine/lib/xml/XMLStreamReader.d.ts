export = XMLStreamReader;
/**
 * @typedef {import('./TokenType').TokenString} TokenString
 * @private
 */
/**
 * @typedef {Object} XMLStreamReaderOptions
 * @property {boolean} [expandEmpty] Essa opção expande *tags* vazias para pares de *tags* de
 * abertura e encerramento. Por exemplo, a  *tag*
 *
 * ```
 * <example/>
 * ```
 *
 * seria lida como
 *
 * ```
 * <example></example>
 * ```
 *
 * @property {boolean} [trimText] Ao ler uma sequência de caracteres, remove os espaços em branco
 * das extremidades. Por exemplo, o XML:
 *
 * ```
 * <root>
 * <t> ex </t>
 * <root>
 * ```
 *
 * seria lido como
 *
 * ```
 * <root><t>ex</t><root>
 * ```
 */
/**
 * @typedef {Object} ResolvedAttribute
 * @property {string} name Nome completo do atributo, da exata maneira que está na *tag*.
 * @property {string} localName Nome do atributo sem prefixo.
 * @property {string} prefix Prefixo do atributo. String vazia se não possuir prefixo.
 * @property {string} namespaceUri *Namespace URI* do atributo.
 * String vazia se não possuir *namespace*.
 * @property {string} value Valor do atributo.
 */
/**
 * Implementa um parser para leitura de documentos XML através de uma API de *streaming*,
 * baseado no {@link https://en.wikipedia.org/wiki/StAX StAX}.
 *
 * O *parser* de modo geral consiste em:
 *
 * - Um conjunto métodos de leitura que avançam de diferentes maneiras em um
 * documento XML e retornam o tipo do *token* corrente.
 * - Um conjunto de propriedades que acessam informações do *token* corrente.
 * - Um conjunto de métodos de checagem do tipo do *token* corrente.
 *
 * Os tipos de *tokens* são "Declaration", "StartElement", "EndElement", "EmptyElement",
 * "Characters", "Comment", "ProcessingInstruction", "DoctypeDefinition", "CData", "EndDocument",
 * "NoToken" (para quando a leitura ainda não foi iniciada) e "Error" (para indicar que houve
 * erro na leitura).
 *
 * Os métodos de leitura utilizam o conceito de escopo, que pode ser o elemento corrente ou a raiz
 * do documento.
 *
 * No início da leitura, o escopo é a raiz do documento. Ao encontrar um "StartElement"
 * (`TokenType.START_ELEMENT`), o escopo passa a ser aquele elemento corrente. Ao encontrar um
 * "EndElement" (`TokenType.END_ELEMENT`), o escopo corrente volta a ser o escopo pai daquele
 * elemento.
 *
 * Uma vez que um erro seja relatado por um método de leitura, não é mais possível prosseguir
 * com o parsing.
 *
 * @example
 * const XMLStreamReader = require('@nginstack/engine/lib/xml/XMLStreamReader');
 *
 * const example = '<?xml version="1.0"?><notes><note>Note A</note><note>Note B</note></notes>';
 *
 * const reader = new XMLStreamReader(example);
 *
 * // Avança para o próximo token de abertura dentro do atual escopo. que seria `<notes>`.
 * // O escopo corrente passa a ser o elemento delimitado pelas tags `<notes>` e `</notes>`.
 * reader.readNextStartElement();
 *
 * if (reader.name !== 'notes') {
 *     throw new Error('Não foi encontrada a tag "notes".');
 * }
 *
 * const notes = [];
 *
 * // Avança novamente ao próximo token de abertura dentro do atual escopo,
 * // que no caso é a primeira tag `<note>` do documento.
 * reader.readNextStartElement();
 *
 * while (!reader.done && reader.name === 'note') {
 *     // Lê o token seguinte, que seria uma sequência de caracteres, e guarda o seu texto.
 *     // Observação: sempre que for possível, é recomendado que o dado seja processado em vez
 *     // de acumulado, evitando alocação de memória desnecessária.
 *     reader.readNext();
 *     notes.push(reader.text);
 *
 *     // Pula para o fim do elemento corrente, e depois busca o início do próximo elemento.
 *     reader.skipToNextStartElement();
 * }
 *
 * notes; // ['Note A', 'Note B']
 *
 * @param {string} doc Um documento XML bem-formado.
 * @param {XMLStreamReaderOptions} [options] Parâmetros de criação. São eles:
 *
 * - `trimText`: Retira automaticamente espaços em branco das extremidades das
 * sequências de caracteres lidas.
 * - `expandEmpty`: Expande automaticamente *tags* vazias para pares de *tag* de abertura e
 * encerramento de um elemento.
 *
 * Os parâmetros são falsos por padrão.
 * @see module:@nginstack/engine/lib/xml/TokenType~TokenType
 * @constructor
 */
declare function XMLStreamReader(doc: string, options?: XMLStreamReaderOptions): void;
declare class XMLStreamReader {
    /**
     * @typedef {import('./TokenType').TokenString} TokenString
     * @private
     */
    /**
     * @typedef {Object} XMLStreamReaderOptions
     * @property {boolean} [expandEmpty] Essa opção expande *tags* vazias para pares de *tags* de
     * abertura e encerramento. Por exemplo, a  *tag*
     *
     * ```
     * <example/>
     * ```
     *
     * seria lida como
     *
     * ```
     * <example></example>
     * ```
     *
     * @property {boolean} [trimText] Ao ler uma sequência de caracteres, remove os espaços em branco
     * das extremidades. Por exemplo, o XML:
     *
     * ```
     * <root>
     * <t> ex </t>
     * <root>
     * ```
     *
     * seria lido como
     *
     * ```
     * <root><t>ex</t><root>
     * ```
     */
    /**
     * @typedef {Object} ResolvedAttribute
     * @property {string} name Nome completo do atributo, da exata maneira que está na *tag*.
     * @property {string} localName Nome do atributo sem prefixo.
     * @property {string} prefix Prefixo do atributo. String vazia se não possuir prefixo.
     * @property {string} namespaceUri *Namespace URI* do atributo.
     * String vazia se não possuir *namespace*.
     * @property {string} value Valor do atributo.
     */
    /**
     * Implementa um parser para leitura de documentos XML através de uma API de *streaming*,
     * baseado no {@link https://en.wikipedia.org/wiki/StAX StAX}.
     *
     * O *parser* de modo geral consiste em:
     *
     * - Um conjunto métodos de leitura que avançam de diferentes maneiras em um
     * documento XML e retornam o tipo do *token* corrente.
     * - Um conjunto de propriedades que acessam informações do *token* corrente.
     * - Um conjunto de métodos de checagem do tipo do *token* corrente.
     *
     * Os tipos de *tokens* são "Declaration", "StartElement", "EndElement", "EmptyElement",
     * "Characters", "Comment", "ProcessingInstruction", "DoctypeDefinition", "CData", "EndDocument",
     * "NoToken" (para quando a leitura ainda não foi iniciada) e "Error" (para indicar que houve
     * erro na leitura).
     *
     * Os métodos de leitura utilizam o conceito de escopo, que pode ser o elemento corrente ou a raiz
     * do documento.
     *
     * No início da leitura, o escopo é a raiz do documento. Ao encontrar um "StartElement"
     * (`TokenType.START_ELEMENT`), o escopo passa a ser aquele elemento corrente. Ao encontrar um
     * "EndElement" (`TokenType.END_ELEMENT`), o escopo corrente volta a ser o escopo pai daquele
     * elemento.
     *
     * Uma vez que um erro seja relatado por um método de leitura, não é mais possível prosseguir
     * com o parsing.
     *
     * @example
     * const XMLStreamReader = require('@nginstack/engine/lib/xml/XMLStreamReader');
     *
     * const example = '<?xml version="1.0"?><notes><note>Note A</note><note>Note B</note></notes>';
     *
     * const reader = new XMLStreamReader(example);
     *
     * // Avança para o próximo token de abertura dentro do atual escopo. que seria `<notes>`.
     * // O escopo corrente passa a ser o elemento delimitado pelas tags `<notes>` e `</notes>`.
     * reader.readNextStartElement();
     *
     * if (reader.name !== 'notes') {
     *     throw new Error('Não foi encontrada a tag "notes".');
     * }
     *
     * const notes = [];
     *
     * // Avança novamente ao próximo token de abertura dentro do atual escopo,
     * // que no caso é a primeira tag `<note>` do documento.
     * reader.readNextStartElement();
     *
     * while (!reader.done && reader.name === 'note') {
     *     // Lê o token seguinte, que seria uma sequência de caracteres, e guarda o seu texto.
     *     // Observação: sempre que for possível, é recomendado que o dado seja processado em vez
     *     // de acumulado, evitando alocação de memória desnecessária.
     *     reader.readNext();
     *     notes.push(reader.text);
     *
     *     // Pula para o fim do elemento corrente, e depois busca o início do próximo elemento.
     *     reader.skipToNextStartElement();
     * }
     *
     * notes; // ['Note A', 'Note B']
     *
     * @param {string} doc Um documento XML bem-formado.
     * @param {XMLStreamReaderOptions} [options] Parâmetros de criação. São eles:
     *
     * - `trimText`: Retira automaticamente espaços em branco das extremidades das
     * sequências de caracteres lidas.
     * - `expandEmpty`: Expande automaticamente *tags* vazias para pares de *tag* de abertura e
     * encerramento de um elemento.
     *
     * Os parâmetros são falsos por padrão.
     * @see module:@nginstack/engine/lib/xml/TokenType~TokenType
     * @constructor
     */
    constructor(doc: string, options?: XMLStreamReaderOptions);
    /**
     * Fecha o leitor interno do XMLStreamReader.
     * Necessário chamar somente quando o *reader* foi criado usando `parseFile` e seja necessário
     * liberar o arquivo imediatamente, sem aguardar que o *Garbage Collector* o libere no momento da
     * destruição do *reader*.
     * @see #parseFile
     */
    close(): void;
    /**
     * Método de leitura padrão. Prossegue o *parsing*, retornando o próximo *token*.
     * @return {TokenString} *token* lido.
     * @see module:@nginstack/engine/lib/xml/TokenType~TokenType
     */
    readNext(): TokenString;
    /**
     * Prossegue o *parsing* até encontrar um *token* de abertura (`TokenType.START_ELEMENT`)
     * dentro do atual escopo. A busca para caso chegue ao fim do escopo.
     * @return {TokenString} token em que busca foi encerrada.
     * @see module:@nginstack/engine/lib/xml/TokenType~TokenType
     */
    readNextStartElement(): TokenString;
    /**
     * Prossegue o *parsing* até chegar ao fim do escopo corrente, que pode ser o *token* de fechamento
     * correspondente (`TokenType.END_ELEMENT`) ou o fim do documento (`TokenType.END_DOCUMENT`).
     * @return {TokenString} token em que a busca foi encerrada.
     * @see module:@nginstack/engine/lib/xml/TokenType~TokenType
     */
    skipCurrentElement(): TokenString;
    /**
     * Equivale a chamar `skipCurrentElement` e `readNextStartElement` em sequência.
     *
     * Na prática, prossegue o *parsing* até encontrar o próximo elemento irmão ou até chegar ao
     * final do escopo pai.
     * @return {TokenString} token em que a busca foi encerrada
     * @see module:@nginstack/engine/lib/xml/TokenType~TokenType
     * @see #skipCurrentElement
     * @see #readNextStartElement
     */
    skipToNextStartElement(): TokenString;
    /**
     * Informa o tipo do *token* corrente.
     * @see module:@nginstack/engine/lib/xml/TokenType~TokenType
     * @type {TokenString}
     */
    tokenType: TokenString;
    /**
     * Texto do *token* corrente.
     *
     * Para tokens do tipo `TokenType.GENERAL_REF`, será retornado o texto referente à entidade, caso
     * seja uma entidade XML conhecida. Por exemplo, para a entidade "&amp;" será retornado "&".
     * @type {string}
     */
    text: string;
    /**
     * Caso tenha ocorrido um erro na leitura, informa a string do erro. Caso contrário, informa
     * uma string vazia.
     * @type {string}
     */
    error: string;
    /**
     * Se `tokenType` for `TokenType.START_ELEMENT`, `TokenType.END_ELEMENT`
     * ou `TokenType.EMPTY_ELEMENT`, a propriedade informa o nome qualificado do *token*. O nome
     * qualificado é o nome exato como está na *tag*, incluindo o prefixo com o *namespace*.
     * Para tokens do tipo `TokenType.GENERAL_REF`, será retornado o identificador da entidade. Por
     * exemplo, para a entidade "&amp;" será retornado "amp".
     * @type {string}
     * @see module:@nginstack/engine/lib/xml/TokenType~TokenType
     */
    name: string;
    /**
     * Se `tokenType` for `TokenType.START_ELEMENT`, `TokenType.END_ELEMENT`
     * ou `TokenType.EMPTY_ELEMENT`, a propriedade informa o nome local do *token*. O nome local é
     * o nome sem prefixo.
     * @type {string}
     * @see module:@nginstack/engine/lib/xml/TokenType~TokenType
     */
    localName: string;
    /**
     * Se `tokenType` for `TokenType.START_ELEMENT`, `TokenType.END_ELEMENT`
     * ou `TokenType.EMPTY_ELEMENT`, a propriedade informa a URI associada ao *namespace*
     * a que pertence o token.
     * @type {string}
     * @see module:@nginstack/engine/lib/xml/TokenType~TokenType
     */
    namespaceUri: string;
    /**
     * Se `tokenType` for `TokenType.START_ELEMENT`, `TokenType.END_ELEMENT`
     * ou `TokenType.EMPTY_ELEMENT`, a propriedade informa o prefixo do nome do *token*.
     * @type {string}
     * @see module:@nginstack/engine/lib/xml/TokenType~TokenType
     */
    prefix: string;
    /**
     * Se o `tokenType` for `TokenType.START_ELEMENT` ou `TokenType.EMPTY_ELEMENT`, a propriedade
     * informa uma lista com os atributos resolvidos daquele *token*.
     *
     * Cada elemento da lista é um objeto contendo as seguintes informações do atributo:
     * `name`, `localName`, `prefix`, `namespaceUri` e `value`.
     * @type {Array<ResolvedAttribute>}
     */
    resolvedAttributes: ResolvedAttribute[];
    /**
     * Se o `tokenType` for `TokenType.START_ELEMENT` ou `TokenType.EMPTY_ELEMENT`, a propriedade
     * informa um objeto com os pares de nome local e valor dos atributos daquele *token*.
     * A propriedades desse objeto são *case insensitive*.
     * @type {*}
     */
    attributes: any;
    /**
     * Informa a codificação utilizada do documento XML. Deve ser acessado apenas após a leitura da
     * declaração do XML. Caso o XML não possua declaração, ou caso ainda não tenha sido lida,
     * o leitor assumirá que o documento está codificado em UTF-8.
     *
     * @type {string}
     * @see #tokenType
     */
    documentEncoding: string;
    /**
     * Se o `tokenType` for `TokenType.DECLARATION`, a propriedade informa
     * a versão do documento XML.
     * @type {string}
     * @see #tokenType
     */
    documentVersion: string;
    /**
     * Se o `tokenType` for `TokenType.DECLARATION`, a propriedade informa se
     * o documento foi declarado como *standalone*.
     * @type {boolean}
     * @see #tokenType
     */
    standaloneDocument: boolean;
    /**
     * Retorna true se `tokenType` for igual a `TokenType.DECLARATION`.
     * @return {boolean}
     * @see #tokenType
     */
    isDeclaration(): boolean;
    /**
     * Retorna true se `tokenType` for igual a `TokenType.START_ELEMENT`.
     * @return {boolean}
     * @see #tokenType
     */
    isStartElement(): boolean;
    /**
     * Retorna true se `tokenType` for igual a `TokenType.END_ELEMENT`.
     * @return {boolean}
     * @see #tokenType
     */
    isEndElement(): boolean;
    /**
     * Retorna true se `tokenType` for igual a `TokenType.EMPTY_ELEMENT`.
     * @return {boolean}
     * @see #tokenType
     */
    isEmptyElement(): boolean;
    /**
     * Retorna true se `tokenType` for igual a `TokenType.CHARACTERS`.
     * @return {boolean}
     * @see #tokenType
     */
    isCharacters(): boolean;
    /**
     * Retorna true se `tokenType` for igual a `TokenType.COMMENT`.
     * @return {boolean}
     * @see #tokenType
     */
    isComment(): boolean;
    /**
     * Retorna true se `tokenType` for igual a `TokenType.PROCESSING_INSTRUCTION`.
     * @return {boolean}
     * @see #tokenType
     */
    isProcessingInstruction(): boolean;
    /**
     * Retorna true se `tokenType` for igual a `TokenType.DOCTYPE_DEFINITION`.
     * @return {boolean}
     * @see #tokenType
     */
    isDTD(): boolean;
    /**
     * Retorna true se `tokenType` for igual a `TokenType.CDATA`.
     * @return {boolean}
     * @see #tokenType
     */
    isCData(): boolean;
    /**
     * Retorna true se `tokenType` for igual a `TokenType.GeneralRef`.
     * @return {boolean}
     * @see #tokenType
     */
    isGeneralRef(): boolean;
    /**
     * Retorna true se `tokenType` for igual a `TokenType.ERROR`. Isso acontece quando uma chamada a
     * algum dos métodos de leitura resulta em erro. A string do erro pode ser acessada pela propriedade
     * `XMLStreamReader.error`.
     * @return {boolean}
     * @see #tokenType
     * @see #error
     */
    hasError(): boolean;
    /**
     * True se a leitura tiver sido concluída.
     *
     * É possível que a leitura tenha sido concluída em sucesso ou em erro. Isso pode ser verificado
     * usando o método `hasError`.
     * @see #hasError
     * @type {boolean}
     */
    done: boolean;
}
declare namespace XMLStreamReader {
    export { parseFile, TokenString, XMLStreamReaderOptions, ResolvedAttribute };
}
/**
 * Faz o *parsing*  diretamente sobre um arquivo XML sem carregá-lo todo em memória.
 * @param {string} filePath O caminho do arquivo com um documento XML bem-formado
 * que sofrerá o *parsing*.
 * @param {XMLStreamReaderOptions} [options] Os mesmos parâmetros do construtor:
 * `trimText` e `expandEmpty.
 * @return {XMLStreamReader} Uma instância do *parser* associada ao arquivo XML.
 * @see #close
 */
declare function parseFile(filePath: string, options?: XMLStreamReaderOptions): XMLStreamReader;
type TokenString = import('./TokenType').TokenString;
interface XMLStreamReaderOptions {
    /**
     * Essa opção expande *tags* vazias para pares de *tags* de
     * abertura e encerramento. Por exemplo, a  *tag*
     *
     * ```
     * <example/>
     * ```
     *
     * seria lida como
     *
     * ```
     * <example></example>
     * ```
     */
    expandEmpty?: boolean;
    /**
     * Ao ler uma sequência de caracteres, remove os espaços em branco
     * das extremidades. Por exemplo, o XML:
     *
     * ```
     * <root>
     * <t> ex </t>
     * <root>
     * ```
     *
     * seria lido como
     *
     * ```
     * <root><t>ex</t><root>
     * ```
     */
    trimText?: boolean;
}
interface ResolvedAttribute {
    /**
     * Nome completo do atributo, da exata maneira que está na *tag*.
     */
    name: string;
    /**
     * Nome do atributo sem prefixo.
     */
    localName: string;
    /**
     * Prefixo do atributo. String vazia se não possuir prefixo.
     */
    prefix: string;
    /**
     * *Namespace URI* do atributo.
     * String vazia se não possuir *namespace*.
     */
    namespaceUri: string;
    /**
     * Valor do atributo.
     */
    value: string;
}
