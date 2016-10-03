// Type definitions for inversify-binding-decorators 1.0.0
// Project: https://github.com/inversify/inversify-binding-decorators
// Definitions by: inversify <https://github.com/inversify/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../inversify/inversify.d.ts" />

declare namespace inversifyBindingDecorators {

    namespace interfaces {

        export interface ProvideInSyntax<T> extends ProvideDoneSyntax<T> {
            inSingletonScope(): ProvideWhenOnSyntax<T>;
        }

        export interface ProvideDoneSyntax<T> {
            done(): (target: any) => any;
        }

        export interface ProvideOnSyntax<T> extends ProvideDoneSyntax<T> {
            onActivation(fn: (context: inversify.interfaces.Context, injectable: T) => T): ProvideWhenSyntax<T>;
        }

        export interface ProvideInWhenOnSyntax<T> extends ProvideInSyntax<T>, ProvideWhenSyntax<T>, ProvideOnSyntax<T> {}

        export interface ProvideWhenOnSyntax<T> extends ProvideWhenSyntax<T>, ProvideOnSyntax<T> {}

        export interface ProvideWhenSyntax<T> extends ProvideDoneSyntax<T> {
            when(constraint: (request: inversify.interfaces.Request) => boolean): ProvideOnSyntax<T>;
            whenTargetNamed(name: string): ProvideOnSyntax<T>;
            whenTargetTagged(tag: string, value: any): ProvideOnSyntax<T>;
            whenInjectedInto(parent: (Function|string)): ProvideOnSyntax<T>;
            whenParentNamed(name: string): ProvideOnSyntax<T>;
            whenParentTagged(tag: string, value: any): ProvideOnSyntax<T>;
            whenAnyAncestorIs(ancestor: (Function|string)): ProvideOnSyntax<T>;
            whenNoAncestorIs(ancestor: (Function|string)): ProvideOnSyntax<T>;
            whenAnyAncestorNamed(name: string): ProvideOnSyntax<T>;
            whenAnyAncestorTagged(tag: string, value: any): ProvideOnSyntax<T>;
            whenNoAncestorNamed(name: string): ProvideOnSyntax<T>;
            whenNoAncestorTagged(tag: string, value: any): ProvideOnSyntax<T>;
            whenAnyAncestorMatches(constraint: (request: inversify.interfaces.Request) => boolean): ProvideOnSyntax<T>;
            whenNoAncestorMatches(constraint: (request: inversify.interfaces.Request) => boolean): ProvideOnSyntax<T>;
        }

    }

    export function autoProvide(kernel: inversify.interfaces.Kernel, ...modules: any[]): void;

    export function makeProvideDecorator(kernel: inversify.interfaces.Kernel):
        (serviceIdentifier: inversify.interfaces.ServiceIdentifier<any>) => (target: any) => any;

    export function makeFluentProvideDecorator(kernel: inversify.interfaces.Kernel):
        (serviceIdentifier: inversify.interfaces.ServiceIdentifier<any>) => interfaces.ProvideInWhenOnSyntax<any>;

}

declare module "inversify-binding-decorators" {
  export = inversifyBindingDecorators;
}
