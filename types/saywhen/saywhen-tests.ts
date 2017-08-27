import * as when from 'saywhen';

when(jasmine.createSpy('test')); // $ExpectType CallHandler<Spy>
when(jasmine.createSpy('test')).isCalled; // $ExpectType Proxy<Spy>

when.captor();	// $ExpectType MatcherProxy<{}>
when.captor(jasmine.any(Number));	// $ExpectType MatcherProxy<Any>
when.noConflict();	// $ExpectType void
