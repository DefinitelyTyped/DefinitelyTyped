declare module "node-forge" {
    namespace pkcs5 {
        function pbkdf2(password: string, salt: string, iterations: number, keySize: number): string;
        function pbkdf2(
            password: string,
            salt: string,
            iterations: number,
            keySize: number,
            messageDigest: md.MessageDigest | md.Algorithm,
        ): string;
        function pbkdf2(
            password: string,
            salt: string,
            iterations: number,
            keySize: number,
            callback: (err: Error | null, dk: string | null) => any,
        ): void;
        function pbkdf2(
            password: string,
            salt: string,
            iterations: number,
            keySize: number,
            messageDigest?: md.MessageDigest | md.Algorithm,
            callback?: (err: Error | null, dk: string) => any,
        ): void;
    }
}
