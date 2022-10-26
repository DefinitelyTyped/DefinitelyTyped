import Connection = require('@nginstack/engine/lib/connection/Connection.js');
import Database = require('@nginstack/engine/lib/database/Database');
import UpdateScript = require('@nginstack/devops/lib/update/UpdateScript.js');

const script = new UpdateScript(); // $ExpectType UpdateScript

script.source; // $ExpectType Connection
script.sourceDB; // $ExpectType Database
script.target; // $ExpectType Connection
script.targetDB; // $ExpectType Database
script.result; // $ExpectType string

script.getProductFromKey(-1); // $ExpectType number | null
script.finish('*', -1); // $ExpectType void
script.fail(new Error('*')); // $ExpectType void
script.copyChildrenViewPermissions(-1); // $ExpectType number

function testMajorVersions(prior: number, current: number): boolean {
    return current > prior;
}
testMajorVersions(64, 65); // $ExpectType boolean
