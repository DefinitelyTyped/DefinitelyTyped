export = Field;
/**
 * Classe Field Utilizada para criar campos, determinar seus tipos e setar seus valores.
 * Utilizada tanto no x-class como na grade.
 * @param {string} name Nome único que identificará o campo.
 * @param {string} type Tipo do campo, observe a propriedade {@link #type} para mais detalhes .
 * @param {number} [opt_size] Tamanho do campo, requerido apenas para campos do tipo "string" e
 * "password".
 * @constructor
 * @extends Emitter
 */
declare function Field(name: string, type: string, opt_size?: number): void;
declare class Field {
    /**
     * Classe Field Utilizada para criar campos, determinar seus tipos e setar seus valores.
     * Utilizada tanto no x-class como na grade.
     * @param {string} name Nome único que identificará o campo.
     * @param {string} type Tipo do campo, observe a propriedade {@link #type} para mais detalhes .
     * @param {number} [opt_size] Tamanho do campo, requerido apenas para campos do tipo "string" e
     * "password".
     * @constructor
     * @extends Emitter
     */
    constructor(name: string, type: string, opt_size?: number);
    /**
     * Opções do adaptador de eventos comuns a todos os eventos adaptados.
     * Essas opções poderão ser sobrepostas pela função adaptEvent_.
     * @type {Object}
     * @private
     */
    private defaultAdapterDescriptor_;
    /**
     * Cria um adaptador da API de eventos antiga (classe global Event) com a nova API
     * Emitter. Esse adaptador terá os mesmos métodos de Event, mas os eventos
     * registrados por eles serão adicionados como listeners dos eventos da grade por meio
     * método *on*.
     * @param {string} name Nome do evento.
     * @param {AdapterDescriptor|Record<*,*>} descriptor Regras de como deve
     * ser feita a adaptação do evento.
     * @protected
     */
    protected adaptEvent_(name: string, descriptor: AdapterDescriptor | Record<any, any>): void;
    /**
     * Conjunto com os tipos de campos que não permitem o caractere "_" no nome do campo.
     * @type {Object<boolean>}
     * @protected
     */
    protected typesThatNotSupportUnderscoreAtName_: any;
    /**
     * Nome único que identifica o campo na base de dados.
     * @type {string}
     */
    name: string;
    /**
     * Nome do campo em caixa alta.
     * @type {string}
     */
    upperName: string;
    /**
     * Nome do campo em caixa baixa.
     * @type {string}
     */
    lowerName: string;
    /**
     * Tipo do campo. Observe na tabela abaixo os valores permitidos e sua utilização:
     *
     * * "string"       - Tipo utilizado para campos que conterão texto;
     * * "password"     - Tipo utilizado para campos que conterão senhas;
     * * "masterDetail" - Tipo utilizado para criar uma relação de 1 para N entre duas classes. Para
     * utilizar esse tipo de campo é obrigatório o preenchimento das seguintes propriedades:
     *
     *    * **classKey**: indica a classe de dados que contém os registros detalhes da relação.
     *    A classe de dados que definiu o campo do tipo "masterDetail" é a classe considerada
     *    mestre da relação;
     *    * **masterFieldNames**: indica os campos da classe de dados mestre que devem ser utilizados
     *    para filtrar os registros da classe de dados detalhe.
     *    * **detailFieldNames**: indica os campos da classe de dados detalhe que serão filtrados
     *    com os valores dos campos *masterFieldNames* da classe mestre.
     *
     *    Pseudo-código para obtenção dos registros detalhes:
     *
     *    ```js
     *       var tabelaDetalhe = classes.getCachedDataSet(field.classKey);
     *       var camposMestre = getFieldValues(field.masterFieldNames);
     *       tabelaDetalhe.indexFieldNames = field.detailFieldNames;
     *       detail.setRange(camposMestre, camposMestre);
     *    ```
     *
     * * "grid" - Tipo utilizado para indicar que o campo deve ser visualizado como uma grade
     * detalhe da classe de dados que o definiu. O seu propósito é similar ao tipo "masterdetail",
     * no entanto, ele permite a exibição de dados detalhes cuja relação não pode ser estabelecida
     * apenas pelas propriedades classKey, masterFieldNames e detailFieldNames. Sempre que for possível,
     * é recomendado o uso do tipo "masterdetail". Campos do tipo "grid" não podem ser utilizados
     * em definição de modelo de dados (x-model), sendo o seu uso restrito em definições de visão
     * (x-view) e em processos. Campos do tipo "grid" podem ser definidos em grades de variáveis,
     * sem `DataSet` associado. Nesse caso, o evento `createDataSet` da grade detalhe deve ser
     * configurado e as propriedades `masterFieldNames`, `detailFieldNames` e `classKey` não devem
     * ser informadas.
     * * "int64" - Tipo utilizado para campos que conterão números inteiros de 64 bits. Campos
     * que armazenem chaves ou versões do sistema devem utilizar este tipo.
     * * "int32" - Tipo utilizado para campos que conterão números inteiros de 32 bits. Deve ser utilizado
     * para valores contidos na faixa de [-Math.pow(2, 31) ~ Math.pow(2, 31) - 1] e que não sejam
     * chaves e versões do sistema. Para esses últimos, deve ser utilizado o tipo "int64".
     * * "integer" - Tipo legado que existia antes da criação dos tipos "int64" e "int32". O tipo
     * "integer" será mapeado para um desses dois tipos de acordo com o valor retornado pela função
     * `DataSet.getIntegerDataType()`.
     * * "number"- Tipo utilizado para campos que conterão números decimais. Por padrão terão duas
     * casas decimais.
     * * "latitude" - Tipo utilizado para campos que conterão números decimais para representar latitudes.
     * Por padrão terão até cinco casas decimais e a parte inteira conterá até três casas.
     * * "longitude" - Tipo utilizado para campos que conterão números decimais para representar
     * longitudes. Por padrão terão até cinco casas decimais e a parte inteira conterá até três
     * casas.
     * * "angle" - Tipo utilizado para campos que conterão números decimais para representar ângulos.
     * Por padrão terão duas casas decimais e a parte inteira conterá até três casas.
     * * "memo" - Tipo utilizado para campos que conterão textos longos (mais de 4000 caracteres).
     * * "date" - Tipo utilizado para campos que conterão datas.
     * * "combo" - Tipo utilizado para campos que conterão listas de opções ou combinação de
     * outros tipos. Devido ao tipo do dado e tamanho serem dinamicamente calculados com base
     * nas opções do combo, ele deve ser evitado nas definições das classes de dados
     * (arquivos x-model e x-class). Em seu lugar, deve ser dada preferência aos campos com tipos
     * reais e que tenham a propriedade {@link #options} ou o evento
     * {@link module:@nginstack/engine/lib/classdef/Field~Field#getOptions getOptions} definidos.
     * * "time" - Tipo utilizado para campos que conterão horas. Utilizado para
     * trabalhar com tempo.
     * * "boolean" - Tipo utilizado para campos que conterão valores lógicos ou booleanos.
     * * "file" - Tipo utilizado para campos que conterão arquivos.
     * * "tree" - Tipo utilizado para campos que conterão grades do tipo treeGrid (árvore).
     *
     *
     * Para testar se o campo é de um determinado tipo, utilize as funções de teste de tipo:
     * *isString*, *isNumber*, *isMasterDetail*, *isGrid*, etc.
     * @type {string}
     */
    type: string;
    private getIntegerDatabaseType_;
    private updateDataTypeAndSize_;
    /** @private */
    private charLength_;
    /** @private */
    private databaseType_;
    /** @private */
    private dataSetType_;
    private clearDataTypeAndSizeCache_;
    /**
     * Tipo de dados utilizado para armazenar este campo no banco de dados. A diferença desta
     * propriedade para {@link #type} é que tipos que representam máscaras de valores
     * são normalizados para o tipo real utilizado para guardar o dado. Exemplo: um campo com
     * tipo 'hour' possui o `databaseType` com o tipo `'varchar'`.
     *
     * Campos do tipo combo, terão o seu tipo de dado calculado a partir dos valores do combo.
     * Tipos que não tem representação direta na tabela, como masterdetail, têm o `databaseType`
     * igual a `null`.
     * @type {DatabaseDataType}
     * @see module:@nginstack/engine/lib/database/DatabaseDataType
     */
    databaseType: typeof DatabaseDataType;
    /**
     * Tipo de dados utilizado para armazenar este campo em um DataSet. A diferença desta
     * propriedade para {@link #type} é que tipos que representam máscaras de valores
     * são normalizados para o tipo real utilizado para guardar o dado. Exemplo: um campo com
     * tipo 'hour' possui o `dataSetType` com o tipo `'string'`.
     *
     * Campos do tipo combo, terão o seu tipo de dado calculado a partir dos valores do combo.
     * Tipos que não tem representação direta na tabela, como `'masterdetail'`, têm o `dataSetType`
     * igual a `null`.
     * @type {DataSetDataType}
     * @see module:@nginstack/engine/lib/dataset/DataSetDataType
     */
    dataSetType: typeof DataSetDataType;
    /**
     * Para campos que possuem {@link #databaseType} igual a `varchar` ou `char`, indica a quantidade
     * de caracteres que serão armazenados na coluna.
     *
     * A diferença desta propriedade para {@link #size} é que tipos que representam máscaras de valores
     * são normalizados para o tipo real utilizado para guardar o dado. Exemplo: um campo com
     * tipo 'hour' possui o `charLength` igual a 8.
     *
     * Campos do tipo combo, terão o seu tamanho calculado a partir dos valores do combo.
     * Tipos que não tem representação de tamanho, como number, integer, masterdetail, têm o
     * `charLength` igual a `null`.
     * @type {number|null}
     */
    charLength: number | null;
    /**
     * Valores padrão para a propriedade displayFormat.
     * @type {Object.<string, number>}
     * @private
     */
    private defaultDisplayFormats_;
    /**
     * Valores padrão para a propriedade displayFormat para alguns campos específicos.
     * @type {Object.<string, number>}
     * @private
     */
    private defaultDisplayFormatsByName_;
    /**
     * Formato de exibição de campos do tipo "date". Valores possíveis:
     * @example
     *  DateFormat.DDMMYYYY: dia/mês/ano(4 dígitos)
     *  DateFormat.DDMMYY:   dia/mês/ano(2 dígitos)
     *  DateFormat.MMYYYY:   mês/ano(4 dígitos)
     *  DateFormat.WWYYYY:   semana/ano(4 dígitos)
     * @type {DateFormat}
     * @deprecated Utilize a propriedade displayFormat.
     */
    dateFormat: DateFormat;
    /**
     * Tamanho do campo em caracteres. Utilizado apenas para campos do tipo "string" ou do
     * tipo "password".
     * @type {number}
     */
    size: number;
    /**
     * Ordem na qual o campo deverá ser exibido.
     * @type {number}
     */
    order: number;
    /**
     * Determina quando o campo deve ser somente para leitura. Valores possíveis:
     *
     * * **ReadOnlyMode.NEVER** ou **false**: o campo pode ser alterado;
     * * **ReadOnlyMode.ALWAYS** ou **true**: o campo é somente leitura;
     * * **ReadOnlyMode.AFTER_INSERT**: o campo pode ser modificado apenas durante
     * a inserção. Após a inserção, o campo não poderá ser mais modificado.
     * * **ReadOnlyMode.FILLED**: campo é somente leitura apenas se estiver
     *  preenchido, impedindo a modificação do primeiro valor informado.
     * @type {ReadOnlyMode|boolean}
     */
    readOnly: typeof ReadOnlyMode | boolean;
    /**
     * Determina se a exclusão de um registro na tabela associada à propriedade classKey
     * deve checar neste campo se existe referência à chave excluída.
     *
     * Propriedade válida apenas para campos que possuam a propriedade classKey preenchida.
     *
     * **ATENÇÃO**: Definir esta propriedade como **false** poderá permitir que este campo
     * tenha referência a chaves que foram excluídas, o que consiste em uma falha de integridade.
     * Deve haver uma validação manual que garanta a integridade do modelo de dados.
     * @type {boolean}
     */
    integrityCheck: boolean;
    /**
     * Ajuda para o dicionário de dados, quando se aplicar.
     *
     * Este tipo de ajuda serve de base para o conhecimento técnico sobre
     * a modelagem das tabelas no banco de dados. Deve indicar, entre outras coisas,
     * o relacionamento entre o campo na tabela em que se está documentando e o campo
     * de referência na outra tabela.
     * @type Object
     * @see #help
     */
    dataDictionary: any;
    /**
     * Indica se o campo é de preenchimento obrigatório.
     * @type {boolean}
     */
    required: boolean;
    /**
     * Determina a quantidade de casas decimais que devem ser exibidas quando o campo for do tipo
     * "number".
     * @type {number}
     * @default 2
     */
    decimalPrecision: number;
    /**
     * Determina a quantidade mínima de casas decimais que devem ser exibidas quando o campo for do tipo
     * "number". Caso a quantidade mínima não seja atingida então o restante dos valores será preenchido
     * com zero.
     * @type {number}
     * @default 2
     */
    minDecimalPrecision: number;
    /**
     * Determina a quantidade máxima de casas decimais que devem ser exibidas quando o campo for do tipo
     * "number".
     * @type {number}
     */
    maxDecimalPrecision: number;
    /**
     * Lista das opções de valores aceitos no preenchimento deste campo.
     *
     * Ao configurar a propriedade `options` de um campo, ele passa a ser comportar como um campo
     * do tipo "combo", independentemente do tipo de dado informado na construção do campo.
     * Alternativamente, pode ser utilizado o evento
     * {@link module:@nginstack/engine/lib/classdef/Field~Field#getOptions getOptions} para
     * configurar as opções de preenchimento do campo.
     *
     * Deve ser informado um array de arrays de 2 itens:
     *
     *  - nome da opção
     *  - valor atribuído à opção
     * @example
     * var fld = this.field('weekDay', 'combo')
     * fld.label = 'Dia da Semana'
     * fld.options = [
     *   ['Domingo', 0], ['Segunda-feira', 1], ['Terça-feira', 2],
     *   ['Quarta-feira', 3], ['Quinta-feira', 4], ['Sexta-feira', 5],
     *   ['Sábado', 6], ['Domingo', 7]
     * ];
     * fld.help = 'Informe um dia da semana.';
     * @type {Array[]}
     */
    options: any[][];
    /** @private */
    private options_;
    /**
     * Texto que representará o campo do tipo "boolean" quando o mesmo estiver marcado ("true").
     * @type String
     * @default "T"
     */
    stringIfTrue: string;
    /**
     * Ajuda para o campo a ser utilizada pelas interfaces. Recomenda-se que a ajuda
     * seja a mais intuitiva possível.
     *
     * Pode-se utilizar alguns caracteres para melhorar a apresentação da ajuda como,
     * por exemplo, "n" para quebrar a linha.
     * @example
     * var fld = grid.field("ajuda", number)
     * fld.help = "isto é uma ajuda e tanto"
     * @type String
     * @see #dataDictionary
     */
    help: string;
    /**
     * Título atribuído ao campo. Por padrão a propriedade "name" do campo é atribuída
     * automaticamente ao título do campo.
     *
     * Em uma grade de variáveis, os nomes serão atribuídos obedecendo ao critério da
     * primeira letra em caixa baixa e, quando mudar a palavra, a primeira letra da
     * palavra deve ser digitada em caixa alta (mesmo padrão utilizado na nomenclatura das
     * variáveis).
     * @example
     * Se a propriedade "name" estiver preenchido com "dataInicial", a propriedade "label"
     * receberá automaticamente: "Data Inicial".
     * @type String
     * @see #name
     */
    label: string;
    /**
     * Define que o campo será um lookup para a classe informada.
     *
     * * Se o campo for do tipo "int64", "int32" ou "integer" será um lookup simples, permitindo
     * selecionar apenas um registro da classe informada. O valor deste campo será a chave do registro
     * selecionado.
     * * Se o campo for do tipo "memo", "string" ou "file" será um lookup múltiplo, permitindo
     * selecionar vários registros da classe informada. O valor deste campo será uma lista
     * separada por "," dos registros selecionados.
     *
     * A tabela utilizada para realizar o lookup dependerá da propriedade lookupType. Valores
     * possíveis:
     *
     * * **LookupType.RECORD**: será utilizada a tabela configurada na propriedade tableName
     * do x-class da classe informada.
     * * **LookupType.CLASS**: será utilizada a tabela CLASSE. Serão exibidas apenas as
     * classes filhas da classe informada.
     * * **LookupType.FILE**: será utilizada a tabela iVfs. Serão exibidos apenas os arquivos
     * filhos da classe informada ou uma de suas filhas.
     * @type {number}
     * @see #lookupType
     */
    classKey: number;
    /**
     * API desaconselhada, equivalente a definir LookupType.CLASS na propriedade lookupType.
     * @deprecated
     * @type {boolean}
     * @see #lookupType
     */
    isClassLookup: boolean;
    /**
     * Define o tipo de "lookup" do campo. O tipo será interpretado somente se a propriedade
     * "classKey" estiver preenchida.
     *
     * O "lookup" é um tipo especial de "combo", que aponta para uma tabela de dados.
     *
     * Observe na tabela abaixo os valores possíveis e a sua aplicação:
     * @example
     * TIPO              - APLICAÇÃO
     *
     * LookupType.NONE   - Sem "lookup". Este é o valor padrão, se a propriedade
     *                     "classKey" não estiver preenchida.
     * LookupType.RECORD - "Lookup" para "Registros de Tabelas". Este é o valor padrão,
     *                     quando a propriedade "classKey" é preenchida.
     * LookupType.CLASS  - "Lookup" para "Classe de Tabelas", de acordo com a propriedade
     *                     "classKey".
     * LookupType.FILE   - "Lookup" para arquivos do Sistema Virtual de Arquivos (VFS)
     *                     a partir da classe definida na propriedade "classKey".
     * @type {number}
     * @see #classKey
     */
    lookupType: number;
    /**
     * Informa se este campo possui uma representação no banco de dados. Caso não possua,
     * o valor do campo em uma grade de DataSet não persistirá após o post do registro,
     * precisando ser calculado por eventos ou processos.
     * @type {boolean}
     */
    isDatabaseField: boolean;
    /**
     * Informa se este campo possui uma representação no banco de dados.
     * @type {boolean}
     * @deprecated Utilize {@link #isDatabaseField}.
     */
    isDataBaseField: boolean;
    /**
     * Propriedade do campo que armazena objetos no objeto Field. Somente
     * devem ser adicionadas propriedades que realmente serão utilizadas pelo usuário.
     *
     * Poderá estar null, caso nenhuma propriedade objeto tenha sido modificada.
     * @type Array
     * @private
     */
    private _changedObjectsProperties;
    /**
     * Em campos do tipo "string" ou "memo", determina como será tratado o texto informado com
     * relação à caixa das letras (maiúsculas/minúsculas).
     *
     * Valores suportados:
     *
     * * **upper**: todo o texto será convertido para caixa alta.
     * * **lower**: todo o texto será convertido para caixa baixa.
     * * **name** ou **mixed**: cada palavra será iniciada com uma letra maiúscula exceto as
     * preposições mais comuns utilizadas em nomes próprios. Atualmente não são capitalizadas
     * as preposições "of", "da", "do", "de", "dos" e "das".
     * * **title**: cada palavra com mais de uma letra será iniciada com maiúscula, exceto as
     * preposições mais comuns em títulos.
     * * **statement**: cada palavra que inicie um parágrafo será iniciada com letra maiúscula.
     * @type {string}
     * @see module:@nginstack/engine/lib/string/adjustCase
     */
    caseType: string;
    /**
     * Valor máximo permitido de digitação no campo. Válido para todos os
     * caracteres (letras, número e caracteres especiais).
     * @example
     * var gr = this.grid('vars');
     * gr.title = 'Variáveis';
     * gr.onDefineFields.set(function(grid) {
     *    var fld = grid.field('fator', 'integer');
     *    fld.max = 10;
     * })
     *
     * // Neste exemplo, caso o usuário digite um valor superior a 10, será apresentada a mensagem:
     * // 'O valor digitado deve ser menor ou igual a 10.'
     * @type {number|Date}
     * @see Field#min
     */
    max: number | Date;
    /**
     * Valor mínimo permitido de digitação no campo. Válido para todos os
     * caracteres (letras, número e caracteres especiais).
     * @example
     * var gr = this.grid('vars');
     * gr.title = 'Variáveis';
     * gr.onDefineFields.set(function(grid) {
     *    var fld = grid.field('fator', 'int32');
     *    fld.min = 10;
     * })
     *
     * // Neste Exemplo, caso o usuário digite um valor inferior a 10, será apresentada a mensagem:
     * // 'O valor digitado deve ser maior ou igual a 10.'
     * @type {number|Date}
     * @see Field#max
     */
    min: number | Date;
    /**
     * Determina se o campo excluirá automaticamente os espaços encontrados no início e
     * no fim do valor atribuído a ele.
     * @type {boolean}
     */
    autoTrim: boolean;
    /**
     * Determina se os valores informados no campo, no rótulo e no nome do grupo devem ser tratados
     * para remover tags que possam ser utilizadas com o objetivo de injetar scripts maliciosos em
     * ataques do tipo [Cross Site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/).
     *
     * Ao desativar esta propriedade, é de crítica importância que algum tipo de validação ou
     * sanitização seja realizada com o valor do campo, preferencialmente no evento `beforeChange`. A
     * validação do rótulo do campo e do grupo também são desativadas, portanto deve-se ter atenção
     * ao seus valores caso eles não sejam textos fixos.
     *
     * Por padrão, esta propriedade está ativa para todos os campos exceto os do tipo "password".
     *
     * **Importante**: a sanitização realizada por esta classe tem o objetivo de prevenir ataques do
     * tipo XSS, mas os valores recebidos devem ainda ser validados para outros tipos de ataque, como
     * o de injeção de SQL. Jamais utilize os valores oriundos dos campos ou de outras fontes, como
     * propriedades de processos, registros da base de dados, arquivos ou dados de uma requisição, sem
     * realizar algum tipo de sanitização desses valores, principalmente na construção de expressões
     * SQL. Para a construção de expressões SQL, é recomendado o uso das funções
     * [`toSqlString`](https://nginstack.com/api/js/module-@nginstack_engine_lib_string_toSqlString.html)
     * e [`toSqlIdentifier`](https://nginstack.com/api/js/module-@nginstack_engine_lib_string_toSqlIdentifier.html).
     * @type {boolean}
     */
    autoSanitize: boolean;
    /**
     * Sugestão de preenchimento do campo.
     *
     * Será ignorada caso a propriedade saveInputAsDefault seja true e o usuário já
     * tenha informado um valor para este campo.
     *
     * Recurso disponível apenas em grades de variáveis.
     * @type {Object}
     * @see Field#saveInputAsDefault
     */
    defaultValue: any;
    /**
     * Determina se este campo deve ser utilizado como filtro extra para validar o poder
     * de inserção, alteração e exclusão de um registro.
     *
     * O nome do campo informado será o do campo da iPermission, que deve ser filtrado com o
     * valor deste campo.
     *
     * O uso deste recurso em uma inserção gera uma expressão equivalente a:
     * @example
     * connection.getPermission(
     *    Grid.classKey, 'iInsert', Grid.userKeyToValidatePermissions,
     *    'withoutInheritance', [ Field.permissionFilterFieldName, Field.value ]
     * )
     * @type {string}
     * @see module:@nginstack/engine/lib/classdef/ModelDef#getExtraFilterFields
     * @see module:@nginstack/engine/lib/classdef/ModelDef#getExtraFilterExpression
     */
    permissionFilterFieldName: string;
    /**
     * Indica se o usuário pode ou não alterar o conteúdo do campo, caso o registro
     * seja de chave negativa (licenciado para o produto).
     * @type {boolean}
     */
    userCanChangeNegativeKey: boolean;
    /**
     * Indica se o campo representa início ou fim de um intervalo, atualmente
     * *rangeLimit* só é suportado para campos do tipo data.
     * @type {Limit}
     */
    rangeLimit: Limit;
    /**
     * Lista de campos da grade mãe que devem ser utilizados para pesquisar nos
     * campos detailFieldNames da grade detalhe, criando um relacionamento
     * masterDetail.
     *
     * Recurso disponível apenas para campos do tipo "grid".
     * @type {string}
     */
    masterFieldNames: string;
    /**
     * Determina, para campos de texto ("string" e "memo") com lookup ou combo, se o
     * campo aceita valores múltiplos.
     *
     * Esta propriedade somente pode ser setada se o campo possuir uma classKey ou
     * for combo.
     *
     * Caso esta propriedade não seja setada explicitamente, será utilizado o
     * comportamento padrão, que é a aceitação de valores múltiplos para lookup e
     * um único valor para combo.
     * @type {boolean}
     */
    multiple: boolean;
    /**
     * Lista de campos da grade detalhes que devem ser pesquisados com os valores
     * dos campos da mãe definidos em masterFieldNames com o objetivo de criar um
     * relacionamento masterDetail. Recurso disponível apenas para campos do tipo
     * "grid".
     * @type {string}
     */
    detailFieldNames: string;
    /**
     * Para campos do tipo "masterDetail", indica como os registros detalhes devem
     * ser tratados quando ocorrer a exclusão do registro mestre.
     *
     * Valores possíveis: MasterDeleteAction.ERROR,
     * MasterDeleteAction.DELETE e MasterDeleteAction.UNLINK.
     * @type {MasterDeleteAction}
     */
    masterDeleteAction: typeof MasterDeleteAction;
    /**
     * Filtro que será aplicado ao DataSet da grade detalhe.
     *
     * Recurso disponível apenas para campos do tipo "grid" e "masterdetail".
     * @type {string}
     */
    detailFilter: string;
    /**
     * Propriedades do Field que devem ser copiados no momento do Field.assignTo().
     * Não pode ser alterado pelas classes filhas. Estas devem reimplementar o método
     * assignTo() e executar Field.prototype.assignTo.call(this) para a herança.
     * @private
     */
    private propertiesToAssign_;
    /**
     * Relação de propriedades que armazenam objetos que devem ser copiados utilizando a
     * função deepClone.
     * @type {string[]}
     * @private
     */
    private propertiesToAssignWithDeepClone_;
    /**
     * Propriedades que não podem ser copiadas de forma indireta via uma cadeia de protótipo, pois
     * há os códigos verificam se foram informadas por meio do método hasOwnProperty.
     * @private
     */
    private ownControlledProperties_;
    /**
     * Indica que a propriedade objeto informada foi alterada pelo usuário.
     * @param {string} name Nome da propriedade
     * @protected
     * @see #_changedObjectsProperties
     */
    protected notifyObjectPropertyChange_(name: string): void;
    /**
     * Simplifica a atualização para a versão 73. Poderá ser removido no futuro.
     * @private
     */
    private _notifyObjectPropertyChange;
    /**
     * Nome do grupo de campos
     * @type {string}
     * @see Field#group
     * @private
     */
    private groupName;
    /**
     * Nome ou instância da classe FieldGroup, que será utilizado para agrupar
     * visualmente os campos na grade. É importante que os campos a serem agrupados
     * sejam vizinhos na ordem de exibição (configuração realizada através da propriedade
     * order).
     * @type {FieldGroup}
     * @see Field#order
     */
    group: FieldGroup;
    /**
     * Tipo de validação que o campo irá realizar em relação ao seu conteúdo.
     * O tipo de validação é definido automaticamente com base no tipo do campo para os seguintes
     * tipos: 'string', 'int64', 'int32', 'number', 'date', 'latitude', 'longitude', 'angle' ou
     * 'boolean'.
     *
     * Também pode ser sugerido com base no nome do campo, considerando regras legadas existentes
     * no sistema os seguintes nomes de campo são tratados: 'email', 'cep', 'celular', 'fone', qualquer
     * nome que termine com 'h' ou contenha 'hora' e seja uma string com tamanho 5, 'pis', 'pispasep',
     * 'sacadocgc' e 'cgccpf'.
     *
     * Caso seja necessário alterar o tipo de validação padrão, esta propriedade pode ser redefinida.
     * Os seguintes valores são aceitos: 'string', 'int64', 'int32', 'number', 'date', 'email', 'cep',
     * 'time', 'phone', 'pis', 'cpf', 'cnpj', 'cpfcnpj', 'latitude', 'longitude', 'boolean' ou 'angle'.
     * @type {ValidationType}
     * @see module:@nginstack/engine/lib/classdef/ValidationType~ValidationType
     */
    validationType: ValidationType;
    /**
     * @private
     * @type {ValidationType}
     */
    private validationType_;
    /**
     * Eventos que são herdados da classe de dados definida por {@link #classKey} e
     * {@link #lookupType}, caso o campo não tenha *listeners* configurados para esses eventos.
     * Classes filhas devem ser substituir esse array.
     * @type {string[]}
     * @protected
     */
    protected inheritedClassDefEvents_: string[];
    /**
     * Evento chamado pelo construtor para realizar a configuração inicial do campo.
     *
     * Ele é necessário para permitir que as definições de campo da visão façam outro tipo
     * de inicialização.
     * @param {string} name Nome único que identificará o campo.
     * @param {string} type Tipo do campo, observe a propriedade {@link #type} para mais detalhes .
     * @param {number} [opt_size] Tamanho do campo, requerido apenas para campos do tipo "string" e
     * "password".
     * @protected
     */
    protected init_(name: string, type: string, opt_size?: number): void;
    private suggestValidationType_;
    /**
     * Registra os tipos de eventos suportados e os eventos padrão.
     * @protected
     */
    protected registerEvents_(): void;
    /**
     * Altera o tipo do campo para o valor informado.
     * @param {string} type Tipo do campo.
     * @param {string} fieldName Nome do campo. Não é utilizada a propriedade {@link #name}, pois
     * no construtor o tipo precisa ser informado antes do nome do campo. Há validações do nome
     * relacionadas ao tipo do campo.
     * @protected
     */
    protected changeFieldType_(type: string, fieldName: string): void;
    /** @private */
    private type_;
    /**
     * Cria uma cópia do campo.
     * @param {function(...*):void} NewClass Classe em que o campo que será criado. Este parâmetro é opcional
     * e deve ser utilizado apenas quando se deseja alterar a classe do campo que será clonado.
     * @return {Field} Cópia do campo na classe informada.
     */
    clone(NewClass: (...args: any[]) => void): Field;
    /**
     * Copia as propriedades que são objetos para um campo.
     *
     * Este método é uma versão alternativa do {@link #assignTo} utilizado no método {@link #clone}
     * quando é criada uma cópia do campo utilizando uma cadeia de protótipos. Nesse caso, as
     * propriedades que contém valores primitivos não são copiadas, pois serão herdadas do protótipo.
     * @param field Campo para onde as propriedades devem ser copiadas.
     */
    assignObjectsTo(field: any): void;
    /**
     * Copia as propriedades de um campo informado.
     * @param {Field} field Campo de onde as propriedades devem ser copiadas
     */
    assign(field: Field): void;
    /**
     * Copia as propriedades de um campo para outro.
     * @param {Field} field Campo para onde as propriedades devem ser copiadas
     */
    assignTo(field: Field): void;
    /**
     * Formato de exibição dos campos com tipo "date", "longitude", "latitude", "angle",
     * "int32", "int64", "number" e "integer".
     *
     * Valores possíveis:
     *
     * * **DateFormat.DDMMYYYY**: dia/mês/ano(4 dígitos)
     * * **DateFormat.DDMMYY**: dia/mês/ano(2 dígitos)
     * * **DateFormat.MMYYYY**: mês/ano(4 dígitos)
     * * **DateFormat.WWYYYY**: semana/ano(4 dígitos)
     * * **LatitudeFormat.DDD_DDDDD**: graus decimais°
     * * **LatitudeFormat.DDD_MM_MMM_DIR**: graus° minutos' {N|S}
     * * **LatitudeFormat.DDD_MM_SS_S_DIR**: graus° minutos' segundos" {N|S}
     * * **LongitudeFormat.DDD_DDDDD**: graus°
     * * **LongitudeFormat.DDD_MM_MMM_DIR**: graus° minutos' {E|W}
     * * **LongitudeFormat.DDD_MM_SS_S_DIR**: graus° minutos' segundos" {E|W}
     * * **AngleFormat.DDD**: graus°
     * * **AngleFormat.DDD_DD**: graus decimais°
     * * **NumberFormat.DECIMAL**: número com separador de milhar e decimal
     * * **NumberFormat.INTEGER**: número inteiro com separador de milhar
     * * **NumberFormat.DBKEY**: número inteiro sem separador de milhar
     *
     * @example
     * // Altera a formatação da chave para exibir o número sem separador de milhar
     *
     * const NumberFormat = require('@nginstack/engine/lib/number/NumberFormat.js');
     *
     * const fld = this.field('UNIFICADOR', 'int64');
     * fld.displayFormat = NumberFormat.DBKEY;
     * @type {DateFormat|LatitudeFormat|LongitudeFormat|AngleFormat|NumberFormat}
     */
    displayFormat: DateFormat | LatitudeFormat | LongitudeFormat | AngleFormat | NumberFormat;
    /**
     * @private
     * @type {DateFormat|LatitudeFormat|LongitudeFormat|AngleFormat|NumberFormat}
     */
    private displayFormat_;
    /**
     * Evento emitido para obter as opções de valores aceitos no preenchimento deste campo.
     *
     * Ao configurar o evento `onGetOptions` de um campo, ele passa a ser comportar como um campo
     * do tipo "combo", independentemente do tipo de dado informado na construção do campo.
     *
     * Este evento deve ser configurado apenas se as opções não forem informadas diretamente
     * por meio da propriedade {@link #options} do campo.
     * @type {Event}
     * @deprecated Utilize on('getOptions', listener).
     */
    onGetOptions: Event;
    /**
     * Evento emitido quando o sistema precisa obter o valor de exibição de uma chave
     * desta classe de dados.
     *
     * No exemplo abaixo quando o campo perder o foco será exibido o valor do nome
     * e do codigo da UF:
     * @example
     * field.onLookupDisplay.set(function (field, value) {
     *   if (value) {
     *     const key = DBKey.from(value);
     *     return key.str('NOME') + ' - ' + key.str('UF.CODIGO');
     *   } else {
     *     return '';
     *   }
     * })
     * @param  field Objeto que disparou o evento
     * @param  value Valor do campo
     * @type {Event}
     * @return Valor a ser exibido no campo quando perder foco
     * @deprecated Utilize on('lookupDisplay').
     */
    onLookupDisplay: Event;
    /**
     * Evento emitido antes do filtro dos resultados de uma pesquisa de um campo
     * lookup. Esse evento será emitido uma vez, independente da quantidade
     * de registros filtrados pelo evento *lookupAddResult*. É recomendado o seu uso
     * para alocar recursos que serão utilizados pelos listeners do evento *lookupAddResult*,
     * evitando alocar esses recursos a cada avaliação do filtro.
     * @example
     *  field.onBeforeLookupAddResult.set(function (field) {
     *    var process = field.parent.process;
     *    // Por exemplo, saldo é um DataSet utilizado dentro do onLookupAddResult
     *    process.saldo = objetoSaldo.consulta();
     *    process.saldo.indexFieldNames = 'LOTE';
     *  });
     * @param field Objeto que disparou o evento
     * @type {Event}
     * @deprecated Utilize on('beforeLookupAddResult', listener).
     */
    onBeforeLookupAddResult: Event;
    /**
     * Evento emitido durante a pesquisa de um campo lookup, permitindo que o
     * desenvolvedor filtre as opções possíveis de serem informadas neste
     * campo.
     * @example
     *  field.onLookupAddResult.set(function(field, findResult) {
     *    return !field.parent.ds.uf || findResult.key.uf == field.parent.ds.uf;
     *  })
     * @param field Objeto que disparou o evento
     * @param findResult Objeto da classe FindResult com informações sobre a
     * ocorrência do lookup
     * @type {Event}
     * @deprecated Utilize on('lookupAddResult', listener).
     */
    onLookupAddResult: Event;
    /**
     * Evento emitido após o filtro dos resultados de uma pesquisa de um campo
     * lookup. Esse evento será emitido uma vez, independente da quantidade
     * de registros filtrados pelo evento *lookupAddResult*. Seu uso é recomendado
     * quando há necessidade de limpar eventuais recursos que foram alocados em
     * listeners do evento *beforeLookupAddResult*.
     * @example
     *  field.onAfterLookupAddResult.set(function (field) {
     *    var process = field.parent.process;
     *    // Por exemplo, saldo é um DataSet que foi utilizado dentro do
     *    // onLookupAddResult
     *    process.saldo.empty()
     *  });
     * @param field Objeto que disparou o evento
     * @type {Event}
     * @deprecated Utilize on('afterLookupAddResult', listener).
     */
    onAfterLookupAddResult: Event;
    /**
     * Evento que será emitido antes de um campo ser alterado.
     * O exemplo abaixo verifica o valor que se quer atribuir ao campo e caso ele
     * seja maior que 10, então é disparado um erro.
     * @example
     *  field.onBeforeChange.set(function (field, value) {
     *    if (value > 10)
     *      throw new Error('Valor não pode ser maior que 10');
     *  });
     * @param field Objeto que disparou o evento
     * @param value Valor que está se tentando atribuir ao campo.
     * @type {Event}
     * @deprecated Utilize on('beforeChange', listener).
     */
    onBeforeChange: Event;
    /**
     * Corresponde ao evento que será executado após ser alterado o valor do
     * campo.
     *
     * O exemplo abaixo escreve no log a mudança de valores que ocorreu no campo:
     * @example
     * field.onAfterChange.set(function (field, beforeValue) {
     *    log.write('Valor alterado de ' + beforeValue + ' para ' + field.value);
     * })
     * @param field Objeto que disparou o evento
     * @param value O valor que o campo possuía antes de ter o valor alterado.
     * @type {Event}
     * @deprecated Utilize on('afterChange', listener).
     */
    onAfterChange: Event;
    /**
     * Corresponde ao evento que será executado para validar o conteúdo informado
     * para o campo. Neste evento não deve existir nenhuma dependência com o process,
     * pois poderá ser disparado de dentro de qualquer ambiente.
     *
     * O exemplo abaixo verifica se o campo do dataset é null se for, seta valor 0 para o
     * campo da grade.
     * @example
     *  var f = grid.field('valor', 'int32')
     *  f.onValidate.set(function (field, ds) {
     *    if (ds.valor === null) {
     *      field.setValue(0);
     *    }
     *  });
     * @type {Event}
     * @deprecated Utilize on('validate', listener).
     */
    onValidate: Event;
    /**
     * Garante que a propriedade {@link #classDef} foi carregada com a definição da
     * classe indicada por {@link #classKey} e {@link #lookupType}.
     * @protected
     */
    protected loadClassDefIfNeeded_(): void;
    classDef: any;
    private checkOptions_;
    private validateOptions_;
    /**
     * Valida o valor informado para um campo.
     *
     * No caso dos campos do tipo legado "combo", o valor informado será considerado o índice da opção
     * (1-indexado) e o valor zero indica que o campo deve ser limpo. Caso o valor
     * informado não seja numérico ou seja maior que a quantidade de opções, ele será comparado
     * com os valores das opções do combo. Esse comportamento especial do combo
     * é mantido apenas para preservar os códigos existentes que usam o tipo "combo". Para evitá-lo,
     * defina a propriedade `options` em campos com tipos reais de dados.
     * @param {string|number|boolean|Date} value O valor a ser validado.
     */
    validateValue(value: string | number | boolean | Date): any;
    private toString;
    /**
     * Indica se o campo é do tipo string.
     * @return {boolean} True se o campo é do tipo string, false caso contrário.
     */
    isString(): boolean;
    /**
     * Indica se o campo é do tipo memo.
     * @return {boolean} True se o campo é do tipo memo, false caso contrário.
     */
    isMemo(): boolean;
    /**
     * Indica se o campo armazena uma senha.
     * @return {boolean} True se o campo é do tipo password, false caso contrário.
     */
    isPassword(): boolean;
    /**
     * Indica se o campo é do tipo inteiro, independente da sua precisão (`'int64'` ou `'int32'`).
     *
     * O tipo `'integer'` sem precisão é mapeado para o tipo retornado pela função
     * `DataSet.getIntegerDataType()`.
     * @return {boolean} True se o campo é do tipo integer, false caso contrário.
     */
    isInteger(): boolean;
    /**
     * Indica se o campo é do tipo inteiro 64 bits.
     * @return {boolean} True se o campo é do tipo '`int64`', false caso contrário.
     */
    isInt64(): boolean;
    /**
     * Indica se o campo é do tipo inteiro 32 bits.
     * @return {boolean} True se o campo é do tipo '`int32`', false caso contrário.
     */
    isInt32(): boolean;
    /**
     * Indica se o campo é do tipo date.
     * @return {boolean} True se o campo é do tipo date, false caso contrário.
     */
    isDate(): boolean;
    /**
     * Indica se o campo é do tipo boolean.
     * @return {boolean} True se o campo é do tipo boolean, false caso contrário.
     */
    isBoolean(): boolean;
    /**
     * Indica se o campo é do tipo "combo" ou se as opções de preenchimento foram configuradas
     * pela propriedade {@link #options} ou pelo evento
     * {@link module:@nginstack/engine/lib/classdef/Field~Field#getOptions getOptions}.
     * @return {boolean} True se o campo é do tipo combo, false caso contrário.
     */
    isCombo(): boolean;
    /**
     * Indica se o campo é do tipo number.
     * @return {boolean} True se o campo é do tipo number, false caso contrário.
     */
    isNumber(): boolean;
    /**
     * Indica se o campo é do tipo *masterdetail*.
     * @return {boolean} True se o campo for do tipo *masterdetail*.
     */
    isMasterDetail(): boolean;
    /**
     * Indica se o conteúdo do campo são arquivos armazenados na VFS.
     * @return {boolean} True se o campo é do tipo file, false caso contrário.
     */
    isFile(): boolean;
    /**
     * Indica se o conteúdo do campo é do tipo 'time'.
     *
     * Para fins de compatibilidade, campos do tipo 'string' de tamanho 5 ou 8 com as palavras 'Hour'
     * e 'Hora' no seu nome, ou com o sufixo H, são considerados do tipo 'time'. Esse comportamento
     * tem o objetivo de suportar códigos legados de uma época onde não existia o tipo específico 'time'.
     * Essa lógica é falha, pois pode considerar campos do tipo 'string' como do tipo 'time'
     * indevidamente. Novas definições de campo sempre devem definir o tipo 'time' de forma explícita,
     * pois em algum momento esse suporte aos códigos legados poderá ser removido.
     * @return {boolean} True se o campo é do tipo 'time', false caso contrário.
     */
    isTime(): boolean;
}
declare namespace Field {
    export {
        Event,
        AdapterDescriptor,
        Limit,
        DateFormat,
        LatitudeFormat,
        LongitudeFormat,
        AngleFormat,
        NumberFormat,
        ValidationType,
    };
}
import DatabaseDataType = require('../database/DatabaseDataType.js');
import DataSetDataType = require('../dataset/DataSetDataType.js');
import ReadOnlyMode = require('./ReadOnlyMode.js');
import MasterDeleteAction = require('./MasterDeleteAction.js');
import FieldGroup = require('./FieldGroup.js');
type Event = import('../event/Event');
type AdapterDescriptor = import('../event/AdapterDescriptor');
type Limit = typeof import('../range/Limit');
type DateFormat = import('../date/DateFormat').DateFormatType;
type LatitudeFormat = import('../geo/LatitudeFormat').LatitudeFormatType;
type LongitudeFormat = import('../geo/LongitudeFormat').LongitudeFormatType;
type AngleFormat = import('../geo/AngleFormat').AngleFormatType;
type NumberFormat = import('../number/NumberFormat').NumberFormatType;
type ValidationType =
    | 'string'
    | 'int64'
    | 'int32'
    | 'number'
    | 'date'
    | 'email'
    | 'cep'
    | 'time'
    | 'phone'
    | 'pis'
    | 'cpf'
    | 'cnpj'
    | 'cpfcnpj'
    | 'latitude'
    | 'longitude'
    | 'angle'
    | 'boolean';
