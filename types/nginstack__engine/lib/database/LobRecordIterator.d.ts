export = LobRecordIterator;
/**
 * @typedef {import('../dataset/DataSet')} DataSet
 * @private
 */
/**
 * Classe que permite iterar pelos registros da tabela iLob, permitindo a leitura do conteúdo
 * dos arquivos e seus metadados.
 *
 * Esta classe deve ser utilizada quando é necessária a leitura de uma grande quantidade de
 * objetos da LobStorage ou quando a seleção dos conteúdos a serem lidos é complexa e depende
 * de critérios que envolvem outras tabelas do sistema.
 * @param {DataSet} ds DataSet contendo os registros da tabela iLob a serem iterados. O DataSet
 * informado deve conter todos os campos da tabela iLob.
 * @example
 * const LobRecordIterator = require('@nginstack/engine/lib/database/LobRecordIterator.js');
 * const File = require('@nginstack/engine/lib/io/File.js');
 *
 * // Query jpeg user profiler images with size greater than 10KB
 * const ds = database.query(
 *   'SELECT * FROM iLob l ' +
 *   'WHERE l.iMimeType = -1898187688 ' + // image/jpg
 *   '  AND l.iSize > 10240 ' +
 *   '  AND l.iKey IN (SELECT iLob FROM iDataRel WHERE iClass = -1898141861)' // Imagens de perfil de usuário
 *  );
 *
 * const outputDir = 'lob-iterator-test';
 * const lobIterator = new LobRecordIterator(ds);
 * let next = lobIterator.next();
 * while (!next.done){
 *   const lob = next.value;
 *   File.fileFromString(File.pathAppend(outputDir, lob.name), lob.content);
 *   next = lobIterator.next();
 * }
 * @constructor
 */
declare function LobRecordIterator(ds: DataSet): void;
declare class LobRecordIterator {
    /**
     * @typedef {import('../dataset/DataSet')} DataSet
     * @private
     */
    /**
     * Classe que permite iterar pelos registros da tabela iLob, permitindo a leitura do conteúdo
     * dos arquivos e seus metadados.
     *
     * Esta classe deve ser utilizada quando é necessária a leitura de uma grande quantidade de
     * objetos da LobStorage ou quando a seleção dos conteúdos a serem lidos é complexa e depende
     * de critérios que envolvem outras tabelas do sistema.
     * @param {DataSet} ds DataSet contendo os registros da tabela iLob a serem iterados. O DataSet
     * informado deve conter todos os campos da tabela iLob.
     * @example
     * const LobRecordIterator = require('@nginstack/engine/lib/database/LobRecordIterator.js');
     * const File = require('@nginstack/engine/lib/io/File.js');
     *
     * // Query jpeg user profiler images with size greater than 10KB
     * const ds = database.query(
     *   'SELECT * FROM iLob l ' +
     *   'WHERE l.iMimeType = -1898187688 ' + // image/jpg
     *   '  AND l.iSize > 10240 ' +
     *   '  AND l.iKey IN (SELECT iLob FROM iDataRel WHERE iClass = -1898141861)' // Imagens de perfil de usuário
     *  );
     *
     * const outputDir = 'lob-iterator-test';
     * const lobIterator = new LobRecordIterator(ds);
     * let next = lobIterator.next();
     * while (!next.done){
     *   const lob = next.value;
     *   File.fileFromString(File.pathAppend(outputDir, lob.name), lob.content);
     *   next = lobIterator.next();
     * }
     * @constructor
     */
    constructor(ds: DataSet);
    /** @private */
    private ds_;
    /**
     * Método responsável por percorrer os registros. Quando chamado pela primeira vez esse
     * método posiciona o cursor no primeiro registro.
     *
     * O objeto retornado possui as seguintes propriedades:
     *
     * * "done": indica se ainda existem registros a serem percorridos.
     * * "value": instância de `LargeObject` associada ao registro corrente. Por meio dela é possível
     * ler o conteúdo do arquivo, bem como seus metadados. Será undefined caso não haja mais registros
     * a serem lidos.
     * @return {{done: boolean, value: LargeObject}} Objeto que indica se a iteração terminou e o
     * `LargeObject` associado ao registro corrente.
     */
    next(): {
        done: boolean;
        value: LargeObject;
    };
}
declare namespace LobRecordIterator {
    export { DataSet };
}
import LargeObject = require('./LargeObject.js');
type DataSet = import('../dataset/DataSet');
