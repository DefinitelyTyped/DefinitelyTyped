export = NetworkUtilities;
/**
 * Classe com métodos diversos para tratamento de endereços de servidores e redes.
 * @constructor
 */
declare function NetworkUtilities(): void;
declare class NetworkUtilities {
    hosts: any;
    networks: any;
    services: any;
    findHostsCache: {};
    findHostsCacheVersion: any;
    findNetworksCache: {};
    findNetworksCacheVersion: any;
    /**
     * Obtém as chaves dos hosts cadastrados que possuam o endereço informado.
     * Também é definido o método de classe NetworkUtilities.findHosts para usos eventuais
     * Prefira instanciar a classe NetworkUtilities e chamar findHosts da instância
     * se utilizar muito este método.<br>
     * @example
     * var NetworkUtilities = require('@nginstack/engine/lib/net/NetworkUtilities');
     * // Localiza o engine que está executando este script no cadastro de servidores
     * var hosts = NetworkUtilities.findHosts([server.localHost, server.localAddress]);
     * if (hosts.length === 1){
     *   return hosts[0]
     * } else {
     *   if (hosts.length === 0) {
     *     throw new Error("Não existe um computador cadastrado com o nome \"" +
     *         server.localHost + "\" ou ip \"" + server.localAddress + "\".")
     *   } else {
     *     throw new Error("Existe mais um computador cadastrado com o nome \"" +
     *         server.localHost + "\" ou ip \"" + server.localAddress + "\".")
     *   }
     * }
     * @param {string|Array<string>} ids Nome ou endereços ip do computador que deve ser localizado.
     * Pode ser informado um único ou um array de identificadores do computador.
     * @return {Array<number>} Array com as chaves dos servidores que possuam o nome ou endereço ip
     * igual ao pesquisado.
     * @see #findNetworks
     * @see #findServices
     */
    findHosts(ids: string | string[]): number[];
    /**
     * Obtém as chaves das redes cadastradas que contenham o endereço informado.
     * Pode ser informado o endereço de um computador ou de uma rede. Neste último
     * caso, deve ser utilizada a notação CIDR (ex: 192.168.0.1/24).
     * Também é definido o método de classe NetworkUtilities.findNetworks para usos eventuais
     * Prefira instanciar a classe NetworkUtilities e chamar findNetworks da instância
     * se utilizar muito este método.
     * @param {string|Array} ids Endereços de uma rede ou endereços ou nomes de um computador.
     * Pode ser informado um único ou um Array de identificadores.
     * @return {Array} Array com as chaves das redes que contém o endereço informado.
     * @see #findHosts
     * @see #findServices
     */
    findNetworks(ids: string | any[]): any[];
    /**
     * Obtém as chaves dos serviços cadastrados na classe Services que estejam associados
     * ao host informado. Serão retornados as chaves de todos serviços dos servidores cujo
     * nome ou endereço IP seja igual ao informado em host.
     * Também é definido o método de classe NetworkUtilities.findServices para usos eventuais
     * Prefira instanciar a classe NetworkUtilities e chamar findServices da instância
     * se utilizar muito este método.<br>
     * @example
     * var NetworkUtilities = require('@nginstack/engine/lib/net/NetworkUtilities');
     * // Descobre os servidores SMTP configurados no engine que está executando este script
     * var services = NetworkUtilities.findServices( [ server.localHost, server.localAddress ],
     *    -1898146235) // SMTP
     * if ( services.length == 0 ){
     *   throw new Error("Não existe um serviço SMTP cadastrado no computador com o " +
     *       "nome \"" + server.localHost + "\" ou ip \"" + server.localAddress + "\".")
     * }
     * @param {string|string[]} ids Nome ou endereços ip do computador.
     * Pode ser informado um único ou um array de identificadores do computador.
     * @param {number} serviceClass Classe do serviço desejado
     * @param {number} port Porta do serviço. Parâmetro opcional para restringir a
     * pesquisa para serviços configurados na porta informada. É útil apenas quando
     * existe mais de um serviço de mesma classe configurado em um host.
     * @return {Array} Array com as chaves dos serviços localizados
     * @see #findHosts
     * @see #findNetworks
     */
    findServices(ids: string | string[], serviceClass: number, port: number): any[];
}
declare namespace NetworkUtilities {
    /**
     * @private
     *
     */
    function findNetworks(address: any): any[];
    /**
     * Converte um IPv4 em uma representação numérica. Equivalente a função inet_aton()
     * existente em outras linguagens.
     * @param {string} address Endereço ip
     * @return {number} Representação numérica do endereço informado.
     * @see #numberToAddress
     */
    function addressToNumber(address: string): number;
    /**
     * Converte a representação numérica de um endereço IPv4 em uma string. Equivalente a
     * função inet_ntoa() existente em outras linguagens.
     * @param {number} num Número gerado pelo método NetworkUtilities.addressToNumber()
     * @return {string} Representação textual do endereço informado.
     * @see #addressToNumber
     */
    function numberToAddress(num: number): string;
    /**
     * Calcula a representação numérica do primeiro e o último endereço IP de uma rede.
     * @param {string} address Endereço IP da rede. Deve ser informado utilizando a
     * notação CIDR. Exemplo: 192.168.0.0/16.
     * @return {Array} Array das representações numéricas do primeiro e último ip
     * da rede informada.
     */
    function getNumberNetworkRange(address: string): any[];
    /**
     * Calcula o primeiro e o último endereço IP de uma rede.
     * @param {string} address Endereço IP da rede. Deve ser informado utilizando a
     * notação CIDR. Exemplo: 192.168.0.0/16.
     * @return {Array} Array do primeiro e último ip da rede informada.
     */
    function getNetworkRange(address: string): any[];
    /**
     * Verifica se o endereço informado é um IPv4 válido utilizando a notação CIDR.
     * @param {string} address Endereço que deve ser verificado.
     * @return {boolean} True se o endereço informado é um IPv4.
     */
    function isIPv4Address(address: string): boolean;
    /**
     * Determina se o endereço faz parte da rede informada. O endereço da rede
     * deve ser informado utilizando a notação CIDR.
     * @param {string} address Endereço que deve ser avaliado se está na rede informada.
     * @param {string} network Endereço da rede
     * @return {boolean} True se o endereço faz parte da rede informada
     */
    function addressInNetworkRange(address: string, network: string): boolean;
    /**
     * Converte a representação textual de uma máscara de rede no valor da máscara
     * CIDR.
     * @param {string} mask Representação textual da máscara. Exemplo: "255.0.0.0".
     * @return {number} Máscara CIDR. Número inteiro variando de 0 a 32.
     * @see #numberToMask
     */
    function maskToNumber(mask: string): number;
    /**
     * Converte uma máscara CIDR em uma representação textual.
     * @param {number} num Máscara numérica CIDR. Número inteiro variando de 0 a 32.
     * @return {string} Representação textual da máscara. Exemplo: "255.0.0.0".
     * @see #maskToNumber
     */
    function numberToMask(num: number): string;
    /**
     * @private
     * @deprecated
     */
    function findHosts(ids: any): number[];
    /**
     * @private
     * @deprecated
     */
    function findServices(host: any, serviceClass: any, port: any): any[];
}
