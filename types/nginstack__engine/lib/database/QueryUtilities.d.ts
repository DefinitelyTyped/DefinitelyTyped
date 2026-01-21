export = QueryUtilities;
/**
 * Classe que fornece diversas funções auxiliares para a construção de consultas SQL.
 * @constructor
 */
declare function QueryUtilities(): void;
declare class QueryUtilities {
    /**
     * Quantidade máxima de elementos que serão contidos em uma lista informada ao operador IN.
     * @type {number}
     */
    maxInOperatorListLength: number;
    /**
     * Cria uma cláusula que filtra uma consulta com base em uma lista de chaves.
     *
     * **Importante**: para fins de compatibilidade, esta função trata a chave "-1" de forma especial.
     * Essa chave sempre será desconsiderada do filtro e caso seja informado uma lista contendo apenas
     * essa chave, será retornada uma string vazia.
     * @param {string} prefixWhereAndOr Prefixo da cláusula, sendo comumente utilizados os valores
     * '' (sem prefixo), 'WHERE', 'OR' e 'AND'.
     * @param {string} fieldName Nome da coluna que será filtrada. O valor informado deve ser
     * um identificador SQL válido, não sendo aceitas expressões SQL.
     * @param {number|string} keys Chave ou lista de chaves separada por ",".
     * @param {boolean} [negation] Se `true`, a cláusula será montada como uma negação (NOT IN).
     * @param {boolean} [split] Se `true`, a expressão poderá ser quebrada em várias expressões. Caso
     * não seja informado, será considerado `true`. Parâmetro legado que não deve ser mais utilizado.
     * @param {string} [operatorConcat] Valor padrão OR. Concatenador das
     * expressões caso tenha quebra em mais de uma expressão (split == true). Parâmetro legado
     * que não deve ser mais utilizado.
     * @param {number} [countKeysForSplit] Quantidade máxima de chaves contidas em uma lista do
     * operador IN, caso `split` seja `true`. Caso não seja informado, será utilizado o valor da
     * propriedade {@link #maxInOperatorListLength}. Parâmetro legado que não deve ser mais utilizado.
     * @return {string} Cláusula SQL que realiza a condição de filtro informada ou uma string vazia
     * caso `keys` seja uma lista vazia ou se for igual a '-1' (compatibilidade com a API legada de
     * classes).
     * @example
     * var queryUtilities = require('@nginstack/engine/lib/database/QueryUtilities').getInstance();
     *
     * var chaves = "-1899999998,-1899999997,-1899999122,-1899931617,-1899927771,-1898188393," +
     *    "-1898188390,-1898188389,-1898188388,-1898188233,-1898188232,-1898188231,-1897148047";
     *
     * var where = queryUtilities.clauseWhereOfKeys( "where", "p.PESSOA", chaves);
     * // => " where p.PESSOA in ( -1899999998,-1899999997,-1899999122,-1899931617,-1899927771," +
     *    "-1898188393,-1898188390,-1898188389,-1898188388,-1898188233,-1898188232," +
     *    "-1898188231,-1897148047 )"
     *
     * // O quarto parâmetro (negation), indica que a expressão para a query deverá ser de negação.
     * where = queryUtilities.clauseWhereOfKeys( "where", "p.PESSOA", chaves, true )
     * // => " WHERE p.pessoa NOT IN ( -1899999998,-1899999997,-1899999122,-1899931617,-1899927771," +
     *    "-1898188393,-1898188390,-1898188389,-1898188388,-1898188233,-1898188232," +
     *    "-1898188231,-1897148047 ) "
     * @see #clauseWhereOfChar
     * @see #clauseWhereOfStrings
     * @see #clauseWhere
     */
    clauseWhereOfKeys(
        prefixWhereAndOr: string,
        fieldName: string,
        keys: number | string,
        negation?: boolean,
        split?: boolean,
        operatorConcat?: string,
        countKeysForSplit?: number,
        ...args: any[]
    ): string;
    /**
     * Cria uma cláusula SQL para filtrar uma coluna por um valor ou uma lista de valores textuais
     * realizando uma comparação sem diferenciar letras maiúsculas e minúsculas, ou por um padrão
     * de pesquisa.
     *
     * Para pesquisar por um padrão, deve-se utilizar os coringas "%" ou ".." para determinar
     * a parte do texto que não é relevante para a pesquisa. Na prática, a pesquisa utilizará o
     * operador `LIKE` e substituíra ".." por "%". Portanto, o filtro por "texto.." será satisfeito
     * se a coluna contiver um valor que inicie por "texto", não diferenciando letras maiúsculas e
     * minúsculas.
     *
     * Ao informar uma string ou um array vazio para `value` será retornado um valor vazio, tratamento
     * conveniente para gerar filtros a partir de valores informados pelo usuário. Se for necessário
     * pesquisar por uma string vazia, pode ser informado uma string vazia em um array: `['']`.
     *
     * **Importante**: a comparação realizada por esta função utiliza a função SQL `UPPER` e o
     * operador `LIKE`, impedindo o uso dos índices existentes para a coluna filtrada. Portanto,
     * esta função não deve ser utilizada como principal ou único filtro em uma consulta SQL, pois
     * uma consulta sem índices adequados poderá gerar um plano de execução não eficiente. Sempre
     * que utilizar esta função, verifique que há outras colunas filtradas que restrinjam
     * bem os dados a serem pesquisados. Caso a pesquisa textual seja exata e não seja
     * em colunas do tipo `CLOB` (memo), deve-se preferir o uso da função mais eficiente
     * `clauseWhereOfStrings`.
     * @example
     * var queryUtilities = require('@nginstack/engine/lib/database/QueryUtilities').getInstance();
     *
     * var where = queryUtilities.clauseWhereOfChar('WHERE', 'iCode', 'text..');
     * // => ( ( Upper( iCode )  like Upper( 'text%' ) ) ) "
     * @param {string} prefixWhereAndOr Prefixo da cláusula, sendo comumente utilizados os valores
     * '' (sem prefixo), 'WHERE', 'OR' e 'AND'.
     * @param {string} columnName Nome da coluna que será filtrada. O valor informado deve ser
     * um identificador SQL válido, não sendo aceitas expressões SQL.
     * @param {string|string[]} value Valor a ser pesquisado em `columnName`. Caso seja uma lista de
     * valores ou um array, o filtro será satisfeito se o registro contiver qualquer um dos valores
     * informados se `negation` for `false` (comportamento padrão). Caso `negation` seja `true`,
     * o filtro será satisfeito apenas se a coluna do registro for diferente de todos os valores
     * informados.
     * @param {boolean} [negation] Se `true` a cláusula será montada com negação (NOT LIKE).
     * @return {string} Cláusula SQL que realiza a condição de filtro informada ou uma string vazia
     * caso `value` seja um valor vazio.
     * @see #clauseWhereOfKeys
     * @see #clauseWhereOfStrings
     * @see #clauseWhere
     */
    clauseWhereOfChar(
        prefixWhereAndOr: string,
        columnName: string,
        value: string | string[],
        negation?: boolean
    ): string;
    /**
     * Cria uma cláusula SQL para filtrar uma coluna por um valor ou uma lista de valores textuais
     * realizando uma comparação exata por meio do operador "IN".
     *
     * Caso seja informado um valor do tipo `string` em `value`, será aceita uma lista de valores
     * separadas por ";". Caso seja necessário pesquisar por um texto contendo esse separador, deve-se
     * informar um array com a string contendo esse separador, evitando o tratamento implícito
     * da lista de valores. Esse comportamento é necessário para que este método possa ser
     * utilizado como um substituto mais eficiente que o `clauseWhereOfChar` para pesquisas
     * exatas de valores textuais em colunas do tipo "CHAR" ou "VARCHAR".
     *
     * Ao informar uma string ou um array vazio para `value` será retornado um valor vazio, tratamento
     * conveniente para gerar filtros a partir de valores informados pelo usuário. Se for necessário
     * pesquisar por uma string vazia, pode ser informado uma string vazia em um array: `['']`.
     *
     * **Importante**: esta função não deve ser utilizada para filtrar colunas do tipo "CLOB" (memo),
     * pois a comparação exata de CLOBs não é suportada por todos os SGBDs compatíveis com o sistema,
     * como o Oracle.
     * @param {string} prefixWhereAndOr Prefixo da cláusula, sendo comumente utilizados os valores
     * '' (sem prefixo), 'WHERE', 'OR' e 'AND'.
     * @param {string} columnName Nome da coluna que será filtrada. O valor informado deve ser
     * um identificador SQL válido, não sendo aceitas expressões SQL.
     * @param {string|string[]} value Valor a ser pesquisado em `columnName`. Caso seja uma lista de
     * valores ou um array, o filtro será satisfeito se o registro contiver qualquer um dos valores
     * informados se `negation` for `false` (comportamento padrão). Caso `negation` seja `true`,
     * o filtro será satisfeito apenas se a coluna do registro for diferente de todos os valores
     * informados.
     * @param {boolean} [negation] Se true a cláusula será montada com negação (NOT IN).
     * @return {string} Cláusula SQL que realiza a condição de filtro informada ou uma string vazia
     * caso `value` seja um valor vazio.
     * @example
     * var queryUtilities = require('@nginstack/engine/lib/database/QueryUtilities').getInstance();
     *
     * queryUtilities.clauseWhereOfStrings('WHERE', 'u.iCode", 'A;B;CD');
     * // =>
     * " WHERE u.iCode IN ('A','B','CD')"
     * @see #clauseWhereOfChar
     */
    clauseWhereOfStrings(
        prefixWhereAndOr: string,
        columnName: string,
        value: string | string[],
        negation?: boolean
    ): string;
    /**
     * Expressão "where" para colunas dos tipos "date", "number" e "string", ou instâncias de `DBKey`.
     * @example
     * var queryUtilities = require('@nginstack/engine/lib/database/QueryUtilities').getInstance();
     *
     * var dataInicial = new Date( 2000, 0, 1 ) // 01/01/2000
     * var dataFinal = new Date( 2000, 11, 31 ) // 31/12/2000
     *
     * var where = queryUtilities.clauseWhere( "where", "iDate", ">=", dataInicial )
     * where += queryUtilities.clauseWhere( "and", "iDate", "<=", dataFinal )
     *
     * // Neste ponto a variável "where" terá o conteúdo:
     *   " where iDate >= '01/01/2000' and iDate <= '12/31/2000' "
     *
     * var ds = connection.getDataSet("select * from PEDIDO " + where )
     * @param {string} prefixWhereAndOr Prefixo da Expressão "where". Recebe os parâmetros "" (vazio),
     * "where" (quando tratar-se de início da query), ou os operadores lógicos "and" ou "or" a serem
     * utilizados dependendo de cada caso.
     *
     * Caso o parâmetro **value** seja informado, porém sem conteúdo, a função retornará uma
     * string vazia ("").
     * @param {string} fieldName Nome do Campo no Banco de Dados.
     * @param {string} operator Operador lógico de comparação: ">", ">=", "<", "<=", "=" ou "<>".
     * @param {Object} value Valor a ser utilizado para a comparação no Banco de Dados.
     * @return {string} Texto com a expressão "where" a ser passada como parâmetro para a consulta
     * ao banco de dados.
     * @see #clauseWhereOfKeys
     * @see #clauseWhereOfChar
     * @see Connection#getDataSet
     * @see QueryAnalyzer
     */
    clauseWhere(prefixWhereAndOr: string, fieldName: string, operator: string, value: any): string;
}
declare namespace QueryUtilities {
    /**
     * Obtém uma instância compartilhada desta classe.
     * @return {QueryUtilities}
     */
    function getInstance(): QueryUtilities;
}
