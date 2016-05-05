/// <reference path="../aurelia-dependency-injection.d.ts" />
/// <reference path="../../karma-jasmine/karma-jasmine.d.ts" />
import {Container, Parent} from 'aurelia-dependency-injection';

export var run = () => {
    describe('Parent', () => {
        it('should return the key from the parent container when present', () => {
            var sut = new Parent("test"),
                parent = new Container(),
                childContainer = parent.createChild(),
                instance = {},
                wrongInstance = {};

            parent.registerInstance("test", instance);
            childContainer.registerInstance("test", wrongInstance);

            var result = sut.get(childContainer);

            expect(result).toBe(instance);
            expect(result).not.toBe(wrongInstance);
        });

        it('should return null when the parent container is not present', () => {
            var sut = new Parent("test"),
                childContainer = new Container(),
                instance = {};

            childContainer.registerInstance("test", instance);
            expect(sut.get(childContainer)).toBe(null);
        });
    });
}