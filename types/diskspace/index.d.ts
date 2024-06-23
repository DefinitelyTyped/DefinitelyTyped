/**
 * @param err RU: Ошибка при выполнении  EN: Runtime error
 * @param result RU: Результат проверки дискового пространства   EN: The result of the diskspace check
 */
export type Callback = (err: Error | null, result: Result) => void;

export interface Result {
    /**
     * RU: Это то, сколько диск имеет полностью.
     *
     * EN: Is how much the drive has totally.
     */
    total: string;
    /**
     * RU:
     *
     * Это указанная часть диска как используемая.
     * На *nix это прямо из команды, в Windows это вычисляется из `df -kresult.total - result.free`
     *
     * EN:
     *
     * Is how much of the drive is reported as used.
     * On *nix this is straight from the command, on Windows it's calculated from `df -kresult.total - result.free`
     */
    used: number;
    /**
     * RU: Это то, сколько свободного места у вас есть.
     *
     * EN: Is how much free space you have.
     */
    free: string;
    /**
     * RU:
     *
     * На самом деле не так полезен, если вы не хотите отлаживать.
     * * NOTFOUND - Диск не найден, значения пространства будут 0
     * * READY - Диск готов
     * * NOTREADY - Диск не готов, значения пространства будут 0
     * * STDERR - некоторая ошибка, вывод ее был записан на консоль.
     *
     * EN:
     *
     * Isn't really that useful unless you want to debug.
     * * NOTFOUND - Disk was not found, the space values will be 0
     * * READY - The drive is ready
     * * NOTREADY - The drive isn't ready, the space values will be 0
     * * STDERR - some error, the output of it was logged to the console.
     */
    status: "NOTFOUND" | "READY" | "NOTREADY" | "STDERR";
}

/**
 * RU:
 *
 * В Windows вы меняете `C` на букву диска, которую вы хотите проверить. В Linux вы используете путь монтирования, например `/`
 *
 * Примечание: Это не удастся на жестких дисках размером более 9 петабайт.
 *
 * EN:
 *
 *  On Windows you change `C` to the drive letter you want to check. On Linux you use the mount path eg `/`
 *
 * Notes: This will fail on hard drives bigger than 9 petabytes.
 * @param drive RU: Наименование диска  EN: Name disk
 * @param callback RU: Callback-функция EN: Callback-function
 */
// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export function check<T extends string = "C" | "/">(drive: T, callback: Callback): void;
