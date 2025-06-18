import {
    generateCodeChallenge,
    generateCodeVerifier,
    generatePair,
    generateRandomString,
    generateState,
} from "@ringcentral/easy-pkce";

// $ExpectType string
generateCodeChallenge("TEST_VALUE", "S256");
// $ExpectType string
generateCodeChallenge("TEST_VALUE", "plain");

// $ExpectType string
generateCodeVerifier();
// $ExpectType string
generateCodeVerifier(32);

// $ExpectType { codeVerifier: string; codeChallenge: string; }
generatePair("S256");
// $ExpectType { codeVerifier: string; codeChallenge: string; }
generatePair("plain", 32);

// $ExpectType string
generateRandomString(32);

// $ExpectType string
generateState();
// $ExpectType string
generateState(32);
