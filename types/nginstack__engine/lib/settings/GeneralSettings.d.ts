export = GeneralSettings;
/**
 * @typedef {import('../dataset/DataSet')} DataSet
 * @private
 */
/**
 * Classe responsável por acessar e alterar as configurações gerais do sistema.
 *
 * As configurações gerais são parametrizações do sistema que não são diretamente associadas às
 * classes de dados, aos usuários ou ao modelo de permissões. São regras que normalmente afetam
 * todo o sistema ou um módulo específico.
 *
 * Os tipos de configurações suportados são definidos pelo enumerado
 * {@link module:@nginstack/engine/lib/setting/SettingType~SettingType SettingType} e pela
 * classe de dados "/Dados/Sistema/Tabelas auxiliares/Tipos de configurações gerais"
 * (-1898139836).
 * @constructor
 */
declare function GeneralSettings(): void;
declare class GeneralSettings {
    /** @private */
    private data_;
    /** @private */
    private database_;
    /**
     * Logger utilizado pela classe GeneralSettings.
     * @private
     */
    private logger_;
    private keyIsValid_;
    private normalizeValue_;
    private getRecordValue_;
    private updateRecordValue_;
    private update_;
    /**
     * Obtém as opções de uma configuração a partir de um registro de definição de configuração.
     * @param {DataSet} data DataSet posicionado no registro com a definição da configuração.
     * @return {SettingOptions} Opções da configuração.
     */
    getSettingOptionsFromRecord(data: DataSet): SettingOptions;
    /**
     * Obtém o valor de uma configuração específica ou de um conjunto de configurações identificadas
     * pela seção.
     * @param {string|number|DBKey} id Identificador de uma configuração específica ou de uma seção de
     * configurações.
     * @return {*} Valor de uma configuração específica ou um objeto contendo um conjunto de
     * configurações. Caso não seja encontrada uma configuração com o identificador informado, será
     * retornado `undefined`.
     * @example
     * const settings = require('@nginstack/engine/lib/settings/GeneralSettings').getInstance();
     * settings.get('wf.login.colors.primary'); // => '#1565c0'
     * settings.get('wf.login.colors'); // {primary: '#1565c0', secondary: '#546e7a', background: '#fafafa'}
     */
    get(id: string | number | DBKey): any;
    /**
     * Altera o valor de uma configuração específica ou de um conjunto de configurações identificadas
     * pela seção.
     * @param {string|number|DBKey} id Identificador de uma configuração específica ou de uma seção de
     * configurações.
     * @param {*} value Novo valor de uma configuração específica ou um objeto contendo um conjunto de
     * configurações.
     * @return {number} Versão das modificações realizadas na base de dados ou zero se não houve
     * nenhuma.
     * @example
     * const settings = require('@nginstack/engine/lib/settings/GeneralSettings').getInstance();
     * settings.update('wf.login.colors.primary', '#1565c0');
     * settings.update('wf.login.colors', {
     *   primary: '#1565c0',
     *   secondary: '#546e7a',
     *   background: '#fafafa'
     * });
     */
    update(id: string | number | DBKey, value: any): number;
    /**
     * Verifica se o nome de configuração informado é válido e único.
     *
     * Os nomes das configurações devem ser compostos de letras não acentuadas, números e o
     * caractere "_", podendo ser delimitados por pontos com o objetivo de agrupar as
     * configurações em seções, simplificando a leitura delas. O nome de uma configuração precisa
     * ser único e não pode ser um prefixo do nome de uma outra configuração.
     * @param {string} name Nome a ser verificado.
     * @param {DBKey|number} [key] Chave da configuração, caso ela já exista no sistema.
     */
    validateSettingName(name: string, key?: DBKey | number): void;
    /**
     * Converte o valor de uma configuração em uma `string` que pode ser posteriormente
     * restaurada pelo método `parseValue`.
     *
     * Será gerado um erro se o valor informado for incompatível com o tipo da configuração.
     * @param {*} value Valor a ser normalizado.
     * @param {SettingOptions} options Opções da configuração.
     * @return {string} Valor da configuração convertido em uma `string`.
     */
    stringifyValue(value: any, options: SettingOptions): string;
    /**
     * Restaura um valor de configuração previamente serializado pelo método `stringifyValue`.
     * @param {string} text Valor serializado previamente pelo método `stringifyValue`.
     * @param {SettingOptions} options Opções da configuração.
     * @return {*} Valor original. Caso o valor seja múltiplo, será retornado um array de valores.
     */
    parseValue(text: string, options: SettingOptions): any;
    /**
     * Obtém o valor padrão de uma configuração específica.
     * @param {string|number|DBKey} id Identificador de uma configuração específica.
     * @return {*} Valor padrão de uma configuração específica. Caso não seja encontrada uma
     * configuração com o identificador informado, será retornado `undefined`.
     * @example
     * const settings = require('@nginstack/engine/lib/settings/GeneralSettings').getInstance();
     * settings.getDefaultValue('wf.login.colors.primary'); // => '#1565c0'
     */
    getDefaultValue(id: string | number | DBKey): any;
    /**
     * Versão que é incrementada caso seja detectada alguma modificação nas configurações.
     * @type {number}
     */
    version: number;
}
declare namespace GeneralSettings {
    export { getInstance, SettingOptions, DataSet };
}
import DBKey = require('../dbkey/DBKey.js');
/**
 * Obtém uma instância compartilhada desta classe.
 * @returns {GeneralSettings}
 */
declare function getInstance(): GeneralSettings;
/**
 * Opções de uma configuração geral.
 */
interface SettingOptions {
    /**
     * Tipo da configuração.
     */
    type: SettingType;
    /**
     * Indica se a configuração permite valores múltiplos.
     */
    multiple?: boolean;
    /**
     * Classe de dados dos valores da configuração. Suportado apenas
     * em configurações do tipo "dbkey".
     */
    classKey?: number;
    /**
     * Tipo de referência
     * dos valores da configuração. Suportado apenas em configurações do tipo "dbkey".
     */
    lookupType?: typeof LookupType;
}
type DataSet = import('../dataset/DataSet');
import SettingType = require('./SettingType.js');
import LookupType = require('../classdef/LookupType.js');
