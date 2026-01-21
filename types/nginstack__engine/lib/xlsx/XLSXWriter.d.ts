export = XLSXWriter;
/** @typedef {'none'|'thin'|'medium'|'dashed'|'dotted'|'thick'|'double'|'hair'|'medium-dashed'|'dash-dot'|'medium-dash-dot'|'dash-dot-dot'|'medium-dash-dot-dot'|'slant-dash-dot'} FormatBorder Estilos de borda de célula no Excel.*/
/** @typedef {'left'|'center'|'right'|'fill'|'justify'|'center-across'|'distributed'} HorizontalAlignment Estilos de alinhamento horizontal da célula.*/
/** @typedef {'top'|'center'|'bottom'|'justify'|'distributed'} VerticalAlignment Estilos de alinhamento vertical da célula.*/
/** @typedef {'left-to-right'|'right-to-left'} ReadingDirection Estilos de direção de leitura do texto dentro da célula.*/
/** @typedef {'single'|'double'|'single-accounting'|'double-accounting'} Underline Estilos inserir sublinhado em um texto.*/
/** @typedef {'superscript'|'subscript'} FontScript Define se o texto será sobrescrito ou subscrito.*/
/**
 * @typedef {Object} FormatOptions
 * @property {string} [numericFormat] Um formato Excel personalizado que define como um valor será
 * apresentado na célula. Por exemplo, "R$ #,##0.00;-R$ #,##0.00" para valores em reais com o
 * símbolo de negativo antes do símbolo monetário, "0.00%" para porcentagens com duas casas decimais,
 * "dd/mm/yyyy" para datas, "hh:mm:ss" para horários, etc.
 *
 * Para verificar uma formatação numérica, abra a opção de formatação de uma célula no Excel, e
 * depois que escolher o tipo de formatação, clique em "Personalizado" para ver o código
 * utilizado. No entanto, fique atento pois a localização de código que deve ser utilizada nesta
 * API é Inglês (EUA), e não a localização do usuário.
 * @property {HorizontalAlignment} [horizontalAlignment] Alinhamento horizontal da célula.
 * @property {VerticalAlignment} [verticalAlignment] Alinhamento vertical da célula.
 * @property {boolean} [textWrap] Indica se o texto deve quebrar automaticamente.
 * @property {number} [indentation] Nível de indentação (0–255). Indica o número de espaços
 * a serem adicionados antes do texto na célula.
 * @property {ReadingDirection} [readingDirection] Direção de leitura do texto.
 * Utilizado em idiomas que possuem direções de leitura diferentes, como árabe ou hebraico.
 * @property {boolean} [shrinkToFit] Reduz o texto para caber na célula.
 * @property {string} [fontType] Nome da fonte, por exemplo "Calibri" ou "Arial".
 * @property {number} [fontSize] Tamanho da fonte (em pontos).
 * @property {string} [fontColor] Cor da fonte no formato hexadecimal, por exemplo "#FF0000"
 * (vermelho) ou "#000000" (preto).
 * @property {boolean} [bold] Define se o texto será negrito.
 * @property {boolean} [italic] Define se o texto será itálico.
 * @property {Underline} [underline] Tipo de sublinhado. Os estilos de sublinhado "accounting" são
 * geralmente utilizados para valores monetários, ficam um pouco mais afastados do texto e percorrem
 * toda a largura da célula.
 * @property {boolean} [strikethrough] Define se o texto terá risco no meio.
 * @property {FontScript} [fontScript] Define se o texto será sobrescrito ou subscrito.
 * @property {FormatBorder} [cellBorder] Estilo da borda aplicada em todos os lados da célula.
 * Pode ser sobrescrito por propriedades específicas de borda como `topBorder`, `leftBorder`,
 * `rightBorder` e `bottomBorder`.
 * @property {FormatBorder} [bottomBorder] Estilo da borda inferior da célula.
 * @property {FormatBorder} [topBorder] Estilo da borda superior da célula.
 * @property {FormatBorder} [leftBorder] Estilo da borda esquerda da célula.
 * @property {FormatBorder} [rightBorder] Estilo da borda direita da célula.
 * @property {string} [borderColor] - Cor da borda em formato hexadecimal (ex: `"#CCCCCC"`).
 * Aplica-se a todos os lados. Pode ser sobrescrito por propriedades específicas de borda
 * como `borderTopColor`, `borderLeftColor`, `borderRightColor` e `borderBottomColor`.
 * @property {string} [borderTopColor] Cor da borda superior em formato hexadecimal
 * (ex: `"#CCCCCC"`).
 * @property {string} [borderLeftColor] Cor da borda esquerda em formato hexadecimal
 * (ex: `"#CCCCCC"`).
 * @property {string} [borderRightColor] Cor da borda direita em formato hexadecimal
 * (ex: `"#CCCCCC"`).
 * @property {string} [borderBottomColor] Cor da borda inferior em formato hexadecimal
 * (ex: `"#CCCCCC"`).
 * @property {string} [backgroundColor] Cor de fundo da célula no formato hexadecimal
 * (ex: "#FAFAFA").
 */
/**
 * XLSXWriter é uma classe que permite escrever arquivos no formato XLSX (Excel).
 *
 * Antes de iniciar a escrita, uma planilha deve ser adicionada utilizando o método `addWorksheet`.
 * A seguir, as células devem ser escritas uma por vez utilizando os métodos de escrita, que recebem
 * linha, coluna, valor e opcionalmente uma formatação para a célula. As células são sempre escritas
 * na última planilha adicionada.
 *
 * Cada método de escrita possui uma formatação pré-definida que pode ser sobrescrita pelo parâmetro
 * de formatação. Este parâmetro pode ser um objeto passado diretamente no método de escrita, ou
 * preferencialmente apenas o nome de uma formatação definida previamente. Para definir uma
 * formatação, utilize o método `addFormat` passando o nome da formatação e um objeto com as
 * opções desejadas.
 *
 * A escrita deve ocorrer sequencialmente, pois apenas uma linha é mantida por vez em memória.
 * Uma vez que uma célula é escrita em uma linha, não é possível escrever outra célula em uma linha
 * anterior daquela planilha. De mesmo modo, uma vez que uma nova planilha é adicionada, não é
 * possível acessar planilhas anteriores.
 *
 * Finalizada a escrita, o método `saveToFile` deve ser utilizado passando o nome do arquivo destino
 * para gerar o arquivo XLSX.
 *
 * @example
 * const XLSXWriter = require('@nginstack/engine/lib/xlsx/XLSXWriter.js');
 *
 * // Criando uma instância do XLSXWriter
 * const writer = new XLSXWriter();
 *
 * // Definindo formatos personalizados
 * writer.addFormat('header', { bold: true, fontSize: 12 });
 * writer.addFormat('date', { numericFormat: 'dd/mm' });
 *
 * // Adicionando uma planilha
 * writer.addWorksheet('Datas Comemorativas 2025');
 *
 * // Escrevendo a primeira linha com cabeçalhos
 * writer.writeString(0, 0, 'Nome', 'header');
 * writer.writeString(0, 1, 'Data', 'header');
 *
 * // Escrevendo dados na planilha
 * writer.writeString(1, 0, 'Natal');
 * writer.writeDate(1, 1, '2025-12-25', 'date');
 * writer.writeString(2, 0, 'Carnaval');
 * writer.writeDate(2, 1, '2025-03-04', 'date');
 *
 * // Salvando o arquivo XLSX
 * writer.saveToFile('datas_comemorativas_2025.xlsx');
 *
 * @constructor
 */
declare function XLSXWriter(): void;
declare class XLSXWriter {
    /**
     * Adiciona uma planilha ao arquivo XLSX. Para escrever células, é necessário que pelo menos uma
     * planilha tenha sido adicionada.
     *
     * A escrita é feita sequencialmente, portanto os dados são sempre escritos na última planilha
     * adicionada, e não é possível acessar e escrever em planilhas anteriores após adicionar uma nova
     * planilha.
     *
     * @param {string} [name] Nome opcional da planilha a ser adicionada. Caso não seja informado,
     * a planilha receberá um nome padrão como "Sheet1", "Sheet2", etc. O Excel não aceita nomes de
     * planilha com mais de 31 caracteres.
     */
    addWorksheet(name?: string): void;
    /**
     * Define uma formatação personalizada que pode ser utilizada ao escrever células.
     *
     * Preferencialmente, para uma melhor performance durante a escrita, utilize este método para
     * definir as formatações previamente, e informe apenas o nome como parâmetro de formatação nos
     * métodos de escrita.
     *
     * @param {string} name Nome da formatação. Este nome é utilizado para referenciar a formatação ao
     * escrever células.
     * @param {FormatOptions} format Objeto contendo as opções de formatação.
     */
    addFormat(name: string, format: FormatOptions): void;
    /**
     * Define a largura de uma coluna na planilha atual.
     *
     * Colunas que não passam por este método têm sua largura definida por uma heurística que leva em
     * consideração o número de caracteres dos valores escritos, o tipo do dado e a formatação
     * aplicada.
     *
     * Pode ser necessário definir a largura de colunas que abrigam fórmulas, que tenham o tamanho da
     * fonte alterado ou cuja formatação numérica seja muito diferente do padrão definido para o
     * tipo de dado.
     * @param {number} col Coluna que terá a largura definida (0-indexed).
     * @param {number} width Largura da coluna em unidades de caractere. Uma unidade equivale à largura
     * de um caractere na fonte padrão do Excel (Calibri 11).
     */
    setColumnWidth(col: number, width: number): void;
    /**
     * Escreve uma string em uma célula da planilha atual.
     *
     * @param {number} row Número da linha onde a string será escrita (0-indexed).
     * @param {number} col Número da coluna onde a string será escrita (0-indexed).
     * @param {string} str O valor da string a ser escrita na célula.
     * @param {string|FormatOptions} [format] Nome da formatação definida previamente ou um objeto
     * contendo as opções de formatação. Se não for informado, será utilizada a formatação numérica "@",
     * que indica o formato padrão para textos.
     */
    writeString(row: number, col: number, str: string, format?: string | FormatOptions): void;
    /**
     * Escreve uma URL em uma célula da planilha atual.
     *
     * @param {number} row Número da linha onde a URL será escrita (0-indexed).
     * @param {number} col Número da coluna onde a URL será escrita (0-indexed).
     * @param {string} url O valor da URL a ser escrita na célula.
     * @param {string|FormatOptions} [format] Nome da formatação definida previamente ou um objeto
     * contendo as opções de formatação. Se não for informado, a URL será escrita sem formatação.
     */
    writeURL(row: number, col: number, url: string, format?: string | FormatOptions): void;
    /**
     * Escreve uma fórmula em uma célula da planilha atual.
     *
     * @param {number} row Número da linha onde a fórmula será escrita (0-indexed).
     * @param {number} col Número da coluna onde a fórmula será escrita (0-indexed).
     * @param {string} formula A fórmula a ser escrita na célula (ex: "=SUM(A1:A10)").
     * @param {string|FormatOptions} [format] Nome da formatação definida previamente ou um objeto
     * contendo as opções de formatação. Se não for informado, o resultado da fórmula será exibido
     * sem formatação.
     */
    writeFormula(row: number, col: number, formula: string, format?: string | FormatOptions): void;
    /**
     * Escreve um número em uma célula da planilha atual.
     *
     * @param {number} row Número da linha onde o número será escrito (0-indexed).
     * @param {number} col Número da coluna onde o número será escrito (0-indexed).
     * @param {number} value O valor numérico a ser escrito na célula.
     * @param {string|FormatOptions} [format] Nome da formatação definida previamente ou um objeto
     * contendo as opções de formatação. Se não for informado, será utilizada a formatação numérica
     * "0.00", que indica um número com duas casas decimais e sem separador de milhar.
     */
    writeNumber(row: number, col: number, value: number, format?: string | FormatOptions): void;
    /**
     * Escreve um inteiro em uma célula da planilha atual.
     *
     * @param {number} row Número da linha onde o inteiro será escrito (0-indexed).
     * @param {number} col Número da coluna onde o inteiro será escrito (0-indexed).
     * @param {number} value O valor inteiro a ser escrito na célula.
     * @param {string|FormatOptions} [format] Nome da formatação definida previamente ou um objeto
     * contendo as opções de formatação. Se não for informado, será utilizada a formatação numérica "0",
     * que indica um número sem casas decimais e sem separador de milhar.
     */
    writeInteger(row: number, col: number, value: number, format?: string | FormatOptions): void;
    /**
     * Escreve um valor booleano em uma célula da planilha atual.
     *
     * @param {number} row Número da linha onde o valor booleano será escrito (0-indexed).
     * @param {number} col Número da coluna onde o valor booleano será escrito (0-indexed).
     * @param {boolean} value O valor booleano a ser escrito na célula.
     * @param {string|FormatOptions} [format] Nome da formatação definida previamente ou um objeto
     * contendo as opções de formatação. Se não for informado, o booleano será escrito sem formatação.
     */
    writeBoolean(row: number, col: number, value: boolean, format?: string | FormatOptions): void;
    /**
     * Escreve uma data em uma célula da planilha atual.
     *
     * @param {number} row Número da linha onde a data será escrita (0-indexed).
     * @param {number} col Número da coluna onde a data será escrita (0-indexed).
     * @param {Date|number|string} value O valor da data a ser escrita na célula. Pode ser um objeto
     * Date, um timestamp, ou uma string no formato "yyyy-mm-dd" ou "yyyy-mm-dd hh:mm:ss".
     * @param {string|FormatOptions} [format] Nome da formatação definida previamente ou um objeto
     * contendo as opções de formatação. Se não for informado, será utilizada a formatação numérica
     * "dd/mm/yyyy".
     */
    writeDate(
        row: number,
        col: number,
        value: Date | number | string,
        format?: string | FormatOptions
    ): void;
    /**
     * Escreve um horário em uma célula da planilha atual.
     *
     * @param {number} row Número da linha onde o horário será escrito (0-indexed).
     * @param {number} col Número da coluna onde o horário será escrito (0-indexed).
     * @param {string} value O valor do horário a ser escrito na célula. Deve ser uma string no formato
     * "hh:mm", "hh:mm:ss" ou "hh:mm:ss.sss".
     * @param {string|FormatOptions} [format] Nome da formatação definida previamente ou um objeto
     * contendo as opções de formatação. Se não for informado, será utilizada a formatação numérica
     * "hh:mm:ss".
     */
    writeTime(row: number, col: number, value: string, format?: string | FormatOptions): void;
    /**
     * Salva o arquivo XLSX no caminho especificado.
     * O arquivo será criado ou sobrescrito se já existir.
     *
     * @param {string} filename Caminho do arquivo onde o XLSX será salvo.
     */
    saveToFile(filename: string): void;
}
declare namespace XLSXWriter {
    export {
        FormatBorder,
        HorizontalAlignment,
        VerticalAlignment,
        ReadingDirection,
        Underline,
        FontScript,
        FormatOptions,
    };
}
/**
 * Estilos de borda de célula no Excel.
 */
type FormatBorder =
    | 'none'
    | 'thin'
    | 'medium'
    | 'dashed'
    | 'dotted'
    | 'thick'
    | 'double'
    | 'hair'
    | 'medium-dashed'
    | 'dash-dot'
    | 'medium-dash-dot'
    | 'dash-dot-dot'
    | 'medium-dash-dot-dot'
    | 'slant-dash-dot';
/**
 * Estilos de alinhamento horizontal da célula.
 */
type HorizontalAlignment =
    | 'left'
    | 'center'
    | 'right'
    | 'fill'
    | 'justify'
    | 'center-across'
    | 'distributed';
/**
 * Estilos de alinhamento vertical da célula.
 */
type VerticalAlignment = 'top' | 'center' | 'bottom' | 'justify' | 'distributed';
/**
 * Estilos de direção de leitura do texto dentro da célula.
 */
type ReadingDirection = 'left-to-right' | 'right-to-left';
/**
 * Estilos inserir sublinhado em um texto.
 */
type Underline = 'single' | 'double' | 'single-accounting' | 'double-accounting';
/**
 * Define se o texto será sobrescrito ou subscrito.
 */
type FontScript = 'superscript' | 'subscript';
interface FormatOptions {
    /**
     * Um formato Excel personalizado que define como um valor será
     * apresentado na célula. Por exemplo, "R$ #,##0.00;-R$ #,##0.00" para valores em reais com o
     * símbolo de negativo antes do símbolo monetário, "0.00%" para porcentagens com duas casas decimais,
     * "dd/mm/yyyy" para datas, "hh:mm:ss" para horários, etc.
     *
     * Para verificar uma formatação numérica, abra a opção de formatação de uma célula no Excel, e
     * depois que escolher o tipo de formatação, clique em "Personalizado" para ver o código
     * utilizado. No entanto, fique atento pois a localização de código que deve ser utilizada nesta
     * API é Inglês (EUA), e não a localização do usuário.
     */
    numericFormat?: string;
    /**
     * Alinhamento horizontal da célula.
     */
    horizontalAlignment?: HorizontalAlignment;
    /**
     * Alinhamento vertical da célula.
     */
    verticalAlignment?: VerticalAlignment;
    /**
     * Indica se o texto deve quebrar automaticamente.
     */
    textWrap?: boolean;
    /**
     * Nível de indentação (0–255). Indica o número de espaços
     * a serem adicionados antes do texto na célula.
     */
    indentation?: number;
    /**
     * Direção de leitura do texto.
     * Utilizado em idiomas que possuem direções de leitura diferentes, como árabe ou hebraico.
     */
    readingDirection?: ReadingDirection;
    /**
     * Reduz o texto para caber na célula.
     */
    shrinkToFit?: boolean;
    /**
     * Nome da fonte, por exemplo "Calibri" ou "Arial".
     */
    fontType?: string;
    /**
     * Tamanho da fonte (em pontos).
     */
    fontSize?: number;
    /**
     * Cor da fonte no formato hexadecimal, por exemplo "#FF0000"
     * (vermelho) ou "#000000" (preto).
     */
    fontColor?: string;
    /**
     * Define se o texto será negrito.
     */
    bold?: boolean;
    /**
     * Define se o texto será itálico.
     */
    italic?: boolean;
    /**
     * Tipo de sublinhado. Os estilos de sublinhado "accounting" são
     * geralmente utilizados para valores monetários, ficam um pouco mais afastados do texto e percorrem
     * toda a largura da célula.
     */
    underline?: Underline;
    /**
     * Define se o texto terá risco no meio.
     */
    strikethrough?: boolean;
    /**
     * Define se o texto será sobrescrito ou subscrito.
     */
    fontScript?: FontScript;
    /**
     * Estilo da borda aplicada em todos os lados da célula.
     * Pode ser sobrescrito por propriedades específicas de borda como `topBorder`, `leftBorder`,
     * `rightBorder` e `bottomBorder`.
     */
    cellBorder?: FormatBorder;
    /**
     * Estilo da borda inferior da célula.
     */
    bottomBorder?: FormatBorder;
    /**
     * Estilo da borda superior da célula.
     */
    topBorder?: FormatBorder;
    /**
     * Estilo da borda esquerda da célula.
     */
    leftBorder?: FormatBorder;
    /**
     * Estilo da borda direita da célula.
     */
    rightBorder?: FormatBorder;
    /**
     * - Cor da borda em formato hexadecimal (ex: `"#CCCCCC"`).
     * Aplica-se a todos os lados. Pode ser sobrescrito por propriedades específicas de borda
     * como `borderTopColor`, `borderLeftColor`, `borderRightColor` e `borderBottomColor`.
     */
    borderColor?: string;
    /**
     * Cor da borda superior em formato hexadecimal
     * (ex: `"#CCCCCC"`).
     */
    borderTopColor?: string;
    /**
     * Cor da borda esquerda em formato hexadecimal
     * (ex: `"#CCCCCC"`).
     */
    borderLeftColor?: string;
    /**
     * Cor da borda direita em formato hexadecimal
     * (ex: `"#CCCCCC"`).
     */
    borderRightColor?: string;
    /**
     * Cor da borda inferior em formato hexadecimal
     * (ex: `"#CCCCCC"`).
     */
    borderBottomColor?: string;
    /**
     * Cor de fundo da célula no formato hexadecimal
     * (ex: "#FAFAFA").
     */
    backgroundColor?: string;
}
