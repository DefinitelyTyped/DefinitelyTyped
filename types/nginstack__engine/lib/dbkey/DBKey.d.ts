export = DBKey;
/**
 * Representa uma chave no cache local e permite que os campos dessa chave possam ser acessadas
 * como propriedades deste objeto.
 *
 * No interpretador iJavaScript, chaves também podem ser representadas como números primitivos.
 * No V8 isso não é possível e o uso desta classe é obrigatória. Para garantir a compatibilidade
 * com os dois runtimes, é recomendado que o número seja convertido para um `DBKey` antes de
 * acessar uma propriedade dinâmica.
 *
 * Não é aceita a construção de um `DBKey` a partir de um valor `null` ou `0`, o que gera
 * implicações práticas no runtime V8 ao limitar o encadeamento da leitura de campos
 * como propriedades. A expressão `relKey.ifile.iparent.iname` não gera erros no runtime Ije,
 * mesmo quando os campos `ifile` e `iparent` são nulos, pois o Ije retorna `null` na
 * tentativa de leitura das propriedades dos valores nulos. No V8, esse tipo de expressão
 * irá gerar um erro, pois a leitura de uma propriedade de um `null` gera um `TypeError`,
 * conforme especificação da linguagem.
 *
 * Para a leitura de um campo a partir uma expressão, é recomendado o uso do método {@link #val}
 * ou uma de suas variações com tipo de dado esperado. Esses métodos podem ser utilizados
 * em instâncias de `DBKey` ou como métodos estáticos desta classe, quando é necessário ler
 * um campo de uma chave numérica ou de um valor que potencialmente pode ser `null`.
 *
 * Esta classe também é publicada pelo Engine por meio da variável global **DBKey**.
 *
 * @example
 * const key = new DBKey(-1898186559);
 * key.val('iName'); // => 'administrator'
 * key.iname; // => 'administrator'
 * @example
 * DBKey.str(-1898186559, 'iStatus.iName'); // => 'Ativo'
 *
 * @param {*} key Representação numérica da chave.
 * @constructor
 */
declare function DBKey(key: any): void;
declare class DBKey {
    /**
     * Representa uma chave no cache local e permite que os campos dessa chave possam ser acessadas
     * como propriedades deste objeto.
     *
     * No interpretador iJavaScript, chaves também podem ser representadas como números primitivos.
     * No V8 isso não é possível e o uso desta classe é obrigatória. Para garantir a compatibilidade
     * com os dois runtimes, é recomendado que o número seja convertido para um `DBKey` antes de
     * acessar uma propriedade dinâmica.
     *
     * Não é aceita a construção de um `DBKey` a partir de um valor `null` ou `0`, o que gera
     * implicações práticas no runtime V8 ao limitar o encadeamento da leitura de campos
     * como propriedades. A expressão `relKey.ifile.iparent.iname` não gera erros no runtime Ije,
     * mesmo quando os campos `ifile` e `iparent` são nulos, pois o Ije retorna `null` na
     * tentativa de leitura das propriedades dos valores nulos. No V8, esse tipo de expressão
     * irá gerar um erro, pois a leitura de uma propriedade de um `null` gera um `TypeError`,
     * conforme especificação da linguagem.
     *
     * Para a leitura de um campo a partir uma expressão, é recomendado o uso do método {@link #val}
     * ou uma de suas variações com tipo de dado esperado. Esses métodos podem ser utilizados
     * em instâncias de `DBKey` ou como métodos estáticos desta classe, quando é necessário ler
     * um campo de uma chave numérica ou de um valor que potencialmente pode ser `null`.
     *
     * Esta classe também é publicada pelo Engine por meio da variável global **DBKey**.
     *
     * @example
     * const key = new DBKey(-1898186559);
     * key.val('iName'); // => 'administrator'
     * key.iname; // => 'administrator'
     * @example
     * DBKey.str(-1898186559, 'iStatus.iName'); // => 'Ativo'
     *
     * @param {*} key Representação numérica da chave.
     * @constructor
     */
    constructor(key: any);
    /**
     * Retorna o valor do último campo informado na expressão caso esta chave seja de um registro
     * que faça parte do cache local.
     *
     * Tentar obter um campo que não existe na tabela do registro produzirá um erro. Essa verificação
     * é realizada com base nos campos da tabela gravada no cache local. Um campo recém criado no
     * banco de dados não poderá ser utilizado por este método enquanto o Engine não for reiniciado
     * para atualizar a estrutura do banco local.
     *
     * Solicitar um campo de um valor nulo retornará `null` e interromperá a avaliação da expressão.
     * Esse comportamento possibilita que uma expressão possa ser utilizada sem que seja
     * necessário verificar se todos os valores dos campos são não nulos. Observar que esse
     * comportamento não se aplica para uma chave inválida, como a gerada a partir de um valor
     * não numérico ou NaN. Neste caso específico, será gerado um erro ao tentar obter o campo.
     *
     * O valor retornado por este método sempre será um primitivo ou uma data, mesmo que seja solicitado
     * o valor de um campo que contenha outras chaves no sistema. Nesse caso, será retornado o
     * o valor numérico da chave como *number*.
     *
     * Uma característica importante deste método é que o tipo do valor retornado poderá mudar para
     * a mesma expressão informada. Isso ocorre quando um dos campos da expressão é null o que forçará
     * que o retorno deste método também seja null. Portanto, ao utilizar este método, sempre
     * verifique se o retorno é diferente de null antes de utilizar os métodos esperados para o tipo
     * do campo final da expressão. Preferencialmente, pode ser utilizado um dos métodos abaixo
     * para garantir o tipo retornado:
     *
     *     * {@link module:@nginstack/engine/lib/dbkey/DBKey~DBKey#str}
     *     * {@link module:@nginstack/engine/lib/dbkey/DBKey~DBKey#num}
     *     * {@link module:@nginstack/engine/lib/dbkey/DBKey~DBKey#bool}
     *     * {@link module:@nginstack/engine/lib/dbkey/DBKey~DBKey#date}
     *     * {@link module:@nginstack/engine/lib/dbkey/DBKey~DBKey#dbkey}
     * @example
     * const key = new DBKey(-1898186559);
     * key.val('iName'); // => 'administrator'
     * key.val('iClass.NOME') // => 'Usuários'
     * key.val('iUnknownField') // => Error()
     * @param {string} expr O nome de um campo ou uma expressão de campos separados por ".".
     * @return {string|number|null|boolean|Date} Valor do campo.
     * @see #str
     * @see #num
     * @see #bool
     * @see #date
     * @see #dbkey
     */
    val(expr: string): string | number | null | boolean | Date;
    /**
     * Retorna o valor do último campo informado na expressão caso esta chave seja de um registro
     * que faça parte do cache local. O valor retornado sempre será um primitivo do tipo `string`.
     *
     * Ver {@link #val} para mais detalhes.
     * @example
     * DBKey.from(-1898186559).str('iStatus.iName'); // 'Ativo'
     * @param {string} expr O nome de um campo ou uma expressão de campos separados por ".".
     * @return {string} Valor do campo.
     * @see #val
     * @see #num
     * @see #bool
     * @see #date
     * @see #dbkey
     */
    str(expr: string): string;
    /**
     * Retorna o valor do último campo informado na expressão caso esta chave seja de um registro
     * que faça parte do cache local. O valor retornado sempre será um primitivo do tipo `number`.
     *
     * Caso o valor do campo solicitado seja nulo, será retornado 0. Será gerado um erro se valor
     * não for numérico.
     *
     * Ver {@link #val} para mais detalhes.
     * @example
     * DBKey.from(-1898186559).num('iClass.MAE'); // -1898187811
     * DBKey.from(-1898186559).num('iName'); // Error()
     * @param {string} expr O nome de um campo ou uma expressão de campos separados por ".".
     * @return {number} Valor do campo.
     * @see #str
     * @see #val
     * @see #bool
     * @see #date
     * @see #dbkey
     */
    num(expr: string): number;
    /**
     * Retorna o valor do último campo informado na expressão caso esta chave seja de um registro
     * que faça parte do cache local. O valor retornado sempre será um primitivo do tipo *boolean*.
     *
     * Caso o valor do campo solicitado não seja um booleano, ele será convertido em um de forma
     * equivalente a expressão `Boolean(value)`.
     *
     * Ver {@link #val} para mais detalhes.
     * @example
     * DBKey.from(-1898186559).bool('iClass.MAE'); // true
     * DBKey.from(-1898186559).bool('iName'); // true
     * DBKey.from(-1898186559).bool('iEnd'); // false
     * @param {string} expr O nome de um campo ou uma expressão de campos separados por ".".
     * @return {boolean} Valor do campo.
     * @see #str
     * @see #num
     * @see #val
     * @see #date
     * @see #dbkey
     */
    bool(expr: string): boolean;
    /**
     * Retorna o valor do último campo informado na expressão caso esta chave seja de um registro
     * que faça parte do cache local. O valor retornado sempre será uma instância de `Date` ou `null`.
     *
     * Será gerado um erro caso o valor do campo solicitado não seja uma data, exceto quando ele for
     * `null`. Nesse caso, o valor retornado também será `null`.
     *
     * Ver {@link #val} para mais detalhes.
     * @example
     * DBKey.from(session.userKey).date('iLastPasswdChg'); // Date()
     * DBKey.from(-1898186559).date('iEnd'); // null
     * DBKey.from(-1898186559).date('iName'); // Error()
     * @param {string} expr O nome de um campo ou uma expressão de campos separados por ".".
     * @return {Date|null} Valor do campo.
     * @see #str
     * @see #num
     * @see #bool
     * @see #val
     * @see #dbkey
     */
    date(expr: string): Date | null;
    /**
     * Retorna o valor do último campo informado na expressão caso esta chave seja de um registro
     * que faça parte do cache local. O valor retornado sempre será uma instância de `DBKey` ou `null`.
     *
     * Será gerado um erro caso o valor do campo solicitado não seja um valor numérico inteiro.
     * Ver {@link #val} para mais detalhes.
     * @example
     * DBKey.from(-1898186559).dbkey('iClass'); // DBKey(-1898187809)
     * DBKey.from(-1898186559).dbkey('iSmtpServer'); // null
     * DBKey.from(-1898186559).dbkey('iName'); // Error()
     * @param {string} expr O nome de um campo ou uma expressão de campos separados por ".".
     * @return {DBKey|null} Valor do campo.
     * @see #str
     * @see #num
     * @see #bool
     * @see #date
     * @see #val
     */
    dbkey(expr: string): DBKey | null;
    /**
     * Testa se o valor informado é uma chave igual a esta DBKey, ou um número ou string que represente
     * a mesma chave.
     * @example
     * DBKey.from(-1).equals(-1); // true
     * DBKey.from(-1).equals(DBKey(-1)); // true
     * DBKey.from(-1).equals('-1'); // true
     * DBKey.from(-1).equals(null); // false
     * DBKey.from(-1).equals(-2); // false
     * @param {DBKey|string|number} value Valor a ser testado.
     * @return {boolean} True se o valor informado for uma chave igual a esta DBKey.
     */
    equals(value: DBKey | string | number): boolean;
}
declare namespace DBKey {
    /**
     * Retorna `true` se o valor informado for uma instância de `DBKey` ou se for um valor que possa
     * representar uma chave do banco de dados.
     *
     * Esta função não verifica se a chave existe ou não no sistema. Ela apenas verifica se o valor
     * pode ser convertido em um DBKey, retornando true para valores inteiros e para `null`. Em termos
     * práticos ela garante que o valor pode ser utilizado como argumento para o construtor desta
     * classe sem gerar um erro.
     * @example
     * DBKey.isLike(DBKey.from((-1)); // true
     * DBKey.isLike(-1898186559); // true
     * DBKey.isLike('-1898186559'); // true
     * DBKey.isLike(-2); // true
     * DBKey.isLike(DBKey.from(null)); // true
     * DBKey.isLike(null); // true
     *
     * DBKey.isLike('text'); // false
     * DBKey.isLike(NaN); // false
     * DBKey.isLike(undefined); // false
     * DBKey.isLike(''); // false
     * @param {*} value Valor a ser verificado.
     * @return {boolean} True se o valor for uma instância de DBKey ou puder ser convertida para uma.
     */
    function isLike(value: any): boolean;
    /**
     * Obtém uma instância de DBKey a partir do valor informado.
     *
     * Caso seja um DBKey, será retornado o próprio valor informado. Se for um número ou um texto
     * que possa ser convertido em um número inteiro, cria uma nova instância para representar a chave.
     * Esta função não verifica se a chave existe ou não no sistema. Ela apenas verifica se o valor
     * pode representar uma chave. Em termos práticos ela garante que o valor pode ser utilizado como
     * argumento para o construtor desta classe sem gerar um erro.
     *
     * O uso desta função é recomendado para converter um valor para DBKey que potencialmente já pode
     * ser um DBKey. Ao contrário do construtor, não será criada uma nova instância de DBKey se o
     * valor informado já for um.
     * @example
     * DBKey.from(DBKey(-1)); // DBKey(-1)
     * DBKey.from(-1898186559); // DBKey(-1898186559)
     * DBKey.from(-2); // DBKey(-2)
     *
     * DBKey.from('text'); // Error()
     * DBKey.from(NaN); // Error()
     * @param {*} value Valor a ser convertido em um DBKey.
     * @return {DBKey} Valor convertido em um DBKey.
     */
    function from(value: any): DBKey;
    /**
     * Testa se as chaves informadas são iguais, aceitando representações numéricas e textuais
     * delas.
     *
     * Será retornado `false` se forem informados valores que não são representações de chave, como
     * `null` e `undefined`, tornando esse método útil para comparar valores de chaves que podem
     * potencialmente ser nulos, como no exemplo abaixo.
     * @example
     * for (ds.first(); !ds.eof && DBKey.equals(ds.dbkey('iStatus'), statusKey); ds.next()) {
     * }
     *
     * @example
     * DBKey.equals(DBKey(-1), -1); // true
     * DBKey.equals(-1, -1); // true
     * DBKey.equals(-1, '-1'); // true
     * DBKey.equals(-1, null); // false
     * DBKey.equals(DBKey(-1), -2); // false
     * DBKey.equals(null, null); // false
     * @param {DBKey|string|number} a Valor a ser testado.
     * @param {DBKey|string|number} b Valor a ser testado.
     * @return {boolean} True se valores forem representações válidas de chaves e se elas forem iguais.
     */
    function equals(a: DBKey | string | number, b: DBKey | string | number): boolean;
    /**
     * Retorna o valor do último campo informado na expressão caso a chave informada seja de um
     * registro que faça parte do cache local.
     *
     * Tentar obter um campo que não existe na tabela do registro produzirá um erro. Essa verificação
     * é realizada com base nos campos da tabela gravada no cache local. Um campo recém criado no
     * banco de dados não poderá ser utilizado por este método enquanto o Engine não for reiniciado
     * para atualizar a estrutura do banco local.
     *
     * Solicitar um campo de um valor nulo retornará `null` e interromperá a avaliação da expressão.
     * Esse comportamento possibilita que uma expressão possa ser utilizada sem que seja
     * necessário verificar se todos os valores dos campos são não nulos. Observar que esse
     * comportamento não se aplica para uma chave inválida, como a gerada a partir de um valor
     * não numérico ou NaN. Neste caso específico, será gerado um erro ao tentar obter o campo.
     *
     * O valor retornado por este método sempre será um primitivo ou uma data, mesmo que seja solicitado
     * o valor de um campo que contenha outras chaves no sistema. Nesse caso, será retornado o
     * o valor numérico da chave como *number*.
     *
     * Uma característica importante deste método é que o tipo do valor retornado poderá mudar para
     * a mesma expressão informada. Isso ocorre quando um dos campos da expressão é null o que forçará
     * que o retorno deste método também seja null. Portanto, ao utilizar este método, sempre
     * verifique se o retorno é diferente de null antes de utilizar os métodos esperados para o tipo
     * do campo final da expressão. Preferencialmente, pode ser utilizado um dos métodos abaixo
     * para garantir o tipo retornado:
     *
     *     * {@link module:@nginstack/engine/lib/dbkey/DBKey~DBKey.str}
     *     * {@link module:@nginstack/engine/lib/dbkey/DBKey~DBKey.num}
     *     * {@link module:@nginstack/engine/lib/dbkey/DBKey~DBKey.bool}
     *     * {@link module:@nginstack/engine/lib/dbkey/DBKey~DBKey.date}
     *     * {@link module:@nginstack/engine/lib/dbkey/DBKey~DBKey.dbkey}
     * @example
     * DBKey.val(-1898186559, 'iName'); // => 'administrator'
     * DBKey.val(-1898186559, 'iClass.NOME') // => 'Usuários'
     * DBKey.val(-1898186559, 'iUnknownField') // => Error()
     *
     * @param {number|DBKey} key Chave do registro do qual será lido o campo.
     * @param {string} expr O nome de um campo ou uma expressão de campos separados por ".".
     * @return {string|number|null|boolean|Date} Valor do campo.
     */
    function val(key: number | DBKey, expr: string): string | number | null | boolean | Date;
    /**
     * Retorna o valor do último campo informado na expressão caso a chave informada seja de um registro
     * que faça parte do cache local. O valor retornado sempre será um primitivo do tipo `string`.
     *
     * Ver {@link #val} para mais detalhes.
     * @example
     * DBKey.str(-1898186559, 'iStatus.iName'); // 'Ativo'
     *
     * @param {number|DBKey} key Chave do registro do qual será lido o campo.
     * @param {string} expr O nome de um campo ou uma expressão de campos separados por ".".
     * @return {string} Valor do campo.
     */
    function str(key: number | DBKey, expr: string): string;
    /**
     * Retorna o valor do último campo informado na expressão caso a chave informada seja de um registro
     * que faça parte do cache local. O valor retornado sempre será um primitivo do tipo `number`.
     *
     * Caso o valor do campo solicitado seja nulo, será retornado 0. Será gerado um erro se valor
     * não for numérico.
     *
     * Ver {@link #val} para mais detalhes.
     * @example
     * DBKey.num(-1898186559, 'iClass.MAE'); // -1898187811
     * DBKey.num(-1898186559, 'iName'); // Error()
     *
     * @param {number|DBKey} key Chave do registro do qual será lido o campo.
     * @param {string} expr O nome de um campo ou uma expressão de campos separados por ".".
     * @return {number} Valor do campo.
     */
    function num(key: number | DBKey, expr: string): number;
    /**
     * Retorna o valor do último campo informado na expressão caso a chave informada seja de um registro
     * que faça parte do cache local. O valor retornado sempre será um primitivo do tipo *boolean*.
     *
     * Caso o valor do campo solicitado não seja um booleano, ele será convertido em um de forma
     * equivalente a expressão `Boolean(value)`.
     *
     * Ver {@link #val} para mais detalhes.
     * @example
     * DBKey.bool(-1898186559, 'iClass.MAE'); // true
     * DBKey.bool(-1898186559, 'iName'); // true
     * DBKey.bool(-1898186559, 'iEnd'); // false
     *
     * @param {number|DBKey} key Chave do registro do qual será lido o campo.
     * @param {string} expr O nome de um campo ou uma expressão de campos separados por ".".
     * @return {boolean} Valor do campo.
     */
    function bool(key: number | DBKey, expr: string): boolean;
    /**
     * Retorna o valor do último campo informado na expressão caso a chave informada seja de um registro
     * que faça parte do cache local. O valor retornado sempre será uma instância de `Date` ou `null`.
     *
     * Será gerado um erro caso o valor do campo solicitado não seja uma data, exceto quando ele for
     * `null`. Nesse caso, o valor retornado também será `null`.
     *
     * Ver {@link #val} para mais detalhes.
     * @example
     * DBKey.date(session.userKey, 'iLastPasswdChg'); // Date()
     * DBKey.date(-1898186559, 'iEnd'); // null
     * DBKey.date(-1898186559, 'iName'); // Error()
     *
     * @param {number|DBKey} key Chave do registro do qual será lido o campo.
     * @param {string} expr O nome de um campo ou uma expressão de campos separados por ".".
     * @return {Date|null} Valor do campo.
     */
    function date(key: number | DBKey, expr: string): Date | null;
    /**
     * Retorna o valor do último campo informado na expressão caso a chave informada seja de um registro
     * que faça parte do cache local. O valor retornado sempre será uma instância de `DBKey` ou `null`.
     *
     * Será gerado um erro caso o valor do campo solicitado não seja um valor numérico inteiro.
     * Ver {@link #val} para mais detalhes.
     * @example
     * DBKey.dbkey(-1898186559, 'iClass'); // DBKey(-1898187809)
     * DBKey.dbkey(-1898186559, 'iSmtpServer'); // null
     * DBKey.dbkey(-1898186559, 'iName'); // Error()
     *
     * @param {number|DBKey} key Chave do registro do qual será lido o campo.
     * @param {string} expr O nome de um campo ou uma expressão de campos separados por ".".
     * @return {DBKey|null} Valor do campo.
     */
    function dbkey(key: number | DBKey, expr: string): DBKey | null;
}
