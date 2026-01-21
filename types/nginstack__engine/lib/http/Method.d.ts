export = Method;
/**
 * Métodos possíveis em requisições HTTP.
 */
type Method = string;
declare namespace Method {
    let GET: string;
    let POST: string;
    let PUT: string;
    let PATCH: string;
    let DELETE: string;
    let HEAD: string;
    let OPTIONS: string;
}
