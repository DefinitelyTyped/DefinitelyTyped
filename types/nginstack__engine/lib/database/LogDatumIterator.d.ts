export = LogDatumIterator;
/** @module @nginstack/engine/lib/database/LogDatumIterator */
/**
 * Objeto que permite percorrer os valores contidos nos campos iAfterValues ou iBeforeValues da
 * tabela iLog.
 *
 * Esses campos contém uma sequência de valores no formato:
 * <SIZE_1>:<VALUE_1>;<SIZE_2>:<VALUE_2>;...;<SIZE_N>:<VALUE_n>
 *
 * O objetivo desta classe é iterar essa lista extraindo os seus valores. Ao iterar sobre ela,
 * a propriedade {@link #data} será atualizada com o valor lido, sempre com o tipo *string*. O
 * campo iFieldNames da tabela iLog deve ser utilizado para obter o significado e o tipo original
 * dos valores iterados. Ela contém a lista de campos separada por **;** de onde foram obtidos os
 * valores.
 *
 * **Importante**: essa API é complexa de ser utilizada, pois o seu resultado tem que ser combinado
 * com outros campos da tabela iLog. Ela também possui um nomenclatura incorreta para um
 * iterador e é mantida para fins de compatibilidade. O seu uso não é recomendado para novos
 * códigos.
 * @example
 *  var LogDatumIterator = require('@nginstack/engine/lib/database/LogDatumIterator');
 *  var iterator = new LogDatumIterator('3:ABC;11:-1891604035');
 *  if (iterator.getFirstValue()) {
 *    do {
 *      processData(iterator.data);
 *    } while (iterator.getNextValue())
 *  }
 * @param {string} values Valor dos campos iAfterValues ou iBeforeValues da tabela iLog.
 * @constructor
 */
declare function LogDatumIterator(values: string): void;
declare class LogDatumIterator {
    /** @module @nginstack/engine/lib/database/LogDatumIterator */
    /**
     * Objeto que permite percorrer os valores contidos nos campos iAfterValues ou iBeforeValues da
     * tabela iLog.
     *
     * Esses campos contém uma sequência de valores no formato:
     * <SIZE_1>:<VALUE_1>;<SIZE_2>:<VALUE_2>;...;<SIZE_N>:<VALUE_n>
     *
     * O objetivo desta classe é iterar essa lista extraindo os seus valores. Ao iterar sobre ela,
     * a propriedade {@link #data} será atualizada com o valor lido, sempre com o tipo *string*. O
     * campo iFieldNames da tabela iLog deve ser utilizado para obter o significado e o tipo original
     * dos valores iterados. Ela contém a lista de campos separada por **;** de onde foram obtidos os
     * valores.
     *
     * **Importante**: essa API é complexa de ser utilizada, pois o seu resultado tem que ser combinado
     * com outros campos da tabela iLog. Ela também possui um nomenclatura incorreta para um
     * iterador e é mantida para fins de compatibilidade. O seu uso não é recomendado para novos
     * códigos.
     * @example
     *  var LogDatumIterator = require('@nginstack/engine/lib/database/LogDatumIterator');
     *  var iterator = new LogDatumIterator('3:ABC;11:-1891604035');
     *  if (iterator.getFirstValue()) {
     *    do {
     *      processData(iterator.data);
     *    } while (iterator.getNextValue())
     *  }
     * @param {string} values Valor dos campos iAfterValues ou iBeforeValues da tabela iLog.
     * @constructor
     */
    constructor(values: string);
    values: string;
    data: string;
    size: number;
    endPos: number;
    /**
     * Reinicia o iterador com uma nova lista de valores.
     * @param {string} values Lista de valores que será iterada.
     */
    initValues(values: string): void;
    /**
     * Atualiza {@link #data} com o próximo valor da lista, caso haja um.
     * @return {boolean} Retorna true se houver mais um valor.
     */
    getNextValue(): boolean;
    /**
     * Atualiza {@link #data} com o primeiro valor da lista caso a lista não esteja vazia
     * @return {boolean} Retorna true se houver mais um valor.
     */
    getFirstValue(): boolean;
}
