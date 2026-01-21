export = CDATASection;
/**
 * A interface CDATASection representa uma seção CDATA que pode ser utilizada dentro de um XML
 * para incluir porções de texto não escapados. Diferentemente do conteúdo das demais tags,
 * os símbolos "<", ">" e "&" dentro de uma seção CDATA não precisam ser escapados.
 *
 * A classe CDATASection herda as propriedades e métodos de {@link module:@nginstack/engine/lib/dom/Text~Text}.
 *
 * Documentação adaptada de [CDATASection](https://developer.mozilla.org/en-US/docs/Web/API/CDATASection)
 * dos [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/CDATASection$history) e
 * licenciada sob [CC-BY-SA 2.5](http://creativecommons.org/licenses/by-sa/2.5/).
 * @constructor
 * @extends Text
 */
declare function CDATASection(): void;
declare class CDATASection {}
