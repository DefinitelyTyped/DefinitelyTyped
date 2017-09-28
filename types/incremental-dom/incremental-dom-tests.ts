/// <reference types="mocha" />
declare var expect: any;

import id = require('incremental-dom');
var patch = id.patch;
var elementVoid = id.elementVoid;

describe('attribute updates', () => {
  var container:any;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  describe('for conditional attributes', () => {
    function render(obj:any) {
      elementVoid('div', '', [],
          'data-expanded', obj.key);
    }

    it('should be present when they have a value', () => {
      patch(container, () => render({
        key: 'hello'
      }));
      var el = container.childNodes[0];

      expect(el.getAttribute('data-expanded')).to.equal('hello');
    });

    it('should be present when falsy', () => {
      patch(container, () => render({
        key: false
      }));
      var el = container.childNodes[0];

      expect(el.getAttribute('data-expanded')).to.equal('false');
    });

    it('should be not present when undefined', () => {
      patch(container, () => render({
        key: undefined
      }));
      var el = container.childNodes[0];

      expect(el.getAttribute('data-expanded')).to.equal(null);
    });

    it('should update the DOM when they change', () => {
      patch(container, () => render({
        key: 'foo'
      }));
      patch(container, () => render({
        key: 'bar'
      }));
      var el = container.childNodes[0];

      expect(el.getAttribute('data-expanded')).to.equal('bar');
    });
  });

  describe('for function attributes', () => {
    it('should not be set as attributes', () => {
      var fn = () =>{};
      patch(container, () => {
        elementVoid('div', '', null,
            'fn', fn);
      });
      var el = container.childNodes[0];

      expect(el.hasAttribute('fn')).to.be.false;
    });

    it('should be set on the node', () => {
      var fn = () =>{};
      patch(container, () => {
        elementVoid('div', '', null,
            'fn', fn);
      });
      var el = container.childNodes[0];

      expect(el.fn).to.equal(fn);
    });
  });

  describe('for object attributes', () => {
    it('should not be set as attributes', () => {
      var obj = {};
      patch(container, () => {
        elementVoid('div', '', null,
            'obj', obj);
      });
      var el = container.childNodes[0];

      expect(el.hasAttribute('obj')).to.be.false;
    });

    it('should be set on the node', () => {
      var obj = {};
      patch(container, () => {
        elementVoid('div', '', null,
            'obj', obj);
      });
      var el = container.childNodes[0];

      expect(el.obj).to.equal(obj);
    });
  });

  describe('for style', () => {
    function render(style:any) {
      elementVoid('div', '', [],
          'style', style);
    }

    it('should render with the correct style properties for objects', () => {
      patch(container, () => render({
        color: 'white',
        backgroundColor: 'red'
      }));
      var el = container.childNodes[0];

      expect(el.style.color).to.equal('white');
      expect(el.style.backgroundColor).to.equal('red');
    });

    it('should update the correct style properties', () => {
      patch(container, () => render({
        color: 'white'
      }));
      patch(container, () => render({
        color: 'red'
      }));
      var el = container.childNodes[0];

      expect(el.style.color).to.equal('red');
    });

    it('should remove properties not present in the new object', () => {
      patch(container, () => render({
        color: 'white'
      }));
      patch(container, () => render({
        backgroundColor: 'red'
      }));
      var el = container.childNodes[0];

      expect(el.style.color).to.equal('');
      expect(el.style.backgroundColor).to.equal('red');
    });

    it('should render with the correct style properties for strings', () => {
      patch(container, () => render('color: white; background-color: red;'));
      var el = container.childNodes[0];

      expect(el.style.color).to.equal('white');
      expect(el.style.backgroundColor).to.equal('red');
    });

    it('should render with the correct style properties for String instances', () => {
      patch(container, () => render(new String('color: white; background-color: red;')));
      var el = container.childNodes[0];

      expect(el.style.color).to.equal('white');
      expect(el.style.backgroundColor).to.equal('red');
    });
  });
});
