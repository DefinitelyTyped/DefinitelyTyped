


function test_version() {
    var version: string = JsHamcrest.version;
}


//
// Descriptions
//

function test_append() {
    new JsHamcrest.Description().append("foo");
}

function test_appendDescriptionOf_acceptsSelfDescribingType() {
    var obj: JsHamcrest.SelfDescribing;
    new JsHamcrest.Description().appendDescriptionOf(obj);
}

function test_appendDescriptionOf_acceptsObjectWithDescribeToMethod() {
    var obj: any = {
        describeTo(description: JsHamcrest.Description): void {
            description.append('obj');
        }
    }
    new JsHamcrest.Description().appendDescriptionOf(obj);
}

function test_appendList() {
    new JsHamcrest.Description().appendList("[", ",", "]", [1, 2, 3]);
}

function test_appendLiteral() {
    new JsHamcrest.Description().appendLiteral(undefined);
    new JsHamcrest.Description().appendLiteral(null);
    new JsHamcrest.Description().appendLiteral(true);
    new JsHamcrest.Description().appendLiteral(42);
    new JsHamcrest.Description().appendLiteral(3.14159);
    new JsHamcrest.Description().appendLiteral("foo");
    new JsHamcrest.Description().appendLiteral([1, 2, 3]);
    new JsHamcrest.Description().appendLiteral(JsHamcrest.Description);
}

function test_appendValueList() {
    var obj: JsHamcrest.SelfDescribing;
    new JsHamcrest.Description().appendValueList("[", ",", "]", [obj, obj, obj]);
}

function test_get() {
    var desc: string = new JsHamcrest.Description().get();
}


//
// Matcher
//

function test_SimpleMatcher(actual: any, matcher: JsHamcrest.SimpleMatcher): JsHamcrest.Description {
    var description = new JsHamcrest.Description();
    description.append('Expected ');
    matcher.describeTo(description);
    if (!matcher.matches(actual)) {
        description.append(', but was ');
        matcher.describeValueTo(actual, description);
        description.append(': FAIL');
    }
    else {
        description.append(': PASS');
    }
    return description;
}

function test_CombinableMatcher(matcher: JsHamcrest.CombinableMatcher): JsHamcrest.CombinableMatcher {
    return matcher.and(not(string())).or(bool());
}


//
// Helpers
//

function test_isMatcher() {
    JsHamcrest.isMatcher(empty());
}

function test_EqualTo() {
    var hasSecondCharacter = JsHamcrest.EqualTo(function (matcher: JsHamcrest.Matcher) {
        return new JsHamcrest.SimpleMatcher({
            matches: function (actual: any) {
                return actual && actual.length >= 2 && matcher.matches(actual.charAt(2));
            },
            describeTo: function (description: JsHamcrest.Description) {
                description.append('string with second character ').appendDescriptionOf(matcher);
            }
        });
    });
    assertThat('foo', hasSecondCharacter('o'));
    assertThat('foo', hasSecondCharacter(greaterThan('n')));
}


//
// Operators
//

function test_assert() {
    // truthiness
    JsHamcrest.Operators.assert('foo');
    // basic equality
    JsHamcrest.Operators.assert('foo', 'foo');
    // matcher
    JsHamcrest.Operators.assert('foo', is('foo'));
    // options
    JsHamcrest.Operators.assert('foo', is('foo'), {
        message: 'Name',
        pass: function (result) { alert('[PASS] ' + result); },
        fail: function (result) { alert('[FAIL] ' + result); }
    });
}

function test_filter() {
    var evens = JsHamcrest.Operators.filter([1, 2, 3, 4, 5], even());
}

function test_callTo() {
    var thrower = JsHamcrest.Operators.callTo(function (ok) { if (!ok) { throw new Error(); } }, false);
}


//
// Collection Matchers
//

function test_empty() {
    assertThat([], empty());
    assertThat('', empty());
}

function test_everyItem() {
    assertThat([1,2,3], everyItem(greaterThan(0)));
    assertThat([1,'1'], everyItem(1));
}

function test_hasItem() {
    assertThat([1,2,3], hasItem(equalTo(3)));
    assertThat([1,2,3], hasItem(3));
}

function test_hasItems() {
    assertThat([1,2,3], hasItems(2,3));
    assertThat([1,2,3], hasItems(greaterThan(2)));
    assertThat([1,2,3], hasItems(1, greaterThan(2)));
}

function test_hasSize() {
    assertThat([1,2,3], hasSize(3));
    assertThat([1,2,3], hasSize(lessThan(5)));
    assertThat('string', hasSize(6));
    assertThat('string', hasSize(greaterThan(3)));
    assertThat({a:1, b:2}, hasSize(equalTo(2)));
}

function test_isIn() {
    assertThat(1, isIn([1,2,3]));
    assertThat(1, isIn(1,2,3));
}

function test_oneOf() {
    assertThat(1, oneOf([1,2,3]));
    assertThat(1, oneOf(1,2,3));
}

//
// Core Matchers
//

function test_allOf() {
    assertThat(5, allOf([greaterThan(0), lessThan(10)]));
    assertThat(5, allOf([5, lessThan(10)]));
    assertThat(5, allOf(greaterThan(0), lessThan(10)));
    assertThat(5, allOf(5, lessThan(10)));
}

function test_anyOf() {
    assertThat(5, anyOf([even(), greaterThan(2)]));
    assertThat(5, anyOf(even(), greaterThan(2)));
}

function test_both() {
    assertThat(10, both(greaterThan(5)).and(even()));
}

function test_either() {
    assertThat(10, either(greaterThan(50)).or(even()));
}

function test_equalTo() {
    assertThat('10', equalTo(10));
}

function test_is() {
    assertThat('10', is(10));
    assertThat('10', is(equalTo(10)));
}

function test_nil() {
    assertThat(undefined, nil());
    assertThat(null, nil());
}

function test_not() {
    assertThat(10, not(20));
    assertThat(10, not(is(20)));
}

function test_raises() {
    var myFunction = function() {
        // Do something dangerous...
        throw new Error();
    };

    assertThat(myFunction, raises('Error'));
}

function test_raisesAnything() {
    var myFunction = function() {
        // Do something dangerous...
        throw 'Some unexpected error';
    };

    assertThat(myFunction, raisesAnything());
}

function test_sameAs() {
    var number = 10, anotherNumber = number;
    assertThat(number, sameAs(anotherNumber));
}

function test_truth() {
    assertThat(10, truth());
    assertThat({}, truth());
    assertThat(0, not(truth()));
    assertThat('', not(truth()));
    assertThat(null, not(truth()));
    assertThat(undefined, not(truth()));
}


//
// Number Matchers
//

function test_between() {
    assertThat(5, between(4).and(7));
}

function test_closeTo() {
    assertThat(0.5, closeTo(1.0, 0.5));
    assertThat(1.0, closeTo(1.0, 0.5));
    assertThat(1.5, closeTo(1.0, 0.5));
    assertThat(2.0, not(closeTo(1.0, 0.5)));
}

function test_divisibleBy() {
    assertThat(21, divisibleBy(3));
}

function test_even() {
    assertThat(4, even());
}

function test_greaterThan() {
    assertThat(10, greaterThan(5));
}

function test_greaterThanOrEqualTo() {
    assertThat(10, greaterThanOrEqualTo(5));
}

function test_lessThan() {
    assertThat(5, lessThan(10));
}

function test_lessThanOrEqualTo() {
    assertThat(5, lessThanOrEqualTo(10));
}

function test_notANumber() {
    assertThat(Math.sqrt(-1), notANumber());
}

function test_zero() {
    assertThat(0, zero());
    assertThat('0', not(zero()));
}


//
// Object Matchers
//

function test_bool() {
    assertThat(true, bool());
    assertThat(false, bool());
    assertThat("text", not(bool()));
}

function test_func() {
    assertThat(function() {}, func());
    assertThat("text", not(func()));
}

function test_hasFunction() {
    var greeter = {
        sayHello: function(name: string) {
            alert('Hello, ' + name);
        }
    };

    assertThat(greeter, hasFunction('sayHello'));
}

function test_hasMember() {
    var greeter = {
        marco: 'polo',
        sayHello: function(name: string) {
            alert('Hello, ' + name);
        }
    };

    assertThat(greeter, hasMember('marco'));
    assertThat(greeter, hasMember('sayHello'));

    assertThat(greeter, hasMember('marco', equalTo('polo')));
}

function test_instanceOf() {
    assertThat([], instanceOf(Array));
}

function test_number() {
    assertThat(10, number());
    assertThat('10', not(number()));
}

function test_object() {
    assertThat({}, object());
    assertThat(10, not(object()));
}

function test_string() {
    assertThat('10', string());
    assertThat(10, not(string()));
}

function test_typeOf() {
    assertThat(10, typeOf('number'));
    assertThat({}, typeOf('object'));
    assertThat('10', typeOf('string'));
    assertThat(function(){}, typeOf('function'));
}


//
// Text Matchers
//

function test_containsString() {
    assertThat('string', containsString('tri'));
}

function test_emailAddress() {
    assertThat('user@domain.com', emailAddress());
}

function test_endsWith() {
    assertThat('string', endsWith('ring'));
}

function test_equalIgnoringCase() {
    assertThat('str', equalIgnoringCase('Str'));
}

function test_matches() {
    assertThat('0xa4f2c', matches(/\b0[xX][0-9a-fA-F]+\b/));
}

function test_startsWith() {
    assertThat('string', startsWith('str'));
}


//
// Integration
//

JsHamcrest.Integration.copyMembers(window);

JsHamcrest.Integration.copyMembers(JsHamcrest.Matchers, window);

JsHamcrest.Integration.installMatchers({ truthy: JsHamcrest.Matchers.truth });

JsHamcrest.Integration.installOperators({
    assertNotThat: function (actual: any, matcher: JsHamcrest.Matcher, message?: string): JsHamcrest.Description {
        return JsHamcrest.Operators.assert(actual, JsHamcrest.Matchers.not(matcher), { message: message });
    }
});


//
// Testing Frameworks
//

JsHamcrest.Integration.WebBrowser();

JsHamcrest.Integration.Rhino();

JsHamcrest.Integration.JsTestDriver();
JsHamcrest.Integration.JsTestDriver({ scope: window });

JsHamcrest.Integration.Nodeunit();
JsHamcrest.Integration.Nodeunit({ scope: window });

JsHamcrest.Integration.JsUnitTest();
JsHamcrest.Integration.JsUnitTest({ scope: window });

JsHamcrest.Integration.YUITest();
JsHamcrest.Integration.YUITest({ scope: window });

JsHamcrest.Integration.QUnit();
JsHamcrest.Integration.QUnit({ scope: window });

JsHamcrest.Integration.jsUnity();
JsHamcrest.Integration.jsUnity({ scope: window });
JsHamcrest.Integration.jsUnity({ attachAssertions: true });
JsHamcrest.Integration.jsUnity({ scope: window, attachAssertions: true });

JsHamcrest.Integration.screwunit();
JsHamcrest.Integration.screwunit({ scope: window });

JsHamcrest.Integration.jasmine();
JsHamcrest.Integration.jasmine({ scope: window });
