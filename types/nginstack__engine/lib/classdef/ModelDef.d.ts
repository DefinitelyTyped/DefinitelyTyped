export = ModelDef;
/**
 * @typedef {import('../event/Event')} Event
 * @private
 */
/**
 * @typedef {import('../event/AdapterDescriptor')} AdapterDescriptor
 * @private
 */
/**
 * @typedef {Record<*,*>} CachedDataOptions
 * @deprecated
 * @private
 */
/**
 * @typedef {import('./ClassDefManager')} ClassDefManager
 * @private
 */
/**
 * @typedef {ModelDef} ViewDef
 * @see module:@nginstack/web-framework/lib/classdef/ViewDef
 * @private
 */
/**
 * Abstração da definição do modelo de dados a partir de uma classe.
 * Pode ser entendido como um mapeamentos objeto-relacional, na camada MVC.
 * @extends ClassDef
 * @constructor
 */
declare function ModelDef(): void;
declare class ModelDef {
    cachedFields: string[];
    /** @private */
    private localDeclaredProperty_;
    /** @private */
    private ownFieldsSet_;
    /** @private */
    private ownFieldsArray_;
    /**
     * Logger utilizado pela API de definição de classes.
     * @type {Logger}
     * @protected
     */
    protected logger_: Logger;
    /**
     * Opções do adaptador de eventos comuns a todos os eventos adaptados.
     * Essas opções poderão ser sobrepostas pela função adaptEvent_.
     * @type {Object}
     * @protected
     */
    protected defaultAdapterDescriptor_: any;
    /**
     * Determina se os eventos declarados utilizando a API antiga antiga de eventos
     * (onNomeEvento) serão ignorados.
     *
     * Por padrão, os *listeners* adicionados utilizando a API antiga de eventos serão ignorados
     * caso sejam definidos em um arquivo do tipo x-class quando solicitado o modelo (getModelDef) de
     * uma classe que não está configurada em modo estrito.
     * @returns {boolean}
     */
    canAddAdaptedListeners(): boolean;
    /**
     * Declara um objeto que pode sofrer o processo de clonagem.
     * @param {string} propertyName Nome da propriedade.
     * @param {*} initialValue Valor inicial.
     */
    declareCloneableObject(propertyName: string, initialValue: any): void;
    /**
     * Definição da primeira classe ancestral que contém definições de campos.
     * @type {ModelDef}
     * @private
     */
    private nextParentDefWithFieldsCache_;
    /**
     * Cache do resultado do método {@link #getExtraFilterExpression}.
     * @type {?string}
     * @private
     */
    private extraFilterExpressionCache_;
    /**
     * Cache do resultado do método {@link #getExtraFilterFields}.
     * @type {Array<Field>}
     * @private
     */
    private extraFilterFieldsCache_;
    /**
     * Determina a existência de replicação de dados da tabela em disco.
     * @type {boolean|CachedDataOptions}
     * @deprecated Utilize {@link #cacheStrategy}.
     */
    cachedData: boolean | CachedDataOptions;
    /**
     * Define a estratégia de cache da tabela associada a esta classe no cache local dos Engines.
     * @type {TableCacheStrategy}
     */
    cacheStrategy: typeof TableCacheStrategy;
    /**
     * Determina como será armazenado o conteúdo dos arquivos da VFS (coluna iContent) desta classe.
     * Caso seja `true`, o conteúdo dos arquivos será armazenado diretamente na tabela iVfs,
     * fazendo parte do cache local. Caso seja `false`, o conteúdo será armazenado na tabela iVfsLob
     * apenas na base de dados, sendo necessária uma consulta ao banco de dados na leitura do conteúdo
     * do arquivo.
     *
     * **Importante**: arquivos do tipos "application/x-config", "application/x-model",
     * "application/x-view" e "application/x-class" sempre são armazenados diretamente na tabela
     * iVfs, independentemente do valor desta propriedade.
     * @type {boolean}
     */
    cachedVfsContent: boolean;
    /**
     * Gestor de definições de classe.
     * @type {ClassDefManager}
     */
    classDefManager: ClassDefManager;
    /**
     * Indica a forma como se valida a mudança de classe dos registros.
     * @type {number}
     */
    classChangePolicy: number;
    /**
     * Indica qual é o nome do campo na tabela que irá relacionar a classe no registro.
     * @type {string}
     */
    classFieldName: string;
    /**
     * Ajuda sobre o que representa a tabela no nível da classe.
     * Aqui devem ser abordados assuntos técnicos e relacionados a estrutura e relacionamentos
     * entre as tabelas
     * @type {string}
     */
    dataDictionary: string;
    /**
     * Indica em qual *tablespace* serão criados os índices da tabela definida por esta classe ou uma de
     * suas filhas.
     * @type {string}
     */
    dbIndexSpace: string;
    /**
     * Indica em qual TABLE_SPACE as tabelas serão criadas.
     * @type {string}
     */
    dbTableSpace: string;
    /**
     * Determina qual é a classe que é utilizada para construção de campos no Mapeamento
     * objeto-relacional. O método {@link ModelDef#field} retornará uma instância
     * da classe apresentada nesta propriedade.
     * Ou seja, se existir um campo criado para o nome de campo fornecido, uma instancia da
     * classe em fieldClass é fornecido se não houver é criada uma e retornada.
     * @type {function(...*):*}
     */
    fieldClass: (...args: any[]) => any;
    /**
     * Determina a ordem de pesquisa dentro do x-find nas classes. A ordenação é
     * realizada para todas as classes que possuem x-find na hierarquia da mãe
     * para os filhos.
     * @type {number}
     */
    findOrder: number;
    /**
     * Ajuda conceitual sobre uma determinada classe. É importante que o help não informe
     * conceitos técnicos ou de interface. Essas informações devem estar descritas na
     * propriedade dataDictionary.
     * @type {string}
     */
    help: string;
    /**
     * Propriedade que indica se o justToGroup foi definido explicitamente para a classe corrente.
     * @type {boolean}
     */
    hasOwnJustToGroup: boolean;
    /**
     * Informa qual é o campo chave da tabela.
     * @type {string}
     */
    keyFieldName: string;
    /**
     * Especifica o campo que será utilizado para exibir o valor padrão dos registros desta classe
     * quando apresentados em campos ou operações lookup.
     *
     * Este valor é exibido quando campos lookup recebem foco ou em outros contextos onde a
     * identificação visual do registro é necessária.
     *
     * Esta propriedade complementa o evento `lookupDisplay`, que pode ser usado para personalizar
     * o valor de exibição quando o campo não está em foco. Recomenda-se que, ao utilizar este evento,
     * o valor calculado mantenha o conteúdo deste campo como base, adicionando informações complementares
     * como sufixo, proporcionando assim uma transição visual mais consistente entre os estados.
     *
     * O campo configurado nesta propriedade deve ser definido como obrigatório na classe atual
     * e em todas as suas subclasses, e não deve permitir valores vazios nos registros.
     * @see module:@nginstack/engine/lib/classdef/Field/Field#event:lookupDisplay
     * @type {string}
     */
    lookupDisplayFieldName: string;
    /**
     * Tipo de dado que representa o campo memo no banco.
     * Esse tipo pode variar para os diversos bancos que o Engine suporta.
     * @type {string}
     */
    memoDbType: string;
    /**
     * Campo classe utilizado na tabela classe.
     * @type {number}
     */
    metaClass: number;
    /**
     * Máxima quantidade de ocorrências a serem pesquisadas durante a pesquisa de
     * um x-finder.
     * @type {number}
     */
    occurrenceLimit: number;
    /**
     * Quantidade máxima de dias em que os logs serão mantidos na base.
     *
     * Para realizar a limpeza é necessário executar o processo "Administração do sistema > Auditoria >
     * Limpeza da tabela de log".
     * @type {number}
     */
    transactionLogMaxDays: number;
    /**
     * Nome do campo que guardará as versões do registro.
     * @type {string}
     */
    versionFieldName: string;
    /**
     * Nome de execução desta classe. Caso não seja informada, será o nome da classe que definiu
     * este modelo.
     * @type {string}
     */
    displayName: string;
    /**
     * Ordem de exibição da classe, quando exibida em menus ou em conjunto com classes irmãs. Se
     * nenhum valor for fornecido, a ordem considerada é a ordem alfabética.
     * @type {number}
     */
    displayOrder: number;
    /**
     * Indica o tipo de fonte que foi utilizado para criar esta definição.
     * @type {SourceType}
     */
    sourceType: typeof SourceType;
    /**
     * Objeto utilizado para guardar informações de cache associadas a uma definição de modelo
     * de dados de uma classe. Quando uma definição é modificada, todas as informações no cache
     * associadas a ela são descartadas. O sistema também poderá realizar descarte das informações
     * a qualquer momento por outros critérios, como limite do tamanho do cache ou redução do consumo
     * de memória da aplicação.<br>
     * <b>Importante</b>: como o cache a princípio é mantido durante toda a vida do sistema,
     * não utilize-o para guardar dados de informações úteis apenas para um processamento
     * específico que não será reutilizado em outro momento da vida de uma sessão.
     * @type {ClassDefCache}
     */
    cache: ClassDefCache;
    /**
     * Tipo de dado que deve ser utilizado na base de dados para os campos do tipo "integer".
     *
     * O tipo "integer" é um opção legada que existia antes da criação dos tipos "int64" e "int32".
     * @type {string}
     */
    integerDatabaseType: string;
    /** @private */
    private integerDatabaseType_;
    /**
     * Array com os campos criados ou potencialmente modificados na definição do modelo da classe de
     * dados indicada por {@link #key}. Diferente de {@link #fields}, não farão parte desta
     * coleção os campos herdados da classe-mãe que não tenham sido acessados ou modificados
     * nesta definição de classe.
     * @type {Array<Field>}
     */
    ownFields: Field[];
    /**
     * Lista de campos.
     * @type {FieldList}
     * @private
     */
    private fields_;
    /**
     * Indica se os processos de atualização devem sincronizar os registros
     * negativos da tabela configurada por esse x-class. Por padrão, apenas
     * as tabelas que participam do cache local têm os seus registros
     * sincronizados. Esse comportamento pode ser modificado por meio de uma
     * configuração explícita desta propriedade.<br>
     * <b>Importante:</b> Essa configuração deve ser realizada apenas em x-class
     * que definem uma tabela por meio da propriedade tableName.
     * @type {boolean}
     * @see #cacheStrategy
     */
    upgradeMustSyncRecords: boolean;
    /**
     * Indica se os processos de atualização devem modificar o esquema da tabela definido por
     * esta classe. Deve ser `true` para as tabelas gerenciadas pelo sistema e `false` para as
     * tabelas criadas e mantidas por sistemas de terceiros.
     *
     * **Importante:** esta configuração deve ser realizada apenas no arquivo x-model ou x-class
     * que definiu a tabela por meio da propriedade tableName.
     * @type {boolean}
     */
    managedDatabaseSchema: boolean;
    /**
     * Indica se os processos de atualização devem modificar o esquema da tabela definido por
     * esta classe.
     * @type {boolean}
     * @deprecated Utilize {@link #managedDatabaseSchema}.
     */
    upgradeChangesTableStructure: boolean;
    /**
     * Sessão do usuário que invocou a criação da definição de modelo.
     * @type {Object}
     */
    session: any;
    /**
     * Determina o realm a qual esta classe/diretório da Virtual File System está associado. Requisições
     * HTTP que executem scripts contidos neste diretório utilizarão ambientes JavaScripts do
     * realm informado. Veja {@link module:@nginstack/engine/lib/classdef/RealmConfig} para mais detalhes
     * sobre a configuração de realms.
     * @type {string}
     */
    realm: string;
    /**
     * Determina se a classe utilizada é somente para agrupamento.
     * @type {boolean}
     */
    justToGroup: boolean;
    /**
     * Nome da tabela que o modelo objeto-relacional da classe irá mapear.
     * @type {string}
     */
    tableName: string;
    /**
     * Conjunto de grupos de campo.
     * @type {FieldGroupSet}
     */
    groups: FieldGroupSet;
    /**
     * Define justToGroup e hasOwnJustToGroup como false, implementando assim a
     * definição padrão.
     */
    resetJustToGroup(): void;
    /** @private */
    private justToGroup_;
    private nextParentWithFields_;
    private nextParentDefWithFields_;
    private notifyFieldUsage_;
    /**
     * Obtém ou cria um campo na classe de dados. Este método retornará o campo existente com o
     * nome informado ou criará um caso não exista. Nesse último caso, é obrigatório informar o tipo
     * do campo. Tipos suportados:<br>
     * "string"       - Tipo utilizado para campos que conterão texto;<br>
     * "password"     - Tipo utilizado para campos que conterão senhas;<br>
     * "masterdetail" - Tipo utilizado para criar uma relação de 1 para N entre duas classes. Para
     * utilizar esse tipo de campo é obrigatório o preenchimento das seguintes propriedades:<br>
     *  - <b>classKey</b>: indica a classe de dados que contém os registros detalhes da relação.
     *  A classe de dados que definiu o campo do tipo "masterDetail" é a classe considerada
     *  mestre da relação;<br>
     *  - <b>masterFieldNames</b>: indica os campos da classe de dados mestre que devem ser utilizados
     *  para filtrar os registros da classe de dados detalhe.<br>
     *  - <b>detailFieldNames</b>: indica os campos da classe de dados detalhe que serão filtrados
     *  com os valores dos campos <em>masterFieldNames</em> da classe mestre.<br>
     * Pseudo-código para obtenção dos registros detalhes:<br><br>
     * <pre>
     *    var tabelaDetalhe = classes.getCachedDataSet(field.classKey);
     *    var camposMestre = getFieldValues(field.masterFieldNames);
     *    tabelaDetalhe.indexFieldNames = field.detailFieldNames;
     *    detail.setRange(camposMestre, camposMestre);
     * </pre>
     * <br><br>
     * "int64" - Tipo utilizado para campos que conterão números inteiros de 64 bits. Campos
     * que armazenem chaves ou versões do sistema devem utilizar este tipo.<br>
     * "int32" - Tipo utilizado para campos que conterão números inteiros de 32 bits. Deve ser utilizado
     * para valores contidos na faixa de [-Math.pow(2, 31) ~ Math.pow(2, 31) - 1] e que não sejam
     * chaves e versões do sistema. Para esses últimos, deve ser utilizado o tipo "int64".<br>
     * "integer" - Tipo legado que existia antes da criação dos tipos "int64" e "int32". O tipo
     * "integer" será mapeado para um desses dois tipos de acordo com o valor retornado pela
     * propriedade {@link #integerDatabaseType}.<br>
     * "number" - Tipo utilizado para campos que conterão números decimais.
     * Por padrão terão duas casas decimais.<br>
     * "latitude" - Tipo utilizado para campos que conterão números decimais
     * para representar latitudes. Por padrão terão até cinco casas decimais e a parte
     * inteira conterá até três casas.<br>
     * "longitude" - Tipo utilizado para campos que conterão números decimais
     * para representar longitudes. Por padrão terão até cinco casas decimais e a parte
     * inteira conterá até três casas.<br>
     * "angle" - Tipo utilizado para campos que conterão números decimais
     *  para representar ângulos. Por padrão terão duas casas decimais e a parte
     * inteira conterá até três casas.<br>
     * "memo" - Tipo utilizado para campos que conterão textos longos
     * (mais de 4000 caracteres).
     * "date" - Tipo utilizado para campos que conterão datas.<br>
     * "combo" - Tipo utilizado para campos que conterão listas de opções
     *  ou combinação de outros tipos.<br>
     * "time" - Tipo utilizado para campos que conterão horas. Utilizado
     * para trabalhar com tempo.<br>
     * "boolean" - Tipo utilizado para campos que conterão valores lógicos ou booleanos.<br>
     * "file" - Tipo utilizado para campos que conterão arquivos.<br>
     * @param {string} name Nome do campo a ser obtido ou criado.
     * @param {string} [type] Tipo do campo. Opcional quando for solicitado um campo existente.
     * @param {number} [size] Tamanho do campo em caracteres. Obrigatório apenas para os tipos
     * "string" e "password".
     * @return {Field}
     */
    field(name: string, type?: string, size?: number): Field;
    /**
     * Prefira usar {@link module:@nginstack/engine/lib/classdef/ClassDefManager.getViewDef}.
     * @param classKey
     * @return {ViewDef}
     * @deprecated
     */
    getClassDef(classKey: any): ViewDef;
    /**
     * Obtém uma instância da definição da classe de acordo com a herança
     * que foi projetada para a hierarquia. Ou seja se o protótipo da definição
     * da primeira classe for de modelo todas as outras instâncias de classe que
     * forem montadas a partir da execução serão instâncias de modelo também.
     * Caso o protótipo na hierarquia seja construído a partir da definição de visão
     * ({@link uwi.classdef.ViewDef}) sempre será obtida uma instância de visão
     * durante o uso deste método.
     * @param {number} classKey Chave da classe.
     * @return {ModelDef} Definição obtida.
     */
    getNormalizedDef(classKey: number): ModelDef;
    /**
     * Campos definidos na classe de dados e na hierarquia de classes mãe.
     * @type {FieldList}
     */
    fields: FieldList;
    /**
     * Obtém a primeira definição da camada de visão na hierarquia com base no nome de uma
     * propriedade da API de definição. A instância resultante é encontrada a partir da instância
     * da camada de visão ou de modelo da classe corrente. Caso não encontre, nenhuma instância é
     * retornada.
     * @param {string} propertyName Nome da propriedade
     * @param {boolean} [skipCurrentClass] Escapar a classe corrente, se essa opção for true
     * a busca pela instância irá iniciar a partir da classe pai. Em caso de não haver classe
     * pai, a busca será iniciada pela classe Raiz.
     * @return {ViewDef} Definição da camada de visão obtida a partir de uma
     * propriedade.
     */
    getClassDefWithObjectProperty(propertyName: string, skipCurrentClass?: boolean): ViewDef;
    /**
     * Obtém a primeira definição da camada de visão na hierarquia com base no nome de um
     * evento registrado por declareEvent. A instância resultante é encontrada a partir da
     * instância da camada de visão ou de modelo da classe corrente. Caso não encontre,
     * nenhuma instância é retornada.
     * @param {string} eventName Nome do evento.
     * @param {boolean} [skipCurrentClass] Escapar a classe corrente, se essa opção for true
     * a busca pela instância irá iniciar a partir da classe pai. Em caso de não haver classe
     * pai, a busca será iniciada pela classe Raiz.
     * @return {ViewDef} Definição da camada de visão obtida a partir de uma
     * propriedade.
     * @return {*}
     * @deprecated Este método suporta apenas os eventos customizados declarados pelo método
     * {@link #declareEvent}, não podendo ser utilizado para os eventos padrão do sistema.
     * Seu uso não é mais recomendado, devendo o seu uso ser substituído por uma lógica
     * customizada equivalente. Ele será eliminado no futuro.
     */
    getClassDefWithEvent(eventName: string, skipCurrentClass?: boolean): ViewDef;
    /**
     * Determina se a definição de classe possui uma propriedade.
     * @param {string} propertyName Nome da propriedade
     * @return {boolean} True se houver definição da propriedade na classe.
     */
    hasObjectProperty(propertyName: string): boolean;
    /**
     * Determina se uma definição de classe declarou uma determinada propriedade.
     * @param {string} propertyName Nome da propriedade.
     * @return {boolean} True se a propriedade houver sido declarada na definição da classe.
     */
    hasObjectPropertyDeclaredInThisClass(propertyName: string): boolean;
    /**
     * Determina se um evento foi declarado na definição da classe.
     * @param {string} eventName Nome do evento.
     * @return {boolean} True se o evento houver sido declarado na definição de classe.
     *
     */
    hasEvent(eventName: string): boolean;
    /***
     * Declara um array dentro da instância de modelo, respeitando as definições declaradas na
     * hierarquia de classes.
     * @param {string} name Nome do array que foi declarado.
     */
    declareArray(name: string): void;
    /**
     * Declara um Getter que manipula uma instância de uma determinada classe Javascript
     * na instância da camada de modelo, respeitando as definições declaradas na
     * hierarquia de classes.
     * @param {string} propertyName Nome da propriedade.
     * @param {string} objectClassName Nome da classe que irá construir uma instância.
     */
    declareGetterOfObjectProperty(propertyName: string, objectClassName: string): void;
    /**
     * Indica quais campos serão filtros da consulta de um datasource.
     * @type {!Array<string>}
     * @deprecated
     */
    datasourceDefaultFilters: string[];
    /**
     * Índices que devem ser criados no cache local na inicialização do sistema.
     * @type {!Array<string>}
     * @deprecated Propriedade não mais utilizado pelo Engine. Os valores declarados serão
     * ignorados pelo sistema.
     */
    indexes: string[];
    /**
     * Utilize a API nova de tabela de soma.
     * @deprecated
     * @type {!Array}
     */
    dbSums: any[];
    /**
     * Declara um objeto na instância da camada de modelo,
     * respeitando as definições declaradas na hierarquia de classes.
     * @param {string} name Nome do objeto.
     */
    declareObject(name: string): void;
    /**
     * Declara um getter para um evento na definição de classe,
     * respeitando as definições declaradas na hierarquia de classes.
     * @param {string} name Nome do evento.
     */
    declareEvent(name: string): void;
    /**
     * Cria um adaptador da API de eventos antiga (classe global Event) com a nova API
     * Emitter. Esse adaptador terá os mesmos métodos de Event, mas os eventos
     * registrados por eles serão adicionados como listeners por meio método <em>on</em>
     * desta definição de dados.
     * @param {string} name Nome do evento.
     * @param {AdapterDescriptor|Record<*,*>} descriptor Regras de como deve
     * ser feita a adaptação do evento.
     * @protected
     */
    protected adaptEvent_(name: string, descriptor: AdapterDescriptor | Record<any, any>): void;
    /**
     * Evento que filtra ocorrências válidas.
     * Esse evento apresenta a característica de disparar os listeners definidos
     * nas classes ancestrais.
     * @type {!Event}
     * @deprecated Este evento não é emitido pelo Web Framework. Utilize o evento "lookupAddResult"
     * do campo lookup.
     */
    onLookupAddResult: Event;
    /**
     * Evento emitido antes da execução do método post do DataSet associado a classe de dados.
     * Seu uso é recomendado para realizar validações se os dados do registro não ferem regras
     * de negócio.
     * @event module:@nginstack/engine/lib/classdef/ModelDef~ModelDef#validate
     * @type {DataEvent}
     * @deprecated Utilize o evento beforePost.
     */
    onValidate: DataEvent;
    /**
     * Método utilizado pelo gerenciador de classes para sinalizar que a definição deve ser
     * inicializada. Ele é executado logo após a criação da definição.
     * @param {ClassDef} [opt_parentDef] Definição pai da definição que está sendo criada.
     */
    init(opt_parentDef?: ClassDef, ...args: any[]): void;
    /**
     * Indica se há campos declarados nesta classe. Caso não haja, os campos dessa
     * classe serão os mesmos da classe mãe.
     * @return {boolean}
     */
    hasOwnFields(): boolean;
    /**
     * Pega todos os campos definidos na classe e hierarquia de classes mãe. Irá obter um
     * StringList a partir do fieldList da classe.
     * @return {StringList} Objeto StringList com todos os campos definidos para a classe
     * e com os definidos nas classes mãe
     * @deprecated Mantido apenas por compatibilidade para quem ainda precisa utilizar
     * um StringList como repositório de fields
     */
    getFieldsAsStringList(): StringList;
    /**
     * Pesquisa por um campo definido dentro da classe, caso encontre, retorna o campo
     * encontrado.
     * @param {string} name Nome do campo.
     * @return {Field}
     */
    findField(name: string): Field;
    private findChildField_;
    /**
     * Obtém o valor de exibição a partir de um evento onLookupDisplay anexado a um
     * objeto disparador.
     * @param {Object} sender Objeto disparador.
     * @param {*} value Valor que deve ser exposto para o evento.
     * @param {Event} [event] Evento opcional que deve ser informado em substituição ao
     * padrão onLookupDisplay.
     * @return {string} Valor de exibição.
     */
    getLookupDisplay(sender: any, value: any, event?: Event): string;
    /**
     * Informa os atributos de um determinado arquivo na tabela iVfs.
     * Os atributos servem para informar se um arquivo será exibido,
     * informar nome, ordem de exibição e permissão de controle.
     * A tabela iVfs representa o sistema de arquivos virtuais, ou seja,
     * são arquivos que estão sendo armazenados diretamente no banco
     * e são replicados para o cache local
     * @param {number} vfsKey Chave do arquivo.
     * @return {{display: boolean, displayName: string, displayOrder: number,
     * permissionControlEnabled: boolean}} Atributos do arquivo.
     */
    fileAttributes(vfsKey: number): {
        display: boolean;
        displayName: string;
        displayOrder: number;
        permissionControlEnabled: boolean;
    };
    /**
     * Indica se os atributos do arquivo foram informados nesta classe.
     * @return {boolean} True se os atributos foram informados, false caso
     * contrário.
     * @see #fileAttributes
     */
    hasOwnFileAttributes(fileKey: any): boolean;
    /**
     * Oculta os arquivos informados no menu principal.<br>
     * <b>Importante:</b> Arquivos ocultos com o atributo permissionControlEnabled falso não
     * serão visíveis nos processos de permissão.
     * @param {Array<number>} files Chaves dos arquivos que serão ocultos.
     * @see ModelDef#fileAttributes
     */
    hideFiles(files: number[]): void;
    /**
     * Retorna uma string que informa qual a chave do x-class ao qual a
     * instância foi criada.
     * @return {string}
     */
    toString(): string;
    /**
     * Este método cria ou seta as propriedades informadas com os
     * valores informados em cada campo da definido nos parâmetros.
     * Para utilizar esse método existem diversas formas de o invocar,
     * veja os exemplo abaixo.
     * @example
     *  // Array de campos com callback para setar as propriedades:
     *  fl.setFieldsProperties([field1, field2], function (field) {
     *    field.prop = valor;
     *    field.prop2 = valor2;
     *  });
     *
     *  // Array com os nomes dos campos com callback para setar as propriedades:
     *  fl.setFieldsProperties(['campo1','campos2'], function (field) {
     *    field.prop = valor; field.prop2 = valor2
     *  });
     *
     *  // String com o nomes dos campos separados por virgula ou ponto e virgula como primeiro
     *  // parâmetro.
     *  // Array com nomes das propriedades a serem definidas como segundo parâmetro.
     *  // Array com os valores a serem definidos nas propriedades de mesmo índice como terceiro
     *  // parâmetro.
     *  fl.setFieldsProperties('campo1,campos2', ['prop', 'prop2'], [valor, valor2]);
     *
     *  // Ainda na forma anterior pode ser utilizado o caractere '*' para obter todos os campos.
     *  fl.setFieldsProperties('*', ['prop', 'prop2'], [valor, valor2]);
     *
     *  // Lista de strings separados por vírgula ou ponto e virgula com os nomes dos campos a
     *  // serem alterados como primeiro parâmetro.
     *  // Os parâmetros seguintes são os nomes das propriedades com os valores que devem ser
     *  // atribuídos.
     *  fl.setFieldsProperties('campo1,campos2', 'prop', valor, 'prop2', valor2);
     */
    setFieldsProperties(...args: any[]): void;
    /**
     * Retorna uma lista de campos cuja propriedades tenham os valores informados.
     * @param {...*} propertyName Há múltiplas formas de definição dos parâmetros, veja o
     * exemplo abaixo.
     * @return {Array<Field>} Lista de campos.
     * @example
     *  //Propriedade e valor:
     *  //Nessa forma serão obtidos os campos que possuem as propriedades fornecidos
     *  //com os respectivos valores.
     *  getFieldsByProperty('prop', valor, 'prop2', valor2);
     *
     *  //Array de propriedades e de valores:
     *  //Nessa forma serão fornecidos dois arrays, o primeiro array é o de propriedades
     *  //que se relaciona com o segundo array, que é o de valores, pelo índice.
     *  getFieldsByProperty(['prop', 'prop2'], [valor, valor2]);
     *
     *  //Através de um callback
     *  //Nesta forma são obtidos os campos de acordo com a regra definida no callback.
     *  getFieldsByProperty(function (field) {
     *    return field.required === true;
     *  });
     */
    getFieldsByProperty(...args: any[]): Field[];
    private _translateFieldNamesToFieldObjectsArray;
    private _getFieldByName;
    /**
     * Estrutura de dados de uma chave do banco {@link DBKey}.
     * Essa estrutura será utilizada nos casos em que houver a necessidade de validar dados ou
     * tratar dados na camada de apresentação.
     * @return {string} JSON que representa a estrutura de dados de uma {@link DBKey}, ou seja,
     * é a representação de uma relação entre registros do banco de dados.
     */
    getKeySchema(): string;
    /**
     * Cria uma representação JSON desta definição do modelo.
     * @return {string}
     */
    toJSONSchema(): string;
    /**
     * Cria uma cópia desta definição de modelo de dados.
     * @example
     *  var modelDef = classDefManager.getModelDef(ClassKeys.LICENSES);
     *  var modelDefWithoutEvents = modelDef.clone();
     *  modelDefWithoutEvents.offAll();
     *  modelDefWithoutEvents.fields.map(function (fld) {
     *    fld.offAll();
     *  });
     * @return {ModelDef}
     */
    clone(): ModelDef;
    /**
     * Obtém os campos desta classe que foram configurados como filtro extra de permissão por
     * meio da propriedade {@link Field#permissionFilterFieldName}.
     * @example
     *  var modelDef = classDefManager.getModelDef(ClassKeys.LICENSES);
     *  var extraFilterFields = modelDef.getExtraFilterFields().
     *  if (extraFilterFields.length === 0) {
     *    this.alert('Classe de licenças não possui campos de filtro de permissão extra.');
     *  }
     * @return {Array<Field>} Array com os campos que possuem a propriedade
     * {@link Field#permissionFilterFieldName} informada.
     * @see #getExtraFilterExpression
     * @see Field#permissionFilterFieldName
     */
    getExtraFilterFields(): Field[];
    /**
     * Obtém uma expressão com os filtros extras para esta classe de dados. Os filtros extras são
     * configurados por meio da propriedade {@link Field#permissionFilterFieldName}
     * dos campos e possibilitam que o administrador configure permissões dos usuários levando em
     * consideração outros campos além da classe do registro. Esse recurso é útil quando a classe
     * do registro não é suficiente para segmentar corretamente as permissões dos usuários e outros
     * campos, como o Estabelecimento associado ao registro, podem ser utilizados para determinar
     * as permissões.
     * @example
     *  var modelDef = classDefManager.getModelDef(ClassKeys.LICENSES);
     *  var filteredDataSet = classes.getCachedDataSet(ClassKeys.LICENSES, session.userKey,
     *    modelDef.getExtraFilterExpression());
     * @return {string} Caso a classe tenha filtros extras configurados, será retornada uma
     * expressão de filtro que consiste dos campos de permissões concatenados por ";". Caso o nome
     * do campo seja diferente do campo de permissão, será utilizada a expressão
     * "[field.name] in [field.permissionFilterFieldName]". A expressão retornada deve ser utilizada
     * nas APIs de DataSet que filtram as permissões do usuário, como
     * {@link Classes#getCachedDataSet} e {@link DataSet#setView}. Caso não haja filtros extras
     * configurados, será retornada uma string vazia.
     * @see #getExtraFilterFields
     * @see Field#permissionFilterFieldName
     */
    getExtraFilterExpression(): string;
}
declare namespace ModelDef {
    export {
        declareCloneableObject,
        declareArray,
        declareGetterOfObjectProperty,
        declareObject,
        declareEvent,
        Event,
        AdapterDescriptor,
        CachedDataOptions,
        ClassDefManager,
        ViewDef,
    };
}
import Logger = require('../log/Logger.js');
import TableCacheStrategy = require('./TableCacheStrategy.js');
import SourceType = require('./SourceType.js');
import ClassDefCache = require('./ClassDefCache.js');
import Field = require('./Field.js');
import FieldGroupSet = require('./FieldGroupSet.js');
import FieldList = require('./FieldList.js');
import DataEvent = require('./DataEvent.js');
import ClassDef = require('./ClassDef.js');
import StringList = require('../string/StringList.js');
/**
 * Declara um objeto que pode sofrer o processo de clonagem em um outro objeto.
 * @param {ModelDef} obj Objeto onde será criado a propriedade.
 * @param {string} propertyName Nome da propriedade.
 * @param {*} initialValue Valor inicial.
 */
declare function declareCloneableObject(
    obj: ModelDef,
    propertyName: string,
    initialValue: any
): void;
/**
 * Declara um array dentro de um objeto, respeitando as definições declaradas na
 * hierarquia de classes.
 * @param {ModelDef} obj Objeto aonde o array será declarado.
 * @param {string} name Nome do array que foi declarado.
 */
declare function declareArray(obj: ModelDef, name: string): void;
/**
 * Declara um Getter que manipula uma instância de uma determinada classe Javascript
 * em um objeto, respeitando as definições declaradas na
 * hierarquia de classes.
 * @param {ModelDef} obj Objeto aonde o getter será declarado
 * @param {string} propertyName Nome da propriedade.
 * @param {string} objectClassName Nome da classe que irá construir uma instância.
 */
declare function declareGetterOfObjectProperty(
    obj: ModelDef,
    propertyName: string,
    objectClassName: string
): void;
/**
 * Declara um objeto em outro objeto respeitando as definições declaradas
 * na hierarquia de classes.
 * @param {ModelDef} obj Objeto aonde será declarado o objeto.
 * @param {string} name Nome do objeto.
 */
declare function declareObject(obj: ModelDef, name: string): void;
/**
 * Declara um getter para um evento em um determinado objeto,
 * respeitando as definições de hierarquia.
 * @param {ModelDef} obj Objeto que terá um evento declarado.
 * @param {string} name Nome do evento
 */
declare function declareEvent(obj: ModelDef, name: string): void;
type Event = import('../event/Event');
type AdapterDescriptor = import('../event/AdapterDescriptor');
type CachedDataOptions = Record<any, any>;
type ClassDefManager = import('./ClassDefManager');
type ViewDef = ModelDef;
