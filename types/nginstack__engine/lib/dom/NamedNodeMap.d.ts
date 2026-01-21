export = NamedNodeMap;
/**
 * @typedef {import('./Attr')} Attr
 * @private
 */
/**
 * A classe NamedNodeMap representa uma coleção de objetos do tipo
 * {@link module:@nginstack/engine/lib/dom/Attr~Attr}. A ordem dos objetos contidos em um
 * NamedNodeMap é indeterminada, diferentemente de NodeList, embora eles possam ser acessados a
 * partir de um índice, de forma similar a um array.
 *
 * Uma instância de NamedNodeMap é viva e será atualizada automaticamente se alterações forem
 * feitas para o seu conteúdo internamente ou a partir de outro ponto.
 *
 * Embora seja chamada NamedNodeMap, esta classe não trata diretamente com objetos do tipo Node e
 * sim com instâncias de Attr, que são uma classe especializada de Node.
 *
 * Documentação adaptada de [NamedNodeMap](https://developer.mozilla.org/pt-BR/docs/Web/API/NamedNodeMap)
 * dos [Mozilla Contributors](https://developer.mozilla.org/pt-BR/docs/Web/API/NamedNodeMap$history)
 * e licenciada sob [CC-BY-SA 2.5](http://creativecommons.org/licenses/by-sa/2.5/).
 * @constructor
 */
declare function NamedNodeMap(): void;
declare class NamedNodeMap {
    /**
     * Quantidade de objetos neste mapa.
     * @type {number}
     * @readonly
     */
    readonly length: number;
    /**
     * Retorna o {@link module:@nginstack/engine/lib/dom/Attr~Attr} no dado índice ou null caso o índice
     * seja maior ou igual que a quantidade de objetos neste mapa.
     * @param {number} index Índice do Attr a ser obtido.
     * @return {Attr} Atributo na posição informada.
     */
    item(index: number): Attr;
    /**
     * Retorna uma instância de {@link module:@nginstack/engine/lib/dom/Attr~Attr} correspondente ao dado nome.
     * @param {string} qualifiedName Nome do atributo a ser obtido.
     * @return {Attr} Atributo associado ao nome ou null se não houver um atributo correspondente a esse
     * nome.
     */
    getNamedItem(qualifiedName: string): Attr;
    /**
     * Substitui ou adiciona o {@link module:@nginstack/engine/lib/dom/Attr~Attr} identificado no mapa pelo
     * seu nome.
     * @param {Attr} attr Atributo que será adicionado ou substituído.
     * @return {Attr} Atributo que foi substituído ou null caso não existisse um anterior com o mesmo
     * nome.
     */
    setNamedItem(attr: Attr): Attr;
    /**
     * Remove um atributo com o nome informado. Será gerado um erro caso não encontre um.
     * @param {string} qualifiedName Nome do atributo a ser removido.
     * @return {Attr} Atributo que foi removido.
     */
    removeNamedItem(qualifiedName: string): Attr;
}
declare namespace NamedNodeMap {
    export { Attr };
}
type Attr = import('./Attr');
