export = DataSetTransformer;
/**
 * Classe auxiliar utilizada para realizar transformações nos dados do DataSet.
 * @constructor
 */
declare function DataSetTransformer(): void;
declare class DataSetTransformer {
    /**
     * Resultado de uma operação de pivot.
     * @typedef {Object} PivotResult
     * @property {DataSet} pivotDS Dados pivoteados.
     * @property {string} pivotFieldName Nome do campo pivot.
     * @property {Array<string>} groupFieldsNames Nomes dos campos que foram agrupados.
     * @property {Array<string>} totalFieldsNames Nomes dos campos que foram totalizados.
     * @property {Array<string>} dynamicFieldsNames Nomes dos campos que foram gerados na operação
     * de pivot para armazenar os totais.
     * @see DataSetTransformer#pivot
     */
    /**
     * Executa a operação de pivot no DataSet e retorna as informações da operação
     *  de pivot, dentre elas os dados pivoteados.
     * Ex.: Dado o DataSet<br>
     * <table border=1>
     * <tr>
     *  <td>ano</td><td>estabelecimento</td><td>mes</td><td>valor</td><td>qtde</td>
     * </tr>
     * <tr>
     *   <td>2003</td><td>Estab 01</td><td>Fevereiro</td><td>10</td><td>5</td>
     * </tr>
     * <tr>
     *   <td>2003</td><td>Estab 01</td><td>Janeiro</td><td>20</td><td>20</td>
     * </tr>
     * <tr>
     *   <td>2003</td><td>Estab 02</td><td>Fevereiro</td><td>1</td><td>4</td>
     * </tr>
     * <tr>
     *   <td>2003</td><td>Estab 03</td><td>Março</td><td>20</td><td>10</td>
     * </tr>
     * <tr>
     *   <td>2003</td><td>Estab 01</td><td>Fevereiro</td><td>30</td><td>20</td>
     * </tr>
     * <tr>
     *   <td>2003</td><td>Estab 01</td><td>Abril</td><td>30</td><td>20</td>
     * </tr>
     * <tr>
     *   <td>2004</td><td>Estab 02</td><td>Janeiro</td><td>40</td><td>30</td>
     * </tr>
     * <tr>
     *   <td>2004</td><td>Estab 03</td><td>Fevereiro</td><td>50</td><td>10</td>
     * </tr>
     * <tr>
     *   <td>2004</td><td>Estab 01</td><td>Março</td><td>60</td><td>4</td>
     * </tr>
     * <tr>
     *   <td>2004</td><td>Estab 02</td><td>Abril</td><td>70</td><td>20</td>
     * </tr>
     * <tr>
     *   <td>2005</td><td>Estab 03</td><td>Janeiro</td><td>80</td><td>30</td>
     * </tr>
     * <tr>
     *   <td>2005</td><td>Estab 03</td><td>Janeiro</td><td>20</td><td>20</td>
     * </tr>
     * <tr>
     *   <td>2005</td><td>Estab 03</td><td>Janeiro</td><td>20</td><td>20</td>
     * </tr>
     * </table>
     * <br>
     * Ao executar:<br>
     *  var dst = new DataSetTransformer() <br>
     *  var pivotInfo = dst.pivot(ds, 'mes', ['valor', 'qtde']) <br>
     *  pivotInfo.pivotDS  <br><br>
     * será retornado:<br>
     * <br>
     * <table border=1>
     * <tr>
     *   <td>ano</td><td>estabelecimento</td><td>valor_mes_Abril</td><td>qtde_mes_Abril</td>
     *  <td>valor_mes_Fevereiro</td><td>qtde_mes_Fevereiro</td><td>valor_mes_Janeiro</td>
     *  <td>qtde_mes_Janeiro</td>
     *  <td>valor_mes_Março</td><td>qtde_mes_Março</td><td>valor_mes_total</td><td>qtde_mes_total</td>
     * </tr>
     * <tr>
     *   <td>2003</td><td>30</td><td>20</td><td>40</td><td>25</td><td>20</td><td>20</td><td></td>
     *   <td></td>
     *  <td>90</td><td>65</td>
     * </tr>
     * <tr>
     *   <td>2003</td><td></td><td></td><td>1</td><td>4</td><td></td><td></td><td></td><td></td>
     *   <td>1</td>
     *  <td>4</td>
     * </tr>
     * <tr>
     *   <td>2003</td><td></td><td></td><td></td><td></td><td></td><td></td><td>20</td><td>10</td>
     *   <td>20</td>
     *  <td>10</td>
     * </tr>
     * <tr>
     *   <td>2004</td><td></td><td></td><td></td><td></td><td></td><td></td><td>60</td><td>4</td>
     *   <td>60</td>
     *  <td>4</td>
     * </tr>
     * <tr>
     *   <td>2004</td><td>70</td><td>20</td><td></td><td></td><td>40</td><td>30</td><td></td><td></td>
     *   <td>110</td>
     *  <td>50</td>
     * </tr>
     * <tr>
     *   <td>2004</td><td></td><td></td><td>50</td><td>10</td><td></td><td></td><td></td><td></td>
     *   <td>50</td>
     *  <td>10</td>
     * </tr>
     * <tr>
     *   <td>2005</td><td></td><td></td><td></td><td></td><td>120</td><td>70</td><td></td>
     *   <td></td><td>120</td>
     *  <td>70</td>
     * </tr>
     * </table>
     * <br>
     * @param {DataSet} ds DataSet que será usando na operação de geração do DataSet pivoteado.
     * @param {string} pivotFieldName Nome do campo pivot.
     * @param {string|Array} totalFieldsNames Lista de nomes de campos totalizadores. A lista pode ser
     *                   uma string com os nomes dos campos separados por ;(ponto-e-vírgula)
     *                   ou um Array com os nomes
     * @param {Object} [options] Opções da operação de pivot.
     * @param {Array<string>} [options.noGroupingColumns] Vetor com os nomes da colunas que não devem
     * ser incluídas na expressão de agrupamento de colunas da operação de pivot.
     * @param {boolean} [options.totalizePivot] Valor booleano que se for true, a operação de pivot
     * irá criar um coluna adicional com o total pivoteado.
     * @param {number} [options.defaultNumeric] Informa o valor que será exibido em colunas
     * pivoteadas numéricas que não tenham dados a serem agregados. Caso não seja informado, será
     * considerado *null*.
     * @param {number} [options.defaultDate] Informa o valor que será exibido em colunas
     * pivoteadas do tipo data que não tenham dados a serem agregados. Caso não seja informado, será
     * considerado *null*.
     * @param {number} [options.defaultString] Informa o valor que será exibido em colunas
     * pivoteadas textuais que não tenham dados a serem agregados. Caso não seja informado, será
     * considerado *null*.
     * @param {function(*):string} options.pivotFormatter Função opcional que formatará o valor
     * da coluna pivoteada. A função receberá o valor da coluna pivot e deverá retornar uma string
     * com o valor que deve ser exibido. Caso não seja informada, apenas as colunas pivot do tipo
     * data por padrão serão formatadas no padrão *DD/MM/YYYY*.
     * @return {PivotResult} Objeto literal com as informações geradas pela operação
     * de pivot.
     */
    pivot(
        ds: DataSet,
        pivotFieldName: string,
        totalFieldsNames: string | any[],
        options?: {
            noGroupingColumns?: string[];
            totalizePivot?: boolean;
            defaultNumeric?: number;
            defaultDate?: number;
            defaultString?: number;
            pivotFormatter: (arg0: any) => string;
        }
    ): PivotResult;
    /**
     * Agrega colunas de um dataSet e retorna o DataSet agregado, sem alterar o DataSet original.
     * @param {DataSet} ds DataSet original que será usado para gerar o DataSet agregado.
     * @param {Array} groupColumns Vetor com os nomes dos campo que serão usado para agregar
     * os resultados da funções de agregação.
     * @param {Object} aggregateColumns Objeto com as propriedades
     * 'functions' e 'distinct' (optional). <br>
     *     A propriedade 'functions' é um objeto que deve possuir as propriedades 'sum',
     *     'count', 'min', 'max' e 'avg'. Cada uma destas propriedades, por sua vez, deve ser
     *     um Array de nomes de campos que sofrerão agregação. <br>
     *     A propriedade 'distinct' deve possuir as propriedades 'columns' e 'ignoredColumns',
     *     que devem, por sua vez, serem Arrays de nomes de campos do dataset 'ds'.
     *     A propriedade 'distinct' é opcional. O Array 'columns' deve conter nomes de campos
     *     a serem agregados considerando apenas resultados distintos. O Array 'ignoredColumns'
     *     deve conter nomes de campos que serão ignorados durante a avaliação de distinção
     *     entre os registros.
     * @return {DataSet} DataSet agregado.
     * @example
     * var dst = new DataSetTransformer();
     *
     * var ds = new DataSet();
     * ds.createField('NOME', 'string', 10);
     * ds.createField('TAMANHO', 'number');
     * ds.create();
     *
     * ds.append();
     * ds.nome = 'X';
     * ds.tamanho = 10;
     * ds.post();
     *
     * ds.append();
     * ds.nome = 'Y';
     * ds.tamanho = 20;
     * ds.post();
     *
     * ds.append();
     * ds.nome = 'Z';
     * ds.tamanho = 5;
     * ds.post();
     *
     * ds.append();
     * ds.nome = 'X';
     * ds.tamanho = 15;
     * ds.post();
     *
     * ds.append();
     * ds.nome = 'Y';
     * ds.tamanho = 15;
     * ds.post();
     *
     * ds.append();
     * ds.nome = 'Z';
     * ds.tamanho = 1;
     * ds.post();
     *
     * dst.aggregate(ds, ['NOME'], {functions: {avg: ['TAMANHO']}});
     */
    aggregate(ds: DataSet, groupColumns: any[], aggregateColumns: any): DataSet;
    /**
     * Cria uma coluna calculada no DataSet. O cálculo é realizado com base da
     * expressão especificada em expr.
     * @param {DataSet} ds DataSet que contém os campos de parâmetros para o cálculo dos
     * campos calculados.
     * @param {Array} exprs Vetor com a expressão de cada campo calculado.
     * @param {Array} [hiddenFields] Array com a lista de campos que deve ser ocultados no
     * DataSet de resultado.
     * @return {DataSet} DataSet com os campos calculados.
     */
    calculate(ds: DataSet, exprs: any[], hiddenFields?: any[]): DataSet;
}
declare namespace DataSetTransformer {
    export { PIVOT_NULL_VALUE_LABEL, PIVOT_TOTAL_LABEL, DistinctController, PivotResult };
}
import DataSet = require('./DataSet.js');
declare let PIVOT_NULL_VALUE_LABEL: string;
declare let PIVOT_TOTAL_LABEL: string;
/**
 * Objeto para ser utilizado em operações que necessitam distinguir entre tuplas distintas.
 * @param {DataSet} ds Dataset que terá sua estrutura copiada para o dataset interno de controle
 * @param {Array} groupColumns Array com os nomes das colunas que participam do agrupamento
 * e são consideradas como parâmetro de distinção.
 * @private
 */
declare function DistinctController(ds: DataSet, groupColumns: any[]): void;
declare class DistinctController {
    private constructor();
    private isDistinct;
    private addRecord;
}
/**
 * Resultado de uma operação de pivot.
 */
interface PivotResult {
    /**
     * Dados pivoteados.
     */
    pivotDS: DataSet;
    /**
     * Nome do campo pivot.
     */
    pivotFieldName: string;
    /**
     * Nomes dos campos que foram agrupados.
     */
    groupFieldsNames: string[];
    /**
     * Nomes dos campos que foram totalizados.
     */
    totalFieldsNames: string[];
    /**
     * Nomes dos campos que foram gerados na operação
     * de pivot para armazenar os totais.
     */
    dynamicFieldsNames: string[];
}
