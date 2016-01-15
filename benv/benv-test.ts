/// <reference path="benv.d.ts" />
/// <reference path='../node/node.d.ts'/>
/// <reference path="../jasmine/jasmine.d.ts" />
/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../should/should.d.ts" />

beforeEach(function(done) {
  benv.setup(function() {
    benv.expose({
      '$': benv.require('../client/vendor/zepto.js', 'Zepto')
    });
    done();
  });
});

afterEach(function() {
  benv.teardown();
});

describe('app.js', function() {
  it('renders Wat', function() {
    require('../client/app.js');
    $('body').html().should.containEql('Wat!?');
  });
});
