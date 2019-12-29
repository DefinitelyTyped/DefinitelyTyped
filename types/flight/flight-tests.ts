
declare var el: Element;
declare var els: HTMLElement[];
declare var mixinFn: Function;

function TestComponent() {
    var self: Flight.Component = this;      
	
    self.attributes({
       fooSelector: '.bar'
    });    
	
    self.defaultAttrs({
       fooSelector: '.bar'
    });

    this.onClick = function (ev: JQueryEventObject, data: Flight.EventData) {
        var el: HTMLElement = data.el;
        self.select('fooSelector').addClass('bar');
    };

    self.around('initialize', function () { });
    self.before('initialize', function () { });
    self.after("initialize", function () {

        var $node: JQuery = self.$node;
        var node: Element = self.node;

        self.on(el, 'click', {});
        self.on(els, 'click', function () { });
        self.on(document, 'click', this.onClick);
        self.on('click', function () { });
        self.on('click', {
            fooSelector: this.onClick
        });

        self.off('click', function () { });
        self.off(document, 'click');
        self.off(el, 'click')
        self.off(els, 'click');

        self.teardown();
    });
}

flight.component(TestComponent, mixinFn).attachTo(el);  
flight.component(TestComponent, mixinFn).attachTo($(els));  
flight.component(TestComponent, mixinFn).attachTo('.test');
flight.component(TestComponent, mixinFn).attachTo('.test', {
    some: 'data'
});

flight.component.teardownAll();
