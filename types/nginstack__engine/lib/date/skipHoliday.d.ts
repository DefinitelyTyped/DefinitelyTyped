export = skipHoliday;
/**
 * Retorna a data ou a próxima data a partir da informada que não seja um sábado, domingo ou
 * feriado.
 * @param {Date} dt data base que será verificada.
 * @param {number} uf de cadastro do feriado.
 * @param {number} localidade Localidade de cadastro do feriado.
 * @param {DataSet} [holidays] Dataset com os feriados cadastrados. Caso não seja informado, será
 * utilizado o cadastro de feriados da base corrente definidos pela classe "Feriados" (-1897053422).
 * O DataSet informado deve ter o mesma esquema definido por essa classe.
 * @returns {Date} Retorna uma data válida a partir da informada.
 */
declare function skipHoliday(dt: Date, uf: number, localidade: number, holidays?: DataSet): Date;
declare namespace skipHoliday {
    export { DataSet };
}
type DataSet = import('../dataset/DataSet');
