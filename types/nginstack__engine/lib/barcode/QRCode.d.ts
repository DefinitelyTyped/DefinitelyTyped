export = QRCode;
/**
 * Gerador de QR Codes.
 *
 * Um QR Code funciona como um código de barras em duas dimensões.
 * É composto por uma matriz de módulos (os "quadrados pretos"), em que cada módulo pode ser
 * preenchido por uma cor escura ou deixado vazio. Esses módulos são exibidos sobre uma cor de
 * fundo mais clara, e geralmente possuem uma margem de segurança para facilitar a leitura.
 *
 * Os métodos desta classe permitem gerar QR Codes a partir de um conteúdo textual em uma
 * string ou em bytes (`ArrayBuffer` ou `Uint8Array`). Sequências de bytes são diretamente
 * convertidas para QR Code. Strings são primeiro convertidas para bytes no padrão UTF-8 para
 * então gerar o QR Code.
 *
 * O padrão UTF-8 difere da especificação oficial, que define o ISO 8859-1 para a codificação em
 * bytes. Na prática, no entanto, o padrão UTF-8 passou a ser largamente utilizado, e por conta
 * disso os leitores de QR Code passaram a implementar heurísticas para identificar o padrão de
 * codificação no momento da leitura. Caso o usuário deseje utilizar o padrão ISO 8859-1,
 * recomenda-se passar o conteúdo já codificado em bytes nesse padrão.
 *
 * Os métodos da classe também podem receber um objeto com opções para alterar detalhes da geração
 * da imagem, como cor de preenchimento do módulo, cor de fundo, espessura da margem,
 * tamanho da imagem, etc.
 *
 * Não devem ser construídas instâncias de QRCode, e sim utilizar os métodos de classe.
 *
 * @example
 *  const QRCode = require('@nginstack/engine/lib/barcode/QRCode.js');
 *  const qrcode = QRCode.toDataURL(new Uint8Array([61, 62, 63]));
 * @example
 *  const qrcode = QRCode.toUint8Array('abc', { scale: 8, margin: 2 });
 * @example
 *  QRCode.toFile(content, path, { width: 128, lightColor: '#9FFAF9', darkColor: '#010000AA' });
 * @example
 *  const qrcode = QRCode.toDataURL(buffer, { lightColor: '#00000000' }); // Transparent background
 *
 * @constructor
 */
declare function QRCode(): void;
declare class QRCode {}
declare namespace QRCode {
    export {
        ECC_LOW,
        ECC_MEDIUM,
        ECC_QUARTILE,
        ECC_HIGH,
        toUint8Array,
        toDataURL,
        toFile,
        QRCodeOptions,
    };
}
declare let ECC_LOW: string;
declare let ECC_MEDIUM: string;
declare let ECC_QUARTILE: string;
declare let ECC_HIGH: string;
/**
 * Obtém uma imagem PNG do QRCode no formato binário.
 * @param {string|ArrayBuffer|Uint8Array} content Conteúdo textual a ser convertido para QR Code.
 * Pode ser uma string ou estar codificado em bytes. Strings são convertidas para bytes no padrão
 * UTF-8 antes de gerar o QR Code.
 * @param {QRCodeOptions} [options] Opções de geração da imagem
 * (escala, margem, cores, tamanho, etc).
 * @return {Uint8Array} Imagem PNG do QR Code no formato binário.
 */
declare function toUint8Array(
    content: string | ArrayBuffer | Uint8Array,
    options?: QRCodeOptions
): Uint8Array;
/**
 * Obtém uma imagem PNG do QRCode no formato Data URL.
 * @param {string|ArrayBuffer|Uint8Array} content Conteúdo textual a ser convertido para QR Code.
 * Pode ser uma string ou estar codificado em bytes. Strings são convertidas para bytes no padrão
 * UTF-8 antes de gerar o QR Code.
 * @param {QRCodeOptions} [options] Opções de geração da imagem
 * (escala, margem, cores, tamanho, etc).
 * @return {Uint8Array} Imagem PNG do QR Code no formato Data URL.
 */
declare function toDataURL(
    content: string | ArrayBuffer | Uint8Array,
    options?: QRCodeOptions
): Uint8Array;
/**
 * Cria um arquivo de imagem PNG do QRCode.
 * @param {string|ArrayBuffer|Uint8Array} content Conteúdo textual a ser convertido para QR Code.
 * Pode ser uma string ou estar codificado em bytes. Strings são convertidas para bytes no padrão
 * UTF-8 antes de gerar o QR Code.
 * @param {string} path Caminho do arquivo a ser criado.
 * @param {QRCodeOptions} [options] Opções de geração da imagem
 * (escala, margem, cores, tamanho, etc).
 */
declare function toFile(
    content: string | ArrayBuffer | Uint8Array,
    path: string,
    options?: QRCodeOptions
): void;
interface QRCodeOptions {
    /**
     * Fator de escala. É o tamanho de um módulo do QR Code em pixels.
     * Um valor 4 significa que um módulo é um quadrado de 4x4 pixels.
     *
     * O valor padrão é 4.
     */
    scale?: number;
    /**
     * Espessura da margem de segurança em número de módulos.
     *
     * O valor padrão é 4.
     */
    margin?: number;
    /**
     * Força uma largura específica em pixels para a imagem.
     * Imagens pequenas demais para alocar o QR Code geram erro.
     *
     * Esta opção muda o comportamento do parâmetro "margin", que passa a não mais definir um tamanho
     * fixo para a margem, mas sim um tamanho mínimo.
     *
     * Esta opção tem precedência sobre o parâmetro "scale".
     */
    width?: number;
    /**
     * Nível de correção de erro. Indica a porcentagem máxima de
     * perda de informação possível de ser recuperada na leitura do QR Code.
     *
     * Os valores possíveis são:
     *
     * - QRCode.ECC_LOW ou 'L' (7%)
     * - QRCode.ECC_MEDIUM ou 'M' (15%)
     * - QRCode.ECC_QUARTILE ou 'Q' (25%)
     * - QRCode.ECC_HIGH ou 'H' (30%).
     *
     * O valor padrão é QRCode.ECC_MEDIUM.
     */
    errorCorrection?: string;
    /**
     * Cor de fundo. Aceita RGB ou RGBA no formato hexadecimal.
     * Deve ser uma cor mais clara do que a definida pelo parâmetro "darkColor".
     *
     * O valor padrão é #FFFFFF (branco).
     *
     * Exemplos: #FAFAFA, #FBFBFBAA.
     */
    lightColor?: string;
    /**
     * Cor dos módulos. Aceita RGB ou RGBA no formato hexadecimal.
     * Deve ser uma cor mais escura do que a definida pelo parâmetro "lightColor".
     *
     * O valor padrão é #000000 (preto).
     *
     * Exemplos: #0B000C, #010101AA.
     */
    darkColor?: string;
    /**
     * Se verdadeiro, ignora a validação de contraste.
     *
     * Por padrão, é realizado o cálculo de luminosidade das cores para checar se o contraste entre
     * elas é alto suficiente para que o QR Code seja lido corretamente. Cores com transparência não
     * passam por essa validação.
     *
     * Importante: não há garantia de que QR Codes com contrastes muito baixos, mesmo quando validados,
     * sejam reconhecidos por todos os leitores.
     */
    ignoreContrastCheck?: boolean;
}
