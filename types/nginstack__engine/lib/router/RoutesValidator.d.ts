export = RoutesValidator;
/**
 * Define a estrutura de validação para rotas.
 * @constructor
 */
declare function RoutesValidator(): void;
declare class RoutesValidator {
    private loadController_;
    private validateAction_;
    private validateParams_;
    private validateRoutes_;
    /**
     * Valida um arquivo de definição de rotas.
     * @param {string|number} path Caminho do arquivo na UFS ou chave da VFS.
     * @returns {{quantity: number, errors: Array<Error>}} Objeto que contém as seguintes
     * propriedades (quantity, errors), onde a propriedade quantity contém a quantidade
     * de rotas testadas e a propriedade errors possui uma lista de erros das rotas.
     */
    validateFile(path: string | number): {
        quantity: number;
        errors: Error[];
    };
    /**
     * Valida todos os arquivos de definição de rotas contidas no diretório informado.
     * @param {number} directoryKey Chave numérica referente ao diretório dentro da VFS.
     * @param {number} opt_product Chave do produto (faixa de chaves) do qual deseja-se validar a
     * definição das rotas. Quando informado, apenas os arquivos de definição de rotas associados
     * a esse produto serão validados.
     * @returns {{quantity: number, errors: Array<Error>}} Objeto que contém as propriedades (quantity,
     * errors), onde a propriedade quantity contém a quantidade total rotas por diretório e a
     * propriedade errors possui uma lista de erros pertencentes a todas as rotas contidas
     * no diretório informado.
     */
    validateDirectory(
        directoryKey: number,
        opt_product: number
    ): {
        quantity: number;
        errors: Error[];
    };
}
