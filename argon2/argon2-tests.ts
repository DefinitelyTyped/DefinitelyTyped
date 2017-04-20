// TypeScript compile test using argon2 type declarations.
// These tests don't validate anything except the interface.

/// <reference path="./argon2.d.ts" />

import * as argon2 from "./argon2";

const password = "password";
const passwordBuffer = new Buffer("password");
const salt = new Buffer("somesalt");

// hashes for argon2i and argon2d with default options
const hashes = Object.freeze({
    argon2i: "$argon2i$v=19$m=4096,t=3,p=1$c29tZXNhbHQ$iWh06vD8Fy27wf9npn6FXWiCX4K6pW6Ue1Bnzz07Z8A",
    argon2d: "$argon2d$v=19$m=4096,t=3,p=1$c29tZXNhbHQ$2+JCoQtY/2x5F0VB9pEVP3xBNguWP1T25Ui0PtZuk8o"
});

function test_options() {
    const defaults: argon2.Options = {
        hashLength: 32,
        timeCost: 3,
        memoryCost: 12,
        parallelism: 1,
        argon2d: false
    };

    console.log(argon2.defaults.hashLength === defaults.hashLength);
    console.log(argon2.defaults.timeCost === defaults.timeCost);
    console.log(argon2.defaults.memoryCost === defaults.memoryCost);
    console.log(argon2.defaults.parallelism === defaults.parallelism);
    console.log(argon2.defaults.argon2d === defaults.argon2d);
}

function test_hash() {
    return Promise.all([
        argon2.hash(password, salt), // String pw
        argon2.hash(passwordBuffer, salt) // Buffer pw
    ]);
}

function test_generateSalt() {
    return Promise.all([
        argon2.generateSalt(), // Default salt length
        argon2.generateSalt(500) // Custom salt length
    ]); 
}

function test_hashOptions() {
    // All options separately, and together
    return Promise.all([
        argon2.hash(password, salt, {argon2d: true}),
        argon2.hash(password, salt, {timeCost: 4}),
        argon2.hash(password, salt, {hashLength: 4}),
        argon2.hash(password, salt, {memoryCost: 13}),
        argon2.hash(password, salt, {parallelism: 2}),
        argon2.hash(password, salt, {timeCost: 4, memoryCost: 13, parallelism: 2})
    ]);
}

function test_verify() {
    // Verify with string and buffer 
    return Promise.all([
        argon2.verify(hashes.argon2d, password),
        argon2.verify(hashes.argon2i, passwordBuffer)
    ]);
}