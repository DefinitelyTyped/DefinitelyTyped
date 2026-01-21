export = InterceptorConfiguration;
/** @module @nginstack/engine/lib/classdef/InterceptorConfiguration */
/**
 * Protótipo usado nos X-Class's para configurar o uso de Interceptor's
 * Um Interceptor é o recurso que permite a execução antecipada de um script
 * antes da execução do script solicitado. Com este recurso é possível fazer
 * com que o script -12121212 sejam sempre executado no momento que for chamado
 * outro script através de um requisição HTTP. Todos os scripts que estiverem
 * sobre o domínio de configuração do X-Class irá executar o script
 * interceptador.
 * @construtor
 */
declare function InterceptorConfiguration(): void;
declare class InterceptorConfiguration {
    /**
     * Lista de chaves dos scripts pré-interceptadores.<br>
     * Informe aqui as chaves dos scripts que serão executados antes de outro script
     * no domínio do X-Class.
     */
    beforeScriptKeys: any[];
    /**
     * Lista de chaves dos scripts pós-interceptadores.<br>
     * Informe aqui as chaves dos scripts que serão executados depois de outro
     * script no domínio do X-Class.
     */
    afterScriptKeys: any[];
    /**
     * Lista de tipos Mimes que podem ser interceptados por um Interceptor.
     *
     * Informe aqui a lista de chaves dos tipos de arquivos(Mime Types) que poderão
     * ser interceptador pelo script interceptador.
     */
    mimesTypes: any[];
}
