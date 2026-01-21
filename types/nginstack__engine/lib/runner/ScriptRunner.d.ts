export = ScriptRunner;
/**
 * @typedef {import('../dataset/DataSet')} DataSet
 * @private
 */
/**
 * @typedef {import('../session/Session')} Session
 * @private
 */
/**
 * Esta classe é responsável por criar um ambiente JavaScript isolado do atual, possibilitando
 * a execução de scripts e sua manipulação.
 *
 * Deve-se observar que os recursos alocados pelo ambiente JavaScript utilizado internamente
 * pelo ScriptRunner podem ser altos e a liberação desses recursos ocorrerá apenas quando esta
 * instância deixar de ser referenciada por outros objetos, momento em que o *garbage collector* do
 * JavaScript irá destruir o objeto e liberar os recursos associados a ele. Por esse motivo, devem
 * ser evitadas referências às instâncias desta classe quando elas não estiverem mais em uso. A
 * liberação imediata dos recursos também pode ser solicitada por meio do método {@link #dispose},
 * sendo recomendado o seu uso em um bloco try..finally.
 *
 * @example
 *  // Executa um código JavaScript compatível apenas com o runtime V8
 *  const ScriptRunner = require('@nginstack/engine/lib/runner/ScriptRunner');
 *
 *  const scriptRunner = new ScriptRunner('test.js', { runtime: 'v8' });
 *  try {
 *    scriptRunner.callFunction('test'); // 'is-v8'
 *  } finally {
 *    scriptRunner.dispose();
 *  }
 *
 *  // test.js source
 *  /*
 *  class Test {
 *    get id() {
 *      return 'is-v8';
 *    }
 *  }
 *  function test() {
 *    const t = new Test();
 *    return t.id;
 *  }
 *  *\/
 *
 * @example
 *  // Executa um código JavaScript compatível apenas com o runtime V8
 *  const ScriptRunner = require('@nginstack/engine/lib/runner/ScriptRunner');
 *
 *  const scriptRunner = new ScriptRunner('test.js');
 *  try {
 *    scriptRunner.callFunction('test'); // 'is-v8'
 *  } finally {
 *    scriptRunner.dispose();
 *  }
 *
 *  // test.js source
 *  /*
 *  class Test {
 *    get id() {
 *      return 'is-v8';
 *    }
 *  }
 *  function test() {
 *    const t = new Test();
 *    return t.id;
 *  }
 *  *\/
 *
 * @example
 *  // Restaura uma sessão stateful a partir do seu id
 *  const ScriptRunner = require('@nginstack/engine/lib/runner/ScriptRunner');
 *
 *  const sid = request.sid;
 *  const scriptRunner = new ScriptRunner('test.js', {
 *    sessionId: sid,
 *    waitTimeout: 60000
 *  });
 *  try {
 *    const data = scriptRunner.callFunction('test');
 *    response.contentType = 'application/json';
 *    response.write(JSON.stringify({
 *       success: true,
 *       data: data,
 *       sid: scriptRunner.sessionId
 *    }));
 *  } finally {
 *    scriptRunner.dispose();
 *  }
 * @param {string|number} fileId URI ou chave do script que se será executado.
 * @param {Object} [options] Opções do ambiente a ser criado.
 * @param {string} [options.runtime] Indica o runtime JavaScript que deve ser utilizado para
 * executar o script informado, podendo ser informado 'ije' ou 'v8'. Caso não seja informado,
 * será utilizado o runtime padrão do sistema, atualmente o 'ije'. Quando for informado um realm,
 * o tipo do ambiente será obtido a partir da configuração do realm, não podendo ser modificado
 * por este parâmetro.
 * @param {string} [options.realm] Indica que a sessão JavaScript que será utilizada para executar
 * o script deve ser obtida do pool de sessões stateless ou stateful indicado pelo realm. Deve-se
 * observar que quando um *pool* é utilizado, o ambiente JavaScript manterá o estado das
 * execuções anteriores. Também é importante que o método {@link #dispose} seja utilizado tão
 * logo o uso da instância seja concluído para que o ambiente JavaScript seja devolvido ao *pool*,
 * permitindo o seu reuso por outras instâncias.
 * @param {string} [options.sessionId] Identificador único da sessão JavaScript que será utilizada
 * para executar o script. Esta propriedade somente deve ser utilizada para recuperar sessões
 * criadas previamente em um `realm` do tipo `'stateful'`. Caso ela não seja informada, será
 * criada uma nova sessão cujo identificador pode ser obtido pela propriedade {@link #sessionId}.
 * Será gerado um erro caso não exista mais uma sessão com o identificador informado. A opção
 * `realm` passa a ser opcional quando `sessionId` é informado, pois o realm informado na
 * construção da sessão é preservado. Caso o `realm` também seja informado, ele deverá
 * ter o mesmo valor informado na construção do `ScriptRunner` que criou esta sessão.
 * @param {number} [options.waitTimeout] Tempo máximo de espera em milissegundos para que uma sessão
 * *stateful* em uso conclua a sua execução e possa ser utilizada para executar o script informado.
 * Caso não seja informado, será gerado um erro imediatamente no caso da sessão informada estar
 * em uso. Esta opção é utilizada apenas quando o `sessionId` é informado.
 * @constructor
 */
declare function ScriptRunner(
    fileId: string | number,
    options?: {
        runtime?: string;
        realm?: string;
        sessionId?: string;
        waitTimeout?: number;
    }
): void;
declare class ScriptRunner {
    /**
     * @typedef {import('../dataset/DataSet')} DataSet
     * @private
     */
    /**
     * @typedef {import('../session/Session')} Session
     * @private
     */
    /**
     * Esta classe é responsável por criar um ambiente JavaScript isolado do atual, possibilitando
     * a execução de scripts e sua manipulação.
     *
     * Deve-se observar que os recursos alocados pelo ambiente JavaScript utilizado internamente
     * pelo ScriptRunner podem ser altos e a liberação desses recursos ocorrerá apenas quando esta
     * instância deixar de ser referenciada por outros objetos, momento em que o *garbage collector* do
     * JavaScript irá destruir o objeto e liberar os recursos associados a ele. Por esse motivo, devem
     * ser evitadas referências às instâncias desta classe quando elas não estiverem mais em uso. A
     * liberação imediata dos recursos também pode ser solicitada por meio do método {@link #dispose},
     * sendo recomendado o seu uso em um bloco try..finally.
     *
     * @example
     *  // Executa um código JavaScript compatível apenas com o runtime V8
     *  const ScriptRunner = require('@nginstack/engine/lib/runner/ScriptRunner');
     *
     *  const scriptRunner = new ScriptRunner('test.js', { runtime: 'v8' });
     *  try {
     *    scriptRunner.callFunction('test'); // 'is-v8'
     *  } finally {
     *    scriptRunner.dispose();
     *  }
     *
     *  // test.js source
     *  /*
     *  class Test {
     *    get id() {
     *      return 'is-v8';
     *    }
     *  }
     *  function test() {
     *    const t = new Test();
     *    return t.id;
     *  }
     *  *\/
     *
     * @example
     *  // Executa um código JavaScript compatível apenas com o runtime V8
     *  const ScriptRunner = require('@nginstack/engine/lib/runner/ScriptRunner');
     *
     *  const scriptRunner = new ScriptRunner('test.js');
     *  try {
     *    scriptRunner.callFunction('test'); // 'is-v8'
     *  } finally {
     *    scriptRunner.dispose();
     *  }
     *
     *  // test.js source
     *  /*
     *  class Test {
     *    get id() {
     *      return 'is-v8';
     *    }
     *  }
     *  function test() {
     *    const t = new Test();
     *    return t.id;
     *  }
     *  *\/
     *
     * @example
     *  // Restaura uma sessão stateful a partir do seu id
     *  const ScriptRunner = require('@nginstack/engine/lib/runner/ScriptRunner');
     *
     *  const sid = request.sid;
     *  const scriptRunner = new ScriptRunner('test.js', {
     *    sessionId: sid,
     *    waitTimeout: 60000
     *  });
     *  try {
     *    const data = scriptRunner.callFunction('test');
     *    response.contentType = 'application/json';
     *    response.write(JSON.stringify({
     *       success: true,
     *       data: data,
     *       sid: scriptRunner.sessionId
     *    }));
     *  } finally {
     *    scriptRunner.dispose();
     *  }
     * @param {string|number} fileId URI ou chave do script que se será executado.
     * @param {Object} [options] Opções do ambiente a ser criado.
     * @param {string} [options.runtime] Indica o runtime JavaScript que deve ser utilizado para
     * executar o script informado, podendo ser informado 'ije' ou 'v8'. Caso não seja informado,
     * será utilizado o runtime padrão do sistema, atualmente o 'ije'. Quando for informado um realm,
     * o tipo do ambiente será obtido a partir da configuração do realm, não podendo ser modificado
     * por este parâmetro.
     * @param {string} [options.realm] Indica que a sessão JavaScript que será utilizada para executar
     * o script deve ser obtida do pool de sessões stateless ou stateful indicado pelo realm. Deve-se
     * observar que quando um *pool* é utilizado, o ambiente JavaScript manterá o estado das
     * execuções anteriores. Também é importante que o método {@link #dispose} seja utilizado tão
     * logo o uso da instância seja concluído para que o ambiente JavaScript seja devolvido ao *pool*,
     * permitindo o seu reuso por outras instâncias.
     * @param {string} [options.sessionId] Identificador único da sessão JavaScript que será utilizada
     * para executar o script. Esta propriedade somente deve ser utilizada para recuperar sessões
     * criadas previamente em um `realm` do tipo `'stateful'`. Caso ela não seja informada, será
     * criada uma nova sessão cujo identificador pode ser obtido pela propriedade {@link #sessionId}.
     * Será gerado um erro caso não exista mais uma sessão com o identificador informado. A opção
     * `realm` passa a ser opcional quando `sessionId` é informado, pois o realm informado na
     * construção da sessão é preservado. Caso o `realm` também seja informado, ele deverá
     * ter o mesmo valor informado na construção do `ScriptRunner` que criou esta sessão.
     * @param {number} [options.waitTimeout] Tempo máximo de espera em milissegundos para que uma sessão
     * *stateful* em uso conclua a sua execução e possa ser utilizada para executar o script informado.
     * Caso não seja informado, será gerado um erro imediatamente no caso da sessão informada estar
     * em uso. Esta opção é utilizada apenas quando o `sessionId` é informado.
     * @constructor
     */
    constructor(
        fileId: string | number,
        options?: {
            runtime?: string;
            realm?: string;
            sessionId?: string;
            waitTimeout?: number;
        }
    );
    /**
     * Identificador único da sessão JavaScript criada ou adquirida pelo ScriptRunner para executar
     * o script informado.
     * @type {string}
     */
    sessionId: string;
    /**
     * Identificador de rastreio da sessão JavaScript criada ou adquirida pelo ScriptRunner para
     * executar o script informado.
     *
     * Mais detalhes em
     * {@link module:@nginstack/engine/lib/session/Session~Session#trackingId Session.trackingId}.
     * @type {string}
     * @see module:@nginstack/engine/lib/session/Session~Session#trackingId
     * @see module:@nginstack/engine/lib/database/Database~Database#trackingId
     */
    trackingId: string;
    /**
     * Efetua login na sessão utilizando as credenciais de um usuário. Por padrão,
     * o ambiente recém criado será executado em nome do usuário "anonymous".
     * @param {string} userId Nome ou e-mail do usuário que será logado.
     * @param {string} password Senha do usuário que será logado.
     * @return {boolean} Indica se o login foi executado com sucesso.
     * @see #loginBySession
     * @see #loginByAuthToken
     */
    login(userId: string, password: string): boolean;
    /**
     * Efetua login utilizando o usuário da sessão informada. Este método é útil
     * para executar o novo ambiente com o mesmo usuário da sessão corrente.
     * @example
     *   // O código abaixo é equivalente à um executeScript(key)
     *   var scriptRunner = new ScriptRunner(key);
     *   scriptRunner.loginBySession(session);
     *   scriptRunner.run();
     * @param {Session} session Sessão cujo usuário corrente será utilizado para
     * realizar o login neste ambiente.
     * @see #loginByAuthToken
     * @see #login
     */
    loginBySession(session: Session): void;
    /**
     * Efetua o login na sessão do ambiente gerado por este ScriptRunner utilizando um token
     * criado no sistema anteriormente pela classe
     * {@link module:@nginstack/engine/lib/security/AuthToken~AuthToken AuthToken}
     * ou por meio de tokens de identificação gerados por provedores de identidade externos ao sistema.
     *
     * Tokens do sistema devem ser autorizados utilizando os métodos
     * {@link module:@nginstack/engine/lib/session/Session~Session#authorizeToken Session.authorizeToken}
     * ou {@link module:@nginstack/engine/lib/security/Security~Security#authorizeToken Security.authorizeToken},
     * momento em que será gerado o token de identificação esperado por este método.
     *
     * Tokens de identificação externos podem ser gerados utilizando a classe
     * {@link module:@nginstack/engine/lib/oidc/OpenIdClient~OpenIdClient OpenIdClient}. Somente
     * serão aceitos tokens dos provedores de identidade configurados em
     * "Administração do sistema > Segurança > Provedores de identidade".
     * @param {string} authToken Token de autorização do usuário.
     * @see module:@nginstack/engine/lib/security/AuthToken~AuthToken
     * @see module:@nginstack/engine/lib/session/Session~Session#authorizeToken
     * @see module:@nginstack/engine/lib/security/Security~Security#authorizeToken
     * @see #loginBySession
     * @see #login
     */
    loginByAuthToken(authToken: string): void;
    /**
     * Roda o script utilizando o login previamente realizado, ou anonimamente caso
     * nenhum método de login tenha sido executado. Essa função roda o script
     * informado no construtor e retorna o último valor deixado na pilha do script.
     *
     * **Importante**: apenas valores primitivos e DataSets podem ser retornados.
     * @return {Object} Último valor deixado na pilha do script.
     * @example
     *   // Considerando que o script "echo" tenha esse código
     *   const value;
     *   const result = value ? value : "none";
     *   result;
     *
     *   // Temos que:
     *   const ScriptRunner = require('@nginstack/engine/lib/runner/ScriptRunner');
     *   const scriptRunner = new ScriptRunner(-1898145715); // echo
     *   scriptRunner.loginBySession(session);
     *   scriptRunner.run(); // retorna "none"
     *   scriptRunner.publishGlobalProperty('value', 'opa');
     *   scriptRunner.run(); // retorna "opa"
     */
    run(): any;
    /**
     * Executa uma função global declarada pelo script. O script será completamente
     * executado ao menos uma vez para a identificação das funções globais
     * definidas.
     * @example
     *   // Considerando que o script "echo" tenha esse código
     *   function doEcho(value) {
     *     const result = value ? value : "none";
     *     return result;
     *   }
     *
     *   // Temos que:
     *   const ScriptRunner = require('@nginstack/engine/lib/runner/ScriptRunner');
     *   const scriptRunner = new ScriptRunner(-1898145715); // echo
     *   scriptRunner.loginBySession(session);
     *   scriptRunner.applyFunction('doEcho', []); // retorna "none"
     *   scriptRunner.publishGlobalProperty('value', 'opa');
     *   scriptRunner.applyFunction('doEcho', []); // retorna "none"
     *   scriptRunner.applyFunction('doEcho', ['opa']); // retorna "opa"
     * @param {string} functionName Nome da função que será executada.
     * @param {Array} [args] Parâmetros para a função que será invocada.
     * @return {DataSet|number|Date|string|boolean} O valor retornado pela função.
     * <br>
     * <b>Importante</b>: apenas valores primitivos e DataSets podem ser retornados.
     * @see #callFunction
     */
    applyFunction(functionName: string, args?: any[]): DataSet | number | Date | string | boolean;
    /**
     * Executa uma função global declarada pelo script. O script será completamente
     * executado ao menos uma vez para a identificação das funções globais
     * definidas.
     * A diferença para o applyFunction é que neste método é com uma lista aberta de
     * argumentos, semelhante a diferença entre Function.apply e o Function.call.
     * @example
     *   // Considerando que o script "echo" tenha esse código
     *   function doEcho(value) {
     *     const result = value ? value : "none";
     *     return result;
     *   }
     *
     *   // Temos que:
     *   const ScriptRunner = require('@nginstack/engine/lib/runner/ScriptRunner');
     *   const scriptRunner = new ScriptRunner(-1898145715); // echo
     *   scriptRunner.loginBySession(session);
     *   scriptRunner.callFunction('doEcho'); // retorna "none"
     *   scriptRunner.publishGlobalProperty('value', 'opa');
     *   scriptRunner.callFunction('doEcho'); // retorna "none"
     *   scriptRunner.callFunction('doEcho', 'opa'); // retorna "opa"
     * @param {string} functionName Nome da função que deve ser executada.
     * @param {...Object} [params] Objetos passados como parâmetro para a função.
     * Todos os valores passados devem ser capazes de serialização.
     * @return {DataSet|number|Date|string|boolean} O valor retornado pela função.
     * <br>
     * <b>Importante</b>: apenas valores primitivos e DataSets podem ser retornados.
     */
    callFunction(functionName: string, params?: any[]): DataSet | number | Date | string | boolean;
    /**
     * Executa uma expressão JavaScript no contexto global da sessão, permitindo a manipulação ou
     * inspeção do ambiente. Será retornado o resultado da expressão informada.
     * @example
     *   // Considerando que o script "echo" tenha esse código
     *   function doEcho(value) {
     *     const result = value ? value : "none";
     *     return result;
     *   }
     *
     *   // Temos que:
     *   const ScriptRunner = require('@nginstack/engine/lib/runner/ScriptRunner');
     *   const scriptRunner = new ScriptRunner(-1898145715); // echo
     *   scriptRunner.loginBySession(session);
     *   scriptRunner.callFunction('doEcho', 'ops'); // retorna "ops"
     *   scriptRunner.evaluate('function doEcho() { return 'ok'; }');
     *   scriptRunner.callFunction('doEcho', 'ops'); // retorna "ok"
     * @param {string} expression Expressão que serpa executada.
     * @return {DataSet|number|Date|string|boolean} O valor retornado pela expressão.
     */
    evaluate(expr: any): DataSet | number | Date | string | boolean;
    /**
     * Cria no ambiente de execução do script a variável global passada.
     * <br>
     * <b>Importante</b>: apenas valores primitivos e DataSets podem ser usados.
     * @param {string} name Nome da variável.
     * @param {DataSet|Number|Date|String|Boolean} value Valor da variável.
     * @see #readGlobalProperty
     */
    publishGlobalProperty(name: string, value: DataSet | number | Date | string | boolean): void;
    /**
     * Retorna do ambiente de execução do script o valor de uma variável global
     * anteriormente publicada ou definida pelo script.
     * <br>
     * <b>Importante</b>: apenas valores primitivos e DataSets podem ser usados.
     * @param {string} name Nome da variável.
     * @return {DataSet|Number|Date|String|Boolean} Valor da variável.
     * @see #publishGlobalProperty
     */
    readGlobalProperty(name: string): DataSet | number | Date | string | boolean;
    /**
     * Limpa todas as propriedades do ambiente JavaScript incluindo as propriedades
     * publicadas via publishGlobalProperty.
     */
    clear(): void;
    /**
     * Libera imediatamente os recursos associados a este objeto.
     */
    dispose(): void;
}
declare namespace ScriptRunner {
    export { DataSet, Session };
}
type DataSet = import('../dataset/DataSet');
type Session = import('../session/Session');
