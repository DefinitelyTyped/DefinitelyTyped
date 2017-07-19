/// <reference types="jasmine" />

import * as when from 'saywhen';

when(jasmine.createSpy('test')); // $ExpectType CallHandler<(...args: any[]) => any>
when(jasmine.createSpy('test')).isCalled; // $ExpectType Proxy<(...args: any[]) => any>
