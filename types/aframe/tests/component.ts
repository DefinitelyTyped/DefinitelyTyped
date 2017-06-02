import 'aframe';
import { describe, beforeEach, afterEach, it } from 'intern!bdd';
import * as expect from 'intern/chai!expect';

describe('components', () => {
	let Component: AFrame.ComponentConstructor;

	afterEach(() => {
		if (Component) {
			delete AFRAME.components[Component.prototype.name];
		}
	});

	describe('basic component', () => {
		beforeEach(() => {
			Component = AFRAME.registerComponent('test', {});
		});

		it('has the expected shape', () => {
			expect(Component).to.exist;
			const entity: AFrame.Entity = <any> document.createElement('a-entity');
			const component = new Component(entity, 'test', 'test');

			expect(component.attrName).to.exist;
			expect(component.el).to.exist;
			expect(component.id).to.exist;
			expect(component.name).to.exist;
			expect(component.schema).to.exist;

			expect(component.data).to.not.exist;
			expect(component.dependencies).to.not.exist;
			expect(component.multiple).to.not.exist;
			expect(component.tick).to.not.exist;

			expect(component.init).to.be.a('function');
			expect(component.update).to.be.a('function');
			expect(component.remove).to.be.a('function');
			expect(component.play).to.be.a('function');
			expect(component.pause).to.be.a('function');
			expect(component.remove).to.be.a('function');
			expect(component.flushToDOM).to.be.a('function');
			expect(component.extendSchema).to.be.a('function');
		});
	});
});
