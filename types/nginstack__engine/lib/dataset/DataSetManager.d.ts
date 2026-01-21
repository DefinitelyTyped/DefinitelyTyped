export = DataSetManager;
/**
 * @typedef {import('../io/File')} File
 * @private
 */
/**
 * @typedef {import('../io/MemoryStream')} MemoryStream
 * @private
 */
/**
 * Classe de objeto para o trabalho com vários datasets, facilitando a execução dos
 * queries em bloco e possibilitando a abstração da origem dos datasets bem como
 * a serialização dos datasets.
 * @constructor
 */
declare function DataSetManager(): void;
declare class DataSetManager {
    /** @private */
    private _dataSets;
    /**
     * Adiciona query na lista de queries a serem executados
     *
     * @param {string} dataSetName Nome do dataset, utilizado para se
     *                 obter o dataset após execução do query.
     * @param {string} query Query a ser executado no banco. A query
     *                 ficará associada ao nome do dataset.
     * @param {boolean} [union] Adiciona mais um query ao dataset,
     *                  onde esse query será dado union com outro existente.
     */
    addDataSetQuery(dataSetName: string, query: string, union?: boolean): void;
    /**
     * Adiciona dataset na lista de datasets
     *
     * @param {string} dataSetName Nome do dataset sendo adicionado.
     * @param {DataSet} dataSet Dataset que ficará associada ao nome.
     */
    addDataSet(dataSetName: string, dataSet: DataSet): void;
    /**
     * Muda um query de um dataset
     *
     * @param {string} dataSetName Nome do dataset, utilizado para se obter o dataset após
     * execução do query.
     * @param {string} query Query a ser executado no banco. A query ficará associada ao nome
     * do dataset.
     * @param {boolean} Informa se o dataSet vai ser mantido.
     */
    setDataSetQuery(dataSetName: string, query: string, keepDataSet: any, union: any): void;
    /**
     * Altera o dataset
     *
     * @param {string} dataSetName Nome do dataset sendo alterado.
     * @param {DataSet} dataSet Dataset que ficará associada ao nome.
     */
    setDataSet(dataSetName: string, dataSet: DataSet): void;
    private _executeQueries;
    /** @private */
    private _executeQuerys;
    /**
     * Executa todas as consultas.
     */
    executeAllQueries(): void;
    /** @private */
    private executeAllQuerys;
    /**
     * Executa as consultas pendentes, ou seja, as que não possuem dataset.
     */
    executePendingQueries(): void;
    /** @private */
    private executePendingQuerys;
    /**
     * Pega um dataset pelo nome.
     *
     * @param {string} dataSetName Nome do dataSet a ser obtido.
     * @return {DataSet} Dataset associado ao nome
     */
    getDataSet(dataSetName: string): DataSet;
    /**
     * Pega um query pelo nome. O resultado pode ser uma string ou um array no
     * caso de um dataset com querys para union.
     *
     * @param {string} dataSetName Nome do dataSet a ser obtido.
     * @return {string|Array} A query associada ao nome
     */
    getQuery(dataSetName: string): string | any[];
    /**
     * Pega todos os nomes de datasets no gerenciador.
     *
     * @return {Array} Array com os nomes dos datasets
     */
    getDataSetNames(): any[];
    /**
     * Verifica se um nome de dataset já foi definido.
     * @param dataSetName {string} nome do dataset a ser verificado
     * @returns {boolean} Retorna true se existe o nome do dataset
     */
    dataSetNameExists(dataSetName: string): boolean;
    /**
     * Limpa a lista dos datasets
     */
    clearAll(): void;
    /**
     * Limpa os datasets
     */
    clearDataSets(): void;
    /**
     * Remove um dataSet e todas as suas propriedades vinculadas a um determinado nome.
     * @param {string|Array} um nome ou array de nomes dos dataSets.
     */
    delDataSets(names: any): void;
    /**
     * Serializa os datasets para um stream.
     * O nome do dataset vai prefixar o dataset no arquivo e o separador entre o nome
     * do dataset e o dataset será # (cerquilha).
     *
     * @param {MemoryStream} stream O stream onde será serializado os datasets.
     */
    saveToStream(stream: MemoryStream): void;
    private _getDataSetNameFromStream;
    /**
     * Reconstrói os datasets serializados pelo DataSetManager a partir um stream.
     * @param {File|MemoryStream} stream Stream que contém os datasets serializados.
     */
    loadFromStream(stream: File | MemoryStream): void;
}
declare namespace DataSetManager {
    export { File, MemoryStream };
}
import DataSet = require('./DataSet.js');
type File = import('../io/File');
type MemoryStream = import('../io/MemoryStream');
