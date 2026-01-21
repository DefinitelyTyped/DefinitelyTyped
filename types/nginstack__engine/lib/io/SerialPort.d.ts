export = SerialPort;
/**
 * @typedef {import('../log/Logger')} Logger
 * @private
 */
/**
 * Classe que possibilita a comunicação por meio de portas seriais.
 * @param {number|string} port Nome ou número da porta serial que será aberta para comunicação.
 * Caso apenas o número tenha sido informado, será usado o prefixo 'COM' no windows e '/dev/ttyUSB'
 * no linux.
 * @param {number} [baudRate] Velocidade da transmissão dos dados entre os equipamentos que
 * usam comunicação serial. A velocidade da porta e a velocidade do equipamento precisam ser
 * iguais, alguns equipamentos podem detectar automaticamente a velocidade da porta serial.
 * Valor padrão: 9600 bits/s.
 * @param {number} [dataBits] Número de bits usados para representar um caractere. Pode ser
 * 5 (para Código Baudot), 6 (Usado raramente), 7 (para true ASCII) ou 8 (para qualquer
 * tipo de dados, pois este valor confere com o tamanho de um byte).
 * Valor padrão: 8 bits.
 * @param {number} [stopBits] Quantidade de bits enviados no final de cada caractere que
 * permitem o equipamento receptor do sinal detectar o fim do caractere e re-sincronizar com
 * a stream de caracteres. Pode ser 1 ou 2. Valor padrão: 1.
 * @param {string} [parityBits] Tipo do método de paridade usado para detectar erros na
 * transmissão. Pode ser: 'odd', 'even' ou 'none' (sem paridade).
 * Valor padrão: 'none'.
 * @param {string} [flowControl] Tipo de controle de fluxo, Pode ser: 'hardware',
 * 'software' ou 'none'(sem controle de fluxo). Valor padrão: 'none'.
 * @constructor
 */
declare function SerialPort(
    port: number | string,
    baudRate?: number,
    dataBits?: number,
    stopBits?: number,
    parityBits?: string,
    flowControl?: string
): void;
declare class SerialPort {
    /**
     * @typedef {import('../log/Logger')} Logger
     * @private
     */
    /**
     * Classe que possibilita a comunicação por meio de portas seriais.
     * @param {number|string} port Nome ou número da porta serial que será aberta para comunicação.
     * Caso apenas o número tenha sido informado, será usado o prefixo 'COM' no windows e '/dev/ttyUSB'
     * no linux.
     * @param {number} [baudRate] Velocidade da transmissão dos dados entre os equipamentos que
     * usam comunicação serial. A velocidade da porta e a velocidade do equipamento precisam ser
     * iguais, alguns equipamentos podem detectar automaticamente a velocidade da porta serial.
     * Valor padrão: 9600 bits/s.
     * @param {number} [dataBits] Número de bits usados para representar um caractere. Pode ser
     * 5 (para Código Baudot), 6 (Usado raramente), 7 (para true ASCII) ou 8 (para qualquer
     * tipo de dados, pois este valor confere com o tamanho de um byte).
     * Valor padrão: 8 bits.
     * @param {number} [stopBits] Quantidade de bits enviados no final de cada caractere que
     * permitem o equipamento receptor do sinal detectar o fim do caractere e re-sincronizar com
     * a stream de caracteres. Pode ser 1 ou 2. Valor padrão: 1.
     * @param {string} [parityBits] Tipo do método de paridade usado para detectar erros na
     * transmissão. Pode ser: 'odd', 'even' ou 'none' (sem paridade).
     * Valor padrão: 'none'.
     * @param {string} [flowControl] Tipo de controle de fluxo, Pode ser: 'hardware',
     * 'software' ou 'none'(sem controle de fluxo). Valor padrão: 'none'.
     * @constructor
     */
    constructor(
        port: number | string,
        baudRate?: number,
        dataBits?: number,
        stopBits?: number,
        parityBits?: string,
        flowControl?: string
    );
    /**
     * Nome da porta serial.
     * @type {string}
     */
    portName: string;
    /**
     * Obtém a velocidade da transmissão dos dados.
     * @type {number}
     */
    baudRate: number;
    /**
     * Obtém o número de bits usados para representar um caractere. Os possíveis valores
     * retornados são: 5, 6, 7 ou 8.
     * @type {number}
     */
    dataBits: number;
    /**
     * Define a quantidade de bits enviados no final de cada caractere.  Os possíveis
     * valores são: 1 ou 2.
     * @type {number}
     */
    stopBits: number;
    /**
     * Define o tipo do método de paridade usado para detectar erros na transmissão.
     * Os possíveis valores são: 'odd', 'even', ou 'none'.
     * @type {string}
     */
    parityBits: string;
    /**
     * Define o tipo de controle de fluxo. Pode ser: 'hardware', 'software' ou 'none'
     * (sem controle de fluxo).
     * @type {string}
     */
    flowControl: string;
    /**
     * Define o timeout de leitura em ms.
     * @type {number}
     */
    readTimeout: number;
    /**
     * Define o timeout de escrita em ms.
     * @type {number}
     */
    writeTimeout: number;
    /**
     * Define o timeout em ms entre bytes recebidos.
     *
     * **Importante:** esta propriedade é suportada apenas no Windows e o seu uso no Linux gera um erro.
     * @type {number}
     * @deprecated Utilize apenas a propriedade readTimeout.
     */
    readIntervalTimeout: number;
    /**
     * Define o multiplicador do cálculo do valor total de timeout de uma operação de leitura.
     *
     * O valor do timeout total de leitura em ms é calculado usando a seguinte expressão:
     *
     * `timeoutTotal = (readTotalTimeoutMultiplier * nBytesRead) + readTotalTimeoutConstant`
     *
     * **Importante:** esta propriedade é suportada apenas no Windows e o seu uso no Linux gera um erro.
     * @type {number}
     * @deprecated Utilize apenas a propriedade readTimeout.
     */
    readTotalTimeoutMultiplier: number;
    /**
     * Define a constante do cálculo do valor total de timeout de uma operação de leitura.
     *
     * O valor do timeout total de leitura em ms é calculado usando a seguinte expressão:
     *
     * `timeoutTotal = (readTotalTimeoutMultiplier * nBytesRead) + readTotalTimeoutConstant`
     *
     * **Importante:** esta propriedade é suportada apenas no Windows.
     * No Linux é equivalente a readTimeout.
     * @type {number}
     * @deprecated Utilize apenas a propriedade readTimeout.
     */
    readTotalTimeoutConstant: number;
    /**
     * Define o multiplicador do cálculo do valor total de timeout de uma operação de escrita.
     *
     * O valor do timeout total de escrita em ms é calculado usando a seguinte expressão:
     *
     * `timeoutTotal = (writeTotalTimeoutMultiplier * nBytesWrote) + writeTotalTimeoutConstant`
     *
     * **Importante:** esta propriedade é suportada apenas no Windows e o seu uso no Linux gera um erro.
     * @type {number}
     * @deprecated Utilize apenas a propriedade writeTimeout.
     */
    writeTotalTimeoutMultiplier: number;
    /**
     * Define a constante do cálculo do valor total de timeout de uma operação de escrita.
     *
     * O valor do timeout total de escrita em ms é calculado usando a seguinte expressão:
     *
     * `timeoutTotal = (writeTotalTimeoutMultiplier * nBytesWrote) + writeTotalTimeoutConstant`
     *
     * **Importante:** esta propriedade é suportada apenas no Windows.
     * No Linux é equivalente a writeTimeout.
     * @type {number}
     * @deprecated Utilize apenas a propriedade writeTimeout.
     */
    writeTotalTimeoutConstant: number;
    /**
     * Lê uma quantidade de bytes da porta serial.
     * A quantidade de bytes lidos é entre 0 e `maxLen`. Resultado com tamanho 0 indica que a leitura
     * chegou ao fim (EOF) ou que `maxLen` passado foi 0.
     *
     * Não é um erro que o tamanho do valor retornado seja menor que `maxLen`, mesmo que a leitura não
     * tenha chegado ao fim ainda. Isto pode acontecer caso um número menor de bytes esteja disponível
     * ou a leitura tenha sido interrompida por um sinal.
     *
     * @example
     * const SerialPort = require('@nginstack/engine/lib/io/SerialPort.js');
     * // O código abaixo lê 50 bytes da porta serial COM4 e guarda em result
     * const serial = new SerialPort('COM4', 9600, 8, 1, 'none', 'none');
     * let result = '';
     * let partial = '';
     * const maxLen = 50;
     * do {
     *   partial = serial.read(maxLen - result.length);
     *   result += partial;
     * } while (result.length < maxLen && partial.length > 0);
     *
     * @example
     * const SerialPort = require('@nginstack/engine/lib/io/SerialPort.js');
     * // O código abaixo lê 42 bytes da porta serial /dev/ttyS0 e guarda em result
     * const serial = new SerialPort('/dev/ttyS0');
     * let result = '';
     * const maxLen = 42;
     * while (result.length < maxLen) {
     *   let partial = serial.read(maxLen - result.length);
     *   if (partial.length === 0) {
     *     break;
     *   }
     *   result += partial;
     * }
     *
     * @param {number} maxLen Quantidade máxima de bytes que podem ser lidos da porta serial.
     * @return {string} Resultado da leitura da porta serial. Esta função retorna os bytes lidos no
     * formato conhecido por "Binary String", onde cada caractere da *string* representa um
     * byte do conteúdo binário. Para conteúdos binários ou textos que não sejam codificados em
     * ASCII, pode ser necessário a recodificação do valor retornado.
     */
    read(maxLen: number): string;
    /**
     * Escreve o conteúdo completo do buffer na porta serial.
     *
     * Caso a escrita seja interrompida por qualquer motivo, a função gera erro.
     *
     * @example
     * const SerialPort = require('@nginstack/engine/lib/io/SerialPort.js');
     * // O código abaixo escreve a string "Hello World!" na porta serial COM4
     * const serial = new SerialPort('COM4', 9600, 8, 1, 'none', 'none');
     * const content = 'Hello World!';
     * serial.write(content);
     *
     * @param {string|ArrayBuffer|Uint8Array} buffer Bytes que serão transmitidos para a porta serial.
     */
    write(buffer: string | ArrayBuffer | Uint8Array): void;
    /**
     * Escreve o conteúdo completo do buffer acrescido de quebra de linha na porta serial.
     *
     * *Quebra de linha acrescida: 0x13(CR) e 0x10(LF) para Windows. 0x10(LF) para Linux.*
     *
     * @example
     * const SerialPort = require('@nginstack/engine/lib/io/SerialPort.js');
     * // O código abaixo escreve a string "Hello World!\r\n" na porta serial COM4
     * let serial = new SerialPort('COM4');
     * const content = 'Hello World!';
     * serial.writeln(content);
     *
     * @param {string|ArrayBuffer|Uint8Array} buffer Bytes que serão transmitidos para a porta serial.
     */
    writeln(buffer: string | ArrayBuffer | Uint8Array): void;
    /**
     * Libera todos os threads aguardando uma leitura/escrita na porta serial e limpa os buffers.
     */
    clear(): void;
    /**
     * Fecha a comunicação com a porta serial.
     */
    close(): void;
    /**
     * Lê o estado da linha *Clear To Send* (CTS).
     *
     * Esta linha é normalmente usada para controle de fluxo em conjunto com a linha RTS.
     * Um sinal afirmativo indica que o receptor está pronto para receber dados.
     *
     * **Observação:** esta é uma opção avançada que permite implementar um controle de fluxo de
     * hardware customizado. Utilize apenas em dispositivos que não implementam os fluxos padronizados
     * de "hardware" ou "software", que podem ser configurados pela opção `flowControl`.
     *
     * @return {boolean} Estado da linha.
     */
    getCTS(): boolean;
    /**
     * Atribui um estado à linha *Ready To Send* (RTS).
     *
     * Esta linha é normalmente usada para controle de fluxo em conjunto com a linha CTS.
     * Atribuir falso limpa o sinal. Atribuir verdadeiro envia um sinal afirmativo,
     * indicando que o transmissor está pronto para enviar dados.
     *
     * **Observação:** esta é uma opção avançada que permite implementar um controle de fluxo de
     * hardware customizado. Utilize apenas em dispositivos que não implementam os fluxos padronizados
     * de "hardware" ou "software", que podem ser configurados pela opção `flowControl`.
     *
     * @param {boolean} state Estado a ser atribuído à linha.
     */
    setRTS(state: boolean): void;
    /**
     * Lê o estado da linha *Data Set Ready* (DSR).
     *
     * Esta linha possui diferentes usos a depender da aplicação, mas é normalmente usada para
     * *handshaking* ou controle de fluxo em conjunto com a linha DTR.
     *
     * **Observação:** esta é uma opção avançada que permite implementar um controle de fluxo de
     * hardware customizado. Utilize apenas em dispositivos que não implementam os fluxos padronizados
     * de "hardware" ou "software", que podem ser configurados pela opção `flowControl`.
     *
     * @return {boolean} Estado da linha.
     */
    getDSR(): boolean;
    /**
     * Atribui um estado à linha *Data Terminal Ready* (DTR).
     *
     * Esta linha possui diferentes usos a depender da aplicação, mas é normalmente usada para
     * *handshaking* ou controle de fluxo em conjunto com a linha DSR. A porta é criada com DTR
     * verdadeiro para manter compatibilidade com dispositivos antigos que somente enviam dados
     * quando este sinal está ativo.
     *
     * **Observação:** esta é uma opção avançada que permite implementar um controle de fluxo de
     * hardware customizado. Utilize apenas em dispositivos que não implementam os fluxos padronizados
     * de "hardware" ou "software", que podem ser configurados pela opção `flowControl`.
     *
     * @param {boolean} state Estado a ser atribuído à linha.
     */
    setDTR(state: boolean): void;
}
declare namespace SerialPort {
    export { getAvailablePorts, logAvailablePorts, Logger, SerialPortInfo };
}
/**
 * Informações sobre uma porta serial. Objeto retornado pelo método
 * {@link SerialPort.getAvailablePorts}.
 * @typedef {Object} SerialPortInfo
 * @property {string} manufacturer Nome da empresa desenvolvedora do driver.
 * @property {string} description Nome de exibição da porta serial. Exemplo: "Dispositivo
 * Serial USB".
 * @property {string} portName Nome da porta serial. Exemplo: "COM1".
 * @property {string} systemLocation Localização da porta serial no sistema operacional.
 * @property {boolean} isBusy Indica se a porta serial encontra-se aberta.
 * @property {number} productIdentifier Identificador numérico do produto.
 * @property {number} vendorIdentifier Identificador numérico do fabricante.
 * @property {string} serialNumber Identificador único do equipamento. Será uma string vazia caso
 * não haja um.
 */
/**
 * Obtém a relação de portas seriais disponíveis no computador onde o Engine está sendo executado.
 * Será retornado um array de objetos com as seguintes propriedades:
 * @return {SerialPortInfo[]} Relação de portas seriais disponíveis no computador onde o
 * Engine está sendo executado.
 * @see SerialPortInfo
 * @see SerialPort.logAvailablePorts
 */
declare function getAvailablePorts(): SerialPortInfo[];
/**
 * Registra no arquivo de log informações sobre as portas seriais disponíveis no computador
 * onde o Engine está sendo executado.
 * @param {Logger} [logger] Log onde deverão ser registradas as informações. Caso não seja
 * informado, elas serão registradas na categoria de log *application*.
 * @see SerialPort.getAvailablePorts
 */
declare function logAvailablePorts(logger?: Logger): void;
type Logger = import('../log/Logger');
/**
 * Informações sobre uma porta serial. Objeto retornado pelo método
 * {@link SerialPort.getAvailablePorts}.
 */
interface SerialPortInfo {
    /**
     * Nome da empresa desenvolvedora do driver.
     */
    manufacturer: string;
    /**
     * Nome de exibição da porta serial. Exemplo: "Dispositivo
     * Serial USB".
     */
    description: string;
    /**
     * Nome da porta serial. Exemplo: "COM1".
     */
    portName: string;
    /**
     * Localização da porta serial no sistema operacional.
     */
    systemLocation: string;
    /**
     * Indica se a porta serial encontra-se aberta.
     */
    isBusy: boolean;
    /**
     * Identificador numérico do produto.
     */
    productIdentifier: number;
    /**
     * Identificador numérico do fabricante.
     */
    vendorIdentifier: number;
    /**
     * Identificador único do equipamento. Será uma string vazia caso
     * não haja um.
     */
    serialNumber: string;
}
