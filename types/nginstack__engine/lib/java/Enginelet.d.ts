export = Enginelet;
/**
 * A classe Enginelet tem o objetivo de simplificar a execução de código Java a partir do Engine.
 *
 * Classes Java que implementam a interface "com.nginstack.engine.Enginelet" e o seu método
 * `handleCommand` podem ser utilizadas em JavaScript por meio da classe `Enginelet`. Para isso,
 * deve ser criada uma instância de `Enginelet` no JavaScript informando o nome completo da
 * classe Java. Ao executar o método `handleCommand` da classe JavaScript, será executado o método
 * de mesmo nome da classe Java.
 *
 * Os parâmetros e o retorno do método `handleCommand` são do tipo `String` no Java e os valores
 * informados em JavaScript são convertidos automaticamente para esse tipo utilizando a
 * conversão padrão do JavaScript. Objetos complexos devem ser convertidos manualmente em um
 * formato textual mais adequado, como o JSON.
 *
 * **Importante:** atualmente o sistema não mantém um estado de execução no ambiente Java. Por esse
 * motivo, a classe Java indicada por `engineletClassName` é recriada a cada execução do método
 * `handleCommand`. Caso seja necessária a preservação de estado entre as execuções, devem
 * ser utilizadas outras classes Java que persistam após a construção e destruição da classe
 * que implementa a interface Enginelet.
 * @example
 * // Exemplo de consumo de um Enginelet em JavaScript
 * const enginelet = new Enginelet('com.example.XmlSigner');
 * enginelet.handleCommand('signXml', xmlContent);
 * @example
 * // Exemplo de implementação de um Enginelet em Java
 * package com.example;
 *
 * import com.nginstack.engine.Enginelet;
 * import com.example.XmlSigner;
 *
 * class UnsupportedCommandException extends RuntimeException  {
 *   UnsupportedCommandException(String command) {
 *     super("Unsupported command: " + command);
 *   }
 * }
 *
 * public class XmlSigner extends Enginelet {
 *   public String handleCommand(String commandName, String[] commandArgs) {
 *     if (commandName.equals("signXml")) {
 *       return XmlSigner.sign(commandArgs[0]);
 *     } else {
 *       throw new UnsupportedCommandException(commandName);
 *     }
 *   }
 * }
 * @param {string} engineletClassName Nome da classe Java que estende a classe Enginelet.
 * @constructor
 */
declare function Enginelet(engineletClassName: string): void;
declare class Enginelet {
    /**
     * A classe Enginelet tem o objetivo de simplificar a execução de código Java a partir do Engine.
     *
     * Classes Java que implementam a interface "com.nginstack.engine.Enginelet" e o seu método
     * `handleCommand` podem ser utilizadas em JavaScript por meio da classe `Enginelet`. Para isso,
     * deve ser criada uma instância de `Enginelet` no JavaScript informando o nome completo da
     * classe Java. Ao executar o método `handleCommand` da classe JavaScript, será executado o método
     * de mesmo nome da classe Java.
     *
     * Os parâmetros e o retorno do método `handleCommand` são do tipo `String` no Java e os valores
     * informados em JavaScript são convertidos automaticamente para esse tipo utilizando a
     * conversão padrão do JavaScript. Objetos complexos devem ser convertidos manualmente em um
     * formato textual mais adequado, como o JSON.
     *
     * **Importante:** atualmente o sistema não mantém um estado de execução no ambiente Java. Por esse
     * motivo, a classe Java indicada por `engineletClassName` é recriada a cada execução do método
     * `handleCommand`. Caso seja necessária a preservação de estado entre as execuções, devem
     * ser utilizadas outras classes Java que persistam após a construção e destruição da classe
     * que implementa a interface Enginelet.
     * @example
     * // Exemplo de consumo de um Enginelet em JavaScript
     * const enginelet = new Enginelet('com.example.XmlSigner');
     * enginelet.handleCommand('signXml', xmlContent);
     * @example
     * // Exemplo de implementação de um Enginelet em Java
     * package com.example;
     *
     * import com.nginstack.engine.Enginelet;
     * import com.example.XmlSigner;
     *
     * class UnsupportedCommandException extends RuntimeException  {
     *   UnsupportedCommandException(String command) {
     *     super("Unsupported command: " + command);
     *   }
     * }
     *
     * public class XmlSigner extends Enginelet {
     *   public String handleCommand(String commandName, String[] commandArgs) {
     *     if (commandName.equals("signXml")) {
     *       return XmlSigner.sign(commandArgs[0]);
     *     } else {
     *       throw new UnsupportedCommandException(commandName);
     *     }
     *   }
     * }
     * @param {string} engineletClassName Nome da classe Java que estende a classe Enginelet.
     * @constructor
     */
    constructor(engineletClassName: string);
    /**
     * Envia um comando que será tratado pelo método `handleCommand` da classe Enginelet no ambiente
     * Java.
     * @param {string} commandName Nome do comando que será enviado para a classe Enginelet Java.
     * @param {...string} args Argumentos que serão passados para o método `handleCommand`.
     * @return {string} Valor retornado pelo método `handleCommand` da classe Java.
     */
    handleCommand(commandName: string, param1: any, param2: any, paramN: any): string;
}
