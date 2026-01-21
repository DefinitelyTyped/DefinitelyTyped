export = NodeList;
/**
 * @typedef {import('./Node')} Node
 * @private
 */
/**
 * Objetos NodeList são coleções de nós semelhantes aos objetos retornados pelos métodos
 * Node.childNodes e document.querySelectorAll().
 *
 * Documentação adaptada de [NodeList](https://developer.mozilla.org/pt-BR/docs/Web/API/NodeList)
 * dos [Mozilla Contributors](https://developer.mozilla.org/pt-BR/docs/Web/API/NodeList$history) e
 * licenciada sob [CC-BY-SA 2.5](http://creativecommons.org/licenses/by-sa/2.5/).
 * @constructor
 */
declare function NodeList(): void;
declare class NodeList {
    /**
     * Quantidade de nós na lista.
     * @type {number}
     * @readonly
     */
    readonly length: number;
    /**
     * Retorna um nó da lista a partir do seu índice.
     *
     * Este método não lança exceções desde que seja provido os seus argumentos. O valor null é
     * retornado se o índice estiver fora da lista, e um TypeError é lançado se não for informado
     * o índice.
     * @param {number} index O índice do nó a ser obtido, sendo zero-indexado.
     * @return {Node} Nó na posição informada ou null caso o índice não seja válido.
     */
    item(index: number): Node;
}
declare namespace NodeList {
    export { Node };
}
type Node = import('./Node');
