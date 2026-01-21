export = SessionConfiguration;
/**
 * @typedef {import('../dbkey/DBKey')} DBKey
 * @private
 */
/**
 * Objeto que representa a configuração do realm que deve ser utilizado para executar
 * os scripts contidos em um diretório da VFS. Atualmente essa classe deve ser utilizada
 * apenas para indicar o realm associado ao diretório da VFS. Mais detalhes em
 * {@link RealmConfig}.
 * @constructor
 */
declare function SessionConfiguration(): void;
declare class SessionConfiguration {
    /**
     * Logger utilizado por instâncias desta classe.
     * @type {Logger}
     * @private
     */
    private logger_;
    /**
     * Indica que esta configuração está sendo duplicada pelo método {@link #duplicate}.
     * @type {boolean}
     * @private
     */
    private duplicating_;
    /**
     * Informe o realm a qual esta classe e seus registros estão associadas.<br>
     * Realm é um conjunto classes e registros que representam uma aplicação. Uma sessão criada
     * para atender um realm não poderá ser utilizada para atender outro realm, garantindo que não
     * haverá interferência entre os mesmos.
     * @type {string}
     * @deprecated Utilize {@link module:@nginstack/engine/lib/classdef/ModelDef#realm}.
     */
    realm: string;
    /**
     * Define o vínculo do ambiente JavaScript à sessão. Valores possíveis:<br>
     *  - SessionEnvironmentType.STATELESS - A cada execução o ambiente javaScript será obtido de
     *  um pool associado ao realm. Este ambiente poderá conter informações de execuções
     *  anteriores, inclusive de outras sessões do mesmo realm. Utilize a propriedade
     *  cleanupEnvironment para limpar o ambiente a cada execução.<br>
     *  - SessionEnvironmentType.STATEFUL - A sessão irá criar um ambiente javaScript
     *  exclusivo e todas as as alterações de execuções anteriores estarão disponíveis no
     *  ambiente. Este ambiente não sofrerá modificações de outras sessões.
     *  Note que o ambiente javaScript não será persistido caso o servidor seja finalizado.
     * @type {boolean}
     * @deprecated Utilize {@link module:@nginstack/engine/lib/http/RealmConfig~RealmConfig#environmentType}.
     */
    environmentType: boolean;
    /**
     * Indica se uma sessão e suas propriedades devem ser persistentes e qual o mecanismo
     * de armazenamento destas informações. Valores possíveis:<br>
     *  - SessionPersistence.NONE - A sessão não será persistida e será perdida ao finalizar o
     *  servidor.<br>
     *  - SessionPersistence.COOKIE - A sessão será armazenada na estação do cliente através de cookies.
     *  Este modo possui um limite no tamanho total utilizado pelas propriedades das sessões de todos os
     *  realms em uso. Para a maioria dos browsers o limite é de 80kb, valor que pode ser reduzido em
     *  dispositivos móveis. Por conta desta limitação, não devem ser definidas propriedades grandes ou
     *  complexas como DataSets.<br>
     *  - SessionPersistence.LOCALSTORAGE - A sessão será armazenada em um arquivo do servidor. Não há
     *  limites de tamanho para as propriedades da sessão. (Backlog)<br>
     *  - SessionPersistence.DBSTORAGE - A sessão será armazenada em uma tabela do banco de dados.
     *  Não há limites de tamanho para as propriedades da sessão e uma sessão poderá ser
     *  recuperada por qualquer servidor que tenho acesso ao banco de dados. Possui a desvantagem
     *  de requerer o acesso ao banco de dados, impedindo o seu funcionamento em situações onde o
     *  banco esteja offline. (Backlog)<br>
     * @type {boolean}
     * @deprecated Utilize um mecanismo de persistência de estado no cliente, como SessionStorage,
     * IndexedDB ou Cookies, ou no servidor, via banco de dados ou arquivos.
     */
    persistence: boolean;
    /**
     * Indica que o ambiente javaScript deve ser limpo a cada execução. Esta propriedade é útil
     * para testar o desenvolvimento de sites STATELESS, pois permite ao desenvolvedor ter a
     * certeza que uma execução não depende de informações anteriores.
     * @type {boolean}
     * @deprecated Utilize {@link module:@nginstack/engine/lib/http/RealmConfig~RealmConfig#cleanupEnvironment}.
     */
    cleanupEnvironment: boolean;
    /**
     * Indica o tempo de vida da sessão. Em sessões Stateful, ela indicará qual o timeout
     * do ambiente JavScript. Em sessões Stateless, indicará qual o tempo que as
     * propriedades persistidas serão mantidas.
     * @type {number}
     * @deprecated Utilize {@link module:@nginstack/engine/lib/http/RealmConfig~RealmConfig#maxInactiveTime} ou
     * {@link module:@nginstack/engine/lib/http/RealmConfig~RealmConfig#maxLifeTime}.
     */
    timeout: number;
    /**
     * Indica em segundos o tempo de vida do ambiente javaScript utilizado para
     * a execução de scripts deste diretório. Esta configuração permite que ambientes
     * reutilizados por várias sessões, com alto consumo de memória, sejam destruídos
     * para que novos ambientes possam ser criados.
     *
     * Informe o valor 0 para indicar que o ambiente não possui limite de tempo de
     * vida.
     *
     * Os ambientes JavaScripts criados por sessões Stateful não possuem limite
     * de tempo de vida, pois a sua destruição somente ocorre na expiração da sessão.
     * @type {number}
     * @deprecated Utilize {@link module:@nginstack/engine/lib/http/RealmConfig~RealmConfig#maxInactiveTime} ou
     * {@link module:@nginstack/engine/lib/http/RealmConfig~RealmConfig#maxLifeTime}.
     */
    maxEnvironmentLifeTime: number;
    /**
     * Indica em segundos o intervalo de inatividade máximo do ambiente javaScript
     * utilizado para a execução de scripts deste diretório. Esta configuração permite
     * que ambientes criados para atender um pico de demanda sejam destruídos quando
     * deixarem de serem utilizados, reduzindo o consumo de memória durante a inatividade
     * do servidor.
     *
     * Os ambientes JavaScripts criados por sessões Stateful possuem o limite de
     * inatividade igual a ao valor informado na propriedade "maxSessionInactiveTime".
     * @type {number}
     * @deprecated Utilize {@link module:@nginstack/engine/lib/http/RealmConfig~RealmConfig#maxInactiveTime} ou
     * {@link module:@nginstack/engine/lib/http/RealmConfig~RealmConfig#maxLifeTime}.
     */
    maxEnvironmentInactiveTime: number;
    /**
     * Indica em segundos o intervalo de inatividade máximo da sessão do usuário.
     *
     * Em sessões Stateful, o valor informado também se aplicará ao ambiente
     * JavaScript associado a sessão.
     *
     * Após atingir o tempo de inatividade, os dados das sessões persistidas serão
     * excluídos do local de armazenagem definido pela propriedade "persistence".
     * @type {number}
     * @deprecated Utilize {@link module:@nginstack/engine/lib/http/RealmConfig~RealmConfig#maxInactiveTime} ou
     * {@link module:@nginstack/engine/lib/http/RealmConfig~RealmConfig#maxLifeTime}.
     */
    maxSessionInactiveTime: number;
    /**
     * Indica que as requisições para as páginas e recursos deste diretório serão
     * comprimidos se o navegador suportar compressão e se o tipo do arquivo
     * acessado indicar que deve haver compressão. A configuração dos tipos de
     * arquivos é realizada na classe de dados Tipos de Arquivos.
     * @type {boolean}
     * @deprecated Utilize {@link module:@nginstack/engine/lib/http/RealmConfig~RealmConfig#httpCompressionEnabled}.
     */
    httpCompressionEnabled: boolean;
    /**
     * Indica que todas as sessões JavaScript criadas para executar scripts neste diretório
     * são associadas ao aplicativo indicado para fins de monitoramento de recursos do sistema.
     * @type {DBKey|number}
     * @deprecated Utilize {@link module:@nginstack/engine/lib/http/RealmConfig~RealmConfig#application}.
     */
    application: DBKey | number;
    /**
     * Indica se o dispositivo utilizado pelo cliente para acessar o sistema será identificado
     * pelo Engine por meio de um cookie único associado a ele no primeiro acesso.
     * @type {boolean}
     * @deprecated Utilize {@link module:@nginstack/engine/lib/http/RealmConfig~RealmConfig#clientTrackingEnabled}.
     */
    clientTrackingEnabled: boolean;
    /**
     * Indica se o Engine rastreará automaticamente a sessão do usuário por meio de um cookie único
     * enviado ao cliente na criação da sessão. Somente sessões do tipo *stateful* permitem o
     * rastreio da sessão.
     * @type {boolean}
     * @deprecated Utilize {@link module:@nginstack/engine/lib/http/RealmConfig~RealmConfig#sessionTrackingEnabled}.
     */
    sessionTrackingEnabled: boolean;
    /**
     * Indica que todos os logins realizados nesta sessão serão registrados no log para fins de
     * auditoria. Somente sessões do tipo *stateful* permitem esta configuração.
     * @type {boolean}
     * @deprecated Utilize {@link module:@nginstack/engine/lib/http/RealmConfig~RealmConfig#loginAuditingEnabled}.
     */
    loginAuditingEnabled: boolean;
    /**
     * Cria uma cópia da configuração.
     * @return SessionConfiguration
     */
    duplicate(): SessionConfiguration;
}
declare namespace SessionConfiguration {
    export { DBKey };
}
type DBKey = import('../dbkey/DBKey');
