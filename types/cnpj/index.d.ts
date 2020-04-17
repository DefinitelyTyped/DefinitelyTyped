// Type definitions for cnpj 3.0
// Project: https://github.com/gabrielizaias/cnpj
// Definitions by: Miguel A. Almeida <https://github.com/migueldevmt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Verifica validade do cnpj
 * @param cnpj o CNPJ a ser validado.
 * @returns Verdadeiro ou falso indicando a validade.
 */
export function validate(cnpj: string): boolean;

/**
 * Formata o cnpj com pontos e barra
 * @param cnpj o CNPJ a ser formatado.
 * @returns A string formatado.
 */
export function format(cnpj: number): string;

/**
 * Gera um cnpj aleatorio e valido
 * @returns CNPJ gerado
 */
export function generate(): string;
