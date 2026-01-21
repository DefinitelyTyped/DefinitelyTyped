export = FieldGroupSet;
/** @module @nginstack/engine/lib/classdef/FieldGroupSet */
/**
 * Classe que contém a coleção de grupos de campos.
 * @constructor
 * @see module:@nginstack/web-framework/lib/grid/Grid~Grid#groups
 */
declare function FieldGroupSet(): void;
declare class FieldGroupSet {
    items: any;
    /**
     * Adiciona um {@link module:@nginstack/engine/lib/classdef/FieldGroup}.
     * @param {import('@nginstack/engine/lib/classdef/FieldGroup')} fieldGroup Grupo de um campo.
     */
    add(fieldGroup: import('@nginstack/engine/lib/classdef/FieldGroup')): void;
    private _find;
    /**
     * Encontra um grupo de campo dento da coleção de grupo de campos
     * pelo nome do grupo de campo.
     * @param {string} name Nome do grupo de campo.
     * @return {import('@nginstack/engine/lib/classdef/FieldGroup')} Grupo de campo.
     */
    findByName(name: string): import('@nginstack/engine/lib/classdef/FieldGroup');
    /**
     * Copia as propriedades do FieldGroupList informado.
     * @param {FieldGroupSet} obj Objeto cujas propriedades serão copiadas.
     */
    assign(obj: FieldGroupSet): void;
    /**
     * Cria uma cópia do FieldGroup e assimila todas as propriedades à cópia.
     * @return {FieldGroupSet}
     */
    clone(): FieldGroupSet;
}
