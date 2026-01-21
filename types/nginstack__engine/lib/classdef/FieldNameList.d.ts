export = FieldNameList;
/**
 * Classe que provê mecanismos para trabalhar com names de fields em uma
 * estrutura de lista.
 * @constructor
 */
declare function FieldNameList(): void;
declare class FieldNameList {
    private init_;
    /** @private */
    private _items;
    private _nameToFieldId;
    /**
     * Retorna a quantidade de fields da lista
     * @return Integer
     */
    getCount(): any;
    /**
     * Limpa a lista de forma a deixá-la sem fields
     */
    clear(): void;
    /**
     * Adiciona um field na lista.
     * @param {string} fieldName
     */
    add(fieldName: string): void;
    /**
     * @param {string} fieldName Remove o field da lista
     */
    remove(fieldName: string): void;
    /**
     * Adiciona na lista todos os fields da lista informada.
     * @param {FieldNameList} fieldNameList
     */
    assign(fieldNameList: FieldNameList): void;
    /**
     * Retorna uma nova lista com um clone de cada field.
     * @return {FieldNameList} Clone.
     */
    clone(): FieldNameList;
    /**
     * Invoca a função passada (func) para cada field da lista. O primeiro parâmetro
     * passado para a função func é o field e os demais são os mesmos parâmetros
     * passados para a função map com exceção do primeiro, ou seja, o parâmetro
     * func.
     * @param {function(string, ...*):void} func Função que será executada para cada campo.
     * @param {...args} args Argumentos a serem passados para *func*.
     */
    map(func: (arg0: string, ...args: any[]) => void, ...args: any[]): void;
    /**
     * Retorna a lista com os nomes do campos
     * @return {Array} Lista com os nomes dos campos.
     */
    toArray(): any[];
}
