export = ServerId;
/**
 * @typedef {import('./Response')} Response
 * @private
 */
/**
 * Identificado único desta execução do Engine utilizado para identificar deste Engine em operações
 * de balanceamento de carga.
 * @constructor
 */
declare function ServerId(): void;
declare class ServerId {
    /** @private */
    private value_;
    /**
     * Salt utilizado na geração do ID.
     * @type {string}
     * @private
     */
    private salt_;
    toString(): string;
    /**
     * Atualiza o cookie "serverId" da instância response global. Este cookie
     * é útil para a configuração de afinidade de proxies reversos, visto que ele
     * identifica de forma única o servidor que está atendendo a requisição.<br>
     * Ao reiniciar o Engine, será gerado um novo id, forçando que o balanceador
     * esqueça a afinidade anterior.
     * @param {Response} [opt_response] Resposta HTTP que terá o cookie limpo.
     */
    updateCookie(opt_response?: Response): void;
    /**
     * Apaga o cookie "serverId" da instância response global. Este cookie
     * é útil para a configuração de afinidade de proxies reversos, visto que ele
     * identifica de forma única o servidor que está atendendo a requisição.<br>
     * Ao apagar o cookie, estaremos forçando que o balanceador escolha um novo
     * engine para atender a requisição. Sendo assim, este método não deve ser
     * chamado durante a vida de uma sessão stateful.
     * @param {Response} [opt_response] Resposta HTTP que terá o cookie limpo.
     */
    clearCookie(opt_response?: Response): void;
}
declare namespace ServerId {
    export { COOKIE_ID, instance_, getInstance, Response };
}
declare let COOKIE_ID: string;
declare let instance_: ServerId;
/**
 * Obtém uma instância global e compartilha de ServerId.
 */
declare function getInstance(): import('./ServerId.js');
type Response = import('./Response');
