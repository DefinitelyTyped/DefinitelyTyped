export = Notation;
/**
 * Representação uma notação DTD (somente para leitura).
 *
 * A classe Notation herda as propriedades e métodos de {@link module:@nginstack/engine/lib/dom/Node}.
 * O valor do seu nodeName é "notation" name" e não tem um nó pai.
 *
 * Documentação adaptada de [Notation](https://developer.mozilla.org/en-US/docs/Web/API/Notation)
 * dos [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/Notation$history) e
 * licenciada sob [CC-BY-SA 2.5](http://creativecommons.org/licenses/by-sa/2.5/).
 * @constructor
 * @extends Node
 * @deprecated Esta funcionalidade é obsoleta pela especificação e seu uso é desencorajado, pois
 * poderá ser removida no futuro.
 */
declare function Notation(): void;
declare class Notation {
    /**
     * O identificado público desta notação. Se o identificador público não for especificado, será null.
     * @type {string}
     * @readonly
     */
    readonly publicId: string;
    /**
     * O identificador de sistema desta notação. Se o identificador de sistema não for especificado,
     * será null. Ele poderá ser uma URI absoluta ou não.
     * @type {string}
     * @readonly
     */
    readonly systemId: string;
}
