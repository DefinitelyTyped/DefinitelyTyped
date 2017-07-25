import * as when from 'saywhen';

when(jasmine.createSpy('test')); // $ExpectType CallHandler<Func>
when(jasmine.createSpy('test')).isCalled; // $ExpectType Proxy<Func>

when.captor();	// $ExpectType MatcherProxy<{}>
when.captor(jasmine.any(Number));	// $ExpectType MatcherProxy<any>
when.noConflict();	// $ExpectType void
