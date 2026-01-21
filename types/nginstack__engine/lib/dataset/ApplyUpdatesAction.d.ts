export = ApplyUpdatesAction;
/**
 * Classe utilizada para enumerar os valores possíveis do parâmetro action do
 * método {@link module:@nginstack/engine/lib/dataset/DataSet#setRecordApplyUpdatesAction} e
 * {@link module:@nginstack/engine/lib/dataset/DataSet#getRecordApplyUpdatesAction}.
 *
 * Esta classe também é publicada pelo Engine por meio da variável global **ApplyUpdatesAction**.
 * @class
 */
declare function ApplyUpdatesAction(): void;
declare class ApplyUpdatesAction {}
declare namespace ApplyUpdatesAction {
    let NONE: number;
    let INSERT: number;
    let UPDATE: number;
    let DELETE: number;
    let FORCED_UPDATE: number;
}
