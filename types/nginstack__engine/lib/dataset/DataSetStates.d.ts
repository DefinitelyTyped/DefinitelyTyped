export = DataSetStates;
/**
 * Classe utilizada para enumerar os valores possíveis da propriedade DataSet.state.
 *
 * Esta classe também é publicada pelo Engine por meio da variável global **DataSetStates**.
 * @class
 * @see module:@nginstack/engine/lib/dataset/DataSet#state
 */
declare function DataSetStates(): void;
declare class DataSetStates {}
declare namespace DataSetStates {
    let BROWSE: number;
    let EDIT: number;
    let INSERT: number;
    let INACTIVE: number;
}
