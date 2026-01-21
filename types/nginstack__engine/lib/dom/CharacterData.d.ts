export = CharacterData;
/**
 * A classe abstrata CharacterData é uma interface que representa um nó que contém caracteres.
 *
 * Esta é uma interface abstrata, significando que não há objetos do tipo CharacterData: ela é
 * implementada por outras classes, como Text, Comment, ou ProcessingInstruction as quais não
 * são abstratas.
 *
 * A classe CharacterData herda as propriedades e métodos de {@link module:@nginstack/engine/lib/dom/Node~Node}.
 *
 * Documentação adaptada de [CharacterData](https://developer.mozilla.org/pt-BR/docs/Web/API/CharacterData)
 * dos [Mozilla Contributors](https://developer.mozilla.org/pt-BR/docs/Web/API/CharacterData$history) e
 * licenciada sob [CC-BY-SA 2.5](http://creativecommons.org/licenses/by-sa/2.5/).
 * @constructor
 * @extends Node
 */
declare function CharacterData(): void;
declare class CharacterData {
    /**
     * É uma DOMString representando o dado textual contido neste objeto.
     * @type {string}
     */
    data: string;
    /**
     * Retorna um número inteiro representando o tamanho da string contida em {@link #data}.
     * @type {number}
     * @readonly
     */
    readonly length: number;
    /**
     * Retorna uma DOMString contendo a parte de {@link #data} com o tamanho especificado e iniciando
     * no offset informado.
     * @param {number} offset Posição inicial da qual será extraída uma substring.
     * @param {number} count Quantidade de caracteres que serão lidos a partir de *offset*.
     * @return {string} Substring da posição e tamanho informados.
     */
    substringData(offset: number, count: number): string;
    /**
     * Adiciona a string informada no final de {@link #data}.
     * @param {string} data String a ser adicionada ao final de {@link #data}.
     */
    appendData(data: string): void;
    /**
     * Insere o texto informado na posição indicada por *offset* em {@link #data}.
     * @param {number} offset Posição onde *data* será inserido.
     * @param {string} data String a ser adicionada na posição *offset*.
     */
    insertData(offset: number, data: string): void;
    /**
     * Remove a quantidade especificada de caracteres, iniciando no *offset* informado, da string
     * {@link #data}.
     * @param {number} offset Posição que define o início da seção a ser removida.
     * @param {number} count Quantidade de caracteres a partir de *offset* que serão removidos.
     */
    deleteData(offset: number, count: number): void;
    /**
     * Substitui a quantidade de caracteres, iniciando a partir do offset informado, pela string
     * informada.
     * @param {number} offset Posição que define o início da seção a ser removida.
     * @param {number} count Quantidade de caracteres a partir de *offset* que serão removidos.
     * @param {string} data Texto que será inserido no lugar da seção removida.
     */
    replaceData(offset: number, count: number, data: string): void;
}
