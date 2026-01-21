export = Text;
/**
 * A classe Text representa um conteúdo texto de um Element ou Attr.
 *
 * Se um elemento não tem markup dentro do seu conteúdo, ele terá um único filho Text que conterá o
 * texto do contido no elemento. No entanto, se o elemento contiver markup, esse conteúdo será
 * estruturado em itens esses markups e nós do tipo Text que formam seus filhos.
 *
 * Novos documentos tem um nó simples do tipo Text para cada bloco de texto. Com o tempo, mais nós
 * do tipo Text podem ser criados na medida que o documento é alterado. O método
 * {@link module:@nginstack/engine/lib/dom/Node~Node#normalize} pode ser utilizado para mesclar os textos
 * adjacentes em um nó único do tipo Text.
 *
 * A classe Text herda as propriedades e métodos de {@link module:@nginstack/engine/lib/dom/CharacterData}.
 *
 * Documentação adaptada de [Text](https://developer.mozilla.org/pt-BR/docs/Web/API/Text)
 * dos [Mozilla Contributors](https://developer.mozilla.org/pt-BR/docs/Web/API/Text$history) e
 * licenciada sob [CC-BY-SA 2.5](http://creativecommons.org/licenses/by-sa/2.5/).
 * @constructor
 * @extends CharacterData
 */
declare function Text(): void;
declare class Text {
    /**
     * Quebra o nó do tipo Text em dois nós a partir do *offset* informado, mantendo ambos os nós na
     * árvore como vizinhos.
     *
     * Depois da quebra, o nó corrente contém todo o conteúdo até o ponto especificado pelo *offset*,
     * um novo nó criado do mesmo tipo contendo o texto remanescente. O nó criado é retornado como
     * resultado.
     *
     * Se o nó original tiver um *parent* definido, o novo nó é inserido como o próximo vizinho do nó
     * original. Se o offset for igual ao tamanho do nó original, o novo nó não terá dados.
     *
     * Nós textuais separados podem ser concatenados posteriormente utilizando o método
     * {@link module:@nginstack/engine/lib/dom/Node~Node#normalize}.
     * @param {number} offset Posição que definição o ponto de quebra do nó corrente.
     * @return {Text} Nó criado a partir da quebra.
     */
    splitText(): Text;
}
