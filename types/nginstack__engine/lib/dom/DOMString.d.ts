export = DOMString;
/**
 * DOMString é uma String UTF-16. Como o JavaScript já usa tais strings, uma DOMString é mapeada
 * diretamente a uma String.
 *
 * Passando null para um método ou parâmetro que aceite uma DOMString, tal valor é convertido
 * para a string "null".
 *
 * Documentação adaptada de [DOMString](https://developer.mozilla.org/pt-BR/docs/Web/API/DOMString)
 * dos [Mozilla Contributors](https://developer.mozilla.org/pt-BR/docs/Web/API/DOMString$history) e
 * licenciada sob [CC-BY-SA 2.5](http://creativecommons.org/licenses/by-sa/2.5/).
 *
 * **Importante**: o iJavaScript, diferentemente da especificação, utiliza strings codificadas em
 * WIN-1252. O V8 segue a especificação corretamente.
 * @constructor
 * @extends String
 */
declare function DOMString(): void;
declare class DOMString {}
