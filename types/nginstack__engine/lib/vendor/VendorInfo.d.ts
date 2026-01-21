export = VendorInfo;
/**
 * @typedef {Object} ColorSchemeImages Imagens do fornecedor do sistema específicas para um esquema
 * de cores (claro ou escuro).
 * @property {number} logo Chave do arquivo com a logomarca do fornecedor do sistema.
 * @property {number} footerLogo Chave do arquivo com a logomarca do fornecedor do sistema
 * utilizada no rodapé dos relatórios. Não devem ser utilizadas imagens SVG em logotipos de
 * rodapé, pois elas não são suportadas por todos os clientes de e-mail, em especial o Gmail.
 * @property {number} appBarLogo Chave da imagem que deve ser exibida na barra de tarefas.
 * Recomendações: a altura da imagem deve ser de 24px (ou proporcional), a largura da imagem deve
 * ter **no máximo** 120px e a imagem não deve ter bordas vazias.
 * @property {number} favicon Chave do ícone do sistema exibido no navegador.
 */
/**
 * Informações do fornecedor do sistema.
 *
 * Este objeto não deve ser modificado com o objetivo de customizar o sistema, pois alterações
 * realizadas neste objeto podem ser ignoradas, em especial após uma atualização de sistema, e
 * sua estrutura interna pode ser modificada sem aviso prévio.
 * @constructor
 */
declare function VendorInfo(): void;
declare class VendorInfo {
    /**
     * Logger utilizado para registrar mensagens de erro e depuração.
     * @type {Logger}
     * @private
     */
    private logger_;
    /**
     * Cache das imagens do fornecedor do sistema.
     * @type {{light: ColorSchemeImages, dark: ColorSchemeImages}}
     * @private
     */
    private imagesCache_;
    /**
     * O nome de fantasia do fornecedor do sistema.
     * @type {string}
     */
    name: string;
    /**
     * Razão social do fornecedor do sistema.
     * @type {string}
     */
    legalName: string;
    /**
     * URI para o site do fornecedor do sistema.
     * @type {string}
     */
    siteUrl: string;
    /**
     * Nome de exibição do sistema.
     * @type {string}
     */
    systemName: string;
    /**
     * URL do arquivo com a logomarca do fornecedor do sistema adequada para ser exibida
     * sobre fundos claros.
     * @type {number}
     * @deprecated Utilize o método {@link VendorInfo#getImages}.
     */
    logoUrl: number;
    /**
     * O texto que descreve a imagem do logotipo do fornecedor do sistema.
     * @type {string}
     */
    logoTitle: string;
    /**
     * URL do arquivo com a logomarca do fornecedor do sistema para ser exibida no rodapé de
     * relatórios com fundo claro.
     * @type {number}
     * @deprecated Utilize o método {@link VendorInfo#getImages}.
     */
    footerLogoUrl: number;
    /**
     * O texto que descreve a imagem do logotipo no rodapé dos relatórios.
     * @type {string}
     */
    footerLogoTitle: string;
    /**
     * URL da imagem que deve ser exibida na barra de tarefas.
     * @type {string}
     * @deprecated Utilize o método {@link VendorInfo#getImages}.
     */
    appBarLogoUrl: string;
    /**
     * URL da imagem *favicon* que será exibida quando o navegador estiver utilizando um esquema
     * de cores claro.
     * @type {string}
     * @deprecated Utilize o método {@link VendorInfo#getImages}.
     */
    faviconUrl: string;
    private loadImagesSettings_;
    /**
     * Obtém as imagens para um esquema de cores específico.
     * @param {string} colorScheme Esquema de cores desejado: `'light'` ou `'dark'`.
     * @return {ColorSchemeImages}
     */
    getImages(colorScheme: string): ColorSchemeImages;
    /**
     * Configura as imagens do fornecedor do sistema.
     * @param {Object} images Conjuntos de imagens para os esquema de cores claro e escuro.
     * @param {ColorSchemeImages} images.light Conjunto de imagens para o esquema de cores claro.
     * @param {ColorSchemeImages} images.dark Conjunto de imagens para o esquema de cores claro.
     */
    configureImages(images: { light: ColorSchemeImages; dark: ColorSchemeImages }): void;
}
declare namespace VendorInfo {
    export { ColorSchemeImages };
}
/**
 * Imagens do fornecedor do sistema específicas para um esquema
 * de cores (claro ou escuro).
 */
interface ColorSchemeImages {
    /**
     * Chave do arquivo com a logomarca do fornecedor do sistema.
     */
    logo: number;
    /**
     * Chave do arquivo com a logomarca do fornecedor do sistema
     * utilizada no rodapé dos relatórios. Não devem ser utilizadas imagens SVG em logotipos de
     * rodapé, pois elas não são suportadas por todos os clientes de e-mail, em especial o Gmail.
     */
    footerLogo: number;
    /**
     * Chave da imagem que deve ser exibida na barra de tarefas.
     * Recomendações: a altura da imagem deve ser de 24px (ou proporcional), a largura da imagem deve
     * ter **no máximo** 120px e a imagem não deve ter bordas vazias.
     */
    appBarLogo: number;
    /**
     * Chave do ícone do sistema exibido no navegador.
     */
    favicon: number;
}
