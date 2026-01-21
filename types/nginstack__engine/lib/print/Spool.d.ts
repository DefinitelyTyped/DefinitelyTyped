export = Spool;
/**
 * Cria um objeto que permite criar trabalhos de impressão utilizando um spool de impressão
 * previamente configurado no sistema operacional.
 * @param {string} printerName Nome da impressão para onde serão enviados os trabalhos.
 * @constructor
 */
declare function Spool(printerName: string): void;
declare class Spool {
    /**
     * Cria um objeto que permite criar trabalhos de impressão utilizando um spool de impressão
     * previamente configurado no sistema operacional.
     * @param {string} printerName Nome da impressão para onde serão enviados os trabalhos.
     * @constructor
     */
    constructor(printerName: string);
    /**
     * Cria um novo trabalho de impressão que deve ser finalizado por meio do método {@link #close}.
     *
     * Os trabalhos criados serão do tipo RAW, sendo adequados apenas para impressões textuais
     * utilizando o conjunto de comandos Epson/ESC.
     * @param {string} jobName Nome do trabalho de impressão.
     */
    open(jobName: string): void;
    /**
     * Escreve o dado informado no trabalho de impressão iniciado previamente pelo método {@link #open}.
     * @param {string} data Dados a serem impressos.
     */
    write(data: string): void;
    /**
     * Escreve o dado informado acrescido de um salto de linha no padrão CRLF no trabalho de
     * impressão iniciado previamente pelo método {@link #open}.
     * @param {string} data Dados a serem impressos.
     */
    writeln(data: string): void;
    /**
     * Escreve o byte informado no trabalho de impressão iniciado previamente pelo método {@link #open}.
     * @param {number} data Valor do byte a ser impresso.
     */
    writeByte(data: number): void;
    /**
     * Finaliza o trabalho de impressão iniciado previamente pelo método {@link #open}.
     * @param {boolean} [waitPrint=false] Indica se aguarda a conclusão da impressão.
     * @param {number} [timeout=300000] Caso aguarde a impressão, indica o tempo máximo em
     * milissegundos que deve aguardar a impressão concluir.
     */
    close(waitPrint?: boolean, timeout?: number): void;
}
declare namespace Spool {
    /**
     * Obtém a relação de impressoras disponíveis para impressão no sistema operacional.
     * @return {string[]} Nomes das impressoras disponíveis.
     */
    function getPrinters(): string[];
}
