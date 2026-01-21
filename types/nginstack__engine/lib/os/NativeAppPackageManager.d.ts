export = NativeAppPackageManager;
/**
 * Classe para instalação de ferramentas para o engine 'On The Fly'
 * @param {number} key Chave do arquivo de manifesto que descreve a ferramenta.
 * @param {string} path Local onde a ferramenta será instalada.
 * @constructor
 */
declare function NativeAppPackageManager(key: number, path: string): void;
declare class NativeAppPackageManager {
    /**
     * Classe para instalação de ferramentas para o engine 'On The Fly'
     * @param {number} key Chave do arquivo de manifesto que descreve a ferramenta.
     * @param {string} path Local onde a ferramenta será instalada.
     * @constructor
     */
    constructor(key: number, path: string);
    /** @private */
    private _manifestName;
    /** @private */
    private _key;
    /** @private */
    private _appId;
    /** @private */
    private _manifest;
    /** @private */
    private _localManifest;
    /** @private */
    private _path;
    /** @private */
    private logger_;
    private load;
    private loadDiskManifest_;
    private loadBaseManifest_;
    /**
     * Atualiza o bundle caso necessário e o resgata a um estado
     * integro.
     */
    update(): void;
    /**
     * Verifica se o bundle está atualizado, caso não seja possível
     * carregar o arquivo de manifesto remoto não tenha sido carregado é disparada
     * uma exceção.
     * @return {boolean}
     */
    isUpdated(): boolean;
    /**
     * Verifica se o bundle está instalado de acordo com o arquivo de
     * manifesto local.
     * @return {boolean}
     */
    isInstalled(): boolean;
    private saveManifest_;
    private downloadBundle_;
    private extractBundle_;
    private verifyBundle_;
    /**
     * Retorna um Objeto descrevendo o bundle.
     * @return {Object} Objeto descrevendo o bundle.
     */
    getManifest(): any;
}
