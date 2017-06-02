import 'aframe';
import { describe, it } from 'intern!bdd';
import * as expect from 'intern/chai!expect';

/**
 * A-Frame exposes its public interface through the window.AFRAME browser global.
 */
describe('aframe global', () => {
	describe('AFRAME', () => {
		it('has the expected shape', () => {
			expect(AFRAME).to.exist;

			expect(AFRAME.components).to.exist;
			expect(AFRAME.geometries).to.exist;
			expect(AFRAME.primitives).to.exist;
			expect(AFRAME.schema).to.exist;
			expect(AFRAME.shaders).to.exist;
			expect(AFRAME.systems).to.exist;
			expect(AFRAME.THREE).to.exist;
			expect(AFRAME.TWEEN).to.exist;
			expect(AFRAME.utils).to.exist;
			expect(AFRAME.version).to.exist;

			expect(AFRAME.AEntity).to.be.a('function');
			expect(AFRAME.ANode).to.be.a('function');
			expect(AFRAME.AScene).to.be.a('function');
			expect(AFRAME.registerComponent).to.be.a('function');
			expect(AFRAME.registerElement).to.be.a('function');
			expect(AFRAME.registerGeometry).to.be.a('function');
			expect(AFRAME.registerPrimitive).to.be.a('function');
		});
	});

	it('hasNativeWebVRImplementation', () => {
		expect(window).to.have.property('hasNativeWebVRImplementation');
	});
});
