export = KeysUtilities;
/**
 * Classe que fornece diversas funções de manipulação de listas de chaves, normalmente utilizada
 * em conjunto com a classe `QueryUtilities`.
 *
 * Essa API é mantida apenas para compatibilidade com códigos antigos. Ela faz uso de práticas não
 * recomendadas como lista de chaves por meio strings, prefixadas com -1 e a identificação de
 * classes pelo nome.
 * @constructor
 */
declare function KeysUtilities(): void;
declare class KeysUtilities {
    /**
     * Pesquisa quais as chaves cujo código esteja incompleto, ou seja com ".." no código.
     * @param {Object} classKey Pode ser uma String ou um Number. Nome ou chave da classe onde será
     * pesquisadas as chaves.
     * @param {string} code Conteúdo do campo CODIGO de uma determinada tabela do banco de dados,
     * tabela esta que contém os dados da classe informada no parâmetro `classKey`. Este código
     * pode ter ".." para pesquisa com código incompleto.
     * @param {string} [classesFilter] Lista com as chaves das classes filhas, que o usuário tem
     * permissão para visualização, da informada no parâmetro "classKey" nas quais deve ser feito
     * a pesquisa do código.
     * @param {DataSet} [ds] DataSet para pesquisa, é passado para otimização, caso já se tenha o
     * dataset da classe.
     * @returns {string} Lista de chaves de acordo com o código informado ( "code" )
     * @example
     * var KeysUtilities = require('@nginstack/engine/lib/database/KeysUtilities');
     * var keysUtilities = new KeysUtilities();
     * var chaves = keysUtilities.getKeysFromIncompleteCode( 'Pessoas', 'José..')
     *
     * //Retorno: Existindo 8 cadastros no banco classificados como Pessoas cujo
     * //código iniciem por 'José', a string retornada será como a exemplificada
     * //abaixo:
     * //  'chaves' é igual a "-1,813,178447,178458,185558,46766,924,622348,1928"
     *
     *
     * @example
     * var KeysUtilities = require('@nginstack/engine/lib/database/KeysUtilities');
     * var keysUtilities = new KeysUtilities();
     *
     * var filtroClientes = connection.getChildren( 'Clientes' )
     * var chaves = keysUtilities.getKeysFromIncompleteCode( 'Pessoas', 'José..',
     *  filtroClientes )
     *
     * //Retorno: Não existindo nenhum cadastro de Pessoas cujo código inicie por
     * //'José' e que esteja classificado como Clientes, a string retornada será
     * //como a exemplificada abaixo:
     * //   'chaves' é igual a "-1"
     *
     * @see KeysUtilities#getKeysFromMultipleCode
     * @see KeysUtilities#getKeysFromCode
     */
    getKeysFromIncompleteCode(
        classKey: any,
        code: string,
        classesFilter?: string,
        ds?: DataSet
    ): string;
    /**
     * Pega chaves de vários códigos separados por ";" ( ponto-e-virgula ). Estes códigos também podem
     * ser incompletos, ou seja, com ".." no código.
     * @param {Object} classKey Pode ser uma String ou um Number. Nome ou chave da classe onde será
     * pesquisadas as chaves.
     * @param {string} code Conteúdo do campo CODIGO de uma determinada tabela do banco de dados,
     * tabela esta que contém os dados da classe informada no parâmetro `classKey`. Lista de
     * códigos separados por ";" ( ponto-e-virgula ), Estes códigos também podem ter ".." para
     * pesquisa com código incompleto.
     * @param {string} [filter] Lista com as chaves das classes filhas, que o usuário tem permissão
     * para visualização, da informada no parâmetro "classKey" nas quais deve ser feito a
     * pesquisa do código.
     * @param {DataSet} [ds] DataSet para pesquisa, é passado para otimização, caso já se tenha o
     * dataset da classe.
     * @returns {string} Lista de chaves de acordo com o código informado ( "code" )
     * @example
     * var KeysUtilities = require('@nginstack/engine/lib/database/KeysUtilities');
     * var keysUtilities = new KeysUtilities();
     *
     * var filtroClientes = connection.getChildren( 'Pessoas' )
     * var chaves = keysUtilities.getKeysFromMultipleCode( 'Entidades',
     *  'Maria Eduarda;José..', filtroPessoas )
     *
     * //Retorno: Existindo cadastro cujo código inicie por 'José' e cadastro
     * //cujo código seja 'Maria Eduarda' classificado como Pessoas, a string
     * //retornada será como a exemplificada abaixo:
     * //   'chaves' é igual a "-1,284757,-1,813,178447,178458,185558,46766,
     * //       924,622348,1928"
     *
     * @see KeysUtilities#getKeysFromIncompleteCode
     * @see KeysUtilities#getKeysFromCode
     */
    getKeysFromMultipleCode(classKey: any, code: string, filter?: string, ds?: DataSet): string;
    /**
     * Pega filhas de classes em uma lista.
     * @param {string} keys Lista de chaves de classes separadas por "," ( virgula ).
     * @param {number} [userKey] Chave do usuário para que seja feito o filtro de visão.
     * @returns {string} Lista de chaves separadas por ','.
     * @example
     * var KeysUtilities = require('@nginstack/engine/lib/database/KeysUtilities');
     * var keysUtilities = new KeysUtilities();
     *
     * var classes = keysUtilities.getChildrenFromClassesKeys(123456, session.userKey)
     */
    getChildrenFromClassesKeys(keys: string, userKey?: number): string;
    /**
     * Pega chaves de um único código ou incompleto ou múltiplo. Se não for passado código trará
     * todos os registros da classe, exceto quando o classKey for a classe Classes.
     * @param {Object} classKey Pode ser uma String ou um Number. Nome ou chave da classe onde
     * será pesquisadas as chaves.
     * @param {string} code Conteúdo do campo CODIGO de uma determinada tabela do banco de dados,
     * tabela esta que contém os dados da classe informada no parâmetro `classKey`.
     * @param {string} [classesFilter] Lista de chaves de classes filhas de "classKey" nas quais
     * deve ser feito a pesquisa do código.
     * @param {DataSet} [ds] DataSet para pesquisa, é passado para otimização, caso já se tenha o
     * dataset da classe.
     * @returns {string} Lista de chaves de acordo com o código informado ( "code" )
     * @example
     * var KeysUtilities = require('@nginstack/engine/lib/database/KeysUtilities');
     * var keysUtilities = new KeysUtilities();
     *
     * var chaves = keysUtilities.getKeysFromCode( 'Proventos', 'INSS..;FGTS',
     *  filtroProventos )
     *
     * @example
     * var KeysUtilities = require('@nginstack/engine/lib/database/KeysUtilities');
     * var keysUtilities = new KeysUtilities();
     *
     * var chave = keysUtilities.getKeysFromCode( 'Proventos', 'INSS', filtroProventos )
     *
     * @see KeysUtilities#getKeysFromIncompleteCode
     * @see KeysUtilities#getKeysFromMultipleCode
     */
    getKeysFromCode(classKey: any, code: string, classesFilter?: string, ds?: DataSet): string;
    /**
     * Pega chaves de registro cujo campo passado como parâmetro tenha pelo menos uma das chaves da
     * lista informada.
     * @param {Object} classKey Pode ser uma String ou um Number. Nome ou chave da classe onde será
     * pesquisadas as chaves.
     * @param {string} fieldName Nome do campo para pesquisa das chaves.
     * @param {string} keys Lista de chaves separadas por "," ( virgula ) para pesquisa no campo.
     * @param {string} [filter] Lista de chaves de classes filhas de "classKey" nas quais deve ser
     * feito a pesquisa do código que o usuário tem acesso.
     * @returns {string} Lista de chaves.
     */
    getKeysFromLocateKeys(classKey: any, fieldName: string, keys: string, filter?: string): string;
    getKeysFromLocate: any;
    /**
     * Retorna a quantidade de chaves da lista.
     * @param {string} keys Lista de chaves separadas por "," ( virgula ) ou ponto e vírgula.
     * @returns {number} Quantidade de chaves da lista.
     * @example
     * var KeysUtilities = require('@nginstack/engine/lib/database/KeysUtilities');
     * var keysUtilities = new KeysUtilities();
     *
     * // A variável ficará com 4
     * var qde = keysUtilities.getKeysCount( '-1,1235,557,5578' )
     */
    getKeysCount(keys: string): number;
    /**
     * Copia chaves de uma lista de chaves.
     * @param {string} keys Lista de chaves separadas por "," ( virgula ).
     * @param {number} startPosition Posição inicial de chave. Similar ao índice de um array e é
     * zero indexado.
     * @param {number} count Quantidade de chaves para ser copiada.
     * @returns {string} Lista de chaves separadas por ','.
     * @example
     * var KeysUtilities = require('@nginstack/engine/lib/database/KeysUtilities');
     * var keysUtilities = new KeysUtilities();
     *
     * var chaves = keysUtilities.copyKey( '-1,1235,557,5578', 1, 2 ) // 1235,557
     */
    copyKeys(keys: string, startPosition: number, count: number): string;
    /**
     * Pega a lista de chaves de um determinado campo de um dataset.
     * Essa função retornará juntamente com a lista de chaves uma chave com o valor -1.
     * Esse comportamento está correto e serve para manter a compatibilidade com vários
     * processos no sistema.
     * @param {DataSet} dataSet Dataset para percorrer.
     * @param {string} fieldName Nome do campo que será pegue as chaves.
     * @param {boolean} distinct Se a lista de chaves resultante é de chaves distintas.
     * @returns {string} Lista de chaves separadas por ','.
     */
    getKeysFromField(dataSet: DataSet, fieldName: string, distinct: boolean): string;
    /**
     * Pega lista de chaves que são comuns entre duas listas de chaves.
     * @param {string} keys1 Lista de chaves 1.
     * @param {string} keys2 Lista de chaves 2.
     * @returns {string} Lista de chaves separadas por ',' que são comuns entre "keys1" e "keys2". Se
     * não houver chaves comuns, será retornado "-1".
     */
    getIntersectKeys(keys1: string, keys2: string): string;
    /**
     * A partir duas ou mais listas de chaves, retorna uma lista de chaves comuns a todas as listas.
     *
     * @param {Array} keys Esse parâmetro deve ser um array de um ou mais arrays de chaves
     * @return {Array}
     */
    getIntersectKeysFromKeyList(keys: any[]): any[];
    /**
     * Pega lista de chaves que não são comuns entre duas listas de chaves.
     * @param {string} keys1 Lista de chaves 1.
     * @param {string} keys2 Lista de chaves 2.
     * @returns {string} Lista de chaves separadas por ',' (ou um array) que NÃO são comuns
     * entre "keys1" e "keys2".
     */
    getNoIntersectKeys(keys1: string, keys2: string, returnArray: any): string;
    /**
     * Pega lista de chaves que existem nas duas listas, eliminando redundâncias.
     * @param {string} keys1 Lista de chaves 1.
     * @param {string} keys2 Lista de chaves 2.
     * @returns {string} Lista de chaves separadas por ',' que existem em "keys1" ou "keys2".
     */
    getUnionKeys(keys1: string, keys2: string): string;
    /**
     * Retorna o path separado por "."(ponto) do caminho entre os nomes das classes começando na
     * classe startClass e terminando na endClass dependendo do nível informado como terceiro
     * parâmetros.
     * @param {number} startClass Classe inicial, obrigatoriamente mãe da endClass.
     * @param {number} endClass Classe final, obrigatoriamente filha de startClass
     * @param {number} [level] A quantidade de níveis a serem exibidos. Por default exibirá todos os
     * níveis do range definido entre startClass e endClass.
     * @returns {string} path separado por "."(ponto).
     * @example
     * var KeysUtilities = require('@nginstack/engine/lib/database/KeysUtilities');
     * var keysUtilities = new KeysUtilities();
     *
     * // Considere que a classe animais tem chave = 5555 e que a classe cachorro
     * // tem chave = 565656
     * // Considere também a hierarquia => animais/mamíferos/quadrupedes/cachorro
     *
     * //Logo, quando usamos a função:
     * keysUtilities.hierarchicalClass(5555, 565656)
     * // retorno = animais.mamíferos.quadrupedes.cachorro
     *
     * //Veja o que acontece quando informamos o nível para 2:
     * keysUtilities.hierarchicalClass(5555, 565656, 2)
     * //retorno = animais.mamíferos
     *
     */
    hierarchicalClass(startClass: number, endClass: number, level?: number): string;
    /**
     * Extrai chaves de uma lista de chaves, retornando a lista sem as chaves.
     * @param {Object} keysForExtract Pode ser um Array ou uma String. As chaves que devem
     * ser extraídas.
     * @param {Object} keys Pode ser um Array ou uma String. A lista de chaves.
     * @param {string} [separator] Indicará como suas chaves estão separadas em ambos os parâmetros
     * forem Strings. Como default, receberá o valor "," (virgula).
     * @returns {string} Retorna a lista de chaves sem as chaves usadas para a extração.
     * @example
     * var KeysUtilities = require('@nginstack/engine/lib/database/KeysUtilities');
     * var keysUtilities = new KeysUtilities();
     *
     * keysUtilities.extract("1,2,3","1,2,3,4") // retorna 4
     * keysUtilities.extract("1;2;3","1;2;3;4",';') // retorna 4
     *
     */
    extract(keysForExtract: any, keys: any, separator?: string): string;
    /**
     * Verifica se uma chave pertence a uma lista de chaves.
     * @param {Object} key Pode ser String ou Number. Chave que será verificada.
     * @param {string} keyList Lista que conterá ou não a chave.
     * @returns {boolean} True se a chave estiver na lista, False se não estiver.
     * @example
     * var KeysUtilities = require('@nginstack/engine/lib/database/KeysUtilities');
     * var keysUtilities = new KeysUtilities();
     *
     * keysUtilities.keyInKeysList(4,"1,2,3,4")
     */
    keyInKeysList(key: any, keysList: any): boolean;
    /**
     * Retorna somente as chaves distintas de uma lista de chaves.
     * @param {string} keys Lista de chaves separadas por "," (virgula)
     * @returns {string} Lista de chaves distintas
     * @example
     * var KeysUtilities = require('@nginstack/engine/lib/database/KeysUtilities');
     * var keysUtilities = new KeysUtilities();
     *
     * // retorna 1,2,3
     * keysUtilities.getDistinctKeys("1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3")
     */
    getDistinctKeys(keys: string): string;
    /**
     * Gera uma url que identifica um conteúdo dentro do Virtual File System.
     * @param {number} classKey Chave da classe onde o conteúdo está localizado.
     * @param {string} name Nome do conteúdo.
     * @returns {string} Url utilizada para acessar o conteúdo dentro do Virtual File System.
     * @deprecated Utilize o método `formatFilePath` da classe `VirtualFileSystem`.
     */
    getUrl(classKey: number, name: string): string;
}
declare namespace KeysUtilities {
    /**
     * Obtém uma instância compartilhada desta classe.
     * @return {KeysUtilities}
     */
    function getInstance(): KeysUtilities;
}
import DataSet = require('../dataset/DataSet.js');
