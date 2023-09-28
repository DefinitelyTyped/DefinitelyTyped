/**
 * nmap :: Integer -> ...(* -> *) m ...* -> m ...*
 */
declare function nmap(a: object, b: object): object;
declare function nmap(a: object): (b: object) => object;

export default nmap;
