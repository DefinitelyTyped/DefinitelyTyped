declare module "jwt-client" {
    interface JWTHeader {
        typ: string;
        alg: string;
    }

    interface JWTObject {
        header: JWTHeader;
        claim: any;
        signature: string;
    }

    /**
     * Read a string value (normally an HTTP header)
     * from JSON Web Token to an Object
     */
    function read(header: string): JWTObject;

    /**
     * Given a JWT object, stringify it back to
     * its JWT representation.
     */
    function write(value: JWTObject): string;

    function keep(value: JWTObject, key?: any, storate?: any): void;

    function remember(): void;

    function forget(): void;

    function get(): string;

    function validate(value: JWTObject, issuer?: any, audience?: any): boolean;
}
