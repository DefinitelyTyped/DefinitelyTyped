export = createSet;
/** @module @nginstack/engine/lib/object/createSet */
/**
 * Cria um novo objeto onde os nomes das propriedades vem dos argumentos informados e os valores
 * dessas propriedade são informados com *true*.
 * @param {...*} var_args Se apenas um argumento é provido e ele é um array, seus items são usados
 * como nomes de propriedades. No demais casos, os argumentos são utilizados como nome.
 * @return {!Object} O novo objeto.
 */
declare function createSet(...args: any[]): any;
