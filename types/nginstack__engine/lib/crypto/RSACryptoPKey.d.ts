export = RSACryptoPKey;
/**
 * Cria um novo par de chaves assimétricas (pública e privada) RSA para
 * assinatura digital de dados. As chaves criadas são aleatórias.
 * @param {number} bits O tamanho das chaves em bits. Este parâmetro é
 *                       opcional, o padrão é 2048.
 * @return {RSACryptoPKey} Um objeto contendo o novo par de chaves.
 * @constructor
 * @extends CryptoPKey
 */
declare function RSACryptoPKey(bits: number): RSACryptoPKey;
declare class RSACryptoPKey {
    /**
     * Cria um novo par de chaves assimétricas (pública e privada) RSA para
     * assinatura digital de dados. As chaves criadas são aleatórias.
     * @param {number} bits O tamanho das chaves em bits. Este parâmetro é
     *                       opcional, o padrão é 2048.
     * @return {RSACryptoPKey} Um objeto contendo o novo par de chaves.
     * @constructor
     * @extends CryptoPKey
     */
    constructor(bits: number);
    /**
     * Encripta um string utilizando uma chave privada previamente importada. Os dados encriptados
     * devem ser descriptografados pelo método {@link #publicDecrypt}.
     * @param {string} text String a ser encriptada com a chave privada.
     * @param {number} padding Constante utilizada para caracterizar o padding na
     * encriptação. Pode-se utilizar CryptoPKey.RSA_NO_PADDING ou CryptoPKey.RSA_PKCS1_PADDING
     * @return {string} Uma nova string com o parâmetro text já criptografado.
     */
    privateEncrypt(text: string, padding: number): string;
    /**
     * Encripta um string utilizando uma chave pública previamente importada. Os dados encriptados
     * devem ser descriptografados pelo método {@link #privateDecrypt}.
     * @param {string} text String a ser encriptada com a chave privada.
     * @param {number} padding Constante utilizada para caracterizar o padding na
     * encriptação. Pode-se utilizar CryptoPKey.RSA_NO_PADDING ou CryptoPKey.RSA_PKCS1_PADDING
     * @return {string} Uma nova string com o parâmetro text já criptografado.
     */
    publicEncrypt(text: string, padding: number): string;
    /**
     * Decripta uma string utilizando uma chave privada previamente importada. Esta
     * é uma operação inversa à função {@link #publicEncrypt}, ou seja, uma string
     * que foi criptografada com a função {@link #publicEncrypt} pode ser
     * descriptografada com esta função, desde que a chave privada aqui utilizada seja
     * a gerada a partir da chave pública utilizada na encriptação.
     * @param {string} text String a ser decriptada com a chave privada.
     * @param {number} padding Constante utilizada para caracterizar o padding na
     * encriptação. Pode-se utilizar CryptoPKey.RSA_NO_PADDING ou
     * CryptoPKey.RSA_PKCS1_PADDING
     * @return {string} Uma nova string com o parâmetro text já descriptografado.
     */
    privateDecrypt(text: string, padding: number): string;
    /**
     * Decripta uma string utilizando uma chave pública previamente importada. Esta
     * é uma operação inversa à função {@link #privateEncrypt}, ou seja, uma string
     * que foi criptografada com a função {@link #privateEncrypt} pode ser
     * descriptografada com esta função, desde que a chave pública aqui utilizada seja
     * a gerada a partir da chave privada utilizada na encriptação.
     * @param {string} text String a ser decriptada com a chave pública.
     * @param {number} padding Constante utilizada para caracterizar o padding na
     * encriptação. Pode-se utilizar CryptoPKey.RSA_NO_PADDING ou
     * CryptoPKey.RSA_PKCS1_PADDING
     * @return {string} Uma nova string com o parâmetro text já descriptografado.
     */
    publicDecrypt(text: string, padding: number): string;
}
declare namespace RSACryptoPKey {
    /**
     * Lê uma chave privada serializada em uma string e cria um novo objeto que
     * representa a mesma chave.
     * @param {string} format O formato da chave serializada, pode ser 'der' ou 'pem'.
     * @param {string} key A chave privada que foi serializada em uma string.
     * @param {string} [opt_sec] Se o formato for 'pem' e a chave privada foi protegida,
     * este argumento deve conter o segredo da cifra simétrica.
     * @return {RSACryptoPKey} Um novo objeto contendo a chave lida.
     * @see #importPublicKey
     */
    function importPrivateKey(format: string, key: string, opt_sec?: string): RSACryptoPKey;
    /**
     * Lê uma chave pública serializada em uma string e cria um novo objeto que
     * representa a mesma chave.
     * @param {string} format O formato da chave serializada, pode ser 'der' ou 'pem'.
     * @param {string} key A chave pública que foi serializada em uma string.
     * @return {RSACryptoPKey} Um novo objeto contendo a chave lida.
     * @see #importPrivateKey
     */
    function importPublicKey(format: string, key: string): RSACryptoPKey;
}
