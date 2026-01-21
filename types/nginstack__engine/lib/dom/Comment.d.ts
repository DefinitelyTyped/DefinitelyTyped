export = Comment;
/**
 * A interface Comment representa comentários textuais dentro do markup.
 *
 * Embora eles normalmente não são visíveis, esses comentários podem ser lidos no conteúdo
 * do documento e podem ser úteis para desenvolvedores.
 *
 * Comentários são representados em HTML e XML como conteúdos dentro das marcações '<!--' e '-->'.
 * Em XML, a sequência de caracteres '--' não pode ser utilizada dentro de um comentário.
 *
 * A classe Comment herda as propriedades e métodos de
 * {@link module:@nginstack/engine/lib/dom/CharacterData~CharacterData}.
 *
 * Documentação adaptada de [Comment](https://developer.mozilla.org/pt-BR/docs/Web/API/Comment)
 * dos [Mozilla Contributors](https://developer.mozilla.org/pt-BR/docs/Web/API/Comment$history) e
 * licenciada sob [CC-BY-SA 2.5](http://creativecommons.org/licenses/by-sa/2.5/).
 * @constructor
 * @extends CharacterData
 */
declare function Comment(): void;
declare class Comment {}
