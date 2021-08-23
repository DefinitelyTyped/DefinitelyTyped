import when = require('saywhen');

// This interface is needed to get around the fact that the new jasmine
// `createSpy` method takes a generic type while the old typings don't.
// That means that in Typescript 3.0 the spy will be `Spy` and in 3.1 it
// will be `Spy<InferableFunction>`. This interface matches both and is
// what dtslint will expect the type to be.
interface JasmineSpy extends jasmine.Spy {
    (...params: any[]): any;
}
const spy: JasmineSpy = jasmine.createSpy('test');

when(spy); // $ExpectType CallHandler<JasmineSpy>
when(spy).isCalled; // $ExpectType Proxy<JasmineSpy>

const top = (<T>(x?: T): T => x!)();
type Top = typeof top;
declare function expectMatcherProxyTop(x: (arg: Top) => boolean): void;

expectMatcherProxyTop(when.captor());
when.captor(jasmine.any(Number));    // $ExpectType MatcherProxy<AsymmetricMatcher<any>>
when.noConflict();    // $ExpectType void
