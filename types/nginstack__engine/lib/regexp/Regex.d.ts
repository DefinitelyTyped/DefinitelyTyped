export = Regex;
/**
 * Este é o objeto que representa uma expressão regular. Ele abstrai um regex
 * pattern, com isso, este objeto possui métodos para checar o casamento do padrão com uma string
 * qualquer. Possui também uma série de métodos acessórios para obter informações adicionais ou
 * auxiliar no casamento entre padrão e string pesquisada. Esta API é diferente da classe global
 * RegExp especificada pela linguagem JavaScript.
 *
 * Para fins de compatibilidade, este construtor também aceita a seguinte assinatura:
 * `const regex = new Regex(pattern, opt_sensitivity, opt_syntax)`.
 *
 * @example
 * const Regex = require('@nginstack/engine/lib/regexp/Regex');
 * const regex = new Regex("(\\d+)(?:\\s*)(cm|inch)");
 * @example
 * const Regex = require('@nginstack/engine/lib/regexp/Regex');
 * const regex = new Regex("*.exe", { patternSyntax: Regex.SYNTAX_WILDCARD, ignoreCase: true });
 * @example
 * const Regex = require('@nginstack/engine/lib/regexp/Regex');
 * const regex = new Regex("^\\d$", { patternSyntax: Regex.SYNTAX_REG_EXP3, dotAll: true, multiline: true });
 *
 * @constructor
 * @param {string} pattern Padrão que define o objeto.
 * @param {Object} [options] Opções para a construção da expressão regular.
 * @param {number} [options.patternSyntax] Define qual sintaxe será utilizada. Deve-se utilizar uma
 * das estáticas SYNTAX_*. O padrão é *SYNTAX_REG_EXP2*.
 * @param {boolean} [options.ignoreCase] *Flag* para tornar a busca *case insensitive*. O padrão é
 * *case sensitive*. A sensibilidade pode ser alterada por meio da propriedade `caseSensitivity`.
 * @param {boolean} [options.dotAll] *Flag* que permite que "." efetue casamento com saltos de
 * linha. Essa *flag* deve ser usada exclusivamente com a sintaxe *SYNTAX_REG_EXP3*, onde é
 * falsa por padrão. Para as outras sintaxes o "." sempre efetua o casamento com saltos de linha.
 * @param {boolean} [options.multiline] *Flag* que permite que "^" e "$" efetuem casamento com
 * saltos de linha. Essa *flag* deve ser usada exclusivamente com a sintaxe *SYNTAX_REG_EXP3*,
 * pois não é suportada por outras sintaxes.
 */
declare function Regex(
    pattern: string,
    options?: {
        patternSyntax?: number;
        ignoreCase?: boolean;
        dotAll?: boolean;
        multiline?: boolean;
    }
): void;
declare class Regex {
    /**
     * Este é o objeto que representa uma expressão regular. Ele abstrai um regex
     * pattern, com isso, este objeto possui métodos para checar o casamento do padrão com uma string
     * qualquer. Possui também uma série de métodos acessórios para obter informações adicionais ou
     * auxiliar no casamento entre padrão e string pesquisada. Esta API é diferente da classe global
     * RegExp especificada pela linguagem JavaScript.
     *
     * Para fins de compatibilidade, este construtor também aceita a seguinte assinatura:
     * `const regex = new Regex(pattern, opt_sensitivity, opt_syntax)`.
     *
     * @example
     * const Regex = require('@nginstack/engine/lib/regexp/Regex');
     * const regex = new Regex("(\\d+)(?:\\s*)(cm|inch)");
     * @example
     * const Regex = require('@nginstack/engine/lib/regexp/Regex');
     * const regex = new Regex("*.exe", { patternSyntax: Regex.SYNTAX_WILDCARD, ignoreCase: true });
     * @example
     * const Regex = require('@nginstack/engine/lib/regexp/Regex');
     * const regex = new Regex("^\\d$", { patternSyntax: Regex.SYNTAX_REG_EXP3, dotAll: true, multiline: true });
     *
     * @constructor
     * @param {string} pattern Padrão que define o objeto.
     * @param {Object} [options] Opções para a construção da expressão regular.
     * @param {number} [options.patternSyntax] Define qual sintaxe será utilizada. Deve-se utilizar uma
     * das estáticas SYNTAX_*. O padrão é *SYNTAX_REG_EXP2*.
     * @param {boolean} [options.ignoreCase] *Flag* para tornar a busca *case insensitive*. O padrão é
     * *case sensitive*. A sensibilidade pode ser alterada por meio da propriedade `caseSensitivity`.
     * @param {boolean} [options.dotAll] *Flag* que permite que "." efetue casamento com saltos de
     * linha. Essa *flag* deve ser usada exclusivamente com a sintaxe *SYNTAX_REG_EXP3*, onde é
     * falsa por padrão. Para as outras sintaxes o "." sempre efetua o casamento com saltos de linha.
     * @param {boolean} [options.multiline] *Flag* que permite que "^" e "$" efetuem casamento com
     * saltos de linha. Essa *flag* deve ser usada exclusivamente com a sintaxe *SYNTAX_REG_EXP3*,
     * pois não é suportada por outras sintaxes.
     */
    constructor(
        pattern: string,
        options?: {
            patternSyntax?: number;
            ignoreCase?: boolean;
            dotAll?: boolean;
            multiline?: boolean;
        }
    );
    /**
     * Valor da propriedade que define se o casamento deve ser *case sensitive* ou *insensitive*.
     * @type {number}
     * @see Regex.CASE_INSENSITIVE
     * @see Regex.CASE_SENSITIVE
     */
    caseSensitivity: number;
    /**
     * String de caracteres do padrão da expressão regular. Note que o padrão retornado é
     * afetado pela propriedade PatternSyntax do objeto.
     * @type {string}
     * @see #patternSyntax
     * @see #caseSensitivity
     */
    pattern: string;
    /**
     * Sintaxe que está em uso pelo objeto Regex (uma das estáticas SYNTAX_*). O objeto é criado com
     * a sintaxe SYNTAX_REG_EXP2 por padrão.
     * @type {number}
     * @readonly
     * @see #pattern
     * @see #caseSensitivity
     */
    readonly patternSyntax: number;
    /**
     * *Flag* que permite que "." efetue casamento com saltos de linha. Essa *flag* deve ser usada
     * exclusivamente com a sintaxe *SYNTAX_REG_EXP3*. Para as outras sintaxes o "." sempre efetua o
     * casamento com saltos de linha.
     * @type {boolean}
     * @see #pattern
     */
    dotAll: boolean;
    /**
     * *Flag* que permite que "^" e "$" também efetuem casamento com saltos de linha. Essa *flag* deve
     * ser usada exclusivamente com a sintaxe *SYNTAX_REG_EXP3*, pois não é suportada por outras
     * sintaxes.
     * @type {boolean}
     * @see #pattern
     */
    multiline: boolean;
    /**
     * Retorna os sub-itens encontrados de acordo com o padrão. O índice 0 corresponde ao casamento com
     * toda a expressão, o índice 1 corresponde ao casamento com a sub-expressão que está dentro do
     * primeiro par de parênteses, o índice 2 corresponde a sub-expressão presente dentro do segundo
     * par de parênteses e assim por diante.
     *
     * @example
     * const Regex = require('@nginstack/engine/lib/regexp/Regex');
     * const rx = new Regex("(\\d+)(?:\\s*)(cm|inch)");
     * const pos = rx.indexIn("Length: 189cm");
     * if (pos > -1) {
     *   const value = rx.cap(1); // "189"
     *   const unit = rx.cap(2);  // "cm"
     * }
     *
     * @param {number} matchedIndex
     * @return {string} Retorna uma string correspondente ao casamento do índice informado.
     * @see #patternSyntax
     */
    cap(matchedIndex: number): string;
    /**
     * Retorna o número de capturas conseguidas a partir da expressão regular.
     *
     * @example
     * const Regex = require('@nginstack/engine/lib/regexp/Regex');
     * const rx = new Regex("(\\d+)(?:\\s*)(cm|inch)");
     * rx.indexIn("Length: 189cm");
     * const results = [];
     * for (var i = 0; i < rx.captureCount(); ++i) {
     *   results.push(rx.cap(i))
     * }
     *
     * @return {number} Número de capturas
     * @see #cap
     * @see #indexIn
     */
    captureCount(): number;
    /**
     * Retorna uma lista de strings, onde cada elemento é uma captura.
     *
     * A primeira string na lista é a sequência de todo o casamento. Cada elemento subsequente da lista
     * contém uma string que combina com uma subexpressão (captura) da expressão regular.
     *
     * @example
     * const Regex = require('@nginstack/engine/lib/regexp/Regex');
     * const rx = new Regex("(\\ d +) (\\ s *) (cm | polegada (es))?");
     * const pos = rx.indexIn("Duração: 36 polegadas");
     * const list = rx.capturedTexts();
     * // A lista é agora ("36 polegadas", "36", "", "polegadas", "es")
     *
     * @return {Array<string>} Textos capturados.
     * @see #cap
     * @see #pos
     */
    capturedTexts(): string[];
    /**
     * Retorna uma string que explica por que um padrão regexp é inválido, caso contrário retorna
     * "no error occurred".
     * @return {string} Descrição do erro.
     */
    getErrorString(): string;
    /**
     * Retorna true se str é correspondido exatamente por esta expressão regular, caso contrário
     * retorna false.
     *
     * Observação: sintaxes anteriores a *SYNTAX_REG_EXP3* definem `matchedLength()`, `capturedTexts()`
     * e `pos()`, mesmo quando não há casamento exato, para indicar se houve casamento parcial.
     * Recomendamos que esses métodos não sejam utilizados após um `exactMatch()` malsucedido, pois
     * esta classe não suporta a funcionalidade de casamento parcial, e seu uso pode trazer resultados
     * indesejados.
     *
     * @return {boolean}
     * @param {string} str Expressão para tentar o casamento com o Regex.
     */
    exactMatch(str: string): boolean;
    /**
     * Este método tentará encontrar uma correspondência em str a partir da posição offSet. Se offSet
     * for negativo, -1 indicará o último caractere, -2 o penúltimo, e assim por diante.
     * @return {number} Retorna a posição do primeiro casamento, ou -1 se não houve casamento.
     * @param {string} str String onde será buscado o padrão.
     * @param {number} [offSet] deslocamento em str a partir do início. O casamento tentará ser
     * realizado no conteúdo após o deslocamento.
     * @param {number} [caretMode] Deve ser utilizada uma das constantes estáticas CARET_* para definir
     * este parâmetro. Define o significado de caret (^), podendo corresponder à posição offset, à
     * posição 0, ou não ter significado. A sintaxe *SYNTAX_REG_EXP3* não suporta mudança de
     * comportamento do caret por meio desse parâmetro.
     */
    indexIn(str: string, offSet?: number, caretMode?: number): number;
    /**
     * Retorna true se a string padrão é vazia, caso contrário retorna false.
     *
     * Se você chamar `exactMatch()` com um padrão vazio, com uma string vazia em seu parâmetro,
     * retornará true, caso contrário retornará falso, uma vez que ele opera sobre toda a string.
     *
     * Se você chamar `indexIn()` com um padrão vazio em qualquer cadeia ele irá retornar o offset
     * (0 por padrão), porque o padrão de vazio corresponde ao "vazio" no início da string. Neste caso
     * o valor retornado por `matchedLength()` será 0.
     * @return {boolean}
     */
    isEmpty(): boolean;
    /**
     * Retorna true se o *minimal matching* estiver ativado, caso contrário retorna false.
     * @return {boolean}
     * @see #setMinimal
     * @see #getCaseSensitivity
     * @see #setCaseSensitivity
     */
    isMinimal(): boolean;
    /**
     * Retorna verdadeiro se a expressão regular é válida, caso contrário retorna false.
     *
     * O padrão "[az" é um exemplo de um padrão inválido, uma vez que carece de um colchete final. Note
     * que a validade de uma regexp também pode depender da configuração de sintaxe, por exemplo
     * "*.html" é válido para a sintaxe SYNTAX_WILDCARD, mas é inválido para SYNTAX_REG_EXP.
     * @return {boolean}
     * @see #getErrorString
     */
    isValid(): boolean;
    /**
     * Retorna o comprimento da string do último casamento, ou -1 se não houve casamento.
     * Esta função deve ser executada apenas após uma chamada para `indexIn()`.
     * @return {number}
     * @see #exactMatch
     * @see #indexIn
     */
    matchedLength(): number;
    /**
     * Retorna a posição da enésima captura na string pesquisada. Se n é 0 (o padrão), `pos()`
     * retorna a posição do casamento completo.
     *
     * @example
     * const Regex = require('@nginstack/engine/lib/regexp/Regex');
     * const rx = new Regex("/([a-z]+)/([a-z]+)");
     * rx.indexIn( "Output /dev/null" ); // retorna 7 (posição do /dev/null)
     * rx.pos(0); // retorna 7 (posição do /dev/null)
     * rx.pos(1); // retorna 8 (posição de dev)
     * rx.pos(2); // retorna 12 (posição de null)
     *
     * @param {number} n Posição da captura na string do padrão.
     * @return {number} posição na string pesquisada da captura informada no parâmetro n.
     */
    pos(n: number): number;
    /**
     * Habilita ou desabilita o minimal matching. Se o `isMinimal` é falso, o matching será agressivo
     * (máxima), que é o padrão.
     *
     * Como a sintaxe *SYNTAX_REG_EXP3* suporta padrões com quantificadores *lazy*, `setMinimal(true)`
     * tem o efeito de inverter a voracidade dos quantificadores nesta sintaxe.
     * @param {boolean} isMinimal
     */
    setMinimal(isMinimal: boolean): void;
}
declare namespace Regex {
    let CASE_INSENSITIVE: number;
    let CASE_SENSITIVE: number;
    let CARET_AT_ZERO: number;
    let CARET_AT_OFFSET: number;
    let CARET_WONT_MATCH: number;
    let SYNTAX_REG_EXP: number;
    let SYNTAX_WILDCARD: number;
    let SYNTAX_FIXED_STRING: number;
    let SYNTAX_REG_EXP2: number;
    let SYNTAX_REG_EXP3: number;
    let SYNTAX_WILDCARD_UNIX: number;
    let SYNTAX_W3C_XML_SCHEMA_11: number;
    /**
     * Escapa todos os caracteres de *str* de modo que não tenham nenhum significado especial ao
     * serem usados como padrão em uma expressão regular. Na prática, todos os caracteres são escapados
     * exceto A-Z, a-z, 0-9 e _ (*underscore*).
     *
     * @example
     * s1 = Regex.escape("bingo");   // s1 === "bingo"
     * s2 = Regex.escape("f(x)");    // s2 === "f\\(x\\)"
     *
     * @param {string} str string que se quer escapar.
     * @return {string} string escapada.
     */
    function escape(str: string): string;
}
