export = removeXssInjection;
/**
 * Remove as tags e atributos que podem ser utilizados para injetar scripts em um código HTML.
 * @param {string} content Conteúdo a ter as tags e atributos removidos.
 * @param {boolean} [preserveSymbols=false] Determina se os símbolos "<", ">" e "&" devem
 * ser preservados.
 * @return {string} Conteúdo sem tags e atributos que podem ser utilizados para executar scripts
 * JavaScript no cliente.
 */
declare function removeXssInjection(content: string, preserveSymbols?: boolean): string;
declare namespace removeXssInjection {
    /** @private */
    function disable(): void;
}
