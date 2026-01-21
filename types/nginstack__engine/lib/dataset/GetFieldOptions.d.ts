export = GetFieldOptions;
/**
 * Classe utilizada para enumerar os valores possíveis do parâmetro options do
 * método DataSet.getField().
 *
 * Esta classe também é publicada pelo Engine por meio da variável global **GetFieldOptions**.
 * @class
 * @see module:@nginstack/engine/lib/dataset/DataSet#getField
 */
declare function GetFieldOptions(): void;
declare class GetFieldOptions {}
declare namespace GetFieldOptions {
    let BEFORE_VALUE: number;
    let ORIGINAL_VALUE: number;
    let IGNORE_FIELD_NOT_FOUND: number;
}
