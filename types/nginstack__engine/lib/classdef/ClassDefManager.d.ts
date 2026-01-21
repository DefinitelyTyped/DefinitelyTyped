export = ClassDefManager;
/**
 * Possui a finalidade de obter as definições de uma classe, configuradas
 * através dos scripts x-class associados a classe. A definição de uma classe
 * herda todas as configurações existentes da classe mãe.
 *
 * Uma instância global do ClassDefManager é criada na inicialização da sessão
 * JavaScript do Framework, publicada pela variável global classDefManager. O
 * uso esta instância global maximiza a reutilização do cache de instâncias de
 * x-class, melhorando o desempenho e reduzindo o consumo de memória do sistema.
 * @param {({vfs: DataSet, classes: DataSet}|Record<*,*>)} [opt_options] DataSets opcionais de arquivos
 * virtuais (vfs) e de classes (classe).
 * @constructor
 */
declare function ClassDefManager(
    opt_options?:
        | {
              vfs: DataSet;
              classes: DataSet;
          }
        | Record<any, any>,
    ...args: any[]
): void;
declare class ClassDefManager {
    /**
     * Possui a finalidade de obter as definições de uma classe, configuradas
     * através dos scripts x-class associados a classe. A definição de uma classe
     * herda todas as configurações existentes da classe mãe.
     *
     * Uma instância global do ClassDefManager é criada na inicialização da sessão
     * JavaScript do Framework, publicada pela variável global classDefManager. O
     * uso esta instância global maximiza a reutilização do cache de instâncias de
     * x-class, melhorando o desempenho e reduzindo o consumo de memória do sistema.
     * @param {({vfs: DataSet, classes: DataSet}|Record<*,*>)} [opt_options] DataSets opcionais de arquivos
     * virtuais (vfs) e de classes (classe).
     * @constructor
     */
    constructor(
        opt_options?:
            | {
                  vfs: DataSet;
                  classes: DataSet;
              }
            | Record<any, any>,
        ...args: any[]
    );
    vfs: any;
    classes: any;
    /** @private */
    private cache_;
    /** @private */
    private masterDetailFieldsToValidate_;
    /**
     * Responsável por controlar o modo estrito a nível de base.
     * @type {boolean}
     */
    strictMode: boolean;
    /**
     * Executa todos os scripts configurados em "/Configuração/Inicialização do Gerenciador de Classes".
     * @protected
     */
    protected runStartupScripts(): void;
    private formatCacheId_;
    private configStrictEvaluator_;
    /** @private */
    private strictEvaluator_;
    private validateFields_;
    private getDef_;
    private hasModelDefCache_;
    /**
     * Obtém a definição da classe da chave informada. A definição obtida por esse método é
     * composta por declarações executadas a partir dos arquivos de model e x-class respectivamente e
     * que se encontram dentro da classe.
     *
     * Os arquivos de mime-type application/x-class que possuem extensão *.ic são considerados
     * deprecated para uso comum de modelo e visão, eles apenas serão responsáveis por definir
     * configurações. Quando getModelDef for chamado para uma classe que não está em modo estrito,
     * as definições antigas de eventos, nos arquivos de mime-type application/x-class, não
     * registrarão os listeners para serem executadas durante o disparo da pilha do evento.
     * @param {number} classKey Chave da classe.
     * @param {Object} [options] Opções para obter a definição do modelo.
     * @param {number[]} [options.ignoredFileKeys] Chaves de arquivos que devem ser ignorados.
     * @param {boolean} [options.forceStrictMode] Força o modo estrito na obtenção da definição
     * do modelo da classe.
     * @return {ModelDef} Definição de modelo da classe.
     */
    getModelDef(
        classKey: number,
        options?: {
            ignoredFileKeys?: number[];
            forceStrictMode?: boolean;
        }
    ): ModelDef;
    /**
     * Obtém a definição da classe da chave informada. A definição obtida por esse método é
     * composta por declarações executadas a partir dos arquivos de model e x-class respectivamente e
     * que se encontram dentro da classe.
     * Os arquivos de mime-type application/x-class que possuem extensão *.ic são considerados
     * deprecated para uso comum de modelo e visão, eles apenas serão responsáveis por definir
     * configurações.
     * @param {number} classKey Chave da classe.
     * @param {({ignoredFileKeys: Array<number>}|Record<*,*>)} [opt_options] Opções
     * para obter a definição do modelo. Array de chaves de arquivos que devem ser ignorados.
     * @return {ViewDef} Definição visão da classe.
     * @see module:@nginstack/web-framework/lib/classdef/ViewDef
     */
    getViewDef(
        classKey: number,
        opt_options?:
            | {
                  ignoredFileKeys: number[];
              }
            | Record<any, any>
    ): ViewDef;
    /**
     * Obtém a definição de classe da chave informada. A definição obtida por esse método é
     * composta por declarações executadas a partir dos arquivos de configuração que se
     * encontra dentro da classe.
     * @param {number} classKey
     * @param {({ignoredFileKeys: Array<number>}|Record<*,*>)} [opt_options] Opções
     * para obter a definição do modelo. Array de chaves de arquivos que devem ser ignorados.
     * @return {ConfigDef} Definição visão da classe.
     */
    getConfig(
        classKey: number,
        opt_options?:
            | {
                  ignoredFileKeys: number[];
              }
            | Record<any, any>
    ): ConfigDef;
    /**
     * Obtém a definição da classe da chave informada. A definição obtida por esse método é
     * composta por declarações executadas a partir dos arquivos de model e x-class respectivamente e
     * que se encontram dentro da classe.
     * Os arquivos de mime-type application/x-class que possuem extensão *.ic são considerados
     * deprecated para uso comum de modelo e visão, eles apenas serão responsáveis por definir
     * configurações.
     * @param {number} classKey Chave da classe.
     * @param {Array<number>} [opt_ignoredClassKeys] Array de chaves de arquivos que devem ser ignorados.
     * @return {ModelDef} Definição visão da classe.
     * @deprecated Prefira utilizar {@link ClassDefManager.getViewDef}
     */
    getClassDef(classKey: number, opt_ignoredClassKeys?: number[]): ModelDef;
    /**
     * Obtém uma definição de modelo da classe com base no código fonte informado. A definição
     * herdará todas as configurações da classe informada pelo parâmetro parent.
     * @param {string} src Código fonte que contém a definição. Deve possui o formato de um
     * x-class.
     * @param {number} parent Classe que terá a definição herdada. Caso não seja informado, será
     * considerado root.
     * @param {number} [opt_classKey] Classe na qual o código deverá ser avaliado. Caso seja,
     * informado, o modo estrito será ativo caso essa classe tenha essa configuração
     * habilitada.
     * @return {ModelDef} Definição da classe.
     */
    getModelDefBySource(src: string, parent: number, opt_classKey?: number): ModelDef;
    /**
     * Obtém uma definição de visão da classe com base no código fonte informado. A definição
     * herdará todas as configurações da classe informada pelo parâmetro parent.
     * @param {string} src Código fonte que contém a definição. Deve possui o formato de um
     * x-class.
     * @param {number} parent Classe que terá a definição herdada. Caso não seja informado, será
     * considerado root.
     * @return {ModelDef} Definição da classe.
     */
    getViewDefBySource(src: string, parent: number): ModelDef;
    /**
     * Obtém uma definição de visão da classe com base no código fonte informado. A definição
     * herdará todas as configurações da classe informada pelo parâmetro parent.
     * @param {string} src Código fonte que contém a definição. Deve possui o formato de um
     * x-class.
     * @param {number} parent Classe que terá a definição herdada. Caso não seja informado, será
     * considerado root.
     * @return {ModelDef} Definição da classe.
     * @deprecated Prefira usar o método {@link ClassDefManager#getViewDefBySource}.
     */
    getClassDefBySource: any;
    /**
     * Obtém uma definição de configuração da classe com base no código fonte informado. A definição
     * herdará todas as configurações da classe informada pelo parâmetro parent.
     * @param {string} src Código fonte que contém a definição. Deve possui o formato de um
     * x-class.
     * @param {number} parent Classe que terá a definição herdada. Caso não seja informado, será
     * considerado root.
     * @return {ModelDef} Definição da classe.
     */
    getConfigDefBySource(src: string, parent: number): ModelDef;
    private getDefBySource_;
    /**
     * Retorna um array contendo toda a hierarquia da classe informada até root.
     * @param {number} classKey Classe que terá a hierarquia montada.
     * @returns {Array<number>} Um array das chaves das classes, sendo o primeiro elemento a classe
     * informada e a última a classe root.
     */
    getHierarchicalClasses(classKey: number): number[];
    private createDef_;
    /**
     * Calcula a versão da definição da classe. A versão é um valor calculado com
     * base nos registros envolvidos na construção da definição da classe.
     * @param {number} classKey Classe da definição.
     * @param {string} sourceType Tipo da definição que está sendo obtida.
     * @return {number} Um valor opaco que deve apenas ser usado em comparações para detectar
     * se uma classDef deve ser reconstruído para refletir possíveis
     * modificações.
     */
    getDefVersion(classKey: number, sourceType: string): number;
    /**
     * Calcula a versão da definição da classe. A versão é um valor calculado com
     * base nos registros envolvidos na construção da definição da classe.
     * @param {number} classKey Classe da definição.
     * @return {number} Um valor opaco que deve apenas ser usado em comparações para detectar
     * se uma classDef deve ser reconstruído para refletir possíveis
     * modificações.
     * @deprecated Utilize {@link #getDefVersion}.
     */
    getClassDefVersion(classKey: number): number;
    private updateChildrenCachedClassDef_;
    /**
     * Apaga o cache, forçando que novas chamadas remontem as instâncias do cache.
     */
    clearCache(): void;
    /**
     * Verifica se a classe informada tem alguma definição de visão específica, ou seja, que não
     * herda todas as definições da sua classe mãe.
     * @param {number} classKey Classe a ser verificada.
     * @return {boolean} True se a classe difere da definição da sua classe mãe.
     * @see #hasOwnModelDef
     */
    hasOwnViewDef(classKey: number): boolean;
    /**
     * Verifica se a classe informada tem alguma definição de modelo específica, ou seja, que não
     * herda todas as definições da sua classe mãe.
     * @param {number} classKey Classe a ser verificada.
     * @return {boolean} True se a classe difere da definição da sua classe mãe.
     * @see #hasOwnViewDef
     */
    hasOwnModelDef(classKey: number): boolean;
    /**
     * Obtém a lista de classes filhas que foram configuradas apenas para agrupamento. De forma
     * similar ao método `getChildren`, este método também inclui a classe informada na lista
     * retornada caso ela seja apenas para agrupamento.
     * @param {number} classKey Classe mãe da hierarquia a ser consultada.
     * @return {string} Lista de chaves das classes apenas para agrupamento separadas por ",".
     */
    getJustToGroupChildren(classKey: number): string;
}
declare namespace ClassDefManager {
    export {
        protectedFieldProperties,
        protectedFieldEvents,
        protectedModelDefProperties,
        protectedModelDefEvents,
        constructors,
        getParentClass,
        getClassVersion,
        getInstance,
        DataSet,
        ViewDef,
    };
}
import ModelDef = require('./ModelDef.js');
import ConfigDef = require('./ConfigDef.js');
declare let protectedFieldProperties: string[];
declare let protectedFieldEvents: string[];
declare let protectedModelDefProperties: string[];
declare let protectedModelDefEvents: string[];
declare namespace constructors {
    export { ModelDef as VIEW };
    export { ModelDef as MODEL };
    export { ConfigDef as CONFIG };
    export { ModelDef as NON_STRICT_MODEL };
}
/**
 * Obtém a chave da classe mãe a partir de uma derivação do campo mãe da chave de uma classe filha,
 * utilizando a derivação de cache local.
 * @param {number|DBKey} classKey Chave de uma classe.
 * @return {number} Chave de uma classe mãe.
 * @private
 */
declare function getParentClass(classKey: number | DBKey): number;
/**
 * Obtém a versão de uma classe a partir de uma derivação do campo versão da chave da classe,
 * utilizando a derivação de cache local.
 * @param {number|DBKey} classKey Chave de uma classe.
 * @return {number} Versão do registro de classe.
 * @private
 */
declare function getClassVersion(classKey: number | DBKey): number;
/**
 * Retorna a instância global do ClassDefManager compartilhada com toda a
 * sessão.
 * @return {ClassDefManager}
 */
declare function getInstance(): ClassDefManager;
type DataSet = import('../dataset/DataSet');
type ViewDef = ModelDef;
import DBKey = require('../dbkey/DBKey.js');
