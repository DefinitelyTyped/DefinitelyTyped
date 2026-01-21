export = BigDecimal;
/**
 * O objeto BigDecimal armazena um imutável número decimal de precisão arbitrária,
 * possibilitando a realização de operações aritméticas sem os erros de precisão
 * que comumente ocorrem com números de ponto flutuante.
 *
 * A implementação utiliza a biblioteca [mpdecimal](https://www.bytereef.org/mpdecimal/), também
 * utilizada pela linguagem Python.
 *
 * Esta classe também é publicada pelo Engine por meio da variável global **BigDecimal**.
 * @param {number|BigDecimal|string} value Um valor decimal.
 * @constructor
 */
declare function BigDecimal(value: number | BigDecimal | string): void;
declare class BigDecimal {
    /**
     * O objeto BigDecimal armazena um imutável número decimal de precisão arbitrária,
     * possibilitando a realização de operações aritméticas sem os erros de precisão
     * que comumente ocorrem com números de ponto flutuante.
     *
     * A implementação utiliza a biblioteca [mpdecimal](https://www.bytereef.org/mpdecimal/), também
     * utilizada pela linguagem Python.
     *
     * Esta classe também é publicada pelo Engine por meio da variável global **BigDecimal**.
     * @param {number|BigDecimal|string} value Um valor decimal.
     * @constructor
     */
    constructor(value: number | BigDecimal | string);
    /**
     * Calcula a soma deste decimal com value.
     * @param {number|BigDecimal|string} value Um valor decimal.
     * @return {BigDecimal} O resultado da soma deste decimal com value.
     */
    plus(value: number | BigDecimal | string): BigDecimal;
    /**
     * Calcula a subtração deste decimal por value.
     * @param {number|BigDecimal|string} value Um valor decimal.
     * @return {BigDecimal} O resultado da subtração deste decimal por value.
     */
    minus(value: number | BigDecimal | string): BigDecimal;
    /**
     * Calcula a multiplicação deste decimal por value.
     * @param {number|BigDecimal|string} value Um valor decimal.
     * @return {BigDecimal} O resultado da multiplicação deste decimal por value.
     */
    times(value: number | BigDecimal | string): BigDecimal;
    /**
     * Calcula a divisão deste decimal por value.
     * @param {number|BigDecimal|string} value Um valor decimal.
     * @return {BigDecimal} O resultado da divisão deste decimal por value.
     */
    dividedBy(value: number | BigDecimal | string): BigDecimal;
    /**
     * Calcula a parte inteira da divisão Euclidiana deste decimal por value.
     * @param {number|BigDecimal|string} value Um valor decimal.
     * @return {BigDecimal} A parte inteira do resultado da divisão Euclidiana deste decimal por value.
     */
    dividedToIntegerBy(value: number | BigDecimal | string): BigDecimal;
    /**
     * Calcula o resto da divisão Euclidiana deste decimal por value.
     * @param {number|BigDecimal|string} value Um valor decimal.
     * @return {BigDecimal} O resto da divisão Euclidiana deste decimal por value.
     */
    modulo(value: number | BigDecimal | string): BigDecimal;
    /**
     * Testa se este decimal é igual a value.
     * @param {number|BigDecimal|string} value Um valor decimal.
     * @return {boolean} o boolean True se os dois decimais são iguais, ou False se são diferentes.
     */
    equals(value: number | BigDecimal | string): boolean;
    /**
     * Compara este decimal com value.
     * @param {number|BigDecimal|string} value Um valor decimal.
     * @return {number} 1 se este decimal é maior do que value, -1 se é menor e 0 se é igual
     */
    compareTo(value: number | BigDecimal | string): number;
    /**
     * Testa se este decimal é maior do que value.
     * @param {number|BigDecimal|string} value Um valor decimal.
     * @return {boolean} true se este decimal é maior do que value.
     */
    greaterThan(value: number | BigDecimal | string): boolean;
    /**
     * Testa se este decimal é maior ou igual a value.
     * @param {number|BigDecimal|string} value Um valor decimal.
     * @return {boolean} true se este decimal é maior do que ou igual a value.
     */
    greaterThanOrEqualTo(value: number | BigDecimal | string): boolean;
    /**
     * Testa se este decimal é menor do que value.
     * @param {number|BigDecimal|string} value Um valor decimal.
     * @return {boolean} true se este decimal é menor do que value.
     */
    lessThan(value: number | BigDecimal | string): boolean;
    /**
     * Testa se este decimal é menor ou igual a value.
     * @param {number|BigDecimal|string} value Um valor decimal.
     * @return {boolean} true se este decimal é menor ou igual a value.
     */
    lessThanOrEqualTo(value: number | BigDecimal | string): boolean;
    /**
     * Calcula o valor deste decimal potência de value.
     * @param {number|BigDecimal|string} value Um valor decimal.
     * @return {BigDecimal} O valor deste decimal potência de value.
     */
    pow(value: number | BigDecimal | string): BigDecimal;
    /**
     * Calcula o valor absoluto deste decimal.
     * @return {BigDecimal} O valor absoluto deste decimal.
     */
    abs(): BigDecimal;
    /**
     * Calcula o valor deste decimal com o sinal invertido.
     * @return {BigDecimal} O valor negativado deste decimal, ou seja, com o sinal invertido.
     */
    negate(): BigDecimal;
    /**
     * Testa se este decimal é infinito.
     * @return {boolean} True se o valor deste decimal é infinito.
     */
    isInfinite(): boolean;
    /**
     * Testa se este decimal possui o valor NaN.
     * @return {boolean} True se o valor deste decimal é NaN.
     */
    isNaN(): boolean;
    /**
     * Testa se este decimal é positivo.
     *
     * Diferentemente da biblioteca [mpdecimal](https://www.bytereef.org/mpdecimal/), na qual esta
     * API é baseada, este método não considera que `+0` é um número positivo.
     * @return {boolean} True se o valor deste decimal é positivo.
     */
    isPositive(): boolean;
    /**
     * Testa se este decimal é negativo.
     *
     * Diferentemente da biblioteca [mpdecimal](https://www.bytereef.org/mpdecimal/), na qual esta
     * API é baseada, este método não considera que `-0` é um número negativo.
     * @return {boolean} True se o valor deste decimal é negativo.
     */
    isNegative(): boolean;
    /**
     * Testa se este decimal é igual a zero.
     * @return {boolean} True se o valor deste decimal é igual a zero.
     */
    isZero(): boolean;
    /**
     * Calcula a raiz quadrada do valor deste decimal.
     * @return {BigDecimal} A raiz quadrada.
     */
    sqrt(): BigDecimal;
    /**
     * Calcula o maior decimal inteiro que é menor ou igual a este decimal.
     * @return {BigDecimal} O valor decimal calculado.
     */
    floor(): BigDecimal;
    /**
     * Calcula o menor decimal inteiro que é maior ou igual a este decimal.
     * @return {BigDecimal} O valor decimal calculado.
     */
    ceil(): BigDecimal;
    /**
     * Calcula o valor deste decimal arredondado para o número de casas decimais.
     * @param {number} places Número de casas decimais.
     * @return {BigDecimal} O valor decimal calculado.
     */
    toDecimalPlaces(places: number): BigDecimal;
    /**
     * Calcula o valor decimal que é igual a este decimal, mas com o expoente de value.
     * @param {number|BigDecimal|string} value Um valor decimal.
     * @return {BigDecimal} O valor decimal calculado.
     */
    quantize(value: number | BigDecimal | string): BigDecimal;
}
declare namespace BigDecimal {
    /**
     * Altera algumas parametrizações dos objetos BigDecimal da sessão. Ao alterar estes parâmetros
     * todos os objetos BigDecimal da sessão são impactados.
     * @param {object} params Os parâmetros
     * @param {number} [params.rounding] Uma constante com o modo de arredondamento que deve ser
     * utilizado quando necessário. Valores possíveis:
     *
     * * RoundingMode.HALF_EVEN: arredonda para o decimal mais próximo ou mantém o mesmo dígito.
     * * RoundingMode.HALF_DOWN: arredonda para o decimal mais próximo ou em direção a
     * zero (truncamento).
     * * RoundingMode.HALF_UP: arredonda para o decimal mais próximo ou para longe do zero. É o modo
     * padrão.
     * * RoundingMode.FLOOR: arredonda para o menor valor decimal mais próximo.
     * * RoundingMode.CEILING: arredonda para o maior valor decimal mais próximo.
     * * RoundingMode.DOWN: arredonda em direção a zero (truncamento).
     * * RoundingMode.UP: arredonda para longe de zero.
     * @param {number} [params.precision] O número máximo de dígitos que pode ser armazenado.
     * O valor padrão é 38.
     * @param {number} [params.emax] O maior expoente possível. O valor padrão é 425000000.
     * @param {number} [params.emin] O menor expoente possível. O valor padrão é -425000000.
     */
    function config(params: {
        rounding?: number;
        precision?: number;
        emax?: number;
        emin?: number;
    }): void;
    /**
     * Calcula o valor decimal resultado da soma de a com b.
     * @param {number|BigDecimal|string} a Um valor decimal.
     * @param {number|BigDecimal|string} b Um valor decimal.
     * @return {BigDecimal} O valor decimal calculado.
     */
    function add(a: number | BigDecimal | string, b: number | BigDecimal | string): BigDecimal;
    /**
     * Calcula o valor decimal resultado da subtração de a por b.
     * @param {number|BigDecimal|string} a Um valor decimal.
     * @param {number|BigDecimal|string} b Um valor decimal.
     * @return {BigDecimal} O valor decimal calculado.
     */
    function sub(a: number | BigDecimal | string, b: number | BigDecimal | string): BigDecimal;
    /**
     * Calcula o valor decimal resultado da divisão de a por b.
     * @param {number|BigDecimal|string} a Um valor decimal.
     * @param {number|BigDecimal|string} b Um valor decimal.
     * @return {BigDecimal} O valor decimal calculado.
     */
    function div(a: number | BigDecimal | string, b: number | BigDecimal | string): BigDecimal;
    /**
     * Calcula o valor decimal resultado da multiplicação de a por b.
     * @param {number|BigDecimal|string} a Um valor decimal.
     * @param {number|BigDecimal|string} b Um valor decimal.
     * @return {BigDecimal} O valor decimal calculado.
     */
    function mul(a: number | BigDecimal | string, b: number | BigDecimal | string): BigDecimal;
}
