export = declareProperty;
/**
 * @typedef {{get:((function():*)|undefined), set:(function(*)|undefined), value: *}} PropertyDescriptor
 */
/**
 * Cria uma propriedade com getter e setter no formato suportado pelo runtime Ije do Engine.
 *
 * O propósito desta função é implementar parcialmente a funcionalidade do
 * método `Object.defineProperty`, enquanto ele não é suportado nativamente pelo runtime Ije do
 * Engine.
 *
 * Diferentemente do comportamento `Object.defineProperty`, as propriedades criadas
 * substituem a definição anterior e sempre são configuráveis, pois esse é o
 * único comportamento permitido no runtime Ije do Engine. Também por limitações do runtime Ije,
 * as funções *getter* e *setter* são definidas como propriedades enumeradas de `obj` em vez da
 * propriedade declarada, divergindo da especificação EcmaScript e do runtime V8.
 *
 * O seu uso permite encapsular as definições do getter e setter, além de simplificar
 * o JSDoc ao tornar desnecessário a documentação do getter, do setter e o uso
 * do comentário especial <em>**jsdoc</em>.
 * @example
 * // Crie um comentário JSDoc para documentar a propriedade abaixo. Para fins de documentação,
 * // ela será uma propriedade normal. No entanto, o defineProperty elimina essa definição
 * // e cria um getter e, opcionalmente, um setter para ela.
 * const declareProperty = require('@nginstack/engine/lib/object/declareProperty');
 *
 * MyClass.prototype.test = 0;
 * declareProperty(MyClass.prototype, 'test', (function () {
 *   MyClass.prototype.test_ = '';
 *   return {
 *     get: function () { return this.test_; },
 *     set: function (val) {
 *       if (val >= 0) {
 *         this.test_ = val;
 *       } else {
 *         throw new Error('Não são permitidos valores negativos.');
 *       }
 *     }
 *   };
 * })());
 * @param {Object} obj Objeto que terá a propriedade criada.
 * @param {string} prop Nome da propriedade a ser criada.
 * @param {PropertyDescriptor} descriptor Descrição da nova propriedade. Opções possíveis:<br>
 *   - get: getter da propriedade. Caso não seja informado, a leitura da
 * propriedade sempre retornará <em>undefined</em>.<br>
 *   - set: setter da propriedade. Caso não seja informado, a propriedade será
 * somente para leitura.
 *   - value: valor da propriedade. Não pode ser utilizado conjuntamente com *get* ou *set*.
 */
declare function declareProperty(obj: any, prop: string, descriptor: PropertyDescriptor): void;
declare namespace declareProperty {
    export { PropertyDescriptor };
}
interface PropertyDescriptor {
    get: (() => any) | undefined;
    set: ((arg0: any) => any) | undefined;
    value: any;
}
