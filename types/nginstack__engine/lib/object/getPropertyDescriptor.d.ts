export = getPropertyDescriptor;
/**
 * Obtém um descritor da propriedade de um objeto, levando em consideração as definições
 * realizadas pela hierarquia de protótipos dele.
 * @param {Object} obj Objeto que contém a definição da propriedade.
 * @param {string} prop Nome da propriedade.
 * @returns {Object} Descritor da propriedade.
 */
declare function getPropertyDescriptor(obj: any, prop: string): any;
