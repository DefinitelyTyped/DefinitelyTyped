export = DSACryptoPKey;
/**
 * Cria um novo par de chaves assimétricas (pública e privada) DSA para
 * assinatura digital de dados. As chaves criadas são aleatórias.
 * @param {number} bits O tamanho das chaves em bits. Este parâmetro é
 *                       opcional, o padrão é 1024.
 * @return {DSACryptoPKey} Um objeto contendo o novo par de chaves.
 * @constructor
 * @extends CryptoPKey
 */
declare function DSACryptoPKey(bits: number): DSACryptoPKey;
declare class DSACryptoPKey {
    /**
     * Cria um novo par de chaves assimétricas (pública e privada) DSA para
     * assinatura digital de dados. As chaves criadas são aleatórias.
     * @param {number} bits O tamanho das chaves em bits. Este parâmetro é
     *                       opcional, o padrão é 1024.
     * @return {DSACryptoPKey} Um objeto contendo o novo par de chaves.
     * @constructor
     * @extends CryptoPKey
     */
    constructor(bits: number);
    toString(): string;
}
declare namespace DSACryptoPKey {
    /**
     * Lê uma chave privada serializada em uma string e cria um novo objeto que
     * representa a mesma chave.
     * @param {string} format O formato da chave serializada, pode ser 'der' ou 'pem'.
     * @param {string} key A chave privada que foi serializada em uma string.
     * @param {string} sec Se o formato for 'pem' e a chave privada foi protegida,
     *                     este argumento deve conter o segredo da cifra simétrica.
     * @return {DSACryptoPKey} Um novo objeto contendo a chave lida.
     * @see #importPublicKey
     */
    function importPrivateKey(format: string, key: string, sec: string): DSACryptoPKey;
    /**
     * Lê uma chave pública serializada em uma string e cria um novo objeto que
     * representa a mesma chave.
     * @param {string} format O formato da chave serializada, pode ser 'der' ou 'pem'.
     * @param {string} key A chave pública que foi serializada em uma string.
     * @return {DSACryptoPKey} Um novo objeto contendo a chave lida.
     * @see #importPrivateKey
     */
    function importPublicKey(format: string, key: string): DSACryptoPKey;
}
