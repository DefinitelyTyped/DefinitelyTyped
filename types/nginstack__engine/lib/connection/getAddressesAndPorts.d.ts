export = getAddressesAndPorts;
/**
 * @typedef {Object} AddressesAndPorts
 * @property {Array<string>} addresses Lista de endereços.
 * @property {Array<string>} httpPorts Lista de portas HTTP.
 * @property {Array<string>} httpsPorts Lista de portas HTTPS.
 */
/**
 * Prepara uma lista de endereços e portas a partir de um engine informado.
 * @param {DBKey|number} key Chave do cadastro do Engine.
 * @return {AddressesAndPorts}
 */
declare function getAddressesAndPorts(key: DBKey | number): AddressesAndPorts;
declare namespace getAddressesAndPorts {
    export { AddressesAndPorts };
}
import DBKey = require('../dbkey/DBKey.js');
interface AddressesAndPorts {
    /**
     * Lista de endereços.
     */
    addresses: string[];
    /**
     * Lista de portas HTTP.
     */
    httpPorts: string[];
    /**
     * Lista de portas HTTPS.
     */
    httpsPorts: string[];
}
