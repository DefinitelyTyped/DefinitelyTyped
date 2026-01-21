export = DeltaDumper;
/**
 * Classe que permite analisar a estrutura interna do delta de um DataSet. O delta de um DataSet
 * contém as modificações realizadas no DataSet que serão efetivadas no banco de dados ao executar
 * o método *applyUpdates*.
 */
declare function DeltaDumper(): void;
declare namespace DeltaDumper {
    export { getDeltaDump, DELTA_INSERTED, DELTA_UPDATED, DELTA_DELETED, DELTA_ALL, DataSet };
}
/**
 * Retorna um objeto representado o delta com as modificações feitas no DataSet.
 * @param {DataSet} ds DataSet que será analisado
 * @param {number} [deltaKind] tipo de atualização retornada no delta. Opções:
 * DeltaDumper.DELTA_INSERTED, DeltaDumper.DELTA_UPDATED,
 * DeltaDumper.DELTA_DELETED, DeltaDumper.DELTA_ALL.
 * @return {Object} JSON representando o delta do DataSet.
 */
declare function getDeltaDump(ds: DataSet, deltaKind?: number): any;
declare let DELTA_INSERTED: number;
declare let DELTA_UPDATED: number;
declare let DELTA_DELETED: number;
declare let DELTA_ALL: number;
type DataSet = import('./DataSet');
