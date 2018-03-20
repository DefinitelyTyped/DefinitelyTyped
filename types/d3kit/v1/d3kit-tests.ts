/// <reference types="mocha" />
/// <reference types="chai" />

var expect = chai.expect;
describe('Skeleton', function(){
    var element: Element, $element: d3.Selection<any>, $svg: d3.Selection<any>, skeleton: d3kit.Skeleton;

    beforeEach(function(done){
      element = document.body.appendChild(document.createElement('div')) as Element;
      skeleton = new d3kit.Skeleton(element, null, ['custom1', 'custom2']);
      $element = d3.select(element);
      $svg = $element.select('svg');
      done();
    });

    describe('new Skeleton()', function(){
      it('should create <svg> inside the element', function(){
        expect($element.select('svg').size()).to.be.equal(1);
      });
      it('should create <g> inside <svg> inside the element', function(){
        expect($element.select('svg').select('g').size()).to.be.equal(1);
      });
    });

    describe('#getCustomEventNames()', function(){
      it('should return custom event names', function(){
        expect(skeleton.getCustomEventNames()).to.deep.equal(['custom1', 'custom2']);
      });
    });

    describe('#getDispatcher()', function(){
      it('should return event dispatcher', function(){
        expect(skeleton.getDispatcher()).to.be.an('Object');
        expect(skeleton.getDispatcher().data).to.be.a('Function');
      });
    });

    describe('#getInnerWidth()', function(){
      it('should return width of the skeleton excluding margin', function(){
        skeleton.options({
          margin: {left: 10, right: 10}
        });
        skeleton.width(100);
        expect(skeleton.getInnerWidth()).to.equal(80);
      });
    });

    describe('#getInnerHeight()', function(){
      it('should return height of the skeleton excluding margin', function(){
        skeleton.options({
          margin: {top: 10, bottom: 20}
        });
        skeleton.height(100);
        expect(skeleton.getInnerHeight()).to.equal(70);
      });
    });

    describe('#getLayerOrganizer()', function(){
      it('should return the LayerOrganizer', function(){
        expect(skeleton.getLayerOrganizer()).to.be.an('Object');
      });
    });

    describe('#getRootG()', function(){
      it('should return d3 selection of the root <g>', function(){
        var g = skeleton.getRootG();
        expect(g.size()).to.equal(1);
        expect((g[0][0] as Element).tagName).to.equal('g');
      });
    });

    describe('#getSvg()', function(){
      it('should return d3 selection of the <svg>', function(){
        var svg = skeleton.getSvg();
        expect(svg.size()).to.equal(1);
        expect((svg[0][0] as Element).tagName).to.equal('svg');
      });
    });

    describe('#data(data, doNotDispatch)', function(){
      it('should return data when called without argument', function(){
        skeleton.data({a: 1});
        expect(skeleton.data()).to.deep.equal({a: 1});
      });
      it('should set data when called with at least one argument', function(){
        skeleton.data('test');
        expect(skeleton.data()).to.equal('test');
      });
      it('after setting, should dispatch "data" event', function(done){
        skeleton.on('data.test', function(){
          // This block should be reached to pass the test.
          expect(true).to.be.true;
          done();
        });
        skeleton.data({a: 1});
      });
      it('after setting, should not dispatch "data" event if doNotDispatch is true', function(done){
        skeleton.on('data.test', function(){
          // This block should not be reached.
          expect(true).to.be.false;
          done();
        });
        skeleton.data({a: 1}, true);
        setTimeout(done, 100);
      });
    });

    describe('#options(options, doNotDispatch)', function(){
      it('should return options when called without argument', function(){
        skeleton.options({a: 2});
        expect(skeleton.options()).to.include.keys(['a']);
        expect(skeleton.options().a).to.equal(2);
      });
      it('should set options when called with at least one argument', function(){
        skeleton.options({a: 1});
        expect(skeleton.options()).to.include.keys(['a']);
        expect(skeleton.options().a).to.equal(1);
      });
      it('should not overwrite but extend existing options when setting', function(){
        skeleton.options({a: 1});
        skeleton.options({b: 2});
        expect(skeleton.options()).to.include.keys(['a', 'b']);
        expect(skeleton.options().a).to.equal(1);
        expect(skeleton.options().b).to.equal(2);
      });
      it('after setting, should dispatch "options" event', function(done){
        skeleton.on('options.test', function(){
          // This block should be reached to pass the test.
          expect(true).to.be.true;
          done();
        });
        skeleton.options({a: 1});
      });
      it('after setting, should not dispatch "options" event if doNotDispatch is true', function(done){
        skeleton.on('options.test', function(){
          // This block should not be reached.
          expect(true).to.be.false;
          done();
        });
        skeleton.options({a: 1}, true);
        setTimeout(done, 100);
      });
    });

    describe('#margin(margin, doNotDispatch)', function(){
      it('should return margin when called without argument', function(){
        var margin = {left: 10, right: 10, top: 10, bottom: 10};
        skeleton.margin(margin);
        expect(skeleton.margin()).to.deep.equal(margin);
      });
      it('should set margin when called with at least one argument', function(){
        var margin = {left: 10, right: 10, top: 10, bottom: 10};
        skeleton.margin(margin);

        skeleton.margin({left: 20});
        expect(skeleton.margin().left).to.equal(20);
        expect(skeleton.margin().right).to.equal(10);
        skeleton.margin({right: 20});
        expect(skeleton.margin().right).to.equal(20);
        skeleton.margin({top: 20});
        expect(skeleton.margin().top).to.equal(20);
        skeleton.margin({bottom: 20});
        expect(skeleton.margin().bottom).to.equal(20);
      });
      it('should update innerWidth after setting margin', function(){
        skeleton.width(100);
        skeleton.margin({left: 10, right:10});
        expect(skeleton.getInnerWidth()).to.equal(80);
        skeleton.margin({left: 15, right:15});
        expect(skeleton.getInnerWidth()).to.equal(70);
      });
      it('should update innerHeight after setting margin', function(){
        skeleton.height(100);
        skeleton.margin({top: 10, bottom:10});
        expect(skeleton.getInnerHeight()).to.equal(80);
        skeleton.margin({top: 15, bottom:15});
        expect(skeleton.getInnerHeight()).to.equal(70);
      });
      it('should update the root <g> transform/translate', function(){
        skeleton.margin({left: 30, top: 30});
        skeleton.offset([0.5, 0.5]);
        skeleton.margin({left: 10, top: 10});
        var translate = skeleton.getRootG().attr('transform');
        expect(translate).to.equal('translate(10.5,10.5)');
      });
      it('after setting, should dispatch "resize" event', function(done){
        skeleton.on('resize.test', function(){
          // This block should be reached to pass the test.
          expect(true).to.be.true;
          done();
        });
        skeleton.margin({left: 33});
      });
      it('after setting, should not dispatch "resize" event if doNotDispatch is true', function(done){
        skeleton.on('resize.test', function(){
          // This block should not be reached.
          expect(true).to.be.false;
          done();
        });
        skeleton.margin({left: 33}, true);
        setTimeout(done, 100);
      });
    });

    describe('#offset(offset)', function(){
      it('should return offset when called without argument', function(){
        var offset = [1,1];
        skeleton.offset(offset);
        expect(skeleton.offset()).to.deep.equal(offset);
      });
      it('should set offset when called with at least one argument', function(){
        var offset = [1,1];
        skeleton.offset(offset);
        skeleton.offset([2,3]);
        expect(skeleton.offset()).to.deep.equal([2,3]);
      });
      it('should update the root <g> transform/translate', function(){
        skeleton.offset([0.5, 0.5]);
        skeleton.margin({left: 10, top: 10});
        skeleton.offset([2,3]);
        var translate = skeleton.getRootG().attr('transform');
        expect(translate).to.equal('translate(12,13)');
      });
    });

    describe('#width(width, doNotDispatch)', function(){
      it('should return <svg> width when called without argument', function(){
        var w = $svg.attr('width');
        expect(skeleton.width()).to.equal(+w);
      });
      it('should set <svg> width when called with Number as the first argument', function(){
        skeleton.width(300);
        expect(+$svg.attr('width')).to.equal(300);
      });
      it('should set <svg> width when called with a Number and "px" such as "100px" as the first argument', function(){
        skeleton.width('299px');
        expect(+$svg.attr('width')).to.equal(299);
      });
      it('should set <svg> width to container\'s width when called with "auto" as the first argument', function(){
        var w = element.clientWidth;
        skeleton.width('auto');
        expect(+$svg.attr('width')).to.equal(w);
      });
      it('after setting, should dispatch "resize" event', function(done){
        skeleton.on('resize.test', function(){
          // This block should be reached to pass the test.
          expect(true).to.be.true;
          done();
        });
        skeleton.width(200);
      });
      it('after setting, should not dispatch "resize" event if doNotDispatch is true', function(done){
        skeleton.on('resize.test', function(){
          // This block should not be reached.
          expect(true).to.be.false;
          done();
        });
        skeleton.width(200, true);
        setTimeout(done, 100);
      });
    });

    describe('#height(height, doNotDispatch)', function(){
      it('should return <svg> height when called without argument', function(){
        var w = $svg.attr('height');
        expect(skeleton.height()).to.equal(+w);
      });
      it('should set <svg> height when called with Number as the first argument', function(){
        skeleton.height(300);
        expect(+$svg.attr('height')).to.equal(300);
      });
      it('should set <svg> height when called with a Number and "px" such as "100px" as the first argument', function(){
        skeleton.height('299px');
        expect(+$svg.attr('height')).to.equal(299);
      });
      it('should set <svg> height to container\'s height when called with "auto" as the first argument', function(){
        var w = element.clientHeight;
        skeleton.height('auto');
        expect(+$svg.attr('height')).to.equal(w);
      });
      it('after setting, should dispatch "resize" event', function(done){
        skeleton.on('resize.test', function(){
          // This block should be reached to pass the test.
          expect(true).to.be.true;
          done();
        });
        skeleton.height(200);
      });
      it('after setting, should not dispatch "resize" event if doNotDispatch is true', function(done){
        skeleton.on('resize.test', function(){
          // This block should not be reached.
          expect(true).to.be.false;
          done();
        });
        skeleton.height(200, true);
        setTimeout(done, 100);
      });
    });

    describe('#dimension(dimension, doNotDispatch)', function(){
      it('should return an array [width, height] when called without argument', function(){
        var dim = [+$svg.attr('width'), +$svg.attr('height')];
        expect(skeleton.dimension()).to.deep.equal(dim);
      });
      it('should set width and height of the <svg> when called with an array [width, height] as the first argument', function(){
        skeleton.dimension([118, 118]);
        expect([+$svg.attr('width'), +$svg.attr('height')]).to.deep.equal([118, 118]);
      });
      it('after setting, should dispatch "resize" event', function(done){
        skeleton.on('resize.test', function(){
          // This block should be reached to pass the test.
          expect(true).to.be.true;
          done();
        });
        skeleton.dimension([150, 150]);
      });
      it('after setting, should not dispatch "resize" event if doNotDispatch is true', function(done){
        skeleton.on('resize.test', function(){
          // This block should not be reached.
          expect(true).to.be.false;
          done();
        });
        skeleton.dimension([150, 150], true);
        setTimeout(done, 100);
      });
    });

    describe('#hasData()', function(){
      it('should return true when data are not null nor undefined', function(){
        skeleton.data({});
        expect(skeleton.hasData()).to.be.true;
        skeleton.data({test: 1});
        expect(skeleton.hasData()).to.be.true;
        skeleton.data([]);
        expect(skeleton.hasData()).to.be.true;
        skeleton.data(['test']);
        expect(skeleton.hasData()).to.be.true;
      });
      it('should return false when data are null or undefined', function(){
        skeleton.data(null);
        expect(skeleton.hasData()).to.be.false;
        skeleton.data(undefined);
        expect(skeleton.hasData()).to.be.false;
      });
    });

    describe('#hasNonZeroArea()', function(){
      it('should return true if <svg>\'s width & height excluding margin is more than zero', function(){
        skeleton.options({
          margin: {left: 10, right: 10}
        });
        skeleton.width(80);
        skeleton.options({
          margin: {top: 10, bottom: 20}
        });
        skeleton.height(50);
        expect(skeleton.hasNonZeroArea()).to.be.true;
      });
      it('should return false otherwise', function(){
        skeleton.options({
          margin: {left: 10, right: 10}
        });
        skeleton.width(20);
        skeleton.options({
          margin: {top: 10, bottom: 20}
        });
        skeleton.height(30);
        expect(skeleton.hasNonZeroArea()).to.be.false;
      });
    });

    describe('#mixin({})', function(){
      it('should extend this skeleton with new fields/functions', function(){
        skeleton.mixin({
          a: 1,
          b: 2
        });
        expect(skeleton).to.include.keys(['a', 'b']);
        expect((<any>skeleton).a).to.equal(1);
        expect((<any>skeleton).b).to.equal(2);
      });
      it('should overwrite existing fields', function(){
        skeleton.mixin({
          b: 2
        });
        skeleton.mixin({
          b: 3
        });
        expect(skeleton).to.include.keys(['b']);
        expect((<any>skeleton).b).to.equal(3);
      });
      it('should keep original fields if not overwritten', function(){
        skeleton.mixin({
          a: 1,
          b: 2
        });
        skeleton.mixin({
          c: 20,
          b: 3
        });
        expect(skeleton).to.include.keys(['a', 'b', 'c']);
        expect((<any>skeleton).a).to.equal(1);
        expect((<any>skeleton).b).to.equal(3);
        expect((<any>skeleton).c).to.equal(20);
      });
    });

    describe('#resizeToFitContainer(mode)', function(){
      it('when mode is "all" should resize to fit both width and height', function(){
        skeleton.dimension([element.clientWidth/2, element.clientHeight/2]);
        var w = element.clientWidth;
        var h = element.clientHeight;
        skeleton.resizeToFitContainer('all');
        expect(skeleton.dimension()).to.deep.equal([w, h]);
      });
      it('when mode is "both" should resize to fit both width and height', function(){
        skeleton.dimension([element.clientWidth/2, element.clientHeight/2]);
        var w = element.clientWidth;
        var h = element.clientHeight;
        skeleton.resizeToFitContainer('both');
        expect(skeleton.dimension()).to.deep.equal([w, h]);
      });
      it('when mode is "full" should resize to fit both width and height', function(){
        skeleton.dimension([element.clientWidth/2, element.clientHeight/2]);
        var w = element.clientWidth;
        var h = element.clientHeight;
        skeleton.resizeToFitContainer('full');
        expect(skeleton.dimension()).to.deep.equal([w, h]);
      });
      it('when mode is "width" should resize width to fit container but keep original height', function(){
        var w1 = element.clientWidth/2;
        var h1 = element.clientHeight/2;

        skeleton.dimension([w1, h1]);

        var w2 = element.clientWidth;
        var h2 = element.clientHeight;

        skeleton.resizeToFitContainer('width');

        expect(skeleton.width()).to.equal(Math.floor(w2));
        expect(skeleton.height()).to.equal(Math.floor(h1));
        expect(skeleton.width()).to.not.equal(w1);
        expect(skeleton.height()).to.not.equal(h2);
      });
      it('when mode is "height" should resize height to fit container but keep original width', function(){
        var w1 = element.clientWidth/2;
        var h1 = element.clientHeight*2;

        skeleton.dimension([w1, h1]);

        var w2 = element.clientWidth;
        var h2 = element.clientHeight;

        skeleton.resizeToFitContainer('height');

        expect(skeleton.width()).to.equal(Math.floor(w1));
        expect(skeleton.height()).to.equal(Math.floor(h2));
        expect(skeleton.width()).to.not.equal(w2);
        expect(skeleton.height()).to.not.equal(h1);
      });
    });

    describe('#resizeToAspectRatio(ratio)', function(){
      // todo
    });

    describe('#autoResize(mode)', function(){
      it('should return current mode when called without argument', function(){
        skeleton.autoResize(false);
        expect(skeleton.autoResize()).to.be.false;
        skeleton.autoResize('width');
        expect(skeleton.autoResize()).to.equal('width');
      });
      it('should enable auto resize when set mode to "width/height/both/etc.", similar to parameters of resizeToFitContainer()', function(done){
        // set initial size
        skeleton.width(50);
        skeleton.autoResize('width');
        setTimeout(function(){
          expect(skeleton.width()).to.equal(element.clientWidth);
          done();
        }, 500);
      });
      it('should disable auto resize when set mode to false', function(done){
        // set initial size
        skeleton.width(50);
        skeleton.autoResize('width');
        setTimeout(function(){
          expect(skeleton.width()).to.equal(element.clientWidth);
          // disable resize and
          skeleton.autoResize(false);
          skeleton.width(50);
          setTimeout(function(){
            expect(skeleton.width()).to.not.equal(element.clientWidth);
            done();
          }, 500);
        }, 500);
      });
    });

    describe('#autoResizeDetection(detection)', function(){
      // todo
    });

    describe('#autoResizeToAspectRatio(ratio)', function(){
      // todo
    });


});

describe.only('LayerOrganizer', function(){

  describe('new LayerOrganizer(container) will create layers as <g> by default', function(){
    var container: d3.Selection<any>, layers: d3kit.LayerOrganizer;
    before(function(done){
      container = d3.select('body').append('svg').append('g');
      layers = new d3kit.LayerOrganizer(container);
      done();
    });

    describe('#create(names)', function(){
      it('should create single layer given a String', function(){
        layers.create('single');
        expect(container.select('g.single-layer').size()).to.be.equal(1);
      });

      it('should create multiple layers given an array', function(){
        layers.create(['a', 'b', 'c']);
        expect(container.select('g.a-layer').size()).to.be.equal(1);
        expect(container.select('g.b-layer').size()).to.be.equal(1);
        expect(container.select('g.c-layer').size()).to.be.equal(1);
      });

      it('should create nested layers given a plain Object with a String inside', function(){
        layers.create({d: 'e'});
        expect(container.select('g.d-layer').size()).to.be.equal(1);
        expect(container.select('g.d-layer g.e-layer').size()).to.be.equal(1);
      });

      it('should create nested layers given a plain Object with an Array inside', function(){
        layers.create({f: ['g', 'h']});
        expect(container.select('g.f-layer').size()).to.be.equal(1);
        expect(container.select('g.f-layer g.g-layer').size()).to.be.equal(1);
        expect(container.select('g.f-layer g.h-layer').size()).to.be.equal(1);
      });

      it('should create multiple nested layers given an array of objects', function(){
        layers.create([{'i': ['x']}, {'j': 'x'}, {'k': ['x','y']}]);
        expect(container.select('g.i-layer').size()).to.be.equal(1);
        expect(container.select('g.j-layer').size()).to.be.equal(1);
        expect(container.select('g.k-layer').size()).to.be.equal(1);
        expect(container.select('g.i-layer g.x-layer').size()).to.be.equal(1);
        expect(container.select('g.i-layer g.x-layer').size()).to.be.equal(1);
        expect(container.select('g.k-layer g.x-layer').size()).to.be.equal(1);
        expect(container.select('g.k-layer g.y-layer').size()).to.be.equal(1);
      });

      it('should create multi-level nested layers given a nested plain Object', function(){
        layers.create({
          l: [
            'm',
            {'n': [
              {'o': ['p']}, 'q'
            ]}
          ]
        });
        expect(container.select('g.l-layer').size()).to.be.equal(1);
        expect(container.select('g.l-layer g.m-layer').size()).to.be.equal(1);
        expect(container.select('g.l-layer g.n-layer').size()).to.be.equal(1);
        expect(container.select('g.l-layer g.n-layer g.o-layer').size()).to.be.equal(1);
        expect(container.select('g.l-layer g.n-layer g.o-layer g.p-layer').size()).to.be.equal(1);
        expect(container.select('g.l-layer g.n-layer g.q-layer').size()).to.be.equal(1);
      });

    });

    describe('#has(name)', function(){
      it('should be able to check first-level layer', function(){
        expect(layers.has('single')).to.be.true;
        expect(layers.has('test')).to.be.false;
      });
      it('should be able to check second-level layer', function(){
        expect(layers.has('l.m')).to.be.true;
        expect(layers.has('l.x')).to.be.false;
      });
      it('should be able to check third-level layer', function(){
        expect(layers.has('l.n.q')).to.be.true;
        expect(layers.has('l.n.x')).to.be.false;
      });
    });

    describe('#get(name)', function(){
      it('should be able to get first-level layer', function(){
        expect(layers.get('single')).to.exist;
        expect(layers.get('test')).to.be.not.exist;
      });
      it('should be able to get second-level layer', function(){
        expect(layers.get('l.m')).to.exist;
        expect(layers.get('l.x')).to.not.exist;
      });
      it('should be able to get third-level layer', function(){
        expect(layers.get('l.n.o')).to.exist;
        expect(layers.get('l.n.x')).to.not.exist;
      });
    });
  });

  describe('new LayerOrganizer(container, tag) will create layers with the given tag instead of <g>', function(){
    var container: d3.Selection<any>, layers: d3kit.LayerOrganizer;
    before(function(done){
      container = d3.select('body').append('div');
      layers = new d3kit.LayerOrganizer(container, 'div');
      done();
    });

    describe('#create(names)', function(){
      it('should create single layer given a String', function(){
        layers.create('single');
        expect(container.select('div.single-layer').size()).to.be.equal(1);
      });

      it('should create multiple layers given an array', function(){
        layers.create(['a', 'b', 'c']);
        expect(container.select('div.a-layer').size()).to.be.equal(1);
        expect(container.select('div.b-layer').size()).to.be.equal(1);
        expect(container.select('div.c-layer').size()).to.be.equal(1);
      });

      it('should create nested layers given a plain Object with a String inside', function(){
        layers.create({d: 'e'});
        expect(container.select('div.d-layer').size()).to.be.equal(1);
        expect(container.select('div.d-layer div.e-layer').size()).to.be.equal(1);
      });

      it('should create nested layers given a plain Object with an Array inside', function(){
        layers.create({f: ['g', 'h']});
        expect(container.select('div.f-layer').size()).to.be.equal(1);
        expect(container.select('div.f-layer div.g-layer').size()).to.be.equal(1);
        expect(container.select('div.f-layer div.h-layer').size()).to.be.equal(1);
      });

      it('should create multiple nested layers given an array of objects', function(){
        layers.create([{'i': ['x']}, {'j': 'x'}, {'k': ['x','y']}]);
        expect(container.select('div.i-layer').size()).to.be.equal(1);
        expect(container.select('div.j-layer').size()).to.be.equal(1);
        expect(container.select('div.k-layer').size()).to.be.equal(1);
        expect(container.select('div.i-layer div.x-layer').size()).to.be.equal(1);
        expect(container.select('div.i-layer div.x-layer').size()).to.be.equal(1);
        expect(container.select('div.k-layer div.x-layer').size()).to.be.equal(1);
        expect(container.select('div.k-layer div.y-layer').size()).to.be.equal(1);
      });

      it('should create multi-level nested layers given a nested plain Object', function(){
        layers.create({
          l: [
            'm',
            {'n': [
              {'o': ['p']}, 'q'
            ]}
          ]
        });
        expect(container.select('div.l-layer').size()).to.be.equal(1);
        expect(container.select('div.l-layer div.m-layer').size()).to.be.equal(1);
        expect(container.select('div.l-layer div.n-layer').size()).to.be.equal(1);
        expect(container.select('div.l-layer div.n-layer div.o-layer').size()).to.be.equal(1);
        expect(container.select('div.l-layer div.n-layer div.o-layer div.p-layer').size()).to.be.equal(1);
        expect(container.select('div.l-layer div.n-layer div.q-layer').size()).to.be.equal(1);
      });

    });

    describe('#has(name)', function(){
      it('should be able to check first-level layer', function(){
        expect(layers.has('single')).to.be.true;
        expect(layers.has('test')).to.be.false;
      });
      it('should be able to check second-level layer', function(){
        expect(layers.has('l.m')).to.be.true;
        expect(layers.has('l.x')).to.be.false;
      });
      it('should be able to check third-level layer', function(){
        expect(layers.has('l.n.q')).to.be.true;
        expect(layers.has('l.n.x')).to.be.false;
      });
    });

    describe('#get(name)', function(){
      it('should be able to get first-level layer', function(){
        expect(layers.get('single')).to.exist;
        expect(layers.get('test')).to.be.not.exist;
      });
      it('should be able to get second-level layer', function(){
        expect(layers.get('l.m')).to.exist;
        expect(layers.get('l.x')).to.not.exist;
      });
      it('should be able to get third-level layer', function(){
        expect(layers.get('l.n.o')).to.exist;
        expect(layers.get('l.n.x')).to.not.exist;
      });
    });
  });

});

describe('Chartlet', function(){
  interface ConfigureFunction {
      (parent: d3kit.Chartlet, child: d3kit.Chartlet): void;
  }
  var enter: d3kit.ChartletEventFunction, update: d3kit.ChartletEventFunction, exit: d3kit.ChartletEventFunction, chartlet: d3kit.Chartlet;
  var customEvents: Array<string> = ['fooEvent'];
  var ChildChartlet: () => d3kit.Chartlet;
  var ParentChartlet: (configureFunction: ConfigureFunction) => d3kit.Chartlet;

  var callback = function(selection?: d3.Selection<any>, done?: any) { return (sel: d3.Selection<any>) => {done();};};
  beforeEach(function(done){
    ChildChartlet = function() {
      var chartlet = new d3kit.Chartlet(callback, callback, callback);
      (<any>chartlet).runTest = function (testFunction: any) {
        testFunction(chartlet);
      };
      return chartlet;
    };

    ParentChartlet = function(configureFunction: ConfigureFunction) {
      var chartlet = new d3kit.Chartlet(callback, callback, callback);
      var child = ChildChartlet();
      configureFunction(chartlet, child);
      (<any>chartlet).runTest = (<any>child).runTest;
      return chartlet;
    };

    enter  = callback;
    update = callback;
    exit   = callback;
    chartlet = new d3kit.Chartlet(enter, update, exit, customEvents);
    done();
  });

  describe('new Chartlet(enter, update, exit, customEvents)', function(){
    it('should create a chartlet', function(){
      expect(chartlet).to.be.an('Object');
      expect(chartlet).to.include.keys(['property', 'on']);
      expect(chartlet.enter).to.be.a('Function');
      expect(chartlet.update).to.be.a('Function');
      expect(chartlet.exit).to.be.a('Function');
      expect(function(){ chartlet.enter(); }).to.not.throw(Error);
      expect(function(){ chartlet.update(); }).to.not.throw(Error);
      expect(function(){ chartlet.exit(); }).to.not.throw(Error);
      expect(chartlet.getCustomEventNames()).to.deep.equal(customEvents);
    });
    it('arguments "update", "exit" and "customEvents" are optional', function(){
      var comp = new d3kit.Chartlet(enter);
      expect(comp).to.be.an('Object');
      expect(comp).to.include.keys(['property', 'on']);
      expect(comp.enter).to.be.a('Function');
      expect(comp.update).to.be.a('Function');
      expect(comp.exit).to.be.a('Function');
      expect(function(){ comp.enter(); }).to.not.throw(Error);
      expect(function(){ comp.update(); }).to.not.throw(Error);
      expect(function(){ comp.exit(); }).to.not.throw(Error);
    });
  });

  describe('#getDispatcher()', function(){
    it('should return a dispatcher', function(){
      var dispatcher = chartlet.getDispatcher();
      expect(dispatcher).to.exist;
    });
    it('returned dispatcher should handle enter/update/exit events', function(){
      var dispatcher = chartlet.getDispatcher();
      expect(dispatcher).to.include.keys(['enterDone', 'updateDone', 'exitDone'].concat(customEvents));
    });
  });

  describe('#getPropertyValue(name, d, i)', function(){
    it('should return computed value for specified property name, d and i', function(){
      var d = {a: 99};
      var i = 2;

      chartlet.property('foo', 1);
      chartlet.property('bar', 'two');
      chartlet.property('baz', function(d:{a:number}, i: number) {return 3;});
      chartlet.property('qux', function(d:{a:number}, i: number) {return 'four';});
      chartlet.property('nux', function(d:{a:number}, i: number) {return d.a * i;});

      expect(chartlet.getPropertyValue('foo', d, i)).to.equal(1);
      expect(chartlet.getPropertyValue('bar', d, i)).to.equal('two');
      expect(chartlet.getPropertyValue('baz', d, i)).to.equal(3);
      expect(chartlet.getPropertyValue('qux', d, i)).to.equal('four');
      expect(chartlet.getPropertyValue('nux', d, i)).to.equal(198);
    });
  });

  describe('#property(name, valueOrFn)', function(){
    describe('should act as a getter when called with one argument', function(){
      it('should always return a function', function(){
        chartlet.property('foo', 1);
        expect(chartlet.property('foo')).to.be.a('Function');
        chartlet.property('bar', function(){ return 100; });
        expect(chartlet.property('bar')).to.be.a('Function');
      });
      it('should return a function that return undefined for unknown property name', function(){
        expect(chartlet.property('unknown name')).to.be.a('Function');
        expect(chartlet.property('unknown name')()).to.equal(undefined);
      });
    });

    describe('should act as a setter when called with two arguments', function(){
      it('should set specified property to a functor of given value', function(){
        chartlet.property('foo', 1);
        expect(chartlet.property('foo')).to.be.a('Function');
        expect(chartlet.property('foo')()).to.equal(1);
        chartlet.property('bar', function(){ return 100; });
        expect(chartlet.property('bar')).to.be.a('Function');
        expect(chartlet.property('bar')()).to.equal(100);
      });
      it('should overwrite previous value when set property with the same name', function(){
        chartlet.property('foo', 1);
        expect(chartlet.property('foo')()).to.equal(1);
        chartlet.property('foo', 100);
        expect(chartlet.property('foo')()).to.equal(100);
      });
    });
  });

  describe('#on(eventName, listener)', function(){
    it('event "enterDone" should be triggered after chartlet.enter() is completed.', function(done){
      chartlet.on('enterDone', function(){ return (sel: d3.Selection<any>) => {done();} });
      chartlet.enter();
    });
    it('event "updateDone" should be triggered after chartlet.update() is completed.', function(done){
      chartlet.on('updateDone', function(){ return (sel: d3.Selection<any>) => {done();} });
      chartlet.update();
    });
    it('event "exitDone" should be triggered after chartlet.exit() is completed.', function(done){
      chartlet.on('exitDone', function(){ return (sel: d3.Selection<any>) => {done();} });
      chartlet.exit();
    });
  });

  describe('#inheritPropertyFrom(parentChartlet, parentPropertyName, childPropertyName)', function(){
    it('it should cause a child to inherit a parent property', function() {
      var parent = ParentChartlet(function(parent: d3kit.Chartlet, child: d3kit.Chartlet) {
          child.inheritPropertyFrom(parent, 'foo', 'bar');
        })
        .property('foo', function(d:number) {return 2 * d;});

      (<any>parent).runTest(function(child: d3kit.Chartlet) {
        expect(child.getPropertyValue('bar', 4, 0)).to.be.equal(8);
      });
    });

    it('it should default to the parent property name', function() {
      var parent = ParentChartlet(
        function(parent: d3kit.Chartlet, child: d3kit.Chartlet) {
          child.inheritPropertyFrom(parent, 'foo');
        })
        .property('foo', function(d:number) {return 2 * d;});

      (<any>parent).runTest(function(child: d3kit.Chartlet) {
        expect(child.getPropertyValue('foo', 4, 0)).to.be.equal(8);
      });
    });
  });

  describe('#inheritProperties(parentChartlet, parentPropertyNames, childPropertyNames)', function(){
    it('it should cause a child to inherit many parent properties', function() {
      var parent = ParentChartlet(
        function(parent: d3kit.Chartlet, child: d3kit.Chartlet) {
          child.inheritPropertiesFrom(parent, ['foo', 'bar', 'baz'], ['foo-x', 'bar-x', 'baz-x']);
        })
        .property('foo', function(d:number) {return 2 * d;})
        .property('bar', function(d:number) {return 3 * d;})
        .property('baz', function(d:number) {return 4 * d;});

      (<any>parent).runTest(function(child: d3kit.Chartlet) {
        expect(child.getPropertyValue('foo-x', 1, 0)).to.be.equal(2);
        expect(child.getPropertyValue('bar-x', 1, 0)).to.be.equal(3);
        expect(child.getPropertyValue('baz-x', 1, 0)).to.be.equal(4);
      });
    });

    it('it should default to the parent property names', function() {
      var parent = ParentChartlet(
        function(parent: d3kit.Chartlet, child: d3kit.Chartlet) {
          child.inheritPropertiesFrom(parent, ['foo', 'bar', 'baz']);
        })
        .property('foo', function(d:number) {return 2 * d;})
        .property('bar', function(d:number) {return 3 * d;})
        .property('baz', function(d:number) {return 4 * d;});

      (<any>parent).runTest(function(child: d3kit.Chartlet) {
        expect(child.getPropertyValue('foo', 1, 0)).to.be.equal(2);
        expect(child.getPropertyValue('bar', 1, 0)).to.be.equal(3);
        expect(child.getPropertyValue('baz', 1, 0)).to.be.equal(4);
      });
    });
  });

  describe('#publishEventsTo(foreignDispatcher)', function(){
    it('should map events to a foreignDispatcher', function(done) {

      var parent = new d3kit.Chartlet(callback, callback, callback, ['foo']);
      parent.getDispatcher().on('foo', function(value:number) {
        expect(value).to.be.equal(99);
        done();
      });

      var child = new d3kit.Chartlet(callback, callback, callback, ['foo'])
        .publishEventsTo(parent.getDispatcher());

      (<any>child.getDispatcher()).foo(99);
    });
  });
});

describe('#createChart', function(){
  var Chart = d3kit.factory.createChart({}, ['test'], function(skeleton: d3kit.Skeleton){
    return skeleton;
  });

  it('should return a function to create a chart', function(){
    expect(Chart).to.be.a('Function');
  });

  // // Don't think it's possible to define these in a d.ts file; skipping
  // it('results should have function getCustomEvents()', function(){
  //   expect(Chart.getCustomEvents).to.exist;
  //   expect(Chart.getCustomEvents()).to.deep.equal(['test']);
  // });
});

describe('d3kit.helper', function(){

  describe('#dasherize(str)', function(){
    it('should convert input to dash-case', function(){
      expect(d3kit.helper.dasherize('camelCase')).to.equal('camel-case');
    });
  });

  describe('#deepExtend(target, src1, src2, ...)', function(){
    it('should copy fields from sources into target', function(){
      expect(d3kit.helper.deepExtend({}, {
        a: 1,
        b: 2
      },{
        b: 3,
        c: 4
      })).to.deep.equal({
        a: 1,
        b: 3,
        c: 4
      });

      expect(d3kit.helper.deepExtend({}, {
        a: 1,
        b: 2
      },{
        b: 3,
        c: 4
      }, null)).to.deep.equal({
        a: 1,
        b: 3,
        c: 4
      });
    });

    it('should copy arrays and functions correctly from sources into target', function(){
      var fn1 = function(d:number){return d + 1;};
      var fn2 = function(d:number){return d + 2;};
      expect(d3kit.helper.deepExtend({}, {
        a: fn1,
        b: [1,2]
      },{
        b: [3,4],
        c: fn2
      })).to.deep.equal({
        a: fn1,
        b: [3,4],
        c: fn2
      });
    });

    it('should perform "deep" copy', function(){
      var fn1 = function(d:number){return d + 1;};
      var fn2 = function(d:number){return d + 2;};
      expect(d3kit.helper.deepExtend({}, {
        a: { d: fn1 },
        b: [1,2],
        c: { f: 3 },
        h: { i: [1,2,3], j: [3,4,5] }
      },{
        a: { e: 2 },
        b: [3,4],
        c: { f: 4, g: fn2 },
        h: { i: [2,3,4], k: [3,4,5], l: {m: 2} }
      })).to.deep.equal({
        a: { d: fn1, e: 2 },
        b: [3,4],
        c: { f: 4, g: fn2 },
        h: { i: [2,3,4], j: [3,4,5], k: [3,4,5], l: {m: 2} }
      });
    });
  });

  describe('#extend(target, src1, src2, ...)', function(){
    it('should copy fields from sources into target', function(){
      expect(d3kit.helper.extend({}, {
        a: 1,
        b: 2
      },{
        b: 3,
        c: 4
      })).to.deep.equal({
        a: 1,
        b: 3,
        c: 4
      });

      expect(d3kit.helper.extend({}, {
        a: 1,
        b: 2
      },{
        b: 3,
        c: 4
      }, null)).to.deep.equal({
        a: 1,
        b: 3,
        c: 4
      });
    });

    it('should copy arrays and functions correctly from sources into target', function(){
      var fn1 = function(d:number){return d + 1;};
      var fn2 = function(d:number){return d + 2;};
      expect(d3kit.helper.extend({}, {
        a: fn1,
        b: [1,2]
      },{
        b: [3,4],
        c: fn2
      })).to.deep.equal({
        a: fn1,
        b: [3,4],
        c: fn2
      });
    });

    it('should NOT perform "deep" copy', function(){
      var fn1 = function(d:number){return d + 1;};
      var fn2 = function(d:number){return d + 2;};
      expect(d3kit.helper.extend({}, {
        a: { d: fn1 },
        b: [1,2],
        c: { f: 3 },
        h: { i: [1,2,3], j: [3,4,5] }
      },{
        a: { e: 2 },
        b: [3,4],
        c: { f: 4, g: fn2 },
        h: { i: [2,3,4], k: [3,4,5], l: {m: 2} }
      })).to.deep.equal({
        a: { e: 2 },
        b: [3,4],
        c: { f: 4, g: fn2 },
        h: { i: [2,3,4], k: [3,4,5], l: {m: 2} }
      });
    });
  });

  describe('#isFunction(function)', function(){
    it('should return true if the value is a function', function(){
      var fn1 = function(d:number){return d + 1;};
      function fn2(d:number){return d + 2;}

      expect(d3kit.helper.isFunction(fn1)).to.be.true;
      expect(d3kit.helper.isFunction(fn2)).to.be.true;
    });
    it('should return false if the value is not a function', function(){
      expect(d3kit.helper.isFunction(0)).to.be.false;
      expect(d3kit.helper.isFunction(1)).to.be.false;
      expect(d3kit.helper.isFunction(true)).to.be.false;
      expect(d3kit.helper.isFunction('what')).to.be.false;
      expect(d3kit.helper.isFunction(null)).to.be.false;
      expect(d3kit.helper.isFunction(undefined)).to.be.false;
    });
  });

  describe('#isNumber(value)', function(){
    it('should return true for number', function(){
      expect(d3kit.helper.isNumber(1)).to.be.true;
      expect(d3kit.helper.isNumber(0)).to.be.true;
      expect(d3kit.helper.isNumber(-1)).to.be.true;
    });
    it('should return false for string even if it is a number', function(){
      expect(d3kit.helper.isNumber('')).to.be.false;
      expect(d3kit.helper.isNumber('1')).to.be.false;
      expect(d3kit.helper.isNumber('0')).to.be.false;
      expect(d3kit.helper.isNumber('what')).to.be.false;
    });
    it('should return false for null and undefined', function(){
      expect(d3kit.helper.isNumber(null)).to.be.false;
      expect(d3kit.helper.isNumber(undefined)).to.be.false;
    });
  });
});

