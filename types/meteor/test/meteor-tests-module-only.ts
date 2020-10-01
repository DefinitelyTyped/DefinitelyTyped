// This file is for tests that involve modules that don't have corresponding
// globals.

import { Promise as MeteorPromise } from "meteor/promise";
import { ServiceConfiguration } from "meteor/service-configuration";
import { WebApp } from "meteor/webapp";

function foo(x: number) {
    return `${x}`;
}

// $ExpectType Promise<string>
MeteorPromise.async(foo, null)(1);

// $ExpectType string
MeteorPromise.async(foo, null)(1).await();

// $ExpectType Promise<string>
MeteorPromise.asyncApply(foo, null, [1]);

// $ExpectType string
MeteorPromise.asyncApply(foo, null, [1]).await();

async function bar() {
    return 1;
}

// $ExpectType number
MeteorPromise.await(bar());

// $ExpectType number[]
MeteorPromise.awaitAll([bar()]);
