export = ECCryptoPKey;
/**
 * Cria um novo par de chaves assimétricas (pública e privada) utilizando
 * curvas elípticas. As chaves criadas são aleatórias.
 * @param {string} curve Nome da curva que deve ser utilizada. As curvas atualmente suportadas podem
 * ser obtidas pelo método estático ECCryptoPKey.getCurves. Também são aceitos os nomes registrados
 * pelo [NIST]{@link https://csrc.nist.gov/Projects/elliptic-curve-cryptography} dessas curvas.
 * As principais são: B-163, B-233, B-283, B-409, B-571, K-163, K-233, K-283, K-409, K-571, P-192,
 * P-224, P-256, P-384, P-521.
 * @return {ECCryptoPKey} Um objeto contendo o novo par de chaves.
 * @constructor
 * @extends CryptoPKey
 * @see #.getCurves
 */
declare function ECCryptoPKey(curve: string): ECCryptoPKey;
declare class ECCryptoPKey {
    /**
     * Cria um novo par de chaves assimétricas (pública e privada) utilizando
     * curvas elípticas. As chaves criadas são aleatórias.
     * @param {string} curve Nome da curva que deve ser utilizada. As curvas atualmente suportadas podem
     * ser obtidas pelo método estático ECCryptoPKey.getCurves. Também são aceitos os nomes registrados
     * pelo [NIST]{@link https://csrc.nist.gov/Projects/elliptic-curve-cryptography} dessas curvas.
     * As principais são: B-163, B-233, B-283, B-409, B-571, K-163, K-233, K-283, K-409, K-571, P-192,
     * P-224, P-256, P-384, P-521.
     * @return {ECCryptoPKey} Um objeto contendo o novo par de chaves.
     * @constructor
     * @extends CryptoPKey
     * @see #.getCurves
     */
    constructor(curve: string);
    /**
     * Retorna o nome da curva elíptica utilizada nesta chave.
     *
     * Se ao construir a chave for informado um dos nomes de curva registrados pelo
     * [NIST]{@link https://csrc.nist.gov/Projects/elliptic-curve-cryptography}, o nome retornado será o
     * equivalente definido pela [rfc3279]{@link https://www.ietf.org/rfc/rfc3279.txt}.
     * @example
     * const pkey = new ECCryptoPKey('P-256');
     * pkey.curveName // => 'prime256v1'
     * @return {string}
     */
    curveName: string;
}
declare namespace ECCryptoPKey {
    /**
     * Lê uma chave privada serializada em uma string e cria um novo objeto que
     * representa a mesma chave.
     * @param {string} format O formato da chave serializada, pode ser 'der' ou 'pem'.
     * @param {string} key A chave privada que foi serializada em uma string.
     * @param {string} [password] Se o formato for 'pem' e a chave privada foi protegida,
     * este argumento deve conter o segredo da cifra simétrica.
     * @return {ECCryptoPKey} Um novo objeto contendo a chave lida.
     * @see #.importPublicKey
     */
    function importPrivateKey(format: string, key: string, sec: any): ECCryptoPKey;
    /**
     * Lê uma chave pública serializada em uma string e cria um novo objeto que
     * representa a mesma chave.
     * @param {string} format O formato da chave serializada, pode ser 'der' ou 'pem'.
     * @param {string} key A chave pública que foi serializada em uma string.
     * @return {ECCryptoPKey} Um novo objeto contendo a chave lida.
     * @see #.importPrivateKey
     */
    function importPublicKey(format: string, key: string): ECCryptoPKey;
    /**
     * Retorna um Array contendo a lista dos nomes das curvas suportadas.
     * @return {Array}
     */
    function getCurves(): any[];
}
