export = SecurityPolicy;
/**
 * @typedef {import('./SecurityPolicyApplication')} SecurityPolicyApplication
 * @private
 */
/**
 * Classe que avalia a política de segurança de um computador e usuário.
 * @param {string} computerAddress Endereço IP do computador que irá executar
 * a aplicação.
 * @param {string} computerName Nome na rede do computador que irá executar
 * a aplicação. Caso não seja informado, a avaliação da política de segurança do
 * computador será realizada apenas pelo endereço IP.
 * @param {number} userKey Chave do usuário que irá executar a aplicação. Deve
 * ser informado nulo quando a aplicação não necessita de um usuário. Neste caso,
 * apenas a política de segurança associada ao computador será verificada.
 * @constructor
 */
declare function SecurityPolicy(
    computerAddress: string,
    computerName: string,
    userKey: number
): void;
declare class SecurityPolicy {
    /**
     * @typedef {import('./SecurityPolicyApplication')} SecurityPolicyApplication
     * @private
     */
    /**
     * Classe que avalia a política de segurança de um computador e usuário.
     * @param {string} computerAddress Endereço IP do computador que irá executar
     * a aplicação.
     * @param {string} computerName Nome na rede do computador que irá executar
     * a aplicação. Caso não seja informado, a avaliação da política de segurança do
     * computador será realizada apenas pelo endereço IP.
     * @param {number} userKey Chave do usuário que irá executar a aplicação. Deve
     * ser informado nulo quando a aplicação não necessita de um usuário. Neste caso,
     * apenas a política de segurança associada ao computador será verificada.
     * @constructor
     */
    constructor(computerAddress: string, computerName: string, userKey: number);
    computerAddress: string;
    computerName: string;
    userKey: string;
    networkUtilities: NetworkUtilities;
    securityPolicies: import('../dataset/DataSet.js');
    groupsAndUsers: import('../dataset/DataSet.js');
    networks: import('../dataset/DataSet.js');
    hosts: import('../dataset/DataSet.js');
    /**
     * Chave do registro da tabela iSecurityPolicy que possui as regras de segurança
     * associadas ao computador.
     * @type {number}
     */
    computerPolicyKey: number;
    /**
     * Chave do registro da tabela iSecurityPolicy que possui as regras de segurança
     * associadas ao usuário.
     * @type {number}
     */
    userPolicyKey: number;
    /**
     * Chaves dos hosts cadastrados que possuem o ip ou nome do computador informado.
     * @type {Array}
     */
    hostKeys: any[];
    /**
     * Chaves das redes cadastradas que englobam o ip ou nome do computador informado.
     * @type {Array}
     */
    networkKeys: any[];
    private initialize;
    /**
     * Verifica se usuário pode utilizar o computador. O usuário e a identificação do
     * computador são informados na construção desta classe.
     * @return {boolean} True se for permitido o uso deste computador pelo usuário.
     */
    checkComputer(): boolean;
    /**
     * Verifica se a aplicação informada está habilitada para o usuário ou computador
     * informados no construtor.
     * @param {SecurityPolicyApplication} appId Nome do campo que controla o acesso a aplicação que deve
     * ser verificada. Valores permitidos: SecurityPolicyApplication.IDE,
     * SecurityPolicyApplication.iWeb e SecurityPolicyApplication.FrameworkHTML.
     * @return {boolean} True se for permitido o uso desta aplicação pelo usuário e
     * computador informados.
     */
    checkEnabledApplication(appId: SecurityPolicyApplication): boolean;
    /**
     * Valida todas as regras de segurança necessárias no momento do login, gerando erro caso
     * o usuário ou o computador não as satisfaça.
     * @param {string} appId Nome do campo que controla o acesso a aplicação que deve
     * ser verificada. Pode ser utilizada uma das propriedades da classe
     * SecurityPolicyApplication, como: SecurityPolicyApplication.IDE,
     * SecurityPolicyApplication.iWeb e SecurityPolicyApplication.FrameworkHTML.
     */
    validateLogin(appId: string): void;
    /**
     * Verifica se o usuário tem permissão para reiniciar o engine.
     * @return {boolean} True se o usuário tiver permissão para reiniciar o engine.
     */
    checkEngineRestartAllowed(): boolean;
}
declare namespace SecurityPolicy {
    export { userCanAccessRemotely, SecurityPolicyApplication };
}
import NetworkUtilities = require('../net/NetworkUtilities.js');
/**
 * Indica se o usuário está associado a uma política de segurança que o possibilita
 * acessar o sistema remotamente por meio das APIs do Engine.
 * @param {number} userKey Chave do usuário que terá a permissão verificada.
 * @return {boolean} True se o usuário tiver permissão para acessar remotamente o sistema.
 */
declare function userCanAccessRemotely(userKey: number): boolean;
type SecurityPolicyApplication = typeof import('./SecurityPolicyApplication');
