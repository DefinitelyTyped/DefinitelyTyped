export = getAddressesAndPorts;
declare function getAddressesAndPorts(key: DBKey | number): AddressesAndPorts;
declare namespace getAddressesAndPorts {
    export { AddressesAndPorts };
}
import DBKey = require('../dbkey/DBKey.js');
interface AddressesAndPorts {
    addresses: string[];
    httpPorts: string[];
    httpsPorts: string[];
}
