export = RealmConfig;
/**
 * Configuração de um realm de ambientes JavaScript do Engine. Um realm identifica um perfil
 * de ambientes JavaScript e associa a ele configurações sobre persistência e o controle de estado
 * da sessão do usuário, permitindo que aplicações e serviços HTTP distintos criados sobre o
 * Engine sejam isoladas.
 *
 * Por exemplo, um sistema de retaguarda do ERP e um site de comércio eletrônico têm necessidades
 * distintas. Enquanto o sistema de retaguarda pode empregar um ambiente que preserve o estado
 * da sessão no servidor para simplificar a construção da aplicação, um site de comércio eletrônico
 * não pode empregar a mesma abordagem, pois ela não escala para centenas ou milhares de usuários
 * por servidor. Além disso, por motivos de segurança, um usuário do site do comércio eletrônico
 * não deveria ter como acessar uma sessão de um usuário da retaguarda. Para essas aplicações,
 * poderíamos configurar um realm "retaguarda" do tipo Stateful e um outro "comércio-eletrônico"
 * Stateless.
 *
 * Os realms são configurados no diretório ** /Configuração/Realms **. Para definir um realm, deverá
 * ser criado um subdiretório neste caminho. O nome do realm será o mesmo do diretório criado.
 * Dentro dele deverão ser criados arquivos com a extensão *.json* contendo as configurações
 * do realm. Poderão ser utilizadas as mesmas propriedades definidas nesta classe. Caso haja mais de
 * um arquivo de configuração, eles serão mixados pela ordem alfabética do nome dos arquivos.
 * Caso os arquivos definam as mesmas propriedades, prevalecerão os valores da última configuração.
 *
 * Uma vez definido um realm, poderão ser associados a ele caminhos da VFS ou rotas HTTP. Para o
 * primeiro, deverá ser definido em um arquivos x-model ou x-class por meio da seguinte
 * configuração:
 *
 * ```javascript
 * this.realm = '<REALM_NAME>';
 * ```
 *
 * Para associar rotas HTTP a um realm, deverão ser informadas as propriedades
 * {@link RouteDef#realm} e {@link RouteSetDef#realm} nos arquivos de
 * configuração das rotas.
 *
 * **Importante**: em versões antigas, o Engine permitia configurar o realm por classe/diretório
 * da VFS, utilizando para isso a classe {@link SessionConfiguration}. Essa abordagem tornou-se
 * não recomendada, pois permite que o mesmo realm possua configurações distintas caso ele seja
 * configurado em mais de uma classe/diretório, provocando comportamentos imprevisíveis. É
 * recomendado que essas configurações sejam migradas para o formato definido por esta classe,
 * mantendo no x-model/x-class apenas a associação com o nome do realm. As configurações de
 * tipo de ambiente, tempo de vida, timeout e compressão HTTP devem ser migradas para este novo
 * modelo. É importante ter atenção que as propriedades de tempo de vida e timeout da classe
 * {@link SessionConfiguration} são definidas em segundos enquanto nesta classe elas são
 * definidas em milissegundos. Portanto, ao realizar a migração da configuração, multiplique os
 * valores configurados no x-model/x-class por 1000 ao criar um arquivo de configuração json.
 * @example
 * // Exemplo de arquivo de configuração de Realm
 * {
 *   "environmentType": "stateless",
 *   "cleanupEnvironment": false,
 *   "maxLifeTime": 7200000, // 12h
 *   "maxInactiveTime": 1800000, // 30min
 *   "httpCompressionEnabled": true
 * }
 * @constructor
 */
declare function RealmConfig(): void;
declare class RealmConfig {
    /**
     * @type {Logger}
     * @private
     */
    private logger_;
    /**
     * Define o tipo de ambiente JavaScript que deverá ser utilizado para executar
     * as páginas, scripts e rotas associadas a este realm. Valores possíveis:
     *
     *  - 'stateless': a cada execução o ambiente JavaScript será obtido de
     *  um pool associado ao realm. Este ambiente poderá conter informações de execuções
     *  anteriores, inclusive de outras sessões do mesmo realm. Utilize a propriedade
     *  cleanupEnvironment para indicar que o ambiente deve ser limpo a cada execução.
     *
     *  - 'stateful': um ambiente JavaScript exclusivo será criado para cada
     * sessão de usuário. Todas as alterações do ambiente de execuções anteriores
     * estarão disponíveis no ambiente. Este ambiente não sofrerá modificações de
     * outras sessões de usuários. Note que o ambiente javaScript não será
     * persistido caso o servidor seja finalizado e que o uso de sessões stateful
     * requer que o cliente tenha o recurso de controle de cookies habilitado.
     *
     * Importante: sessões stateful fazem um elevado uso de memória e devem ser
     * evitadas. O seu uso limita significativamente a quantidade de sessões de
     * usuários suportadas por um servidor Engine.
     * @type {string}
     */
    environmentType: string;
    /**
     * Define a engine JavaScript que deverá ser utilizada para executar
     * as páginas, scripts e rotas associadas a este realm. Valores possíveis:
     *
     *  - 'ije': engine que permite executar o iJavaScript, variação do
     * JavaScript empregada no sistema.
     *
     *  - 'v8': engine JavaScript da Google com suporte ao ES6. Mais detalhes
     * em https://developers.google.com/v8/.
     *
     * Caso não seja explicitamente configurado, será utilizado o runtime padrão
     * configurado no Engine.
     *
     * **Importante**: há incompatibilidades entre os runtimes, portanto os códigos
     * JavaScript criados para o runtime *ije* podem não ser suportados no
     * runtime *v8* e vice-versa.
     * @type {string}
     */
    runtime: string;
    /**
     * Indica que o ambiente javaScript deve ser limpo a cada execução. Esta
     * propriedade é útil para testar o desenvolvimento em ambientes stateless, pois
     * permite ao desenvolvedor ter a certeza que uma execução não depende de
     * informações de execuções anteriores.
     * @type {boolean}
     */
    cleanupEnvironment: boolean;
    /**
     * Indica em milissegundos o tempo de vida do ambiente javaScript utilizado para
     * a execução de scripts deste diretório. Esta configuração permite que ambientes
     * reutilizados por várias sessões, com alto consumo de memória, sejam destruídos
     * para que novos ambientes possam ser criados.
     *
     * Informe o valor 0 para indicar que o ambiente não possui limite de tempo de
     * vida, principalmente para ambientes do tipo stateful, onde o tempo de
     * inatividade é que deverá definir a vida da sessão do usuário.
     * @type {number}
     * @default 1 dia
     */
    maxLifeTime: number;
    /**
     * Indica em milissegundos o intervalo de inatividade máximo do ambiente javaScript
     * utilizado para a execução de scripts deste diretório. Esta configuração permite
     * que ambientes criados para atender um pico de demanda sejam destruídos quando
     * deixarem de serem utilizados, reduzindo o consumo de memória durante a inatividade
     * do servidor.
     * @type {number}
     * @default 15 minutos
     */
    maxInactiveTime: number;
    /**
     * Indica que as requisições devem ser comprimidas caso o cliente suporte
     * compressão e se o content type da resposta indicar que deve haver compressão.
     * A configuração da compressão por tipos de arquivos é realizada na classe de
     * dados Tipos de Arquivos.
     * @type {boolean}
     */
    httpCompressionEnabled: boolean;
    /**
     * Indica se o dispositivo utilizado pelo cliente para acessar o sistema será identificado
     * pelo Engine por meio de um cookie único associado a ele no primeiro acesso.
     *
     * Quando esta opção está habilitada, a propriedade
     * {@link module:@nginstack/engine/lib/session/Session~Session#clientId clientId} é atribuída
     * pelo Engine com o identificador do dispositivo.
     *
     * O cliente pode optar por não enviar esse cookie de identificação, portanto as regras de
     * negócio que utilizem essa propriedade devem contar que o cliente pode não ter sido
     * identificado.
     * @type {boolean}
     * @see module:@nginstack/engine/lib/session/Session~Session#clientId
     */
    clientTrackingEnabled: boolean;
    /**
     * Indica se o Engine rastreará automaticamente a sessão do usuário por meio de um cookie único
     * enviado ao cliente na criação da sessão. Somente sessões do tipo *stateful* permitem o
     * rastreio da sessão.
     *
     * Quando esta opção está desativada, o cliente deve manualmente indicar a sessão ao Engine
     * por meio do cabeçalho HTTP "x-session-id" ou via parâmetro "ngin_sid" na *query string* ou
     * corpo da requisição.
     * @type {boolean}
     * @see module:@nginstack/engine/lib/session/Session~Session#id
     */
    sessionTrackingEnabled: boolean;
    /**
     * Indica que todos os logins realizados nas sessões JavaScript criadas neste *realm* serão
     * registrados no log para fins de auditoria. Somente sessões do tipo *stateful* permitem
     * esta configuração.
     * @type {boolean}
     */
    loginAuditingEnabled: boolean;
    /**
     * Indica que todas as sessões JavaScript criadas neste *realm* são associadas ao aplicativo
     * indicado para fins de monitoramento de recursos do sistema.
     *
     * Propriedades das sessões *stateful* associadas a um aplicativo são publicadas
     * automaticamente pelo Engine na tabela *iApplicationSession*, permitindo uma visão
     * consolidada dos recursos consumidos pelo aplicativo.
     * @type {number}
     */
    application: number;
}
declare namespace RealmConfig {
    /**
     * Obtém a configuração de um realm a partir de um diretório da Virtual File System.
     * A configuração é obtida avaliando todos os arquivos *.json* contidos no diretório
     * pela ordem alfabética dos nomes dos arquivos.
     * @param {number} directory Chave do diretório que define o realm. Será gerado um erro caso
     * o diretório informado não seja um subdiretório de /Configuração/Realms.
     * @return {RealmConfig} Configuração do realm solicitado.
     */
    function fromKey(directory: number): RealmConfig;
    /**
     * Obtém a configuração de um realm a partir do seu nome. Os realms são definidos por meio de
     * diretórios em /Configuração/Realms. O nome do realm será o nome do subdiretório e sua
     * configuração é obtida avaliando todos os arquivos *.json* contidos no diretório
     * pela ordem alfabética dos nomes dos arquivos.
     * @param {string} name Nome do diretório que define o realm. Será gerado um erro caso
     * o diretório informado não seja um subdiretório de /Configuração/Realms.
     * @return {RealmConfig} Configuração do realm solicitado.
     */
    function fromName(name: string): RealmConfig;
}
