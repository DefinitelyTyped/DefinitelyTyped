export = CryptoPKey;
/**
 * Cria um novo par de chaves assimétricas (pública e privada) para
 * assinatura digital de dados. As chaves criadas são aleatórias.
 *
 * <b>Atenção:</b> Esse construtor é considerado depreciado. Utilize o construtor de uma das classes
 * filhas para tipos específicos de chave.
 * @param {string} type O tipo do par, 'DSA' ou 'RSA'
 * @param {number} bits O tamanho das chaves em bits. Este parâmetro é
 * opcional, o padrão é 1024 para DSA e 2048 para RSA.
 * @return {CryptoPKey} Um objeto contendo o novo par de chaves.
 * @constructor
 * @see Crypto
 */
declare function CryptoPKey(type: string, bits: number): CryptoPKey;
declare class CryptoPKey {
    /**
     * Cria um novo par de chaves assimétricas (pública e privada) para
     * assinatura digital de dados. As chaves criadas são aleatórias.
     *
     * <b>Atenção:</b> Esse construtor é considerado depreciado. Utilize o construtor de uma das classes
     * filhas para tipos específicos de chave.
     * @param {string} type O tipo do par, 'DSA' ou 'RSA'
     * @param {number} bits O tamanho das chaves em bits. Este parâmetro é
     * opcional, o padrão é 1024 para DSA e 2048 para RSA.
     * @return {CryptoPKey} Um objeto contendo o novo par de chaves.
     * @constructor
     * @see Crypto
     */
    constructor(type: string, bits: number);
    /**
     * Exporta a chave privada contida no objeto para um formato de serialização
     * padrão. A chave privada também contém a chave pública.
     * @param {string} format O formato de saída da chave. O formato pode ser 'der'
     *                        (um formato binário) ou 'pem' (um formato texto). Este
     *                        parâmetro é opcional, o padrão é 'der'.
     * @param {string} key Uma string para ser usada como chave (ou segredo) de uma
     *                     cifra simétrica, que é usada para proteger a chave
     *                     assimétrica serializada. Este parâmetro é opcional e só deve ser
     *                     usado se o formato de saída for 'pem'. Se for omitido, a
     *                     chave assimétrica será exportada sem proteção.
     * @param {string} cipher A cifra simétrica usada para a proteção da chave
     *                        assimétrica privada que é exportada. Este parâmetro é
     *                        opcional e só é usado se o formato de saída for 'pem'.
     *                        Se for omitido, será usada a cifra Crypto.DES3_CBC.
     * @return {string} A chave privada serializada.
     * @see #exportPublicKey
     */
    exportPrivateKey(format: string, key: string, cipher: string): string;
    /**
     * Exporta a chave pública contida no objeto para um formato de serialização
     * padrão.
     * @param {string} format O formato de saída da chave. O formato pode ser 'der'
     *                        (um formato binário) ou 'pem' (um formato texto). Este
     *                        parâmetro é opcional, o padrão é 'der'.
     * @return {string} A chave pública serializada.
     * @see #exportPrivateKey
     */
    exportPublicKey(format: string): string;
    /**
     * Assina digitalmente os dados passados. O objeto usado deve conter uma chave
     * privada, DSA ou RSA.
     * @param {string} text Os dados que serão assinados digitalmente.
     * @param {string} [opt_digestName] O nome do *digest* a ser usado. Qualquer algoritmo suportado pelo
     * OpenSSL pode usar usado, como 'SHA1', 'SHA256', entre outros. Se não for informado, será usado
     * o *digest* *MD5* para chaves *RSA*, e *SHA1* para chaves *DSA*.
     * @return {string} A assinatura digital dos dados.
     * @see #verify
     */
    sign(text: string, opt_digestName?: string): string;
    /**
     * Verifica a assinatura digital dos dados passados. O objeto usado deve conter
     * uma chave pública.
     * @param {string} text Os dados que foram assinados.
     * @param {string} sig A assinatura digital que será verificada junta com os dados.
     * @param {string} [opt_digestName] O nome do *digest* a ser usado. Qualquer algoritmo suportado pelo
     * OpenSSL pode usar usado, como 'SHA1', 'SHA256', entre outros. Se não for informado, será usado
     * o *digest* *MD5* para chaves *RSA*, e *SHA1* para chaves *DSA*.
     * @return {boolean} Verdadeiro se a assinatura é válida, falso em caso contrário.
     * @see #sign
     */
    verify(text: string, sig: string, opt_digestName?: string): boolean;
    /**
     * Retorna o tipo da chave (DSA, RSA ou EC).
     * @return {string}
     */
    keyType: string;
    /**
     * Retorna o tamanho da chave em bits.
     * @return {number}
     */
    keyBits: number;
}
declare namespace CryptoPKey {
    /**
     * Lê uma chave privada serializada em uma string e cria um novo objeto que
     * representa a mesma chave.
     * @param {string} format O formato da chave serializada, pode ser 'der' ou 'pem'.
     * @param {string} key A chave privada que foi serializada em uma string.
     * @param {string} arg Se o formato for 'pem' e a chave privada foi protegida,
     *                     este argumento deve conter o segredo da cifra simétrica.
     *                     Se o formato for 'der', este argumento deve conter o tipo
     *                     da chave: 'DSA' ou 'RSA'.
     * @return {CryptoPKey} Um novo objeto contendo a chave lida.
     * @see #importPublicKey
     */
    function importPrivateKey(format: string, key: string, arg: string): CryptoPKey;
    /**
     * Lê uma chave pública serializada em uma string e cria um novo objeto que
     * representa a mesma chave.
     * @param {string} format O formato da chave serializada, pode ser 'der' ou 'pem'.
     * @param {string} key A chave pública que foi serializada em uma string.
     * @param {string} type Se o formato da chave for 'der', o tipo da chave deve ser
     * informado: 'DSA' ou 'RSA'.
     * @return {CryptoPKey} Um novo objeto contendo a chave lida.
     * @see #importPrivateKey
     */
    function importPublicKey(format: string, key: string, type: string): CryptoPKey;
    let RSA_PKCS1_PADDING: number;
    let RSA_NO_PADDING: number;
}
