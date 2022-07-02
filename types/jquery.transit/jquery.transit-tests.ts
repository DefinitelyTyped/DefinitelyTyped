class TransitOptions implements JQueryTransitOptions {
    opacity: number;
    duration: number;
    delay: number;
    easing: string;
    complete: () => void;
    scale: any;
}

$(document).ready(function() {
    test_translate();
    test_x();
    test_y();
    test_width();
    test_height();
    test_margin();
    test_marginTop();
    test_marginBottom();
    test_marginRight();
    test_marginLeft();
    test_skewX();
    test_skewY();
    test_perspective();
    test_rotate();
    test_rotateX();
    test_rotateY();
    test_rotate3d();
    test_transform();
    // test_transformOrigin();
    test_opacity();
    test_scale();
    test_duration();
    // Wait for all tests to complete and report results
    setTimeout(Assert.Results, 2000);
});

abstract class Assert {
    static totalTests: number = 0;
    static passedTests: number = 0;

    static Results() {
        var results = 'Tests succeeded - ';
        results += Assert.passedTests;
        results += ' out of';
        results += Assert.totalTests;
        results += ' Tests failed - ';
        results += Assert.totalTests - Assert.passedTests;
        results += ' out of ';
        results += Assert.totalTests;
        console.log(results);
    }

    static AssertionFailed(actual: any, expected: any, test?: string) {
        console.log(
            (test || '') + ' assertion failed -- expected ' + expected.toString() + ' actual ' + actual.toString(),
        );
    }

    static Equal(actual: string, expected: string, test: string) {
        Assert.totalTests++;
        expected = expected.slice(0, expected.indexOf('transition'));
        expected = expected.trim();
        if (expected.indexOf(';') < 0) expected += ';';
        if (actual === expected) {
            Assert.passedTests++;
            return;
        }
        Assert.AssertionFailed(actual, expected, test);
    }

    static NotEqual(actual: any, expected: any, test?: string) {
        Assert.totalTests++;
        if (actual !== expected) {
            Assert.passedTests++;
            return;
        }
        Assert.AssertionFailed(actual, expected, test);
    }
}

function test_signatures() {
    var TestObject = $('<div>');
    var options = new TransitOptions();
    options.opacity = 50;
    options.duration = 250;

    TestObject.css('scale', 2);

    TestObject.transition(options);
    TestObject.transition(options, 500);
    TestObject.transition(options, 'in');
    TestObject.transition(options, function() {
        var test: boolean = true;
    });
    TestObject.transition(options, 500, 'out');
    TestObject.transition(options, 500, 'in-out', function() {
        var test: boolean = true;
    });
}

function test_translate() {
    var TestObject = $('<div>');
    TestObject.css('translate', [60, 30]);
    var cssStyle = TestObject.attr('style');
    TestObject.transition({
        translate: [60, 30],
        duration: 1,
        complete: function() {
            Assert.Equal(TestObject.attr('style'), cssStyle, 'Translate number[] transition test');
        },
    });
    TestObject.css('translate', '60px, 30px');
    var cssStyle = TestObject.attr('style');
    TestObject.transition({
        translate: ['60px', '30px'],
        duration: 1,
        complete: function() {
            Assert.Equal(TestObject.attr('style'), cssStyle, 'Translate string[] transition test');
        },
    });
    TestObject.css('translate', '60px, 30px');
    var cssStyle = TestObject.attr('style');
    TestObject.transition({
        translate: '60px, 30px',
        duration: 1,
        complete: function() {
            Assert.Equal(TestObject.attr('style'), cssStyle, 'Translate string transition test');
        },
    });
}

function test_x() {
    var TestObject = $('<div>');
    TestObject.css('x', '10px');
    var cssStyle = TestObject.attr('style');
    TestObject.transition({
        x: '10px',
        duration: 1,
        complete: function() {
            Assert.Equal(TestObject.attr('style'), cssStyle, 'x string transition test');
        },
    });
    TestObject.css('x', 10);
    var cssStyle = TestObject.attr('style');
    TestObject.transition({
        x: 10,
        duration: 1,
        complete: function() {
            Assert.Equal(TestObject.attr('style'), cssStyle, 'x number transition test');
        },
    });
}

function test_y() {
    var TestObject = $('<div>');
    TestObject.css('y', '10px');
    var cssStyle = TestObject.attr('style');
    TestObject.transition({
        y: '10px',
        duration: 1,
        complete: function() {
            Assert.Equal(TestObject.attr('style'), cssStyle, 'y string transition test');
        },
    });
    TestObject.css('y', 10);
    var cssStyle = TestObject.attr('style');
    TestObject.transition({
        y: 10,
        duration: 1,
        complete: function() {
            Assert.Equal(TestObject.attr('style'), cssStyle, 'y number transition test');
        },
    });
}

function test_width() {
    var TestObject = $('<div>');
    TestObject.css('width', '10px');
    var cssStyle = TestObject.attr('style');
    TestObject.transition({
        width: '10px',
        duration: 1,
        complete: function() {
            Assert.Equal(TestObject.attr('style'), cssStyle, 'width string transition test');
        },
    });
    TestObject.css('width', 10);
    var cssStyle = TestObject.attr('style');
    TestObject.transition({
        width: 10,
        duration: 1,
        complete: function() {
            Assert.Equal(TestObject.attr('style'), cssStyle, 'width number transition test');
        },
    });
}

function test_height() {
    var TestObject = $('<div>');
    TestObject.css('height', '10px');
    var cssStyle = TestObject.attr('style');
    TestObject.transition({
        height: '10px',
        duration: 1,
        complete: function() {
            Assert.Equal(TestObject.attr('style'), cssStyle, 'height string transition test');
        },
    });
    TestObject.css('height', 10);
    var cssStyle = TestObject.attr('style');
    TestObject.transition({
        height: 10,
        duration: 1,
        complete: function() {
            Assert.Equal(TestObject.attr('style'), cssStyle, 'height number transition test');
        },
    });
}

function test_margin() {
    var TestObject = $('<div>');
    TestObject.css('margin', '10px');
    var cssStyle = TestObject.attr('style');
    TestObject.transition({
        margin: '10px',
        duration: 1,
        complete: function() {
            Assert.Equal(TestObject.attr('style'), cssStyle, 'margin string transition test');
        },
    });
}

function test_marginRight() {
    var TestObject = $('<div>');
    TestObject.css('margin-right', '10px');
    var cssStyle = TestObject.attr('style');
    TestObject.transition({
        marginRight: '10px',
        duration: 1,
        complete: function() {
            Assert.Equal(TestObject.attr('style'), cssStyle, 'marginRight transition test');
        },
    });
}

function test_marginLeft() {
    var TestObject = $('<div>');
    TestObject.css('margin-left', '10px');
    var cssStyle = TestObject.attr('style');
    TestObject.transition({
        marginLeft: '10px',
        duration: 1,
        complete: function() {
            Assert.Equal(TestObject.attr('style'), cssStyle, 'marginLeft transition test');
        },
    });
}

function test_marginTop() {
    var TestObject = $('<div>');
    TestObject.css('margin-top', '10px');
    var cssStyle = TestObject.attr('style');
    TestObject.transition({
        marginTop: '10px',
        duration: 1,
        complete: function() {
            Assert.Equal(TestObject.attr('style'), cssStyle, 'marginTop transition test');
        },
    });
}

function test_marginBottom() {
    var TestObject = $('<div>');
    TestObject.css('margin-bottom', '10px');
    var cssStyle = TestObject.attr('style');
    TestObject.transition({
        marginBottom: '10px',
        duration: 1,
        complete: function() {
            Assert.Equal(TestObject.attr('style'), cssStyle, 'marginBottom transition test');
        },
    });
}

function test_skewX() {
    var TestObject = $('<div>');
    TestObject.css('transform', 'skewX(30deg)');
    var cssStyle = TestObject.attr('style');
    TestObject.transition({
        skewX: '30deg',
        duration: 1,
        complete: function() {
            Assert.Equal(TestObject.attr('style'), cssStyle, 'skewX transition test');
        },
    });
}

function test_skewY() {
    var TestObject = $('<div>');
    TestObject.css('transform', 'skewY(30deg)');
    var cssStyle = TestObject.attr('style');
    TestObject.transition({
        skewY: '30deg',
        duration: 1,
        complete: function() {
            Assert.Equal(TestObject.attr('style'), cssStyle, 'skewY transition test');
        },
    });
}

function test_perspective() {
    var TestObject = $('<div>');
    TestObject.css('perspective', '100px');
    var cssStyle = TestObject.attr('style');
    TestObject.transition({
        perspective: '100px',
        duration: 1,
        complete: function() {
            Assert.Equal(TestObject.attr('style'), cssStyle, 'perspective transition test');
        },
    });
}

function test_rotate() {
    var TestObject = $('<div>');
    TestObject.css('transform', 'rotateY(20deg)');
    var cssStyle = TestObject.attr('style');
    TestObject.transition({
        rotateY: '20deg',
        duration: 1,
        complete: function() {
            Assert.Equal(TestObject.attr('style'), cssStyle, 'rotateY transition test');
        },
    });
}

function test_rotateX() {
    var TestObject = $('<div>');
    TestObject.css('transform', 'rotateX(20deg)');
    var cssStyle = TestObject.attr('style');
    TestObject.transition({
        rotateX: '20deg',
        duration: 1,
        complete: function() {
            Assert.Equal(TestObject.attr('style'), cssStyle, 'rotateX transition test');
        },
    });
}

function test_rotateY() {
    var TestObject = $('<div>');
    TestObject.css('transform', 'rotateY(20deg)');
    var cssStyle = TestObject.attr('style');
    TestObject.transition({
        rotateY: '20deg',
        duration: 1,
        complete: function() {
            Assert.Equal(TestObject.attr('style'), cssStyle, 'rotateY transition test');
        },
    });
}

function test_rotate3d() {
    var TestObject = $('<div>');
    TestObject.css('transform', 'rotate3d(1, 1, 1, 20deg)');
    var cssStyle = TestObject.attr('style');
    TestObject.transition({
        rotate3d: '1, 1, 1, 20deg',
        duration: 1,
        complete: function() {
            Assert.Equal(TestObject.attr('style'), cssStyle, 'rotate3d transition test');
        },
    });
}

function test_transform() {
    var TestObject = $('<div>');
    TestObject.css('transform', 'scale(0.2, 0.2)');
    var cssStyle = TestObject.attr('style');
    TestObject.transition({
        transform: 'scale(0.2)',
        duration: 1,
        complete: function() {
            Assert.Equal(TestObject.attr('style'), cssStyle, 'transform transition test');
        },
    });
}

function test_transformOrigin() {
    var TestObject = $('<div>');
    TestObject.css('transformOrgin', '20% 40%');
    var cssStyle = TestObject.attr('style');
    TestObject.transition({
        transformOrigin: '20% 40%',
        duration: 1,
        complete: function() {
            Assert.Equal(TestObject.attr('style'), cssStyle, 'transformOrigin transition test');
        },
    });
}

function test_opacity() {
    var TestObject = $('<div>');
    TestObject.css('opacity', 25);
    var cssStyle = TestObject.attr('style');
    TestObject.transition({
        opacity: 25,
        duration: 1,
        complete: function() {
            Assert.Equal(TestObject.attr('style'), cssStyle, 'Opacity transition test');
        },
    });
}

function test_scale() {
    var TestObject = $('<div>');
    TestObject.css('scale', 0.5);
    var cssStyle = TestObject.attr('style');
    TestObject.transition({
        scale: 0.5,
        duration: 1,
        complete: function() {
            Assert.Equal(TestObject.attr('style'), cssStyle, 'Scale transition test');
        },
    });
    TestObject.css('scale', [2, 3]);
    var cssStyle = TestObject.attr('style');
    TestObject.transition({
        scale: [2, 3],
        duration: 1,
        complete: function() {
            Assert.Equal(TestObject.attr('style'), cssStyle, 'Scale transition test');
        },
    });
}

function test_duration() {
    var TestObject = $('<div>');
    TestObject.css('opacity', 75);
    var cssStyle = TestObject.attr('style');
    TestObject.transition({
        opacity: 75,
        duration: 1000,
        complete: function() {
            Assert.Equal(TestObject.attr('style'), cssStyle, 'Duration post-transition test');
        },
    });
    // Test the transitions state partway through and assert that we're not to our final state yet.
    setTimeout(function() {
        Assert.NotEqual(TestObject.attr('style'), cssStyle, 'Duration intra-transition test');
    }, 300);
}
