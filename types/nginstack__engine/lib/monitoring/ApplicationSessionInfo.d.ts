export = ApplicationSessionInfo;
/**
 * @typedef {import('../dataset/DataSet')} DataSet
 * @private
 */
/**
 * Informações e estatísticas de uma sessão de aplicativo coletadas pela API de monitoramento
 * do sistema.
 * @constructor
 */
declare function ApplicationSessionInfo(): void;
declare class ApplicationSessionInfo {
    /**
     * Chave do aplicativo em uso pelo usuário.
     * @type {number}
     */
    applicationKey: number;
    /**
     * Nome do aplicativo em uso pelo usuário.
     * @type {string}
     */
    applicationName: string;
    /**
     * Realm das sessões JavaScript utilizadas por este aplicativo. Esta é uma informação técnica
     * que auxilia o desenvolvedor caso o aplicativo utilize mais de um perfil de sessão JavaScript.
     * Os realms possíveis estão relacionados em Configuração > Realms.
     * @type {string}
     */
    realm: string;
    /**
     * Chave do usuário que está utilizando a aplicação.
     * @type {number}
     */
    userKey: number;
    /**
     * Nome do usuário que está utilizando a aplicação.
     * @type {string}
     */
    userName: string;
    /**
     * Identificador único da sessão do usuário.
     * @type {string}
     */
    sessionId: string;
    /**
     * Identificador único do Engine que está servindo a sessão do usuário.
     * @type {string}
     */
    engineId: string;
    /**
     * Endereço IP do cliente que criou esta sessão.
     * @type {string}
     */
    clientAddress: string;
    /**
     * Identificação única do navegador ou dispositivo utilizado pelo cliente para se conectar
     * ao Engine.
     * @type {string}
     */
    clientId: string;
    /**
     * Identificação do agente do usuário enviada na requisição HTTP que criou esta sessão.
     * @type {string}
     */
    userAgent: string;
    /**
     * Data e hora em que a sessão do usuário foi criada, representada pela quantidade de
     * milissegundos a partir de 1 de Janeiro de 1970 00:00:00 UTC.
     * @type {number}
     */
    createdAt: number;
    /**
     * Data e hora da última utilização da sessão do usuário, representada pela quantidade de
     * milissegundos a partir de 1 de Janeiro de 1970 00:00:00 UTC.
     * @type {number}
     */
    accessedAt: number;
    /**
     * Data e hora em que a sessão do usuário irá expirar, representada pela quantidade de
     * milissegundos a partir de 1 de Janeiro de 1970 00:00:00 UTC.
     * @type {number}
     */
    expiresAt: number;
    /**
     * Data e hora da coleta destas informações da sessão do usuário, representada pela quantidade de
     * milissegundos a partir de 1 de Janeiro de 1970 00:00:00 UTC.
     * @type {number}
     */
    updatedAt: number;
    /**
     * Data e hora em que foi solicitado o descarte da sessão do usuário, representada pela
     * quantidade de milissegundos a partir de 1 de Janeiro de 1970 00:00:00 UTC.
     * @type {number|null}
     */
    dropRequestedAt: number | null;
    /**
     * Mensagem para o usuário que explica o motivo da sessão ter sido expirada de forma forçada.
     * @type {string|null}
     */
    dropReason: string | null;
    /**
     * Chave do usuário que solicitou a expiração forçada da sessão do usuário.
     * @type {number|null}
     */
    dropRequesterKey: number | null;
    /**
     * Nome do usuário que solicitou a expiração forçada da sessão do usuário.
     * @type {string|null}
     */
    dropRequesterName: string | null;
    /**
     * Data e hora em que a sessão do usuário será descartada, representada pela quantidade de
     * milissegundos a partir de 1 de Janeiro de 1970 00:00:00 UTC.
     * @type {number|null}
     */
    dropsAt: number | null;
}
declare namespace ApplicationSessionInfo {
    export { fromDataSet, DataSet };
}
/**
 * Cria uma instância de `ApplicationSessionInfo` a partir de um registro da tabela
 * iApplicationSession.
 * @param {DataSet} ds DataSet com registros da tabela iApplicationSession. Será criada uma
 * instância de `ApplicationSessionInfo` com as informações do registro corrente.
 * @return {ApplicationSessionInfo} Instância criada a partir das informações contidas no DataSet.
 */
declare function fromDataSet(ds: DataSet): ApplicationSessionInfo;
type DataSet = import('../dataset/DataSet');
