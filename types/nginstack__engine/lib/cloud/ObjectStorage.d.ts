export = ObjectStorage;
/**
 * @typedef {Object} GoogleOptions
 * @property {string} bucketName Nome do espaço de armazenamento alocado no Google Cloud.
 * @property {string} [serviceAccountKey] Conteúdo de um arquivo de chave de uma conta de serviço
 * do Google no formato JSON.
 * @property {string} [applicationCredentials] Caminho do arquivo de credenciais gerado pelo
 * aplicativo de linha de comando do Google Cloud. Para mais informações consulte a
 * [documentação do Google](https://cloud.google.com/docs/authentication/provide-credentials-adc)
 */
/**
 * @typedef {Object} AmazonOptions
 * @property {string} bucketName Nome do espaço de armazenamento alocado no serviço do Amazon S3.
 * @property {string} accessKeyId Chave de acesso da conta de usuário criado no serviço da Amazon.
 * @property {string} secretAccessKey Segredo da chave de acesso.
 * @property {string} region Região do globo onde o espaço de armazenamento está alocado.
 * @property {string} [endpoint] Indica o endpoint que deve ser utilizado na comunicação. Esse
 * parâmetro é util ao se utilizar uma ferramenta de armazenamento que emule a API do S3.
 * @property {boolean} [allowHttp] Indica se deve ser utilizado o tráfego inseguro usando HTTP. Por
 * padrão toda a comunicação é feita de forma segura utilizando HTTPS. Esse parâmetro é util apenas
 * quando se está utilizando uma ferramenta de armazenamento de terceiro que emule a API do S3 e que
 * esteja publicada sem utilizar HTTPS.
 */
/**
 * @typedef {Object} AzureOptions
 * @property {string} containerName Nome do espaço de armazenamento alocado no serviço do Azure Blob
 * Storage.
 * @property {string} accountName Nome da conta de armazenamento com acesso ao serviço.
 * @property {string} accessKey Chave de acesso da conta de armazenamento.
 * @property {string} clientId Identificador do cliente para autorizar acesso ao serviço de
 * armazenamento.
 * @property {string} clientSecret Segredo do cliente para autorizar acesso ao serviço de
 * armazenamento.
 */
/**
 * @typedef {Object} UploadOptions Opções de parametrização do upload do objeto.
 * @property {string} [contentType] Especifica o tipo MIME do objeto. Se não for informado um tipo
 * ele será inferido a partir da extensão de arquivo extraída do parâmetro "location" do upload.
 * Se o "location" informado não possuir uma extensão será considerado o tipo
 * "application/octet-stream". Se o upload estiver sendo feito pelo método `uploadText`, o conteúdo
 * textual será codificado em UTF-8 e será adicionada a informação do `charset` ao tipo
 * ("application/octet-stream; charset=utf-8" p.e.).
 * @property {string} [contentEncoding] Especifica a codificação aplicada ao objeto.
 * @property {string} [contentDisposition] Especifica como o objeto deve ser manipulado por um
 * navegador. Este parâmetro é relevante apenas nos casos em que os objetos forem acessíveis
 * diretamente pelos navegadores.
 * @property {string} [cacheControl] Define a política de controle de cache do objeto. Este parâmetro
 * é relevante apenas nos casos em que os objetos forem acessíveis diretamente pelos navegadores.
 * @property {Record<string,string>} [metadata] Especifica um conjunto de pares chave/valor que serão
 * atribuídos ao objeto.
 */
/**
 * @typedef {Object} ObjectInfo
 * @property {string} location Caminho do objeto no repositório remoto.
 * @property {Date} lastModified Data da ultima atualização.
 * @property {number} size Tamanho do objeto em bytes.
 * @property {string} [eTag] Identificador único atribuído ao objeto pelo repositório remoto.
 * @property {string} [version] Indicador de versão do objeto.
 * @property {string} [contentType] Indica o tipo MIME do objeto ("text/plain" p.e.).
 * @property {string} [contentEncoding] Indica a codificação aplicada ao objeto.
 * @property {string} [contentDisposition] Indica como o objeto deve ser manipulado por um navegador.
 * @property {string} [cacheControl] Indica a política de controle de cache do objeto.
 * @property {Record<string,string>} [metadata] Lista o conjunto de pares chave/valor que foram
 * atribuídos ao objeto.
 */
/**
 * Permite gravar e ler "objetos" nos 3 principais provedores de armazenamento em nuvem
 * do mercado: Google, Amazon e Azure.
 * @example
 * const ObjectStorage = require('@nginstack/engine/lib/cloud/ObjectStorage.js');
 * const storage = ObjectStorage.fromConfig(99999999);
 * const info = storage.uploadData('a/path/to/my-file.txt', 'my file content');
 * @example
 * const ObjectStorage = require('@nginstack/engine/lib/cloud/ObjectStorage.js');
 * const gcp = new ObjectStorage('google', {
 *   'bucketName': '...',
 *   'applicationCredentials': '...'
 * });
 * const info = gcp.uploadData('a/path/to/my-file.txt', 'my file content');
 * @param {string} provider Provedor de armazenamento em nuvem. Pode ser informado 'google',
 * 'amazon' ou 'azure'.
 * @param {GoogleOptions|AmazonOptions|AzureOptions} options Objeto contendo o conjunto de variáveis
 * de configuração necessárias para a conexão com o serviço.
 * @constructor
 */
declare function ObjectStorage(
    provider: string,
    options: GoogleOptions | AmazonOptions | AzureOptions
): void;
declare class ObjectStorage {
    /**
     * @typedef {Object} GoogleOptions
     * @property {string} bucketName Nome do espaço de armazenamento alocado no Google Cloud.
     * @property {string} [serviceAccountKey] Conteúdo de um arquivo de chave de uma conta de serviço
     * do Google no formato JSON.
     * @property {string} [applicationCredentials] Caminho do arquivo de credenciais gerado pelo
     * aplicativo de linha de comando do Google Cloud. Para mais informações consulte a
     * [documentação do Google](https://cloud.google.com/docs/authentication/provide-credentials-adc)
     */
    /**
     * @typedef {Object} AmazonOptions
     * @property {string} bucketName Nome do espaço de armazenamento alocado no serviço do Amazon S3.
     * @property {string} accessKeyId Chave de acesso da conta de usuário criado no serviço da Amazon.
     * @property {string} secretAccessKey Segredo da chave de acesso.
     * @property {string} region Região do globo onde o espaço de armazenamento está alocado.
     * @property {string} [endpoint] Indica o endpoint que deve ser utilizado na comunicação. Esse
     * parâmetro é util ao se utilizar uma ferramenta de armazenamento que emule a API do S3.
     * @property {boolean} [allowHttp] Indica se deve ser utilizado o tráfego inseguro usando HTTP. Por
     * padrão toda a comunicação é feita de forma segura utilizando HTTPS. Esse parâmetro é util apenas
     * quando se está utilizando uma ferramenta de armazenamento de terceiro que emule a API do S3 e que
     * esteja publicada sem utilizar HTTPS.
     */
    /**
     * @typedef {Object} AzureOptions
     * @property {string} containerName Nome do espaço de armazenamento alocado no serviço do Azure Blob
     * Storage.
     * @property {string} accountName Nome da conta de armazenamento com acesso ao serviço.
     * @property {string} accessKey Chave de acesso da conta de armazenamento.
     * @property {string} clientId Identificador do cliente para autorizar acesso ao serviço de
     * armazenamento.
     * @property {string} clientSecret Segredo do cliente para autorizar acesso ao serviço de
     * armazenamento.
     */
    /**
     * @typedef {Object} UploadOptions Opções de parametrização do upload do objeto.
     * @property {string} [contentType] Especifica o tipo MIME do objeto. Se não for informado um tipo
     * ele será inferido a partir da extensão de arquivo extraída do parâmetro "location" do upload.
     * Se o "location" informado não possuir uma extensão será considerado o tipo
     * "application/octet-stream". Se o upload estiver sendo feito pelo método `uploadText`, o conteúdo
     * textual será codificado em UTF-8 e será adicionada a informação do `charset` ao tipo
     * ("application/octet-stream; charset=utf-8" p.e.).
     * @property {string} [contentEncoding] Especifica a codificação aplicada ao objeto.
     * @property {string} [contentDisposition] Especifica como o objeto deve ser manipulado por um
     * navegador. Este parâmetro é relevante apenas nos casos em que os objetos forem acessíveis
     * diretamente pelos navegadores.
     * @property {string} [cacheControl] Define a política de controle de cache do objeto. Este parâmetro
     * é relevante apenas nos casos em que os objetos forem acessíveis diretamente pelos navegadores.
     * @property {Record<string,string>} [metadata] Especifica um conjunto de pares chave/valor que serão
     * atribuídos ao objeto.
     */
    /**
     * @typedef {Object} ObjectInfo
     * @property {string} location Caminho do objeto no repositório remoto.
     * @property {Date} lastModified Data da ultima atualização.
     * @property {number} size Tamanho do objeto em bytes.
     * @property {string} [eTag] Identificador único atribuído ao objeto pelo repositório remoto.
     * @property {string} [version] Indicador de versão do objeto.
     * @property {string} [contentType] Indica o tipo MIME do objeto ("text/plain" p.e.).
     * @property {string} [contentEncoding] Indica a codificação aplicada ao objeto.
     * @property {string} [contentDisposition] Indica como o objeto deve ser manipulado por um navegador.
     * @property {string} [cacheControl] Indica a política de controle de cache do objeto.
     * @property {Record<string,string>} [metadata] Lista o conjunto de pares chave/valor que foram
     * atribuídos ao objeto.
     */
    /**
     * Permite gravar e ler "objetos" nos 3 principais provedores de armazenamento em nuvem
     * do mercado: Google, Amazon e Azure.
     * @example
     * const ObjectStorage = require('@nginstack/engine/lib/cloud/ObjectStorage.js');
     * const storage = ObjectStorage.fromConfig(99999999);
     * const info = storage.uploadData('a/path/to/my-file.txt', 'my file content');
     * @example
     * const ObjectStorage = require('@nginstack/engine/lib/cloud/ObjectStorage.js');
     * const gcp = new ObjectStorage('google', {
     *   'bucketName': '...',
     *   'applicationCredentials': '...'
     * });
     * const info = gcp.uploadData('a/path/to/my-file.txt', 'my file content');
     * @param {string} provider Provedor de armazenamento em nuvem. Pode ser informado 'google',
     * 'amazon' ou 'azure'.
     * @param {GoogleOptions|AmazonOptions|AzureOptions} options Objeto contendo o conjunto de variáveis
     * de configuração necessárias para a conexão com o serviço.
     * @constructor
     */
    constructor(provider: string, options: GoogleOptions | AmazonOptions | AzureOptions);
    /**
     * Grava um objeto no repositório utilizando os bytes informados. O conteúdo informado não passará
     * por nenhum tipo de codificação antes da gravação.
     * @param {string} location Caminho completo do objeto no repositório remoto.
     * @param {string|ArrayBuffer|Uint8Array} content Conteúdo do objeto. Se for informada uma String,
     * será considerada como string binária previamente codificada.
     * @param {UploadOptions} [options] Opções de configuração do objeto enviado.
     * @return {ObjectInfo} Objeto com os detalhes do objeto gravado no repositório remoto.
     */
    uploadData(
        location: string,
        content: string | ArrayBuffer | Uint8Array,
        options?: UploadOptions
    ): ObjectInfo;
    /**
     * Grava um objeto no repositório utilizando o texto informado.
     * @param {string} location Caminho completo do objeto no repositório remoto.
     * @param {string} content Conteúdo do objeto. Se for informada uma String,
     * será considerada como string binária previamente codificada.
     * @param {UploadOptions} [options] Opções de configuração do objeto enviado. O conteúdo será
     * codificado em UTF-8 antes de ser gravado no repositório. Por esse motivo, se for informado um
     * "content-type" com "charset" diferente de UTF-8 será gerado um erro. Para realizar upload
     * definindo um "content-type" com "charset" diferente de UTF-8, deve ser utilizado o método
     * "uploadData" ou "uploadFile".
     * @return {ObjectInfo} Objeto com os detalhes do objeto gravado no repositório remoto.
     */
    uploadText(location: string, content: string, options?: UploadOptions): ObjectInfo;
    /**
     * Grava um objeto no repositório informando o caminho do arquivo de origem no sistema operacional.
     * Da mesma forma que o método "uploadData", este método não realiza a codificação dos dados antes
     * da gravação no repositório.
     * @param {string} location Caminho completo do objeto no repositório remoto.
     * @param {string} filePath Caminho do arquivo que será enviado para o repositório.
     * @param {UploadOptions} [options] Opções de configuração do objeto enviado.
     * @return {ObjectInfo} Objeto com os detalhes do objeto gravado no repositório remoto.
     */
    uploadFile(location: string, filePath: string, options?: UploadOptions): ObjectInfo;
    /**
     * Lista os objetos gravados no repositório. É possível filtrar os registros retornados utilizando
     * o parâmetro "prefix" para informar o "caminho" dos objetos no repositório.
     *
     * @param {string} [prefix] Caminho ou parte do caminho do objeto no repositório. Se não for
     * informado, retornará uma lista com os metadados de todos os objetos armazenados no repositório.
     * O caminho informado diferencia letras maiúsculas e minúsculas.
     * @return {ObjectInfo[]} Lista com os metadados dos objetos encontrados. Nos dados retornados
     * não há o conteúdo dos objetos. Para obter o conteúdo dos objetos deve ser utilizado o método
     * "download". Se nenhum objeto for encontrado no caminho informado, será retornado um Array vazio.
     */
    list(prefix?: string): ObjectInfo[];
    /**
     * Retorna os detalhes do objeto localizado no caminho informado.
     * @param {string} location Caminho completo do objeto no repositório. O caminho informado
     * diferencia letras maiúsculas e minúsculas.
     * @return {ObjectInfo} Objeto com os detalhes do objeto informado. Se não for encontrado um
     * objeto no caminho informado será gerado erro.
     */
    info(location: string): ObjectInfo;
    /**
     * Remove o objeto localizado no caminho informado.
     * @param {string} location Caminho do objeto a ser removido. Se não for encontrado um objeto no
     * caminho informado será gerado erro.
     */
    delete(location: string): void;
    /**
     * Retorna se o objeto no caminho informado existe ou não.
     * @param {string} location Caminho do objeto a ser consultado.
     * @return {boolean}
     */
    exists(location: string): boolean;
    /**
     * Realiza o download do objeto armazenado no repositório remoto.
     *
     * @param {string} location Caminho completo do objeto no repositório. O caminho informado
     * diferencia letras maiúsculas e minúsculas.
     * @return {DownloadResult} Objeto baixado do repositório remoto. Se não for encontrado um objeto
     * no caminho informado será gerado erro.
     */
    download(location: string): DownloadResult;
    /**
     * Indica se o acesso ao serviço está sendo feito em modo somente leitura.
     *
     * O acesso será somente para leitura se:
     *
     * * No cadastro do serviço, localizado em "Administração do sistema > Serviços em nuvem >
     * Armazenamento de objetos" o campo "Somente leitura" estiver marcado.
     * * Se o Engine não conseguir confirmar que a base de dados corrente é a base proprietária do bucket.
     * Isso pode acontecer se no bucket informado no cadastro do serviço não for encontrado o arquivo de
     * manifesto ou se o manifesto não indicar que a base de dados corrente é a base proprietária do bucket.
     * @type {boolean}
     */
    readOnly: boolean;
}
declare namespace ObjectStorage {
    export { fromConfig, GoogleOptions, AmazonOptions, AzureOptions, UploadOptions, ObjectInfo };
}
/**
 * Representa o resultado da leitura de um objeto do repositório remoto.
 *
 * Uma instância dessa classe é obtida através do método
 * {@link module:@nginstack/engine/lib/cloud/ObjectStorage~ObjectStorage#download download} da classe
 * `ObjectStorage`. Com essa instância é possível inspecionar as informações do objeto armazenado no
 * storage e utilizar um dos métodos "toFile", "toBytes" ou "toText" para consumir o conteúdo do
 * objeto lido.
 * @constructor
 */
declare function DownloadResult(): void;
declare class DownloadResult {
    /**
     * Caminho do objeto no repositório remoto.
     * @type {string}
     */
    location: string;
    /**
     *  Data da ultima atualização.
     * @type {Date}
     */
    lastModified: Date;
    /**
     * Tamanho do objeto em bytes.
     * @type {number}
     */
    size: number;
    /**
     * Identificador único atribuído ao objeto pelo repositório remoto.
     * @type {string}
     */
    eTag: string;
    /**
     * Indicador de versão do objeto.
     * @type {string}
     */
    version: string;
    /**
     * Indica o tipo do conteúdo.
     * @type {string}
     */
    contentType: string;
    /**
     * Indica a codificação aplicada ao objeto.
     * @type {string}
     */
    contentEncoding: string;
    /**
     * Especifica como o objeto deve ser manipulado por um navegador.
     *
     * Este parâmetro é relevante apenas nos casos em que os objetos forem acessíveis diretamente pelos
     * navegadores.
     * @type {string}
     */
    contentDisposition: string;
    /**
     * Define a política de controle de cache do objeto.
     *
     * Este parâmetro é relevante apenas nos casos em que os objetos forem acessíveis diretamente pelos
     * navegadores.
     * @type {string}
     */
    cacheControl: string;
    /**
     * Conjunto de pares chave/valor que foram atribuídos ao objeto.
     * @type {Record<string,string>}
     */
    metadata: Record<string, string>;
    /**
     * Retorna o conteúdo do objeto baixado do repositório remoto no formato de bytes.
     *
     * Por questão de performance e consumo de memória, a chamada desse método deve ser feita uma única
     * vez. Após ler os bytes da resposta, novas execuções deste método retornam um erro informando que
     * o conteúdo já foi consumido.
     *
     * O uso deste método é limitado a objetos de tamanho máximo de 16MiB. Para objetos maiores deve ser
     * utilizado o método toFile.
     * @param {Object} [options] Opções de leitura do conteúdo do objeto.
     * @param {string} [options.resultType] O tipo do resultado gerado por esta função. Os valores
     * possíveis são "uint8array", "arraybuffer" ou "binarystring". Caso não seja informado, será
     * retornado no formato Uint8Array.
     * @return {Uint8Array|ArrayBuffer} Bytes do objeto. Se não for encontrado um objeto no caminho
     * informado será gerado erro.
     */
    toBytes(options?: { resultType?: string }): Uint8Array | ArrayBuffer;
    /**
     * Retorna o conteúdo do objeto baixado do repositório remoto no formato de texto.
     *
     * O uso deste método é limitado a objetos de tamanho máximo de 16MiB. Para objetos maiores deve ser
     * utilizado o método toFile.
     * @return {string} Conteúdo do objeto no formato de texto.
     */
    toText(): string;
    /**
     * Grava o conteúdo do objeto no arquivo informado. Se uma ou mais pastas no caminho do arquivo não
     * existirem elas serão criadas. Se a gravação for bem sucedida esse método não retorna nada.
     * Caso não consiga realizar a gravação um erro será gerado.
     * @param {string} destination Caminho do arquivo onde os bytes do objeto devem ser escritos.
     */
    toFile(destination: string): void;
}
/**
 * Retorna uma instancia de ObjectStorage referente ao servidor cadastrado.
 * @param {number} key Chave do cadastro do serviço de armazenamento.
 * @param {Object} [options] Opções de conexão ao serviço.
 * @param {boolean} [options.ignoreOwnership] Conecta ao serviço no modo somente leitura,
 * independente da configuração do serviço no processo de cadastro.
 * @param {boolean} [options.takeOwnership] Força a associação do bucket à base de dados corrente.
 * Essa opção deve ser utilizada com cuidado, pois somente um bucket pode estar vinculado a uma base
 * de dados com acesso de escrita. Antes de vincular a esta base de dados, verifique se há uma outra
 * base de dados que esteja utilizando este bucket e que perderá o acesso de escrita após o novo
 * vínculo, evitando a interrupção de processos importantes que utilizem o bucket.
 * @return {ObjectStorage} Instancia de ObjectStorage.
 */
declare function fromConfig(
    key: number,
    options?: {
        ignoreOwnership?: boolean;
        takeOwnership?: boolean;
    }
): ObjectStorage;
interface GoogleOptions {
    /**
     * Nome do espaço de armazenamento alocado no Google Cloud.
     */
    bucketName: string;
    /**
     * Conteúdo de um arquivo de chave de uma conta de serviço
     * do Google no formato JSON.
     */
    serviceAccountKey?: string;
    /**
     * Caminho do arquivo de credenciais gerado pelo
     * aplicativo de linha de comando do Google Cloud. Para mais informações consulte a
     * [documentação do Google](https://cloud.google.com/docs/authentication/provide-credentials-adc)
     */
    applicationCredentials?: string;
}
interface AmazonOptions {
    /**
     * Nome do espaço de armazenamento alocado no serviço do Amazon S3.
     */
    bucketName: string;
    /**
     * Chave de acesso da conta de usuário criado no serviço da Amazon.
     */
    accessKeyId: string;
    /**
     * Segredo da chave de acesso.
     */
    secretAccessKey: string;
    /**
     * Região do globo onde o espaço de armazenamento está alocado.
     */
    region: string;
    /**
     * Indica o endpoint que deve ser utilizado na comunicação. Esse
     * parâmetro é util ao se utilizar uma ferramenta de armazenamento que emule a API do S3.
     */
    endpoint?: string;
    /**
     * Indica se deve ser utilizado o tráfego inseguro usando HTTP. Por
     * padrão toda a comunicação é feita de forma segura utilizando HTTPS. Esse parâmetro é util apenas
     * quando se está utilizando uma ferramenta de armazenamento de terceiro que emule a API do S3 e que
     * esteja publicada sem utilizar HTTPS.
     */
    allowHttp?: boolean;
}
interface AzureOptions {
    /**
     * Nome do espaço de armazenamento alocado no serviço do Azure Blob
     * Storage.
     */
    containerName: string;
    /**
     * Nome da conta de armazenamento com acesso ao serviço.
     */
    accountName: string;
    /**
     * Chave de acesso da conta de armazenamento.
     */
    accessKey: string;
    /**
     * Identificador do cliente para autorizar acesso ao serviço de
     * armazenamento.
     */
    clientId: string;
    /**
     * Segredo do cliente para autorizar acesso ao serviço de
     * armazenamento.
     */
    clientSecret: string;
}
/**
 * Opções de parametrização do upload do objeto.
 */
interface UploadOptions {
    /**
     * Especifica o tipo MIME do objeto. Se não for informado um tipo
     * ele será inferido a partir da extensão de arquivo extraída do parâmetro "location" do upload.
     * Se o "location" informado não possuir uma extensão será considerado o tipo
     * "application/octet-stream". Se o upload estiver sendo feito pelo método `uploadText`, o conteúdo
     * textual será codificado em UTF-8 e será adicionada a informação do `charset` ao tipo
     * ("application/octet-stream; charset=utf-8" p.e.).
     */
    contentType?: string;
    /**
     * Especifica a codificação aplicada ao objeto.
     */
    contentEncoding?: string;
    /**
     * Especifica como o objeto deve ser manipulado por um
     * navegador. Este parâmetro é relevante apenas nos casos em que os objetos forem acessíveis
     * diretamente pelos navegadores.
     */
    contentDisposition?: string;
    /**
     * Define a política de controle de cache do objeto. Este parâmetro
     * é relevante apenas nos casos em que os objetos forem acessíveis diretamente pelos navegadores.
     */
    cacheControl?: string;
    /**
     * Especifica um conjunto de pares chave/valor que serão
     * atribuídos ao objeto.
     */
    metadata?: Record<string, string>;
}
interface ObjectInfo {
    /**
     * Caminho do objeto no repositório remoto.
     */
    location: string;
    /**
     * Data da ultima atualização.
     */
    lastModified: Date;
    /**
     * Tamanho do objeto em bytes.
     */
    size: number;
    /**
     * Identificador único atribuído ao objeto pelo repositório remoto.
     */
    eTag?: string;
    /**
     * Indicador de versão do objeto.
     */
    version?: string;
    /**
     * Indica o tipo MIME do objeto ("text/plain" p.e.).
     */
    contentType?: string;
    /**
     * Indica a codificação aplicada ao objeto.
     */
    contentEncoding?: string;
    /**
     * Indica como o objeto deve ser manipulado por um navegador.
     */
    contentDisposition?: string;
    /**
     * Indica a política de controle de cache do objeto.
     */
    cacheControl?: string;
    /**
     * Lista o conjunto de pares chave/valor que foram
     * atribuídos ao objeto.
     */
    metadata?: Record<string, string>;
}
