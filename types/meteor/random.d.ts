declare module "meteor/random" {
    module Random {
        function id(numberOfChars?: number): string;

        function secret(numberOfChars?: number): string;

        function fraction(): number;
        // @param numberOfDigits, @returns a random hex string of the given length
        function hexString(numberOfDigits: number): string;
        // @param array, @return a random element in array
        function choice<T>(array: T[]): T | undefined;
        // @param str, @return a random char in str
        function choice(str: string): string;
    }
}
