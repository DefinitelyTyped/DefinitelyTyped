/** 
 * Test suite created by Maxime LUCE <https://github.com/SomaticIT> 
 *  
 * Created by using code samples from https://github.com/auth0/node-jsonwebtoken.
 */ 
 
/// <reference path="../node/node.d.ts" /> 
/// <reference path="jsonwebtoken.d.ts" />

import jwt = require("jsonwebtoken");
import fs = require("fs");

var token: string;
var cert: Buffer;

/**
 * jwt.sign
 * https://github.com/auth0/node-jsonwebtoken#usage
 */
// sign with default (HMAC SHA256)
token = jwt.sign({ foo: 'bar' }, 'shhhhh');

// sign with RSA SHA256
cert = fs.readFileSync('private.key');  // get private key
token = jwt.sign({ foo: 'bar' }, cert, { algorithm: 'RS256'});

// sign asynchronously
jwt.sign({ foo: 'bar' }, cert, { algorithm: 'RS256' }, function(token: string) {
  console.log(token);
});

/**
 * jwt.verify
 * https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
 */
// verify a token symmetric
jwt.verify(token, 'shhhhh', function(err, decoded) {
  console.log(decoded.foo) // bar
});

// invalid token
jwt.verify(token, 'wrong-secret', function(err, decoded) {
  // err 
  // decoded undefined
});

// verify a token asymmetric
cert = fs.readFileSync('public.pem');  // get public key
jwt.verify(token, cert, function(err, decoded) {
  console.log(decoded.foo) // bar
});

// verify audience
cert = fs.readFileSync('public.pem');  // get public key
jwt.verify(token, cert, { audience: 'urn:foo' }, function(err, decoded) {
  // if audience mismatch, err == invalid audience
});

// verify issuer
cert = fs.readFileSync('public.pem');  // get public key
jwt.verify(token, cert, { audience: 'urn:foo', issuer: 'urn:issuer' }, function(err, decoded) {
  // if issuer mismatch, err == invalid issuer
});

// verify algorithm
cert = fs.readFileSync('public.pem');  // get public key
jwt.verify(token, cert, { algorithms: ['RS256'] }, function(err, decoded) {
  // if algorithm mismatch, err == invalid algorithm
});

// verify without expiration check
cert = fs.readFileSync('public.pem');  // get public key
jwt.verify(token, cert, { ignoreExpiration: true }, function(err, decoded) {
  // if ignoreExpration == false and token is expired, err == expired token
});

/**
 * jwt.decode
 * https://github.com/auth0/node-jsonwebtoken#jwtdecodetoken
 */
var decoded = jwt.decode(token);

decoded = jwt.decode(token, { complete: false });

decoded = jwt.decode(token, { json: false });

decoded = jwt.decode(token, { complete: false, json: false });
