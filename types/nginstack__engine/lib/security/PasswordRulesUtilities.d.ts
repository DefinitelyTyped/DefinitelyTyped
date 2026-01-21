export = PasswordRulesUtilities;
/**
 * Classe contendo métodos estáticos auxiliares no processo de regras de segurança.
 * @constructor
 */
declare function PasswordRulesUtilities(): void;
declare class PasswordRulesUtilities {}
declare namespace PasswordRulesUtilities {
    export {
        getPasswordRule,
        generatePassword,
        generatePasswordRuleBased,
        getPasswordStrength,
        validatePassword,
        PasswordRule,
    };
}
/**
 * Retorna um objeto contendo as informações da regra de senha passada por parâmetro.
 * @param {number} ruleKey Chave de uma regra de senha cadastrada.
 * @returns {PasswordRule} Objeto que representa a regra de senha solicitada.
 */
declare function getPasswordRule(ruleKey: number): PasswordRule;
/**
 * Gera um senha aleatória com determinado comprimento. Caso não seja informado será
 * utilizado o comprimento padrão de 8 caracteres.
 * @param {number} len Comprimento da senha a ser gerada.
 * @param {boolean} useCapitals Deve conter letras maiúsculas.
 * @param {boolean} useNumbers Deve conter números.
 * @param {boolean} useSpecial Deve conter caracteres especiais.
 * @param {boolean} noRepeat Não deve conter caracteres repetidos.
 * @return {string} Senha randômica gerada de acordo com as regras definidas.
 */
declare function generatePassword(
    len: number,
    useCapitals: boolean,
    useNumbers: boolean,
    useSpecial: boolean,
    noRepeat: boolean
): string;
/**
 * Gera um senha randômica com base nas regras de senha informada.
 * @param {number} passwordRuleKey Chave para um registro contendo as regras de formação de senha.
 * @return {string} Senha randômica gerada com base nas regras informadas.
 */
declare function generatePasswordRuleBased(passwordRuleKey: number): string;
/**
 * Obtém a força de uma senha informada.
 * @param {string} password Senha a ser analisada.
 * @return {number} Número entre 0 e 100 que avalia a força senha informada.
 */
declare function getPasswordStrength(password: string, maxLen: any): number;
/**
 * Valida uma senha passada conforme a regra de formação de senha informada
 *
 * @param {string} password Senha a ser validada
 * @param {number} passwordRuleKey Regra de formação de senha
 * @return {string} Mensagem contendo a descrição das regras violadas ou vazio
 */
declare function validatePassword(password: string, passwordRuleKey: number): string;
interface PasswordRule {
    /**
     * Comprimento mínimo para as senhas de usuários.
     */
    minLength: number;
    /**
     * Intervalo de dias entre trocas obrigatórias de senha.
     */
    changeInterval: number;
    /**
     * Quantidade de tentativas de login aceitas antes de bloquear
     * o usuário.
     */
    maxTriesBeforeLock: number;
    /**
     * Se a regra aceita repetição de caracteres. Essa regra
     * não faz distinção entre letras maiúsculas e minúsculas.
     */
    allowRepeatedChars: boolean;
    /**
     * Requisitos de complexidade da senha.
     */
    requirements: {
        upperChars: boolean;
        lowerChars: boolean;
        symbols: boolean;
        numbers: boolean;
    };
}
