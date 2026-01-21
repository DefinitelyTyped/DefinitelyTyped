export = PermissionFieldScope;
/**
 * Classe que controla o escopo de ação dos campos de permissão, instâncias da
 * classe PermissionField.
 * @constructor
 */
declare function PermissionFieldScope(): void;
declare class PermissionFieldScope {
    /** @private */
    private classes_;
    /** @private */
    private mimeTypes_;
    /**
     * Adiciona uma classe como raiz desta permissão. Este campo de permissão estará
     * visível em todas as classes filhas das classes definidas aqui como raízes.
     * Este método irá ignorar classes duplicadas e filhas de classes já
     * adicionadas.
     *
     * **Importante:** Caso o uso das rootClasses esteja habilitado não será mais
     * possível alterar a visibilidade dos campos de permissão via evento
     * onDefinePermissionsGrid, pois este campo estará automaticamente visível para
     * todas as filhas de suas rootClasses.
     * @param {number} classKey Chave da classe que será raiz desta permissão.
     */
    addClass(classKey: number): void;
    /**
     * Chaves das classes que são as raízes desta permissão. Isto indica que esta
     * permissão estará disponível para as classes filhas desta raiz.
     * @return {Array<number>} Classes raízes deste campo de permissão.
     */
    getClasses(): number[];
    /**
     * Chaves dos MIME types que fazem uso deste campo de permissão.
     * @return {Array<number>} Classes raízes deste campo de permissão.
     */
    getMimeTypes(): number[];
    /**
     * Adiciona um MIME type como usuário deste campo de permissão. Desta maneira os
     * registros deste tipo irão ter esta permissão disponível.
     * @param {number} typeKey Chave do MIME type que suportará o uso deste campo de
     * permissão.
     */
    addMimeType(typeKey: number): void;
}
