export = ConfigDef;
/**
 * Classe preparada para manipular as definições de configuração, que estão em arquivos do tipo
 * application/x-config, de uma determinada classe do sistema.
 * @constructor
 * @extends ClassDef
 */
declare function ConfigDef(): void;
declare class ConfigDef {
    /**
     * Logger utilizado pela API de definição de classes.
     * @type {Logger}
     * @protected
     */
    protected logger_: Logger;
    /**
     * Tabela VFS indexada para realizar o teste se o modo estrito está habilitado para
     * uma classe que não define o modo estrito de forma explícita.
     * @type {DataSet}
     * @private
     */
    private vfsToCheckStrictMode_;
    /**
     * Uma string que representa a classe de configuração de uma classe do modelo de dados.
     * @return {string}
     */
    toString(): string;
}
import Logger = require('../log/Logger.js');
