export = PropertyMapper;
/** @module @nginstack/engine/lib/object/PropertyMapper */
/**
 *  Classe que abstrai o acesso as propriedades de objetos literais através da regra definida
 *  pela função de tradução.
 *  Ela mantem um mapa associativo das propriedades já traduzidas para aumentar a eficiência.
 *  @param {function(string): string} translateFunction função de tradução para
 *  acesso as propriedades.
 */
declare function PropertyMapper(translateFunction: (arg0: string) => string): void;
declare class PropertyMapper {
    /** @module @nginstack/engine/lib/object/PropertyMapper */
    /**
     *  Classe que abstrai o acesso as propriedades de objetos literais através da regra definida
     *  pela função de tradução.
     *  Ela mantem um mapa associativo das propriedades já traduzidas para aumentar a eficiência.
     *  @param {function(string): string} translateFunction função de tradução para
     *  acesso as propriedades.
     */
    constructor(translateFunction: (arg0: string) => string);
    translateFunction_: (arg0: string) => string;
    /** @private */
    private hash_;
    /**
     * Acessa a propriedade do objeto através da função de tradução.
     * @param {Object} obj objeto que terá as propriedades acessadas.
     * @param {string} propertyName nome da propriedade a ser acessada.
     * @returns {*} valor da propriedade.
     */
    get(obj: any, propertyName: string): any;
    /**
     * Recupera o nome da propriedade traduzida. Esta implementação aproveita o mapa de tradução.
     * @param {string} propertyName nome da propriedade.
     * @returns {string} nome da propriedade traduzida.
     */
    getTranslatedPropertyName(propertyName: string): string;
}
