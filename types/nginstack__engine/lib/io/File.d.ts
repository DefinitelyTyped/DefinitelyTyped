export = File;
/**
 * Classe que permite a manipulação de arquivos.
 * @param {string} fileName Nome do arquivo.
 * @param {string} [mode] Modo como o arquivo deve ser aberto. Pode ser informado um modo da
 * relação abaixo ou um conjunto de modos separado por vírgula. Caso não seja informado, será
 * assumido o modo `'openAlwaysReadWrite'`. Modos possíveis:
 *
 * * `'create`': **DEPRECATED.** Alias para o modo createAlways.
 * * `'createAlways'`: abre um arquivo para leitura e escrita, criando se necessário.
 * Se o arquivo já existir, ele será truncado.
 * * `'createNew'`: cria o arquivo caso não exista. Se o arquivo já existir uma
 * exceção será lançada.
 * * `'openRead'`: abre o arquivo apenas para leitura. Caso o arquivo não exista, será aberto
 * o arquivo especial NULL e a leitura não retornará nada.
 * * `'openReadOnly'`: abre o arquivo apenas para leitura, lançando uma exceção caso o arquivo
 * não exista.
 * * `'openWrite'`: **DEPRECATED.** Alias para openAlwaysReadWrite.
 * * `'openReadWrite'`: **DEPRECATED.** Alias para openAlwaysReadWrite.
 * * `'openAlwaysReadWrite'`: abre um arquivo para leitura e escrita, criando-o se necessário. Se
 * o arquivo já existir, ele não será truncado.
 * * `'openExistingReadWrite'`: abre um arquivo para leitura e escrita, lançando uma exceção caso o
 * arquivo não exista.
 * * `'unbuffered'`: indica que o acesso ao arquivo não deve ser otimizado por um buffer.
 * Observe que desligar a bufferização prejudica a performance, sendo indicado apenas em situações
 * onde se deseja realizar acesso concorrente ao arquivo.
 * @param {string} [encoding] Tipo de codificação dos dados do arquivo. Esse parâmetro é case
 * insensitive e aceita os valores "utf-8", "windows-1252", "iso-8859-1" ou "binary". Caso não
 * seja informado será considerado o valor "binary", indicando que os dados do arquivo não
 * serão interpretados como sendo de nenhum tipo de codificação.
 * @constructor
 */
declare function File(fileName: string, mode?: string, encoding?: string): void;
declare class File {
    /**
     * Classe que permite a manipulação de arquivos.
     * @param {string} fileName Nome do arquivo.
     * @param {string} [mode] Modo como o arquivo deve ser aberto. Pode ser informado um modo da
     * relação abaixo ou um conjunto de modos separado por vírgula. Caso não seja informado, será
     * assumido o modo `'openAlwaysReadWrite'`. Modos possíveis:
     *
     * * `'create`': **DEPRECATED.** Alias para o modo createAlways.
     * * `'createAlways'`: abre um arquivo para leitura e escrita, criando se necessário.
     * Se o arquivo já existir, ele será truncado.
     * * `'createNew'`: cria o arquivo caso não exista. Se o arquivo já existir uma
     * exceção será lançada.
     * * `'openRead'`: abre o arquivo apenas para leitura. Caso o arquivo não exista, será aberto
     * o arquivo especial NULL e a leitura não retornará nada.
     * * `'openReadOnly'`: abre o arquivo apenas para leitura, lançando uma exceção caso o arquivo
     * não exista.
     * * `'openWrite'`: **DEPRECATED.** Alias para openAlwaysReadWrite.
     * * `'openReadWrite'`: **DEPRECATED.** Alias para openAlwaysReadWrite.
     * * `'openAlwaysReadWrite'`: abre um arquivo para leitura e escrita, criando-o se necessário. Se
     * o arquivo já existir, ele não será truncado.
     * * `'openExistingReadWrite'`: abre um arquivo para leitura e escrita, lançando uma exceção caso o
     * arquivo não exista.
     * * `'unbuffered'`: indica que o acesso ao arquivo não deve ser otimizado por um buffer.
     * Observe que desligar a bufferização prejudica a performance, sendo indicado apenas em situações
     * onde se deseja realizar acesso concorrente ao arquivo.
     * @param {string} [encoding] Tipo de codificação dos dados do arquivo. Esse parâmetro é case
     * insensitive e aceita os valores "utf-8", "windows-1252", "iso-8859-1" ou "binary". Caso não
     * seja informado será considerado o valor "binary", indicando que os dados do arquivo não
     * serão interpretados como sendo de nenhum tipo de codificação.
     * @constructor
     */
    constructor(fileName: string, mode?: string, encoding?: string);
    /**
     * Escreve o conteúdo informado no arquivo.
     * @param {string|Uint8Array|ArrayBuffer} data Dado que será escrito.
     */
    write(data: string | Uint8Array | ArrayBuffer): void;
    /**
     * Escreve uma string acrescida de um salto de linha ("\r\n" no Windows, "\n" no Linux) no arquivo.
     * @param {string} data Dado a ser escrito.
     */
    writeln(data: string): void;
    /**
     * Lê uma string do arquivo a partir da posição atual.
     * @param {number} [opt_count] Quantidade de bytes que a serem lidos. Caso não
     * seja informado, será retornado o conteúdo do arquivo a partir da posição
     * atual.
     * @return {string} Dados lidos do arquivo
     */
    read(opt_count?: number): string;
    /**
     * Lê uma linha do arquivo a partir da posição atual.
     * @return {string} Linha lida do arquivo.
     */
    readln(): string;
    /**
     * Esvazia o arquivo, deixando-o com zero bytes.
     */
    clear(): void;
    /**
     * Força a atualização física do arquivo, garantindo que os dados não estão
     * carregados no buffer da memória. Este método deve ser evitado, pois gera
     * perda de performance.
     */
    flush(): void;
    /**
     * Fecha o arquivo imediatamente, permitindo que um outro processo possa ler o
     * arquivo sem depender da execução do Garbage Collector do JavaScript.
     */
    close(): void;
    /**
     * Posição atual no arquivo.
     *
     * Quando o tipo de codificação é passado no construtor, o arquivo é lido como texto e a leitura é
     * otimizada por um *buffer*. Isso faz com que consultar a posição possa requerer uma busca para
     * reconstruir uma posição válida, tornando-a uma operação cara. Nestes casos, seu uso deve ser
     * evitado em laços.
     *
     * Para saber se o final do arquivo foi atingido, recomenda-se a utilização da propriedade `eof`.
     * @see #eof
     * @type {number}
     */
    position: number;
    /**
     * Indica se o final do arquivo foi atingido.
     * @example
     * const file = new File(path, 'openRead');
     * while (!file.eof) {
     *   const line = file.readln();
     *   processLine(line);
     * }
     * @type {boolean}
     */
    eof: boolean;
    /**
     * Tamanho do arquivo em bytes. Se for um arquivo de texto em UTF-8, a quantidade de bytes
     * informada pode não ser igual à quantidade de caracteres lidos do arquivo, pois alguns
     * caracteres utilizam mais de um byte em sua representação.
     * @type {number}
     */
    size: number;
    /**
     * Data de modificação do arquivo.
     * @type {Date}
     */
    modified: Date;
}
declare namespace File {
    export {
        fileExists,
        directoryExists,
        deleteFile,
        deleteDirectory,
        findFirst,
        findNext,
        findClose,
        createDirectory,
        moveFile,
        copyFile,
        getTempFileName,
        createTempFile,
        createTempDirName,
        fileFromString,
        fileFromStream,
        stringFromFile,
        pathAppend,
        pathSeparator,
        changeFileExtension,
        extractFileName,
        extractFilePath,
        getSize,
        listEntries,
        copyDirectory,
        openForRead,
        SearchRecord,
        MemoryStream,
        FileListEntry,
    };
}
/**
 * Verifica se o arquivo informado existe.
 * @param {string} fileName Nome do arquivo.
 * @return {boolean} Retorna true se o arquivo existir.
 */
declare function fileExists(fileName: string): boolean;
/**
 * Verifica se o diretório informado existe.
 * @param {string} dirName Nome do diretório
 * @return {boolean} Retorna true se o diretório existir.
 */
declare function directoryExists(dirName: string): boolean;
/**
 * Exclui o arquivo informado.
 *
 * Windows: os arquivos serão excluídos definitivamente, não podendo ser recuperados da lixeira.
 * @example
 * var File = require('@nginstack/engine/lib/io/File');
 * var deleted = File.deleteFile('MyFile.txt')
 * if (!deleted) {
 *   throw new Error( 'It''s not possible delete the file. It's probably in use.')
 * }
 * @param {string} fileName Nome do arquivo que deve ser excluído.
 * @return {boolean} True, se foi possível excluir o arquivo.
 * @see module:@nginstack/engine/lib/io/File~File.deleteDirectory
 */
declare function deleteFile(fileName: string): boolean;
/**
 * Exclui o diretório informado.
 *
 * Windows: os arquivos e diretórios serão excluídos definitivamente, não podendo
 * ser recuperados da lixeira.
 * @example
 * var File = require('@nginstack/engine/lib/io/File');
 * if (!File.deleteDirectory('c:\\my-temp-dir')) {
 *   throw new Error("Não foi possível remover o diretório.");
 * }
 * @param {string} dirName Nome do diretório que deve ser excluído.
 * @param {boolean} [recursive] Indica se os diretórios e arquivos contidos em "dirName"
 * serão excluídos. Caso o seu valor seja falso ou não seja informado, o diretório somente
 * será excluído se estiver vazio.
 * @return {boolean} Indica se a exclusão do diretório foi bem sucedida. Caso
 * "recursive" seja true, este método poderá retornar false mesmo tendo excluído
 * arquivos e subdiretórios. Este caso ocorrerá se algum arquivo dentro do diretório
 * estiver em uso ou se o usuário não tiver permissão de apagar o arquivo ou diretório.
 * @see module:@nginstack/engine/lib/io/File~File.deleteFile
 */
declare function deleteDirectory(dirName: string, recursive?: boolean): boolean;
/**
 * FindFirst pesquisa no diretório especificado pelo parâmetro "path" o primeiro
 * arquivo que satisfaça o nome do arquivo de "path", cujos atributos estejam na
 * lista informada pelo parâmetro "attributes". <br><br>
 * Caso exista um arquivo que satisfaça a pesquisa, será retornado um objeto da
 * classe SearchRecord, com as informações do arquivo. Caso contrário, será retornado
 * null.
 * @example
 * var File = require('@nginstack/engine/lib/io/File');
 * var fileNames = [];
 * var path = File.pathAppend(engine.dataDir, "*.*");
 * var sr = File.findFirst(path, "archive");
 * try {
 *   var found = sr != null;
 *   while (found){
 *     fileNames.push(sr.name);
 *     found = File.findNext(sr);
 *   }
 * } finally {
 *   File.findClose(sr);
 * }
 * @param {string} fileName Diretório e máscara do arquivo buscado.
 * É permitido o uso de coringas. Exemplo: ".\\test\\*.*" localiza todos os arquivos
 * no diretório teste.
 * @param {string} [opt_attributes] Atributos dos arquivos que devem ser localizados. Deve
 * ser informada uma lista separada por "," dos valores abaixo:
 *  "readOnly","hidden", "sysFile", "volumeID", "directory", "archive" ou "anyFile".
 * Se não for informado, será considerado "anyFile".
 * @return {SearchRecord} Uma instância de SearchRecord caso localize um arquivo ou
 * null se não encontrar ocorrência.
 * @see module:@nginstack/engine/lib/io/File~File.findNext
 * @see module:@nginstack/engine/lib/io/File~File.findClose
 * @see module:@nginstack/engine/lib/io/SearchRecord~SearchRecord
 */
declare function findFirst(fileName: string, opt_attributes?: string): SearchRecord;
/**
 * FindNext localiza a próxima ocorrência de uma pesquisa iniciada pelo método
 * File.findFirst.
 * O parâmetro "searchRecord" será atualizado com as informações do próximo
 * arquivo localizado.
 * @param {SearchRecord} searchRecord Informações do último arquivo localizado.
 * @return {boolean} true se existir mais uma ocorrência.
 * @see module:@nginstack/engine/lib/io/File~File.findFirst
 * @see module:@nginstack/engine/lib/io/File~File.findClose
 * @see module:@nginstack/engine/lib/io/SearchRecord~SearchRecord
 */
declare function findNext(searchRecord: SearchRecord): boolean;
/**
 * Esta função libera imediatamente os recursos alocados pela função
 * {@link #findFirst}. Caso não seja executado, os recursos serão desalocados
 * de forma não determinística pelo Garbage Collector do ambiente JavaScript.
 * @param {SearchRecord} searchRecord Informações do último arquivo localizado.
 * @see module:@nginstack/engine/lib/io/File~File.findFirst
 * @see module:@nginstack/engine/lib/io/File~File.findNext
 * @see module:@nginstack/engine/lib/io/SearchRecord~SearchRecord
 */
declare function findClose(searchRecord: SearchRecord): void;
/**
 * Método de classe que permite criar um diretório vazio. Este método criará os subdiretórios do
 * caminho informado recursivamente caso eles não existam.
 *
 * O uso deste método em geral é desnecessário, pois o construtor `new File()` e os métodos
 * `File.copyFile()` e `File.moveFile()` já garantem a existência do diretório dos arquivos
 * criados.
 * @param {string} path Caminho do diretório a ser criado.
 * @return {boolean} True se conseguiu criar o diretório.
 * @see module:@nginstack/engine/lib/io/File~File.createFile
 */
declare function createDirectory(path: string): boolean;
/**
 * Método de classe que permite mover um arquivo. O diretório do arquivo de destino
 * será criado caso não exista.
 * @example
 * const File = require('@nginstack/engine/lib/io/File.js');
 * const renamed = File.moveFile( 'c:\\MyFile.txt', 'c:\\MyFile2.txt' )
 * if (!renamed){
 *   throw new Error(
 *     'Usuário não possui permissão para mover o arquivo ou o arquivo de destino já existe.'
 *   );
 * }
 * @param {string} existingFileName Nome do arquivo de origem.
 * @param {string} newFileName Nome do arquivo de destino.
 * @return {boolean} True se conseguiu mover o arquivo
 * @see module:@nginstack/engine/lib/io/File~File.copyFile
 * @see module:@nginstack/engine/lib/io/File~File.copyDirectory
 */
declare function moveFile(existingFileName: string, newFileName: string): boolean;
/**
 * Método de classe que permite copiar um arquivo. O diretório do arquivo de destino
 * será criado caso não exista.
 * @example
 * const File = require('@nginstack/engine/lib/io/File');
 * const duplicated = File.copyFile('c:\\MyFile.txt', 'c:\\MyFile2.txt');
 * if (!duplicated){
 *   throw new Error('Very strange error. Possible out of space disk.');
 * }
 * @param {string} existingFileName Nome do arquivo de origem.
 * @param {string} newFileName Nome do arquivo de destino.
 * @return {boolean} True se conseguiu mover o arquivo
 * @see module:@nginstack/engine/lib/io/File~File.moveFile
 * @see module:@nginstack/engine/lib/io/File~File.copyDirectory
 */
declare function copyFile(existingFileName: string, newFileName: string): boolean;
/**
 * Cria um nome único para um arquivo temporário.
 *
 * É responsabilidade do desenvolvedor excluir os arquivos criados com os nomes retornados
 * por esta função. Os arquivos que não forem removidos após o seu uso, serão removidos
 * automaticamente pelo Engine apenas na próxima inicialização do sistema. Em servidores,
 * esse descarte automático pode levar dias, portanto é importante que os arquivos sejam
 * removidos antes, evitando o desperdício de espaço em disco do servidor.
 * @example
 * const File = require('@nginstack/engine/lib/io/File.js');
 * const tmpFileName = File.getTempFileName();
 * const file = new File(tmpFileName);
 * try {
 *   // use temp file ...
 * } finally {
 *   file.close();
 *   File.deleteFile(tmpFileName);
 * }
 * @return {string} Nome de arquivo único
 * @see module:@nginstack/engine/lib/io/File~File.createTempFile
 */
declare function getTempFileName(): string;
/**
 * Cria um objeto associado a um arquivo temporário.
 *
 * O arquivo criado por esta função é removido automaticamente pelo sistema quando ele é fechado
 * via `close` ou quando ele é destruído pelo *Garbage Collector*. Por esse motivo, é preferível
 * o uso desta função em vez de `getTempFileName` sempre que o nome do arquivo temporário for
 * irrelevante para a aplicação.
 * @example
 * const File = require('@nginstack/engine/lib/io/File.js');
 * const file = File.createTempFile();
 * try {
 *   // use temp file ...
 * } finally {
 *   file.close();
 * }
 * @return {File} Instância de um arquivo temporário.
 * @see module:@nginstack/engine/lib/io/File~File.getTempFileName
 */
declare function createTempFile(): File;
/**
 * Obtém um nome de diretório único e temporário.
 *
 * É responsabilidade do desenvolvedor excluir o diretório temporário criado e os arquivos
 * contidos nele, sendo recomendado o uso da função `File.deleteDirectory(tempDirName, true)`
 * logo após o seu uso. Caso isso não seja feito, o diretório será removido automaticamente
 * pelo Engine apenas na próxima inicialização do sistema. Em servidores, esse descarte automático
 * pode levar dias, portanto é importante que os diretórios e arquivos temporários criados sejam
 * removidos antes, evitando o desperdício de espaço em disco do servidor.
 * @return {string} Nome do diretório temporário criado.
 */
declare function createTempDirName(): string;
/**
 * Cria um arquivo com o conteúdo informado.
 * @param {string} fileName Nome do arquivo que deve ser criado.
 * @param {string|Uint8Array|ArrayBuffer} content Conteúdo que deve ser gravado no arquivo. Caso a
 * codificação não seja informada ou seja "binary", será permitido informar o conteúdo em valores
 * do tipo "Uint8Array" ou "ArrayBuffer". Caso seja informado uma outra codificação, o conteúdo
 * deve ser um texto informado por meio de uma string.
 * @param {string} [encoding] Tipo de codificação dos dados do arquivo. Esse parâmetro é
 * *case insensitive* e aceita os valores "utf-8", "windows-1252", "iso-8859-1" ou "binary". Caso
 * não seja informado será considerado o valor "binary", indicando que a string será tratada como
 * "Binary String", não possuindo qualquer tipo de codificação de texto.
 */
declare function fileFromString(
    fileName: string,
    content: string | Uint8Array | ArrayBuffer,
    encoding?: string
): void;
/**
 * Cria um arquivo a partir do conteúdo de um stream.
 * @param {string} fileName Nome do arquivo que deve ser criado.
 * @param {File|MemoryStream} stream Stream que contém o conteúdo do arquivo. Pode ser uma instância
 * de File ou MemoryStream. A cópia do conteúdo será realizada a partir da posição atual do stream
 * até o final. A posição anterior do stream não é restaurada.
 *
 * Para ser lida com stream, a instância de File deve ter sido aberta com a codificação "binary".
 */
declare function fileFromStream(fileName: string, stream: File | MemoryStream): void;
/**
 * Lê o conteúdo do arquivo informado.
 * @param {string} fileName Nome do arquivo a ser lido.
 * @param {string} [opt_encoding] Tipo de codificação dos dados do arquivo. Esse parâmetro é case insensitive
 * e aceita os valores "utf-8", "windows-1252", "iso-8859-1" ou "binary". Caso não seja informado será considerado o
 * valor "binary", indicando que os dados do arquivo não serão interpretados como sendo de nenhum tipo de codificação.
 * @return {string} Conteúdo do arquivo.
 */
declare function stringFromFile(fileName: string, opt_encoding?: string): string;
/**
 * Concatena dois ou mais paths, separando-os por um "File.pathSeparator".
 * O método suporta tanto receber o segundo argumento sendo um array que contém
 * todos os paths a serem concatenados como também uma quantidade qualquer
 * de strings, os paths a serem concatenados ao path base. Se for informado um path
 * contendo separadores incompatíveis com "File.pathSeparator", eles serão ajustados
 * para o separador correto, de acordo com o sistema operacional.
 * @param {string} path A base que receberá o path a ser adicionado. Opcionalmente,
 * pode terminar com a string File.pathSeparator.
 * @param {...(Array<string>|string)} append O path que será adicionado. Este pode ser
 * uma sequência, de uma ou mais strings, ou ainda um array de strings.
 * Opcionalmente, este parâmetro pode iniciar com a string File.pathSeparator.
 * @return {string} A concatenação dos dois paths.
 * @example
 * var File = require('@nginstack/engine/lib/io/File');
 * var paths = ['teste1', '\\teste2', '\\teste3\\', 'teste4'];
 * var finalPath = File.pathAppend('C:\\MyDirectory\\', paths);
 * @example
 * var File = require('@nginstack/engine/lib/io/File');
 * var finalPath = File.pathAppend('C:\\MyDirectory\\', 'teste1\\', '\\teste2', 'teste3');
 */
declare function pathAppend(path: string, append: Array<string[] | string>): string;
declare let pathSeparator: string;
/**
 * Altera a extensão do nome de arquivo informado.
 * @example
 * var File = require('@nginstack/engine/lib/io/File');
 * var fileName = File.changeFileExtension( "teste.txt", ".out")
 * @param {string} fileName Nome do arquivo que deve ter a extensão alterada.
 * @param {string} extension Nova extensão do arquivo. Deve ser informado com
 * o ponto. A extensão será removida caso seja uma string vazia.
 * @return {string} Nome de arquivo com a extensão alterada.
 */
declare function changeFileExtension(fileName: string, extension: string): string;
/**
 * Extrai o nome do arquivo de um nome com "path".
 * @param {string} fileName Path e nome do arquivo.
 * @return {string} O nome do arquivo informado em fileName.
 * @see module:@nginstack/engine/lib/io/File~File.extractFilePath
 */
declare function extractFileName(fileName: string): string;
/**
 * Extrai o path do arquivo de um nome com "path".
 * @param {string} fileName Path e nome do arquivo.
 * @return {string} O path do arquivo informado em fileName.
 * @see module:@nginstack/engine/lib/io/File~File.extractFileName
 */
declare function extractFilePath(fileName: string): string;
/**
 * Obtém o tamanho em bytes do arquivo informado.
 * @param {string} fileName Nome do arquivo do qual se deseja obter o tamanho.
 * @return {number} Tamanho em bytes do arquivo informado. Será retornado 0 caso seja informado
 * um arquivo que não existe.
 */
declare function getSize(fileName: string): number;
/**
 * @typedef {Object} FileListEntry
 * @property {string} name Nome do arquivo.
 * @property {number} size Tamanho do arquivo em bytes.
 * @property {Date} modified Data e hora da última modificação do arquivo.
 * @property {boolean} isDirectory Indica se o arquivo é um diretório.
 * @property {string} path Caminho completo do arquivo.
 * @property {string} relativePath Caminho do arquivo relativo ao diretório informado no
 * parâmetro `path`.
 */
/**
 * Retorna informações dos arquivos e diretórios contidos no diretório informado
 * em path.
 *
 * Esta função não retorna os subdiretórios especiais "." e ".." existentes em
 * cada diretório.
 *
 * @example
 * var File = require('@nginstack/engine/lib/io/File');
 * var dirCount = 0;
 * var fileCount = 0;
 * var files = File.listEntries(".");
 * files.forEach(function (file){
 *   if (file.isDirectory) {
 *     dirCount++;
 *   } else {
 *     fileCount++;
 *   }
 * });
 *
 * var result = 'Engine directory has ' + dirCount + ' directories and ' +
 *   fileCount + ' regular files.';
 * @example
 * var File = require('@nginstack/engine/lib/io/File');
 * var files = File.listEntries("dbCache", {onlyFiles: true});
 * var size = files.reduce(function (r, v){ return r + v.size }, 0);
 * var sizeMB = size / 1024 / 1024;
 * @example
 * const File = require('@nginstack/engine/lib/io/File');
 * const replaceAll = require('@nginstack/engine/lib/string/replaceAll');
 * // Importa o conteúdo do diretório dirName no diretório targetDirKey da VFS
 * const files = File.listEntries(dirName, {onlyFiles: true});
 * files.forEach(function (file){
 *   const content = File.stringFromFile(file.path);
 *   const relativePath = replaceAll(file.relativePath, File.pathSeparator, "/");
 *   const fileKey = virtualFS.fileExists(relativePath, targetDirKey);
 *   if (fileKey){
 *     virtualFS.setFileContent(fileKey, content);
 *   } else {
 *     fileKey = virtualFS.createFile(relativePath, content, targetDirKey);
 *   }
 * });
 *
 * @param {string} path Diretório que terá as informações dos subdiretórios e
 * arquivos retornadas.
 * @param {Object} [options]
 * @param {boolean} [options.recursive] Indica se serão analisados os arquivos dos
 * subdiretórios de path, recursivamente. Por padrão é considerado false.
 * @param {boolean} [options.onlyFiles] Indica que devem ser retornadas apenas as informações
 * dos arquivos normais contidos no diretório informado em path. Não serão retornadas informações
 * de diretórios ou de arquivos especiais do sistema operacional.
 * @param {function(FileListEntry):boolean} [options.filter] Função de filtro que permite
 * indicar se um arquivo ou diretório deve ser adicionado no resultado. Ela deve retornar
 * true para indicar que uma entrada é válida e deve tratar adequadamente entradas do
 * tipo diretório caso o parâmetro recursive seja true. Ao retornar false para um diretório,
 * serão ignorados todos os arquivos e subdiretórios desse diretório.
 * @example
 * const File = require('@nginstack/engine/lib/io/File.js');
 * // Este exemplo incluirá apenas arquivos com a extensão ".js" e ignorará os
 * // arquivos do diretório "node_modules".
 * File.listEntries(dirName, {
 *   recursive: true,
 *   filter: function (info) {
 *     if (info.isDirectory) {
 *       return info.name !== 'node_modules';
 *     } else {
 *       return info.name.endsWith('.js');
 *     }
 *   }
 * });
 * @return {FileListEntry[]} Um array de objetos contendo as propriedades indicadas pelo tipo
 * {@link FileListEntry}.
 */
declare function listEntries(
    path: string,
    options?: {
        recursive?: boolean;
        onlyFiles?: boolean;
        filter?: (arg0: FileListEntry) => boolean;
    }
): FileListEntry[];
/**
 * Copia o conteúdo do diretório informado em sourceDir para o destino
 * targetDir. O diretório targetDir será criado caso não exista.<br>
 * @param {string} sourceDir Diretório que será copiado.
 * @param {string} targetDir Local onde será gravada a cópia do conteúdo de
 * sourceDir.
 * @param {boolean} [opt_replace] Indica se deve substituir os arquivos existentes
 * em `targetDir`. Quando ativo, o conteúdo de `targetDir` será excluído antes
 * da cópia com o objetivo de garantir que não haverá arquivos em `targetDir` que
 * não existam em `sourceDir`. Por padrão será `false`.
 */
declare function copyDirectory(sourceDir: string, targetDir: string, opt_replace?: boolean): void;
/**
 * Abre o arquivo informado para leitura, gerando
 * um erro caso o arquivo não exista.
 * @param {string} path
 * @return {File}
 */
declare function openForRead(path: string): File;
type SearchRecord = import('./SearchRecord');
type MemoryStream = import('./MemoryStream');
interface FileListEntry {
    /**
     * Nome do arquivo.
     */
    name: string;
    /**
     * Tamanho do arquivo em bytes.
     */
    size: number;
    /**
     * Data e hora da última modificação do arquivo.
     */
    modified: Date;
    /**
     * Indica se o arquivo é um diretório.
     */
    isDirectory: boolean;
    /**
     * Caminho completo do arquivo.
     */
    path: string;
    /**
     * Caminho do arquivo relativo ao diretório informado no
     * parâmetro `path`.
     */
    relativePath: string;
}
