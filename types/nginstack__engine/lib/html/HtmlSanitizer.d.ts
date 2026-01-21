export = HtmlSanitizer;
/**
 * Classe usada para a sanitização de conteúdo HTML, prevenindo falhas de segurança comuns(cross-site
 * scripting, layout breaking e clickjacking) em decorrência da mesclagem com conteúdo HTML de
 * origem não confiável. Ela mantém uma lista de tags, atributos e esquemas permitidos, e
 * caso um elemento HTML de uma string em sanitização não esteja nessas listas, ele é excluído.
 * Uma instância de HtmlSanitizer é inicializada automaticamente com uma parametrização conservadora.
 * @constructor
 */
declare function HtmlSanitizer(): void;
declare class HtmlSanitizer {
    /**
     * Adiciona tag(s) à lista de tags permitidas pela sanitização
     * @param {string|string[]} tags uma tag ou um array de tags permitidas
     */
    addAllowedTags(tags: string | string[]): void;
    /**
     * Adiciona atributo(s) à lista de atributos permitidas para uma tag
     * @param {string} tag nome da tag, ou o caractere curinga(asterisco) para inserir um atributo
     * válido para qualquer tag
     * @param {string|string[]} attributes atributo ou array de atributos permitidos. Se o parâmetro
     * tag for o caractere curinga, o atributo pode ser sufixado também por um caractere coringa,
     * definindo-se assim um prefixo de atributo válido para qualquer tag.
     */
    addAllowedTagAttributes(tag: string, attributes: string | string[]): void;
    /**
     * Adiciona esquema(s) à lista de esquemas permitidos em URLs.
     * @param {string|string[]} schemes esquema ou array de esquemas permitidos.
     */
    addAllowedUrlSchemes(schemes: string | string[]): void;
    /**
     * Remove tag da lista de tags permitidos.
     * @param {string} tag nome da tag a ser removida. Se for informado o caractere coringa(asterisco),
     * a lista de tags permitidos será limpa.
     * @returns {boolean} *true* se sucesso
     */
    removeAllowedTag(tag: string): boolean;
    /**
     * Remove atributo da lista de atributos de tags permitidos.
     * @param {string} tag nome da tag cujo atributo será excluído na lista de atributos permitidos,
     * podendo ser o caractere coringa(asterisco)
     * @param {string} [opt_attrib] nome do atributo. Se *tag* for o caractere coringa, e *opt_attrib* seja
     * também o caractere coringa ou mesmo não seja informado, todos os atributos serão removidos das listas
     * de atributos de tags permitidos. Se *tag* for o caractere coringa, mas *opt_attrib* seja um identificador
     * de atributo, este atributo será removido de todas as listas de atributos de tags permitidos. Se *tag*
     * for um identificador de tag, e *opt_attrib* for o caractere coringa, a lista de atributos permitidos
     * para a tag *tag* será limpa. Caso não seja o caractere coringa, o atributo especificado será removido
     * da lista de atributos permitidos para a tag especificada.
     * @returns {boolean} *true* se sucesso
     */
    removeAllowedTagAttribute(tag: string, opt_attrib?: string): boolean;
    /**
     * Remove esquema da lista de esquemas permitidos em URLs.
     * @param {string} scheme nome da esquema a ser removido da lista. Se for informado o caractere
     * coringa(asterisco), a lista de esquemas permitidos será limpa.
     * @returns {boolean} *true* se sucesso
     */
    removeAllowedUrlScheme(scheme: string): boolean;
    /**
     * Retorna uma cópia da lista de tags permitidas pela sanitização
     * @returns {string[]} lista de tags permitidas
     */
    getAllowedTags(): string[];
    /**
     * Retorna uma cópia do mapa de atributos permitidos para cada tag pela sanitização.
     * @returns {Object} representando um mapa, onde os nomes de propriedades correspondem aos nomes das
     * tags e seus valores são arrays de strings contento os nomes dos atributos
     */
    getAllowedTagAttributes(): any;
    /**
     * Retorna uma cópia da lista de esquemas de URLs permitidos pela sanitização
     * @returns {string[]} lista de esquemas permitidos
     */
    getAllowedUrlSchemes(): string[];
    /**
     * Realiza a sanitização de uma string HTML com a parametrização previamente definida.
     * @param {string} content string HTML
     * @returns {string} o conteúdo sanitizado
     */
    clean(content: string): string;
}
declare namespace HtmlSanitizer {
    /**
     * Método de classe que faz a sanitização de uma string HTML com uma parametrização conservadora
     * @param {string} content string HTML
     * @returns {string} o conteúdo sanitizado
     */
    function cleanHtml(content: string): string;
    /**
     * Método de classe que transforma uma string num HTML não formatado. Use essa função em lugares
     * onde o padrão HTML suporta textos sem restrições, como o atributo *title* ou em conteúdo de parágrafos.
     * @param {string} content String a ser sanitizada.
     * @returns {string} O conteúdo sanitizado na forma mais estrita
     */
    function cleanText(content: string): string;
}
