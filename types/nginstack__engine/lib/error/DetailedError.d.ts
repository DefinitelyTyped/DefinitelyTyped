export = DetailedError;
/**
 * Classe de erro com mais detalhes que a nativa `Error`. Ela permite indicar para o usuário
 * uma possível solução para o erro e separa os detalhes técnicos da mensagem a ser exibida para
 * o usuário.
 *
 * Em versões antigas do sistema, o quarto parâmetro deste construtor (atualmente o `code`)
 * recebia a localização do erro e depois passou a aceitar um código numérico do erro,
 * guardado na propriedade `errorCode`. Por motivos de compatibilidade, códigos que contenham
 * os caracteres ".", "(", "/" e " " (espaço) serão interpretados como uma localização do
 * erro em vez de um código de erro, sendo atribuídos à propriedade `sourceLocation` em vez
 * `code`. Devido a esse tratamento especial, esses caracteres não podem ser utilizados
 * em códigos de erro. Esse tratamento de compatibilidade será removido em versões futuras
 * do sistema, portanto é recomendado que códigos que informem uma localização do erro
 * sejam revistos para deixar de informar esse parâmetro.
 *
 * Esta classe também é publicada pelo Engine por meio da variável global **DetailedError**.
 * @param {string} error Mensagem de erro a ser exibida para o usuário.
 * @param {string} [solution] Procedimento que o usuário deverá realizar para que
 * o erro não seja produzido novamente.
 * @param {string} [details] Detalhes técnicos do erro. Detalhes que sejam de interesse
 * exclusivo de desenvolvedores devem ser preferencialmente informados por este parâmetro em vez
 * da mensagem de erro.
 * @param {string|number} [code] Código que identifica o erro, permitindo que ele possa ser
 * testado e tratado sem a inspeção da mensagem de erro.
 * @constructor
 * @extends Error
 */
declare function DetailedError(
    error: string,
    solution?: string,
    details?: string,
    code?: string | number
): void;
declare class DetailedError {
    /**
     * Classe de erro com mais detalhes que a nativa `Error`. Ela permite indicar para o usuário
     * uma possível solução para o erro e separa os detalhes técnicos da mensagem a ser exibida para
     * o usuário.
     *
     * Em versões antigas do sistema, o quarto parâmetro deste construtor (atualmente o `code`)
     * recebia a localização do erro e depois passou a aceitar um código numérico do erro,
     * guardado na propriedade `errorCode`. Por motivos de compatibilidade, códigos que contenham
     * os caracteres ".", "(", "/" e " " (espaço) serão interpretados como uma localização do
     * erro em vez de um código de erro, sendo atribuídos à propriedade `sourceLocation` em vez
     * `code`. Devido a esse tratamento especial, esses caracteres não podem ser utilizados
     * em códigos de erro. Esse tratamento de compatibilidade será removido em versões futuras
     * do sistema, portanto é recomendado que códigos que informem uma localização do erro
     * sejam revistos para deixar de informar esse parâmetro.
     *
     * Esta classe também é publicada pelo Engine por meio da variável global **DetailedError**.
     * @param {string} error Mensagem de erro a ser exibida para o usuário.
     * @param {string} [solution] Procedimento que o usuário deverá realizar para que
     * o erro não seja produzido novamente.
     * @param {string} [details] Detalhes técnicos do erro. Detalhes que sejam de interesse
     * exclusivo de desenvolvedores devem ser preferencialmente informados por este parâmetro em vez
     * da mensagem de erro.
     * @param {string|number} [code] Código que identifica o erro, permitindo que ele possa ser
     * testado e tratado sem a inspeção da mensagem de erro.
     * @constructor
     * @extends Error
     */
    constructor(error: string, solution?: string, details?: string, code?: string | number);
    error: string;
    solution: string;
    details: string;
    sourceLocation: string;
    code: string | number;
    errorCode: string | number;
    message: string;
}
