export = toStringExpression;
/**
 * Converte um objeto em uma string que ao ser executada via *eval* retorna o objeto informado.
 *
 * Este módulo tem o objetivo exclusivo de manter compatibilidade com códigos que utilizam a antiga
 * função global toStringExpression. Código novos devem utilizar JSON.stringify como mecanismo
 * de serialização de dados.
 * @param {*} value Valor a ser convertido em string.
 * @return {string} String que ao ser avaliada via *eval* retornará *value*.
 */
declare function toStringExpression(value: any): string;
