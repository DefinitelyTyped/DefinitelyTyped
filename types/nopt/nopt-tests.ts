/**
* Maintained by: jbondc <https://github.com/jbondc>
*/

import nopt = require("nopt");
declare var console: { log(x: any): void };

nopt({"--foo" : String})

nopt({ "--foo": String }, { "-f": "--foo"})
nopt({ "--foo": String }, { "-f": ["--foo", "-d"] })

nopt({ "--foo": String }, { "-f": ["--foo", "-d"] }, ["test me --foo arg"])
var cmd = nopt({ "--foo": String }, { "-f": ["--foo", "-d"] }, ["test me --foo arg"], 2)

console.log(cmd.argv.cooked)
console.log(cmd.argv.original)
console.log(cmd.argv.remain)
