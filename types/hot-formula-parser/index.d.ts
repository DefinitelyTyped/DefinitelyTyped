/**
 * The class used to perform the formula parsing.
 *
 * {@link https://www.npmjs.com/package/hot-formula-parser | See the docs.}
 */
export class Parser {
    /**
     * Parse formula expression.
     *
     * @param expression - to parse.
     * @returns Returns an object with two properties `error` and `result`.
     */
    parse(value: string): { result: string | number | boolean | null; error: FormulaErrorId | null };

    /**
     * Hook that listens to reference calls by the {@link parse} method and allows for side effects on that event.
     *
     * @param hook - hook's name.
     * @param handler - the callback to produce the side effect.
     */
    on(hook: "callVariable", handler: (name: string, done: DoneCallback) => void): void;
    on(hook: "callFunction", handler: (name: string, params: unknown, done: DoneCallback) => void): void;
    on(
        hook: "callCellValue",
        handler: (cellCoord: { row: Coordinate; label: string; column: Coordinate }, done: DoneCallback) => void,
    ): void;
    on(
        hook: "callRangeValue",
        handler: (
            startCellCoord: { row: Coordinate; label: string; column: Coordinate },
            endCellCoord: { row: Coordinate; label: string; column: Coordinate },
            done: DoneCallback,
        ) => void,
    ): void;

    /**
     * Allows for the definition of new functions. If the name given to the new function is one of the {@link SUPPORTED_FORMULAS}, the latter will be overwritten.
     *
     * @param name - the function name.
     * @param handler - the callback to produce the side effect.
     * @returns This instance of {@link Parser}
     */
    setFunction(name: string, handler: (params: unknown) => unknown): Parser;

    /**
     * Retrieves the defined function.
     *
     * @param name - the function name.
     * @returns the handler for the defined function.
     */
    getFunction(name: string): (params: unknown) => unknown;

    /**
     * Allows for the definition of new variables. If new definitions variables have the same name as old ones, the latter will be overwritten.
     * Built-in variables are `TRUE`, `FALSE` and `NULL`.
     *
     * @param name - the variable name.
     * @param value - the value given to the variable.
     * @returns This instance of {@link Parser}
     */
    setVariable(name: string, value: unknown): Parser;

    /**
     * Retrieves the defined variable.
     *
     * @param name - the variable name.
     * @returns - the value given to the variable.
     */
    getVariable(name: string): unknown;
}

export interface Coordinate {
    index: number;
    label: string;
    isAbsolute: boolean;
}

/**
 * The value passed to this function will overwrite the original value that caused the hook the be called.
 *
 * @param value - the overwriting value.
 */
export type DoneCallback = (value: unknown) => void;

/**
 * Extract cell coordinates. The inverse operation of {@link toLabel}.
 *
 * @param label Cell coordinates (eg. `A1`, `$B6`, `$B$4`).
 * @returns a tuple of {@link Coordinate} representing row and column coordinates, respectively.
 */
export function extractLabel(label: string): [Coordinate, Coordinate];

/**
 * Get the cell label given its coordinates. The inverse operation of {@link extractLabel}.
 *
 * @param row - the row coordinates.
 * @param column - the column coordinates.
 * @returns the cell label (eg. `A1`, `$B6`, `$B$4`).
 */
export function toLabel(
    row: { index: number; isAbsolute?: boolean },
    column: { index: number; isAbsolute?: boolean },
): string;

/**
 * Convert column index to label. The inverse operation of {@link columnLabelToIndex}.
 *
 * @param column zero-based column index.
 * @returns column label (eg. `ABB`, `CNQ`).
 */
export function columnIndexToLabel(column: number): string;

/**
 * Convert column label to index.
 *
 * @param label - column label (eg. `ABB`, `CNQ`). The inverse operation of {@link columnIndexToLabel}.
 * @returns -1 if label is not recognized otherwise proper column zero-based index.
 */
export function columnLabelToIndex(label: string): number;

/**
 * Convert row index to label. The inverse operation of {@link rowLabelToIndex}.
 *
 * @param row zero-based row index.
 * @returns row label (eq. `1`, `5`).
 */
export function rowIndexToLabel(row: number): string;

/**
 * Convert row label to index. The inverse operation of {@link rowIndexToLabel}.
 *
 * @param label - row label (eq. `1`, `5`).
 * @returns -1 if label is not recognized otherwise proper row zero-based index.
 */
export function rowLabelToIndex(label: string): number;

export const ERROR: "ERROR";
export const ERROR_DIV_ZERO: "DIV/0";
export const ERROR_NAME: "NAME";
export const ERROR_NOT_AVAILABLE: "N/A";
export const ERROR_NULL: "NULL";
export const ERROR_NUM: "NUM";
export const ERROR_REF: "REF";
export const ERROR_VALUE: "VALUE";

export type FormulaErrorId = "#ERROR!" | "#DIV/0!" | "#NAME?" | "#N/A" | "#NULL!" | "#NUM!" | "#REF!" | "#VALUE!";
export type FormulaErrorType =
    | typeof ERROR
    | typeof ERROR_DIV_ZERO
    | typeof ERROR_NAME
    | typeof ERROR_NOT_AVAILABLE
    | typeof ERROR_NULL
    | typeof ERROR_NUM
    | typeof ERROR_REF
    | typeof ERROR_VALUE;

/**
 * Return the error id based, given the error type or id.
 *
 * @param error - error type or error id.
 * @returns corresponding error id, `null` if not found.
 */
export function error(error: FormulaErrorType | FormulaErrorId): FormulaErrorId | null;

export const SUPPORTED_FORMULAS: readonly [
    "ABS",
    "ACCRINT",
    "ACOS",
    "ACOSH",
    "ACOT",
    "ACOTH",
    "ADD",
    "AGGREGATE",
    "AND",
    "ARABIC",
    "ARGS2ARRAY",
    "ASIN",
    "ASINH",
    "ATAN",
    "ATAN2",
    "ATANH",
    "AVEDEV",
    "AVERAGE",
    "AVERAGEA",
    "AVERAGEIF",
    "AVERAGEIFS",
    "BASE",
    "BESSELI",
    "BESSELJ",
    "BESSELK",
    "BESSELY",
    "BETA.DIST",
    "BETA.INV",
    "BETADIST",
    "BETAINV",
    "BIN2DEC",
    "BIN2HEX",
    "BIN2OCT",
    "BINOM.DIST",
    "BINOM.DIST.RANGE",
    "BINOM.INV",
    "BINOMDIST",
    "BITAND",
    "BITLSHIFT",
    "BITOR",
    "BITRSHIFT",
    "BITXOR",
    "CEILING",
    "CEILINGMATH",
    "CEILINGPRECISE",
    "CHAR",
    "CHISQ.DIST",
    "CHISQ.DIST.RT",
    "CHISQ.INV",
    "CHISQ.INV.RT",
    "CHOOSE",
    "CHOOSE",
    "CLEAN",
    "CODE",
    "COLUMN",
    "COLUMNS",
    "COMBIN",
    "COMBINA",
    "COMPLEX",
    "CONCATENATE",
    "CONFIDENCE",
    "CONFIDENCE.NORM",
    "CONFIDENCE.T",
    "CONVERT",
    "CORREL",
    "COS",
    "COSH",
    "COT",
    "COTH",
    "COUNT",
    "COUNTA",
    "COUNTBLANK",
    "COUNTIF",
    "COUNTIFS",
    "COUNTIN",
    "COUNTUNIQUE",
    "COVARIANCE.P",
    "COVARIANCE.S",
    "CSC",
    "CSCH",
    "CUMIPMT",
    "CUMPRINC",
    "DATE",
    "DATEVALUE",
    "DAY",
    "DAYS",
    "DAYS360",
    "DB",
    "DDB",
    "DEC2BIN",
    "DEC2HEX",
    "DEC2OCT",
    "DECIMAL",
    "DEGREES",
    "DELTA",
    "DEVSQ",
    "DIVIDE",
    "DOLLARDE",
    "DOLLARFR",
    "E",
    "EDATE",
    "EFFECT",
    "EOMONTH",
    "EQ",
    "ERF",
    "ERFC",
    "EVEN",
    "EXACT",
    "EXP",
    "EXPON.DIST",
    "EXPONDIST",
    "F.DIST",
    "F.DIST.RT",
    "F.INV",
    "F.INV.RT",
    "FACT",
    "FACTDOUBLE",
    "FALSE",
    "FDIST",
    "FDISTRT",
    "FIND",
    "FINV",
    "FINVRT",
    "FISHER",
    "FISHERINV",
    "FLATTEN",
    "FLOOR",
    "FORECAST",
    "FREQUENCY",
    "FV",
    "FVSCHEDULE",
    "GAMMA",
    "GAMMA.DIST",
    "GAMMA.INV",
    "GAMMADIST",
    "GAMMAINV",
    "GAMMALN",
    "GAMMALN.PRECISE",
    "GAUSS",
    "GCD",
    "GEOMEAN",
    "GESTEP",
    "GROWTH",
    "GTE",
    "HARMEAN",
    "HEX2BIN",
    "HEX2DEC",
    "HEX2OCT",
    "HOUR",
    "HTML2TEXT",
    "HYPGEOM.DIST",
    "HYPGEOMDIST",
    "IF",
    "IMABS",
    "IMAGINARY",
    "IMARGUMENT",
    "IMCONJUGATE",
    "IMCOS",
    "IMCOSH",
    "IMCOT",
    "IMCSC",
    "IMCSCH",
    "IMDIV",
    "IMEXP",
    "IMLN",
    "IMLOG10",
    "IMLOG2",
    "IMPOWER",
    "IMPRODUCT",
    "IMREAL",
    "IMSEC",
    "IMSECH",
    "IMSIN",
    "IMSINH",
    "IMSQRT",
    "IMSUB",
    "IMSUM",
    "IMTAN",
    "INT",
    "INTERCEPT",
    "INTERVAL",
    "IPMT",
    "IRR",
    "ISBINARY",
    "ISBLANK",
    "ISEVEN",
    "ISLOGICAL",
    "ISNONTEXT",
    "ISNUMBER",
    "ISODD",
    "ISODD",
    "ISOWEEKNUM",
    "ISPMT",
    "ISTEXT",
    "JOIN",
    "KURT",
    "LARGE",
    "LCM",
    "LEFT",
    "LEN",
    "LINEST",
    "LN",
    "LOG",
    "LOG10",
    "LOGEST",
    "LOGNORM.DIST",
    "LOGNORM.INV",
    "LOGNORMDIST",
    "LOGNORMINV",
    "LOWER",
    "LT",
    "LTE",
    "MATCH",
    "MAX",
    "MAXA",
    "MEDIAN",
    "MID",
    "MIN",
    "MINA",
    "MINUS",
    "MINUTE",
    "MIRR",
    "MOD",
    "MODE.MULT",
    "MODE.SNGL",
    "MODEMULT",
    "MODESNGL",
    "MONTH",
    "MROUND",
    "MULTINOMIAL",
    "MULTIPLY",
    "NE",
    "NEGBINOM.DIST",
    "NEGBINOMDIST",
    "NETWORKDAYS",
    "NOMINAL",
    "NORM.DIST",
    "NORM.INV",
    "NORM.S.DIST",
    "NORM.S.INV",
    "NORMDIST",
    "NORMINV",
    "NORMSDIST",
    "NORMSINV",
    "NOT",
    "NOW",
    "NPER",
    "NPV",
    "NUMBERS",
    "OCT2BIN",
    "OCT2DEC",
    "OCT2HEX",
    "ODD",
    "OR",
    "PDURATION",
    "PEARSON",
    "PERCENTILEEXC",
    "PERCENTILEINC",
    "PERCENTRANKEXC",
    "PERCENTRANKINC",
    "PERMUT",
    "PERMUTATIONA",
    "PHI",
    "PI",
    "PMT",
    "POISSON.DIST",
    "POISSONDIST",
    "POW",
    "POWER",
    "PPMT",
    "PROB",
    "PRODUCT",
    "PROPER",
    "PV",
    "QUARTILE.EXC",
    "QUARTILE.INC",
    "QUARTILEEXC",
    "QUARTILEINC",
    "QUOTIENT",
    "RADIANS",
    "RAND",
    "RANDBETWEEN",
    "RANK.AVG",
    "RANK.EQ",
    "RANKAVG",
    "RANKEQ",
    "RATE",
    "REFERENCE",
    "REGEXEXTRACT",
    "REGEXMATCH",
    "REGEXREPLACE",
    "REPLACE",
    "REPT",
    "RIGHT",
    "ROMAN",
    "ROUND",
    "ROUNDDOWN",
    "ROUNDUP",
    "ROW",
    "ROWS",
    "RRI",
    "RSQ",
    "SEARCH",
    "SEC",
    "SECH",
    "SECOND",
    "SERIESSUM",
    "SIGN",
    "SIN",
    "SINH",
    "SKEW",
    "SKEW.P",
    "SKEWP",
    "SLN",
    "SLOPE",
    "SMALL",
    "SPLIT",
    "SPLIT",
    "SQRT",
    "SQRTPI",
    "STANDARDIZE",
    "STDEV.P",
    "STDEV.S",
    "STDEVA",
    "STDEVP",
    "STDEVPA",
    "STDEVS",
    "STEYX",
    "SUBSTITUTE",
    "SUBTOTAL",
    "SUM",
    "SUMIF",
    "SUMIFS",
    "SUMPRODUCT",
    "SUMSQ",
    "SUMX2MY2",
    "SUMX2PY2",
    "SUMXMY2",
    "SWITCH",
    "SYD",
    "T",
    "T.DIST",
    "T.DIST.2T",
    "T.DIST.RT",
    "T.INV",
    "T.INV.2T",
    "TAN",
    "TANH",
    "TBILLEQ",
    "TBILLPRICE",
    "TBILLYIELD",
    "TDIST",
    "TDIST2T",
    "TDISTRT",
    "TIME",
    "TIMEVALUE",
    "TINV",
    "TINV2T",
    "TODAY",
    "TRANSPOSE",
    "TREND",
    "TRIM",
    "TRIMMEAN",
    "TRUE",
    "TRUNC",
    "UNICHAR",
    "UNICODE",
    "UNIQUE",
    "UPPER",
    "VAR.P",
    "VAR.S",
    "VARA",
    "VARP",
    "VARPA",
    "VARS",
    "WEEKDAY",
    "WEEKNUM",
    "WEIBULL.DIST",
    "WEIBULLDIST",
    "WORKDAY",
    "XIRR",
    "XNPV",
    "XOR",
    "YEAR",
    "YEARFRAC",
];
