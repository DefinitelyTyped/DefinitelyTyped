export = HtmlToPdf;
/**
 * Esta classe atua como uma interface para o aplicativo wkhtmltopdf. Informações
 * adicionais podem ser encontradas na página do projeto: https://wkhtmltopdf.org
 *
 * As páginas serão impressas no arquivo PDF na ordem que forem adicionadas ao objeto.
 *
 * Em ambientes Windows, esta classe utiliza o NativeAppPackageManager para gravar o
 * aplicativo em disco antes de sua primeira execução. Em ambientes Linux, o aplicativo
 * "wkhtmltopdf" deve ser manualmente instalado no sistema operacional antes que esta
 * classe possa ser utilizada.
 * @constructor
 */
declare function HtmlToPdf(): void;
declare class HtmlToPdf {
    /** @private */
    private workDir_;
    /** @private */
    private pages_;
    /** @private */
    private resources_;
    /** @private */
    private logger_;
    /**
     * Configura o tempo, em milissegundos, de espera para execução do comando de impressão.
     * Se o processo de impressão não terminar dentro desse intervalo, ocorre um erro de "timeout".
     * Por padrão se considera um tempo de espera de 3 minutos (180000 ms).
     *
     * @type {number}
     */
    timeout: number;
    /**
     * Configura o número de copias das páginas a
     * serem impressas no documento.
     *
     * Default: 1.
     * @type {number}
     */
    copies: number;
    /**
     * Configura se deve imprimir em escala de cinza.
     *
     * @default false
     * @type {boolean}
     */
    grayScale: boolean;
    /**
     * Configura a orientação da impressão em retrato ou paisagem.
     * Valores: Landscape ou Portrait.
     *
     * @default Portrait
     * @type {string}
     */
    orientation: string;
    /**
     * Configura o tamanho da página. Lista completa de i
     * Valores.: A4, A5, B3, Letter, Legal, etc. Lista completa em:
     * http://doc.trolltech.com/qprinter.html#PaperSize-enum
     *
     * @default A4
     * @type {string}
     */
    pageSize: string;
    /**
     * Configura título do PDF. Se vazio, a tag "title" da primeira página é utilizada como título.
     * @default ''
     * @type {string}
     */
    title: string;
    /**
     * Adiciona parâmetros de customização ao documento impresso. Caso
     * parâmetros já tenham sido definidos, estes serão sobrescritos.
     * Os parâmetros são definidos de acordo com a documentação
     * do wkhtmltopdf na seção Global Options.
     * @type {string}
     */
    extraArguments: string;
    /**
     * Configura a ação que será realizada sobre os arquivos informados pelo path.
     * Os valores possíveis são "move" para mover o arquivo informado para a pasta de trabalho,
     * removendo-o, portanto, do local original, ou "copy" para copiar o arquivo informado para a pasta
     * de trabalho, deixando o arquivo informado na pasta de origem.
     *
     * @default 'copy'
     * @enum {string}
     */
    localFileAction: string;
    /**
     * Indica se as mensagens geradas pelo aplicativo, quando executado localmente, devem ser capturadas.
     * @type {boolean}
     */
    captureOutput: boolean;
    /**
     * Mensagens geradas pela execução do aplicativo. Essa propriedade será preenchida caso a propriedade
     * captureOutput esteja configurada com valor true (default), ou se a variável de ambiente
     * NGIN_HTMLTOPDF_DEBUG estiver definida com valor true.
     * @type {string}
     * @private
     */
    private outputMessage_;
    /**
     * Retorna as mensagens geradas pela execução do aplicativo.
     * @return {string}
     */
    getOutput(): string;
    private setOrientation;
    private getOrientation;
    private setPageSize;
    private getPageSize;
    private setExtraArguments;
    private getExtraArguments;
    private setCopies;
    private getCopies;
    private setGrayScale;
    private getGrayScale;
    private setTitle;
    private getTitle;
    private tryExecuteApp_;
    private buildCommand_;
    private updateAppPackage_;
    /** @private */
    private htmlToPdfPath_;
    /** @private */
    private htmlToPdfExec_;
    private isAppAvailableOnEnvironment_;
    private addFileByPath_;
    private addFileByContent_;
    /**
     * Adiciona uma página ao conjunto de impressão, informando o caminho do
     * arquivo HTML.
     * @example
     *  const HtmlToPdf = require('@nginstack/engine/lib/print/HtmlToPdf');
     *  let pdf = new HtmlToPdf();
     *  pdf.addPage('./caminho/pagina.html');
     *  pdf.print('arquivo.pdf');
     * @param {string} inputFilePath Caminho do arquivo Html.
     */
    addPage(inputFilePath: string): void;
    /**
     * Adiciona um arquivo de recurso, que será carregado por uma página HTML.
     * @example
     *  const HtmlToPdf = require('@nginstack/engine/lib/print/HtmlToPdf');
     *  let pdf = new HtmlToPdf();
     *  pdf.addPage('./caminho/pagina.html');
     *  pdf.addResource('./caminho/imagem.png');
     *  pdf.print('arquivo.pdf');
     * @param {string} inputFilePath Caminho do arquivo de recurso.
     */
    addResource(inputFilePath: string): void;
    /**
     * Adiciona uma página ao conjunto de impressão, informando nome e conteúdo da página HTML.
     * Utilize esse método quando a página for gerada pela aplicação e não existir em disco, ou
     * quando for um arquivo da Virtual File System.
     * @example
     * const HtmlToPdf = require('@nginstack/engine/lib/print/HtmlToPdf');
     * const pdf = new HtmlToPdf();
     * pdf.addPageContent('test.html', htmlContent);
     * pdf.print('test.pdf');
     * @param {string} fileName Nome do arquivo HTML.
     * @param {string} content Conteúdo do arquivo HTML.
     */
    addPageContent(fileName: string, content: string): void;
    /**
     * Adiciona um arquivo de recurso, que será carregado por uma página HTML.
     * Utilize esse método quando o recurso for gerado dinamicamente pela aplicação
     * e não existir em disco, ou quando for um arquivo da Virtual File System.
     * @example
     * const HtmlToPdf = require('@nginstack/engine/lib/print/HtmlToPdf.js');
     * const pdf = new HtmlToPdf();
     * pdf.addPage('./path/test.html');
     * pdf.addResourceContent('image.jpeg', virtualFS.getFileContent(imageKey));
     * pdf.print('test.pdf');
     * @param {string} fileName Nome do arquivo de recurso.
     * @param {string} fileContent Conteúdo do arquivo de recurso.
     */
    addResourceContent(fileName: string, fileContent: string): void;
    /**
     * Adiciona parâmetros de customização à página a ser impressa. Caso
     * parâmetros já tenham sido definidos, estes serão sobrescritos.
     * Os parâmetros são definidos de acordo com a documentação
     * do wkhtmltopdf na seção Page Options.
     * @param {number} index Índice da página ao qual os parâmetros se referem.
     * @param {string} params Parâmetros de customização.
     */
    setPageExtraArguments(index: number, params: string): void;
    /**
     * Retorna o conjunto de páginas para impressão.
     * @return {Array} Páginas a serem impressas em ordem.
     */
    getPages(): any[];
    /**
     * Imprime os objetos Html no arquivo especificado. Nos casos em que
     * a impressão ocorre no Engine local, pode ser encontrado o log da
     * última execução em tools/HtmlToPdf/htmlToPdf.log.
     * @param {string} outputFileName Caminho do arquivo PDF de saída.
     * @param {boolean} [generateLog=false] Se true gera arquivo de log.
     * @return {number} Código de saída da execução do HtmlToPdf
     */
    print(outputFileName: string, generateLog?: boolean): number;
}
declare namespace HtmlToPdf {
    namespace prototype {
        /**
         * Configura a ação que será realizada sobre os arquivos informados pelo path.
         * Os valores possíveis são "move" para mover o arquivo informado para a pasta de trabalho,
         * removendo-o, portanto, do local original, ou "copy" para copiar o arquivo informado para a pasta
         * de trabalho, deixando o arquivo informado na pasta de origem.
         */
        type localFileAction = string;
    }
}
