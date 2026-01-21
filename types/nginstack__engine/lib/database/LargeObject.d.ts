export = LargeObject;
/**
 * Classe auxiliar que representa um arquivo armazenado no LobStorage. Ela não deve ser construída
 * manualmente, devendo ser sempre obtida através dos métodos getLob() e tryGetLob().
 * @param {LargeObjectContent} rawContent Conteúdo bruto do lob armazenado. Utilizado quando a
 * classe LobStorage ou LobRecordIterator estão carregando o conteúdo da iLob a partir do banco de
 * dados ou de um serviço de armazenamento em nuvem.
 * @constructor
 * @see LobStorage#load
 */
declare function LargeObject(rawContent: LargeObjectContent): void;
declare class LargeObject {
    /**
     * Classe auxiliar que representa um arquivo armazenado no LobStorage. Ela não deve ser construída
     * manualmente, devendo ser sempre obtida através dos métodos getLob() e tryGetLob().
     * @param {LargeObjectContent} rawContent Conteúdo bruto do lob armazenado. Utilizado quando a
     * classe LobStorage ou LobRecordIterator estão carregando o conteúdo da iLob a partir do banco de
     * dados ou de um serviço de armazenamento em nuvem.
     * @constructor
     * @see LobStorage#load
     */
    constructor(rawContent: LargeObjectContent);
    rawContent_: LargeObjectContent;
    extraAttributes: any;
    /**
     * Chave do lob armazenado.
     * @type {number}
     */
    key: number;
    /**
     * Nome do lob armazenado.
     * @type {string}
     */
    name: string;
    /**
     * Chave do MimeType que identifica o tipo do documento.
     * @type {number|null}
     */
    mimeType: number | null;
    /**
     * Conteúdo do lob armazenado, representado como uma string binária.
     * @type {string}
     */
    content: string;
    /**
     * Conteúdo do lob armazenado.
     * @return {string} Conteúdo do documento armazenado.
     */
    toString(): string;
    /**
     * Converte o conteúdo do lob armazenado para Uint8Array.
     * @return {Uint8Array} Conteúdo do documento convertido.
     */
    toUint8Array(): Uint8Array;
    /**
     * Converte o conteúdo do lob armazenado para ArrayBuffer.
     * @return {ArrayBuffer} Conteúdo do documento convertido.
     */
    toArrayBuffer(): ArrayBuffer;
    /**
     * Retorna o conteúdo do lob armazenado como texto, validando se o tipo de mídia é textual. Será
     * gerado um erro caso o conteúdo seja binário e não possa ser convertido para texto.
     * @return {string} Conteúdo textual do documento armazenado.
     */
    toText(): string;
}
import LargeObjectContent = require('./LargeObjectContent.js');
