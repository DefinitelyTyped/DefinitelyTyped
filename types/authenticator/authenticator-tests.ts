/// <reference types="node" />
import * as authenticator from "authenticator";

// Functions to test return type of 'function verifyToken()'
function foo(_result: authenticator.VerifyResult) {}
function bar(_null: null) {}

// Test 'function generateKey()'
const key: string = authenticator.generateKey();
// Test 'function generateToken()'
const token: string = authenticator.generateToken(key);
// Test 'function verifyToken()'
const verifyResult = authenticator.verifyToken(key, token);
// Test return type of 'function verifyToken()'
if (verifyResult) {
  // interface VerifyResult
  foo(verifyResult);
} else {
  // null
  bar(verifyResult);
}

// Test 'function generateTotpUri()'
let uri: string;
const accountName = "yourface@gmail.com";
const issuer = "Your Face Co";
uri = authenticator.generateTotpUri(key, accountName, issuer, "sha1", 6, 30);
uri;
