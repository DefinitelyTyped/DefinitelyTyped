export = FieldGroup;
/**
 * Classe com a finalidade de agrupar campos que possuam um contexto em comum.
 * @param {string} name Nome descritivo do agrupamento
 * @constructor
 * @see module:@nginstack/engine/lib/classdef/Field#group
 */
declare function FieldGroup(name: string, ...args: any[]): void;
declare class FieldGroup {
    /**
     * Classe com a finalidade de agrupar campos que possuam um contexto em comum.
     * @param {string} name Nome descritivo do agrupamento
     * @constructor
     * @see module:@nginstack/engine/lib/classdef/Field#group
     */
    constructor(name: string, ...args: any[]);
    /** @private */
    private name_;
    label: string;
    id: number;
    /**
     * Nome do grupo de campos.
     * @type {string}
     */
    name: string;
    /** @private */
    private label_;
    /**
     * Grade em que o grupo está definido.
     * @type {Object}
     * @see module:@nginstack/web-framework/lib/grid/Grid
     */
    parent: any;
    /**
     * CSS a ser usado na exibição do grupo
     * @type {string}
     * @private
     */
    private css;
    /**
     * Determina se o agrupamento deve ser escrito sem exibir sua lista de fields,
     * caso seja definido como "true" ainda será possível expandir o agrupamento
     * pela interface da grade, clicando sobre seu label
     * @default false
     * @type {boolean}
     */
    collapsed: boolean;
    /**
     * Determina se o rótulo deve ser tratado para remover tags que possam ser
     * utilizadas com o objetivo de injetar scripts maliciosos em ataques do tipo
     * [Cross Site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/).
     *
     * Ao desativar esta propriedade, é de crítica importância que algum tipo de validação ou
     * sanitização seja realizada no conteúdo a ser escrito na tela.
     * @type {boolean}
     */
    autoSanitize: boolean;
    /**
     * Indica que o grupo não possui rótulo (label) e que portanto não deve ser exibido
     * na interface da grade.
     * Utilizado para agrupar campos que não devem ser destacados visualmente.
     * @type {boolean}
     * @private
     */
    private unnamed;
    /** @private */
    private unnamed_;
    private setFieldsProperties;
    /**
     * Palavras que são reservadas e não devem ser usadas pelo
     * FieldGroup.getStyleText().
     * @type Array
     * @private
     */
    private reservedWords;
    private parseStylePropertyName;
    private getStyleText;
    /**
     * Converte as propriedades listadas em FieldGroup.reservedWords em objeto
     * literal.
     * @return {string}
     */
    stringify(): string;
    private toString;
    private toObject;
    /**
     * Ordem de declaração e consequentemente escrita do grupo dentro da grade
     * @type {number}
     * @private
     */
    private order;
    private createId_;
    /**
     * Copia as propriedades do FieldGroup informado.
     * @param {FieldGroup} obj Objeto cujas propriedades serão copiadas.
     */
    assign(obj: FieldGroup): void;
    /**
     * Cria uma cópia do FieldGroup e assimila todas as propriedades à cópia.
     * @return {FieldGroup}
     */
    clone(): FieldGroup;
}
