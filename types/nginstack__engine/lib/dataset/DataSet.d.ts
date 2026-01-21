export = DataSet;
/**
 * @typedef {import('../io/File')} File
 * @private
 */
/**
 * @typedef {import('../io/MemoryStream')} MemoryStream
 * @private
 */
/**
 * @typedef {import('./GetFieldOptions')} GetFieldOptions
 * @private
 */
/**
 * @typedef {import('./DeltaInspector')} DeltaInspector
 * @private
 */
/**
 * @typedef {import('../ido/IdoDB')} IdoDB
 * @private
 */
/**
 * @typedef {import('./DataSetDataType').DataSetFieldType} DataSetFieldType
 * @private
 */
/**
 * @typedef {Object} ApplyUndoLogOptions
 * @property {?number} startVersion Indica a versão inicial dos logs transacionais que devem
 * ser aplicados ou desfeitos. O uso desta propriedade requer que a versão final também seja
 * informada em `endVersion`.
 * @property {?number} endVersion Indica a versão final dos logs transacionais que devem
 * ser aplicados ou desfeitos. O uso desta propriedade requer que a versão inicial também seja
 * informada em `startVersion`.
 */
/**
 * DataSet é uma coleção de dados convertida em linhas e colunas e organizada a
 * partir das posições de memória dos mesmos. As linhas referenciam os registros e
 * as colunas, os campos.
 *
 * Esta classe também é publicada pelo Engine por meio da variável global **DataSet**.
 * @param {IdoDB} [idoDB] Base de dados onde a tabela será criada. Se for omitido
 * será usando cache local da base de dados default.
 * @constructor
 */
declare function DataSet(idoDB?: IdoDB): void;
declare class DataSet {
    /**
     * @typedef {import('../io/File')} File
     * @private
     */
    /**
     * @typedef {import('../io/MemoryStream')} MemoryStream
     * @private
     */
    /**
     * @typedef {import('./GetFieldOptions')} GetFieldOptions
     * @private
     */
    /**
     * @typedef {import('./DeltaInspector')} DeltaInspector
     * @private
     */
    /**
     * @typedef {import('../ido/IdoDB')} IdoDB
     * @private
     */
    /**
     * @typedef {import('./DataSetDataType').DataSetFieldType} DataSetFieldType
     * @private
     */
    /**
     * @typedef {Object} ApplyUndoLogOptions
     * @property {?number} startVersion Indica a versão inicial dos logs transacionais que devem
     * ser aplicados ou desfeitos. O uso desta propriedade requer que a versão final também seja
     * informada em `endVersion`.
     * @property {?number} endVersion Indica a versão final dos logs transacionais que devem
     * ser aplicados ou desfeitos. O uso desta propriedade requer que a versão inicial também seja
     * informada em `startVersion`.
     */
    /**
     * DataSet é uma coleção de dados convertida em linhas e colunas e organizada a
     * partir das posições de memória dos mesmos. As linhas referenciam os registros e
     * as colunas, os campos.
     *
     * Esta classe também é publicada pelo Engine por meio da variável global **DataSet**.
     * @param {IdoDB} [idoDB] Base de dados onde a tabela será criada. Se for omitido
     * será usando cache local da base de dados default.
     * @constructor
     */
    constructor(idoDB?: IdoDB);
    /**
     * Expressão SQL que gerou este DataSet, caso ele tenha sido obtido a partir de uma consulta
     * à base de dados.
     * @example
     * const ds = database.query('SELECT * FROM iGroupUser WHERE iKey < 0');
     * ds.sqlStatement; // => 'SELECT * FROM iGroupUser WHERE iKey < 0'
     * @type {string}
     */
    sqlStatement: string;
    /**
     * Cria um novo Campo no DataSet.
     *
     * É possível inserir novos campos após um DataSet ser criado desde que este não pertença ao
     * cache local, caso haja clones deste DataSet os mesmos devem chamar o método reload para
     * carregar as novas definições das tabelas.
     * @example
     * var ds = new DataSet()
     * ds.createField('NOME', 'string', 150);
     * ds.createField('BOOLEANO', 'boolean');
     * ds.createField('DATA', 'date');
     * ds.createField('CHAVE', 'int64');
     * ds.createField('VALOR', 'number');
     * ds.create();
     * @param {string} fieldName Nome do Campo a ser criado no DataSet. Este parâmetro é
     * obrigatório e deve, obrigatoriamente, ser declarado sem espaços.
     * @param {string} fieldType Tipo do Campo. Valores possíveis: 'int32', 'int64', 'integer', 'date',
     * 'number', 'string', 'memo' e 'boolean'. O tipo 'integer' é mantido apenas para fins de
     * compatibilidade e ele será automaticamente mapeado para 'int32' ou 'int64' de acordo com
     * o tipo indicado pela função estática {@link setIntegerDataType}. O tipo "numeric" não
     * deve ser mais utilizado devido à obrigatoriedade de se informar a quantidade de
     * casas decimais do campo. Em seu lugar deve ser utilizado o tipo "number".
     * @param {number} [opt_fieldSize] Tamanho do Campo. Obrigatório quando o tipo do campo for
     * 'string' ou 'numeric'.
     * @see #create
     * @see module:@nginstack/engine/lib/dataset/DataSet~DataSetFieldDefs#add
     * @deprecated Utilize fieldDefs.add()
     */
    createField(fieldName: string, fieldType: string, opt_fieldSize?: number): void;
    /**
     * Efetiva a criação do DataSet com os campos declarados em `fieldDefs`.
     * @param {string} [tableName] Nome de tabela único na base de dados IDO associada ao DataSet.
     * Para DataSets criados no banco de dados temporário da sessão, este parâmetro não deve ser
     * informado, pois o sistema gera um nome de tabela único para cada DataSet criado e
     * automaticamente exclui a tabela caso ela não esteja mais em uso. Ele deve ser informado
     * apenas na criação de tabelas em bases de dados IDO gerenciadas pela classe `IdoDBManager`,
     * quando for necessário que a tabela seja preservada mesmo que não esteja em uso.
     * @example
     * const ds = new DataSet();
     * ds.fieldDefs.add('iKey', 'int64');
     * ds.fieldDefs.add('iName', 'string', 150);
     * ds.fieldDefs.add('iDate', 'date');
     * ds.create();
     * @example
     * const idoDBManager = new IdoDBManager();
     * const idoDB = idoDBManager.loadDatabase('my_db');
     * const ds = new DataSet(idoDB);
     * ds.fieldDefs.add('iKey', 'int64');
     * ds.fieldDefs.add('iName', 'string', 150);
     * ds.fieldDefs.add('iDate', 'date');
     * ds.create('my_table');
     */
    create(tableName?: string): void;
    /**
     * Recarrega um DataSet com as última definições feitas na tabela. Quando são
     * criados novos campos em um DataSet já iniciado este método deve ser chamado em
     * seus clones para que eles recarreguem com as novas definições de campos pois se
     * tornaram inconsistentes.
     * @see #createField
     */
    reload(): void;
    /**
     * Abre uma linha para a inserção de registros no DataSet. Podem ser copiados todos os registros dos
     * campos coincidentes de um DataSet para outro. No caso de "cópias" entre DataSets recomenda-se a
     * utilização dos métodos clone() ou copy(), o que vai depender da situação. A utilização do método
     * append() sem parâmetros faz com que o cursor fique posicionado no novo item inserido. <br>
     * Este método pode disparar exceção caso o dataset tenha sido protegido pelo método
     * {@link #protect}.
     * @example
     * var saldo = new DataSet()
     * saldo.createField("DEPOSITO", "string", 50)
     * saldo.createField("VALOR", "number")
     * saldo.create()
     *
     * saldo.append()
     * saldo.deposito = "DEPOSITO MATERIAIS"
     * saldo.valor = 400
     * saldo.post()
     *
     * // ...
     *
     * var ds = new DataSet()
     * ds.createField( "DEPOSITO", "string", 50 )
     * ds.createField( "VALOR", "number" )
     * ds.create()
     *
     * ds.append()
     * ds.deposito = "DEPOSITO CENTRAL"
     * ds.valor = 300
     * ds.post()
     *
     * // Grava os dados do "ds" para o "saldo"
     * saldo.append( ds )
     *
     * // Neste ponto, a quantidade de registros do DataSet "saldo" será 2.
     * // A quantidade de registros do "ds" será 1.
     * @param {(DataSet|Array)} [dataSet] DataSet de onde serão copiados os
     * registros para o DataSet corrente.
     * @param {boolean} [updatePreexistingKey] Valor padrão: false Se este
     * parâmetro for <b>true</b> e o DataSet corrente tiver o campo CHAVE e o
     * DataSet também tiver o campo CHAVE e os registros que tiverem o mesmo
     * conteúdo deste campo serão apenas atualizados no DataSet corrente.
     * @param {boolean} [insertEvenPreexistingKey] Valor padrão: true. Se este
     * parâmetro for true e os registros do DataSet serão inseridos no DataSet
     * corrente mesmo se existir o campo CHAVE em ambos os DataSets e tiverem o
     * mesmo conteúdo.
     * @see #clone
     * @see #copy
     * @see #post
     * @see #protect
     */
    append(
        dataSet?: DataSet | any[],
        updatePreexistingKey?: boolean,
        insertEvenPreexistingKey?: boolean
    ): void;
    /**
     * Confirma a alteração de um registro no DataSet. O post é chamado na navegação
     * de registros por padrão. Ou seja, se um registro for alterado e for solicitado para ir ao próximo
     * registro, por exemplo, as alterações são salvas.
     * @example
     * var saldo = new DataSet()
     * saldo.createField("DEPOSITO", "string", 50 )
     * saldo.createField("VALOR", "number" )
     * saldo.create()
     *
     * saldo.append()
     * saldo.deposito = "DEPOSITO MATERIAIS"
     * saldo.valor = 400
     * saldo.post()
     * @see #cancel
     */
    post(): void;
    /**
     * Efetua o post automaticamente nos registros do DataSet. O post é chamado, geralmente, após a
     * inserção de um registro no DataSet para confirmar a inclusão para o ponteiro.
     *
     * **Importante**: esta propriedade não deve ser mais utilizada, pois a maioria dos códigos não
     * trata a possibilidade do post automático estar desativado. Ao navegar em um dataSet com o
     * post automático desativado as informações em edição são perdidas, comportamento indesejado
     * na maioria dos cenários. Em versões futuras do Engine, esse recurso será desligado.
     * @type {boolean}
     * @deprecated
     */
    automaticPost: boolean;
    /**
     * Coleção contendo as definições dos campos deste DataSet. Ela deve ser utilizada para criar
     * novos campos ou para alterar os existentes.
     * @example
     *  const ds = new DataSet();
     *  ds.fieldDefs.add([
     *     { name: 'iKey', type: 'int64' },
     *     { name: 'iCode', type: 'string', size: 150 }
     *  ]);
     *  ds.create();
     * @type {DataSetFieldDefs}
     * @see module:@nginstack/engine/lib/dataset/DataSet~DataSetFieldDefs
     * @see module:@nginstack/engine/lib/dataset/DataSet~DataSetFieldDef
     */
    fieldDefs: DataSetFieldDefs;
    /**
     * Posiciona o cursor no primeiro registro do DataSet. A posição dos registros no DataSet pode
     * mudar caso os mesmos estejam indexados. Desta forma, recomenda-se atenção para as colunas
     * indexadas antes da navegação dos registros.
     * @example
     *  var saldo = new DataSet()
     *  saldo.createField( "DEPOSITO", "string", 50 )
     *  saldo.createField( "VALOR", "number" )
     *  saldo.create()
     *
     *  saldo.append()
     *  saldo.deposito = "DEPOSITO PRODUTOS"
     *  saldo.valor = 100
     *  saldo.post()
     *
     *  saldo.append()
     *  saldo.deposito = "DEPOSITO MATERIAIS"
     *  saldo.valor = 400
     *  saldo.post()
     *
     *  // Posiciona o cursor no Registro com DEPOSITO == "DEPOSITO PRODUTOS"
     *  saldo.first()
     *
     *  // Ordena o DataSet "saldo" pela coluna "DEPOSITO"
     *  saldo.indexFieldNames = "DEPOSITO"
     *
     *  // Posiciona o cursor no registro com DEPOSITO == "DEPOSITO MATERIAIS" porque o DataSet
     *  // "saldo" agora está indexado.
     *  saldo.first()
     * @see #last
     * @see #next
     * @see #eof
     * @see #bof
     * @see #indexFieldNames
     */
    first(): void;
    /**
     * Testa se o campo informado foi protegido contra alterações pelo método
     * <strong>protect</strong>.
     * @param {string} fieldName Nome do campo a ser testado.
     * @return {boolean} true se o campo estiver protegido.
     * @see #protect
     * @see #protectedFields
     */
    fieldIsProtected(fieldName: string): boolean;
    /**
     * Posiciona o cursor no último registro do DataSet.
     * @example
     *  // Percorre o DataSet "ds" do último registro ao primeiro.
     *  for ( ds.last(); !ds.bof; ds.prior() {
     *     ...
     *  }
     * @see #first
     * @see #prior
     * @see #next
     * @see #indexFieldNames
     */
    last(): void;
    /**
     * Indica se o cursor está no fim do DataSet.
     * EOF, do inglês, End of File (Fim de Arquivo).
     * Se o valor for <b>true</b>, significa que o cursor está no último registro do DataSet.
     * @example
     *  ds.first()
     *  while ( !ds.eof ) { // Enquanto não for o Fim do Arquivo
     *     ...
     *     ds.next()
     *  }
     * @type {boolean}
     */
    eof: boolean;
    /**
     * Obtém a definição do filtro de classe previamente configurado pelo método {@link #setView}.
     * @see #setView
     * @see #resetView
     * @see #viewActive
     */
    getView(): void;
    /**
     * Desativa o filtro de classe previamente configurado pelo método {@link #setView}.
     * @see #setView
     * @see #viewActive
     * @see #getView
     */
    resetView(): void;
    /**
     * Determina se há um filtro de classe ativo, definido previamente pelo método {@link #setView}.
     * @type {boolean}
     * @see #setView
     * @see #resetView
     * @see #getView
     */
    viewActive: boolean;
    /**
     * Indica se o cursor está no início do DataSet.
     * BOF, do inglês, Begin of File (Início do Arquivo).
     * Se o valor for <b>true</b>, significa que o cursor está no primeiro registro do DataSet.
     * @type {boolean}
     * @see #eof
     */
    bof: boolean;
    /**
     * Posiciona o cursor no próximo registro do DataSet.
     * @example
     *  ds.first()
     *  while ( !ds.eof ) {
     *     (...)
     *     ds.next() // Posiciona o cursor no próximo registro.
     *  }
     */
    next(): void;
    /**
     * Expressão de filtro de classes para o DataSet. Indica quais classes devem permanecer no DataSet.
     * A expressão deve ser com chaves de classes, separadas por vírgula.
     * @example
     * const ds = dbCache.getTable('iGroupUser');
     * ds.classesFilter = '-1898187810,-1898142007';
     * @type {string}
     * @deprecated
     */
    classesFilter: string;
    /**
     * Nome da tabela da base de dados a qual o DataSet está vinculado e na qual serão gravadas
     * as alterações aplicadas via `applyUpdates`.
     *
     * Esta propriedade é definida automaticamente quando o DataSet é criado a partir
     * do cache local ou quando ele é resultado de uma consulta SQL ao banco de dados.
     *
     * A extração do nome da tabela a partir de uma consulta SQL é realizada por meio de um parser
     * simples que pode não funcionar adequadamente em consultas mais complexas. Nesses casos, a
     * propriedade pode ser atribuída com o nome da tabela desejada, permitindo indicar explicitamente
     * a tabela que será modificada pelo método `applyUpdates`.
     * @example
     * const ds = dbCache.getTable('iGroupUser');
     * ds.tableName; // => 'iGroupUser'
     * @type {string}
     */
    tableName: string;
    /**
     * Indica se as alterações no DataSet deverão ser gravadas automaticamente no banco de dados.
     * Desta forma, será executado o método applyUpdates a cada modificação dos registros no DataSet.
     *
     * **Importante:** todos os DataSets que são criados a partir do cache local possuem esta
     * propriedade marcada automaticamente como <b>true</b>.
     * @example
     * const ds = dbCache.getTable('iGroupUser');
     * ds.automaticApplyUpdates = false
     * // ... change some records
     * if (mustUpdateChanges) {
     *   ds.applyUpdates();
     * }
     * @type {boolean}
     * @see #applyUpdates
     * @see #logChanges
     */
    automaticApplyUpdates: boolean;
    /**
     * Indica se o DataSet irá gerar um erro caso existam referências a um registro que está sendo
     * deletado.
     * @see #del
     * @see #applyUpdates
     * @see #automaticApplyUpdates
     */
    integrityCheck: boolean;
    /**
     * Define o comportamento desta instância de DataSet ao atribuir um valor com tamanho maior
     * que a capacidade do campo do tipo `string`. Valores possíveis: `'error'` (padrão) ou
     * `'truncate'`.
     *
     * Caso esta propriedade não seja explicitamente definida, o DataSet utilizará o comportamento
     * padrão configurado na propriedade estática
     * {@link module:@nginstack/engine/lib/dataset/DataSet~DataSet.defaultStringOverflowMode}.
     * @example
     * ds.stringOverflowMode = 'truncate';
     * @type {string} mode
     */
    stringOverflowMode: string;
    /**
     * Indica se o DataSet foi modificado. Esta propriedade é definida como <b>false</b> sempre que
     * os métodos applyUpdates ou post forem executados.
     * @example
     *  if ( ds.modified ) {
     *     throw new Error("Por favor, confirme os dados antes da gravação.")
     *  }
     *
     *  ds.applyUpdates()
     * @see #post
     * @see #applyUpdates
     */
    modified: boolean;
    /**
     * Informa atributos do banco local associado a este DataSet. Este objeto possui as seguintes
     * propriedades:
     * <dl>
     * <dt>name</dt>
     *  <dd>{string} Nome do arquivo que guarda o banco local.</dd>
     * <dt>kind</dt>
     *  <dd>{string} Gênero do banco local. Pode ser 'temporary' ou 'persistent'.</dd>
     * <dt>id</dt>
     *  <dd>{number} Identificador único atribuído a um banco local.</dd>
     * </dl>
     * @type {Object}
     */
    localDBInfo: any;
    /**
     * Indica a quantidade dos registros que o DataSet possui no momento.
     * @example
     *  if ( ds.recordCount > 10 ) {
     *     throw new Error("Você só pode inserir, no máximo, 10 itens.")
     *  }
     * @type {number}
     * @see #recNo
     */
    recordCount: number;
    /**
     * Versão incrementada a cada alteração realizada no DataSet, permitindo determinar se um dataSet
     * foi modificado.
     * @example
     *  var recordVersions = []
     *
     *  var ivfs = dbCache.getTable( 'iVfs')
     *  var beforeDataSetVersion = ivfs.dataSetVersion
     *
     *  for ( ivfs.first(); !ivfs.eof; ivfs.next() ){
     *     recordVersions.push( ds.recordVersion )
     *  }
     *
     *  externalEvent( ivfs )
     *
     *  if ( ivfs.dataSetVersion != beforeDataSetVersion ) {
     *     log.write("DataSet has been modified.")
     *
     *     recordVersions.sort()
     *
     *     for ( ivfs.first(); !ivfs.eof; ivfs.next() ) {
     *        if ( recordVersions.indexOf( ds.recordVersion ) >= 0 ) {
     *           log.write("The Record: " + ivfs.ikey + " has been modified" )
     *        }
     *     }
     *  }
     * @type {number}
     * @see #recordVersion
     */
    dataSetVersion: number;
    /**
     * Identificador único do DataSet da sessão do browser em que o usuário está logado.
     * @type {number}
     */
    dataSetId: number;
    /**
     * Número da versão do DataSet, incrementada a cada alteração realizada no registro corrente.
     * @example
     *  var recordVersions = []
     *
     *  var ivfs = dbCache.getTable( 'iVfs')
     *  var beforeDataSetVersion = ivfs.dataSetVersion
     *
     *  for ( ivfs.first(); !ivfs.eof; ivfs.next() ){
     *    recordVersions.push( ds.recordVersion )
     *  }
     *
     *  externalEvent( ivfs )
     *
     *  if ( ivfs.dataSetVersion != beforeDataSetVersion ) {
     *    log.write("DataSet has been modified.")
     *
     *    recordVersions.sort()
     *
     *    for ( ivfs.first(); !ivfs.eof; ivfs.next() ) {
     *      if ( recordVersions.indexOf( ds.recordVersion ) >= 0 ) {
     *   log.write("The Record: " + ivfs.ikey + " has been modified" )
     *      }
     *    }
     *  }
     * @type {number}
     * @see #dataSetVersion
     */
    recordVersion: number;
    /**
     * Indica se o DataSet está ativo. A propriedade é marcada para <b>true</b> quando for executado
     * o método "create" e marcado pra <b>false</b> quando for executado o método "close".
     * @example
     *  var ds = new DataSet()
     *  // Neste ponto, a propriedade ds.active está false
     *  ds.createField( "CODIGO", "string", 25 )
     *  // Ao executar o método create(), a propriedade ds.active será marcada para true.
     *  ds.create()
     *
     *  (...)
     *
     *   // Ao executar o método close(), a propriedade ds.active será marcada para false.
     *   ds.close()
     * @type {boolean}
     * @see #close
     * @see #create
     */
    active: boolean;
    /**
     * Marcador único que identifica o registro no DataSet. O valor do bookmark é somente para leitura
     * não podendo ser alterado. Modificar esta propriedade não modifica o valor do
     * bookmark e sim a posição do cursor para o registro associado ao bookmark informado.
     * @example
     *  var bookmark = ds.bookmark // pega o bookmark do registro atual
     *  (...)
     *  ds.bookmark = bookmark // volta para a posição de origem antes das operações no dataset
     * @type {string}
     * @see #recNo
     * @see #rowId
     * @see #gotoBookmark
     * @see #tryGotoBookmark
     */
    bookmark: string;
    /**
     * Identificação do registro no DataSet. O valor do rowId é somente para leitura.
     * @type {number}
     * @see #recNo
     * @see #gotoRowId
     * @see #tryGotoRowId
     */
    rowId: number;
    /**
     * Indica em que estado o DataSet está no momento.
     * @example
     *  var ds = new DataSet()
     *  this.checkEquals( DataSetStates.INACTIVE, ds.state)
     *  ds.createField( 'key', 'int64')
     *  ds.create()
     *
     *  this.checkEquals( DataSetStates.BROWSE, ds.state)
     *
     *  ds.append()
     *  ds.key = 10
     *  this.checkEquals( DataSetStates.INSERT, ds.state)
     *  ds.post()
     *
     *  this.checkEquals( DataSetStates.BROWSE, ds.state)
     *  ds.key = 20
     *  this.checkEquals( DataSetStates.EDIT, ds.state)
     *  ds.post()
     *
     *  this.checkEquals( DataSetStates.BROWSE, ds.state)
     *  ds.close()
     *  this.checkEquals( DataSetStates.INACTIVE, ds.state)
     * @type {number}
     * @see DataSetStates
     */
    state: number;
    /**
     * Expressão de filtro para o DataSet.<br>
     * É obrigatória a expressão "javascript:" antes do início do código.
     * Dentro da expressão do filter, o DataSet que recebe o filtro deverá
     * ser referenciado por "ds" (independente do nome do filtro) e outras variáveis
     * só poderão ser acessadas por meio de concatenação da expressão do filtro.
     * @example
     *  // Filtra todos os registros que possuem a string "ABC"
     *  // no campo CODIGO.
     *  ds.filter = "javascript:ds.codigo.indexOf(\"ABC\") >= 0"
     * @type {string}
     * @see #classesFilter
     * @see #setView
     */
    filter: string;
    /**
     * Quantidade de campos no DataSet.
     * @type {number}
     * @see #getField
     * @see #setField
     */
    fieldCount: number;
    /**
     * Possibilita desabilitar o filtro definido. O seu valor inicial é true, indicando que qualquer
     * filtro informado em {@link filter} será ativo por padrão.
     * @example
     *  ds.filtered = false // desabilita o filtro
     *  // realiza uma ação sobre o dataset não filtrado
     *  // ...
     *  ds.filtered = true // habilita o filtro definido na propriedade filter
     * @type {boolean}
     * @see #filter
     * @see #classesFilter
     */
    filtered: boolean;
    /**
     * Indica quais campos o DataSet devem ser indexados. Pode-se indexar mais de um campo, desde que
     * os mesmos sejam separados por ponto-e-vírgula ";". A ordem de indexação deve ser passada para
     * a propriedade indexFieldNames com os campos da sequência informada.
     * ( Ex: ds.indexFieldNames = "CAMPO1;CAMPO2" ).<br>
     * No caso de indexações em DataSets clonados do cache local, a indexação das colunas fica
     * disponível para outros DataSets clonados posteriormente e, inclusive, em outros processos ou
     * métodos utilizados pelo usuário enquanto o aplicativo estiver sendo executado.<br>
     * O índice não é apagado da memória de imediato.
     * @example
     *  ds.indexFieldNames = "CLASSE;CODIGO"
     *  if ( ds.find([ chaveDaClasse, codigoPessoa ]) ) {
     *     (...)
     *  }
     * @type {string}
     * @see #find
     * @see #locate
     * @see #setIndex
     */
    indexFieldNames: string;
    /**
     * Indica se deve criar uma chave automaticamente na inserção de um novo registro no DataSet.
     * @example
     * const ds = dbCache.newTableStructure('iGroupUser');
     * ds.insertWithKey = true;
     *
     * ds.append();
     * ds.setField('iName', 'User name');
     * // ... set other fields
     * ds.post();
     * @type {boolean}
     * @see #append
     */
    insertWithKey: boolean;
    /**
     * Inseria uma faixa de chaves altas. Chaves altas eram chaves da faixa
     * 1.000.000.000 a 2.147.483.648.
     * Este conceito não é mais utilizado. O comando tem agora a mesma
     * função que {@link #insertWithKey}.
     * @deprecated {@link #insertWithKey}
     */
    insertWithHighKey: boolean;
    /**
     * Indica se o DataSet está vazio, equivalente a verificar se a propriedade recordCount = 0.
     * @type {boolean}
     * @see #recordCount
     * @see #empty
     */
    isEmpty: boolean;
    /**
     * Indica se o DataSet teve seus dados protegidos pelo método <strong>protect</strong>.
     * @type {boolean}
     * @see #protect
     */
    isProtected: boolean;
    /**
     * Indica se as alterações no dataset devem ser registradas no log. Gravar no Log, por padrão,
     * indica que as alterações realizadas no DataSet podem refletir nas informações no banco de dados,
     * de maneira automática ou manual.
     * IMPORTANTE: Todos os DataSets que são criados a partir do cache local possuem esta propriedade
     * marcada automaticamente como <b>true</b>.
     * @example
     * if ( ds.logChanges ) {
     *   // Grava as alterações do DataSet no Banco de Dados.
     *   ds.applyUpdates()
     * }
     * @type {boolean}
     * @see #applyUpdates
     * @see #automaticApplyUpdates
     */
    logChanges: boolean;
    /**
     * Indica em qual registro do DataSet o cursor está posicionado. Não é o identificador de um
     * registro no DataSet. Para mais detalhes sobre o identificador de registro no DataSet,
     * veja bookmark.
     * @type {number}
     * @see #bookmark
     */
    recNo: number;
    /**
     * Indica se deve verificar a integridade referencial dos dados antes de uma deleção.
     * @type {boolean}
     * @see #del
     */
    verifyDeleteIntegrity: boolean;
    /**
     * Indica se o delta do DataSet deve fazer parte do stream.
     * Delta do dataset é todo o histórico de alterações feitas no dataset (inserção, deleção, etc).
     * É o delta que permite a execução do método "applyUpdates" do DataSet.
     * @example
     *  var file = new File("C:\\streamedDataSet.txt")
     *  file.streamDelta = true
     *  ds.saveToStream( file )
     *  ...
     *  ds.loadFromStream( file )
     *  ....
     *  ds.applyUpdates()
     * @type {boolean}
     * @see #streamOnlyChangedRecords
     * @see #saveToStream
     * @see #loadFromStream
     * @see #applyUpdates
     * @see #File
     */
    streamDelta: boolean;
    /**
     * Indica que apenas os registros que foram alterados devem fazer parte do stream.
     * É bastante útil quando se quer salvar um dataset muito grande para o stream apenas
     * com a intenção de usar o "applyUpdates" logo em seguida. Neste caso, para que não seja necessário
     * mandar para o stream um DataSet muito grande, envia-se apenas os campos que sofreram alterações,
     * otimizando o processo.
     * @type {boolean}
     * @see #streamDelta
     * @see #saveToStream
     * @see #loadFromStream
     * @see #applyUpdates
     * @example
     *  var fileStream = new File('C:\\streamChangedRecords.txt')
     *  // Supondo que o DataSet abaixo tem 100000 registros, mas apenas 50 foram alterados e
     *  // a intenção do script é apenas enviar para o stream > carregar do stream > aplicar
     *  // o applyUpdates. Para otimizar o processo, mandamos para o stream apenas os
     *  // registros alterados.
     *  ds.streamOnlyChangedRecords = true
     *  ds.saveToStream( fileStream )
     *  ....
     *  ds.loadFromStream( fileStream )
     *  ds.applyUpdates()
     */
    streamOnlyChangedRecords: boolean;
    /**
     * Nota: Um DataSet deve, obrigatoriamente, ser clone do outro.
     * @example
     *  // ds ficará com o cursor na posição do cursor de ds1
     *  ds1.goToCurrent(ds)
     *  (...)
     * @param {DataSet} ds Dataset que deve ser mudado a posição do cursor.
     * @see #clone
     */
    goToCurrent(ds: DataSet): void;
    /**
     * Protege os dados de um DataSet. A proteção pode ser contra alteração de
     * campos, inserção, remoção e navegação em registros do DataSet.<br>
     * Após a chamada do protect, os métodos de navegação, de alteração da massa de
     * dados do DataSet, métodos de inserção, de remoção e atributos serão
     * bloqueados, passando a disparar exceção.
     * @example
     *  var ds = database.query('Select * from classe');
     *  ds.protect(['chave', 'versao'], {canInsert: true, canDelete: false});
     * @param {Array<string>} fields Array com os nomes dos campos que serão protegidos
     * contra alterações.
     * @param {Object} [opt_options] Objeto literal para uso de opções proteção <br>
     * <h4>canInsert</h4> {boolean} Indica se será permitida a inserção de
     * registros no DataSet. Caso false, fará o método
     * {@link #append} disparar uma exceção.
     * O valor padrão desta propriedade é false.
     * <h4>canDelete</h4> {boolean} Indica se será permitida a remoção de registros
     * no DataSet. Caso false, fará o método {@link #del}
     * disparar uma exceção. O valor padrão desta propriedade é false.<br>
     * <h4>canNavigate</h4> {boolean} Indica se será permitida a navegação de
     * registros no DataSet. Caso false fará os métodos de navegação
     * dispararem uma exceção. O valor padrão desta propriedade é true.
     * <h4>canPost</h4> {boolean} Indica se será permitido realizar o Post
     * no DataSet. Caso false fará os métodos que realizam post
     * dispararem uma exceção. O valor padrão desta propriedade é true.
     * <h4>clonesInheritProtection</h4> {boolean} Indica se as
     * configurações de proteção de um DataSet serão copiadas ou não
     * para um clone do DataSet. O valor padrão desta propriedade é true.
     * @return {number} Retorna uma key, um número que deve ser guardado,sendo
     * necessário para desproteger o DataSet.
     * @see #isProtected
     * @see #protectedFields
     */
    protect(fields: string[], opt_options?: any): number;
    /**
     * Remove a proteção do DataSet.
     * @param {number} key - chave do bloqueio.
     * @return [Boolean] Retorna um boolean, valor true se foi desbloqueado com sucesso.
     * @see #protect
     */
    unprotect(key: number): void;
    /**
     * Array com os nomes dos campos que foram protegidos pelo método
     * <strong>protect</strong>.
     * @type {Array<string>}
     * @see #protect
     * @see #fieldIsProtected
     */
    protectedFields: string[];
    /**
     * Executa uma consulta SQL utilizando a conexão padrão com banco de dados e retorna o
     * resultado em um DataSet.
     * @example
     * const ds = new DataSet()
     * ds.sql('SELECT * FROM iGroupUser WHERE iKey < 0');
     * @param {string} sqlExpression Texto com a query a ser executada no servidor.
     * @deprecated Utilize o método query da classe Database.
     * @see module:@nginstack/engine/lib/database/Database~Database#query
     */
    sql(sqlExpression: string): void;
    /**
     * Posiciona o cursor no registro anterior do DataSet.
     * @example
     * for (ds.last(); !ds.bof; ds.prior()) {
     * }
     * @see #next
     */
    prior(): void;
    /**
     * Deleta o registro corrente do DataSet e move para o próximo. Muito cuidado ao se usar o "del",
     * pois não se faz necessário o uso do "next", já que ele é automático. <br>
     * Este método pode disparar exceção caso o dataset tenha sido protegido pelo método
     * {@link #protect}.
     * @example
     * // Deleta apenas os registros que sejam da classe -1151515
     * while ( !ds.eof ) {
     *   if ( ds.classe == -1151515 ) {
     *     ds.del()
     *   } else {
     *     ds.next()
     *   }
     * }
     * @see #post
     * @see #protect
     */
    del(): void;
    /**
     * Fecha um DataSet. Permite redefinir todos os campos de um DataSet.
     * Usando o close, todos os registros do DataSet são perdidos.
     * @example
     * ds = new DataSet()
     * ds.createField('CLASSE', 'int64')
     * ds.createField('CODIGO', 'string', 50)
     * ds.createField('TOTAL',  'number')
     * ds.create()
     * // ...
     * ds.close()
     * ds.createField('CAMPO1', 'int64')
     * ds.createField('CAMPO2', 'string', 50)
     * ds.createField('CAMPO3', 'number')
     * ds.create()
     */
    close(): void;
    /**
     * Toda alteração feita no clone será replicada no source DataSet.
     * @param {DataSet} source Dataset do qual será feito o clone.
     * @param {Object} [opt_options] Opções do clone. Atualmente é suportada apenas a opção
     * "sharedDelta", utilizada para indicar que este novo clone do cursor deve compartilhar o
     * o mesmo delta do DataSet original. Por padrão ela é falsa.
     * @example
     * var ds = new DataSet();
     * ds.clone(source);
     * @example
     * var ds = new DataSet();
     * ds.clone(source, {sharedDelta: true});
     * @see #copy
     */
    clone(source: DataSet, opt_options?: any): void;
    /**
     * Copia os dados de um DataSet para outro. Ao contrário do "clone", o "copy" não vincula
     * o DataSet de origem ao de destino.
     * @example
     * ds = new DataSet()
     * // ...
     * ds.copy( dsSource )
     * // ...
     * @see #clone
     * @param {DataSet} source DataSet a partir do qual será feita a cópia.
     */
    copy(source: DataSet): void;
    /**
     * Esvazia o DataSet, apagando todos os registros.
     *
     * Este método não gera delta, logo ele não apaga os registros no banco de dados,
     * apaga apenas no cache local. Este método apaga, no cache local, todos os registros
     * da tabela, mesmo que o DataSet só traga uma parte dos registros da tabela, ou seja,
     * suponha que a tabela TESTE possua 100 registros e esta tabela armazena registros da
     * classe "CLASSE TESTE" que possui 50 registros. Ao executar o código abaixo serão excluídos
     * todos os 100 registros da tabela TESTE do cache local e os registros permaneceram
     * no banco de dados. <br> Este método pode disparar exceção caso o método <em>protect</em> tenha
     * sido chamado com o parâmetro <strong>canDelete</strong> igual a false.
     * @see #isEmpty
     * @see #protect
     */
    empty(): void;
    /**
     * Busca um valor ou um array de valores no DataSet. Para usar este método, é necessário que o
     * DataSet esteja indexado.
     * @example
     * ds.indexFieldNames = "CHAVE"
     * if ( ds.find( chPessoa ) ) {
     *   // ...
     * }
     * @param {Object} searchValues Elementos a serem pesquisados. Array, Integer, String ou array de
     * strings que deverá ser buscado.
     * @return {boolean} True se for encontrado um registro.
     * @see #indexFieldNames
     * @see #findNearest
     * @see #locate
     * @see #search
     */
    find(searchValues: any): boolean;
    /**
     * Busca um valor ou o imediatamente superior mais próximo.
     * @example
     * // Se não encontrar o valor 15, procura o valor imediatamente superior.
     * ds.indexFieldNames = "ORDEM"
     * ds.findNearest("15")
     * @param {Object} searchValues String ou array de strings que deverá ser buscado.
     * @see #indexFieldNames
     * @see #find
     * @see #locate
     * @see #search
     */
    findNearest(searchValues: any): void;
    /**
     * Pesquisa um valor nos campos iKey ou CHAVE do DataSet. Este método não necessita de índices
     * criados, quando o DataSet pertence ao Cache Local, sendo a forma mais rápida de realizar
     * uma pesquisa de chave.
     * @example
     * if ( ds.findKey( chPessoa ) ) {
     *   // ...
     * }
     * @param {number} key Chave a ser pesquisada.
     * @return {boolean} True se for encontrado um registro.
     * @see #find
     * @see #locate
     * @see #search
     * @see #findNearest
     * @see #indexFieldNames
     */
    findKey(key: number): boolean;
    /**
     * Retorna os índices do DataSet.
     * @example
     * // Se não encontrar o valor 15, procura o valor imediatamente superior.
     * ds.setIndex( "CLASSE;CODIGO;DATA", "DATA")
     * // ...
     * var arIndexFields = ds.getIndex()
     * @return {Array.<string>} Retorna um array de duas posições na [0] os
     * índices, na [1] os índices na ordem descendente.
     * @see #indexFieldNames
     * @see #setIndex
     */
    getIndex(): string[];
    /**
     * Faz uma busca no DataSet, podendo ser aproximada(levando em consideração o começo da string).<br>
     * Importante: O Locate é executado percorrendo todos os registros do DataSet pesquisado, exceto
     * quando já existe um índice criado para o campo. Nesta situação, ele internamente executa
     * um find e depois se reposiciona para a primeira ocorrência do valor pesquisado na ordem
     * do índice corrente.<br>
     * Normalmente o Locate deve ser utilizado apenas quando não se deseja alterar o índice corrente
     * do DataSet. Em outras situações é preferível utilizar os métodos find ou findKey. Quando seu uso
     * for realmente necessário, deve-se garantir que o campo pesquisado já tenha sido indexado.
     * @example
     * var ds = dbCache.getTable(tableName)
     * ds.indexFieldNames = "ORDEM"
     * ds.indexFieldNames = "NOME"
     *
     * if ( ds.locate( "ORDEM", 10 ) ){
     *   // ...
     * }
     * @example
     * // No exemplo abaixo, irá buscar em CODIGO os registros que comecem com "1.1."
     * // Os seguintes valores seriam localizados: "1.1.001", "1.1.002", "1.1.003", "1.1.200", ...
     * ds.locate( "CODIGO", "1.1.", true)
     * // ...
     * // No exemplo abaixo, irá buscar em CODIGO os registros iguais a "Maria".
     * ds.locate( "CODIGO", "Maria")
     * // ...
     * @param {string} fields Campos onde deve ser feita a busca. Deve ser separado por ";" caso
     * seja mais de um.
     * @param {string|Date|number|boolean|null|Array<string|Date|number|boolean|null>} values
     * Valores que devem ser pesquisados. Este valor deve ter no mínimo 4 caracteres.
     * @param {boolean} [searchPartialValues] Valor Padrão: false. Indica se deve fazer uma
     * busca parcial.
     * @return {boolean} True se for encontrado um registro.
     * @see #locatePattern
     * @see #find
     * @see #findNearest
     */
    locate(
        fields: string,
        values:
            | string
            | Date
            | number
            | boolean
            | null
            | Array<string | Date | number | boolean | null>,
        searchPartialValues?: boolean
    ): boolean;
    /**
     * Faz uma busca aproximada.
     * @param {string} fields Campos onde deve ser feita a busca. Deve ser separado por ";" caso
     * seja mais de um.
     * @param {string} values Valores que devem ser pesquisados separados por ";". Este valor deve
     * ter no mínimo 4 caracteres.
     * @param {string} logicalOperator "And" ou "Or". Indica qual regra usará na busca dos patterns.
     * @return {boolean} True se for encontrado um registro.
     * @see #locate
     * @see #locateNextPattern
     * @see #find
     * @see #findNearest
     */
    locatePattern(fields: string, values: string, logicalOperator: string): boolean;
    /**
     * Posiciona o cursor na próxima ocorrência do que foi procurado no método "locatePattern".
     * @example
     * ds.locatePattern( "CLASSE;CODIGO", "Despesa;Imposto", "and")
     *
     * @return {boolean} True se for encontrada uma próxima ocorrência.
     * @see #locate
     * @see #locatePattern
     * @see #find
     * @see #findNearest
     */
    locateNextPattern(): boolean;
    /**
     * Restringe o DataSet a uma faixa de registros.
     * @example
     * // Limita o DataSet a mostrar apenas a pessoa "Maria" da classe "Funcionários"
     * ds.indexFieldNames = "CLASSE;PESSOA"
     * ds.setRange(["Funcionários","Maria"], ["Funcionários","Maria"])
     * @param {*} startVal Valor de início do range.
     * @param {*} endVal Valor de final do range.
     * @see #indexFieldNames
     * @see #resetRange
     * @see #getRange
     */
    setRange(startVal: any, endVal: any): void;
    /**
     * Obtém um vetor cujo o conteúdo são as restrições de um DataSet a uma faixa
     * de filtros.
     * @return {Array} Vetor bidimensional com as restrições de um DataSet a uma
     * faixa de filtros.
     */
    getRange(): any[];
    /**
     * Indica se o DataSet está com um range ativo. Esta propriedade é setada como <b>true</b>
     * sempre que é chamado o setRange() e enquanto o índice do DataSet não for alterado e
     * não for chamado o método resetRange().
     * @see #setRange
     * @see #getRange
     */
    rangeActive: boolean;
    /**
     * Limpa o range corrente no DataSet.
     * @see #indexFieldNames
     * @see #setRange
     * @see #getRange
     * @example
     * // Limita o DataSet a mostrar apenas a pessoa "Maria" da classe "Funcionários"
     * ds.indexFieldNames = "CLASSE;PESSOA"
     * ds.setRange(["Funcionários","Maria"], ["Funcionários","Maria"])
     * // ...
     * // Limpa o range. O DataSet volta ao estado original, com a quantidade de registro original.
     * ds.resetRange()
     */
    resetRange(): void;
    /**
     * Cria índices no DataSet.
     * @param {string} fieldNames Campos que devem ser indexados. Separados
     * por ";".
     * @param {string} [opt_descendingFieldNames] Campos que devem ser ordenados
     * de forma descendente(Z-A). Separados por ";".
     * @see #getIndex
     * @see #indexFieldNames
     * @example
     * // Indexa o DataSet por CLASSE, CODIGO e DATA, ordenando DATA de foram descendente, ou seja,
     * // virá da maior para a menor
     * ds.setIndex( "CLASSE;CODIGO;DATA", "DATA")
     */
    setIndex(fieldNames: string, opt_descendingFieldNames?: string): void;
    /**
     * Pega o nome de um campo do DataSet.
     * @example
     * // Cria um DataSet, definimos três campos
     * ds = new DataSet()
     * ds.createField('CLASSE', 'int64')
     * ds.createField('CODIGO', 'string', 50)
     * ds.createField('TOTAL',  'number')
     * ds.create()
     * // ...
     * // Retorna "CODIGO"
     * var fieldName = ds.getFieldName(1)
     * @param {number} fieldIdx Posição do campo (coluna) no DataSet, a partir de
     * 0 até quantidade de campos -1.
     * @see #getFieldType
     * @see #getFieldSize
     * @see #getFieldNames
     */
    getFieldName(fieldIdx: number): void;
    /**
     * Retorna o nome de todos os campos do DataSet.
     * @example
     * const users = classes.getCachedDataSet(-1898187809); // Users
     * const names = users.getFieldNames();
     * const namesLowerCase = users.getFieldNames({toLowerCase: true})
     * @param {{toLowerCase: boolean}} [opt_options] Indica que devem ser retornados
     * os nomes dos campos em caixa baixa.
     * @return {Array<string>} Retorna os nomes de todos os campos do DataSet.
     * @see #getFieldName
     */
    getFieldNames(opt_options?: { toLowerCase: boolean }): string[];
    /**
     * Obtém o tipo de dados de um campo.
     *
     * Para preservar a compatibilidade com códigos legados, este método retorna identificadores que
     * nem sempre têm uma relação exata com o tipo real do campo. Segue abaixo o mapeamento entre os
     * tipos de dados dos campos e os valores retornados por esta função:
     *
     *  * 'int32', 'int64': 'INTEGER'
     *  * 'string': 'CHAR(<size>)'
     *  * 'memo': 'MEMO'
     *  * 'number': 'NUMERIC'
     *  * 'date', 'datetime': 'DATE'
     *  * 'boolean': 'BOOLEAN'
     * @example
     *  ds = new DataSet()
     *  ds.createField('CLASSE', 'int64');
     *  ds.createField('CODIGO', 'string', 50);
     *  ds.createField('TOTAL',  'number');
     *  ds.create();
     *
     *  ds.getFieldType(0); // => 'INTEGER'
     * @param {number|string} fieldId Nome ou índice do campo no DataSet.
     * @see #getFieldName
     * @see #getFieldSize
     * @see #create
     * @see #createField
     * @see module:@nginstack/engine/lib/dataset/DataSet~DataSetFieldDefs#get
     * @deprecated Utilize fieldDefs.get(fieldName).type
     */
    getFieldType(fieldId: number | string): void;
    /**
     * Verifica se o campo foi modificado desde o último `applyUpdates` se o `DataSet` tiver
     * controle de alterações (`logChanges` ativo). Caso contrário, verifica se o campo foi modificado
     * na edição corrente.
     * @example
     * ds = new DataSet();
     * ds.createField('CHAVE', 'int64');
     * ds.createField('VERSAO', 'int64');
     * ds.createField('CLASSE', 'int64');
     * ds.create();
     *
     * ds.logChanges = false;
     * ds.append([1, null, 1]);
     * ds.fieldWasModified('CLASSE'); // => true
     * ds.post();
     * ds.fieldWasModified('CLASSE'); // => false
     * ds.setField('CLASSE', 2);
     * ds.fieldWasModified('CLASSE'); // => true
     * ds.post();
     * ds.fieldWasModified('CLASSE'); // => false
     *
     * ds.logChanges = true;
     * ds.fieldWasModified('CLASSE'); // => false
     * ds.setField('CLASSE', 3);
     * ds.fieldWasModified('CLASSE'); // => true
     * ds.post();
     * ds.fieldWasModified('CLASSE'); // => true
     * @param {number|string} fieldId Nome ou índice do campo a ser verificado.
     * @see #getFieldName
     * @see #getFieldType
     * @see #getFieldSize
     * @see #create
     * @see #createField
     */
    fieldWasModified(fieldId: number | string): void;
    /**
     * Verifica se o campo foi modificado desde o último `applyUpdates` se o `DataSet` tiver
     * controle de alterações (`logChanges` ativo). Caso contrário, verifica se o campo foi modificado
     * na edição corrente.
     * @param {number|string} fieldId Nome ou índice do campo a ser verificado.
     * @deprecated Utilize o método "fieldWasModified".
     */
    getFieldModified(fieldId: number | string): void;
    /**
     * Redefine toda a definição de campos do DataSet.
     * @example
     * // Cria um dataset, definimos três campos
     * ds = new DataSet()
     * ds.createField('CLASSE', 'int64')
     * ds.createField('CODIGO', 'string', 50)
     * ds.createField('TOTAL',  'number')
     * ds.create()
     *
     * // Apaga toda a definição definida acima
     * ds.resetFields()
     * @see #close
     * @see #getFieldName
     * @see #createField
     * @see #getFieldType
     * @see #getFieldSize
     * @see module:@nginstack/engine/lib/dataset/DataSet~DataSetFieldDefs#clear
     * @deprecated Utilize fieldDefs.clear()
     */
    resetFields(): void;
    /**
     * Tamanho do campo no DataSet.
     * @example
     * // Cria um DataSet, definimos três campos
     * ds = new DataSet()
     * ds.createField('CLASSE', 'int64')
     * ds.createField('CODIGO', 'string', 50)
     * ds.createField('TOTAL',  'number')
     * ds.create()
     *
     * // ...
     *
     * // Retorna "50"
     * var fieldName = ds.getFieldSize(1)
     * @param {Object} fieldNameOrPositionIndex Nome ou índice do campo no DataSet.
     * @return {number}
     * @see #getFieldName
     * @see #getFieldType
     * @see #createField
     * @see module:@nginstack/engine/lib/dataset/DataSet~DataSetFieldDefs#get
     * @deprecated Utilize fieldDefs.get(fieldName).size
     */
    getFieldSize(fieldNameOrPositionIndex: any): number;
    /**
     * Carrega o DataSet a partir de arquivo ou stream.
     * @example
     * // Usaremos como exemplo o arquivo
     * var arquivo = new File("C:\\dataset.txt")
     *
     * // O arquivo deverá obrigatoriamente ter sido
     * // criado pelo loadFromStream.
     * ds.loadFromStream( arquivo )
     * @param {File|MemoryStream} streamObject Objeto da Classe File de onde o DataSet será criado.
     * @see #saveToStream
     * @see #streamOnlyChangedRecords
     * @see #streamDelta
     * @see File
     */
    loadFromStream(streamObject: File | MemoryStream): void;
    /**
     * Salva o DataSet em um stream.
     * @example
     * // Usaremos como exemplo o arquivo
     * var file = new File("C:\\dataset.txt")
     * ds.saveToStream(file)
     * @param {File|MemoryStream} streamObject Objeto stream para onde o DataSet será salvo.
     * @see #loadFromStream
     * @see #streamOnlyChangedRecords
     * @see #streamDelta
     */
    saveToStream(streamObject: File | MemoryStream): void;
    /**
     * Soma os campos do DataSet, podendo somar por grupo.
     *
     * A totalização realizada irá considerar o *range* e os filtros configurados no DataSet. Uma
     * eventual edição pendente será efetivada automaticamente por este método e sempre que possível
     * ele preservará a posição e as configurações do DataSet.
     * @example
     * // Cria um DataSet, definimos três campos
     * var ds = database.query("Select * From TABELA Where VALOR > 1000 and VALOR < 2000")
     *
     * // Devolve um DataSet ordenado por CLASSE e NOME, somando o VALOR
     * var dsSum = ds.sum("CLASSE;NOME","VALOR")
     * @param {string} fieldsToGroup Campos pelos quais o DataSet será agrupado. Separados por ";".
     * @param {string} fieldsToSum Campos que o DataSet irá somar. Separados por ";".
     * @return {DataSet} Retorna um DataSet com os campos definidos nos parâmetros.
     */
    sum(fieldsToGroup: string, fieldsToSum: string): DataSet;
    /**
     * Copia um registro de um outro DataSet. Somente os campos que existam nos 2 DataSets serão
     * copiados.
     * @example
     * // Percorre o DataSet copiando todos os registros, exceto o campo chave
     * for ( source.first; !source.eof; source.next() ) {
     *   target.append()
     *   target.copyRecord( source, "CHAVE;VERSAO")
     * }
     * @param {DataSet} ds DataSet que será copiado.
     * @param {string} [excludedFieldNames] Nomes dos campos que não devem ser copiados.
     */
    copyRecord(ds: DataSet, excludedFieldNames?: string): void;
    /**
     * Indica se o campo está vazio.
     * @example
     * // Percorre o DataSet e se o campo for nulo, atribui a data
     * // corrente a ele
     * for ( ds.first; !ds.eof; ds.next() ) {
     *   for ( var i = 0; i < 10; i++) {
     *     if ( ds.fieldIsNull("DATA" + i) ) {
     *       ds.setField("DATA" + i, new Date() )
     *      }
     *   }
     * }
     * @param {Object} fieldNameOrPositionIndex Nome ou índice do campo.
     * @return {boolean} Retorna true se o campo estiver sido informado.
     */
    fieldIsNull(fieldNameOrPositionIndex: any): boolean;
    /**
     * Obtém o conteúdo de um campo do DataSet a partir do seu nome ou índice.
     *
     * O tipo do valor retornado por este método varia de acordo com o tipo e preenchimento
     * do campo. Para sempre obter o valor em um determinado tipo, podem ser utilizados os
     * métodos {@link #str}, {@link #num}, {@link #date}, {@link #bool} e {@link #dbkey}. Esses
     * métodos convertem os valores nulos para o tipo desejado sempre que for possível e também
     * suportam expressões lookups, como "CLASSE.NOME". No entanto, eles não suportam a leitura dos
     * campos a partir dos seus índices numéricos, nem permitem indicar a origem do valor do campo
     * por meio do parâmetro `options`.
     * @example
     * // GetFieldOptions usage:
     * let ds = database.getDataSet('SELECT iKey, iVersion, iName FROM iGroupUser WHERE iKey = 123');
     * ds.setField('iName', 'Alice');
     * ds.applyUpdates();
     *
     * ds = database.query('SELECT iKey, iVersion, iName FORM iGroupUser WHERE iKey = 123');
     * ds.getField('iName'); // => 'Alice'
     * ds.getField('iName', GetFieldOptions.BEFORE_VALUE); // => 'Alice'
     * ds.getField('iName', GetFieldOptions.ORIGINAL_VALUE); // => 'Alice'
     *
     * ds.edit();
     * ds.setField('iName', 'Bob');
     * ds.getField('iName'); // => 'Bob'
     * ds.getField('iName', GetFieldOptions.BEFORE_VALUE); // => 'Alice'
     * ds.getField('iName', GetFieldOptions.ORIGINAL_VALUE); // => 'Alice'
     *
     * ds.post();
     * ds.getField('iName'); // => 'Bob'
     * ds.getField('iName', GetFieldOptions.BEFORE_VALUE); // => 'Bob'
     * ds.getField('iName', GetFieldOptions.ORIGINAL_VALUE); // => 'Alice'
     *
     * ds.applyUpdates();
     * ds.getField('iName'); // => 'Bob'
     * ds.getField('iName', GetFieldOptions.BEFORE_VALUE); // => 'Bob'
     * ds.getField('iName', GetFieldOptions.ORIGINAL_VALUE); // => 'Bob'
     *
     * ds.append();
     * ds.setField('iName', 'Carol');
     * ds.getField('iName'); // => 'Carol'
     * ds.getField('iName', GetFieldOptions.BEFORE_VALUE); // => null
     * ds.getField('iName', GetFieldOptions.ORIGINAL_VALUE); // => null
     *
     * ds.post();
     * ds.getField('iName'); // => 'Carol'
     * ds.getField('iName', GetFieldOptions.BEFORE_VALUE); // => 'Carol'
     * ds.getField('iName', GetFieldOptions.ORIGINAL_VALUE); // => null
     *
     * ds.getField('unknown'; // => throws an error
     * ds.getField('unknown', GetFieldOptions.IGNORE_FIELD_NOT_FOUND); // => null
     * @param {number|string} fieldId Nome ou índice do campo.
     * @param {(GetFieldOptions|number)} [options] Opções da classe "GetFieldOptions", separadas por "|"
     * @return {string|number|Date|boolean|null} Valor do campo.
     * @see module:@nginstack/engine/lib/dataset/GetFieldOptions~GetFieldOptions
     * @see #setField
     * @see #val
     * @see #str
     * @see #num
     * @see #date
     * @see #bool
     * @see #dbkey
     */
    getField(
        fieldId: number | string,
        options?: GetFieldOptions | number
    ): string | number | Date | boolean | null;
    /**
     * Altera o valor de um campo do registro corrente do DataSet.
     * @example
     * // Gera um erro caso o campo não seja encontrado
     * for (ds.first; !ds.eof; ds.next()) {
     *   for (var i = 0; i < 15; i++) {
     *     ds.setField('NOME' + i, 'nome' + i));
     *   }
     * }
     *
     * // Desta forma, não acusa um erro caso o campo não seja encontrado
     * for ( ds.first; !ds.eof; ds.next() ) {
     *   for ( var i = 0; i < 15; i++) {
     *     ds.setField("NOME" + i, "nome" + i, true ) )
     *   }
     * }
     * @param {number|string} fieldId Nome ou índice do campo.
     * @param {*} value Valor a ser atribuído ao campo.
     * @param {boolean} [ignoreInvalidFieldId] Indica se deve ou não ignorar campos com nomes
     * inválidos. Ou seja, caso seja informado um nome de campo que não exista no DataSet,
     * (supondo que foi informado "true") não será gerado um erro, caso contrário, um erro é
     * disparado informando que o campo não existe no DataSet.
     * @see #setFields
     * @see #updateAll
     */
    setField(fieldId: number | string, value: any, ignoreInvalidFieldId?: boolean): void;
    /**
     * Altera os valores de um conjunto de campos do registro corrente do DataSet.
     *
     * Pode ser informado um objeto ou dois arrays de campos e valores. Caso seja informado um objeto,
     * as propriedades devem mapear os nomes dos campos aos seus valores. Caso sejam informados dois
     * arrays, o primeiro deverá conter os nomes dos campos e o segundo os seus valores.
     * @example
     * const fieldValues = {
     *   iValue: newValue,
     *   iUpdatedAt: Date.now()
     * }
     * for (ds.first(); !ds.eof; ds.next()) {
     *   if (ds.fieldIsNull('iValue')) {
     *     ds.setFields(fieldValues);
     *   }
     * }
     * @example
     * ds.setFields(['iName', 'iEmailAddress'], ['Alice', ''alice@example.com']);
     * @param {Record<string,*>|string[]} fields Objeto mapeando os nomes dos campos aos seus valores
     * ou um array com os nomes dos campos a serem atribuídos.
     * @param {Array} [values] Valores a serem atribuídos aos campos caso `fields` seja informado
     * como um array de nomes de campos.
     * @see #setField
     * @see #updateAll
     */
    setFields(fields: Record<string, any> | string[], values?: any[]): void;
    /**
     * Atualiza o DataSet e retorna a versão em que os registros foram gravados.
     * Caso o dataSet não possua alterações, o retorno será 0.
     * @example
     * ds.append()
     * // ...
     * ds.del()
     * // ...
     * ds.applyUpdates()
     * @param {boolean} [waitDBCacheSync] Indica se deve aguardar a sincronização do cache local
     * após a atualização do servidor.
     * @param {boolean} [logChanges] Registra as alterações na tabela iLog. Caso não seja informado,
     * será considerado `true`. Este parâmetro é ignorado para tabelas que participam do
     * cache local, pois o registro de log para essas tabelas é obrigatório.
     *
     * **Atenção:** a desativação do log transacional não permite o desfazimento das alterações
     * realizadas e prejudica a auditoria do sistema em inspeções de segurança. Modificações
     * sem geração de log também não são aplicadas nas bases de dados destino dos processos de
     * replicação de dados. Essas modificações podem ser perdidas em cenários de migração de
     * banco de dados onde uma base de dados é sincronizada a partir do log transacional.
     * @return {number} Versão das alterações ou zero caso não existam diferenças a serem gravadas.
     * O valor retornado também é gravado nos campos iVersion ou VERSAO dos registros.
     * @see #del
     * @see #append
     * @see #cancelUpdates
     * @see #automaticApplyUpdates
     */
    applyUpdates(waitDBCacheSync?: boolean, logChanges?: boolean): number;
    /**
     * Apaga um ou todos os registros do delta do DataSet, ou seja, se depois das
     * alterações no DataSet for chamado o método "cancelUpdates" e, logo em seguida, o "applyUpdates".
     * As alterações não serão efetivadas na tabela à qual o dataset está associado.
     * Nota: As alterações feitas no DataSet não são perdidas, apenas o delta do DataSet é descartado.
     * @example
     * // Adicionando registros atualizados em um DataSet auxiliar, permitindo visualizar uma
     * // prévia antes de realizar o applyUpdates, sem alterar o cache local.
     * const iGroupUser = dbCache.getTable('iGroupUser');
     * const iGroupUserChanged = dbCache.newTableStructure('iGroupUser');
     * if (iGroupUser.findKey(key)) {
     *   iGroupUserChanged.append();
     *   iGroupUserChanged.copyRecord(iGroupUser);
     *   iGroupUserChanged.post();
     *   // Descarta o delta de inserção, para que as alterações no registro
     *   // sejam interpretadas como uma atualização
     *   iGroupUserChanged.cancelUpdates(key);
     *
     *   iGroupUserChanged.setField('iName', 'My test');
     *   iGroupUserChanged.post();
     * }
     * @param {number} [opt_key] Chave do registro que deve ter as alterações do
     * delta descartadas. Se não for informado, todo o delta será excluído.
     * @see #applyUpdates
     * @see File
     */
    cancelUpdates(opt_key?: number): void;
    /**
     * Copia as definições de campos de um dataSet.<br>
     * O Exemplo abaixo copia todos os campos do DataSet ds1 para o DataSet ds2.
     * @example
     * ds1 = dbCache.getTable("iVFS")
     *
     * var ds2 = new DataSet()
     * ds2.copyStructure( ds1 )
     * ds2.create()
     * @example
     * // Este outro exemplo copia os campo iName e iUrl do DataSet ds1 para o DataSet ds2.
     * ds1 = dbCache.getTable("iVFS")
     *
     * var ds2 = new DataSet()
     * ds2.copyStructure( ds1, 'iName;iUrl' )
     * ds2.create()
     * @param {DataSet} sourceDataSet DataSet de onde será copiadas as definições dos campos.
     * @param {string} [fieldNames] Lista de nomes de campos separados por
     * ;(ponto-e-vírgula) que serão copiados. Se for omitido, serão copiados todos os campos.
     */
    copyStructure(sourceDataSet: DataSet, fieldNames?: string): void;
    /**
     * Desfaz todas as alterações que estão registradas no delta do DataSet.
     *
     * Nota: O rollBack usa o delta para desfazer as alterações no DataSet, ou seja, apenas o
     * que estiver no delta será desfeito.
     * @example
     * var ds = database.query("Select CHAVE, CLASSE, VERSAO, CODIGO " +
     *     "From TABELA Where CODIGO like 'Representações%'")
     * // Faz alterações no DataSet
     * for ( ds.first; !ds.eof; ds.next() ){
     *   ds.codigo = ds.codigo + ' & CIA.'
     *   // ...
     * }
     *
     * // Deixa o DataSet na forma em que estava depois do último applyUpdates.
     * ds.rollBack()
     * @see #applyUpdates
     */
    rollBack(): void;
    /**
     * Cancela a alteração de um registro no DataSet.
     * @see #post
     */
    cancel(): void;
    /**
     * Deixa o DataSet em modo de edição.
     * @see #post
     * @see #cancel
     */
    edit(): void;
    /**
     * Verifica se o campo existe no DataSet.
     * @example
     * // Evita um erro caso não encontre o campo
     * var ar = []
     * for ( ds.first; !ds.eof; ds.next() ) {
     *   for ( var i = 0; i < 15; i++) {
     *     if ( ds.findField("NOME" + i) != -1 ) {
     *       ar.push( ds.getField("NOME" + i) )
     *     }
     *   }
     * }
     *
     * response.write( ar.join("\n"))
     * @param {string} fieldName Nome do campo a ser procurado.
     * @return {number} Índice do campo. Caso não encontre, retorna -1.
     * @see #fieldCount
     * @see #getField
     * @see #setField
     * @see #getFieldName
     * @see #getFieldType
     * @see #getFieldSize
     * @see #create
     */
    findField(fieldName: string): number;
    /**
     * Busca todos os registros de um field.
     * @example
     * const ds = dbCache.getTable('iGroupUser')
     * ds.getRows('iKey')
     * @param {string} fieldName Nome do campo que vai ter seus dados retornados.
     * @return {Array} Array com todos os registros da coluna solicitada.
     */
    getRows(fieldName: string): any[];
    /**
     * Refaz as alterações com base na tabela iLog.
     * @example
     * const log = database.query("SELECT * FROM iLog WHERE iVersion = " + toSqlString(version));
     * ds.applyLog(log);
     * @param {DataSet} iLog Dataset que contém as informações de log.
     * @param {ApplyUndoLogOptions} [options] Opções de aplicação do log transacional.
     * @see #undoLog
     * @see #applyUpdates
     */
    applyLog(iLog: DataSet, options?: ApplyUndoLogOptions): void;
    /**
     * Desfaz as alterações com base na tabela iLog.
     * @example
     * const log = database.query("SELECT * FROM iLog WHERE iVersion = " + toSqlString(version));
     * ds.undoLog(log);
     * @param {DataSet} iLog DataSet que contém as informações de log.
     * @param {ApplyUndoLogOptions} [options] Opções de desfazimento do log transacional.
     * @see #applyLog
     */
    undoLog(iLog: DataSet, options?: ApplyUndoLogOptions): void;
    /**
     * Efetua um filtro de classe juntamente com filtros definidos no parâmetro securityExtraFilter.
     * @param {number} classKey Chave da classe a partir da qual serão verificadas as permissões do
     * usuário.
     * @param {number} [userKey] Usuário que terá a visão restringida de acordo com suas permissões.
     * Caso não seja informado, serão exibidos todos os registros de classKey e suas filhas.
     * @param {string} [securityExtraFilter] Lista de nomes de campo ou lista de pares de nomes de
     * campos usados na para filtrar os registros do DataSet.
     * @example
     * var ds = database.query("Select CLASSE, ESTABELECI " +
     *      " From PEDIDO Where " + filtro);
     *
     * // Filtra para exibir apenas os pedidos de vendas dos estabelecimentos aos quais o
     * // usuário tenha acesso.
     * // O estabelecimento usado para filtro é o especificado no cadastro de permissões da classe
     * // informada para o usuário informado, se não haver estabelecimento informado no cadastro
     * // de permissões, será utilizado.
     * // O estabelecimento do cadastro de usuários do sistema.
     * ds.setView( chaveDaClasseVendas, session.userKey , "ESTABELECI" )
     * @example
     * var ds = database.query("Select CHAVE, CLASSE, ESTABELECI " +
     *      " From PEDIDO Where " + filtro);
     *
     * // Para entender o exemplo abaixo, suponha que o campo 'ESTABELECI' no cadastro de
     * // permissões para a permissão do usuário 'session.userKey' na classe 'chaveDaClasseVendas'
     * // esteja vazio, mas o campo 'ESTABELECI' no cadastro de usuários está preenchido com 111111.
     * // Suponha também que o campo ICLASS na tabela IPERMISSION seja 222222.
     * // Ao executar o comando abaixo, só serão trazidos os registros da classe
     * // 'chaveDaClasseVendas' filtrados pela própria classe e pelos campos
     * // ESTABELECI = 111111 e CLASSE = 222222.
     * // Note o uso da palavra chave "in" em "CLASSE in ICLASS". Este recurso serve para
     * // especificar filtros cujos os nomes dos campos a serem testados na tabela do DataSet não
     * // conferem com os nomes dos campos da tabela iPermission ou iGroupUser.
     * // Os valores dos campos da tabela iPermission terão maior prioridade sobre os valores do
     * // campos da tabela iGroupUser, logo, se o campo ESTABELECI não estiver preenchido na
     * // iPermission, será utilizado o valor do campo ESTABELECI da iGroupUser.
     * ds.setView( chaveDaClasseVendas, session.userKey , "ESTABELECI;CLASSE in ICLASS" )
     */
    setView(classKey: number, userKey?: number, securityExtraFilter?: string): void;
    /**
     * Indica qual ação deve ser realizada no banco de dados com o registro informado,
     * durante o applyUpdates. Por padrão, a ação é determinada pelo DataSet com
     * base na alteração realizada (inserção, alteração ou exclusão). Este método
     * deve ser utilizado apenas nos casos em que a alteração realizada no DataSet
     * não condiz com o que deve ser realizado no banco de dados. <br>
     * A ação informada não será preservada caso o registro seja modificado em seguida.
     * Exemplo: um registro com a ação UPDATE será modificado para DELETE caso seja
     * chamado o método del(). <br>
     * Observação: O applyUpdates irá falhar caso o registro não exista no banco de dados
     * e ação escolhida for UPDATE, FORCED_UPDATE e DELETE. Também não será permitida a
     * ação INSERT caso o registro já exista no banco de dados.
     * @param {number} key Chave do registro
     * @param {number} action Ação que deve ser realizada no banco de dados. Valores possíveis: <br>
     *   ApplyUpdatesAction.NONE - O registro no banco de dados não será alterado;<br>
     *   ApplyUpdatesAction.INSERT - O registro será inserido no banco de dados;<br>
     *   ApplyUpdatesAction.UPDATE - Os campos modificados do registro serão atualizado
     * no banco de dados;<br>
     *   ApplyUpdatesAction.FORCED_UPDATE - O registro será atualizado no banco de dados, mesmo
     * que nenhum campo tenha sido modificado. Neste caso, apenas o campo iVersion/VERSAO será
     * atualizado no banco de dados;<br>
     *   ApplyUpdatesAction.DELETE - O registro será excluído do banco de dados e do DataSet.<br>
     */
    setRecordApplyUpdatesAction(key: number, action: number): void;
    /**
     * Indica qual ação será realizada no banco de dados com o registro informado, durante
     * o applyUpdates. Por padrão a ação é determinada pelo DataSet com base na alteração
     * realizada (inserção, alteração ou exclusão), mas ela pode ser modificada
     * através do método DataSet.setRecordApplyUpdatesAction().
     * @param {number} key Chave do registro
     * @return {number} Ação que será realizada no banco de dados. Valores possíveis:
     * ApplyUpdatesAction.NONE, ApplyUpdatesAction.INSERT, ApplyUpdatesAction.UPDATE,
     * ApplyUpdatesAction.FORCED_UPDATE e ApplyUpdatesAction.DELETE. A
     * documentação do parâmetro action do método DataSet.setRecordApplyUpdatesAction()
     * possui detalhes destas constantes.
     * @see #setRecordApplyUpdatesAction
     */
    getRecordApplyUpdatesAction(key: number): number;
    /**
     * Cria um novo DataSet com os registros que satisfaçam os parâmetros de pesquisa.
     * @param resultFields {string} Lista de campos separados por "," (vírgula) que devem
     * ser retornados no DataSet resultado da pesquisa.
     * @param searchFields {string} Lista de campos separados por "," (vírgula) que devem
     * ser pesquisados.
     * @param value {string} Texto a ser pesquisado. Para pesquisas parciais, deve ser utilizado
     * o caractere "%". Exemplo: "valor%".
     * @param inexact {boolean} Indica se a pesquisa será inexata. A pesquisa inexata
     * utiliza o algoritmo Metaphone para descobrir palavras semelhantes às pesquisadas.
     * @param limit {number} Limite da quantidade de registros que devem ser localizados.
     * @returns {DataSet} É retornado um clone do DataSet filtrado de acordo com a pesquisa
     */
    search(
        resultFields: string,
        searchFields: string,
        value: string,
        inexact: boolean,
        limit: number
    ): DataSet;
    /**
     * Lista de campos separada por ";" que não serão atualizados na base de dados, mesmo que
     * tenham sido alterados no DataSet.
     *
     * O uso desta propriedade permite a execução do applyUpdates em DataSets com campos
     * que não existem na tabela a ser atualizada.
     * @type {string}
     */
    ignoredFieldNamesOnApplyUpdates: string;
    /**
     * Obtém informações sobre a base de dados local IDO utilizada para
     * armazenar a tabela manipulada por este dataset. Será retornado um objeto
     * com as seguintes propriedades:<br>
     * - <b>name</b>: nome da base de dados;
     * - <b>uniqueId</b>: id único da base de dados no Engine local; e*
     * - <b>kind</b>: indica o tipo de base de dados utilizada, podendo ser
     * 'temporary' ou 'persistent'.
     * @return {{name: string, uniqueId: number, kind: string}}
     */
    getLocalDBInfo(): {
        name: string;
        uniqueId: number;
        kind: string;
    };
    /**
     * Percorre todos os registros chamando a função passada para cada registro percorrido.
     *
     * Para sair da iteração antes de percorrer todos os registros, a função deve retornar algum
     * valor diferente de `undefined`, sendo este o mesmo valor retornado pelo método `iterate`.
     * Ao término da execução o registro corrente será o mesmo antes do seu início.
     *
     * **Importante**: a função informada não pode modificar a posição corrente do DataSet durante
     * a iteração. Por esse motivo, não é permitido excluir registros durante a iteração, nem
     * modificar campos que possam filtrar ou alterar a posição do registro corrente.
     * @param {function(DataSet)} func Função que será executada a cada iteração.
     * @param {Object} [thisObj] Objeto que será utilizado como valor de `this` durante a execução
     * da função `func`.
     * @example
     * const  ds = new DataSet();
     * ds.createField('name', 'string', 50);
     * ds.create();
     *
     * ds.append();
     * ds.setField('name', 'test A');
     * ds.post();
     *
     * ds.append();
     * ds.setField('name', 'test B');
     * ds.post();
     *
     * let str = '';
     * ds.iterate(function (ds){
     *   str += ds.str('name') + '; ';
     * });
     * str; // => 'test A; test B; ';
     * @example
     * const ds = new DataSet();
     * ds.createField('firstName', 'string', 50);
     * ds.createField('lastName', 'string', 50);
     * ds.create();
     *
     * ds.append();
     * ds.setField('firstName', 'First');
     * ds.setField('lastName', 'Last');
     * ds.post();
     *
     * const str = ds.iterate(function (ds) {
     *   if (ds.str('firstName') == 'First') {
     *     return ds.str('firstName') + ' ' + ds.str('lastName');
     *   }
     * });
     * str; // => 'First Last'
     */
    iterate(func: (arg0: DataSet) => any, thisObj?: any): any;
    /**
     * Retorna o objeto DeltaInspector, responsável por prover os métodos de acesso ao delta do DataSet.
     * @return {DeltaInspector} Objeto DeltaInspector referente ao DataSet em questão.
     * @see module:@nginstack/engine/lib/dataset/DeltaInspector
     */
    getDeltaInspector(): DeltaInspector;
    /**
     * Atualiza os campos com os valores informados em todos os registros.
     *
     * Este método efetivará qualquer edição pendente e não poderá ser utilizado em dataSets protegidos
     * contra navegação.
     *
     * @example
     *  itensPedido.updateAll(fieldNames, values, {
     *    ignoreNonExistingFields: true
     *  });
     *
     * @param {Array<string>} fieldNames Nomes dos campos que devem ser atualizados.
     * @param {Array|DataSet} values Array com os valores a serem atribuídos aos campos ou dataSet de
     * onde devem ser lidos os valores. Caso seja informado um array, ele deverá ter o mesmo tamanho
     * de *fieldNames*.
     * @param {Object} [options] Opções da atualização.
     * @param {boolean} [options.ignoreNonExistingFields] Indica se devem ser ignorados os
     * campos informados que não existem neste dataSet ou no eventual dataSet informado em *values*.
     * Campos que existam neste dataSet, mas que não tenham correspondência no DataSet informado
     * em *values* serão ignorados e não serão modificados.
     * @see #setField
     */
    updateAll(
        fieldNames: string[],
        values: any[] | DataSet,
        options?: {
            ignoreNonExistingFields?: boolean;
        }
    ): void;
    /**
     * Testa a presença de um elemento numa lista de elementos separados por ponto e vírgula. A pesquisa
     * é case-insensitive.
     * @param {number|string} fieldId Nome ou índice do campo no DataSet com a lista de valores
     * @param {string} value Elemento a ser pesquisado
     * @returns {boolean} É retornado verdadeiro se o valor está presente na lista
     * @see #addMultivalue
     * @see #removeMultivalue
     */
    testMultivalue(): boolean;
    /**
     * Insere um elemento numa lista de elementos separados por ponto e vírgula. Se o elemento
     * já existir, ele não é duplicado, mesmo que este tenha um caso diferente. Ao alterar a lista,
     * não há garantia de que a ordem dos elementos seja mantida.
     * @param {number|string} fieldId Nome ou índice do campo no DataSet com a lista de valores
     * @param {string} value Elemento a ser inserido
     * @see #testMultivalue
     * @see #removeMultivalue
     */
    addMultivalue(): void;
    /**
     * Remove um elemento de uma lista de elementos separados por ponto e vírgula. Se o elemento
     * existir, ele será removido independente do caso. Ao alterar a lista,
     * não há garantia de que a ordem dos elementos seja mantida.
     * @param {number|string} fieldId Nome ou índice do campo no DataSet com a lista de valores
     * @param {string} value Elemento a ser removido
     * @see #testMultivalue
     * @see #addMultivalue
     */
    removeMultivalue(): void;
    /**
     * Posiciona o dataSet no registro com informado ou gera um erro caso a
     * o registro não exista mais ou tenha sido filtrado.
     * @param {number} rowId Identificação do registro, obtida anteriormente pela
     * propriedade {@link #rowId}
     */
    gotoRowId(rowId: number): void;
    /**
     * Tenta posicionar o dataSet no registro informado.
     * @param {number} rowId Identificação do registro, obtida anteriormente pela
     * propriedade {@link #rowId}
     * @return {boolean} True se conseguiu posicionar o dataSet, false caso o
     * registro informado não exista mais ou tenha sido filtrado.
     * @example
     * var users = classes.getCachedDataSet(classKey);
     * var rowId = users.rowId;
     * customFunction(users);
     * users.tryGotoRowId(rowId);
     */
    tryGotoRowId(rowId: number): boolean;
    /**
     * Posiciona o dataSet no bookmark informado ou gera um erro caso a
     * posição informada não exista mais ou tenha sido filtrada.
     * @param {string} bookmark Posição desejada, obtida anteriormente pela
     * propriedade {@link #bookmark}
     */
    gotoBookmark(bookmark: string): void;
    /**
     * Tenta posicionar o dataSet no bookmark informado.
     * @param {string} bookmark Posição desejada, obtida anteriormente pela
     * propriedade {@link #bookmark}
     * @return {boolean} True se conseguiu posicionar o dataSet, false caso a
     * posição informada não exista mais ou tenha sido filtrada.
     * @example
     * var users = classes.getCachedDataSet(classKey);
     * var bmk = users.bookmark;
     * customFunction(users);
     * users.tryGotoBookmark(bmk);
     */
    tryGotoBookmark(bookmark: string): boolean;
    /**
     * Cria uma cópia da configuração atual do dataSet, permitindo que elas possam
     * ser restauradas posteriormente por {@link #restoreState}.
     *
     * As propriedades que serão preservadas são: automaticApplyUpdates, logChanges,
     * indexFieldNames, range, view, classesFilter, filter e o bookmark.
     *
     * Esta função é útil para garantir que um dataset preserve a sua configuração
     * após a execução de uma função que manipule o dataset de forma não previsível.
     * O retorno dela deve ser utilizado exclusivamente para uma posterior
     * restauração.
     *
     * @example
     * var state = ds.backupState();
     * try {
     *   thirdPartyFunc(ds);
     * } finally {
     *  ds.restoreState(state);
     * }
     * @return {!Object} Objeto contendo o estado atual do dataSet, podendo
     * ser utilizado posteriormente na função {@link #restoreState}.
     */
    backupState(): any;
    /**
     * Restaura um backup da configuração de um dataSet previamente criado pela
     * função {@link #backupState}.
     *
     * As propriedades que serão restauradas são: automaticApplyUpdates, logChanges,
     * indexFieldNames, range, view, classesFilter e o filter. A
     * posição preservada pelo backup será restaurada se o registro ainda existir no
     * dataSet. Caso o registro tenha sido excluído, será mantida a posição
     * relativa (recNo) anterior.
     *
     * Esta função é útil para garantir que um dataset preserve a sua configuração
     * após a execução de uma função que manipule o dataset de forma não previsível.
     *
     * @example
     * var state = ds.backupState();
     * try {
     *   thirdPartyFunc(ds);
     * } finally {
     *  ds.restoreState(state);
     * }
     * @param {!Object} state Backup do estado que será restaurado. Ele deve ter
     * sido criado previamente pela função {@link #backupState}.
     */
    restoreState(state: any): void;
    /**
     * Cria um dataset compartilhado, ou seja, os dados são os mesmos, contudo o
     * navegador, faixa de registros acessíveis, indexação e registro corrente são
     * diferentes.
     * @example
     * // Cria um novo dataset com dados e delta compartilhado.
     * var ds = sourceDs.newSharedDataSet({sharedDelta: true});
     * @param {{sharedDelta: boolean}} [opt_options] Opções. Existe apenas a opção "sharedDelta". Ela é
     * usada para permitir que o DataSet compartilhe o mesmo delta do DataSet original. Por padrão ela
     * é falsa.
     * @return {!DataSet} Dataset compartilhado.
     * @see DataSet#clone
     */
    newSharedDataSet(opt_options?: { sharedDelta: boolean }): DataSet;
    /** @private */
    private _hasInformedField;
    /**
     * O conceito do termo 'InformedField' trata de uma sinalização para indicar se o conteúdo de
     * um campo do DataSet foi informado pelo usuário do sistema ou não. Geralmente esta propriedade é
     * alterada no DataSet pela grid do Framework <br>
     * @param {string|number} fieldNameOrIndex Nome ou índice do campo a saber se seu conteúdo foi
     * informado pelo usuário.
     * @return {boolean} true se o conteúdo do campo consultado foi informado pelo usuário.
     */
    getInformedField(fieldNameOrIndex: string | number): boolean;
    /**
     * O conceito do termo 'InformedField' trata de uma sinalização para indicar se o conteúdo de
     * um campo do DataSet foi informado pelo usuário do sistema ou não. Geralmente esta propriedade é
     * alterada no DataSet pela grid do Framework. <br>
     * @param {string|number} fieldNameOrIndex Nome ou índice do campo a alterar a propriedade.
     * @param {boolean} informed Deve ser true se o conteúdo do campo indicado no primeiro parâmetro foi
     * informado pelo usuário.
     */
    setInformedField(fieldNameOrIndex: string | number, informed: boolean): void;
    /** @private */
    private _getAndSetFieldInformedCache;
    private _mountGetAndSetFieldInformedCache;
    /**
     * O conceito do termo 'InformedField' trata de uma sinalização para indicar se o conteúdo de
     * um campo do DataSet foi informado pelo usuário do sistema ou não. Geralmente esta propriedade é
     * alterada no DataSet pela grid do Framework <br>
     * @param {string|number} fieldNameOrIndex Nome ou índice do campo a saber se seu conteúdo foi
     * informado pelo usuário.
     * @return {boolean} true se o conteúdo do campo consultado foi informado pelo usuário.
     * @deprecated Utilize {@link #getInformedField}.
     */
    getFieldInformed: any;
    /**
     * O conceito do termo 'FieldInformed' trata de uma sinalização para indicar se o conteúdo de
     * um campo do DataSet foi informado pelo usuário do sistema ou não. Geralmente esta propriedade é
     * alterada no DataSet pela grid do Framework. <br>
     * @param {string|number} fieldNameOrIndex Nome ou índice do campo a alterar a propriedade.
     * @param {boolean} informed Deve ser true se o conteúdo do campo indicado no primeiro parâmetro foi
     * informado pelo usuário.
     * @deprecated Utilize {@link #setInformedField}.
     */
    setFieldInformed: any;
    /** @private */
    private _fieldsCacheOfGetFields;
    /** @private */
    private _indexFieldsCacheOfGetFields;
    /**
     * Pega valores de campos do dataset.
     *
     * @example
     *  const values = source.getFields(['CAMPO1', 'CAMPO2']);
     *  if (target.find(values)) {
     *    //...
     *  }
     * @param {string|Array} fields Lista de campos para pegar valores. Se o parâmetro for uma string,
     * os campos
     *  devem ser separados por ; (ponto-e-vírgula).
     * @param {GetFieldOptions} options Opções de obtenção do valor do campo. Os valores podem
     * ser combinados por meio do operador bitwise OR(|): GetFieldOptions.BEFORE_VALUE,
     * GetFieldOptions.ORIGINAL_VALUE, GetFieldOptions.IGNORE_FIELD_NOT_FOUND.
     * @return {Array} Devolve uma array com a lista de valores dos campos informados no
     * parâmetro seguindo a mesma ordem.
     */
    getFields(fields: string | any[], options: GetFieldOptions): any[];
    /**
     * Retorna o valor do campo informado ou do último campo de uma expressão caso o primeiro campo
     * dessa expressão contenha a chave de um registro que faça parte do cache local.
     *
     * Tentar obter um campo que não existe na tabela de um registro produzirá um erro. Essa verificação
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
     * que o retorno deste método também seja null. Portanto, ao utilizar esse método, sempre
     * verifique se o retorno é diferente de null antes de utilizar os métodos esperados para o tipo
     * do campo final da expressão. Preferencialmente, pode ser utilizado um dos métodos abaixo
     * para garantir o tipo retornado:
     *
     *     * {@link module:@nginstack/engine/lib/dataset/DataSet~DataSet#str}
     *     * {@link module:@nginstack/engine/lib/dataset/DataSet~DataSet#num}
     *     * {@link module:@nginstack/engine/lib/dataset/DataSet~DataSet#bool}
     *     * {@link module:@nginstack/engine/lib/dataset/DataSet~DataSet#date}
     *     * {@link module:@nginstack/engine/lib/dataset/DataSet~DataSet#dbkey}
     * @example
     *  const ds = dbCache.getTable('iGroupUser');
     *  if (ds.findKey(-1898186559)) {
     *    ds.val('iName'); // => 'administrator'
     *    ds.val('iClass.NOME') // => 'Usuários'
     *    ds.val('iUnknownField') // => Error()
     *    ds.val('iClass.iUnknownField') // => Error()
     *  }
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
     * Retorna o valor do campo informado ou do último campo de uma expressão caso o primeiro campo
     * dessa expressão contenha a chave de um registro que faça parte do cache local. O valor retornado
     * sempre será um primitivo do tipo *string*.
     * Ver {@link #val} para mais detalhes.
     * @example
     *  const ds = dbCache.getTable('iGroupUser');
     *  if (ds.findKey(-1898186559)) {
     *    ds.str('iClass.NOME') // => 'Usuários'
     *  }
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
     * Retorna o valor do campo informado ou do último campo de uma expressão caso o primeiro campo
     * dessa expressão contenha a chave de um registro que faça parte do cache local. O valor retornado
     * sempre será um primitivo do tipo *number*.
     *
     * Caso o valor do campo solicitado seja nulo, será retornado 0. Será gerado um erro se valor
     * não for numérico.
     *
     * Ver {@link #val} para mais detalhes.
     * @example
     *  const ds = dbCache.getTable('iGroupUser');
     *  if (ds.findKey(-1898186559)) {
     *    ds.num('iClass.MAE') // => -1898187811
     *    ds.num('iName') // => Error()
     *  }
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
     * Retorna o valor do campo informado ou do último campo de uma expressão caso o primeiro campo
     * dessa expressão contenha a chave de um registro que faça parte do cache local. O valor retornado
     * sempre será um primitivo do tipo *boolean*.
     *
     * Caso o valor do campo solicitado não seja um booleano, ele será convertido em um de forma
     * equivalente a expressão `Boolean(value)`.
     *
     * Ver {@link #val} para mais detalhes.
     * @example
     *  const ds = dbCache.getTable('iGroupUser');
     *  if (ds.findKey(-1898186559)) {
     *    ds.bool('iClass.MAE') // => true
     *    ds.bool('iName') // true
     *    ds.bool('iEnd') // false
     *  }
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
     * Retorna o valor do campo informado ou do último campo de uma expressão caso o primeiro campo
     * dessa expressão contenha a chave de um registro que faça parte do cache local. O valor retornado
     * sempre será uma instância de Date ou null.
     *
     * Será gerado um erro caso o valor do campo solicitado não seja uma data, exceto quando ele for
     * null. Nesse caso, o valor retornado também será null.
     *
     * Ver {@link #val} para mais detalhes.
     * @example
     *  const ds = dbCache.getTable('iGroupUser');
     *  if (ds.findKey(session.userKey)) {
     *    ds.date('iLastPasswdChg') // => Date()
     *    ds.date('iEnd') // null
     *    ds.date('iName') // Error()
     *  }
     * @param {string} expr O nome de um campo ou uma expressão de campos separados por ".".
     * @return {Date|null} Valor do campo.
     * @see #str
     * @see #num
     * @see #val
     * @see #val
     * @see #dbkey
     */
    date(expr: string): Date | null;
    /**
     * Retorna o valor do campo informado ou do último campo de uma expressão caso o primeiro campo
     * dessa expressão contenha a chave de um registro que faça parte do cache local.
     *
     * O valor retornado será uma instância de `DBKey` quando o campo estiver preenchido
     * ou `null` no caso contrário. Será gerado um erro caso o valor do campo solicitado não
     * seja um valor numérico inteiro. Ver {@link #val} para mais detalhes.
     * @example
     *  const ds = dbCache.getTable('iGroupUser');
     *  if (ds.findKey(-1898186559)) {
     *    ds.dbkey('iClass') // => DBKey(-1898187809)
     *    ds.dbkey('iSmtpServer') // null
     *    ds.dbkey('iName') // Error()
     *  }
     * @param {string} expr O nome de um campo ou uma expressão de campos separados por ".".
     * @return {DBKey|null} Valor do campo.
     * @see #str
     * @see #num
     * @see #val
     * @see #date
     * @see #val
     */
    dbkey(expr: string): DBKey | null;
}
declare namespace DataSet {
    export {
        getIntegerDataType,
        setIntegerDataType,
        defaultStringOverflowMode,
        MAX_FIELDS_PER_TABLE,
        File,
        MemoryStream,
        GetFieldOptions,
        DeltaInspector,
        IdoDB,
        DataSetFieldType,
        ApplyUndoLogOptions,
        DataSetFieldDef,
    };
}
/**
 * Definição de um campo do DataSet.
 * @typedef {Object} DataSetFieldDef
 * @property {string} name Nome do campo.
 * @property {DataSetFieldType} type Tipo do campo. Valores possíveis são definidos em
 * {@link module:@nginstack/engine/lib/dataset/DataSetDataType DataSetDataType}.
 * @property {number} size Tamanho do campo no caso do tipo `'string'`.
 * @see module:@nginstack/engine/lib/dataset/DataSet~DataSet#fieldDefs
 * @see module:@nginstack/engine/lib/dataset/DataSet~DataSetFieldDefs
 */
/**
 * Coleção de definições de campos, acessível pela propriedade
 * {@link module:@nginstack/engine/lib/dataset/DataSet~DataSet#fieldDefs fieldDefs} de um
 * DataSet.
 * @constructor
 */
declare function DataSetFieldDefs(): void;
declare class DataSetFieldDefs {
    /**
     * Quantidade de campos definidos.
     * @type {number}
     */
    size: number;
    /**
     * Adiciona um novo campo a um DataSet.
     *
     * Pode ser informado um objeto de definição
     * {@link module:@nginstack/engine/lib/dataset/DataSet~DataSetFieldDef DataSetFieldDef}, um array
     * deles ou o nome, tipo e tamanho do novo campo.
     *
     * É possível adicionar novos campos após um DataSet ter sido aberto desde que este não pertença ao
     * cache local. O método {@link module:@nginstack/engine/lib/dataset/DataSet~DataSet#reload reload}
     * deve ser chamados no clone deste DataSet para que eles tenham a sua estrutura atualizada.
     *
     * Este método tem as seguintes diferenças em relação ao
     * {@link module:@nginstack/engine/lib/dataset/DataSet~DataSet#createField createField}:
     *
     *  * São aceitos apenas os tipos indicados em
     * {@link module:@nginstack/engine/lib/dataset/DataSetDataType DataSetDataType}. Identificadores
     * obsoletos como `'numeric'`, `'integer'` e `'char'` não são aceitos.
     *  * Tipos inteiros devem definir o seu tamanho, podendo ser `'int32'` ou `'int64'`. Para
     * armazenar chaves, sempre deve ser utilizado `'int64'`.
     *  * Campos do tipo `'date'` não armazenam a componente de hora.
     * @example
     * ds.fieldDefs.add({ name: 'iKey', type: 'int64' });
     * @example
     * ds.fieldDefs.add([
     *   { name: 'iKey', type: 'int64' },
     *   { name: 'iCode', type: 'string', size: 50 },
     * ]);
     * @example
     * ds.fieldDefs.add('iKey', 'int64');
     *
     * @param {DataSetFieldDef|Array<DataSetFieldDef>|string} defOrName Objeto com a definição do
     * campo ou o nome dele.
     * @param {DataSetFieldType} [type] Tipo do campo. Deve ser informado apenas se o primeiro parâmetro
     * for o nome de um campo.
     * @param {number} [size] Tamanho do campo. Deve ser informado apenas se o primeiro parâmetro
     * for o nome de um campo e o campo for do tipo string.
     * @see module:@nginstack/engine/lib/dataset/DataSetDataType
     * @see module:@nginstack/engine/lib/dataset/DataSet~DataSetFieldDef
     */
    add(
        defOrName: DataSetFieldDef | DataSetFieldDef[] | string,
        type?: DataSetFieldType,
        size?: number
    ): void;
    /**
     * Obtém a definição de um campo do DataSet.
     * @example
     * ds.fieldDefs.add('iCode', 'string', 150);
     * ds.fieldDefs.get('iCode'); // => { name: 'iCode', type: 'string', size: 150 }
     * @param {string|number} id Nome ou índice do campo a ser modificado.
     * @return {DataSetFieldDef} Propriedades do campo.
     * @see module:@nginstack/engine/lib/dataset/DataSet~DataSetFieldDef
     */
    get(id: string | number): DataSetFieldDef;
    /**
     * Altera a definição de um campo do DataSet.
     *
     * Essa operação somente pode ser realizada em um dataSet fechado.
     * @example
     *  ds.fieldDefs.set('iCode', { size: 150 });
     * @param {string|number} id Nome ou índice do campo a ser modificado.
     * @param {DataSetFieldDef} def Propriedades que serão atualizadas. As propriedades não informadas
     * serão preservadas e o nome do campo não pode ser modificado por este método.
     * @see module:@nginstack/engine/lib/dataset/DataSet~DataSetFieldDef
     */
    set(id: string | number, def: DataSetFieldDef): void;
    /**
     * Remove a definição de um campo a partir do seu nome ou índice.
     * @param {string|number} id Nome ou índice do campo a ser removido.
     * @return {boolean} True se o campo existir e tiver sido removido.
     */
    delete(id: string | number): boolean;
    /**
     * Determina se um campo com o nome informado existe no DataSet.
     * @param {string} name Nome do campo a ser pesquisado.
     * @return {boolean} True se o campo existir.
     */
    has(name: string): boolean;
    /**
     * Remove todos os campos definidos em um DataSet.
     *
     * Este método somente poderá ser utilizado em um DataSet fechado.
     */
    clear(): void;
    /**
     * Torna as definições de campos de um DataSet iguais às informadas, removendo qualquer definição
     * existente.
     * @param {DataSetFieldDefs} fieldDefs Definições que serão copiadas neste DataSet.
     */
    assign(fieldDefs: DataSetFieldDefs): void;
    /**
     * Cria um array contendo todas as definições de campos do DataSet.
     * @example
     * ds.fieldDefs.add([
     *   { name: 'iKey', type: 'int64' },
     *   { name: 'iCode', type: 'string', size: 50 },
     * ]);
     * ds.fieldDefs.toArray();
     * // => [{ name: 'iKey', type: 'int64', size: 0 }, { name: 'iCode', type: 'string', size: 50 }]
     * @return {Array<DataSetFieldDef>} Array com as definições dos campos.
     * @see module:@nginstack/engine/lib/dataset/DataSet~DataSetFieldDef
     */
    toArray(): DataSetFieldDef[];
}
import DBKey = require('../dbkey/DBKey.js');
/**
 * Obtém o tipo de dados real que é utilizado quando um campo é criado com o tipo legado
 * "integer".
 * @return {DataSetFieldType}
 * @see module:@nginstack/engine/lib/dataset/DataSetDataType
 */
declare function getIntegerDataType(): DataSetFieldType;
/**
 * Define o tipo de dados real que é utilizado quando um campo é criado com o tipo legado
 * "integer".
 *
 * Esta é uma configuração avançada e global a nível de Engine. Alterar o seu valor irá afetar o
 * funcionamento de todas as sessões JavaScript do sistema e pode provocar a perda de dados se
 * utilizada indevidamente.
 * @param {DataSetFieldType} type Tipo que deve utilizado. Valores possíveis: 'int32' ou 'int64'.
 * @see module:@nginstack/engine/lib/dataset/DataSetDataType
 */
declare function setIntegerDataType(type: DataSetFieldType): void;
declare let defaultStringOverflowMode: string;
declare let MAX_FIELDS_PER_TABLE: number;
type File = import('../io/File');
type MemoryStream = import('../io/MemoryStream');
type GetFieldOptions = import('./GetFieldOptions');
type DeltaInspector = import('./DeltaInspector');
type IdoDB = import('../ido/IdoDB');
type DataSetFieldType = import('./DataSetDataType').DataSetFieldType;
interface ApplyUndoLogOptions {
    /**
     * Indica a versão inicial dos logs transacionais que devem
     * ser aplicados ou desfeitos. O uso desta propriedade requer que a versão final também seja
     * informada em `endVersion`.
     */
    startVersion: number | null;
    /**
     * Indica a versão final dos logs transacionais que devem
     * ser aplicados ou desfeitos. O uso desta propriedade requer que a versão inicial também seja
     * informada em `startVersion`.
     */
    endVersion: number | null;
}
/**
 * Definição de um campo do DataSet.
 */
interface DataSetFieldDef {
    /**
     * Nome do campo.
     */
    name: string;
    /**
     * Tipo do campo. Valores possíveis são definidos em
     * {@link module :@nginstack/engine/lib/dataset/DataSetDataType DataSetDataType}.
     */
    type: DataSetFieldType;
    /**
     * Tamanho do campo no caso do tipo `'string'`.
     */
    size: number;
}
