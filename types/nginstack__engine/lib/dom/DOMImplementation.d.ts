export = DOMImplementation;
/**
 * A interface DOMImplementation representa um objeto que prove métodos que são independentes
 * de qualquer documento. Esse objeto é retornado pela propriedade
 * {@link module:@nginstack/engine/lib/dom/Document~Document#implementation}.
 *
 * Documentação adaptada de
 * [DOMImplementation](https://developer.mozilla.org/pt-BR/docs/Web/API/DOMImplementation) dos
 * [Mozilla Contributors](https://developer.mozilla.org/pt-BR/docs/Web/API/DOMImplementation$history) e
 * licenciada sob [CC-BY-SA 2.5](http://creativecommons.org/licenses/by-sa/2.5/).
 * @constructor
 * @deprecated Esta funcionalidade é obsoleta pela especificação e seu uso é desencorajado, pois
 * poderá ser removida no futuro.
 */
declare function DOMImplementation(): void;
declare class DOMImplementation {
    /**
     * Testa se a implementação do DOM implementa uma funcionalidade específica em uma determinada versão,
     * como definido em [DOM Features](https://www.w3.org/TR/DOM-Level-3-Core/core.html#DOMFeatures).
     * @param {string} feature O nome da funcionalidade a ser testada.
     * @param {string} version Versão da funcionalidade a ser testada.
     * @return {boolean} True se a funcionalidade é implementada na versão especificada.
     * @deprecated Esta funcionalidade não é confiável, pois o comportamento dela varia de acordo a
     * implementação do DOM. Ela é mantida apenas para fins de compatibilidade.
     */
    hasFeature(feature: string, version: string): boolean;
}
