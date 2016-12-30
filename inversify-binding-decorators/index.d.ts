// Type definitions for inversify 1.0
// Project: https://github.com/inversify/inversify-binding-decorators
// Definitions by: inversify <https://github.com/inversify/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

import inversify = require("inversify")

interface IProvideInSyntax<T> extends IProvideDoneSyntax<T> {
    inSingletonScope(): IProvideWhenOnSyntax<T>;
}

interface IProvideDoneSyntax<T> {
    done(): (target: any) => any;
}

interface IProvideOnSyntax<T> extends IProvideDoneSyntax<T> {
    onActivation(fn: (context: inversify.interfaces.Context, injectable: T) => T): IProvideWhenSyntax<T>;
}

interface IProvideInWhenOnSyntax<T> extends IProvideInSyntax<T>, IProvideWhenSyntax<T>, IProvideOnSyntax<T> {}

interface IProvideWhenOnSyntax<T> extends IProvideWhenSyntax<T>, IProvideOnSyntax<T> {}

interface IProvideWhenSyntax<T> extends IProvideDoneSyntax<T> {
    when(constraint: (request: inversify.interfaces.Request) => boolean): IProvideOnSyntax<T>;
    whenTargetNamed(name: string): IProvideOnSyntax<T>;
    whenTargetTagged(tag: string, value: any): IProvideOnSyntax<T>;
    whenInjectedInto(parent: (Function|string)): IProvideOnSyntax<T>;
    whenParentNamed(name: string): IProvideOnSyntax<T>;
    whenParentTagged(tag: string, value: any): IProvideOnSyntax<T>;
    whenAnyAncestorIs(ancestor: (Function|string)): IProvideOnSyntax<T>;
    whenNoAncestorIs(ancestor: (Function|string)): IProvideOnSyntax<T>;
    whenAnyAncestorNamed(name: string): IProvideOnSyntax<T>;
    whenAnyAncestorTagged(tag: string, value: any): IProvideOnSyntax<T>;
    whenNoAncestorNamed(name: string): IProvideOnSyntax<T>;
    whenNoAncestorTagged(tag: string, value: any): IProvideOnSyntax<T>;
    whenAnyAncestorMatches(constraint: (request: inversify.interfaces.Request) => boolean): IProvideOnSyntax<T>;
    whenNoAncestorMatches(constraint: (request: inversify.interfaces.Request) => boolean): IProvideOnSyntax<T>;
}

export function autoProvide(kernel: inversify.interfaces.Kernel, ...modules: any[]): void;

export function makeProvideDecorator(kernel: inversify.interfaces.Kernel):
    (serviceIdentifier: (string|Symbol|inversify.interfaces.Newable<any>)) => (target: any) => any;

export function makeFluentProvideDecorator(kernel: inversify.interfaces.Kernel):
    (serviceIdentifier: (string|Symbol|inversify.interfaces.Newable<any>)) => IProvideInWhenOnSyntax<any>;
