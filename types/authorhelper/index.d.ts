// Type definitions for authorhelper 1.0
// Project: https://github.com/ainmor/authorhelper.git#readme
// Definitions by: Ain Mor <https://github.com/ainmor>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

export function greet(name: string): string;
export function getAuthorContactInfo(): AuthorInfo;
export function getModuleName(moduleNumber: number): "Intro to my course" | "Declaration File Fundamentals" | "Building a Declaration File" | "Publishing your own library" | "No such module exists";
export class AuthorInfo {
    firstName: string;
    lastname: string;
    twitterHandle: string;
    constructor(firstName: string, lastname: string, twitterHandle: string);
}
