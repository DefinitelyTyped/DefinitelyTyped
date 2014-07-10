// Type definitions for WebCrypto
// Project: http://www.w3.org/TR/WebCryptoAPI/
// Definitions by: Lucas Dixon <https://github.com/iislucas/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module crypto {

   // A cryptographically strong pseudo-random number generator seeded with
   // truly random values. The buffer passed in is modified, and a reference to
   // argument is returned for convenience.
   function getRandomValues(array: ArrayBufferView) : ArrayBufferView

}
