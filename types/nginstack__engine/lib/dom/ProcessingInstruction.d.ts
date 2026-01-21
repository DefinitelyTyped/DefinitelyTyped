export = ProcessingInstruction;
/**
 * Uma ProcessingInstruction (Instrução de Processamento) incorpora instruções específicas de
 * aplicações em XML que pode ser ignorada por outras aplicações que não as reconhece. Mesmo se
 * um processador XML ignora as instruções de processamento, irá dá-los um lugar no DOM.
 *
 * Uma instrução de processamento é diferente de uma declaração XML, que fornece informação sobre
 * o documento como por exemplo codificação de caracteres, e pode somente aparecer como o primeiro
 * item em um documento.
 *
 * Instruções de processamento definidas por usuário não podem começar com 'xml', pois estes
 * são reservados (como <?xml-stylesheet ?>).
 *
 * A classe ProcessingInstruction herda as propriedades e métodos de
 * {@link module:@nginstack/engine/lib/dom/CharacterData}.
 *
 * Documentação adaptada de
 * [ProcessingInstruction](https://developer.mozilla.org/pt-BR/docs/Web/API/ProcessingInstruction)
 * dos [Mozilla Contributors](https://developer.mozilla.org/pt-BR/docs/Web/API/ProcessingInstruction$history) e
 * licenciada sob [CC-BY-SA 2.5](http://creativecommons.org/licenses/by-sa/2.5/).
 * @constructor
 * @extends CharacterData
 * @deprecated Esta funcionalidade é obsoleta pela especificação e seu uso é desencorajado, pois
 * poderá ser removida no futuro.
 */
declare function ProcessingInstruction(): void;
declare class ProcessingInstruction {
    /**
     * Texto depois de "<?"" e antes do espaço que o separada de *data*.
     * @type {string}
     */
    target: string;
    /**
     * Texto iniciado no primeiro caracter que não seja um espaço em branco depois de *target* de antes
     * de "?>".
     * @type {string}
     */
    data: string;
}
