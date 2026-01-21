export = RecordIterator;
/** @module @nginstack/engine/lib/dataset/RecordIterator */
/**
 * Objeto responsável por iterar pelos registros do Delta de um DataSet.
 * @constructor
 */
declare function RecordIterator(): void;
declare class RecordIterator {
    /**
     * Método responsável por percorrer os registros. Quando chamado pela primeira vez esse
     * método posiciona o cursor no primeiro registro.
     *
     * O objeto retornado possui as seguintes propriedades, "done", propriedade facultativa que,
     * se existir, indica se ainda existem registros a serem percorridos, "value",
     * da acesso aos campos do registro corrente.
     * @example
     * let str = '';
     * let next = recordIterator.next();
     * while (!next.done){
     *   str = str + ' ' + next.value.iname;
     *   next = recordIterator.next();
     * }
     * @return {{done: boolean, value: Record<string,(string|number|boolean|Date)>}} Objeto que indica
     * se a interação foi concluída e permite acesso aos campos do registro corrente.
     */
    next(): {
        done: boolean;
        value: Record<string, string | number | boolean | Date>;
    };
}
