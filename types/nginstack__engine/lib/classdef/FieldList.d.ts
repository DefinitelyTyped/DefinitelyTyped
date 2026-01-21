export = FieldList;
/**
 * Classe que provê mecanismos para trabalhar com fields em uma estrutura de lista.
 * @constructor
 */
declare function FieldList(): void;
declare class FieldList {
    /**
     * Nomes alternativos dos campos de infraestrutura.
     * @private
     */
    private nameAliases_;
    private init_;
    /** @private */
    private _fieldsByFieldName;
    /** @private */
    private _fieldIdxByFieldName;
    /** @private */
    private _properties;
    /** @private */
    private fields_;
    /**
     * Retorna um array com os nomes dos fields da lista.
     * @param {Array} [opt_fieldsNames] Array onde serão adicionados os nomes dos campos. Caso não seja
     * informado, os nomes serão adicionados em um array vazio que será retornado por esta função.
     * @return {Array<string>} Array com os nomes dos campos.
     */
    getFieldNames(opt_fieldsNames?: any[]): string[];
    /**
     * Retorna a quantidade de campos desta lista.
     * @return {number}
     */
    count: number;
    /**
     * Remove todos os campos contidos na lista.
     */
    clear(): void;
    /**
     * Adiciona um campo na lista. Os campos adicionados também serão criados como propriedades da
     * lista.
     * @param {Field} field Campo a ser adicionado na lista.
     */
    add(field: Field): void;
    /**
     * Invoca a função informada para cada campo da lista. O primeiro parâmetro
     * passado para a função é o campo da lista e os demais são os mesmos parâmetros
     * passados para a função *map* com exceção do primeiro, ou seja, o parâmetro *func*.
     * @param {function(string, ...*):*} func Função que será executada para cada campo.
     * @param {...args} args Argumentos a serem passados para *func*.
     * @return {Array<*>} Array com o retorno da função informada para cada campo contido nesta lista.
     */
    map(func: (arg0: string, ...args: any[]) => any, ...args: any[]): any[];
    /**
     * Objeto que converte um nome de campo para a sua forma canônica. Ele é declarado
     * no protótipo intencionalmente, para criar um cache global para todas as instâncias
     * de FieldList.
     * @private
     */
    private fieldNameMapper_;
    /**
     * Retorna a posição do field na lista. Caso o field não esteja na lista é
     * retornado o valor -1.
     * @param {string|Field} nameOrField
     * @return Integer
     */
    indexOf(nameOrField: string | Field): any;
    /**
     * Retorna o field a partir de seu nome ou índice na lista.
     * @param {string|number} nameOrIndex
     * @return {Field}
     */
    field(nameOrIndex: string | number): Field;
    /**
     * Remove da lista o field informado.
     * @param {string|number|Field} nameOrIndexOrField
     * @return {Field} Retorna o field removido.
     */
    remove(nameOrIndexOrField: string | number | Field): Field;
    /**
     * Adiciona na lista todos os fields da lista informada.
     * @param {FieldList} fieldList
     */
    assign(fieldList: FieldList): void;
    /**
     * Retorna uma nova lista com uma cópia de cada campo contida nela.
     */
    clone(): FieldList;
    /**
     * Retorna uma lista de campos cuja propriedades tenham os valores informados.
     * @param {...*} propertyName Há múltiplas formas de definição dos parâmetros, veja o
     * exemplo abaixo.
     * @return {FieldList} Lista de campos.
     * @example
     *  //Propriedade e valor:
     *  //Nessa forma serão obtidos os campos que possuem as propriedades fornecidos
     *  //com os respectivos valores.
     *  getFieldsByProperty('prop', valor, 'prop2', valor2);
     *
     *  //Array de propriedades e de valores:
     *  //Nessa forma serão fornecidos dois arrays, o primeiro array é o de propriedades
     *  //que se relaciona com o segundo array, que é o de valores, pelo índice.
     *  getFieldsByProperty(['prop', 'prop2'], [valor, valor2]);
     *
     *  //Através de um callback
     *  //Nesta forma são obtidos os campos de acordo com a regra definida no callback.
     *  getFieldsByProperty(function (field) {
     *    return field.required === true;
     *  });
     */
    getFieldsByProperty(...args: any[]): FieldList;
    /**
     * Este método cria ou seta as propriedades informadas com os
     * valores informados em cada campo da definido nos parâmetros.
     * Para utilizar esse método existem diversas formas de o invocar,
     * veja os exemplo abaixo.
     * @param {string|Array<Field>} fieldNames Nomes dos fields separados por
     * vírgula ou ponto-e-vírgula ou array de campos a serem modificados.
     * @param {string|Array<string>|function(Field):void} propertyNames Nomes das
     * propriedades separadas por vírgula ou ponto-e-vírgula ou função que será executada para
     * cada campo.
     * @param {...*} propertyValues Respectivos valores das propriedades informadas.
     * @example
     *
     *  // Array de campos com callback para setar as propriedades:
     *  fl.setFieldsProperties([field1, field2], function (field) {
     *    field.prop = valor;
     *    field.prop2 = valor2;
     *  });
     *
     *  // Array com os nomes dos campos com callback para setar as propriedades:
     *  fl.setFieldsProperties(['campo1','campos2'], function (field) {
     *    field.prop = valor; field.prop2 = valor2
     *  });
     *
     *  // String com o nomes dos campos separados por virgula ou ponto e virgula como primeiro
     *  // parâmetro.
     *  // Array com nomes das propriedades a serem definidas como segundo parâmetro.
     *  // Array com os valores a serem definidos nas propriedades de mesmo índice como terceiro
     *  // parâmetro.
     *  fl.setFieldsProperties('campo1,campos2', ['prop', 'prop2'], [valor, valor2]);
     *
     *  // Ainda na forma anterior pode ser utilizado o caractere '*' para obter todos os campos.
     *  fl.setFieldsProperties('*', ['prop', 'prop2'], [valor, valor2]);
     *
     *  // Lista de strings separados por vírgula ou ponto e virgula com os nomes dos campos a
     *  // serem alterados como primeiro parâmetro.
     *  // Os parâmetros seguintes são os nomes das propriedades com os valores que devem ser
     *  // atribuídos.
     *  fl.setFieldsProperties('campo1,campos2', 'prop', valor, 'prop2', valor2);
     */
    setFieldsProperties(
        fieldNames: string | Field[],
        propertyNames: string | string[] | ((arg0: Field) => void),
        ...args: any[]
    ): void;
    /**
     * Verifica se um field existe na lista.
     * @param {string} fieldName
     * @return boolean
     */
    has(fieldName: string): boolean;
    private toArray;
    private getText;
    private findObjectsByString;
    private objects;
    private strings;
    private getAllObjects;
    private find;
    private addObject;
}
import Field = require('./Field.js');
