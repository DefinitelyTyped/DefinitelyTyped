export = JavaImporter;
/**
 * Importador de JavaBeans.
 *
 * Esta classe cria um código fonte JavaScript equivalente a uma classe JavaBean declarada no Java.
 * @example
 * // Exemplo de classe JavaBean em Java
 * package com.nginstack.tests;
 *
 * import java.util.Date;
 *
 * public class Entidade {
 *  private String nome;
 *  private Date nascimento;
 *  private String fone;
 *
 *  public void setNome(String nome) {
 *    this.nome = nome;
 *  }
 *
 *  public String getNome() {
 *    return nome;
 *  }
 *
 *  public void setNascimento(Date nascimento) {
 *    this.nascimento = nascimento;
 *  }
 *
 *  public Date getNascimento() {
 *    return nascimento;
 *  }
 *
 *  public void setFone(String fone) {
 *    this.fone = fone;
 *  }
 *
 *  public String getFone() {
 *    return fone;
 *  }
 * }
 *
 * // Exemplo de importação
 * const javaImporter = new JavaImporter();
 * javaImporter.importJavaBean('com.nginstack.tests.Entidade');
 *
 * // String retornada pelo importJavaBean
 * ```
 * (function () {
 *   function Entidade() {};
 *   Entidade.prototype.nome = null;
 *   Entidade.prototype.nascimento = null;
 *   Entidade.prototype.fone = null;
 *   return Entidade;
 * })();
 * ```
 * @constructor
 */
declare function JavaImporter(): void;
declare class JavaImporter {
    /**
     * Retorna o código fonte de um construtor JavaScript que ao ser invocado retornará um objeto
     * equivalente a uma instância da classe JavaBean informada.
     * @example
     * const javaImporter = new JavaImporter();
     * const EntityDTO = eval(javaImporter.importJavaBean('com.nginstack.tests.Entity'));
     * const entity = new EntityDTO();
     * @param {string} className Nome da classe JavaBean que será importada.
     * @return {string} Código fonte JavaScript equivalente ao JavaBean importado.
     */
    importJavaBean(className: string): string;
}
