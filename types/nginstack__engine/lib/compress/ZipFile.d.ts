export = ZipFile;
/**
 * @typedef {Object} ZipFileOptions
 * @property {'deflate' | 'bzip2' | 'zstd'} [method] Método de compressão.
 * Pode ser "deflate", "bzip2" ou "zstd". O valor padrão é "deflate".
 * @property {number} [level] Nível de compressão, representado por um número. Quanto mais alto o
 * nível, maior a compressão. O intervalo de valores possíveis varia de acordo com o método de
 * compressão utilizado:
 *
 * - `deflate`: 1 a 9. Valor padrão é 6.
 * - `bzip2`: 1 a 9. Valor padrão é 6.
 * - `zstd`: -7 a 22. Valor padrão é 3. O zero é mapeado para o valor padrão.
 */
/**
 * ZipFile representa um arquivo, no formato zip, localizado no sistema de
 * arquivos do sistema operacional. Todas as funções aceitam apenas caminhos absolutos de
 * arquivos e pastas. Caso haja algum erro na execução de alguma função, será levantada uma exceção.
 * @constructor
 */
declare function ZipFile(): void;
declare class ZipFile {
    /**
     * Abre um arquivo zip já existente, ou cria um novo arquivo zip.
     * @example
     * var ZipFile = require('@nginstack/engine/lib/compress/ZipFile');
     * var zip = new ZipFile();
     * // Criando um arquivo Zip e compactando file1.
     * var zip = new ZipFile();
     * zip.open('C:\\arquivos\\meuZip.zip', 'create');
     * zip.write('C:\\file1');
     * zip.close();
     *
     * // Abrindo um arquivo Zip existente e adicionando file2,
     * // utilizando ZStandard (zstd) no nível 9 de compressão.
     * zip.open('C:\\arquivos\\meuZip.zip', 'zip', { method: 'zstd', level: 9 });
     * zip.write('C:\\file2');
     * zip.close();
     * @param {string} path Caminho do sistema de arquivos do arquivo a ser aberto ou criado.
     * @param {'create' | 'zip' | 'unzip'} mode Modo em que o arquivo será aberto.
     * Os valores aceitos são:
     * - `create`: Um novo arquivo zip, no caminho especificado, é criado e o arquivo é aberto
     * para compactação de arquivos. Nesse modo, se o arquivo já existe, ele é sobrescrito.
     * - `zip`: O arquivo é aberto para compactação de arquivos.
     * - `unzip`: O arquivo é aberto para a extração de arquivos ou leitura de informações.
     * @param {ZipFileOptions} [options] Opções de compressão. Aqui podem ser definidas as configurações
     * para compressão. As opções que podem ser configuradas são:
     * - `method`: Método de compressão. Pode ser "deflate", "bzip2" ou "zstd".
     * O valor padrão é "deflate".
     * - `level`: Nível de compressão, representado por um número. Quanto mais alto o nível, maior a
     * compressão. O intervalo de valores possíveis varia de acordo com o método utilizado.
     *
     * Essas opções são utilizadas na compressão, e portanto apenas nos modos "create" e "zip",
     * sendo ignoradas no modo "unzip".
     */
    open(path: string, mode: 'create' | 'zip' | 'unzip', options?: ZipFileOptions): void;
    /**
     * Fecha o arquivo zip.
     */
    close(): void;
    /**
     * Compacta arquivos e/ou pastas em um arquivo zip.
     * @example
     * var ZipFile = require('@nginstack/engine/lib/compress/ZipFile');
     * // No exemplo abaixo, compactamos o arquivo file1 e a pasta folder
     * // ambos localizados na raiz C:\ do sistema operacional:
     * var zip = new ZipFile();
     * zip.open('C:\\arquivos\\meuZip.zip', 'create');
     * zip.write(['C:\\file1', 'C:\\folder\\']);
     * zip.close();
     * @param {string| string[]} paths Caminhos dos arquivos ou pastas a serem compactados.
     */
    write(paths: string | string[]): void;
    /**
     * Compacta um arquivo, em um arquivo zip, cujo conteúdo é a string especificada.
     * @param {string} string String a ser incluída no arquivo que será compactado.
     * @param {string} fileName Nome do arquivo que será compactado.
     */
    writeString(string: string, fileName: string): void;
    /**
     * Extrai um arquivo do arquivo zip.
     * Se deseja-se extrair um arquivo de nome "file" que se encontra dentro da pasta de nome "folder"
     * para a pasta "C:\minhasImagens", deve-se fazer:
     * @example
     * var ZipFile = require('@nginstack/engine/lib/compress/ZipFile');
     * var zip = new ZipFile();
     * zip.open('C:\\arquivos\\meuZip.zip', 'unzip');
     * zip.extract('folder/file', 'C:\\minhasImagens');
     * zip.close();
     * @param {string} path Caminho do arquivo a ser descompactado. O caminho passado deve ser
     * o caminho relativo de dentro do arquivo zip.
     * @param {string} pathToExtract Caminho da pasta de onde se deseja extrair o arquivo especificado.
     */
    extract(path: string, pathToExtract: string): void;
    /**
     * Extrai todo o conteúdo de um arquivo zip.
     * @param {string} path Caminho da pasta de onde se deseja extrair o conteúdo do arquivo zip.
     */
    extractAll(path: string): void;
    /**
     * Obtém os nomes de todos os arquivos dentro de um arquivo zip.
     * O conteúdo da variável "nomes", após a execução do código abaixo,
     * poderia ser, por exemplo, ["folder/file2", "file1"].
     * @example
     * var ZipFile = require('@nginstack/engine/lib/compress/ZipFile');
     * var zip = new ZipFile();
     * zip.open('C:\\arquivos\\meuZip.zip', 'unzip');
     * var nomes = zip.getFileNames();
     * zip.close();
     * @return {string[]} Array com os nomes de todos os arquivos dentro do arquivo zip.
     */
    getFileNames(): string[];
}
declare namespace ZipFile {
    export { ZipFileOptions };
}
interface ZipFileOptions {
    /**
     * Método de compressão.
     * Pode ser "deflate", "bzip2" ou "zstd". O valor padrão é "deflate".
     */
    method?: 'deflate' | 'bzip2' | 'zstd';
    /**
     * Nível de compressão, representado por um número. Quanto mais alto o
     * nível, maior a compressão. O intervalo de valores possíveis varia de acordo com o método de
     * compressão utilizado:
     *
     * - `deflate`: 1 a 9. Valor padrão é 6.
     * - `bzip2`: 1 a 9. Valor padrão é 6.
     * - `zstd`: -7 a 22. Valor padrão é 3. O zero é mapeado para o valor padrão.
     */
    level?: number;
}
