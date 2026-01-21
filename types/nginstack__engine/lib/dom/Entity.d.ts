export = Entity;
/**
 * Representa uma entidade conhecida, sendo ela parseada ou não, em um documento XML.
 * Note que este esta classe modela a entidade em si e não a declaração da entidade.
 *
 * A classe Entity herda as propriedades e métodos de {@link module:@nginstack/engine/lib/dom/Node~Node}.
 *
 * Documentação adaptada de [Entity](https://developer.mozilla.org/pt-BR/docs/Web/API/Entity)
 * dos [Mozilla Contributors](https://developer.mozilla.org/pt-BR/docs/Web/API/Entity$history) e
 * licenciada sob [CC-BY-SA 2.5](http://creativecommons.org/licenses/by-sa/2.5/).
 * @constructor
 * @extends Node
 * @deprecated Esta funcionalidade é obsoleta pela especificação e seu uso é desencorajado, pois
 * poderá ser removida no futuro.
 */
declare function Entity(): void;
declare class Entity {
    /**
     * O identificado público desta entidade. Se o identificador público não for especificado, será null.
     * @type {string}
     * @readonly
     */
    readonly publicId: string;
    /**
     * O identificador de sistema desta entidade. Se o identificador de sistema não for especificado,
     * será null.
     * @type {string}
     * @readonly
     */
    readonly systemId: string;
    /**
     * Para entidades que não foram parseadas é nome da notação para a entidade.
     * @type {string}
     * @readonly
     */
    readonly notationName: string;
}
