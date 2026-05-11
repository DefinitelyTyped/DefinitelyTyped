declare function generateRandomString(octet_length: number): string;
declare function generateCodeVerifier(octet_length?: number): string;
declare function generateState(octet_length?: number): string;
declare function generateCodeChallenge(value: string, method: "S256" | "plain"): string;
declare function generatePair(method: "S256" | "plain", octet_length?: number): {
    codeVerifier: string;
    codeChallenge: string;
};
export { generateCodeChallenge, generateCodeVerifier, generatePair, generateRandomString, generateState };
