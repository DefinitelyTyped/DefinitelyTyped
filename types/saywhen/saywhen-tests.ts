import * as when from 'saywhen';

when(jasmine.createSpy('test')); // $ExpectType CallHandler<(...args: any[]) => any>
when(jasmine.createSpy('test')).isCalled; // $ExpectType Proxy<(...args: any[]) => any>

when.captor();	// $ExpectType MatcherProxy<{}>
when.captor(jasmine.any(Number));	// $ExpectType MatcherProxy<jasmine.Any>
when.noConflict();	// $ExpectType void
