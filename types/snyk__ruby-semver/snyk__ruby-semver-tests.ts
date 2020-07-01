import {
    gt,
    gte,
    lt,
    lte,
    eq,
    neq,
    cmp,
    compare,
    rcompare,
    diff,
    valid,
    prerelease,
    major,
    minor,
    patch,
    validRange,
    satisfies,
    maxSatisfying,
    minSatisfying,
    intersects,
    inc,
    gtr,
    ltr,
    outside,
} from '@snyk/ruby-semver';
import GemVersion from '@snyk/ruby-semver/lib/ruby/gem-version';
import GemRequirement from '@snyk/ruby-semver/lib/ruby/gem-requirement';

// comparison
gt('1.2.3', '2.3.4'); // $ExpectedType boolean
gte('1.2.3', '2.3.4'); // $ExpectedType boolean
lt('1.2.3', '2.3.4'); // $ExpectedType boolean
lte('1.2.3', '2.3.4'); // $ExpectedType boolean
eq('1.2.3', '2.3.4'); // $ExpectedType boolean
neq('1.2.3', '2.3.4'); // $ExpectedType boolean
cmp('1.2.3', '>', '2.3.4'); // $ExpectedType boolean
compare('1.2.3', '2.3.4'); // $ExpectedType boolean
rcompare('1.2.3', '2.3.4'); // $ExpectedType boolean
diff('1.2.3', '2.3.4'); // $ExpectedType string
// functions
valid('1.2.3'); // $ExpectedType boolean
prerelease('1.2.3'); // $ExpectedType string[]
major('1.2.3'); // $ExpectedType number
minor('1.2.3'); // $ExpectedType number
patch('1.2.3'); // $ExpectedType number
inc(); // $ExpectedType never
// ranges
validRange('>1.2.3'); // $ExpectedType boolean
satisfies('2.3.4', '>1.2.3'); // $ExpectedType boolean
maxSatisfying(['2.3.4'], '>1.2.3'); // $ExpectedType string
minSatisfying(['1.2.3'], '<2.3.4'); // $ExpectedType string
intersects('>1.2.3', '<2.3.4'); // $ExpectedType boolean
gtr(); // $ExpectedType never
ltr(); // $ExpectedType never
outside(); // $ExpectedType never

// GemVersion
GemVersion.isCorrect('1.2.3'); // $ExpectedType boolean
GemVersion.create('1.2.3'); // $ExpectedType GemVersion
const gemVersion = new GemVersion('1.2.3'); // $ExpectedType GemVersion
gemVersion.bump(); // $ExpectedType GemVersion
gemVersion.compare(new GemVersion('2.3.4')); // $ExpectedType -1 | 0 | 1
gemVersion.getSegments(); // $ExpectedType (string | number)[]
gemVersion.isIdentical(new GemVersion('1.2.3')); // $ExpectedType boolean
gemVersion.isPrerelease(); // $ExpectedType boolean
gemVersion.release(); // $ExpectedType GemVersion
gemVersion.toString(); // $ExpectedType string

// GemRequirement
GemRequirement.create('>1.2.3'); // $ExpectedType GemRequirement
GemRequirement.parse('~>1.2.3'); // $ExpectedType [Op, GemVersion]
const gemRequirement = new GemRequirement('>1.2.3'); // $ExpectedType GemRequirement
gemRequirement.asList(); // $ExpectedType string[]
gemRequirement.isPrerelease; // $ExpectedType boolean
gemRequirement.satisfiedBy(new GemVersion('1.2.3')); // $ExpectedType boolean
gemRequirement.toString(); // $ExpectedType string
