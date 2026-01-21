export = binaryStringToUint8Array;
/** @module @nginstack/engine/lib/array/binaryStringToUint8Array */
/**
 * Converte uma *string* contendo dados binários no formato conhecido por
 * "Binary String", onde cada caractere da *string* representa um byte do conteúdo binário.
 * @param {string} str String a ser convertida em um Uint8Array.
 * @return {Uint8Array} Array contendo os dados binários contidos na string informada.
 */
declare function binaryStringToUint8Array(s: any): Uint8Array;
