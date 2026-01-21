export = listJazPackages;
/**
 * @typedef {Object} JazPackageInfo
 * @property {string} name Nome do pacote JAZ.
 * @property {string} version Versão do pacote JAZ.
 * @property {string} ufsPath Caminho na UFS onde o pacote JAZ está instalado.
 */
/**
 * Lista todos os pacotes JAZ instalados na UnionFS.
 * @return {Array<JazPackageInfo>} Array com informações sobre os pacotes instalados.
 */
declare function listJazPackages(): JazPackageInfo[];
declare namespace listJazPackages {
    export { JazPackageInfo };
}
interface JazPackageInfo {
    /**
     * Nome do pacote JAZ.
     */
    name: string;
    /**
     * Versão do pacote JAZ.
     */
    version: string;
    /**
     * Caminho na UFS onde o pacote JAZ está instalado.
     */
    ufsPath: string;
}
